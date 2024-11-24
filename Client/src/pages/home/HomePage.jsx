import React from "react";

const HomePage = () => {
  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <div className="w-1/5 border-r border-gray-700 px-4 py-6">
        <nav className="flex flex-col space-y-6">
          <button className="text-xl font-bold">X</button>
          <ul className="space-y-4">
            <li>Home</li>
            <li>Explore</li>
            <li>Notifications</li>
            <li>Messages</li>
            <li>Grok</li>
            <li>Communities</li>
            <li>Premium</li>
            <li>Verified Orgs</li>
            <li>Profile</li>
            <li>More</li>
          </ul>
          <button className="bg-blue-500 px-4 py-2 rounded-full text-white">
            Post
          </button>
          <div className="mt-6 flex items-center">
            <div className="bg-gray-400 w-10 h-10 rounded-full"></div>
            <p className="ml-4">Amisha</p>
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-4 py-6">
        <h1 className="text-2xl font-bold">Communities</h1>
        <div className="mt-6 space-y-4">
          <div className="border border-gray-700 rounded-lg p-4">
            <h2 className="font-bold text-lg">🔥 NEOS 🔥</h2>
            <p className="mt-2">Primebeard is smoking Roger btw</p>
            <div className="flex space-x-4 mt-4">
              <img
                src="https://via.placeholder.com/100x100"
                alt="Primebeard"
                className="rounded-lg w-24 h-24"
              />
              <img
                src="https://via.placeholder.com/100x100"
                alt="Roger"
                className="rounded-lg w-24 h-24"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="w-1/4 border-l border-gray-700 px-4 py-6">
        <h2 className="font-bold text-lg">What's happening</h2>
        <ul className="mt-4 space-y-4">
          <li>
            <h3 className="font-bold">F1 Las Vegas Grand Prix 2024</h3>
            <p>Formula 1 - LIVE</p>
          </li>
          <li>
            <h3 className="font-bold">#KeerthySuresh</h3>
            <p>Trending with #BabyJohn, #NainMatakka</p>
          </li>
          <li>
            <h3 className="font-bold">#cheating</h3>
            <p>11.9K posts</p>
          </li>
        </ul>
        <div className="mt-6">
          <h3 className="font-bold">Who to follow</h3>
          <div className="flex items-center mt-4">
            <div className="bg-gray-400 w-10 h-10 rounded-full"></div>
            <p className="ml-4">Virat Kohli</p>
            <button className="ml-auto bg-blue-500 px-3 py-1 rounded-full text-white">
              Follow
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
