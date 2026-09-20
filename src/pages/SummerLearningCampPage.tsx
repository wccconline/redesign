import React from 'react';
import { Link } from '../components/LocaleLink';
import { getImagePath } from '../utils/assets';
import { Calendar, Clock, Users, BookOpen, Music, Utensils } from 'lucide-react';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

const SummerLearningCampPage: React.FC = () => {
  const t = useT();
  usePageMeta(
    t("Summer Learning Camp", "Campamento de Aprendizaje de Verano"),
    t(
      "A free summer learning camp for children at Webb Chapel church of Christ, with reading tutoring, science, character class, music and lunch.",
      "Un campamento de aprendizaje de verano gratuito para niños en la iglesia de Cristo de Webb Chapel, con tutoría de lectura, ciencias, clase de carácter, música y almuerzo.",
    ),
  );
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="pt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t("Summer Learning Camp", "Campamento de Aprendizaje de Verano")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              {t("Fun learning and character development for children", "Aprendizaje divertido y desarrollo del carácter para niños")}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <img 
              src={getImagePath('thumb-summerlearningcamp.jpg')} 
              alt={t("Summer Learning Camp Logo", "Logotipo del Campamento de Aprendizaje de Verano")} 
              className="mx-auto mb-6 max-w-full h-auto"
            />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              {t("Summer Learning Camp 2027", "Campamento de Aprendizaje de Verano 2027")}
            </h2>
          </div>
        </div>

        {/* Main Information */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t(
                  <>
                    <strong>Webb Chapel Church of Christ</strong><br />
                    Tuesdays and Thursdays<br />
                    10:00am-12:30pm<br />
                    Dates TBD<br />
                    Reading Tutoring, Fun with Science, Character Class, Music, and lots of fun!<br />
                    Lunch provided<br />
                    <strong>All Free!</strong>
                  </>,
                  <>
                    <strong>Iglesia de Cristo Webb Chapel</strong><br />
                    Martes y jueves<br />
                    10:00 a.m. a 12:30 p.m.<br />
                    Fechas por confirmar<br />
                    Tutoría de lectura, diversión con la ciencia, clase de carácter, música y mucha diversión.<br />
                    Almuerzo incluido<br />
                    <strong>¡Todo gratis!</strong>
                  </>,
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Program Details */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <BookOpen className="w-12 h-12 text-church-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{t("Reading Tutoring", "Tutoría de Lectura")}</h3>
            <p className="text-gray-600 text-center">
              {t("Individualized reading support to help children improve their literacy skills", "Apoyo de lectura individualizado para ayudar a los niños a mejorar sus habilidades de lectura y escritura")}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <Users className="w-12 h-12 text-church-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{t("Character Class", "Clase de Carácter")}</h3>
            <p className="text-gray-600 text-center">
              {t("Building strong character through fun activities and biblical principles", "Formando un carácter sólido mediante actividades divertidas y principios bíblicos")}
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <Music className="w-12 h-12 text-church-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{t("Music", "Música")}</h3>
            <p className="text-gray-600 text-center">
              {t("Musical activities and learning to develop creativity and rhythm", "Actividades musicales y aprendizaje para desarrollar la creatividad y el ritmo")}
            </p>
          </div>
        </div>

        {/* Schedule Information */}
        <div className="bg-gradient-to-r from-church-blue to-blue-800 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t("Program Schedule", "Horario del Programa")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center">
              <Calendar className="w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-bold">{t("Days", "Días")}</h3>
                <p className="text-blue-100">{t("Tuesdays and Thursdays", "Martes y jueves")}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Clock className="w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-bold">{t("Time", "Hora")}</h3>
                <p className="text-blue-100">{t("10:00 AM - 12:30 PM", "10:00 a.m. - 12:30 p.m.")}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Calendar className="w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-bold">{t("Duration", "Duración")}</h3>
                <p className="text-blue-100">{t("TBD", "Por confirmar")}</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <Utensils className="w-8 h-8 mr-4" />
              <div>
                <h3 className="text-xl font-bold">{t("Lunch", "Almuerzo")}</h3>
                <p className="text-blue-100">{t("Provided daily", "Incluido diariamente")}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Activities Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("What We Offer", "Lo Que Ofrecemos")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-church-blue rounded-full mt-2 mr-3"></span>
                <span>{t("Reading Tutoring", "Tutoría de Lectura")}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-church-blue rounded-full mt-2 mr-3"></span>
                <span>{t("Fun with Science", "Diversión con la Ciencia")}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-church-blue rounded-full mt-2 mr-3"></span>
                <span>{t("Character Development", "Desarrollo del Carácter")}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-church-blue rounded-full mt-2 mr-3"></span>
                <span>{t("Music Activities", "Actividades Musicales")}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-church-blue rounded-full mt-2 mr-3"></span>
                <span>{t("Interactive Learning", "Aprendizaje Interactivo")}</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">{t("Program Benefits", "Beneficios del Programa")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-church-blue rounded-full mt-2 mr-3"></span>
                <span>{t("Completely Free", "Completamente Gratis")}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-church-blue rounded-full mt-2 mr-3"></span>
                <span>{t("Lunch Provided", "Almuerzo Incluido")}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-church-blue rounded-full mt-2 mr-3"></span>
                <span>{t("Safe Environment", "Ambiente Seguro")}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-church-blue rounded-full mt-2 mr-3"></span>
                <span>{t("Experienced Teachers", "Maestros con Experiencia")}</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-church-blue rounded-full mt-2 mr-3"></span>
                <span>{t("Fun Activities", "Actividades Divertidas")}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              {t("Ready to Join?", "¿Desea Participar?")}
            </h2>
            <p className="text-gray-600 mb-6">
              {t("Contact us for more information or to register your child for the Summer Learning Camp.", "Comuníquese con nosotros para obtener más información o para inscribir a su hijo o hija en el Campamento de Aprendizaje de Verano.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-church-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                {t("Contact Us", "Contáctenos")}
              </Link>
              <Link 
                to="/imnewhere" 
                className="bg-gray-200 text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                {t("Learn More", "Más Información")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerLearningCampPage;
