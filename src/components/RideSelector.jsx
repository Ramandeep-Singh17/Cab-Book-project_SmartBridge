import { Car, Users } from 'lucide-react';

const rideTypes = [
  {
    id: 'mini',
    name: 'Mini',
    description: 'Affordable compact rides',
    capacity: '4 seats',
    pricePerKm: 12,
    icon: Car,
    color: 'from-green-400 to-emerald-600',
  },
  {
    id: 'sedan',
    name: 'Sedan',
    description: 'Comfortable sedans',
    capacity: '4 seats',
    pricePerKm: 18,
    icon: Car,
    color: 'from-blue-400 to-blue-600',
  },
  {
    id: 'suv',
    name: 'SUV',
    description: 'Spacious & premium',
    capacity: '6 seats',
    pricePerKm: 25,
    icon: Users,
    color: 'from-purple-400 to-purple-600',
  },
];

const RideSelector = ({ selectedRide, onSelectRide }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white mb-4">Select Your Ride</h3>
      <div className="grid grid-cols-1 gap-4">
        {rideTypes.map((ride) => {
          const Icon = ride.icon;
          const isSelected = selectedRide?.id === ride.id;

          return (
            <button
              key={ride.id}
              onClick={() => onSelectRide(ride)}
              className={`relative p-4 rounded-xl border-2 transition-all duration-300 text-left ${
                isSelected
                  ? 'border-cyan-500 bg-cyan-500/10'
                  : 'border-gray-700 bg-gray-800/50 hover:border-gray-600'
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-full bg-gradient-to-r ${ride.color}`}>
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{ride.name}</h4>
                    <p className="text-sm text-gray-400">{ride.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{ride.capacity}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xl font-bold text-white">₹{ride.pricePerKm}</div>
                  <div className="text-xs text-gray-400">per km</div>
                </div>
              </div>

              {isSelected && (
                <div className="absolute top-2 right-2">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RideSelector;
export { rideTypes };
