import React from 'react';
import { Video } from 'lucide-react';
import { useLang, useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

const lessons = [
  {
    title: { en: 'Searching for Truth', es: 'En Busca de la Verdad' },
    videoId: '34565015',
  },
  {
    title: { en: 'Why Are There So Many Churches?', es: '¿Por Qué Hay Tantas Iglesias?' },
    videoId: '48952092',
  },
  {
    title: { en: 'What Must I Do To Be Saved?', es: '¿Qué Debo Hacer para Ser Salvo?' },
    videoId: '57826363',
  },
];

const VideoBibleLessonsPage: React.FC = () => {
  const t = useT();
  const lang = useLang();
  usePageMeta(
    t('Video Bible Lessons', 'Lecciones Bíblicas en Video'),
    t(
      'Watch short video Bible lessons from Webb Chapel church of Christ, including Searching for Truth and What Must I Do To Be Saved?',
      'Vea breves lecciones bíblicas en video de la iglesia de Cristo de Webb Chapel, incluyendo «En busca de la verdad» y «¿Qué debo hacer para ser salvo?»',
    ),
  );
  return (
    <div className="w-full">
      <div className="pt-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t('Video Bible Lessons', 'Lecciones Bíblicas en Video')}</h1>
          <p className="text-xl md:text-2xl text-gray-600">
            {t('Watch short lessons on the Bible at your own pace', 'Vea breves lecciones sobre la Biblia a su propio ritmo')}
          </p>
          {lang === 'es' && (
            <p className="text-gray-500 mt-3">Nota: por ahora, estos videos están disponibles solo en inglés.</p>
          )}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-10">
        {lessons.map(({ title, videoId }) => (
          <div key={videoId} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <Video className="w-6 h-6 mr-3" />
                {t(title.en, title.es)}
              </h2>
            </div>
            <div className="p-6">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://player.vimeo.com/video/${videoId}`}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                  title={t(title.en, title.es)}
                  allow="autoplay; fullscreen; picture-in-picture"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoBibleLessonsPage;
