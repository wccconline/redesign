import { Home, Phone, Mail } from 'lucide-react';
import { Link } from './LocaleLink';
import { useLang, useT } from '../utils/i18n';

function Footer() {
  const t = useT();
  const lang = useLang();
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Daily Encouragement */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t('DAILY ENCOURAGEMENT', 'ALIENTO DIARIO')}</h3>
              {lang === 'es' ? (
                <a
                  href="https://www.bible.com/es/verse-of-the-day"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white text-gray-800 rounded-lg p-4 hover:bg-gray-100 transition-colors"
                >
                  <p className="font-bold">Versículo del día</p>
                  <p className="text-sm text-gray-600">
                    Lea el versículo de hoy en la aplicación de la Biblia (YouVersion).
                  </p>
                </a>
              ) : (
                <div className="bg-white rounded-lg p-4">
                  <a 
                    href="https://biblia.com/bible/kjv/verseoftheday" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <img 
                      src="https://biblia.com/api/plugins/verseoftheday/kjv?width=300&height=250&singleImage=true&theme=imagebased&variant=light" 
                      alt="Daily Bible Verse" 
                      className="w-full h-auto rounded"
                    />
                  </a>
                </div>
              )}
            </div>

            {/* When We Meet */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t('WHEN WE MEET', 'CUÁNDO NOS REUNIMOS')}</h3>
              <div className="space-y-2">
                <div>
                  <strong className="underline">{t('SUNDAY MORNING', 'DOMINGO POR LA MAÑANA')}</strong><br />
                  <span className="ml-4">{t('9:30 am Worship', '9:30 a.m. Adoración')}</span><br />
                  <span className="ml-4">{t('11:00 am Classes for all ages', '11:00 a.m. Clases para todas las edades')}</span>
                </div>
                <br />
                <div>
                  <strong className="underline">{t('SUNDAY EVENING', 'DOMINGO POR LA TARDE')}</strong><br />
                  <span className="ml-4">{t('Small Group Meetings', 'Reuniones de Grupos Pequeños')}</span><br />
                  <span className="ml-4">{t('Contact church office', 'Comuníquese con la oficina de la iglesia')}</span>
                </div>
              </div>
            </div>

            {/* Where We Meet */}
            <div>
              <h3 className="text-xl font-bold mb-4">{t('WHERE WE MEET', 'DÓNDE NOS REUNIMOS')}</h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Home className="h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <p>{t('Webb Chapel church of Christ', 'Iglesia de Cristo Webb Chapel')}</p>
                    <p>13425 Webb Chapel Road,</p>
                    <p>Farmers Branch, Texas 75234</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 flex-shrink-0" />
                  <p>(972) 241-3293</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-3 flex-shrink-0" />
                  <Link 
                    to="/contact" 
                    className="underline hover:text-gray-300 transition-colors"
                  >
                    {t('Contact Us', 'Contáctenos')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Footer */}
      <div className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              {t('© Overseen by the Webb Chapel church of Christ Eldership', '© Bajo la supervisión de los ancianos de la iglesia de Cristo de Webb Chapel')}
              <span className="mx-2">|</span>
              <Link to="/privacy" className="underline hover:text-gray-300 transition-colors">
                {t('Privacy Notice', 'Aviso de Privacidad')}
              </Link>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/WebbChapelUpdates"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.874v2.25h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com/webbchapel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button 
        className="fixed bottom-6 right-6 bg-church-blue text-white p-3 rounded-full shadow-lg hover:bg-blue-800 transition-colors z-50"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>
    </>
  );
};

export default Footer;
