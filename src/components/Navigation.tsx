
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Briefcase, FileText, Image, Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: User, label: 'About', path: '/about' },
    { icon: Briefcase, label: 'Work', path: '/work' },
    { icon: FileText, label: 'Blog', path: '/blog' },
    { icon: Image, label: 'Gallery', path: '/gallery' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavClick = (path: string) => {
    setActiveSection(path);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 hidden md:block">
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-2 py-2">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setActiveSection(item.path)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-black'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-4 right-4 z-50 md:hidden">
        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full p-3 text-white hover:bg-white/10 transition-all duration-300"
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}

        {/* Mobile Menu */}
        <div className={`fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md border-l border-white/10 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="flex flex-col pt-20 px-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => handleNavClick(item.path)}
                  className={`flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-black'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-3" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Mobile Brand */}
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Link 
          to="/"
          className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-4 py-2 text-white font-medium text-sm hover:bg-white/10 transition-all duration-300"
        >
          Roshni Kumari
        </Link>
      </div>
    </>
  );
};

export default Navigation;
