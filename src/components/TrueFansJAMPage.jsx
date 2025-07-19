import React from 'react'
import { Music, DollarSign, MapPin, Users, ArrowRight, Mail, Phone, Globe } from 'lucide-react'

const TrueFansJAMPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <Music className="w-8 h-8 text-purple-600 mr-3" />
              <span className="text-xl font-bold text-gray-900">TrueFans JAM</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">How It Works</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">Stories</a>
              <a href="#" className="text-gray-700 hover:text-purple-600 font-medium">About</a>
            </nav>
            
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-purple-600 font-medium">Sign In</button>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors">
                Join Now
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Orange Icon */}
          <div className="flex justify-center mb-12">
            <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center shadow-2xl">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            TrueFans JAM<sup className="text-4xl">™</sup>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl text-blue-100 mb-12 font-light max-w-4xl mx-auto leading-relaxed">
            Tour Planning That Transforms Your Fans Into Venues
          </h2>

          {/* Description */}
          <p className="text-xl text-blue-200 mb-16 max-w-4xl mx-auto leading-relaxed">
            Send your fans an email and let our platform create profitable tour routes connecting you with your truefans who want to host intimate concerts in their homes, backyards and alternative spaces.
          </p>

          {/* Info Box */}
          <div className="bg-blue-800/30 backdrop-blur-sm border border-blue-600/30 rounded-2xl p-8 mb-16 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <svg className="w-4 h-4 text-yellow-900" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-yellow-400 text-xl font-semibold">TrueFans CONNECT™ Required</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              TrueFans JAM™ integrates with your TrueFans CONNECT™ account to access your fan data and 
              manage tour bookings. New to TrueFans? We'll help you create your CONNECT™ account as 
              part of the JAM™ signup process.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center">
              Join as Artist
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            
            <button className="bg-blue-700/50 backdrop-blur-sm border border-blue-500/50 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-blue-600/50 transition-all duration-300 flex items-center">
              Plan Tour
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </button>
          </div>

          {/* Bottom Icons with Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-700/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30 mb-4">
                <DollarSign className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Profitable Tours</h3>
              <p className="text-blue-200 text-sm text-center leading-relaxed">
                Generate revenue through intimate performances with guaranteed minimum earnings per show
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-700/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30 mb-4">
                <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Smart Routing</h3>
              <p className="text-blue-200 text-sm text-center leading-relaxed">
                Optimize travel routes and maximize efficiency with intelligent tour planning algorithms
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-700/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30 mb-4">
                <MapPin className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Unique Venues</h3>
              <p className="text-blue-200 text-sm text-center leading-relaxed">
                Discover intimate spaces from homes to backyards, creating memorable experiences for fans
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-700/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-blue-500/30 mb-4">
                <Users className="w-8 h-8 text-yellow-400" />
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Fan Connection</h3>
              <p className="text-blue-200 text-sm text-center leading-relaxed">
                Build deeper relationships with your truefans through personal, up-close performances
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-6">
                <Music className="w-8 h-8 text-purple-400 mr-3" />
                <span className="text-2xl font-bold text-white">TrueFans JAM</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Revolutionizing live music by connecting artists directly with their most passionate fans for intimate, profitable performances in unique venues.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Platform</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Artist Stories</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Host a Show</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Safety Guidelines</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 TrueFans JAM™. All rights reserved. Part of the TrueFans ecosystem.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center text-gray-400 text-sm">
                <Mail className="w-4 h-4 mr-2" />
                hello@truefansjam.com
              </div>
              <div className="flex items-center text-gray-400 text-sm">
                <Phone className="w-4 h-4 mr-2" />
                1-800-TRUEFAN
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TrueFansJAMPage
