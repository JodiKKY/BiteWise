import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const ProfileDropdown = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out.");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="relative">
      {/* Profile Image */}
      <img
        src={user.photoURL || "https://via.placeholder.com/40"}
        alt="Profile"
        className="w-10 h-10 rounded-full cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      />

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-lg p-2">
          <p className="text-center font-medium">{user.displayName}</p>
          <button
            onClick={handleLogout}
            className="w-full mt-2 bg-red-500 text-white py-2 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;