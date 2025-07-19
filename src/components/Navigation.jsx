import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Music } from 'lucide-react'

const Navigation = ({ onPlanTourClick }) => {
  const location = useLocation()
  
  const navItems = [
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Stories', path: '/stories' },
    { name: 'About', path: '/about' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2 text-white font-bold text-xl">
            <Music className="h-8 w-8 text-orange-400" />
            <span>TrueFans JAM</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-white/90 hover:text-white transition-colors duration-200 ${
                  location.pathname === item.path ?