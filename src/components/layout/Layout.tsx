import { Link, useLocation } from "react-router-dom";

const navItems = [
  { path: "/", label: "Головна", icon: "🏠" },
  { path: "/articles", label: "Статті", icon: "📚" },
  { path: "/calendar", label: "Календар", icon: "📅" },
  { path: "/diseases", label: "Хвороби", icon: "🔬" },
  { path: "/equipment", label: "Обладнання", icon: "🛠️" },
  { path: "/forum", label: "Форум", icon: "💬" },
];

function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      {/* Header */}
      <header className="bg-amber-700 text-white px-4 py-3 flex items-center gap-3 shadow-md sticky top-0 z-10">
        <span className="text-2xl">🐝</span>
        <h1 className="text-lg font-bold">Бджільництво від А до Я</h1>
      </header>

      <div className="flex flex-1">
        {/* Sidebar — тільки на десктопі */}
        <aside className="hidden md:flex flex-col w-56 bg-amber-100 border-r border-amber-200 p-4 sticky top-14 h-[calc(100vh-3.5rem)]">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
                  location.pathname === item.path
                    ? "bg-amber-700 text-white"
                    : "text-amber-900 hover:bg-amber-200"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Контент */}
        <main className="flex-1 min-w-0 w-0 p-4 pb-24 md:pb-6">{children}</main>
      </div>

      {/* Bottom nav — тільки на мобільному */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-amber-200 z-10">
        <div className="grid grid-cols-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-2 text-xs gap-1 transition-colors ${
                location.pathname === item.path
                  ? "text-amber-700 font-bold"
                  : "text-amber-500"
              }`}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="hidden xs:block">{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}

export default Layout;
