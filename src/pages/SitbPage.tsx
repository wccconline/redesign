import React from 'react';
import { getImagePath } from '../utils/assets';
import { BookOpen, Mail, Clock, Users } from 'lucide-react';
import CognitoForm from '../components/CognitoForm';
import { useLang, useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

const SitbPage: React.FC = () => {
  const t = useT();
  const lang = useLang();
  usePageMeta(
    t("Studies in the Bible", "Estudios Bíblicos"),
    t(
      "Studies in the Bible is a 30-lesson Bible study course from Webb Chapel church of Christ. Learn about the course and sign up online.",
      "Estudios Bíblicos (SITB) es un curso bíblico de 30 lecciones de la iglesia de Cristo de Webb Chapel. Conozca el curso e inscríbase en línea.",
    ),
  );
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="pt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t("SITB - Studies in the Bible", "SITB - Estudios Bíblicos")}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              {t("Deepen your understanding of God's Word", "Profundice su conocimiento de la Palabra de Dios")}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Logo Section */}
        <div className="text-center mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <img 
              src={getImagePath('sitb-logo.png')} 
              alt={t("SITB Logo", "Logotipo de SITB")} 
              className="mx-auto mb-6 max-w-full h-auto"
            />
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t(
                  "\"Hello and welcome to our Bible correspondence ministry called Studies in the Bible (SITB). If you are interested in a detailed study of God's word, you've found the right ministry to do just that.",
                  "«Hola y bienvenidos a nuestro ministerio de estudio bíblico por correspondencia llamado Estudios Bíblicos (SITB, por sus siglas en inglés). Si le interesa un estudio detallado de la Palabra de Dios, ha encontrado el ministerio indicado para hacerlo.",
                )}
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t(
                  "This is a 30 lesson series and we send you 3 lessons at a time which you can complete on your own timeframe. We will not contact you in any way other than sending you the next lessons in the series.",
                  "Esta es una serie de 30 lecciones y le enviamos 3 lecciones a la vez, que puede completar a su propio ritmo. No nos comunicaremos con usted de ninguna otra manera que no sea enviándole las siguientes lecciones de la serie.",
                )}
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {t(
                  "There is absolutely no cost to you as we also include self-addressed stamped envelopes for you to return 3 lessons after you have answered the study questions for each lesson. We will check your knowledge of what you've studied and return the graded lessons with 3 new lessons.",
                  "No tiene absolutamente ningún costo, ya que también incluimos sobres con su dirección y franqueo pagado para que devuelva 3 lecciones después de haber respondido las preguntas de estudio de cada lección. Revisaremos su conocimiento de lo que ha estudiado y le devolveremos las lecciones calificadas junto con 3 lecciones nuevas.",
                )}
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                {t(
                  "No matter what your level of knowledge of the Bible is, I think you will benefit from this study.\"",
                  "Sin importar su nivel de conocimiento de la Biblia, creo que se beneficiará de este estudio.»",
                )}
              </p>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {t("Sign Up for the Course", "Inscríbase en el Curso")}
            </h2>
            
            {lang === 'es' && (
              <p className="text-gray-600 text-center mb-4">
                Nota: por ahora, el formulario de inscripción está disponible solo en inglés. Si necesita ayuda,
                comuníquese con la oficina de la iglesia al (972) 241-3293.
              </p>
            )}

            <div className="bg-gray-50 rounded-lg p-6">
              <CognitoForm 
                dataKey="V3ZbR_hZIEKuz9M3qRqiEA"
                dataForm="94"
              />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <BookOpen className="w-12 h-12 text-church-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t("30 Lessons", "30 Lecciones")}</h3>
            <p className="text-gray-600">{t("Comprehensive Bible study series", "Serie completa de estudio bíblico")}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Mail className="w-12 h-12 text-church-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t("3 at a Time", "3 a la Vez")}</h3>
            <p className="text-gray-600">{t("Receive lessons in manageable batches", "Reciba las lecciones en grupos manejables")}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Clock className="w-12 h-12 text-church-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t("Your Pace", "Su Propio Ritmo")}</h3>
            <p className="text-gray-600">{t("Study at your own comfortable speed", "Estudie a su propio ritmo")}</p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <Users className="w-12 h-12 text-church-blue mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-800 mb-2">{t("Personal", "Personal")}</h3>
            <p className="text-gray-600">{t("Individual attention and feedback", "Atención individual y comentarios")}</p>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-gradient-to-r from-church-blue to-blue-800 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t("What You'll Receive", "Lo Que Recibirá")}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">{t("Study Materials", "Materiales de Estudio")}</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></span>
                  <span>{t("30 comprehensive Bible study lessons", "30 lecciones completas de estudio bíblico")}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></span>
                  <span>{t("Study questions for each lesson", "Preguntas de estudio para cada lección")}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></span>
                  <span>{t("Self-addressed stamped envelopes", "Sobres con su dirección y franqueo pagado")}</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">{t("Personal Support", "Apoyo Personal")}</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></span>
                  <span>{t("Graded lessons with feedback", "Lecciones calificadas con comentarios")}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></span>
                  <span>{t("No cost to you", "Sin costo para usted")}</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-white rounded-full mt-2 mr-3"></span>
                  <span>{t("No pressure or follow-up calls", "Sin presión ni llamadas de seguimiento")}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SitbPage;
