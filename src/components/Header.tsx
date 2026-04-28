import { Link } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { getImagePath } from '../utils/assets';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileLeadershipOpen, setMobileLeadershipOpen] = useState(false);
  const [mobileMembersOpen, setMobileMembersOpen] = useState(false);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-church-blue text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex items-center justify-center gap-4 flex-wrap">
          <span>13425 Webb Chapel Road, Farmers Branch, Texas 75234</span>
          <span className="text-church-gold font-bold">|</span>
          <span>(972) 241-3293</span>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b-4 border-church-gold shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">

            {/* Logo - Left */}
            <Link to="/" className="flex-shrink-0">
              <img
                src={getImagePath('logo.png')}
                alt="Webb Chapel church of Christ"
                className="h-20 w-auto"
              />
            </Link>

            {/* Desktop Navigation - Right */}
            <nav className="hidden md:flex items-center gap-7">
              <Link
                to="/"
                className="text-church-blue hover:text-church-gold font-semibold text-sm tracking-wide transition-colors"
              >
                HOME
              </Link>

              {/* Leadership Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-church-blue hover:text-church-gold font-semibold text-sm tracking-wide transition-colors">
                  LEADERSHIP
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border-t-2 border-church-gold shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/elders" className="block px-4 py-2.5 text-church-blue hover:bg-amber-50 hover:text-church-gold text-sm font-medium transition-colors border-b border-gray-100">SHEPHERDS</Link>
                  <Link to="/deacons" className="block px-4 py-2.5 text-church-blue hover:bg-amber-50 hover:text-church-gold text-sm font-medium transition-colors border-b border-gray-100">DEACONS</Link>
                  <Link to="/ministers" className="block px-4 py-2.5 text-church-blue hover:bg-amber-50 hover:text-church-gold text-sm font-medium transition-colors border-b border-gray-100">MINISTERS</Link>
                  <Link to="/staff" className="block px-4 py-2.5 text-church-blue hover:bg-amber-50 hover:text-church-gold text-sm font-medium transition-colors">STAFF</Link>
                </div>
              </div>

              <Link
                to="/livestreaming"
                className="text-church-blue hover:text-church-gold font-semibold text-sm tracking-wide transition-colors"
              >
                LIVESTREAM
              </Link>

              <Link
                to="/smallgroups"
                className="text-church-blue hover:text-church-gold font-semibold text-sm tracking-wide transition-colors"
              >
                SMALL GROUPS
              </Link>

              {/* Members Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-church-blue hover:text-church-gold font-semibold text-sm tracking-wide transition-colors">
                  MEMBERS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white border-t-2 border-church-gold shadow-lg rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link to="/calendar" className="block px-4 py-2.5 text-church-blue hover:bg-amber-50 hover:text-church-gold text-sm font-medium transition-colors border-b border-gray-100">CALENDAR</Link>
                  <Link to="/giving" className="block px-4 py-2.5 text-church-blue hover:bg-amber-50 hover:text-church-gold text-sm font-medium transition-colors border-b border-gray-100">GIVING</Link>
                  <Link to="/summerlearningcamp" className="block px-4 py-2.5 text-church-blue hover:bg-amber-50 hover:text-church-gold text-sm font-medium transition-colors border-b border-gray-100">SUMMER CAMP</Link>
                  <a href="https://onrealm.org/WebbChapelChurch" target="_blank" rel="noopener noreferrer" className="block px-4 py-2.5 text-church-blue hover:bg-amber-50 hover:text-church-gold text-sm font-medium transition-colors">REALM LOGIN</a>
                </div>
              </div>

              <Link
                to="/contact"
                className="text-church-blue hover:text-church-gold font-semibold text-sm tracking-wide transition-colors"
              >
                CONTACT
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-church-blue"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-church-blue text-white shadow-lg z-40">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-1">
              <Link
                to="/"
                className="block py-2.5 px-3 font-semibold text-sm tracking-wide hover:text-church-gold transition-colors"
                onClick={closeMobileMenu}
              >
                HOME
              </Link>

              {/* Leadership accordion */}
              <div>
                <button
                  className="w-full text-left py-2.5 px-3 font-semibold text-sm tracking-wide hover:text-church-gold transition-colors flex items-center justify-between"
                  onClick={() => setMobileLeadershipOpen(!mobileLeadershipOpen)}
                >
                  LEADERSHIP
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileLeadershipOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileLeadershipOpen && (
                  <div className="pl-6 space-y-1 border-l-2 border-church-gold ml-3 mb-1">
                    <Link to="/elders" className="block py-2 text-sm text-gray-300 hover:text-church-gold transition-colors" onClick={closeMobileMenu}>SHEPHERDS</Link>
                    <Link to="/deacons" className="block py-2 text-sm text-gray-300 hover:text-church-gold transition-colors" onClick={closeMobileMenu}>DEACONS</Link>
                    <Link to="/ministers" className="block py-2 text-sm text-gray-300 hover:text-church-gold transition-colors" onClick={closeMobileMenu}>MINISTERS</Link>
                    <Link to="/staff" className="block py-2 text-sm text-gray-300 hover:text-church-gold transition-colors" onClick={closeMobileMenu}>STAFF</Link>
                  </div>
                )}
              </div>

              <Link
                to="/livestreaming"
                className="block py-2.5 px-3 font-semibold text-sm tracking-wide hover:text-church-gold transition-colors"
                onClick={closeMobileMenu}
              >
                LIVESTREAM
              </Link>

              <Link
                to="/smallgroups"
                className="block py-2.5 px-3 font-semibold text-sm tracking-wide hover:text-church-gold transition-colors"
                onClick={closeMobileMenu}
              >
                SMALL GROUPS
              </Link>

              {/* Members accordion */}
              <div>
                <button
                  className="w-full text-left py-2.5 px-3 font-semibold text-sm tracking-wide hover:text-church-gold transition-colors flex items-center justify-between"
                  onClick={() => setMobileMembersOpen(!mobileMembersOpen)}
                >
                  MEMBERS
                  <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${mobileMembersOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileMembersOpen && (
                  <div className="pl-6 space-y-1 border-l-2 border-church-gold ml-3 mb-1">
                    <Link to="/calendar" className="block py-2 text-sm text-gray-300 hover:text-church-gold transition-colors" onClick={closeMobileMenu}>CALENDAR</Link>
                    <Link to="/giving" className="block py-2 text-sm text-gray-300 hover:text-church-gold transition-colors" onClick={closeMobileMenu}>GIVING</Link>
                    <Link to="/summerlearningcamp" className="block py-2 text-sm text-gray-300 hover:text-church-gold transition-colors" onClick={closeMobileMenu}>SUMMER CAMP</Link>
                    <a href="https://onrealm.org/WebbChapelChurch" target="_blank" rel="noopener noreferrer" className="block py-2 text-sm text-gray-300 hover:text-church-gold transition-colors" onClick={closeMobileMenu}>REALM LOGIN</a>
                  </div>
                )}
              </div>

              <Link
                to="/contact"
                className="block py-2.5 px-3 font-semibold text-sm tracking-wide hover:text-church-gold transition-colors"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
