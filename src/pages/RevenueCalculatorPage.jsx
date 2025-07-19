import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { Calculator, DollarSign, TrendingUp, Users, Music, Home, Award, Info } from 'lucide-react'

const RevenueCalculatorPage = () => {
  const [inputs, setInputs] = useState({
    showsPerMonth: 4,
    averageTicketPrice: 25,
    averageAttendance: 20,
    tier1Referrals: 0, // Direct referrals (artists + hosts)
    tier2Referrals: 0  // Second-tier referrals (referrals made by your referrals)
  })

  const [results, setResults] = useState({
    monthlyRevenue: 0,
    artistEarnings: 0,
    hostEarnings: 0,
    platformFee: 0,
    tier1ReferralEarnings: 0,
    tier2ReferralEarnings: 0,
    totalReferralEarnings: 0,
    totalEarnings: 0,
    yearlyProjection: 0
  })

  const calculateRevenue = () => {
    const grossRevenue = inputs.showsPerMonth * inputs.averageTicketPrice * inputs.averageAttendance
    
    // Revenue split: 80% artist, 10% host, 5% referral program (2-tier), 5% TrueFans CONNECT™
    const artistEarnings = grossRevenue * 0.80
    const hostEarnings = grossRevenue * 0.10
    const platformFee = grossRevenue * 0.05
    
    // 2-Tier Referral System: 2.5% per tier
    const tier1ReferralEarnings = inputs.tier1Referrals * (grossRevenue * 0.025)
    const tier2ReferralEarnings = inputs.tier2Referrals * (grossRevenue * 0.025)
    const totalReferralEarnings = tier1ReferralEarnings + tier2ReferralEarnings
    
    const totalEarnings = artistEarnings + totalReferralEarnings
    const yearlyProjection = totalEarnings * 12

    setResults({
      monthlyRevenue: grossRevenue,
      artistEarnings,
      hostEarnings,
      platformFee,
      tier1ReferralEarnings,
      tier2ReferralEarnings,
      totalReferralEarnings,
      totalEarnings,
      yearlyProjection
    })
  }

  useEffect(() => {
    calculateRevenue()
  }, [inputs])

  const handleInputChange = (field, value) => {
    setInputs(prev => ({
      ...prev,
      [field]: Math.max(0, parseInt(value) || 0)
    }))
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount)
  }

  const scenarios = [
    {
      title: "Getting Started",
      description: "New artist building their fanbase",
      values: { showsPerMonth: 2, averageTicketPrice: 20, averageAttendance: 15, tier1Referrals: 0, tier2Referrals: 0 }
    },
    {
      title: "Growing Artist",
      description: "Established local following",
      values: { showsPerMonth: 4, averageTicketPrice: 25, averageAttendance: 25, tier1Referrals: 1, tier2Referrals: 0 }
    },
    {
      title: "Thriving Performer",
      description: "Popular artist with strong network",
      values: { showsPerMonth: 6, averageTicketPrice: 30, averageAttendance: 30, tier1Referrals: 2, tier2Referrals: 1 }
    },
    {
      title: "Top Tier Artist",
      description: "Established artist with referral network",
      values: { showsPerMonth: 8, averageTicketPrice: 35, averageAttendance: 35, tier1Referrals: 3, tier2Referrals: 2 }
    }
  ]

  const revenueBreakdown = [
    {
      label: "Artist Earnings",
      amount: results.artistEarnings,
      percentage: 80,
      color: "from-purple-600 to-purple-700",
      icon: Music,
      description: "Your direct performance earnings"
    },
    {
      label: "Host Earnings",
      amount: results.hostEarnings,
      percentage: 10,
      color: "from-blue-600 to-blue-700",
      icon: Home,
      description: "Venue host compensation"
    },
    {
      label: "2-Tier Referrals",
      amount: results.totalReferralEarnings,
      percentage: 5,
      color: "from-green-600 to-green-700",
      icon: Users,
      description: "Multi-level referral commissions"
    },
    {
      label: "TrueFans CONNECT™",
      amount: results.platformFee,
      percentage: 5,
      color: "from-gray-600 to-gray-700",
      icon: Award,
      description: "Platform operations & support"
    }
  ]

  const applyScenario = (scenario) => {
    setInputs(scenario.values)
  }

  return (
    <Layout 
      title="Revenue Calculator" 
      description="Calculate your potential earnings as an artist on TrueFans JAM"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Calculator className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Revenue Calculator</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover your earning potential on TrueFans JAM. Calculate projected income based on your performance schedule and 2-tier referral network.
          </p>
        </div>

        {/* Quick Scenarios */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Scenarios</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {scenarios.map((scenario, index) => (
              <button
                key={index}
                onClick={() => applyScenario(scenario)}
                className="bg-white rounded-lg p-4 shadow-lg border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all text-left"
              >
                <h3 className="font-bold text-gray-900 mb-2">{scenario.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{scenario.description}</p>
                <div className="text-xs text-purple-600">
                  {scenario.values.showsPerMonth} shows/month • ${scenario.values.averageTicketPrice} tickets • {scenario.values.averageAttendance} attendance
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Calculator Inputs */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Performance Details</h2>
            
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Shows Per Month
                </label>
                <input
                  type="number"
                  min="0"
                  value={inputs.showsPerMonth}
                  onChange={(e) => handleInputChange('showsPerMonth', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">How many shows do you plan to perform monthly?</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Ticket Price ($)
                </label>
                <input
                  type="number"
                  min="0"
                  value={inputs.averageTicketPrice}
                  onChange={(e) => handleInputChange('averageTicketPrice', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Typical ticket price for your performances</p>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Average Attendance
                </label>
                <input
                  type="number"
                  min="0"
                  value={inputs.averageAttendance}
                  onChange={(e) => handleInputChange('averageAttendance', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
                <p className="text-xs text-gray-500 mt-1">Expected number of attendees per show</p>
              </div>

              <div className="border-t pt-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">2-Tier Referral Network</h3>
                
                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h4 className="font-bold text-green-900 mb-2">How 2-Tier Referrals Work</h4>
                  <div className="text-sm text-green-800 space-y-2">
                    <p><strong>Tier 1 (2.5%):</strong> You earn 2.5% from artists/hosts you directly refer</p>
                    <p><strong>Tier 2 (2.5%):</strong> You earn 2.5% from artists/hosts referred by your referrals</p>
                    <p><strong>Example:</strong> You refer Artist A → Artist A refers Artist B → You earn from both!</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tier 1 Referrals (Direct)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={inputs.tier1Referrals}
                      onChange={(e) => handleInputChange('tier1Referrals', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">Artists & hosts you directly referred (2.5% each)</p>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tier 2 Referrals (Indirect)
                    </label>
                    <input
                      type="number"
                      min="0"
                      value={inputs.tier2Referrals}
                      onChange={(e) => handleInputChange('tier2Referrals', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                    <p className="text-xs text-gray-500 mt-1">Artists & hosts referred by your referrals (2.5% each)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            {/* Monthly Earnings Summary */}
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-8 text-white">
              <h2 className="text-2xl font-bold mb-6">Your Monthly Earnings</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-purple-200">Performance Earnings (80%):</span>
                  <span className="text-2xl font-bold">{formatCurrency(results.artistEarnings)}</span>
                </div>
                
                {results.tier1ReferralEarnings > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Tier 1 Referrals (2.5% each):</span>
                    <span className="text-2xl font-bold">{formatCurrency(results.tier1ReferralEarnings)}</span>
                  </div>
                )}
                
                {results.tier2ReferralEarnings > 0 && (
                  <div className="flex justify-between items-center">
                    <span className="text-purple-200">Tier 2 Referrals (2.5% each):</span>
                    <span className="text-2xl font-bold">{formatCurrency(results.tier2ReferralEarnings)}</span>
                  </div>
                )}
                
                <div className="border-t border-purple-700 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl">Total Monthly:</span>
                    <span className="text-3xl font-bold">{formatCurrency(results.totalEarnings)}</span>
                  </div>
                </div>
                
                <div className="bg-white bg-opacity-20 rounded-lg p-4 mt-6">
                  <div className="flex items-center justify-between">
                    <span className="text-purple-200">Yearly Projection:</span>
                    <span className="text-2xl font-bold">{formatCurrency(results.yearlyProjection)}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Revenue Breakdown */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Breakdown</h3>
              
              <div className="space-y-4">
                {revenueBreakdown.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center">
                      <div className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-full flex items-center justify-center mr-3`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{item.label}</div>
                        <div className="text-sm text-gray-600">{item.description}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">{formatCurrency(item.amount)}</div>
                      <div className="text-sm text-gray-600">{item.percentage}%</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* 2-Tier Referral Breakdown */}
              {(results.tier1ReferralEarnings > 0 || results.tier2ReferralEarnings > 0) && (
                <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
                  <h4 className="font-bold text-green-900 mb-3">2-Tier Referral Breakdown</h4>
                  <div className="space-y-2">
                    {results.tier1ReferralEarnings > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Tier 1 ({inputs.tier1Referrals} referrals × 2.5%):</span>
                        <span className="font-bold text-green-900">{formatCurrency(results.tier1ReferralEarnings)}</span>
                      </div>
                    )}
                    {results.tier2ReferralEarnings > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="text-green-800">Tier 2 ({inputs.tier2Referrals} referrals × 2.5%):</span>
                        <span className="font-bold text-green-900">{formatCurrency(results.tier2ReferralEarnings)}</span>
                      </div>
                    )}
                    <div className="border-t border-green-300 pt-2 flex justify-between items-center font-bold">
                      <span className="text-green-900">Total Referral Income:</span>
                      <span className="text-green-900">{formatCurrency(results.totalReferralEarnings)}</span>
                    </div>
                  </div>
                </div>
              )}
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-start">
                  <Info className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div className="text-sm text-blue-800">
                    <strong>Monthly Gross Revenue:</strong> {formatCurrency(results.monthlyRevenue)}
                    <br />
                    Based on {inputs.showsPerMonth} shows × {inputs.averageAttendance} attendees × ${inputs.averageTicketPrice} tickets
                    <br />
                    <strong>New Revenue Split:</strong> Artist 80% • Host 10% • 2-Tier Referrals 5% • TrueFans CONNECT™ 5%
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Tier Referral Explanation */}
        <div className="mt-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8 border border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">2-Tier Referral System Explained</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tier 1 - Direct Referrals</h3>
              <p className="text-gray-600 mb-4">
                Earn <strong>2.5%</strong> from every artist or host you directly refer to the platform.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-sm text-gray-600">Example:</div>
                <div className="font-bold text-green-600">You → Artist A</div>
                <div className="text-sm text-gray-500">You earn 2.5% of Artist A's donations</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tier 2 - Indirect Referrals</h3>
              <p className="text-gray-600 mb-4">
                Earn <strong>2.5%</strong> from artists or hosts referred by your direct referrals.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-sm text-gray-600">Example:</div>
                <div className="font-bold text-blue-600">You → Artist A → Artist B</div>
                <div className="text-sm text-gray-500">You earn 2.5% of Artist B's donations too!</div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Compound Earnings</h3>
              <p className="text-gray-600 mb-4">
                Build a network that earns you <strong>passive income</strong> from multiple tiers.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-sm text-gray-600">Total Potential:</div>
                <div className="font-bold text-purple-600">Up to 5% per referral chain</div>
                <div className="text-sm text-gray-500">2.5% Tier 1 + 2.5% Tier 2</div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
              <h4 className="text-lg font-bold text-gray-900 mb-2">Applies to Both:</h4>
              <div className="flex items-center justify-center space-x-8">
                <div className="text-center">
                  <Music className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Artist Referrals</div>
                  <div className="text-sm text-gray-600">2.5% per tier</div>
                </div>
                <div className="text-center">
                  <Home className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="font-semibold text-gray-900">Venue Referrals</div>
                  <div className="text-sm text-gray-600">2.5% per tier</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Network Growth</h3>
            <p className="text-gray-600 text-sm">
              Build a sustainable referral network that grows exponentially. Each referral can bring more referrals, multiplying your earnings.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Dual Referral System</h3>
            <p className="text-gray-600 text-sm">
              Earn from both artist and venue referrals. Each type of referral contributes to your 2-tier earning potential.
            </p>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-purple-700 rounded-full flex items-center justify-center mb-4">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-3">Fair Revenue Split</h3>
            <p className="text-gray-600 text-sm">
              Artists keep 80% of donations - the highest in the industry. 2-tier referrals reward network builders fairly.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-6">Ready to Build Your Network?</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
              Join TrueFans JAM today and start building sustainable income through performances and 2-tier referrals. No upfront costs, no monthly fees.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
                Start Your Artist Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-purple-600 transition-colors">
                Learn More About Hosting
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RevenueCalculatorPage
