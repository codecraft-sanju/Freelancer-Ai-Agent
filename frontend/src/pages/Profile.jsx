import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); // redirect to login/home
  };

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-gray-100 text-gray-800">
        <p className="text-lg font-medium">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md p-6 border rounded-xl shadow-lg bg-white">
        {/* User Avatar & Info */}
        <div className="text-center mb-6">
          <div className="mx-auto mb-4 h-20 w-20 flex items-center justify-center rounded-full bg-indigo-500 text-3xl font-bold text-white">
            {user.username?.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-2xl font-bold text-gray-800">{user.username}</h2>
          <p className="text-gray-600 mt-1">Here’s your account details</p>
        </div>

        {/* User Details */}
        <div className="space-y-4">
          <div className="flex justify-between p-3 border rounded hover:bg-gray-50 transition">
            <span className="font-medium">Username:</span>
            <span>{user.username}</span>
          </div>
          <div className="flex justify-between p-3 border rounded hover:bg-gray-50 transition">
            <span className="font-medium">Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between p-3 border rounded hover:bg-gray-50 transition">
            <span className="font-medium">User ID:</span>
            <span>{user._id}</span>
          </div>
          {user.createdAt && (
            <div className="flex justify-between p-3 border rounded hover:bg-gray-50 transition">
              <span className="font-medium">Joined:</span>
              <span>{new Date(user.createdAt).toLocaleDateString()}</span>
            </div>
          )}
          {/* New Fields */}
          {user.serviceType && (
            <div className="flex justify-between p-3 border rounded hover:bg-gray-50 transition">
              <span className="font-medium">Service:</span>
              <span>{user.serviceType.replace("-", " ")}</span>
            </div>
          )}
          {user.planType && (
            <div className="flex justify-between p-3 border rounded hover:bg-gray-50 transition">
              <span className="font-medium">Plan:</span>
              <span>{user.planType.charAt(0).toUpperCase() + user.planType.slice(1)}</span>
            </div>
          )}
          {user.subscriptionStatus && (
            <div className="flex justify-between p-3 border rounded hover:bg-gray-50 transition">
              <span className="font-medium">Subscription:</span>
              <span>{user.subscriptionStatus}</span>
            </div>
          )}
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="mt-6 w-full py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
