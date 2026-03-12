import { useState } from 'react';
import { X, MapPin, Navigation, Loader } from 'lucide-react';
import RideSelector from './RideSelector';
import FareEstimate from './FareEstimate';
import DriverCard from './DriverCard';

const BookingPanel = ({ isOpen, onClose, onConfirmBooking }) => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [selectedRide, setSelectedRide] = useState(null);
  const [showEstimate, setShowEstimate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const calculateDistance = () => {
    return Math.floor(Math.random() * 20) + 5;
  };

  const calculateFare = (ride, distance) => {
    const baseFare = 50;
    return baseFare + (ride.pricePerKm * distance);
  };

  const calculateTime = (distance) => {
    return Math.round(distance * 2.5);
  };

  const handleGetEstimate = () => {
    if (pickup && dropoff && selectedRide) {
      setShowEstimate(true);
    }
  };

  const handleConfirmRide = async () => {
    setIsLoading(true);

    setTimeout(() => {
      const distance = calculateDistance();
      const fare = calculateFare(selectedRide, distance);
      const time = calculateTime(distance);

      onConfirmBooking({
        pickup,
        dropoff,
        ride: selectedRide,
        fare,
        distance,
        estimatedTime: time,
      });

      setIsLoading(false);
      resetForm();
      onClose();
    }, 2000);
  };

  const resetForm = () => {
    setPickup('');
    setDropoff('');
    setSelectedRide(null);
    setShowEstimate(false);
  };

  if (!isOpen) return null;

  const distance = showEstimate && selectedRide ? calculateDistance() : 0;
  const fare = showEstimate && selectedRide ? calculateFare(selectedRide, distance) : 0;
  const estimatedTime = showEstimate && selectedRide ? calculateTime(distance) : 0;

  return (
    <>
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" onClick={onClose}></div>

      <div className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-gray-900 z-50 shadow-2xl overflow-y-auto booking-panel">
        <div className="sticky top-0 bg-gray-900 border-b border-gray-800 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Book Your Ride</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-800 rounded-full transition-colors"
          >
            <X size={24} className="text-gray-400" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="space-y-4">
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400" size={20} />
              <input
                type="text"
                placeholder="Enter pickup location"
                value={pickup}
                onChange={(e) => setPickup(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>

            <div className="relative">
              <Navigation className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-400" size={20} />
              <input
                type="text"
                placeholder="Enter drop location"
                value={dropoff}
                onChange={(e) => setDropoff(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-colors"
              />
            </div>
          </div>

          {pickup && dropoff && (
            <div className="animate-fadeIn">
              <RideSelector selectedRide={selectedRide} onSelectRide={setSelectedRide} />

              {selectedRide && !showEstimate && (
                <button
                  onClick={handleGetEstimate}
                  className="w-full mt-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Get Fare Estimate
                </button>
              )}
            </div>
          )}

          {showEstimate && (
            <div className="animate-fadeIn">
              <FareEstimate
                fare={fare}
                distance={distance}
                estimatedTime={estimatedTime}
              />

              <DriverCard />

              <button
                onClick={handleConfirmRide}
                disabled={isLoading}
                className="w-full mt-6 py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <Loader className="animate-spin" size={20} />
                    Confirming Ride...
                  </>
                ) : (
                  'Confirm Ride'
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default BookingPanel;
