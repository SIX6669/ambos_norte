

export default function KPICard({ title, value, change, icon, color }) {
  return (
    <div className={`bg-gradient-to-br ${color} overflow-hidden shadow-lg rounded-lg fade-in hover:shadow-xl transition-shadow`}>
      <div className="p-5">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <div className="rounded-md bg-white/20 p-3">
              <i className={`${icon} text-white text-2xl`}></i>
            </div>
          </div>
          <div className="ml-5 w-0 flex-1">
            <dl>
              <dt className="text-sm font-medium text-white/80 truncate">
                {title}
              </dt>
              <dd className="flex items-baseline">
                <div className="text-2xl font-semibold text-white">
                  {value}
                </div>
                {change !== undefined && (
                  <div className={`ml-2 flex items-baseline text-sm font-semibold ${change.positivo ? 'text-green-200' : 'text-red-200'}`}>
                    <span>{getChangeIcon(change.valor)}</span>
                    <span className="ml-1">{Math.abs(change.valor).toFixed(1)}%</span>
                  </div>
                )}
              </dd>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}