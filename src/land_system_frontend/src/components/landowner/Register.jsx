import React, { useState } from 'react';

// Sample static data for locations
const locations = ['Nairobi', 'Mombasa', 'Kisumu', 'Eldoret', 'Nakuru'];

const RegisterNewTitle = () => {
  const [title, setTitle] = useState('');
  const [area, setArea] = useState('');
  const [location, setLocation] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending the data to a server or updating the state.
    console.log('New Land Title Registered:', { title, area, location, status });
    // Reset the form
    setTitle('');
    setArea('');
    setLocation('');
    setStatus('Pending');
  };

  return (
    <div className="register-new-title p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Register New Land Title</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Area</label>
          <input
            type="text"
            value={area}
            onChange={(e) => setArea(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded w-full"
          />
        </div>
        <div>
          <label className="block mb-1 font-semibold">Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            className="border border-gray-300 p-2 rounded w-full"
          >
            <option value="" disabled>Select a location</option>
            {locations.map((loc) => (
              <option key={loc} value={loc}>{loc}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block mb-1 font-semibold">Status</label>
          <input
            type="text"
            value={status}
            readOnly
            className="border border-gray-300 p-2 rounded w-full bg-gray-100"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Register Title
        </button>
      </form>
    </div>
  );
};

export default RegisterNewTitle;
