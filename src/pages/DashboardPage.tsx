
import { BarChart, Calendar, CheckCircle, DollarSign, Hotel, PieChart, User, Users } from "lucide-react";
import { BarChart as ReChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardPage = () => {
  // Sample data for the charts
  const occupancyData = [
    { name: 'Monday', occupancy: 65 },
    { name: 'Tuesday', occupancy: 70 },
    { name: 'Wednesday', occupancy: 78 },
    { name: 'Thursday', occupancy: 82 },
    { name: 'Friday', occupancy: 90 },
    { name: 'Saturday', occupancy: 95 },
    { name: 'Sunday', occupancy: 85 }
  ];

  const revenueData = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 8000 },
    { name: 'May', revenue: 7000 },
    { name: 'Jun', revenue: 9000 }
  ];

  // Summary stats
  const stats = [
    {
      id: 1,
      name: "Today's Bookings",
      value: "12",
      icon: <Calendar className="h-6 w-6 text-purple-600" />
    },
    {
      id: 2,
      name: "Room Occupancy",
      value: "78%",
      icon: <Hotel className="h-6 w-6 text-purple-600" />
    },
    {
      id: 3,
      name: "Guests In-House",
      value: "42",
      icon: <Users className="h-6 w-6 text-purple-600" />
    },
    {
      id: 4,
      name: "Revenue Today",
      value: "$5,240",
      icon: <DollarSign className="h-6 w-6 text-purple-600" />
    }
  ];

  // Recent activities
  const activities = [
    {
      id: 1,
      guest: "John Smith",
      action: "Checked in",
      time: "10 minutes ago",
      room: "101"
    },
    {
      id: 2,
      guest: "Emily Johnson",
      action: "Made a reservation",
      time: "1 hour ago",
      room: "205"
    },
    {
      id: 3,
      guest: "Robert Brown",
      action: "Checked out",
      time: "2 hours ago",
      room: "310"
    },
    {
      id: 4,
      guest: "Sarah Williams",
      action: "Requested room service",
      time: "3 hours ago",
      room: "105"
    }
  ];

  // Pending tasks
  const tasks = [
    {
      id: 1,
      task: "Room 202 needs cleaning",
      priority: "High",
      assignedTo: "Housekeeping"
    },
    {
      id: 2,
      task: "Confirm booking for VIP guest",
      priority: "Medium",
      assignedTo: "Front Desk"
    },
    {
      id: 3,
      task: "Restock mini-bar in Room 305",
      priority: "Low",
      assignedTo: "Room Service"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex space-x-2">
          <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <User className="mr-2 h-4 w-4" />
            Staff View
          </button>
          <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            <PieChart className="mr-2 h-4 w-4" />
            Detailed Reports
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="bg-white overflow-hidden shadow rounded-lg"
          >
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-purple-100 rounded-md p-3">
                  {stat.icon}
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      {stat.name}
                    </dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">
                        {stat.value}
                      </div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-6 shadow rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Occupancy Rate</h2>
            <div className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Weekly
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ReChart data={occupancyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="%" />
                <Tooltip />
                <Legend />
                <Bar dataKey="occupancy" fill="#8b5cf6" name="Occupancy Rate" />
              </ReChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 shadow rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-medium text-gray-900">Revenue</h2>
            <div className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
              Last 6 Months
            </div>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <ReChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis unit="$" />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#10b981" name="Revenue" />
              </ReChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Recent Activity and Tasks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
              <BarChart className="mr-2 h-5 w-5 text-purple-600" />
              Recent Activity
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            {activities.map((activity) => (
              <div key={activity.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-purple-600 truncate">
                    {activity.guest}
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                      Room {activity.room}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="text-sm text-gray-500">
                      {activity.action}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <p>
                      {activity.time}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-4 py-5 sm:px-6 bg-gray-50">
            <h3 className="text-lg leading-6 font-medium text-gray-900 flex items-center">
              <CheckCircle className="mr-2 h-5 w-5 text-purple-600" />
              Pending Tasks
            </h3>
          </div>
          <div className="divide-y divide-gray-200">
            {tasks.map((task) => (
              <div key={task.id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {task.task}
                  </p>
                  <div className="ml-2 flex-shrink-0 flex">
                    <p className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      task.priority === 'High'
                        ? 'bg-red-100 text-red-800'
                        : task.priority === 'Medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {task.priority}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <div className="sm:flex">
                    <p className="text-sm text-gray-500">
                      Assigned to: <span className="font-medium">{task.assignedTo}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
