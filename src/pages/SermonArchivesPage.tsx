import React from 'react';
import { Archive } from 'lucide-react';

const archives = [
  {
    year: 2026,
    description: 'Recent sermons and teachings from 2026',
    playlist: 'PLom-0r33d-gCrdM5y5EwTiTv-4oEMgui-',
  },
  {
    year: 2025,
    description: 'Sermons and teachings from 2025',
    playlist: 'PLom-0r33d-gAOWuczIHZAvbC_9eImSocp',
  },
  {
    year: 2024,
    description: 'Sermons and teachings from 2024',
    playlist: 'PLom-0r33d-gCan9qQJRoJMLTce2Nq0u4L',
  },
];

const SermonArchivesPage: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-church-blue to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sermon Archives</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Browse past sermons and teachings
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-10">
        {archives.map(({ year, description, playlist }) => (
          <div key={year} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <Archive className="w-6 h-6 mr-3" />
                Sermon Archives {year}
              </h2>
              <p className="text-gray-600 mt-1">{description}</p>
            </div>
            <div className="p-6">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://www.youtube.com/embed/videoseries?list=${playlist}`}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                  title={`YouTube sermon archive ${year}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SermonArchivesPage;
