import React from 'react';
import { Link } from '../components/LocaleLink';
import { Play, Archive, Calendar, Clock } from 'lucide-react';
import { archiveYearRange } from '../utils/sermonArchives';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

const LiveStreamingPage: React.FC = () => {
  const t = useT();
  usePageMeta(
    t('Live Stream Sunday Worship', 'Transmisión en Vivo de la Adoración del Domingo'),
    t(
      'Watch Sunday worship from Webb Chapel church of Christ live on YouTube, every Sunday at 9:30 AM. No registration required.',
      'Vea en vivo por YouTube la adoración del domingo de la iglesia de Cristo de Webb Chapel, todos los domingos a las 9:30 a.m. No se requiere registro.',
    ),
  );
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="pt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t('Live Streaming Sunday Worship', 'Transmisión en Vivo de la Adoración del Domingo')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              {t('Join us for worship from anywhere', 'Acompáñenos en la adoración desde cualquier lugar')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Live Stream Section */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {t('Sunday Worship Service', 'Servicio de Adoración del Domingo')}
              </h2>
              
              {/* Live Stream Embed */}
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.youtube.com/embed/live_stream?channel=UC-ndzr4_oUM97yv5K_-B4vQ"
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                  title={t('Webb Chapel Livestream', 'Transmisión en vivo de Webb Chapel')}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              
              <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  {t('Sundays at 9:30 AM', 'Domingos a las 9:30 a.m.')}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {t('Weekly Service', 'Servicio semanal')}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sermon Archives Link */}
        <Link
          to="/sermonarchives"
          className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between hover:shadow-xl transition-shadow cursor-pointer"
        >
          <div className="flex items-center">
            <Archive className="w-6 h-6 mr-3 text-church-blue" />
            <div>
              <h2 className="text-xl font-bold text-gray-800">{t('Sermon Archives', 'Archivo de Sermones')}</h2>
              <p className="text-gray-600 text-sm mt-1">{t('Browse past sermons from', 'Explore sermones anteriores de')} {archiveYearRange()}</p>
            </div>
          </div>
          <span className="bg-church-blue text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-800 transition-colors">
            {t('View Archives', 'Ver Archivo')}
          </span>
        </Link>

        {/* Additional Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {t('How to Watch', 'Cómo Ver la Transmisión')}
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start">
                <Play className="w-5 h-5 mr-2 mt-0.5 text-church-blue" />
                <span>{t('Click play on the live stream above', 'Haga clic en reproducir en la transmisión en vivo de arriba')}</span>
              </li>
              <li className="flex items-start">
                <Play className="w-5 h-5 mr-2 mt-0.5 text-church-blue" />
                <span>{t('Stream works on all devices', 'La transmisión funciona en todos los dispositivos')}</span>
              </li>
              <li className="flex items-start">
                <Play className="w-5 h-5 mr-2 mt-0.5 text-church-blue" />
                <span>{t('No registration required', 'No se requiere registro')}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {t('Service Times', 'Horarios de Servicio')}
            </h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium">{t('Sunday Worship', 'Adoración del Domingo')}</span>
                <span className="text-church-blue font-semibold">{t('9:30 AM', '9:30 a.m.')}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="font-medium">{t('Sunday Bible Study', 'Estudio Bíblico del Domingo')}</span>
                <span className="text-church-blue font-semibold">{t('11:00 AM', '11:00 a.m.')}</span>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveStreamingPage;
