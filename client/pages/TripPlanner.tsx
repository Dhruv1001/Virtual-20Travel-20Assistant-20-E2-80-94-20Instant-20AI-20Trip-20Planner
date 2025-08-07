import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Calendar, 
  Users, 
  DollarSign,
  UtensilsCrossed,
  Mountain,
  Camera,
  Plane,
  Hotel,
  Car,
  Backpack,
  ChevronLeft,
  ChevronRight,
  Check,
  Compass,
  Download,
  Sparkles
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

type TripFormData = {
  destination: string;
  startDate: string;
  endDate: string;
  travelers: number;
  budget: number[];
  preferences: string[];
  accommodation: string;
  transportation: string;
  activities: string[];
  specialRequests: string;
};

export default function TripPlanner() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<TripFormData>({
    destination: "",
    startDate: "",
    endDate: "",
    travelers: 2,
    budget: [2000],
    preferences: [],
    accommodation: "",
    transportation: "",
    activities: [],
    specialRequests: ""
  });

  const totalSteps = 5;

  const steps = [
    { number: 1, title: "Destination", description: "Where to?" },
    { number: 2, title: "Dates", description: "When?" },
    { number: 3, title: "Preferences", description: "What you love" },
    { number: 4, title: "Details", description: "Trip specifics" },
    { number: 5, title: "Review", description: "Final check" }
  ];

  const preferences = [
    { id: "cuisine", label: "Local Cuisine", icon: <UtensilsCrossed className="h-5 w-5" />, color: "bg-travel-sunset" },
    { id: "nature", label: "Nature & Parks", icon: <Mountain className="h-5 w-5" />, color: "bg-travel-forest" },
    { id: "history", label: "History & Culture", icon: <Camera className="h-5 w-5" />, color: "bg-travel-sand" },
    { id: "adventure", label: "Adventure Sports", icon: <Plane className="h-5 w-5" />, color: "bg-travel-ocean" },
    { id: "relaxation", label: "Relaxation", icon: <Hotel className="h-5 w-5" />, color: "bg-travel-sky" },
    { id: "nightlife", label: "Nightlife", icon: <Sparkles className="h-5 w-5" />, color: "bg-travel-sunset" }
  ];

  const activities = [
    "Museums & Galleries", "Food Tours", "Hiking & Trekking", "Water Sports",
    "Photography", "Shopping", "Music & Festivals", "Wildlife Safari",
    "City Walking Tours", "Beach Activities", "Mountain Climbing", "Spa & Wellness"
  ];

  const accommodationTypes = ["Hotel", "Resort", "Apartment", "Hostel", "Villa", "Camping"];
  const transportationTypes = ["Flight", "Train", "Car Rental", "Bus", "Mixed"];

  const handlePreferenceToggle = (prefId: string) => {
    setFormData(prev => ({
      ...prev,
      preferences: prev.preferences.includes(prefId)
        ? prev.preferences.filter(p => p !== prefId)
        : [...prev.preferences, prefId]
    }));
  };

  const handleActivityToggle = (activity: string) => {
    setFormData(prev => ({
      ...prev,
      activities: prev.activities.includes(activity)
        ? prev.activities.filter(a => a !== activity)
        : [...prev.activities, activity]
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const generateItinerary = () => {
    // This would typically send data to backend for processing
    console.log("Generating itinerary with:", formData);
    alert("🎉 Your personalized itinerary is being generated! You'll receive a PDF shortly.");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-travel-sky/30 via-white to-travel-sand/20">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-travel-ocean to-travel-sunset p-2 rounded-lg">
              <Compass className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-travel-ocean to-travel-sunset bg-clip-text text-transparent">
              WanderAI
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">Step {currentStep} of {totalSteps}</span>
            <Button variant="outline" size="sm" asChild>
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                  currentStep >= step.number 
                    ? 'bg-gradient-to-r from-travel-ocean to-travel-sunset border-travel-ocean text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  {currentStep > step.number ? <Check className="h-5 w-5" /> : step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-full h-1 mx-4 rounded transition-all ${
                    currentStep > step.number ? 'bg-gradient-to-r from-travel-ocean to-travel-sunset' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-sm">
            {steps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="font-medium text-gray-900">{step.title}</div>
                <div className="text-gray-500">{step.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-2 shadow-xl">
            <CardHeader className="text-center pb-6">
              <CardTitle className="text-2xl text-gray-900">
                {steps[currentStep - 1].title}
              </CardTitle>
              <CardDescription className="text-lg">
                {steps[currentStep - 1].description}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              {/* Step 1: Destination */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="destination" className="text-lg font-medium mb-3 block">
                      Where would you like to go?
                    </Label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-travel-ocean" />
                      <Input
                        id="destination"
                        placeholder="Enter city, country, or region..."
                        value={formData.destination}
                        onChange={(e) => setFormData(prev => ({ ...prev, destination: e.target.value }))}
                        className="pl-10 h-12 text-lg border-travel-ocean/20 focus:border-travel-ocean"
                      />
                    </div>
                  </div>
                  
                  <div className="bg-travel-sky/10 p-4 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Popular Destinations</h4>
                    <div className="flex flex-wrap gap-2">
                      {["Paris, France", "Tokyo, Japan", "Bali, Indonesia", "New York, USA", "Rome, Italy", "Barcelona, Spain"].map((dest) => (
                        <Badge 
                          key={dest} 
                          variant="secondary" 
                          className="cursor-pointer hover:bg-travel-ocean hover:text-white transition-all"
                          onClick={() => setFormData(prev => ({ ...prev, destination: dest }))}
                        >
                          {dest}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Dates */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="startDate" className="text-lg font-medium mb-3 block">
                        Departure Date
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-travel-ocean" />
                        <Input
                          id="startDate"
                          type="date"
                          value={formData.startDate}
                          onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                          className="pl-10 h-12 border-travel-ocean/20 focus:border-travel-ocean"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="endDate" className="text-lg font-medium mb-3 block">
                        Return Date
                      </Label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-travel-ocean" />
                        <Input
                          id="endDate"
                          type="date"
                          value={formData.endDate}
                          onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                          className="pl-10 h-12 border-travel-ocean/20 focus:border-travel-ocean"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-medium mb-3 block">
                      Number of Travelers
                    </Label>
                    <div className="flex items-center gap-4">
                      <Users className="h-5 w-5 text-travel-ocean" />
                      <Slider
                        value={[formData.travelers]}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, travelers: value[0] }))}
                        max={10}
                        min={1}
                        step={1}
                        className="flex-1"
                      />
                      <span className="text-lg font-medium w-8">{formData.travelers}</span>
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-medium mb-3 block">
                      Budget (USD)
                    </Label>
                    <div className="flex items-center gap-4">
                      <DollarSign className="h-5 w-5 text-travel-ocean" />
                      <Slider
                        value={formData.budget}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                        max={10000}
                        min={500}
                        step={250}
                        className="flex-1"
                      />
                      <span className="text-lg font-medium w-20">${formData.budget[0].toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Preferences */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-lg font-medium mb-4 block">
                      What interests you most? (Select all that apply)
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {preferences.map((pref) => (
                        <div
                          key={pref.id}
                          onClick={() => handlePreferenceToggle(pref.id)}
                          className={`p-4 rounded-lg border-2 cursor-pointer transition-all text-center ${
                            formData.preferences.includes(pref.id)
                              ? 'border-travel-ocean bg-travel-ocean/10'
                              : 'border-gray-200 hover:border-travel-ocean/50'
                          }`}
                        >
                          <div className={`mx-auto mb-2 p-2 rounded-full w-fit ${pref.color}/20`}>
                            {pref.icon}
                          </div>
                          <div className="font-medium text-sm">{pref.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Details */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-lg font-medium mb-3 block">
                      Preferred Accommodation
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {accommodationTypes.map((type) => (
                        <Button
                          key={type}
                          variant={formData.accommodation === type ? "default" : "outline"}
                          onClick={() => setFormData(prev => ({ ...prev, accommodation: type }))}
                          className="h-12"
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-medium mb-3 block">
                      Transportation
                    </Label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {transportationTypes.map((type) => (
                        <Button
                          key={type}
                          variant={formData.transportation === type ? "default" : "outline"}
                          onClick={() => setFormData(prev => ({ ...prev, transportation: type }))}
                          className="h-12"
                        >
                          {type}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label className="text-lg font-medium mb-3 block">
                      Activities You'd Like (Optional)
                    </Label>
                    <div className="flex flex-wrap gap-2">
                      {activities.map((activity) => (
                        <Badge
                          key={activity}
                          variant={formData.activities.includes(activity) ? "default" : "secondary"}
                          className="cursor-pointer transition-all"
                          onClick={() => handleActivityToggle(activity)}
                        >
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="specialRequests" className="text-lg font-medium mb-3 block">
                      Special Requests or Notes
                    </Label>
                    <Textarea
                      id="specialRequests"
                      placeholder="Any special requirements, dietary restrictions, accessibility needs, or specific requests..."
                      value={formData.specialRequests}
                      onChange={(e) => setFormData(prev => ({ ...prev, specialRequests: e.target.value }))}
                      className="min-h-[100px] border-travel-ocean/20 focus:border-travel-ocean"
                    />
                  </div>
                </div>
              )}

              {/* Step 5: Review */}
              {currentStep === 5 && (
                <div className="space-y-6">
                  <div className="bg-travel-sky/10 p-6 rounded-lg">
                    <h3 className="text-xl font-bold mb-4 text-gray-900">Trip Summary</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Destination:</strong> {formData.destination || "Not specified"}
                      </div>
                      <div>
                        <strong>Dates:</strong> {formData.startDate} to {formData.endDate}
                      </div>
                      <div>
                        <strong>Travelers:</strong> {formData.travelers} people
                      </div>
                      <div>
                        <strong>Budget:</strong> ${formData.budget[0].toLocaleString()}
                      </div>
                      <div>
                        <strong>Accommodation:</strong> {formData.accommodation || "Not specified"}
                      </div>
                      <div>
                        <strong>Transportation:</strong> {formData.transportation || "Not specified"}
                      </div>
                    </div>

                    {formData.preferences.length > 0 && (
                      <div className="mt-4">
                        <strong>Interests:</strong>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {formData.preferences.map((prefId) => {
                            const pref = preferences.find(p => p.id === prefId);
                            return pref ? (
                              <Badge key={prefId} variant="secondary" className="text-xs">
                                {pref.label}
                              </Badge>
                            ) : null;
                          })}
                        </div>
                      </div>
                    )}

                    {formData.activities.length > 0 && (
                      <div className="mt-4">
                        <strong>Activities:</strong>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {formData.activities.slice(0, 5).map((activity) => (
                            <Badge key={activity} variant="secondary" className="text-xs">
                              {activity}
                            </Badge>
                          ))}
                          {formData.activities.length > 5 && (
                            <Badge variant="secondary" className="text-xs">
                              +{formData.activities.length - 5} more
                            </Badge>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="text-center p-6 bg-gradient-to-r from-travel-ocean to-travel-sunset rounded-lg text-white">
                    <Sparkles className="h-12 w-12 mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">Ready to Generate Your Perfect Itinerary?</h3>
                    <p className="opacity-90">
                      Our AI will create a personalized travel plan with detailed recommendations, 
                      schedules, and local insights - all available as a downloadable PDF.
                    </p>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  Previous
                </Button>

                {currentStep < totalSteps ? (
                  <Button
                    onClick={nextStep}
                    className="flex items-center gap-2 bg-gradient-to-r from-travel-ocean to-travel-sunset hover:from-travel-ocean/90 hover:to-travel-sunset/90"
                  >
                    Next
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={generateItinerary}
                    className="flex items-center gap-2 bg-gradient-to-r from-travel-ocean to-travel-sunset hover:from-travel-ocean/90 hover:to-travel-sunset/90"
                  >
                    <Download className="h-4 w-4" />
                    Generate Itinerary
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
