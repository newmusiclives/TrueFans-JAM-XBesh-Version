import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { 
  BarChart3, 
  DollarSign, 
  Users, 
  Music, 
  TrendingUp, 
  TrendingDown,
  Calendar,
  MapPin,
  Star,
  Settings,
  Zap,
  Globe,
  CreditCard,
  PieChart,
  Activity,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  RefreshCw,
  CheckCircle,
  AlertCircle,
  XCircle,
  ExternalLink,
  Database,
  Headphones,
  Building,
  Palette,
  FileText,
  BookOpen,
  Shield,
  Key,
  Link,
  Wifi,
  WifiOff,
  Play,
  Pause,
  Volume2,
  Heart,
  Share2,
  MessageCircle,
  Mail,
  Phone,
  Copy,
  Image,
  Video,
  Mic,
  Camera,
  Folder,
  Archive,
  Filter,
  Search,
  Bell,
  Clock,
  Target,
  Award,
  Briefcase,
  HelpCircle,
  Info,
  AlertTriangle,
  CheckSquare,
  Square,
  MoreHorizontal,
  ChevronDown,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight,
  Percent,
  Calculator,
  Receipt,
  Banknote,
  Wallet,
  Type,
  Plane,
  Car,
  Utensils,
  ShoppingBag,
  Truck,
  Home,
  Wifi as WifiIcon,
  Navigation,
  Route,
  Package,
  CreditCard as PaymentIcon,
  Smartphone,
  Camera as CameraIcon,
  Megaphone,
  Ticket,
  Gift,
  Coffee,
  Fuel,
  MapIcon,
  Compass,
  Train,
  Bus,
  Ship,
  Bike
} from 'lucide-react'

const AdminPortalPage = () => {
  // All hooks at the top
  const [activeTab, setActiveTab] = useState('dashboard')
  const [isLoading, setIsLoading] = useState(false)
  const [apiStatuses, setApiStatuses] = useState({
    manifest: 'connected',
    bandsInTown: 'connected',
    spotify: 'connected',
    trueFansConnect: 'connected',
    dialogLightwork: 'connected',
    // Travel & Accommodation
    booking: 'disconnected',
    expedia: 'disconnected',
    airbnb: 'disconnected',
    hotels: 'disconnected',
    // Transportation
    uber: 'disconnected',
    lyft: 'disconnected',
    enterprise: 'disconnected',
    hertz: 'disconnected',
    // Airlines
    american: 'disconnected',
    delta: 'disconnected',
    united: 'disconnected',
    southwest: 'disconnected',
    // Food & Services
    doordash: 'disconnected',
    ubereats: 'disconnected',
    grubhub: 'disconnected',
    // Equipment & Logistics
    uhaul: 'disconnected',
    fedex: 'disconnected',
    ups: 'disconnected',
    // Marketing & Social
    mailchimp: 'disconnected',
    constant: 'disconnected',
    facebook: 'disconnected',
    instagram: 'disconnected',
    // Payment & Financial
    stripe: 'disconnected',
    paypal: 'disconnected',
    square: 'disconnected',
    // Insurance & Legal
    progressive: 'disconnected',
    legalzoom: 'disconnected'
  })
  const [dashboardData, setDashboardData] = useState({
    totalRevenue: 247850,
    totalShows: 342,
    totalArtists: 89,
    totalHosts: 156,
    monthlyGrowth: 23.5,
    revenueGrowth: 18.2,
    showsGrowth: 31.4,
    artistsGrowth: 12.8
  })
  const [financialData, setFinancialData] = useState({
    monthlyRevenue: [
      { month: 'Jan', revenue: 18500, expenses: 12300, profit: 6200 },
      { month: 'Feb', revenue: 22100, expenses: 14800, profit: 7300 },
      { month: 'Mar', revenue: 26800, expenses: 16200, profit: 10600 },
      { month: 'Apr', revenue: 31200, expenses: 18900, profit: 12300 },
      { month: 'May', revenue: 28900, expenses: 17600, profit: 11300 },
      { month: 'Jun', revenue: 34500, expenses: 20100, profit: 14400 }
    ],
    transactions: [
      { id: 1, date: '2024-01-15', artist: 'Sarah Mitchell', amount: 485, type: 'show_revenue', status: 'completed' },
      { id: 2, date: '2024-01-14', artist: 'Mike Rodriguez', amount: 320, type: 'merchandise', status: 'completed' },
      { id: 3, date: '2024-01-13', artist: 'Emma Thompson', amount: 650, type: 'show_revenue', status: 'pending' },
      { id: 4, date: '2024-01-12', artist: 'David Chen', amount: 290, type: 'donations', status: 'completed' },
      { id: 5, date: '2024-01-11', artist: 'Lisa Park', amount: 420, type: 'show_revenue', status: 'completed' }
    ]
  })
  const [integrationData, setIntegrationData] = useState({
    manifest: {
      totalTransactions: 1247,
      monthlyVolume: 89500,
      averageTransaction: 285,
      lastSync: '2024-01-15 14:32:00'
    },
    bandsInTown: {
      totalVenues: 2847,
      activeVenues: 1923,
      newVenues: 124,
      lastSync: '2024-01-15 14:28:00'
    },
    spotify: {
      totalPlays: 847293,
      monthlyListeners: 23847,
      topTrack: 'Acoustic Dreams',
      lastSync: '2024-01-15 14:35:00'
    },
    trueFansConnect: {
      activeUsers: 15847,
      monthlyEngagement: 89.2,
      newSignups: 342,
      lastSync: '2024-01-15 14:30:00'
    },
    dialogLightwork: {
      activeConversations: 1247,
      responseRate: 94.8,
      avgResponseTime: '2.3 min',
      lastSync: '2024-01-15 14:33:00'
    }
  })
  const [brandAssets, setBrandAssets] = useState([
    { id: 1, name: 'TrueFans JAM Logo - Primary', type: 'logo', format: 'SVG', size: '2.4 KB', downloads: 847 },
    { id: 2, name: 'TrueFans JAM Logo - White', type: 'logo', format: 'PNG', size: '45 KB', downloads: 623 },
    { id: 3, name: 'Brand Guidelines PDF', type: 'document', format: 'PDF', size: '2.8 MB', downloads: 234 },
    { id: 4, name: 'Color Palette', type: 'colors', format: 'ASE', size: '1.2 KB', downloads: 456 },
    { id: 5, name: 'Typography Kit', type: 'fonts', format: 'ZIP', size: '12.4 MB', downloads: 189 },
    { id: 6, name: 'Social Media Templates', type: 'templates', format: 'PSD', size: '89.2 MB', downloads: 312 }
  ])

  // Mock API functions
  const refreshApiData = async (apiName) => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setApiStatuses(prev => ({
        ...prev,
        [apiName]: 'connected'
      }))
      setIsLoading(false)
    }, 2000)
  }

  const disconnectApi = (apiName) => {
    setApiStatuses(prev => ({
      ...prev,
      [apiName]: 'disconnected'
    }))
  }

  const connectApi = async (apiName) => {
    setIsLoading(true)
    // Simulate API connection
    setTimeout(() => {
      setApiStatuses(prev => ({
        ...prev,
        [apiName]: 'connected'
      }))
      setIsLoading(false)
    }, 3000)
  }

  // Tab navigation
  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'financials', label: 'Financials', icon: DollarSign },
    { id: 'integrations', label: 'Integrations', icon: Zap },
    { id: 'brand-kit', label: 'Brand Kit', icon: Palette },
    { id: 'resources', label: 'Resources', icon: BookOpen }
  ]

  const renderDashboard = () => (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${dashboardData.totalRevenue.toLocaleString()}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-green-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600 font-medium">+{dashboardData.revenueGrowth}%</span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Shows</p>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.totalShows}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <Music className="w-6 h-6 text-purple-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600 font-medium">+{dashboardData.showsGrowth}%</span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Artists</p>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.totalArtists}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600 font-medium">+{dashboardData.artistsGrowth}%</span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Vetted Hosts</p>
              <p className="text-2xl font-bold text-gray-900">{dashboardData.totalHosts}</p>
            </div>
            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
              <Building className="w-6 h-6 text-orange-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <TrendingUp className="w-4 h-4 text-green-500 mr-1" />
            <span className="text-sm text-green-600 font-medium">+{dashboardData.monthlyGrowth}%</span>
            <span className="text-sm text-gray-500 ml-2">vs last month</span>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Shows</h3>
          <div className="space-y-4">
            {[
              { artist: 'Sarah Mitchell', venue: 'Austin Living Room', date: '2024-01-15', revenue: '$485', status: 'completed' },
              { artist: 'Mike Rodriguez', venue: 'Dallas Backyard', date: '2024-01-14', revenue: '$320', status: 'completed' },
              { artist: 'Emma Thompson', venue: 'Houston Studio', date: '2024-01-13', revenue: '$650', status: 'upcoming' },
              { artist: 'David Chen', venue: 'San Antonio Cafe', date: '2024-01-12', revenue: '$290', status: 'completed' },
              { artist: 'Lisa Park', venue: 'Fort Worth Gallery', date: '2024-01-11', revenue: '$420', status: 'completed' }
            ].map((show, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                    <Music className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{show.artist}</p>
                    <p className="text-sm text-gray-600">{show.venue} • {show.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-gray-900">{show.revenue}</p>
                  <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    show.status === 'completed' ? 'bg-green-100 text-green-800' : 
                    show.status === 'upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {show.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">API Status</h3>
          <div className="space-y-4">
            {[
              { name: 'Manifest Financial', status: apiStatuses.manifest, lastSync: '2 min ago' },
              { name: 'BandsInTown', status: apiStatuses.bandsInTown, lastSync: '5 min ago' },
              { name: 'Spotify', status: apiStatuses.spotify, lastSync: '1 min ago' },
              { name: 'TrueFans CONNECT™', status: apiStatuses.trueFansConnect, lastSync: '3 min ago' },
              { name: 'DIALOG by Lightwork', status: apiStatuses.dialogLightwork, lastSync: '2 min ago' }
            ].map((api, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center">
                  <div className={`w-3 h-3 rounded-full mr-3 ${
                    api.status === 'connected' ? 'bg-green-500' : 
                    api.status === 'disconnected' ? 'bg-red-500' : 'bg-yellow-500'
                  }`}></div>
                  <div>
                    <p className="font-semibold text-gray-900">{api.name}</p>
                    <p className="text-sm text-gray-600">Last sync: {api.lastSync}</p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                  api.status === 'connected' ? 'bg-green-100 text-green-800' : 
                  api.status === 'disconnected' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                  {api.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  const renderFinancials = () => (
    <div className="space-y-6">
      {/* Financial Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Monthly Revenue</h3>
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <p className="text-3xl font-bold text-green-600 mb-2">$34,500</p>
          <p className="text-sm text-gray-600">+18.2% from last month</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Monthly Expenses</h3>
            <TrendingDown className="w-5 h-5 text-red-600" />
          </div>
          <p className="text-3xl font-bold text-red-600 mb-2">$20,100</p>
          <p className="text-sm text-gray-600">+12.4% from last month</p>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-bold text-gray-900">Net Profit</h3>
            <Calculator className="w-5 h-5 text-blue-600" />
          </div>
          <p className="text-3xl font-bold text-blue-600 mb-2">$14,400</p>
          <p className="text-sm text-gray-600">41.7% profit margin</p>
        </div>
      </div>

      {/* Revenue Chart */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Revenue Trends</h3>
        <div className="h-64 flex items-end justify-between space-x-2">
          {financialData.monthlyRevenue.map((month, index) => (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full flex flex-col items-center space-y-1">
                <div 
                  className="w-full bg-green-500 rounded-t"
                  style={{ height: `${(month.revenue / 35000) * 200}px` }}
                ></div>
                <div 
                  className="w-full bg-red-400 rounded-b"
                  style={{ height: `${(month.expenses / 35000) * 200}px` }}
                ></div>
              </div>
              <p className="text-xs text-gray-600 mt-2">{month.month}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded mr-2"></div>
            <span className="text-sm text-gray-600">Revenue</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-red-400 rounded mr-2"></div>
            <span className="text-sm text-gray-600">Expenses</span>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Recent Transactions</h3>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors">
            Export All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Date</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Artist</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Type</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Amount</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Status</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-900">Actions</th>
              </tr>
            </thead>
            <tbody>
              {financialData.transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b border-gray-100 hover:bg-gray-50">
                  <td className="py-3 px-4 text-gray-900">{transaction.date}</td>
                  <td className="py-3 px-4 text-gray-900">{transaction.artist}</td>
                  <td className="py-3 px-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {transaction.type.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="py-3 px-4 font-semibold text-gray-900">${transaction.amount}</td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      transaction.status === 'completed' ? 'bg-green-100 text-green-800' : 
                      transaction.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {transaction.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const renderIntegrationCard = (integration) => (
    <div key={integration.id} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className={`w-12 h-12 bg-${integration.color}-100 rounded-lg flex items-center justify-center mr-4`}>
            <integration.icon className={`w-6 h-6 text-${integration.color}-600`} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">{integration.name}</h3>
            <p className="text-sm text-gray-600">{integration.description}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
            apiStatuses[integration.id] === 'connected' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}>
            <div className={`w-2 h-2 rounded-full mr-2 ${
              apiStatuses[integration.id] === 'connected' ? 'bg-green-500' : 'bg-red-500'
            }`}></div>
            {apiStatuses[integration.id]}
          </span>
          {apiStatuses[integration.id] === 'connected' ? (
            <button 
              onClick={() => refreshApiData(integration.id)}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors flex items-center"
              disabled={isLoading}
            >
              <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              Sync
            </button>
          ) : (
            <button 
              onClick={() => connectApi(integration.id)}
              className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
              disabled={isLoading}
            >
              Connect
            </button>
          )}
        </div>
      </div>
      
      {integration.metrics && (
        <div className="grid md:grid-cols-4 gap-4">
          {integration.metrics.map((metric, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
              <p className={`text-2xl font-bold ${metric.color || 'text-gray-900'}`}>{metric.value}</p>
              <p className="text-sm text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )

  const renderIntegrations = () => {
    const integrationCategories = [
      {
        title: 'Core Platform Integrations',
        integrations: [
          {
            id: 'manifest',
            name: 'Manifest Financial',
            description: 'Transactional data and payment processing',
            icon: CreditCard,
            color: 'green',
            metrics: [
              { value: '1,247', label: 'Total Transactions' },
              { value: '$89,500', label: 'Monthly Volume', color: 'text-green-600' },
              { value: '$285', label: 'Avg Transaction', color: 'text-blue-600' },
              { value: '2 min ago', label: 'Last Sync' }
            ]
          },
          {
            id: 'bandsInTown',
            name: 'BandsInTown',
            description: 'Venue data and event information',
            icon: Building,
            color: 'purple',
            metrics: [
              { value: '2,847', label: 'Total Venues' },
              { value: '1,923', label: 'Active Venues', color: 'text-green-600' },
              { value: '124', label: 'New This Month', color: 'text-blue-600' },
              { value: '5 min ago', label: 'Last Sync' }
            ]
          },
          {
            id: 'spotify',
            name: 'Spotify',
            description: 'Music play data and analytics',
            icon: Headphones,
            color: 'green',
            metrics: [
              { value: '847,293', label: 'Total Plays' },
              { value: '23,847', label: 'Monthly Listeners', color: 'text-green-600' },
              { value: 'Acoustic Dreams', label: 'Top Track', color: 'text-blue-600' },
              { value: '1 min ago', label: 'Last Sync' }
            ]
          },
          {
            id: 'trueFansConnect',
            name: 'TrueFans CONNECT™',
            description: 'Fan engagement and community platform',
            icon: Users,
            color: 'blue',
            metrics: [
              { value: '15,847', label: 'Active Users' },
              { value: '89.2%', label: 'Engagement Rate', color: 'text-green-600' },
              { value: '342', label: 'New Signups', color: 'text-blue-600' },
              { value: '3 min ago', label: 'Last Sync' }
            ]
          },
          {
            id: 'dialogLightwork',
            name: 'DIALOG by Lightwork Digital',
            description: 'Communication and messaging platform',
            icon: MessageCircle,
            color: 'orange',
            metrics: [
              { value: '1,247', label: 'Active Conversations' },
              { value: '94.8%', label: 'Response Rate', color: 'text-green-600' },
              { value: '2.3 min', label: 'Avg Response Time', color: 'text-blue-600' },
              { value: '2 min ago', label: 'Last Sync' }
            ]
          }
        ]
      },
      {
        title: 'Travel & Accommodation',
        integrations: [
          {
            id: 'booking',
            name: 'Booking.com',
            description: 'Hotel and accommodation booking platform',
            icon: Building,
            color: 'blue'
          },
          {
            id: 'expedia',
            name: 'Expedia',
            description: 'Travel booking and accommodation services',
            icon: Plane,
            color: 'yellow'
          },
          {
            id: 'airbnb',
            name: 'Airbnb',
            description: 'Short-term rental and unique stays',
            icon: Home,
            color: 'red'
          },
          {
            id: 'hotels',
            name: 'Hotels.com',
            description: 'Hotel reservations and deals',
            icon: Building,
            color: 'red'
          }
        ]
      },
      {
        title: 'Transportation Services',
        integrations: [
          {
            id: 'uber',
            name: 'Uber',
            description: 'Ride-sharing and transportation',
            icon: Car,
            color: 'black'
          },
          {
            id: 'lyft',
            name: 'Lyft',
            description: 'Ride-sharing services',
            icon: Car,
            color: 'pink'
          },
          {
            id: 'enterprise',
            name: 'Enterprise Rent-A-Car',
            description: 'Car rental services',
            icon: Car,
            color: 'green'
          },
          {
            id: 'hertz',
            name: 'Hertz',
            description: 'Car rental and vehicle services',
            icon: Car,
            color: 'yellow'
          }
        ]
      },
      {
        title: 'Airlines & Flight Services',
        integrations: [
          {
            id: 'american',
            name: 'American Airlines',
            description: 'Flight booking and travel services',
            icon: Plane,
            color: 'red'
          },
          {
            id: 'delta',
            name: 'Delta Air Lines',
            description: 'Airline services and flight management',
            icon: Plane,
            color: 'blue'
          },
          {
            id: 'united',
            name: 'United Airlines',
            description: 'Flight booking and airline services',
            icon: Plane,
            color: 'blue'
          },
          {
            id: 'southwest',
            name: 'Southwest Airlines',
            description: 'Low-cost airline services',
            icon: Plane,
            color: 'orange'
          }
        ]
      },
      {
        title: 'Food & Catering Services',
        integrations: [
          {
            id: 'doordash',
            name: 'DoorDash',
            description: 'Food delivery and catering services',
            icon: Utensils,
            color: 'red'
          },
          {
            id: 'ubereats',
            name: 'Uber Eats',
            description: 'Food delivery platform',
            icon: Utensils,
            color: 'green'
          },
          {
            id: 'grubhub',
            name: 'Grubhub',
            description: 'Online food ordering and delivery',
            icon: Utensils,
            color: 'orange'
          }
        ]
      },
      {
        title: 'Equipment & Logistics',
        integrations: [
          {
            id: 'uhaul',
            name: 'U-Haul',
            description: 'Moving trucks and equipment rental',
            icon: Truck,
            color: 'orange'
          },
          {
            id: 'fedex',
            name: 'FedEx',
            description: 'Shipping and logistics services',
            icon: Package,
            color: 'purple'
          },
          {
            id: 'ups',
            name: 'UPS',
            description: 'Package delivery and logistics',
            icon: Package,
            color: 'yellow'
          }
        ]
      },
      {
        title: 'Marketing & Communication',
        integrations: [
          {
            id: 'mailchimp',
            name: 'Mailchimp',
            description: 'Email marketing and automation',
            icon: Mail,
            color: 'yellow'
          },
          {
            id: 'constant',
            name: 'Constant Contact',
            description: 'Email marketing platform',
            icon: Mail,
            color: 'blue'
          },
          {
            id: 'facebook',
            name: 'Facebook Business',
            description: 'Social media marketing and advertising',
            icon: Share2,
            color: 'blue'
          },
          {
            id: 'instagram',
            name: 'Instagram Business',
            description: 'Social media marketing platform',
            icon: Camera,
            color: 'pink'
          }
        ]
      },
      {
        title: 'Payment & Financial Services',
        integrations: [
          {
            id: 'stripe',
            name: 'Stripe',
            description: 'Online payment processing',
            icon: PaymentIcon,
            color: 'purple'
          },
          {
            id: 'paypal',
            name: 'PayPal',
            description: 'Digital payment platform',
            icon: PaymentIcon,
            color: 'blue'
          },
          {
            id: 'square',
            name: 'Square',
            description: 'Point of sale and payment processing',
            icon: PaymentIcon,
            color: 'black'
          }
        ]
      },
      {
        title: 'Insurance & Legal Services',
        integrations: [
          {
            id: 'progressive',
            name: 'Progressive Insurance',
            description: 'Travel and equipment insurance',
            icon: Shield,
            color: 'blue'
          },
          {
            id: 'legalzoom',
            name: 'LegalZoom',
            description: 'Legal services and contract management',
            icon: FileText,
            color: 'green'
          }
        ]
      }
    ]

    return (
      <div className="space-y-8">
        {/* Integration Overview */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Platform Ecosystem</h3>
          <p className="text-gray-600">Manage all your third-party integrations for a comprehensive tour management experience</p>
        </div>

        {/* Integration Categories */}
        {integrationCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              <span className="text-sm text-gray-500">
                {category.integrations.filter(int => apiStatuses[int.id] === 'connected').length} of {category.integrations.length} connected
              </span>
            </div>
            
            <div className="grid gap-6">
              {category.integrations.map(integration => renderIntegrationCard(integration))}
            </div>
          </div>
        ))}

        {/* Integration Stats Summary */}
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Integration Summary</h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-600">
                {Object.values(apiStatuses).filter(status => status === 'connected').length}
              </p>
              <p className="text-sm text-gray-600">Connected Services</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-red-600">
                {Object.values(apiStatuses).filter(status => status === 'disconnected').length}
              </p>
              <p className="text-sm text-gray-600">Available Services</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">{Object.keys(apiStatuses).length}</p>
              <p className="text-sm text-gray-600">Total Integrations</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-purple-600">
                {Math.round((Object.values(apiStatuses).filter(status => status === 'connected').length / Object.keys(apiStatuses).length) * 100)}%
              </p>
              <p className="text-sm text-gray-600">Platform Coverage</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderBrandKit = () => (
    <div className="space-y-6">
      {/* Brand Kit Header */}
      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">TrueFans JAM™ Brand Kit</h3>
        <p className="text-gray-600">Download logos, brand guidelines, and marketing assets</p>
      </div>

      {/* Brand Assets */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">Brand Assets</h3>
          <button className="bg-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-purple-700 transition-colors flex items-center">
            <Upload className="w-4 h-4 mr-2" />
            Upload New Asset
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brandAssets.map((asset) => (
            <div key={asset.id} className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  asset.type === 'logo' ? 'bg-purple-100' :
                  asset.type === 'document' ? 'bg-blue-100' :
                  asset.type === 'colors' ? 'bg-green-100' :
                  asset.type === 'fonts' ? 'bg-orange-100' :
                  asset.type === 'templates' ? 'bg-pink-100' : 'bg-gray-100'
                }`}>
                  {asset.type === 'logo' ? <Image className="w-5 h-5 text-purple-600" /> :
                   asset.type === 'document' ? <FileText className="w-5 h-5 text-blue-600" /> :
                   asset.type === 'colors' ? <Palette className="w-5 h-5 text-green-600" /> :
                   asset.type === 'fonts' ? <Type className="w-5 h-5 text-orange-600" /> :
                   asset.type === 'templates' ? <Image className="w-5 h-5 text-pink-600" /> :
                   <Folder className="w-5 h-5 text-gray-600" />}
                </div>
                <div className="flex space-x-2">
                  <button className="text-gray-400 hover:text-gray-600">
                    <Eye className="w-4 h-4" />
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">{asset.name}</h4>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{asset.format} • {asset.size}</span>
                <span>{asset.downloads} downloads</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Guidelines */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Color Palette</h3>
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-purple-600 rounded-lg mr-4"></div>
              <div>
                <p className="font-semibold text-gray-900">Primary Purple</p>
                <p className="text-sm text-gray-600">#7C3AED</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-pink-600 rounded-lg mr-4"></div>
              <div>
                <p className="font-semibold text-gray-900">Accent Pink</p>
                <p className="text-sm text-gray-600">#DB2777</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-600 rounded-lg mr-4"></div>
              <div>
                <p className="font-semibold text-gray-900">Secondary Blue</p>
                <p className="text-sm text-gray-600">#2563EB</p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-900 rounded-lg mr-4"></div>
              <div>
                <p className="font-semibold text-gray-900">Text Dark</p>
                <p className="text-sm text-gray-600">#111827</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Typography</h3>
          <div className="space-y-4">
            <div>
              <p className="text-2xl font-bold text-gray-900 mb-1">Inter Bold</p>
              <p className="text-sm text-gray-600">Headings and titles</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-gray-900 mb-1">Inter Semibold</p>
              <p className="text-sm text-gray-600">Subheadings and emphasis</p>
            </div>
            <div>
              <p className="text-base text-gray-900 mb-1">Inter Regular</p>
              <p className="text-sm text-gray-600">Body text and content</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">Inter Medium</p>
              <p className="text-xs text-gray-500">Small text and captions</p>
            </div>
          </div>
        </div>
      </div>

      {/* Usage Guidelines */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-4">Usage Guidelines</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-green-600">✓ Do</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Use the full logo with adequate white space</li>
              <li>• Maintain consistent color usage across materials</li>
              <li>• Use approved fonts for all text content</li>
              <li>• Keep the TrueFans JAM™ trademark notation</li>
              <li>• Use high-resolution assets for print materials</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 mb-3 text-red-600">✗ Don't</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Stretch or distort the logo proportions</li>
              <li>• Use unauthorized color variations</li>
              <li>• Place logo on busy or low-contrast backgrounds</li>
              <li>• Modify or recreate brand elements</li>
              <li>• Use outdated or low-resolution assets</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )

  const renderResources = () => (
    <div className="space-y-6">
      {/* Resources Header */}
      <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Resources & Documentation</h3>
        <p className="text-gray-600">Access guides, tutorials, and support materials</p>
      </div>

      {/* Quick Links */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { title: 'API Documentation', icon: FileText, color: 'blue', description: 'Complete API reference and guides' },
          { title: 'Video Tutorials', icon: Video, color: 'purple', description: 'Step-by-step video guides' },
          { title: 'Support Center', icon: HelpCircle, color: 'green', description: 'Get help and find answers' },
          { title: 'Best Practices', icon: Award, color: 'orange', description: 'Tips for platform success' }
        ].map((resource, index) => {
          const Icon = resource.icon
          return (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow cursor-pointer">
              <div className={`w-12 h-12 bg-${resource.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 text-${resource.color}-600`} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">{resource.title}</h4>
              <p className="text-sm text-gray-600">{resource.description}</p>
            </div>
          )
        })}
      </div>

      {/* Documentation Sections */}
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Getting Started</h3>
          <div className="space-y-3">
            {[
              'Platform Overview',
              'Setting Up Your Account',
              'Creating Your First Tour',
              'Understanding the Dashboard',
              'Managing Artists and Hosts'
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-gray-900">{item}</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">API Integration</h3>
          <div className="space-y-3">
            {[
              'Authentication Guide',
              'Manifest Financial API',
              'BandsInTown Integration',
              'Spotify API Setup',
              'Webhook Configuration'
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer">
                <span className="text-gray-900">{item}</span>
                <ExternalLink className="w-4 h-4 text-gray-400" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
        <div className="space-y-4">
          {[
            {
              question: 'How do I sync data from external APIs?',
              answer: 'Navigate to the Integrations tab and click the sync button for each connected service. Data syncs automatically every 15 minutes.'
            },
            {
              question: 'What payment methods are supported through Manifest Financial?',
              answer: 'We support all major credit cards, ACH transfers, and digital wallets through our Manifest Financial integration.'
            },
            {
              question: 'How can I customize the brand assets for my organization?',
              answer: 'Brand assets can be customized through the Brand Kit section. Upload your own assets or modify existing ones with proper permissions.'
            },
            {
              question: 'Is there a mobile app for the admin portal?',
              answer: 'Currently, the admin portal is web-based and mobile-responsive. A dedicated mobile app is planned for future release.'
            }
          ].map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button className="w-full text-left p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-gray-900">{faq.question}</h4>
                  <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </button>
              <div className="px-4 pb-4">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Support */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold mb-2">Need Additional Help?</h3>
            <p className="text-purple-100">Our support team is here to assist you with any questions or issues.</p>
          </div>
          <div className="flex space-x-3">
            <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Email Support
            </button>
            <button className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
              <MessageCircle className="w-4 h-4 mr-2" />
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard()
      case 'financials':
        return renderFinancials()
      case 'integrations':
        return renderIntegrations()
      case 'brand-kit':
        return renderBrandKit()
      case 'resources':
        return renderResources()
      default:
        return renderDashboard()
    }
  }

  return (
    <Layout 
      title="Admin Portal" 
      description="Comprehensive dashboard for managing your TrueFans JAM platform"
    >
      <div className="min-h-screen bg-gray-50 -mt-20">
        {/* Tab Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex space-x-8 overflow-x-auto">
              {tabs.map((tab) => {
                const Icon = tab.icon
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center px-1 py-4 border-b-2 font-medium text-sm whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-purple-500 text-purple-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <Icon className="w-5 h-5 mr-2" />
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderTabContent()}
        </div>
      </div>
    </Layout>
  )
}

export default AdminPortalPage
