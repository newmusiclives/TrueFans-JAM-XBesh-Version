import React, { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Music, 
  Users, 
  MapPin, 
  Calendar, 
  DollarSign,
  Route,
  CheckCircle,
  Star,
  Car,
  Home,
  Phone,
  Mail,
  ArrowRight,
  Play,
  Shield,
  Zap,
  Crown,
  Heart,
  Sparkles,
  TrendingUp,
  Award,
  Globe,
  Headphones,
  Volume2,
  Mic,
  Coffee,
  Camera,
  ChevronDown
} from 'lucide-react'

const TrueFansHomePage = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Indie Folk Artist",
      content: "TrueFans helped me connect with the most amazing hosts. Playing in intimate settings has transformed my music career.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Mike Chen",
      role: "Jazz Musician",
      content: "The quality of venues and hosts on this platform is incredible. Every performance feels special and personal.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      name: "Emma Rodriguez",
      role: "Singer-Songwriter",
      content: "I've built lasting relationships with both hosts and fans through TrueFans. It's more than just booking gigs.",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ]

  const features = [
    {
      icon: Shield,
      title: "Vetted Hosts",
      description: "All hosts are carefully screened and verified for quality and safety"
    },
    {
      icon: Crown,
      title: "Premium Venues",
      description: "Access to unique, intimate spaces perfect for memorable performances"
    },
    {
      icon: Zap,
      title: "Instant Booking",
      description: "Quick and easy booking process with immediate confirmation"
    },
    {
      icon: Heart,
      title: "Community Focus",
      description: "Build genuine connections between artists, hosts, and music lovers"
    }
  ]

  const stats = [
    { number: "10K+", label: "Active Artists", icon: Music },
    { number: "5K+", label: "Verified Hosts", icon: Home },
    { number: "50K+", label: "Performances", icon: Star },
    { number: "100+", label: "Cities", icon: Globe }
  ]

  const howItWorksSteps = [
    {
      step: "01",
      title: "Create Your Profile",
      description: "Sign up and showcase your musical style, experience, and what makes you unique",
      icon: Users
    },
    {
      step: "02",
      title: "Browse & Connect",
      description: "Explore vetted hosts and venues that match your style and audience preferences",
      icon: MapPin
    },
    {
      step: "03",
      title: "Perform & Grow",
      description: "Book intimate performances, build your fanbase, and create lasting memories",
      icon: Music
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  const handleNavigation = useCallback((path) => {
    // For demo purposes, we'll show an alert
    // In a real app, this would use React Router or similar
    alert(`Navigating to: ${path}`)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center cursor-pointer" onClick={() => handleNavigation('/')}>
              <Music className="w-8 h-8 text-purple-600 mr-3" />
              <span className="text-2xl font-bold text-gray-900">TrueFans JAM</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('how-it-works')} 
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection('stories')} 
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Stories
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => handleNavigation('/signin')} 
                className="text-gray-600 hover:text-purple-600 transition-colors"
              >
                Sign In
              </button>
              <button 
                onClick={() => handleNavigation('/signup')} 
                className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-8">
                <Route className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              TrueFans JAM™
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-2xl text-white/90 mb-8 max-w-4xl mx-auto"
            >
              AI-Powered Tour Planning That Transforms Your Fans Into Venues
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-lg text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Upload your fan email list and let our AI create profitable tour routes connecting you with supporters who want to host intimate concerts in their homes.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 max-w-4xl mx-auto mb-12"
            >
              <div className="flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-orange-400 mr-2" />
                <span className="text-orange-400 font-semibold text-lg">TrueFans CONNECT™ Required</span>
              </div>
              <p className="text-white/90 leading-relaxed">
                TrueFans JAM™ integrates with your TrueFans CONNECT™ account to access your fan data and manage tour bookings. New to TrueFans? We'll help you create your CONNECT™ account as part of the JAM™ signup process.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <button 
                onClick={() => handleNavigation('/signup/artist')}
                className="bg-gradient-to-r from-orange-400 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-500 hover:to-orange-700 transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Join as Artist
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              
              <button 
                onClick={() => handleNavigation('/tour-planner')}
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/30 hover:border-white/50 transition-all duration-300 flex items-center"
              >
                Plan AI Tour
                <Route className="w-5 h-5 ml-2" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: DollarSign, label: "Revenue Generated", value: "$2.5M+", description: "Total earnings generated by artists through our platform, creating sustainable income streams from intimate performances." },
              { icon: Route, label: "Tours Planned", value: "1,200+", description: "Successful tours organized using our AI-powered planning system, connecting artists with their most dedicated fans." },
              { icon: MapPin, label: "Host Venues", value: "5,000+", description: "Verified host locations including homes, backyards, and alternative spaces ready to welcome touring artists." },
              { icon: Users, label: "Happy Artists", value: "800+", description: "Musicians who have transformed their touring experience and built deeper connections with their fanbase." }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group cursor-pointer"
                onClick={() => handleNavigation(`/stats/${stat.label.toLowerCase().replace(' ', '-')}`)}
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-gradient-to-r from-orange-100 to-orange-200 p-4 rounded-full group-hover:from-orange-200 group-hover:to-orange-300 transition-all duration-300">
                    <stat.icon className="w-8 h-8 text-orange-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500 leading-relaxed px-2">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Why Choose TrueFans JAM™?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Transform your existing fanbase into a profitable touring network with AI-powered planning and intimate venue connections.
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group cursor-pointer"
                onClick={() => handleNavigation(`/features/${feature.title.toLowerCase().replace(' ', '-')}`)}
              >
                <div className="bg-gradient-to-r from-purple-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="stories" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              Stories from Our Community
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Hear from artists who've transformed their touring with TrueFans JAM™
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center cursor-pointer"
                onClick={() => handleNavigation('/testimonials')}
              >
                <div className="mb-8">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                  />
                  <blockquote className="text-2xl text-gray-700 font-medium leading-relaxed mb-6">
                    "{testimonials[currentTestimonial].content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-gray-900 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-purple-600">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-purple-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl font-bold text-gray-900 mb-4"
            >
              How It Works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              From fan data to profitable tours in three simple steps
            </motion.p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorksSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative cursor-pointer"
                onClick={() => handleNavigation(`/how-it-works/step-${item.step}`)}
              >
                <div className="bg-white rounded-xl p-8 shadow-lg text-center relative z-10 hover:shadow-xl transition-all duration-300">
                  <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    {item.step}
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
                
                {index < howItWorksSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-0">
                    <ArrowRight className="w-8 h-8 text-gray-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-white mb-6"
          >
            Ready to Transform Your Touring?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 mb-8"
          >
            Join thousands of artists who've discovered the power of intimate, profitable performances through TrueFans JAM™
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button 
              onClick={() => handleNavigation('/signup')}
              className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Start Your Journey
            </button>
            <button 
              onClick={() => handleNavigation('/learn-more')}
              className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300"
            >
              Learn More
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4 cursor-pointer" onClick={() => handleNavigation('/')}>
                <Music className="w-8 h-8 text-purple-400 mr-3" />
                <span className="text-2xl font-bold">TrueFans JAM</span>
              </div>
              <p className="text-gray-400 leading-relaxed mb-4">
                Connecting artists with intimate venues through AI-powered tour planning and fan-to-venue transformation.
              </p>
              <div className="flex space-x-4">
                <button 
                  onClick={() => handleNavigation('/social/twitter')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => handleNavigation('/social/facebook')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => handleNavigation('/social/instagram')}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323C5.902 8.198 7.053 7.708 8.35 7.708s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.897-.875-1.387-2.026-1.387-3.323s.49-2.448 1.297-3.323c.875-.897 2.026-1.387 3.323-1.387s2.448.49 3.323 1.297c.897.875 1.387 2.026 1.387 3.323s-.49 2.448-1.297 3.323c-.875.897-2.026 1.387-3.323 1.387z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => scrollToSection('how-it-works')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    How It Works
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('/pricing')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Pricing
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('stories')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Success Stories
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('/resources')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Resources
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => handleNavigation('/help')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Help Center
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('/contact')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Contact Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('/community')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Community
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('/status')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Status
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <button 
                    onClick={() => handleNavigation('/privacy')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Privacy Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('/terms')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Terms of Service
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('/cookies')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    Cookie Policy
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => handleNavigation('/gdpr')} 
                    className="hover:text-white transition-colors text-left"
                  >
                    GDPR
                  </button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; 2024 TrueFans JAM. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-gray-400">
              <button 
                onClick={() => handleNavigation('/sitemap')} 
                className="hover:text-white transition-colors"
              >
                Sitemap
              </button>
              <button 
                onClick={() => handleNavigation('/accessibility')} 
                className="hover:text-white transition-colors"
              >
                Accessibility
              </button>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                <span>English</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default TrueFansHomePage
