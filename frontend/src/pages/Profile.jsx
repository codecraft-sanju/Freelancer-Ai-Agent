import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import LeadList from "../components/LeadList";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-900 text-gray-300">
        <p className="text-lg font-medium animate-pulse">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Profile Card */}
        <div className="md:col-span-1 bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700 space-y-4">
          <div className="text-center">
            <div className="mx-auto mb-4 h-20 w-20 flex items-center justify-center rounded-full bg-indigo-600 text-3xl font-bold text-white shadow-lg">
              {user.username?.charAt(0).toUpperCase()}
            </div>
            <h2 className="text-2xl font-bold text-white">{user.username}</h2>
            <p className="text-gray-400 mt-1">AI Freelancer Dashboard</p>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between p-3 bg-gray-700 rounded-lg">
              <span className="font-medium text-gray-300">Email:</span>
              <span className="text-gray-100">{user.email}</span>
            </div>
            <div className="flex justify-between p-3 bg-gray-700 rounded-lg">
              <span className="font-medium text-gray-300">User ID:</span>
              <span className="text-gray-100">{user._id}</span>
            </div>
            {user.createdAt && (
              <div className="flex justify-between p-3 bg-gray-700 rounded-lg">
                <span className="font-medium text-gray-300">Joined:</span>
                <span className="text-gray-100">{new Date(user.createdAt).toLocaleDateString()}</span>
              </div>
            )}
            {user.serviceType && (
              <div className="flex justify-between p-3 bg-gray-700 rounded-lg">
                <span className="font-medium text-gray-300">Service:</span>
                <span className="text-gray-100">{user.serviceType.replace("-", " ")}</span>
              </div>
            )}
            {user.planType && (
              <div className="flex justify-between p-3 bg-gray-700 rounded-lg">
                <span className="font-medium text-gray-300">Plan:</span>
                <span className="text-gray-100">{user.planType.charAt(0).toUpperCase() + user.planType.slice(1)}</span>
              </div>
            )}
            {user.subscriptionStatus && (
              <div className="flex justify-between p-3 bg-gray-700 rounded-lg">
                <span className="font-medium text-gray-300">Subscription:</span>
                <span className="text-gray-100">{user.subscriptionStatus}</span>
              </div>
            )}
          </div>

          <button
            onClick={handleLogout}
            className="w-full mt-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition shadow-lg"
          >
            Logout
          </button>
        </div>

        {/* Leads Section */}
        <div className="md:col-span-2 bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-700">
          <LeadList />
        </div>
      </div>
    </div>
  );
};

export default Profile;
