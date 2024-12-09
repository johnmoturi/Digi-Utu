import { useState } from "react"
import { toast } from "sonner"
import { supabase } from "@/integrations/supabase/client"
import { SignUpFormValues } from "@/lib/validations/signup"
import { useNavigate } from "react-router-dom"

export function useSignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const signUp = async (values: SignUpFormValues) => {
    try {
      setIsLoading(true)
      console.log("Starting signup process with values:", values)
      
      const { data, error } = await supabase.auth.signUp({
        email: values.email,
        password: values.password,
        options: {
          data: {
            full_name: values.fullName,
            user_type: values.userType,
          },
        },
      })

      if (error) {
        console.error("Signup error:", error)
        toast.error(error.message)
        return false
      }

      console.log("Signup successful:", data)
      toast.success("Account created successfully!")
      navigate("/dashboard")
      return true
      
    } catch (error) {
      console.error("Unexpected error:", error)
      toast.error("Something went wrong. Please try again.")
      return false
    } finally {
      setIsLoading(false)
    }
  }

  return { signUp, isLoading }
}