import React from "react";

const PostModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Drafts</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-200">
            ✖
          </button>
        </div>
        <textarea
          className="w-full mt-4 p-2 bg-gray-800 rounded-lg border border-gray-700 focus:outline-none focus:border-blue-500"
          rows="4"
          placeholder="What is happening?!"
        />
        <div className="mt-4 text-blue-500 text-sm">Everyone can reply</div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex space-x-4 text-gray-400">
            <button>📷</button>
            <button>😊</button>
            <button>📍</button>
          </div>
          <button className="bg-blue-500 px-4 py-2 rounded-full hover:bg-blue-600">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
