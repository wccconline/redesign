import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

const CALENDAR_URL =
  'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&src=Y180NzYxNjRlNDhmNjFjNWJkNTgzMTE4NjU4OWU3YWViMjY3OWM1MGJmMTYxMTRmZjE2MTg5ODFiNWE5NDk5MzkwQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%230b8043';

// Full-page public view of the church events calendar ("Webb Chapel Events", a secondary calendar
// owned by wccconline@webbchapel.org). Visitors can only see it while it is shared publicly.
const CALENDAR_FULL_URL =
  'https://calendar.google.com/calendar/embed?src=c_476164e48f61c5bd5831186589e7aeb2679c50bf16114ff1618981b5a9499390%40group.calendar.google.com&ctz=America%2FChicago';

const CalendarPage: React.FC = () => {
  const t = useT();
  usePageMeta(
    t('Calendar', 'Calendario'),
    t(
      'See upcoming events and activities at Webb Chapel church of Christ, including worship, Bible classes and small groups.',
      'Vea los próximos eventos y actividades de la iglesia de Cristo de Webb Chapel, incluyendo la adoración, las clases bíblicas y los grupos pequeños.',
    ),
  );
  const upcomingEvents = [
    {
      title: { en: "Sunday Worship Service", es: "Servicio de Adoración del Domingo" },
      date: { en: "Every Sunday", es: "Todos los domingos" },
      time: { en: "9:30 AM", es: "9:30 a.m." },
      location: { en: "Main Sanctuary", es: "Santuario Principal" },
      description: {
        en: "Join us for our weekly worship service with preaching, singing, and fellowship.",
        es: "Acompáñenos en nuestro servicio semanal de adoración con predicación, cantos y compañerismo.",
      },
    },
    {
      title: { en: "Bible Study", es: "Estudio Bíblico" },
      date: { en: "Every Sunday", es: "Todos los domingos" },
      time: { en: "11:00 AM", es: "11:00 a.m." },
      location: { en: "Various Rooms", es: "Varios salones" },
      description: {
        en: "Adult Bible study classes for all ages and levels.",
        es: "Clases bíblicas para adultos, para todas las edades y niveles.",
      },
    },
    {
      title: { en: "Small Groups", es: "Grupos Pequeños" },
      date: { en: "Various Days", es: "Varios días" },
      time: { en: "Various Times", es: "Varios horarios" },
      location: { en: "Homes & Church", es: "Hogares e iglesia" },
      description: {
        en: "Small group Bible studies and fellowship meetings.",
        es: "Estudios bíblicos en grupos pequeños y reuniones de compañerismo.",
      },
    },
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="pt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              {t('Event Calendar', 'Calendario de Eventos')}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600">
              {t('Stay connected with all our church activities and events', 'Manténgase conectado con todas las actividades y eventos de nuestra iglesia')}
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Calendar Embed */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <Calendar className="w-6 h-6 mr-3" />
                {t('Church Calendar', 'Calendario de la Iglesia')}
              </h2>
              <p className="text-gray-600 mt-2">
                {t('View all upcoming events and activities', 'Vea todos los próximos eventos y actividades')}
              </p>
            </div>
            
            <div className="p-6">
              {/* Calendar Embed - Responsive Container */}
              <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                <iframe
                  src={t(CALENDAR_URL, `${CALENDAR_URL}&hl=es`)}
                  className="absolute top-0 left-0 w-full h-full rounded-lg border-0"
                  title={t('Church Calendar', 'Calendario de la Iglesia')}
                />
              </div>

              {/* View Full Calendar Link */}
              <div className="mt-6 text-center">
                <a
                  href={t(CALENDAR_FULL_URL, `${CALENDAR_FULL_URL}&hl=es`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-church-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {t('View Full Calendar', 'Ver el Calendario Completo')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Regular Events */}
        <div className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              {t('Regular Weekly Events', 'Eventos Semanales Regulares')}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-church-blue rounded-lg flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-800 mb-2">
                        {t(event.title.en, event.title.es)}
                      </h3>
                      <div className="space-y-1 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-2" />
                          {t(event.date.en, event.date.es)}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          {t(event.time.en, event.time.es)}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          {t(event.location.en, event.location.es)}
                        </div>
                      </div>
                      <p className="text-gray-600 mt-3">
                        {t(event.description.en, event.description.es)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Special Events */}
        <div className="bg-gradient-to-r from-church-blue to-blue-800 text-white rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-center mb-8">
            {t('Special Events', 'Eventos Especiales')}
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{t('Holiday Services', 'Servicios en Días Festivos')}</h3>
              <p className="text-blue-100">
                {t('Special worship services for Christmas, Easter, and other holidays', 'Servicios especiales de adoración para Navidad, Pascua y otros días festivos')}
              </p>
            </div>
            
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{t('Community Events', 'Eventos Comunitarios')}</h3>
              <p className="text-blue-100">
                {t('Outreach events, community service projects, and fellowship activities', 'Eventos de alcance, proyectos de servicio a la comunidad y actividades de compañerismo')}
              </p>
            </div>
            
            <div className="text-center">
              <Calendar className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{t('Educational Programs', 'Programas Educativos')}</h3>
              <p className="text-blue-100">
                {t('Bible studies, seminars, and educational workshops for all ages', 'Estudios bíblicos, seminarios y talleres educativos para todas las edades')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
