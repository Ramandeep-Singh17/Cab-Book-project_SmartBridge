import { Shield, Clock, DollarSign, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'All our drivers are verified and background checked for your safety',
    color: 'from-green-400 to-emerald-600',
  },
  {
    icon: Clock,
    title: '24/7 Available',
    description: 'Book rides anytime, anywhere. We are always at your service',
    color: 'from-blue-400 to-blue-600',
  },
  {
    icon: DollarSign,
    title: 'Affordable Pricing',
    description: 'Transparent pricing with no hidden charges. Pay what you see',
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    icon: Users,
    title: 'Professional Drivers',
    description: 'Experienced and courteous drivers to ensure a comfortable journey',
    color: 'from-purple-400 to-purple-600',
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-full">
            <span className="text-cyan-400 text-sm font-medium">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience the
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"> Difference</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We provide premium cab services with a focus on safety, comfort, and reliability
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 group-hover:shadow-lg transition-shadow duration-300`}>
                  <Icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">
              Your Journey, Our Priority
            </h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              At RideFlow, we believe that every journey should be comfortable, safe, and hassle-free.
              Our mission is to provide you with the best cab service experience through technology and
              exceptional service.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
              With a fleet of well-maintained vehicles and a team of professional drivers, we ensure
              that your ride is not just a commute, but an experience to remember.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">GPS Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Easy Payments</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">Verified Drivers</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <div className="space-y-6">
                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl">
                  <span className="text-gray-400">Total Rides</span>
                  <span className="text-2xl font-bold text-cyan-400">50,000+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl">
                  <span className="text-gray-400">Active Drivers</span>
                  <span className="text-2xl font-bold text-blue-400">500+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl">
                  <span className="text-gray-400">Cities Covered</span>
                  <span className="text-2xl font-bold text-purple-400">25+</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-900/50 rounded-xl">
                  <span className="text-gray-400">Customer Rating</span>
                  <span className="text-2xl font-bold text-yellow-400">4.8 ★</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
