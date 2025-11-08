import { Link, useLocation } from 'react-router-dom';

export default function AdminSidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: 'Dashboard',
      path: '/admin/dashboard',
      icon: 'fas fa-chart-line',
    },
    {
      name: 'Ventas',
      path: '/admin/ventas',
      icon: 'fas fa-dollar-sign',
    },
    {
      name: 'Inventario',
      path: '/admin/inventario',
      icon: 'fas fa-boxes',
    },
    {
      name: 'Productos',
      path: '/admin/productos',
      icon: 'fas fa-shopping-bag',
    },
    {
      name: 'Pedidos',
      path: '/admin/pedidos',
      icon: 'fas fa-shopping-cart',
    },
    {
      name: 'Usuarios',
      path: '/admin/usuarios',
      icon: 'fas fa-users',
    },
  ];

  return (
    <aside className="w-64 bg-gray-800 text-white min-h-screen">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-8">Panel Admin</h2>
        <nav>
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                      isActive
                        ? 'bg-indigo-600 text-white'
                        : 'hover:bg-gray-700'
                    }`}
                  >
                    <i className={item.icon}></i>
                    <span>{item.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      
      <div className="absolute bottom-0 w-64 p-6 border-t border-gray-700">
        <Link
          to="/"
          className="flex items-center gap-3 px-4 py-3 hover:bg-gray-700 rounded-lg transition"
        >
          <i className="fas fa-arrow-left"></i>
          <span>Volver al Sitio</span>
        </Link>
      </div>
    </aside>
  );
}