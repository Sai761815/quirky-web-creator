
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Hotel, User, BookOpen, Calendar, ClipboardCheck, MessageSquare, BarChart } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navItems = [
    { name: "Home", path: "/", icon: <Hotel className="h-5 w-5" /> },
    { name: "Rooms", path: "/rooms", icon: <BookOpen className="h-5 w-5" /> },
    { name: "Booking", path: "/booking", icon: <Calendar className="h-5 w-5" /> },
    { name: "Check In/Out", path: "/check-in-out", icon: <ClipboardCheck className="h-5 w-5" /> },
    { name: "Feedback", path: "/feedback", icon: <MessageSquare className="h-5 w-5" /> },
    { name: "Dashboard", path: "/dashboard", icon: <BarChart className="h-5 w-5" /> },
    { name: "Login", path: "/login", icon: <User className="h-5 w-5" /> }
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <div className="flex items-center">
                <Hotel className="h-8 w-8 text-purple-600" />
                <span className="ml-2 text-xl font-bold text-gray-800">HMS</span>
              </div>
            </Link>
          </div>
          
          {/* Desktop nav */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? "bg-purple-100 text-purple-700"
                      : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                  } px-3 py-2 rounded-md text-sm font-medium flex items-center`}
                >
                  <span className="mr-1">{item.icon}</span>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-purple-600 hover:bg-purple-50 focus:outline-none"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path
                    ? "bg-purple-100 text-purple-700"
                    : "text-gray-600 hover:bg-purple-50 hover:text-purple-700"
                } block px-3 py-2 rounded-md text-base font-medium flex items-center`}
                onClick={() => setIsOpen(false)}
              >
                <span className="mr-2">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
