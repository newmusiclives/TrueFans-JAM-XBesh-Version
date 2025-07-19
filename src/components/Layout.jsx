import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Music, Globe, Mail, Phone, X, Eye, EyeOff, User, Lock, AtSign, Calendar, MapPin, Mic } from 'lucide-react'

const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const FooterLink = ({ to, children, className = "" }) => {
  const handleClick = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <Link 
      to={to} 
      className={`hover:text-white transition-colors ${className}`}
      onClick={handleClick}
    >
      {children}
    </Link>
  )
}

const SignInModal = ({ isOpen, onClose, onSwitchToSignUp }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Sign in attempt:', formData)
      setIsLoading(false)
      onClose()
      // Here you would typically handle successful sign in
    }, 2000)
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Music className="w-8 h-8 mr-2" style={{ color: 'rgb(42,12,76)' }} />
              <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-purple-600 focus:ring-purple-500" />
                <span className="ml-2 text-sm text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-sm text-purple-600 hover:text-purple-800">
                Forgot password?
              </button>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
              style={{ background: 'linear-gradient(to right, rgb(42,12,76), rgb(23,24,73))' }}
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-sm text-gray-500">or</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Switch to Sign Up */}
          <div className="text-center">
            <p className="text-gray-600">
              Don't have an account?{' '}
              <button 
                onClick={onSwitchToSignUp}
                className="text-purple-600 hover:text-purple-800 font-semibold"
              >
                Join TrueFans JAM
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

const JoinNowModal = ({ isOpen, onClose, onSwitchToSignIn }) => {
  const [currentStep, setCurrentStep] = useState(1)
  const [userType, setUserType] = useState('')
  const [formData, setFormData] = useState({
    // Personal Info
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    
    // Artist-specific
    artistName: '',
    genre: '',
    experience: '',
    socialMedia: '',
    
    // Host-specific
    venueName: '',
    venueType: '',
    capacity: '',
    location: '',
    amenities: []
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      console.log('Registration attempt:', { userType, ...formData })
      setIsLoading(false)
      onClose()
      // Here you would typically handle successful registration
    }, 2000)
  }

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target
    
    if (type === 'checkbox') {
      if (name === 'amenities') {
        setFormData(prev => ({
          ...prev,
          amenities: checked 
            ? [...prev.amenities, value]
            : prev.amenities.filter(item => item !== value)
        }))
      }
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

  const nextStep = () => {
    if (currentStep === 1 && userType) {
      setCurrentStep(2)
    } else if (currentStep === 2) {
      setCurrentStep(3)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Music className="w-8 h-8 mr-2" style={{ color: 'rgb(42,12,76)' }} />
              <h2 className="text-2xl font-bold text-gray-900">Join TrueFans JAM</h2>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Indicator */}
          <div className="flex items-center mb-8">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  currentStep >= step 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`flex-1 h-1 mx-2 ${
                    currentStep > step ? 'bg-purple-600' : 'bg-gray-200'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: User Type Selection */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Role</h3>
                  <p className="text-gray-600">How would you like to participate in TrueFans JAM?</p>
                </div>

                <div className="space-y-4">
                  <div 
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
                      userType === 'artist' 
                        ? 'border-purple-500 bg-purple-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setUserType('artist')}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                        <Mic className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">I'm an Artist</h4>
                        <p className="text-sm text-gray-600">Perform intimate shows and connect with true fans</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
                      userType === 'host' 
                        ? 'border-purple-500 bg-purple-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setUserType('host')}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">I'm a Host</h4>
                        <p className="text-sm text-gray-600">Offer my space for unique musical experiences</p>
                      </div>
                    </div>
                  </div>

                  <div 
                    className={`border-2 rounded-lg p-6 cursor-pointer transition-colors ${
                      userType === 'fan' 
                        ? 'border-purple-500 bg-purple-50' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setUserType('fan')}
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                        <User className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">I'm a Fan</h4>
                        <p className="text-sm text-gray-600">Discover and attend intimate musical performances</p>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!userType}
                  className="w-full text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
                  style={{ background: 'linear-gradient(to right, rgb(42,12,76), rgb(23,24,73))' }}
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2: Basic Information */}
            {currentStep === 2 && (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Basic Information</h3>
                  <p className="text-gray-600">Tell us about yourself</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Create a strong password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Confirm your password"
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={nextStep}
                    className="flex-1 text-white py-3 rounded-lg font-semibold transition-colors"
                    style={{ background: 'linear-gradient(to right, rgb(42,12,76), rgb(23,24,73))' }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Role-Specific Information */}
            {currentStep === 3 && (
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {userType === 'artist' ? 'Artist Details' : 
                     userType === 'host' ? 'Venue Information' : 
                     'Fan Preferences'}
                  </h3>
                  <p className="text-gray-600">
                    {userType === 'artist' ? 'Tell us about your music' : 
                     userType === 'host' ? 'Describe your venue' : 
                     'What music do you love?'}
                  </p>
                </div>

                {userType === 'artist' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Artist/Band Name
                      </label>
                      <input
                        type="text"
                        name="artistName"
                        value={formData.artistName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Your stage name or band name"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Primary Genre
                      </label>
                      <select
                        name="genre"
                        value={formData.genre}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select your genre</option>
                        <option value="acoustic">Acoustic</option>
                        <option value="folk">Folk</option>
                        <option value="indie">Indie</option>
                        <option value="jazz">Jazz</option>
                        <option value="blues">Blues</option>
                        <option value="rock">Rock</option>
                        <option value="pop">Pop</option>
                        <option value="country">Country</option>
                        <option value="classical">Classical</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Experience Level
                      </label>
                      <select
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select experience level</option>
                        <option value="beginner">Beginner (0-2 years)</option>
                        <option value="intermediate">Intermediate (2-5 years)</option>
                        <option value="experienced">Experienced (5-10 years)</option>
                        <option value="professional">Professional (10+ years)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Social Media/Website
                      </label>
                      <input
                        type="url"
                        name="socialMedia"
                        value={formData.socialMedia}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="https://instagram.com/yourmusic"
                      />
                    </div>
                  </>
                )}

                {userType === 'host' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Venue Name
                      </label>
                      <input
                        type="text"
                        name="venueName"
                        value={formData.venueName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="My Living Room, The Garden Studio, etc."
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Venue Type
                      </label>
                      <select
                        name="venueType"
                        value={formData.venueType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        required
                      >
                        <option value="">Select venue type</option>
                        <option value="home">Home/Living Room</option>
                        <option value="backyard">Backyard/Garden</option>
                        <option value="studio">Studio Space</option>
                        <option value="loft">Loft/Warehouse</option>
                        <option value="cafe">Cafe/Restaurant</option>
                        <option value="gallery">Gallery/Art Space</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Capacity (Number of Guests)
                      </label>
                      <input
                        type="number"
                        name="capacity"
                        value={formData.capacity}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="15"
                        min="5"
                        max="100"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location (City, State)
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Austin, TX"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Available Amenities
                      </label>
                      <div className="grid grid-cols-2 gap-2">
                        {['Sound System', 'Microphones', 'Seating', 'Parking', 'Kitchen Access', 'Restrooms'].map((amenity) => (
                          <label key={amenity} className="flex items-center">
                            <input
                              type="checkbox"
                              name="amenities"
                              value={amenity}
                              checked={formData.amenities.includes(amenity)}
                              onChange={handleInputChange}
                              className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                            />
                            <span className="ml-2 text-sm text-gray-700">{amenity}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {userType === 'fan' && (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Welcome, Music Lover!</h4>
                    <p className="text-gray-600">
                      You're all set! Start discovering amazing intimate performances in your area.
                    </p>
                  </div>
                )}

                <div className="flex space-x-4">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="flex-1 text-white py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
                    style={{ background: 'linear-gradient(to right, rgb(42,12,76), rgb(23,24,73))' }}
                  >
                    {isLoading ? 'Creating Account...' : 'Create Account'}
                  </button>
                </div>
              </div>
            )}
          </form>

          {/* Switch to Sign In */}
          {currentStep === 1 && (
            <>
              <div className="my-6 flex items-center">
                <div className="flex-1 border-t border-gray-300"></div>
                <span className="px-4 text-sm text-gray-500">or</span>
                <div className="flex-1 border-t border-gray-300"></div>
              </div>

              <div className="text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <button 
                    onClick={onSwitchToSignIn}
                    className="text-purple-600 hover:text-purple-800 font-semibold"
                  >
                    Sign In
                  </button>
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

const Layout = ({ children, title, description }) => {
  const [showSignInModal, setShowSignInModal] = useState(false)
  const [showJoinNowModal, setShowJoinNowModal] = useState(false)

  const handleSignInClick = () => {
    setShowSignInModal(true)
  }

  const handleJoinNowClick = () => {
    setShowJoinNowModal(true)
  }

  const handleCloseSignIn = () => {
    setShowSignInModal(false)
  }

  const handleCloseJoinNow = () => {
    setShowJoinNowModal(false)
  }

  const handleSwitchToSignUp = () => {
    setShowSignInModal(false)
    setShowJoinNowModal(true)
  }

  const handleSwitchToSignIn = () => {
    setShowJoinNowModal(false)
    setShowSignInModal(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <ScrollToTop />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center flex-shrink-0">
              <Music className="w-8 h-8 flex-shrink-0 mr-2" style={{ color: 'rgb(42,12,76)' }} />
              <span className="text-xl font-bold text-gray-900 whitespace-nowrap">TrueFans JAM</span>
            </Link>
            <div className="hidden md:flex space-x-8 flex-shrink-0">
              <Link to="/how-it-works" className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap" style={{ '--tw-text-opacity': 1, color: 'rgb(42 12 76 / var(--tw-text-opacity))' }}>How It Works</Link>
              <Link to="/success-stories" className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap" style={{ '--tw-text-opacity': 1, color: 'rgb(42 12 76 / var(--tw-text-opacity))' }}>Stories</Link>
              <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap" style={{ '--tw-text-opacity': 1, color: 'rgb(42 12 76 / var(--tw-text-opacity))' }}>About</Link>
              <Link to="/admin" className="text-gray-700 hover:text-purple-600 transition-colors whitespace-nowrap" style={{ '--tw-text-opacity': 1, color: 'rgb(42 12 76 / var(--tw-text-opacity))' }}>Admin</Link>
            </div>
            <div className="flex items-center space-x-4 flex-shrink-0">
              <button 
                onClick={handleSignInClick}
                className="text-gray-700 transition-colors whitespace-nowrap hover:text-purple-600" 
                style={{ '--tw-text-opacity': 1, color: 'rgb(42 12 76 / var(--tw-text-opacity))' }}
              >
                Sign In
              </button>
              <button 
                onClick={handleJoinNowClick}
                className="text-white px-4 py-2 rounded-lg transition-colors whitespace-nowrap hover:shadow-lg"
                style={{ background: 'linear-gradient(to right, rgb(42,12,76), rgb(23,24,73))' }}
              >
                Join Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Page Header */}
      <div className="pt-16 text-white" style={{ background: 'linear-gradient(to bottom right, rgb(42,12,76), rgb(23,24,73))' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            {description && (
              <p className="text-xl text-white/80 max-w-3xl mx-auto">{description}</p>
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="py-20">
        {children}
      </main>

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
                <li><FooterLink to="/how-it-works">How It Works</FooterLink></li>
                <li><FooterLink to="/success-stories">Success Stories</FooterLink></li>
                <li><FooterLink to="/revenue-calculator">Revenue Calculator</FooterLink></li>
                <li><FooterLink to="/artist-resources">Artist Resources</FooterLink></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">For Hosts</h4>
              <ul className="space-y-2 text-white/70">
                <li><FooterLink to="/become-host">Become a Host</FooterLink></li>
                <li><FooterLink to="/vetted-hosts">Vetted Hosts Program</FooterLink></li>
                <li><FooterLink to="/host-guidelines">Host Guidelines</FooterLink></li>
                <li><FooterLink to="/venue-requirements">Venue Requirements</FooterLink></li>
                <li><FooterLink to="/host-community">Host Community</FooterLink></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-white/70">
                <li><FooterLink to="/help">Help Center</FooterLink></li>
                <li><FooterLink to="/contact">Contact Us</FooterLink></li>
                <li><FooterLink to="/privacy">Privacy Policy</FooterLink></li>
                <li><FooterLink to="/terms">Terms of Service</FooterLink></li>
                <li><FooterLink to="/admin">Admin Portal</FooterLink></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
            <p>&copy; 2024 TrueFans JAM. All rights reserved. Built for independent artists, by music lovers.</p>
          </div>
        </div>
      </footer>

      {/* Authentication Modals */}
      <SignInModal 
        isOpen={showSignInModal} 
        onClose={handleCloseSignIn}
        onSwitchToSignUp={handleSwitchToSignUp}
      />
      <JoinNowModal 
        isOpen={showJoinNowModal} 
        onClose={handleCloseJoinNow}
        onSwitchToSignIn={handleSwitchToSignIn}
      />
    </div>
  )
}

export default Layout
