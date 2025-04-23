
import { useState } from "react";
import { Star, Send, ThumbsUp } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roomNumber: "",
    stayDate: "",
    rating: 0,
    cleanliness: 0,
    service: 0,
    amenities: 0,
    value: 0,
    comments: ""
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleRatingChange = (category: string, rating: number) => {
    setFormData(prev => ({ ...prev, [category]: rating }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Feedback submitted:", formData);
    
    toast({
      title: "Feedback Submitted",
      description: "Thank you for your valuable feedback!",
      variant: "default"
    });
    
    setSubmitted(true);
  };
  
  const RatingStars = ({ category, rating }: { category: string; rating: number }) => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRatingChange(category, star)}
            className="focus:outline-none"
          >
            <Star
              className={`h-6 w-6 ${
                star <= rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };
  
  const publicFeedbacks = [
    {
      id: 1,
      name: "John D.",
      date: "April 15, 2025",
      rating: 5,
      comment: "Excellent service and very clean rooms. The staff was friendly and helpful. Will definitely return!"
    },
    {
      id: 2,
      name: "Sarah M.",
      date: "April 10, 2025",
      rating: 4,
      comment: "Very comfortable stay. The room was spacious and had all the amenities I needed. Breakfast could be improved."
    },
    {
      id: 3,
      name: "Robert K.",
      date: "April 5, 2025",
      rating: 5,
      comment: "Outstanding experience! The location is perfect, and the views from my room were breathtaking. The staff went above and beyond to make my stay enjoyable."
    }
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Guest Feedback</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Feedback Form Section */}
        <div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6 bg-gray-50">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Share Your Experience</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                We value your feedback to improve our services.
              </p>
            </div>
            
            {submitted ? (
              <div className="px-4 py-16 sm:px-6 text-center">
                <div className="flex justify-center mb-4">
                  <ThumbsUp className="h-12 w-12 text-green-500" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Thank You!</h3>
                <p className="text-gray-600 mb-6">
                  Your feedback has been submitted successfully. We appreciate your time.
                </p>
                <button
                  onClick={() => {
                    setFormData({
                      name: "",
                      email: "",
                      roomNumber: "",
                      stayDate: "",
                      rating: 0,
                      cleanliness: 0,
                      service: 0,
                      amenities: 0,
                      value: 0,
                      comments: ""
                    });
                    setSubmitted(false);
                  }}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                >
                  Submit Another Feedback
                </button>
              </div>
            ) : (
              <div className="px-4 py-5 sm:p-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="roomNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Room Number
                      </label>
                      <input
                        type="text"
                        id="roomNumber"
                        name="roomNumber"
                        value={formData.roomNumber}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="stayDate" className="block text-sm font-medium text-gray-700 mb-1">
                        Stay Date
                      </label>
                      <input
                        type="date"
                        id="stayDate"
                        name="stayDate"
                        value={formData.stayDate}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Overall Rating
                    </label>
                    <RatingStars category="rating" rating={formData.rating} />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cleanliness
                      </label>
                      <RatingStars category="cleanliness" rating={formData.cleanliness} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Service
                      </label>
                      <RatingStars category="service" rating={formData.service} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Amenities
                      </label>
                      <RatingStars category="amenities" rating={formData.amenities} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Value for Money
                      </label>
                      <RatingStars category="value" rating={formData.value} />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
                      Additional Comments
                    </label>
                    <textarea
                      id="comments"
                      name="comments"
                      rows={4}
                      value={formData.comments}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      required
                    ></textarea>
                  </div>
                  
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Submit Feedback
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
        
        {/* Recent Feedbacks Section */}
        <div>
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-4 py-5 sm:px-6 bg-gray-50">
              <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Guest Feedbacks</h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                See what other guests are saying about their experience.
              </p>
            </div>
            <div className="px-4 py-5 sm:p-6 divide-y divide-gray-200">
              {publicFeedbacks.map((feedback) => (
                <div key={feedback.id} className="py-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-medium text-gray-900">{feedback.name}</h4>
                    <p className="text-sm text-gray-500">{feedback.date}</p>
                  </div>
                  <div className="flex mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-5 w-5 ${
                          star <= feedback.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700">{feedback.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPage;
