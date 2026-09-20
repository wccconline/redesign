import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

const MAP_URL =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.847942046478!2d-96.87624268434288!3d32.92861548092659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2706c730337d%3A0xc22385d7f5df5c60!2sWebb+Chapel+Church+of+Christ!5e0!3m2!1sen!2sus!4v1504245714174';

const ContactPage: React.FC = () => {
  const t = useT();
  usePageMeta(
    t('Contact & Directions', 'Contacto y Cómo Llegar'),
    t(
      'Contact Webb Chapel church of Christ at 13425 Webb Chapel Road, Farmers Branch, Texas 75234. Call (972) 241-3293, send a message, or get directions.',
      'Comuníquese con la iglesia de Cristo de Webb Chapel en 13425 Webb Chapel Road, Farmers Branch, Texas 75234. Llame al (972) 241-3293, envíenos un mensaje u obtenga indicaciones para llegar.',
    ),
  );
  return (
    <div className="w-full">
      {/* Google Maps Embed */}
      <div className="w-full h-96 mb-8">
        <iframe 
          src={t(MAP_URL, MAP_URL.replace('!3m2!1sen!2sus', '!3m2!1ses!2sus'))}
          width="100%" 
          height="100%" 
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        />
      </div>

      <div className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            {t('CONTACT US', 'CONTÁCTENOS')}
          </h1>
          
          <div className="max-w-4xl mx-auto">
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('Get In Touch', 'Póngase en Contacto')}</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-church-blue mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{t('Address', 'Dirección')}</h3>
                      <p className="text-gray-600">
                        13425 Webb Chapel Road<br />
                        Farmers Branch, Texas 75234
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-6 w-6 text-church-blue mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{t('Phone', 'Teléfono')}</h3>
                      <p className="text-gray-600">(972) 241-3293</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-church-blue mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{t('Email', 'Correo electrónico')}</h3>
                      <p className="text-gray-600">info@webbchapel.org</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">{t('Service Times', 'Horarios de Servicio')}</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-church-blue mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{t('Sunday Morning', 'Domingo por la Mañana')}</h3>
                      <p className="text-gray-600">
                        {t(
                          <>9:30 AM - Worship<br />11:00 AM - Bible Classes</>,
                          <>9:30 a.m. - Adoración<br />11:00 a.m. - Clases Bíblicas</>,
                        )}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-church-blue mt-1 mr-3 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-800">{t('Sunday Evening', 'Domingo por la Tarde')}</h3>
                      <p className="text-gray-600">
                        {t(
                          <>Small Group Meetings<br />Contact church office</>,
                          <>Reuniones de Grupos Pequeños<br />Comuníquese con la oficina de la iglesia</>,
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {t('Send Us a Message', 'Envíenos un Mensaje')}
              </h2>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
