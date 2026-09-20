import { Link as RouterLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from './LocaleLink';
import { getImagePath } from '../utils/assets';
import { langFromPathname, localizedPath, stripLang, useT } from '../utils/i18n';
import type { Lang } from '../utils/i18n';

/** Link to the same page in the other language. */
function LanguageSwitcher({ className, onClick }: { className: string; onClick?: () => void }) {
  const { pathname } = useLocation();
  const alt: Lang = langFromPathname(pathname) === 'es' ? 'en' : 'es';
  const to = alt === 'es' ? localizedPath(pathname, 'es') : stripLang(pathname);
  return (
    <RouterLink to={to} lang={alt} hrefLang={alt} onClick={onClick} className={className}>
      {alt === 'es' ? 'ESPAÑOL' : 'ENGLISH'}
    </RouterLink>
  );
}

function Header() {
  const t = useT();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  return (
    <>
      {/* Main Header */}
      <header
        className="bg-white shadow-md h-32 flex items-center header-background"
        style={{ backgroundImage: `url(${getImagePath('headerbg.jpg')})` }}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
            {/* Mobile Menu Button - Left side */}
            <button 
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Desktop Left Navigation */}
            <nav className="hidden lg:flex items-center justify-end space-x-6">
              {/* Leadership Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-800 hover:text-church-blue font-semibold transition-colors">
                  {t('LEADERSHIP', 'LIDERAZGO')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link 
                    to="/elders" 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('SHEPHERDS', 'ANCIANOS')}
                  </Link>
                  <Link 
                    to="/deacons" 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('DEACONS', 'DIÁCONOS')}
                  </Link>
                  <Link 
                    to="/ministers" 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('MINISTERS', 'MINISTROS')}
                  </Link>
                  <Link 
                    to="/staff" 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('STAFF', 'EQUIPO')}
                  </Link>
                </div>
              </div>

              {/* Livestream Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-800 hover:text-church-blue font-semibold transition-colors">
                  {t('LIVESTREAM', 'EN VIVO')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link
                    to="/livestreaming"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('LIVE STREAM', 'TRANSMISIÓN EN VIVO')}
                  </Link>
                  <Link
                    to="/sermonarchives"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('SERMON ARCHIVES', 'ARCHIVO DE SERMONES')}
                  </Link>
                  <Link
                    to="/videobiblelessons"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('VIDEO BIBLE LESSONS', 'LECCIONES BÍBLICAS EN VIDEO')}
                  </Link>
                </div>
              </div>

              {/* Ministries Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-800 hover:text-church-blue font-semibold transition-colors">
                  {t('MINISTRIES', 'MINISTERIOS')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-64 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link
                    to="/smallgroups"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('SMALL GROUPS', 'GRUPOS PEQUEÑOS')}
                  </Link>
                  <Link
                    to="/missionaries"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('MISSIONARIES', 'MISIONEROS')}
                  </Link>
                  <Link
                    to="/summerlearningcamp"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('SUMMER LEARNING CAMP', 'CAMPAMENTO DE VERANO')}
                  </Link>
                  <Link
                    to="/sitb"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('STUDIES IN THE BIBLE', 'ESTUDIOS BÍBLICOS')}
                  </Link>
                  <Link
                    to="/ministries"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('ALL MINISTRIES', 'TODOS LOS MINISTERIOS')}
                  </Link>
                </div>
              </div>
            </nav>

            {/* Logo - centered on both mobile and desktop, with breathing room beside the menus */}
            <div className="flex-shrink-0 lg:px-4 xl:px-8">
              <Link to="/">
                <img 
                  src={getImagePath('logo.png')} 
                  alt={t('Webb Chapel church of Christ', 'Iglesia de Cristo Webb Chapel')} 
                  className="h-20 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Right Navigation */}
            <nav className="hidden lg:flex items-center justify-start space-x-6">
              {/* Members Dropdown */}
              <div className="relative group">
                <button className="flex items-center text-gray-800 hover:text-church-blue font-semibold transition-colors">
                  {t('MEMBERS', 'MIEMBROS')}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <Link 
                    to="/calendar" 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('CALENDAR', 'CALENDARIO')}
                  </Link>
                  <Link 
                    to="/giving" 
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('GIVING', 'OFRENDAS')}
                  </Link>
                  <a 
                    href="https://onrealm.org/WebbChapelChurch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                  >
                    {t('REALM LOGIN', 'ACCESO A REALM')}
                  </a>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="text-gray-800 hover:text-church-blue font-semibold transition-colors"
              >
                {t('CONTACT', 'CONTACTO')}
              </Link>

              <LanguageSwitcher className="whitespace-nowrap text-sm font-semibold border-2 border-church-blue text-church-blue rounded-md px-3 py-1 hover:bg-church-blue hover:text-white transition-colors" />
            </nav>

            {/* Spacer for mobile to balance the hamburger button */}
            <div className="lg:hidden w-10"></div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg border-t">
          <div className="container mx-auto px-4 py-4">
            <nav className="space-y-4">
              <div className="space-y-2">
                <div className="text-gray-800 font-semibold py-2">{t('LEADERSHIP', 'LIDERAZGO')}</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/elders" 
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('SHEPHERDS', 'ANCIANOS')}
                  </Link>
                  <Link 
                    to="/deacons" 
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('DEACONS', 'DIÁCONOS')}
                  </Link>
                  <Link 
                    to="/ministers" 
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('MINISTERS', 'MINISTROS')}
                  </Link>
                  <Link 
                    to="/staff" 
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('STAFF', 'EQUIPO')}
                  </Link>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-gray-800 font-semibold py-2">{t('LIVESTREAM', 'EN VIVO')}</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/livestreaming"
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('LIVE STREAM', 'TRANSMISIÓN EN VIVO')}
                  </Link>
                  <Link
                    to="/sermonarchives"
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('SERMON ARCHIVES', 'ARCHIVO DE SERMONES')}
                  </Link>
                  <Link
                    to="/videobiblelessons"
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('VIDEO BIBLE LESSONS', 'LECCIONES BÍBLICAS EN VIDEO')}
                  </Link>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-gray-800 font-semibold py-2">{t('MINISTRIES', 'MINISTERIOS')}</div>
                <div className="pl-4 space-y-2">
                  <Link
                    to="/smallgroups"
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('SMALL GROUPS', 'GRUPOS PEQUEÑOS')}
                  </Link>
                  <Link
                    to="/missionaries"
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('MISSIONARIES', 'MISIONEROS')}
                  </Link>
                  <Link
                    to="/summerlearningcamp"
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('SUMMER LEARNING CAMP', 'CAMPAMENTO DE VERANO')}
                  </Link>
                  <Link
                    to="/sitb"
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('STUDIES IN THE BIBLE', 'ESTUDIOS BÍBLICOS')}
                  </Link>
                  <Link
                    to="/ministries"
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('ALL MINISTRIES', 'TODOS LOS MINISTERIOS')}
                  </Link>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="text-gray-800 font-semibold py-2">{t('MEMBERS', 'MIEMBROS')}</div>
                <div className="pl-4 space-y-2">
                  <Link 
                    to="/calendar" 
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('CALENDAR', 'CALENDARIO')}
                  </Link>
                  <Link 
                    to="/giving" 
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('GIVING', 'OFRENDAS')}
                  </Link>
                  <a 
                    href="https://onrealm.org/WebbChapelChurch" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-gray-600 hover:text-church-blue transition-colors py-1"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('REALM LOGIN', 'ACCESO A REALM')}
                  </a>
                </div>
              </div>

              <Link 
                to="/contact" 
                className="block text-gray-800 hover:text-church-blue font-semibold transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t('CONTACT', 'CONTACTO')}
              </Link>

              <LanguageSwitcher
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center text-sm font-semibold border-2 border-church-blue text-church-blue rounded-md px-3 py-2 hover:bg-church-blue hover:text-white transition-colors"
              />
            </nav>
          </div>
        </div>
      )}

      {/* Contact Bar */}
      <div className="w-full text-center church-blue-background text-white font-bold py-2">
        <Link to="/contact" className="hover:underline">
          13425 Webb Chapel Road, Farmers Branch, Texas 75234
        </Link>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        <a href="tel:+19722413293" className="hover:underline">
          (972) 241-3293
        </a>
      </div>
    </>
  );
};

export default Header;
