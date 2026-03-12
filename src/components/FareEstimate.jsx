import { Clock, MapPin, DollarSign } from 'lucide-react';

const FareEstimate = ({ fare, distance, estimatedTime }) => {
  if (!fare) return null;

  return (
    <div className="mt-6 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700">
      <h3 className="text-xl font-semibold text-white mb-4">Fare Estimate</h3>

      <div className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-cyan-500/20 rounded-lg">
              <DollarSign size={20} className="text-cyan-400" />
            </div>
            <div>
              <p className="text-sm text-gray-400">Estimated Fare</p>
              <p className="text-2xl font-bold text-white">₹{fare}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-gray-800/50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <MapPin size={16} className="text-cyan-400" />
              <p className="text-sm text-gray-400">Distance</p>
            </div>
            <p className="text-lg font-semibold text-white">{distance} km</p>
          </div>

          <div className="p-4 bg-gray-800/50 rounded-lg">
            <div className="flex items-center space-x-2 mb-2">
              <Clock size={16} className="text-cyan-400" />
              <p className="text-sm text-gray-400">ETA</p>
            </div>
            <p className="text-lg font-semibold text-white">{estimatedTime} min</p>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-700">
          <div className="flex justify-between text-sm text-gray-400">
            <span>Base Fare</span>
            <span>₹{Math.round(fare * 0.3)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-400 mt-2">
            <span>Distance Charge</span>
            <span>₹{Math.round(fare * 0.7)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FareEstimate;
