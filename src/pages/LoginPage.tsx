
import { useState } from "react";
import { Lock, User, Hotel } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [userType, setUserType] = useState("staff");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you would handle authentication here
    console.log("Login attempt:", { userType, email, password });
    
    toast({
      title: "Login Successful",
      description: `Welcome back to the Hotel Management System.`,
      variant: "default"
    });
    
    // Redirect to appropriate page based on user type
    window.location.href = userType === "staff" ? "/dashboard" : "/";
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Hotel className="h-12 w-12 text-purple-600" />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Sign in to HMS
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Access the Hotel Management System
          </p>
        </div>
        
        <div className="flex justify-center space-x-4 mt-4">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${
              userType === "staff"
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-500 hover:text-gray-700 border-b-2 hover:border-gray-300"
            } rounded-t-lg transition-all`}
            onClick={() => setUserType("staff")}
          >
            Staff Login
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${
              userType === "guest"
                ? "bg-purple-600 text-white"
                : "bg-white text-gray-500 hover:text-gray-700 border-b-2 hover:border-gray-300"
            } rounded-t-lg transition-all`}
            onClick={() => setUserType("guest")}
          >
            Guest Login
          </button>
        </div>
        
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                Sign in
              </button>
            </div>
          </form>
          
          {userType === "guest" && (
            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
                </div>
              </div>

              <div className="mt-6">
                <div className="mt-1 grid grid-cols-1 gap-3">
                  <a
                    href="#"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                  >
                    Register as a Guest
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center text-sm text-gray-600">
          <Link to="/" className="font-medium text-purple-600 hover:text-purple-500">
            Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
