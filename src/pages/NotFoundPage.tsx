import React from 'react';
import { Link } from '../components/LocaleLink';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

const NotFoundPage: React.FC = () => {
  const t = useT();
  usePageMeta(
    t('Page Not Found', 'Página No Encontrada'),
    t(
      'The page you were looking for could not be found. Return to the Webb Chapel church of Christ home page.',
      'No pudimos encontrar la página que busca. Regrese a la página de inicio de la Iglesia de Cristo Webb Chapel.',
    ),
  );

  return (
    <div className="w-full">
      <div className="container mx-auto px-4 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">{t('Page Not Found', 'Página No Encontrada')}</h1>
        <p className="text-xl text-gray-600 mb-8">
          {t("Sorry, we couldn't find the page you were looking for.", 'Lo sentimos, no pudimos encontrar la página que buscaba.')}
        </p>
        <Link
          to="/"
          className="inline-block bg-church-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
        >
          {t('Go to the Home Page', 'Ir a la Página de Inicio')}
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
