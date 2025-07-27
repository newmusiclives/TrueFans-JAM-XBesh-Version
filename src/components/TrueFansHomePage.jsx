import React from 'react'
import { Link } from 'react-router-dom'
import { Music, ArrowRight, Shield, Route, DollarSign, MapPin, Users, Globe, Mail, Phone } from 'lucide-react'

const TrueFansHomePage = () => {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(to bottom right, rgb(42,12,76), rgb(23,24,73))' }}>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <Music className="w-8 h-8 mr-3" style={{ color: 'rgb(42,12,76)' }} />
              <span className="text-xl font-bold text-gray-900">TrueFans JAM</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/how-it-works" className="text-gray-700 font-medium transition-colors hover:text-purple-600" style={{ '--tw-text-opacity': 1, color: 'rgb(42 12 76 / var(--tw-text-opacity))' }}>How It Works</Link>
              <Link to="/success-stories" className="text-gray-700 font-medium transition-colors hover:text-purple-600" style={{ '--tw-text-opacity': 1, color: 'rgb(42 12 76 / var(--tw-text-opacity))' }}>Stories</Link>
              <Link to="/about" className="text-gray-700 font-medium transition-colors hover:text-purple-600" style={{ '--tw-text-opacity': 1, color: 'rgb(42 12 76 / var(--tw-text-opacity))' }}>About</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 font-medium transition-colors hover:text-purple-600" style={{ '--tw-text-opacity': 1, color: 'rgb(42 12 76 / var(--tw-text-opacity))' }}>Sign In</button>
              <Link to="/artist-signup">
                <button 
                  className="text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                  style={{ background: 'linear-gradient(to right, rgb(42,12,76), rgb(23,24,73))' }}
                >
                  Join Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 sm:px-6 lg:px-8 py-20 text-white">
        <div className="max-w-6xl mx-auto text-center">
          {/* Orange Circle Icon */}
          <div className="flex justify-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
              <Route className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            TrueFans JAM<sup className="text-3xl">™</sup>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-white/90">
            AI-Powered Tour Planning That Transforms Your Fans Into Venues
          </h2>

          {/* Description */}
          <p className="text-xl text-white/80 mb-16 leading-relaxed max-w-4xl mx-auto">
            Upload your fan email list and let our AI create profitable tour routes connecting you with 
            supporters who want to host intimate concerts in their homes.
          </p>

          {/* Info Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-16 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-orange-400 mr-3" />
              <h3 className="text-orange-400 font-semibold text-lg">TrueFans CONNECT™ Required</h3>
            </div>
            <p className="text-white/90 leading-relaxed">
              TrueFans JAM™ integrates with your TrueFans CONNECT™ account to access your fan data and 
              manage tour bookings. New to TrueFans? We'll help you create your CONNECT™ account as 
              part of the JAM™ signup process.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Link to="/artist-signup">
              <button className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center min-w-[220px]">
                Join as Artist
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
            
            <Link to="/tour-planner">
              <button className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center min-w-[220px]">
                Plan My Tour
                <Route className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>
        </div>
      </main>

      {/* Bottom Navigation Icons with Descriptions - Fixed above footer */}
      <div className="flex justify-center pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl">
          <Link to="/revenue-calculator" className="flex flex-col items-center group">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 mb-3">
              <DollarSign className="w-6 h-6 text-orange-400" />
            </div>
            <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors text-center">Revenue Calculator</span>
          </Link>
          
          <Link to="/tour-planner" className="flex flex-col items-center group">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 mb-3">
              <Route className="w-6 h-6 text-orange-400" />
            </div>
            <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors text-center">Plan My Tour</span>
          </Link>
          
          <Link to="/vetted-hosts" className="flex flex-col items-center group">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 mb-3">
              <MapPin className="w-6 h-6 text-orange-400" />
            </div>
            <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors text-center">Vetted Hosts</span>
          </Link>
          
          <Link to="/artist-signup" className="flex flex-col items-center group">
            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 border border-white/20 mb-3">
              <Users className="w-6 h-6 text-orange-400" />
            </div>
            <span className="text-white/80 text-sm font-medium group-hover:text-white transition-colors text-center">Join as Artist</span>
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-white py-16" style={{ background: 'linear-gradient(to bottom right, rgb(42,12,76), rgb(23,24,73))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Music className="w-8 h-8 text-orange-400 mr-2" />
                <span className="text-xl font-bold">TrueFans JAM</span>
              </div>
              <p className="text-white/70 mb-4">
                Connecting independent artists with their true fans through intimate, authentic musical experiences.
              </p>
              <div className="flex space-x-4">
                <Globe className="w-5 h-5 text-white/70 hover:text-white cursor-pointer" />
                <Mail className="w-5 h-5 text-white/70 hover:text-white cursor-pointer" />
                <Phone className="w-5 h-5 text-white/70 hover:text-white cursor-pointer" />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Artists</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link to="/how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
                <li><Link to="/success-stories" className="hover:text-white transition-colors">Success Stories</Link></li>
                <li><Link to="/revenue-calculator" className="hover:text-white transition-colors">Revenue Calculator</Link></li>
                <li><Link to="/artist-resources" className="hover:text-white transition-colors">Artist Resources</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Hosts</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link to="/become-host" className="hover:text-white transition-colors">Become a Host</Link></li>
                <li><Link to="/vetted-hosts" className="hover:text-white transition-colors">Vetted Hosts Program</Link></li>
                <li><Link to="/host-guidelines" className="hover:text-white transition-colors">Host Guidelines</Link></li>
                <li><Link to="/venue-requirements" className="hover:text-white transition-colors">Venue Requirements</Link></li>
                <li><Link to="/host-community" className="hover:text-white transition-colors">Host Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-white/70">
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link to="/admin" className="hover:text-white transition-colors">Admin Portal</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
            <p>&copy; 2024 TrueFans JAM. All rights reserved. Built for independent artists, by music lovers.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TrueFansHomePage
