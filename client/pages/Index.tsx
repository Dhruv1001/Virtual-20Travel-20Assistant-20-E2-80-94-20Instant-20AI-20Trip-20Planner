import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Calendar,
  Heart,
  Download,
  Plane,
  Camera,
  Mountain,
  UtensilsCrossed,
  Clock,
  Star,
  ArrowRight,
  Globe,
  Compass,
  Route,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Index() {
  const [destination, setDestination] = useState("");
  const [email, setEmail] = useState("");

  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-travel-ocean" />,
      title: "Smart Destination Discovery",
      description:
        "AI-powered recommendations based on your interests, budget, and travel style.",
    },
    {
      icon: <Calendar className="h-8 w-8 text-travel-sunset" />,
      title: "Optimal Date Planning",
      description:
        "Find the perfect time to travel with weather insights, seasonal events, and crowd predictions.",
    },
    {
      icon: <Heart className="h-8 w-8 text-travel-forest" />,
      title: "Personalized Preferences",
      description:
        "Tailor your journey by cuisine, nature, history, adventure level, and cultural interests.",
    },
    {
      icon: <Download className="h-8 w-8 text-travel-sand" />,
      title: "Detailed PDF Itineraries",
      description:
        "Generate comprehensive travel guides with maps, schedules, and local insights to download.",
    },
  ];

  const preferences = [
    {
      icon: <UtensilsCrossed className="h-5 w-5" />,
      label: "Cuisine",
      color: "bg-travel-sunset",
    },
    {
      icon: <Mountain className="h-5 w-5" />,
      label: "Nature",
      color: "bg-travel-forest",
    },
    {
      icon: <Camera className="h-5 w-5" />,
      label: "History",
      color: "bg-travel-sand",
    },
    {
      icon: <Plane className="h-5 w-5" />,
      label: "Adventure",
      color: "bg-travel-ocean",
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Tell Us Your Dreams",
      description:
        "Share your travel preferences, budget, and what excites you most about exploring.",
    },
    {
      step: "02",
      title: "AI Magic Happens",
      description:
        "Our intelligent system analyzes destinations, weather, events, and local insights.",
    },
    {
      step: "03",
      title: "Get Your Perfect Plan",
      description:
        "Receive a detailed PDF itinerary with everything you need for an amazing trip.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-travel-sky/30 via-white to-travel-sand/20">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-travel-ocean to-travel-sunset p-2 rounded-lg">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-travel-ocean to-travel-sunset bg-clip-text text-transparent">
              WanderAI
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <a
              href="#features"
              className="text-gray-600 hover:text-travel-ocean transition-colors"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-600 hover:text-travel-ocean transition-colors"
            >
              How It Works
            </a>
            <Button variant="outline" size="sm">
              Sign In
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-6 bg-travel-sky/20 text-travel-ocean border-travel-ocean/30">
            <Globe className="h-3 w-3 mr-1" />
            AI-Powered Travel Planning
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-travel-ocean via-travel-sunset to-travel-forest bg-clip-text text-transparent leading-tight">
            Your Perfect Journey
            <br />
            Awaits Discovery
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let AI craft your ideal travel experience. From hidden gems to
            perfect timing, we turn your preferences into unforgettable
            adventures with detailed PDF guides.
          </p>

          {/* Quick Search */}
          <div className="bg-white rounded-2xl p-6 shadow-xl border max-w-2xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <Input
                  placeholder="Where do you want to go?"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="h-12 text-lg border-travel-ocean/20 focus:border-travel-ocean"
                />
              </div>
              <Button
                className="h-12 px-8 bg-gradient-to-r from-travel-ocean to-travel-sunset hover:from-travel-ocean/90 hover:to-travel-sunset/90"
                asChild
              >
                <Link to="/plan-trip">
                  <Route className="h-5 w-5 mr-2" />
                  Plan My Trip
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {preferences.map((pref, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className={`${pref.color}/10 text-gray-700 hover:${pref.color}/20 cursor-pointer transition-all`}
                >
                  {pref.icon}
                  <span className="ml-1">{pref.label}</span>
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="flex items-center gap-2 text-gray-600">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="font-medium">4.9/5 from 2,000+ travelers</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="h-5 w-5 text-travel-forest" />
              <span className="font-medium">Plans ready in 2 minutes</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Everything You Need to Travel Smart
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI combines travel expertise, real-time data, and your
              personal preferences to create the perfect travel experience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-2 hover:border-travel-ocean/30 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-fit">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="py-16 bg-gradient-to-br from-travel-sky/20 to-travel-sand/20"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              How WanderAI Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to your perfect travel adventure
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-travel-ocean to-travel-sunset transform translate-x-[-50%] z-0"></div>
                )}

                <div className="relative z-10">
                  <div className="mb-6 mx-auto w-16 h-16 bg-gradient-to-r from-travel-ocean to-travel-sunset rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-travel-ocean to-travel-sunset hover:from-travel-ocean/90 hover:to-travel-sunset/90"
              asChild
            >
              <Link to="/plan-trip">
                Start Planning Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-travel-ocean to-travel-sunset rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Explore the World?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of smart travelers who trust WanderAI to plan their
              perfect adventures.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
              />
              <Button
                variant="secondary"
                className="h-12 px-8 bg-white text-travel-ocean hover:bg-white/90"
                asChild
              >
                <Link to="/plan-trip">Get Started</Link>
              </Button>
            </div>

            <p className="text-sm opacity-80 mt-4">
              No spam, just travel inspiration and tips.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-travel-ocean to-travel-sunset p-2 rounded-lg">
                <Compass className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">WanderAI</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-400">
              <span>© 2024 WanderAI. All rights reserved.</span>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Terms
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
