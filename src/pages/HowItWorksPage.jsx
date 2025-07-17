import React from 'react'
import Layout from '../components/Layout'
import { Upload, Brain, MapPin, Music, DollarSign, Users, Shield, Calendar } from 'lucide-react'

const HowItWorksPage = () => {
  return (
    <Layout 
      title="How TrueFans JAM Works" 
      description="Discover how our AI-powered platform transforms your fan data into profitable tour opportunities with vetted hosts."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Process Overview */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Simple. Smart. Profitable.</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our AI analyzes your fan data to create optimized tour routes connecting you with supporters 
            who want to host intimate concerts in their homes.
          </p>
        </div>

        {/* Step-by-Step Process */}
        <div className="space-y-20 mb-20">
          {/* Step 1 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4" style={{ background: 'linear-gradient(to bottom right, rgb(42,12,76), rgb(23,24,73))' }}>
                  1
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Upload Your Fan Data</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Connect your TrueFans CONNECT™ account or upload your fan email list. Our system securely 
                processes your data to identify geographic clusters of supporters.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-3" />
                  Bank-level security for all fan data
                </li>
                <li className="flex items-center">
                  <Upload className="w-5 h-5 text-green-500 mr-3" />
                  Supports CSV, Excel, and direct integrations
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-green-500 mr-3" />
                  Automatic duplicate removal and data cleaning
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <Upload className="w-16 h-16 mx-auto mb-4" style={{ color: 'rgb(42,12,76)' }} />
                <div className="text-sm text-gray-500 mb-4">Supported Formats</div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold text-gray-900">CSV</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold text-gray-900">Excel</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <div className="font-semibold text-gray-900">API</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4" style={{ background: 'linear-gradient(to bottom right, rgb(42,12,76), rgb(23,24,73))' }}>
                  2
                </div>
                <h3 className="text-2xl font-bold text-gray-900">AI Creates Your Tour Route</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Our advanced algorithms analyze fan locations, venue availability, and travel logistics to 
                create optimized tour routes that maximize both audience and profitability.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Brain className="w-5 h-5 text-green-500 mr-3" />
                  Machine learning optimizes travel efficiency
                </li>
                <li className="flex items-center">
                  <MapPin className="w-5 h-5 text-green-500 mr-3" />
                  Geographic clustering identifies tour hotspots
                </li>
                <li className="flex items-center">
                  <DollarSign className="w-5 h-5 text-green-500 mr-3" />
                  Revenue projections for each potential stop
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-50 rounded-2xl p-8">
                <Brain className="w-16 h-16 mx-auto mb-6" style={{ color: 'rgb(42,12,76)' }} />
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-500 mb-2">AI Processing</div>
                  <div className="bg-white rounded-full h-2 overflow-hidden">
                    <div className="h-full w-3/4 rounded-full" style={{ background: 'linear-gradient(to right, rgb(42,12,76), rgb(23,24,73))' }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">Analyzing 10,000+ fan locations...</div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4" style={{ background: 'linear-gradient(to bottom right, rgb(42,12,76), rgb(23,24,73))' }}>
                  3
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Connect with Vetted Hosts</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                We match you with pre-screened hosts in your target areas who are excited to open their 
                homes for intimate concerts. All hosts are verified and rated by our community.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Shield className="w-5 h-5 text-green-500 mr-3" />
                  Background-checked and verified hosts
                </li>
                <li className="flex items-center">
                  <Users className="w-5 h-5 text-green-500 mr-3" />
                  Community ratings and reviews
                </li>
                <li className="flex items-center">
                  <Music className="w-5 h-5 text-green-500 mr-3" />
                  Suitable venues for acoustic performances
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <img 
                      src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                      alt="Host" 
                      className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
                    />
                    <div className="text-sm font-semibold">Sarah M.</div>
                    <div className="text-xs text-gray-500">⭐ 4.9 • 12 shows</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                    <img 
                      src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" 
                      alt="Host" 
                      className="w-12 h-12 rounded-full mx-auto mb-2 object-cover"
                    />
                    <div className="text-sm font-semibold">Mike R.</div>
                    <div className="text-xs text-gray-500">⭐ 5.0 • 8 shows</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4" style={{ background: 'linear-gradient(to bottom right, rgb(42,12,76), rgb(23,24,73))' }}>
                  4
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Book & Perform</h3>
              </div>
              <p className="text-gray-600 mb-6 text-lg">
                Schedule your shows, promote to local fans, and perform intimate concerts that create 
                lasting connections. We handle payments, logistics, and support throughout your tour.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <Calendar className="w-5 h-5 text-green-500 mr-3" />
                  Integrated booking and scheduling system
                </li>
                <li className="flex items-center">
                  <DollarSign className="w-5 h-5 text-green-500 mr-3" />
                  Secure payment processing and instant payouts
                </li>
                <li className="flex items-center">
                  <Music className="w-5 h-5 text-green-500 mr-3" />
                  24/7 support during your tour
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-gray-50 rounded-2xl p-8 text-center">
                <Music className="w-16 h-16 mx-auto mb-6" style={{ color: 'rgb(42,12,76)' }} />
                <div className="text-lg font-semibold text-gray-900 mb-2">Average Show Earnings</div>
                <div className="text-3xl font-bold mb-4" style={{ color: 'rgb(42,12,76)' }}>$450</div>
                <div className="text-sm text-gray-500">Based on 20-person intimate concerts</div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="text-white rounded-2xl p-12" style={{ background: 'linear-gradient(to bottom right, rgb(42,12,76), rgb(23,24,73))' }}>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Artists Love TrueFans JAM</h2>
            <p className="text-white/80 text-lg">Join thousands of independent musicians building sustainable careers through intimate performances</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <DollarSign className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Higher Earnings</h3>
              <p className="text-white/80">Earn 3-5x more per fan than traditional venues with our intimate concert model.</p>
            </div>
            
            <div className="text-center">
              <Users className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Deeper Connections</h3>
              <p className="text-white/80">Build lasting relationships with your most passionate supporters in personal settings.</p>
            </div>
            
            <div className="text-center">
              <MapPin className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">Smart Routing</h3>
              <p className="text-white/80">AI-optimized tours reduce travel costs while maximizing audience reach.</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default HowItWorksPage
