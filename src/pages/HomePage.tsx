import React from 'react';
import { Link } from '../components/LocaleLink';
import { getImagePath } from '../utils/assets';
import { useLang, useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

const HomePage: React.FC = () => {
  const t = useT();
  const lang = useLang();
  usePageMeta(
    undefined,
    t(
      'Webb Chapel church of Christ in Farmers Branch, Texas. Join us Sundays at 9:30 AM for worship and Bible classes, or watch our livestream online.',
      'Iglesia de Cristo Webb Chapel en Farmers Branch, Texas. Acompáñenos los domingos a las 9:30 a.m. para la adoración y las clases bíblicas, o vea nuestra transmisión en vivo.',
    ),
  );
  return (
    <div className="w-full">
      {/* Hero: the graphic is English-only, so Spanish gets the same message as text */}
      {lang === 'es' ? (
        <section className="bg-gradient-to-r from-church-blue to-blue-800 text-white py-10">
          <div className="container mx-auto px-4 max-w-5xl grid md:grid-cols-2 gap-6">
            <div className="rounded-lg bg-[#2fc70a] p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em]">NUESTRA VISIÓN</h2>
              <p className="mt-3 text-xl md:text-2xl">“Viviendo transformados por medio de Cristo para servir”</p>
            </div>
            <div className="rounded-lg bg-[#10b0e0] p-6 text-center">
              <h2 className="text-2xl md:text-3xl font-bold tracking-[0.2em]">NUESTRA MISIÓN</h2>
              <p className="mt-3 text-xl md:text-2xl">
                Glorificamos a Dios amándonos unos a otros, alcanzando a otros y andando en Su camino
              </p>
            </div>
          </div>
        </section>
      ) : (
        <section className="relative">
          <img
            src={getImagePath('slider3.jpg')}
            alt="Our Vision: Living Transformed Through Christ To Serve. Our Mission: We glorify God by Loving one another, Reaching out to others, Walking in His way"
            className="w-full h-auto"
          />
        </section>
      )}

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-church-gold font-bold tracking-[0.14em] text-sm uppercase">
            Farmers Branch, Texas
          </p>
          <h1 className="font-questrial text-3xl md:text-4xl text-church-blue mt-2 mb-4">
            {t("You're invited", "Le invitamos")}
          </h1>
          <p className="max-w-xl mx-auto text-lg text-gray-600 leading-relaxed">
            {t(
              'Simply Christians, following the pattern of the first century church. Come as you are and worship with us.',
              'Simplemente cristianos, siguiendo el modelo de la iglesia del primer siglo. Venga tal como es y adore con nosotros.',
            )}
          </p>

          <blockquote className="relative max-w-3xl mx-auto my-10 px-8 py-7 bg-church-blue text-white rounded-xl text-xl italic leading-relaxed">
            <span
              aria-hidden="true"
              className="absolute -top-1 left-4 text-7xl leading-none text-church-gold not-italic font-serif"
            >
              &ldquo;
            </span>
            {t(
              'Come, you children, listen to me; I will teach you the fear of the Lord. Depart from evil and do good; seek peace and pursue it.',
              'Venid, hijos, oídme; el temor de Jehová os enseñaré. Apártate del mal, y haz el bien; busca la paz, y síguela.',
            )}
            <cite className="block mt-3 text-base not-italic font-bold text-church-gold">
              {t(<>Psalm 34:11&ndash;14</>, <>Salmo 34:11&ndash;14 (RVR1960)</>)}
            </cite>
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link
              to="/imnewhere"
              className="block p-5 border-2 border-gray-200 rounded-xl text-church-blue font-bold hover:border-church-gold hover:shadow-md transition"
            >
              {t('Plan your visit', 'Planee su visita')}
              <span className="block mt-1 text-sm font-normal text-gray-600">
                {t("Times, what to expect", "Horarios y qué esperar")}
              </span>
            </Link>
            <Link
              to="/livestreaming"
              className="block p-5 border-2 border-gray-200 rounded-xl text-church-blue font-bold hover:border-church-gold hover:shadow-md transition"
            >
              {t('Watch live', 'Vea en vivo')}
              <span className="block mt-1 text-sm font-normal text-gray-600">
                {t("Sundays at 9:30 AM", "Domingos a las 9:30 a.m.")}
              </span>
            </Link>
            <Link
              to="/smallgroups"
              className="block p-5 border-2 border-gray-200 rounded-xl text-church-blue font-bold hover:border-church-gold hover:shadow-md transition"
            >
              {t('Small groups', 'Grupos pequeños')}
              <span className="block mt-1 text-sm font-normal text-gray-600">
                {t("Find one near you", "Encuentre uno cerca de usted")}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Resource Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {t("RESOURCE LINKS", "RECURSOS")}
          </h1>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <a 
              href="http://www.eem.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
            >
              <img 
                src={getImagePath('eem.jpg')} 
                alt="Eastern European Missions" 
                className="w-full h-20 object-contain mb-2"
              />
              <p className="text-sm text-gray-600">Eastern European Missions</p>
            </a>
            
            <a 
              href="http://www.greatcities.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
            >
              <img 
                src={getImagePath('gcm.jpg')} 
                alt="Great Cities Missions" 
                className="w-full h-20 object-contain mb-2"
              />
              <p className="text-sm text-gray-600">Great Cities Missions</p>
            </a>
            
            <a 
              href="http://www.jamesgroupministries.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
            >
              <img 
                src={getImagePath('jamesgroup.jpg')} 
                alt="James Group Ministries" 
                className="w-full h-20 object-contain mb-2"
              />
              <p className="text-sm text-gray-600">James Group Ministries</p>
            </a>
            
            <a 
              href="http://www.mrnet.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
            >
              <img 
                src={getImagePath('mrn.jpg')} 
                alt="Missions Resource Network" 
                className="w-full h-20 object-contain mb-2"
              />
              <p className="text-sm text-gray-600">Missions Resource Network</p>
            </a>
            
            <Link 
              to="/sitb"
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
            >
              <img 
                src={getImagePath('sitb.jpg')} 
                alt={t("Studies In The Bible", "Estudios Bíblicos")} 
                className="w-full h-20 object-contain mb-2"
              />
              <p className="text-sm text-gray-600">{t('Studies In The Bible', 'Estudios Bíblicos')}</p>
            </Link>
            
            <a 
              href="http://www.worldbibleschool.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
            >
              <img 
                src={getImagePath('wbs.jpg')} 
                alt="World Bible School" 
                className="w-full h-20 object-contain mb-2"
              />
              <p className="text-sm text-gray-600">World Bible School</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
