import { CheckCircle, MapPin, Navigation, Clock, DollarSign, X } from 'lucide-react';
import { drivers } from './DriverCard';

const BookingConfirmation = ({ isOpen, booking, onClose }) => {
  if (!isOpen || !booking) return null;

  const driver = drivers[Math.floor(Math.random() * drivers.length)];

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="bg-gray-900 rounded-2xl max-w-lg w-full border border-gray-800 shadow-2xl confirmation-modal overflow-hidden">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 text-center relative">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors"
            >
              <X size={20} className="text-white" />
            </button>
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center">
                <CheckCircle size={48} className="text-green-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Ride Confirmed!</h2>
            <p className="text-green-100">Your driver is on the way</p>
          </div>

          <div className="p-6 space-y-6">
            <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-3xl">
                  {driver.avatar}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white">{driver.name}</h3>
                  <p className="text-gray-400 text-sm">{driver.car}</p>
                  <p className="text-cyan-400 text-sm font-medium">{driver.carNumber}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-yellow-400">★</span>
                    <span className="text-white font-medium">{driver.rating}</span>
                    <span className="text-gray-400 text-sm">({driver.trips} trips)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-cyan-500/20 rounded-lg mt-1">
                  <MapPin size={20} className="text-cyan-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Pickup</p>
                  <p className="text-white font-medium">{booking.pickup}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="p-2 bg-blue-500/20 rounded-lg mt-1">
                  <Navigation size={20} className="text-blue-400" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-400">Drop-off</p>
                  <p className="text-white font-medium">{booking.dropoff}</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className="text-cyan-400" />
                  <p className="text-sm text-gray-400">ETA</p>
                </div>
                <p className="text-xl font-bold text-white">{booking.estimatedTime} min</p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center gap-2 mb-2">
                  <DollarSign size={16} className="text-green-400" />
                  <p className="text-sm text-gray-400">Fare</p>
                </div>
                <p className="text-xl font-bold text-white">₹{booking.fare}</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-lg p-4">
              <p className="text-cyan-400 text-sm text-center">
                Your driver will arrive in approximately 5 minutes
              </p>
            </div>

            <div className="flex gap-3">
              <button className="flex-1 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-semibold transition-colors duration-300">
                Track Driver
              </button>
              <button
                onClick={onClose}
                className="flex-1 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg font-semibold border border-gray-700 transition-colors duration-300"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingConfirmation;
