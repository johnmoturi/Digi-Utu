import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { FormFields } from "./signup/FormFields"
import { signUpFormSchema, type SignUpFormValues } from "@/lib/validations/signup"
import { useSignUp } from "@/hooks/useSignUp"

export function SignUpForm() {
  const { signUp, isLoading } = useSignUp()

  const form = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      userType: undefined,
    },
  })

  async function onSubmit(values: SignUpFormValues) {
    const success = await signUp(values)
    if (success) {
      form.reset()
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full max-w-md mx-auto">
        <FormFields form={form} />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Creating account..." : "Sign Up"}
        </Button>
      </form>
    </Form>
  )
}