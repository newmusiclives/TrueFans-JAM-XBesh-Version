import React from 'react'
import { Link } from 'react-router-dom'
import { Music, Shield, ArrowRight, DollarSign, Route, MapPin, Users, Mail, Phone, MapPin as LocationIcon } from 'lucide-react'

const TrueFansHomePage = () => {
  return (
    <div className="min-h-screen" style={{
      background: 'linear-gradient(to bottom right, rgb(42,12,76), rgb(23,24,73))'
    }}>
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center">
              <Music className="w-8 h-8 mr-3" style={{ color: 'rgb(42,12,76)' }} />
              <span className="text-xl font-bold text-gray-900">TrueFans JAM</span>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              <Link to="/how-it-works" className="text-gray-700 hover:text-purple-600 font-medium">How It Works</Link>
              <Link to="/success-stories" className="text-gray-700 hover:text-purple-600 font-medium">Stories</Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600 font-medium">About</Link>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-purple-600 font-medium">Sign In</button>
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

      {/* Main Hero Section */}
      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Orange Circle Icon */}
          <div className="mb-12">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            TrueFans JAM<sup className="text-3xl">™</sup>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-white/90 font-light mb-8 leading-relaxed">
            AI-Powered Tour Planning That Transforms Your Fans Into Venues
          </h2>

          {/* Description */}
          <p className="text-xl text-white/80 mb-12 leading-relaxed max-w-3xl mx-auto">
            Upload your fan email list and let our AI create profitable tour routes connecting you with 
            supporters who want to host intimate concerts in their homes.
          </p>

          {/* Info Box */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-12 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-yellow-400 mr-3" />
              <h3 className="text-yellow-400 text-xl font-semibold">TrueFans CONNECT™ Required</h3>
            </div>
            <p className="text-white/80 leading-relaxed">
              TrueFans JAM™ integrates with your TrueFans CONNECT™ account to access your fan data and 
              manage tour bookings. New to TrueFans? We'll help you create your CONNECT™ account as 
              part of the JAM™ signup process.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link to="/artist-signup">
              <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center">
                Join as Artist
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </Link>
            
            <Link to="/tour-planner">
              <button className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center">
                Plan My Tour
                <Route className="w-5 h-5 ml-2" />
              </button>
            </Link>
          </div>

          {/* Bottom Icons with Labels */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 mb-20">
            <Link to="/revenue-calculator" className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer mb-3">
                <DollarSign className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold text-sm mb-1">Revenue Calculator</h4>
                <p className="text-white/70 text-xs">Estimate your tour earnings</p>
              </div>
            </Link>

            <Link to="/tour-planner" className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer mb-3">
                <Route className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold text-sm mb-1">Tour Planner</h4>
                <p className="text-white/70 text-xs">Create your custom tour route</p>
              </div>
            </Link>

            <Link to="/vetted-hosts" className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer mb-3">
                <MapPin className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold text-sm mb-1">Vetted Hosts</h4>
                <p className="text-white/70 text-xs">Browse verified host venues</p>
              </div>
            </Link>

            <Link to="/host-community" className="flex flex-col items-center group">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer mb-3">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <div className="text-center">
                <h4 className="text-white font-semibold text-sm mb-1">Host Community</h4>
                <p className="text-white/70 text-xs">Connect with hosting fans</p>
              </div>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <Music className="w-8 h-8 mr-3 text-orange-500" />
                <span className="text-2xl font-bold text-white">TrueFans JAM</span>
              </div>
              <p className="text-white/70 mb-6 leading-relaxed">
                Revolutionizing live music through AI-powered tour planning that connects artists 
                with their most dedicated fans for intimate, profitable performances.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-white/10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 cursor-pointer">
                  <span className="text-white font-bold">in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/how-it-works" className="text-white/70 hover:text-orange-400 transition-colors">How It Works</Link></li>
                <li><Link to="/success-stories" className="text-white/70 hover:text-orange-400 transition-colors">Success Stories</Link></li>
                <li><Link to="/tour-planner" className="text-white/70 hover:text-orange-400 transition-colors">Tour Planner</Link></li>
                <li><Link to="/revenue-calculator" className="text-white/70 hover:text-orange-400 transition-colors">Revenue Calculator</Link></li>
                <li><Link to="/vetted-hosts" className="text-white/70 hover:text-orange-400 transition-colors">Vetted Hosts</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-white/70">hello@truefansjam.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-white/70">1-800-TRUEFANS</span>
                </div>
                <div className="flex items-center">
                  <LocationIcon className="w-5 h-5 text-orange-400 mr-3" />
                  <span className="text-white/70">Nashville, TN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 TrueFans JAM™. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-white/60 hover:text-orange-400 text-sm transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-white/60 hover:text-orange-400 text-sm transition-colors">Terms of Service</Link>
              <Link to="/support" className="text-white/60 hover:text-orange-400 text-sm transition-colors">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TrueFansHomePage
