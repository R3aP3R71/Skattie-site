import React from "react";

export default function App() {
  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <img src="logo.png" className="h-12" alt="Skattie Logo" />
      <h1 className="text-3xl font-bold text-green-600">Welcome to Skattie</h1>
      <p className="text-gray-700">Real people. Real love. No tricks.</p>
      <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Join Now</button>
    </div>
  );
}
