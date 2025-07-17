import React from 'react'
import Layout from '../components/Layout'
import { Music, Heart, Users, Globe, Award, Zap } from 'lucide-react'

const AboutPage = () => {
  return (
    <Layout 
      title="About TrueFans JAM" 
      description="Revolutionizing how independent artists connect with their most passionate supporters through intimate, authentic musical experiences."
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mission Section */}
        <div className="text-center mb-20">
          <div className="w-24 h-24 mx-auto mb-8 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, rgb(42,12,76), rgb(23,24,73))' }}>
            <Heart className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We believe that the most powerful musical experiences happen when artists and fans connect on a personal level. 
            TrueFans JAM transforms ordinary homes into extraordinary venues, creating intimate concerts that forge lasting 
            bonds between musicians and their most dedicated supporters.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, rgb(42,12,76), rgb(23,24,73))' }}>
              <Music className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Authentic Connections</h3>
            <p className="text-gray-600">
              We facilitate genuine relationships between artists and fans, moving beyond the traditional stage barrier 
              to create meaningful, personal musical experiences.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, rgb(42,12,76), rgb(23,24,73))' }}>
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Community First</h3>
            <p className="text-gray-600">
              Every decision we make prioritizes the wellbeing and success of our artist and host communities. 
              We're not just a platform—we're a family.
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: 'linear-gradient(to bottom right, rgb(42,12,76), rgb(23,24,73))' }}>
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Global Impact</h3>
            <p className="text-gray-600">
              From bedroom studios to living room concerts, we're building a worldwide network of music lovers 
              who believe in supporting independent artistry.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                TrueFans JAM was born from a simple observation: the music industry's most magical moments happen 
                when artists and fans share intimate spaces. While streaming platforms connect millions, they often 
                lack the personal touch that makes music truly transformative.
              </p>
              <p className="mb-6">
                Our founders, themselves independent musicians, experienced firsthand the challenge of building 
                meaningful connections with supporters. Traditional venues were expensive, impersonal, and often 
                inaccessible. House concerts offered intimacy but were difficult to organize and scale.
              </p>
              <p>
                TrueFans JAM bridges this gap by combining cutting-edge AI technology with the timeless appeal 
                of intimate musical gatherings. We're not replacing traditional venues—we're creating new 
                opportunities for artists to thrive and fans to experience music in its most pure form.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <img 
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Sarah Chen" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Chen</h3>
              <p className="text-gray-600 mb-4">CEO & Co-Founder</p>
              <p className="text-sm text-gray-500">
                Former touring musician and tech entrepreneur with 10+ years building artist-focused platforms.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <img 
                src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Marcus Rodriguez" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Marcus Rodriguez</h3>
              <p className="text-gray-600 mb-4">CTO & Co-Founder</p>
              <p className="text-sm text-gray-500">
                AI specialist and former Spotify engineer passionate about using technology to enhance musical discovery.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <img 
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" 
                alt="Emma Thompson" 
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Emma Thompson</h3>
              <p className="text-gray-600 mb-4">Head of Community</p>
              <p className="text-sm text-gray-500">
                Music industry veteran with expertise in artist relations and community building at scale.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="text-white rounded-2xl p-12 text-center" style={{ background: 'linear-gradient(to bottom right, rgb(42,12,76), rgb(23,24,73))' }}>
          <h2 className="text-3xl font-bold mb-12">Impact by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">2,500+</div>
              <div className="text-white/80">Active Artists</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">15,000+</div>
              <div className="text-white/80">Verified Hosts</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">50,000+</div>
              <div className="text-white/80">Concerts Hosted</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">$2.3M+</div>
              <div className="text-white/80">Artist Earnings</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage
