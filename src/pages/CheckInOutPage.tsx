
import { useState } from "react";
import { Search, UserCheck, UserX, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const CheckInOutPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("checkIn");
  
  const pendingGuests = [
    { id: 1, name: "John Smith", roomNumber: "101", checkInDate: "2025-04-23", checkOutDate: "2025-04-26", status: "confirmed" },
    { id: 2, name: "Emily Johnson", roomNumber: "203", checkInDate: "2025-04-23", checkOutDate: "2025-04-25", status: "confirmed" },
    { id: 3, name: "Robert Brown", roomNumber: "304", checkInDate: "2025-04-24", checkOutDate: "2025-04-28", status: "confirmed" }
  ];

  const currentGuests = [
    { id: 4, name: "Sarah Williams", roomNumber: "105", checkInDate: "2025-04-21", checkOutDate: "2025-04-24", status: "checked-in" },
    { id: 5, name: "Michael Davis", roomNumber: "210", checkInDate: "2025-04-22", checkOutDate: "2025-04-24", status: "checked-in" },
    { id: 6, name: "Jennifer Miller", roomNumber: "315", checkInDate: "2025-04-20", checkOutDate: "2025-04-25", status: "checked-in" }
  ];

  const handleCheckIn = (guestId: number) => {
    toast({
      title: "Guest Checked In",
      description: "Guest has been successfully checked in.",
      variant: "default"
    });
  };

  const handleCheckOut = (guestId: number) => {
    toast({
      title: "Guest Checked Out",
      description: "Guest has been successfully checked out.",
      variant: "default"
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Check In / Check Out</h1>
      
      {/* Search Bar */}
      <div className="mb-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search guests by name, room number, or reservation ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
      </div>
      
      {/* Tabs */}
      <div className="border-b border-gray-200 mb-8">
        <div className="flex">
          <button
            className={`py-4 px-6 border-b-2 font-medium text-sm ${
              activeTab === 'checkIn'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('checkIn')}
          >
            <div className="flex items-center">
              <UserCheck className="mr-2 h-5 w-5" />
              Check In
            </div>
          </button>
          <button
            className={`py-4 px-6 border-b-2 font-medium text-sm ${
              activeTab === 'checkOut'
                ? 'border-purple-500 text-purple-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('checkOut')}
          >
            <div className="flex items-center">
              <UserX className="mr-2 h-5 w-5" />
              Check Out
            </div>
          </button>
        </div>
      </div>
      
      {/* Content based on active tab */}
      {activeTab === "checkIn" ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Pending Check-Ins</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Guests who are arriving today or tomorrow.</p>
          </div>
          <div className="border-t border-gray-200 divide-y divide-gray-200">
            {pendingGuests.length > 0 ? (
              pendingGuests.map((guest) => (
                <div key={guest.id} className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-gray-900">{guest.name}</h3>
                        <div className="mt-2 flex flex-wrap gap-4">
                          <p className="text-sm text-gray-500 flex items-center">
                            <span className="font-medium mr-1">Room:</span> {guest.roomNumber}
                          </p>
                          <p className="text-sm text-gray-500 flex items-center">
                            <Clock className="mr-1 h-4 w-4 text-gray-400" />
                            <span className="font-medium mr-1">Check-in:</span> {guest.checkInDate}
                          </p>
                          <p className="text-sm text-gray-500 flex items-center">
                            <Clock className="mr-1 h-4 w-4 text-gray-400" />
                            <span className="font-medium mr-1">Check-out:</span> {guest.checkOutDate}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <button
                        onClick={() => handleCheckIn(guest.id)}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                      >
                        <UserCheck className="mr-2 h-5 w-5" />
                        Check In
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-4 py-12 text-center">
                <p className="text-gray-500">No pending check-ins.</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Current Guests</h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">Guests who are currently staying or checking out today.</p>
          </div>
          <div className="border-t border-gray-200 divide-y divide-gray-200">
            {currentGuests.length > 0 ? (
              currentGuests.map((guest) => (
                <div key={guest.id} className="px-4 py-5 sm:p-6">
                  <div className="flex items-center justify-between flex-wrap">
                    <div className="w-0 flex-1 flex items-center">
                      <div className="ml-3">
                        <h3 className="text-lg font-medium text-gray-900">{guest.name}</h3>
                        <div className="mt-2 flex flex-wrap gap-4">
                          <p className="text-sm text-gray-500 flex items-center">
                            <span className="font-medium mr-1">Room:</span> {guest.roomNumber}
                          </p>
                          <p className="text-sm text-gray-500 flex items-center">
                            <Clock className="mr-1 h-4 w-4 text-gray-400" />
                            <span className="font-medium mr-1">Check-in:</span> {guest.checkInDate}
                          </p>
                          <p className="text-sm text-gray-500 flex items-center">
                            <Clock className="mr-1 h-4 w-4 text-gray-400" />
                            <span className="font-medium mr-1">Check-out:</span> {guest.checkOutDate}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <button
                        onClick={() => handleCheckOut(guest.id)}
                        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      >
                        <UserX className="mr-2 h-5 w-5" />
                        Check Out
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="px-4 py-12 text-center">
                <p className="text-gray-500">No current guests.</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckInOutPage;
