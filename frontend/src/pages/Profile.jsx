import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/"); 
  };

  if (!user) {
    return (
      <div className="flex h-screen items-center justify-center bg-white text-black">
        <p>Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white text-black">
      <div className="w-full max-w-md p-6 border rounded-lg shadow-md">
        {/* User Info */}
        <div className="text-center mb-6">
          <div className="mx-auto mb-4 h-20 w-20 flex items-center justify-center rounded-full bg-gray-400 text-3xl font-bold text-white">
            {user.username?.charAt(0).toUpperCase()}
          </div>
          <h2 className="text-2xl font-bold">{user.username}</h2>
          <p className="text-gray-700">Here’s your account details</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between p-3 border rounded">
            <span>Username:</span>
            <span>{user.username}</span>
          </div>
          <div className="flex justify-between p-3 border rounded">
            <span>Email:</span>
            <span>{user.email}</span>
          </div>
          <div className="flex justify-between p-3 border rounded">
            <span>User ID:</span>
            <span>{user._id}</span>
          </div>
          {user.createdAt && (
            <div className="flex justify-between p-3 border rounded">
              <span>Joined:</span>
              <span>{new Date(user.createdAt).toLocaleDateString()}</span>
            </div>
          )}
        </div>

        <button
          onClick={handleLogout}
          className="mt-6 w-full py-2 bg-red-500 text-white font-semibold rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
