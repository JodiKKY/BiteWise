import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const OwnerDashboard = () => {
  // State for restaurant data, comments, visitors, images, profile, and analytics
  const [restaurant, setRestaurant] = useState({
    name: 'BiteWise Restaurant',
    address: '123 Tasty Street, Food Town',
    phone: '(123) 456-7890',
    email: 'contact@bitewise.com',
  });
  const [profile, setProfile] = useState({
    ownerName: 'John Doe',
    ownerEmail: 'owner@bitewise.com',
    phone: '(987) 654-3210',
    restaurantName: 'BiteWise Restaurant',
  });
  const [comments, setComments] = useState([]);
  const [visitors, setVisitors] = useState([]);
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [analytics, setAnalytics] = useState({
    totalVisitors: 1000,
    averageRating: 4.2,
    positiveComments: 75,
    negativeComments: 25,
  });

  // Simulated API data fetch (replace with real API calls)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Simulated data fetching
        const fetchedComments = [
          { id: 1, customer: 'John Doe', rating: 4, comment: 'Great food and service!', date: '2023-10-15' },
          { id: 2, customer: 'Jane Smith', rating: 5, comment: 'Best pizza in town!', date: '2023-10-10' },
          { id: 3, customer: 'Emily Johnson', rating: 3, comment: 'It was okay, could be better.', date: '2023-10-05' },
        ];
        const fetchedVisitors = [
          { id: 1, name: 'Alice', visitedOn: '2023-10-16' },
          { id: 2, name: 'Bob', visitedOn: '2023-10-14' },
        ];
        const fetchedImages = [
          { id: 1, src: '/assets/restaurant1.jpg', alt: 'Interior view' },
          { id: 2, src: '/assets/restaurant2.jpg', alt: 'Outdoor seating' },
        ];

        setComments(fetchedComments);
        setVisitors(fetchedVisitors);
        setImages(fetchedImages);
      } catch (err) {
        console.error('Error fetching data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const newImage = {
        id: images.length + 1,
        src: URL.createObjectURL(file),
        alt: file.name,
      };
      setImages([...images, newImage]);
      setNewImage(file);
    }
  };

  // Handle comment deletion
  const handleDeleteComment = (commentId) => {
    setComments(comments.filter((comment) => comment.id !== commentId));
  };

  // Handle profile update
  const handleProfileUpdate = (e) => {
    e.preventDefault();
    alert('Profile updated successfully!');
  };

  return (
    <section className="min-h-screen bg-gray-100 p-10">
      {/* Dashboard Container */}
      <div className="max-w-screen-xl mx-auto p-8 bg-white rounded-xl shadow-lg">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Restaurant Overview */}
          <div className="flex-1 p-6 bg-orange-100 rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-4">Restaurant Overview</h2>
            <p className="text-lg font-semibold">Name: {restaurant.name}</p>
            <p className="text-lg font-semibold">Address: {restaurant.address}</p>
            <p className="text-lg font-semibold">Phone: {restaurant.phone}</p>
            <p className="text-lg font-semibold">Email: {restaurant.email}</p>
            <div className="mt-6 text-center">
              <Link to="/edit-restaurant">
                <button className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition-all">
                  Edit Restaurant Info
                </button>
              </Link>
            </div>
          </div>

          {/* Profile Section */}
          <div className="flex-1 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-4">Owner Profile</h2>
            <form onSubmit={handleProfileUpdate} className="space-y-4">
              <div>
                <label className="block font-semibold">Owner Name</label>
                <input
                  type="text"
                  value={profile.ownerName}
                  onChange={(e) => setProfile({ ...profile, ownerName: e.target.value })}
                  className="p-4 rounded-xl border border-gray-300 shadow-sm w-full"
                />
              </div>
              <div>
                <label className="block font-semibold">Email</label>
                <input
                  type="email"
                  value={profile.ownerEmail}
                  onChange={(e) => setProfile({ ...profile, ownerEmail: e.target.value })}
                  className="p-4 rounded-xl border border-gray-300 shadow-sm w-full"
                />
              </div>
              <div>
                <label className="block font-semibold">Phone</label>
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                  className="p-4 rounded-xl border border-gray-300 shadow-sm w-full"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition-all"
                >
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Image Upload Section */}
        <div className="mt-6 flex flex-col lg:flex-row gap-6">
          <div className="flex-1 p-6 bg-white rounded-xl shadow-md">
            <h2 className="text-3xl font-bold mb-4">Upload New Images</h2>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-4 p-2 border border-gray-300 rounded-lg"
            />
            {newImage && (
              <div>
                <h3 className="font-semibold">Uploaded Image:</h3>
                <img
                  src={URL.createObjectURL(newImage)}
                  alt="Newly uploaded"
                  className="mt-2 w-full rounded-lg object-cover"
                />
              </div>
            )}
            <div className="mt-6">
              <h3 className="text-xl font-semibold">Current Images:</h3>
              <div className="grid grid-cols-2 gap-4">
                {images.map((image) => (
                  <div key={image.id} className="relative">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full rounded-lg object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="mt-6 p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-4">Restaurant Analytics</h2>
          <div className="space-y-4">
            <p><strong>Total Visitors:</strong> {analytics.totalVisitors}</p>
            <p><strong>Average Rating:</strong> {analytics.averageRating} / 5</p>
            <p><strong>Positive Comments:</strong> {analytics.positiveComments}%</p>
            <p><strong>Negative Comments:</strong> {analytics.negativeComments}%</p>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-6 p-6 bg-white rounded-xl shadow-md mb-6">
          <h2 className="text-3xl font-bold mb-4">Customer Comments</h2>
          {loading ? (
            <p>Loading comments...</p>
          ) : comments.length === 0 ? (
            <p>No comments yet!</p>
          ) : (
            <table className="min-w-full table-auto text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b">Customer</th>
                  <th className="py-2 px-4 border-b">Rating</th>
                  <th className="py-2 px-4 border-b">Comment</th>
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Actions</th>
                </tr>
              </thead>
              <tbody>
                {comments.map((comment) => (
                  <tr key={comment.id}>
                    <td className="py-2 px-4 border-b">{comment.customer}</td>
                    <td className="py-2 px-4 border-b">{comment.rating} / 5</td>
                    <td className="py-2 px-4 border-b">{comment.comment}</td>
                    <td className="py-2 px-4 border-b">{comment.date}</td>
                    <td className="py-2 px-4 border-b">
                      <button
                        onClick={() => handleDeleteComment(comment.id)}
                        className="text-red-500 hover:text-red-700 transition-all"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {/* Visitor Analytics Section */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <h2 className="text-3xl font-bold mb-4">Visitor Analytics</h2>
          <ul>
            {visitors.map((visitor) => (
              <li key={visitor.id} className="py-2 px-4 border-b">
                <strong>{visitor.name}</strong> visited on {visitor.visitedOn}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default OwnerDashboard;
