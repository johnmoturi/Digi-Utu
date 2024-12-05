import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Users, BookOpen, Building2, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Your Ultimate Partner for Talent Discovery
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Whether you're a company seeking the perfect fit for your team or a professional looking for the next big opportunity, our platform bridges the gap with a humanized, tech-driven approach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Find Talent <ArrowRight className="ml-2" />
            </Button>
            <Button size="lg" variant="outline">
              Explore Opportunities <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Recruitment Services</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  From software engineers to marketers, we ensure precision hiring with AI-driven matching for skills and culture fit.
                </p>
                <Button variant="link" className="mt-4 p-0">
                  Learn More About Hiring Solutions <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <BookOpen className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>Career Coaching</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Unlock your potential with personalized coaching services, from career transitions to leadership development.
                </p>
                <Button variant="link" className="mt-4 p-0">
                  Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Building2 className="h-10 w-10 text-purple-600 mb-2" />
                <CardTitle>HR Consulting</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Comprehensive HR solutions including strategy development, compliance, and employee experience enhancement.
                </p>
                <Button variant="link" className="mt-4 p-0">
                  Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold mb-4">For Employers</h3>
              <div className="space-y-4">
                {["Define your needs", "Let our system source the best candidates", "Hire smarter and faster"].map((step, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
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
                    <CheckCircle className="h-6 w-6 text-purple-600 flex-shrink-0" />
                    <p className="text-gray-600">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Sign Up Now <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
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
              <Card key={index}>
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
            <Button size="lg" variant="outline">
              Discover More <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;