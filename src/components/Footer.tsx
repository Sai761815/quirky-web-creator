
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About HMS</h3>
            <p className="text-gray-300">
              Our Hotel Management System offers a comprehensive solution for efficient hotel operations 
              and enhanced guest experiences.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
              </li>
              <li>
                <Link to="/rooms" className="text-gray-300 hover:text-white">Rooms</Link>
              </li>
              <li>
                <Link to="/booking" className="text-gray-300 hover:text-white">Book Now</Link>
              </li>
              <li>
                <Link to="/feedback" className="text-gray-300 hover:text-white">Guest Feedback</Link>
              </li>
              <li>
                <Link to="/login" className="text-gray-300 hover:text-white">Login</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-gray-300" />
                <span className="text-gray-300">123 Hotel Street, City Name, Country</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-300" />
                <span className="text-gray-300">+1 (234) 567-8900</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-300" />
                <span className="text-gray-300">info@hotelms.com</span>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
            <p className="text-gray-300 mb-2">
              Subscribe to our newsletter for exclusive offers and updates.
            </p>
            <form className="mt-4">
              <div className="flex max-w-md">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full px-3 py-2 placeholder-gray-500 border border-gray-600 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-gray-800 text-white"
                />
                <button
                  type="submit"
                  className="flex-shrink-0 px-4 py-2 bg-purple-600 text-white font-medium rounded-r-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <div className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Hotel Management System. All rights reserved.
            </div>
            <div className="text-gray-300 text-sm flex space-x-4 mt-2 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
