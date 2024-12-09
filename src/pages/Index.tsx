import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Building2, CheckCircle } from "lucide-react";
import { lazy, Suspense, useEffect } from 'react';
import { SignUpForm } from "@/components/SignUpForm";
import { useSession, useSupabaseClient } from '@supabase/auth-helpers-react';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const session = useSession();
  const supabase = useSupabaseClient();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      console.log("Auth state changed:", event, session);
      if (session) {
        // User is signed in, you can redirect them or update UI
        console.log("User is signed in:", session.user);
      }
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#F85A20]/5 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-start mb-12">
            <img 
              src="/lovable-uploads/e24fa158-cf3d-4691-bc73-76dac98d01ca.png" 
              alt="Digi-Utu Logo" 
              className="h-[120px] md:h-[140px]"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Ultimate Partner for Talent Discovery
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Whether you're a company seeking the perfect fit for your team or a professional looking for the next big opportunity, our platform bridges the gap with a humanized, tech-driven approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-[#F85A20] hover:bg-[#F85A20]/90 text-white">
                Find Talent <ArrowRight className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="border-[#F85A20] text-[#F85A20] hover:bg-[#F85A20]/10">
                Explore Opportunities <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Suspense fallback={<div className="p-4 text-center">Loading services...</div>}>
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-[#F85A20]/20 hover:border-[#F85A20] transition-colors">
                <CardHeader>
                  <Users className="h-10 w-10 text-[#F85A20] mb-2" />
                  <CardTitle>Recruitment Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    From software engineers to marketers, we ensure precision hiring with AI-driven matching for skills and culture fit.
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-[#F85A20]">
                    Learn More About Hiring Solutions <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-[#F85A20]/20 hover:border-[#F85A20] transition-colors">
                <CardHeader>
                  <BookOpen className="h-10 w-10 text-[#F85A20] mb-2" />
                  <CardTitle>Career Coaching</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Unlock your potential with personalized coaching services, from career transitions to leadership development.
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-[#F85A20]">
                    Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-[#F85A20]/20 hover:border-[#F85A20] transition-colors">
                <CardHeader>
                  <Building2 className="h-10 w-10 text-[#F85A20] mb-2" />
                  <CardTitle>HR Consulting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Comprehensive HR solutions including strategy development, compliance, and employee experience enhancement.
                  </p>
                  <Button variant="link" className="mt-4 p-0 text-[#F85A20]">
                    Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </Suspense>

      {/* How It Works Section */}
      <Suspense fallback={<div className="p-4 text-center">Loading how it works...</div>}>
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">For Employers</h3>
                <div className="space-y-4">
                  {["Define your needs", "Let our system source the best candidates", "Hire smarter and faster"].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-[#F85A20] flex-shrink-0" />
                      <p className="text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-semibold mb-4">For Job Seekers</h3>
                <div className="space-y-4">
                  {["Create a profile", "Receive curated opportunities", "Land your dream role"].map((step, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-[#F85A20] flex-shrink-0" />
                      <p className="text-gray-600">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <Button size="lg" className="bg-[#F85A20] hover:bg-[#F85A20]/90">
                Sign Up Now <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </Suspense>

      {/* Sign Up Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-[#F85A20]/5 to-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Create Your Account</h2>
          <SignUpForm />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <Suspense fallback={<div className="p-4 text-center">Loading benefits...</div>}>
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Digi-Utu Africa</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Meets Human Expertise",
                  description: "Cutting-edge technology with personalized support."
                },
                {
                  title: "Comprehensive Solutions",
                  description: "From recruitment to career growth and HR consulting."
                },
                {
                  title: "Commitment to Africa",
                  description: "Empowering talent and businesses across the continent."
                }
              ].map((item, index) => (
                <Card key={index} className="border-[#F85A20]/20 hover:border-[#F85A20] transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" variant="outline" className="border-[#F85A20] text-[#F85A20] hover:bg-[#F85A20]/10">
                Discover More <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </section>
      </Suspense>
    </div>
  );
};

// Add performance monitoring
if (process.env.NODE_ENV === 'development') {
  console.log('Page loaded at:', performance.now());
}

export default Index;
