import React, { useState } from 'react'

const VettedHostsPage = () => {
  const [selectedGenre, setSelectedGenre] = useState('all')
  const [selectedLocation, setSelectedLocation] = useState('all')

  const vettedHosts = [
    {
      id: 1,
      name: "Sarah's Music Loft",
      host: "Sarah Johnson",
      location: "Nashville, TN",
      capacity: 25,
      genres: ["Country", "Folk", "Acoustic"],
      rating: 4.9,
      reviews: 47,
      image: "https://images.pexels.com/photos/1105666/pexels-photo-1105666.jpeg?auto=compress&cs=tinysrgb&w=400",
      verified: true,
      features: ["Piano", "Sound System", "Intimate Setting"]
    },
    {
      id: 2,
      name: "The Underground",
      host: "Mike Rodriguez",
      location: "Austin, TX",
      capacity: 40,
      genres: ["Rock", "Indie", "Alternative"],
      rating: 4.8,
      reviews: 62,
      image: "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=400",
      verified: true,
      features: ["Full Stage", "Professional Lighting", "Bar Service"]
    },
    {
      id: 3,
      name: "Jazz Corner Lounge",
      host: "Diana Chen",
      location: "New York, NY",
      capacity: 35,
      genres: ["Jazz", "Blues", "Soul"],
      rating: 4.9,
      reviews: 89,
      image: "https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400",
      verified: true,
      features: ["Grand Piano", "Vintage Atmosphere", "Wine Selection"]
    },
    {
      id: 4,
      name: "Rooftop Sessions",
      host: "Alex Thompson",
      location: "Los Angeles, CA",
      capacity: 30,
      genres: ["Pop", "R&B", "Electronic"],
      rating: 4.7,
      reviews: 34,
      image: "https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=400",
      verified: true,
      features: ["City Views", "Outdoor Setting", "Modern Equipment"]
    },
    {
      id: 5,
      name: "The Living Room",
      host: "Emma Wilson",
      location: "Portland, OR",
      capacity: 20,
      genres: ["Indie", "Folk", "Singer-Songwriter"],
      rating: 4.8,
      reviews: 28,
      image: "https://images.pexels.com/photos/1449773/pexels-photo-1449773.jpeg?auto=compress&cs=tinysrgb&w=400",
      verified: true,
      features: ["Cozy Atmosphere", "Fireplace", "Acoustic Focus"]
    },
    {
      id: 6,
      name: "Warehouse Sessions",
      host: "Carlos Martinez",
      location: "Chicago, IL",
      capacity: 50,
      genres: ["Hip-Hop", "Electronic", "Experimental"],
      rating: 4.6,
      reviews: 41,
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=400",
      verified: true,
      features: ["Industrial Space", "DJ Equipment", "Dance Floor"]
    }
  ]

  const genres = ["all", "Country", "Folk", "Rock", "Indie", "Jazz", "Blues", "Pop", "R&B", "Electronic", "Hip-Hop"]
  const locations = ["all", "Nashville, TN", "Austin, TX", "New York, NY", "Los Angeles, CA", "Portland, OR", "Chicago, IL"]

  const filteredHosts = vettedHosts.filter(host => {
    const genreMatch = selectedGenre === 'all' || host.genres.includes(selectedGenre)
    const locationMatch = selectedLocation === 'all' || host.location === selectedLocation
    return genreMatch && locationMatch
  })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Vetted Host Venues
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Discover premium, verified venues perfect for intimate performances. 
              Each host has been carefully screened to ensure exceptional experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Genre
              </label>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {genres.map(genre => (
                  <option key={genre} value={genre}>
                    {genre === 'all' ? 'All Genres' : genre}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {locations.map(location => (
                  <option key={location} value={location}>
                    {location === 'all' ? 'All Locations' : location}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredHosts.length} vetted host{filteredHosts.length !== 1 ? 's' : ''}
          </p>
        </div>

        {/* Host Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHosts.map(host => (
            <div key={host.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={host.image}
                  alt={host.name}
                  className="w-full h-48 object-cover"
                />
                {host.verified && (
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{host.name}</h3>
                <p className="text-gray-600 mb-2">Hosted by {host.host}</p>
                <p className="text-gray-500 mb-4 flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {host.location}
                </p>

                <div className="flex items-center mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < Math.floor(host.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">
                    {host.rating} ({host.reviews} reviews)
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-600 mb-2">
                    <span className="font-medium">Capacity:</span> {host.capacity} people
                  </p>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {host.genres.map(genre => (
                      <span
                        key={genre}
                        className="px-2 py-1 bg-purple-100 text-purple-800 text-xs rounded-full"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Features:</p>
                  <ul className="text-sm text-gray-600">
                    {host.features.map(feature => (
                      <li key={feature} className="flex items-center mb-1">
                        <svg className="w-3 h-3 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors text-sm font-medium">
                    View Details
                  </button>
                  <button className="flex-1 border border-purple-600 text-purple-600 py-2 px-4 rounded-md hover:bg-purple-50 transition-colors text-sm font-medium">
                    Contact Host
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredHosts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.9-6.134-2.375M15 17.5c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No hosts found</h3>
            <p className="text-gray-500">Try adjusting your filters to see more results.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Become a Vetted Host?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our exclusive network of premium venues and connect with talented artists looking for intimate performance spaces.
          </p>
          <button className="bg-purple-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-purple-700 transition-colors">
            Apply to Become a Host
          </button>
        </div>
      </div>
    </div>
  )
}

export default VettedHostsPage
