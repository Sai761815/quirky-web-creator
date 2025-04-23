
import { useState } from "react";
import { Calendar, Check, Filter } from "lucide-react";

const RoomsPage = () => {
  const [filter, setFilter] = useState("all");
  
  const rooms = [
    {
      id: 1,
      name: "Deluxe Single Room",
      type: "single",
      price: 99,
      availability: true,
      image: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?q=80&w=2070",
      features: ["Free WiFi", "TV", "Air Conditioning", "Private Bathroom"]
    },
    {
      id: 2,
      name: "Premium Double Room",
      type: "double",
      price: 149,
      availability: true,
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?q=80&w=2070",
      features: ["Free WiFi", "TV", "Air Conditioning", "Private Bathroom", "Mini Bar"]
    },
    {
      id: 3,
      name: "Executive Suite",
      type: "suite",
      price: 249,
      availability: false,
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070",
      features: ["Free WiFi", "TV", "Air Conditioning", "Private Bathroom", "Mini Bar", "Living Room", "Work Desk"]
    },
    {
      id: 4,
      name: "Family Room",
      type: "family",
      price: 199,
      availability: true,
      image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?q=80&w=2074",
      features: ["Free WiFi", "TV", "Air Conditioning", "Private Bathroom", "2 Queen Beds"]
    },
    {
      id: 5,
      name: "Luxury Penthouse",
      type: "suite",
      price: 499,
      availability: true,
      image: "https://images.unsplash.com/photo-1629079447777-1e605162dc8d?q=80&w=2070",
      features: ["Free WiFi", "TV", "Air Conditioning", "Private Bathroom", "Mini Bar", "Living Room", "Kitchen", "Terrace"]
    }
  ];

  const filteredRooms = filter === "all" ? rooms : rooms.filter(room => room.type === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Available Rooms</h1>
      
      {/* Filter Section */}
      <div className="flex flex-wrap items-center gap-4 mb-8 bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center">
          <Filter className="h-5 w-5 mr-2 text-purple-600" />
          <span className="font-medium">Filter by:</span>
        </div>
        <button
          className={`px-4 py-1 rounded-full ${filter === 'all' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`px-4 py-1 rounded-full ${filter === 'single' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
          onClick={() => setFilter('single')}
        >
          Single
        </button>
        <button
          className={`px-4 py-1 rounded-full ${filter === 'double' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
          onClick={() => setFilter('double')}
        >
          Double
        </button>
        <button
          className={`px-4 py-1 rounded-full ${filter === 'suite' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
          onClick={() => setFilter('suite')}
        >
          Suite
        </button>
        <button
          className={`px-4 py-1 rounded-full ${filter === 'family' ? 'bg-purple-600 text-white' : 'bg-white text-gray-700 border border-gray-300'}`}
          onClick={() => setFilter('family')}
        >
          Family
        </button>
      </div>
      
      {/* Room Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredRooms.map((room) => (
          <div key={room.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <img 
              src={room.image} 
              alt={room.name}
              className="w-full h-48 object-cover" 
            />
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
                <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  ${room.price} / night
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-500 capitalize">{room.type} Room</p>
              
              {/* Features */}
              <div className="mt-4">
                <h4 className="font-medium text-gray-900 mb-2">Room Features:</h4>
                <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
                  {room.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-1" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Availability badge */}
              <div className="mt-4 flex items-center">
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  room.availability ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                }`}>
                  {room.availability ? 'Available' : 'Unavailable'}
                </span>
              </div>
              
              {/* Book now button */}
              <button
                disabled={!room.availability}
                className={`mt-4 w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${
                  room.availability 
                  ? 'bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500' 
                  : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                <Calendar className="h-4 w-4 mr-2" />
                {room.availability ? 'Book Now' : 'Not Available'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomsPage;
