import { Star, Phone, MessageCircle } from 'lucide-react';

const drivers = [
  { id: 1, name: 'Rajesh Kumar', rating: 4.9, trips: 1250, car: 'Honda City', carNumber: 'DL 01 AB 1234', avatar: '👨' },
  { id: 2, name: 'Amit Sharma', rating: 4.8, trips: 980, car: 'Maruti Swift', carNumber: 'DL 02 CD 5678', avatar: '👨‍🦱' },
  { id: 3, name: 'Vikram Singh', rating: 4.9, trips: 1450, car: 'Toyota Innova', carNumber: 'DL 03 EF 9012', avatar: '🧑' },
];

const DriverCard = ({ driver }) => {
  const selectedDriver = driver || drivers[Math.floor(Math.random() * drivers.length)];

  return (
    <div className="mt-6 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
      <h3 className="text-xl font-semibold text-white mb-4">Your Driver</h3>

      <div className="flex items-start space-x-4">
        <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-full flex items-center justify-center text-3xl">
          {selectedDriver.avatar}
        </div>

        <div className="flex-1">
          <h4 className="text-lg font-semibold text-white">{selectedDriver.name}</h4>
          <div className="flex items-center space-x-2 mt-1">
            <div className="flex items-center space-x-1">
              <Star size={16} className="text-yellow-400 fill-yellow-400" />
              <span className="text-white font-medium">{selectedDriver.rating}</span>
            </div>
            <span className="text-gray-400 text-sm">•</span>
            <span className="text-gray-400 text-sm">{selectedDriver.trips} trips</span>
          </div>

          <div className="mt-3 p-3 bg-gray-800/50 rounded-lg">
            <p className="text-sm text-gray-400">Vehicle</p>
            <p className="text-white font-medium">{selectedDriver.car}</p>
            <p className="text-cyan-400 text-sm mt-1">{selectedDriver.carNumber}</p>
          </div>

          <div className="flex gap-3 mt-4">
            <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition-colors duration-300">
              <Phone size={18} />
              <span className="text-sm font-medium">Call</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300">
              <MessageCircle size={18} />
              <span className="text-sm font-medium">Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverCard;
export { drivers };
