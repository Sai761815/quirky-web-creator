
import { ArrowRight, Calendar, Home, RefreshCw, Smile, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: <Calendar className="h-8 w-8 text-purple-600" />,
      title: "Room Booking",
      description: "Easy online room reservations with real-time availability updates."
    },
    {
      icon: <RefreshCw className="h-8 w-8 text-purple-600" />,
      title: "Check-in/Check-out",
      description: "Streamlined processes for faster guest arrivals and departures."
    },
    {
      icon: <Home className="h-8 w-8 text-purple-600" />,
      title: "Room Management",
      description: "Track room status, availability, and maintenance needs."
    },
    {
      icon: <Smile className="h-8 w-8 text-purple-600" />,
      title: "Customer Feedback",
      description: "Collect and analyze guest reviews to improve services."
    },
    {
      icon: <Star className="h-8 w-8 text-purple-600" />,
      title: "Guest Profiles",
      description: "Store guest preferences and history for personalized service."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Hotel Management System
            </h1>
            <p className="mt-6 text-xl max-w-2xl mx-auto">
              A centralized digital platform for efficient hotel operations and enhanced guest experiences.
            </p>
            <div className="mt-10">
              <Link
                to="/booking"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Book a Room
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Key Features
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              Our comprehensive solution streamlines hotel operations and enhances guest satisfaction.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Ready to transform your hotel operations?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Experience a more efficient and guest-focused hotel management solution.
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                to="/login"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
              >
                Get Started
              </Link>
              <Link
                to="/rooms"
                className="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-gray-50 border-purple-600"
              >
                View Rooms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
