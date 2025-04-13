import { useState, useRef } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // State to store profile data
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  // Reference for the file input
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Get the first file if available
    if (file) {
      setImageUrl(URL.createObjectURL(file)); // Create a URL for the image and store it in state
    }
  };

  // Trigger file input when profile image is clicked
  const handleProfileImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger file input click
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-transparent">
      <div className="bg-red-500 rounded-lg shadow-lg p-8 w-96">
        {/* Profile image input */}
        <div className="mb-6 flex justify-center">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
            ref={fileInputRef}
          />
          
          <div 
            onClick={handleProfileImageClick}
            className="w-32 h-32 rounded-full border-2 border-dashed border-gray-300 cursor-pointer hover:border-gray-400 transition-colors duration-200 overflow-hidden"
          >
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
              />
            ) : (
              <div className="flex justify-center items-center w-full h-full text-gray-400">
                <span className="text-4xl">+</span>
              </div>
            )}
          </div>
        </div>

        {/* Name input */}
        <div className="mb-6">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Bio textarea */}
        <div className="mb-6">
          <textarea
            rows={3}
            placeholder="Write a short bio about yourself..."
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full px-4 py-2 border border-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>

        {/* Save Changes Button */}
        <div className="flex justify-center">
          <button className="px-6 py-2 !bg-white text-blue-500 rounded-md hover:!bg-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
