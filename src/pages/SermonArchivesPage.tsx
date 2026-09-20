import React from 'react';
import { Archive, ExternalLink } from 'lucide-react';
import { archives } from '../utils/sermonArchives';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

const SermonArchivesPage: React.FC = () => {
  const t = useT();
  usePageMeta(
    t('Sermon Archives', 'Archivo de Sermones'),
    t(
      'Browse past sermons and services from Webb Chapel church of Christ, organized by year in YouTube playlists.',
      'Explore sermones y servicios anteriores de la iglesia de Cristo de Webb Chapel, organizados por año en listas de reproducción de YouTube.',
    ),
  );
  return (
    <div className="w-full">
      <div className="pt-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t('Sermon Archives', 'Archivo de Sermones')}</h1>
          <p className="text-xl md:text-2xl text-gray-600">
            {t('Browse past sermons and teachings', 'Explore sermones y enseñanzas anteriores')}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-10">
        {archives.map(({ year, description, playlist }) => (
          <div key={year} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <Archive className="w-6 h-6 mr-3" />
                {t(`Sermon Archives ${year}`, `Archivo de Sermones ${year}`)}
              </h2>
              <p className="text-gray-600 mt-1">{t(description.en, description.es)}</p>
            </div>
            <div className="p-6">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/videoseries?list=${playlist}`}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                  title={t(`YouTube sermon archive ${year}`, `Archivo de sermones en YouTube ${year}`)}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
              <a
                href={`https://www.youtube.com/playlist?list=${playlist}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-4 text-church-blue font-semibold hover:underline"
              >
                {t(`View the full ${year} playlist on YouTube`, `Ver la lista de reproducción completa de ${year} en YouTube`)}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SermonArchivesPage;
