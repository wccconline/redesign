import React from 'react';
import type { ReactNode } from 'react';
import { Link } from '../components/LocaleLink';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

const linkClass = 'text-church-blue underline hover:text-blue-800';

const ExtLink: React.FC<{ href: string; children: ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
    {children}
  </a>
);

const PrivacyPage: React.FC = () => {
  const t = useT();
  usePageMeta(
    t('Privacy Notice', 'Aviso de Privacidad'),
    t(
      'How the Webb Chapel church of Christ website collects and uses information, including analytics, forms and embedded content.',
      'Cómo el sitio web de la iglesia de Cristo de Webb Chapel recopila y utiliza información, incluyendo analítica, formularios y contenido incrustado.',
    ),
  );
  return (
    <div className="w-full">
      <div className="pt-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">{t('Privacy Notice', 'Aviso de Privacidad')}</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-8 text-gray-600 leading-relaxed">
          <p>
            {t(
              'The Webb Chapel church of Christ respects your privacy. This page explains what information this website collects, why, and who else may receive it.',
              'La iglesia de Cristo de Webb Chapel respeta su privacidad. Esta página explica qué información recopila este sitio web, por qué, y quiénes más pueden recibirla.',
            )}
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{t('Visit statistics', 'Estadísticas de visitas')}</h2>
            <p className="mb-3">
              {t(
                'We use Google Analytics to count visits and understand which pages are helpful. It records things like the pages you view, how you arrived at the site, your approximate location (city or region), and the type of device and browser you use. Google Analytics uses cookies to do this. We use this information only to improve the website, and we do not use it to identify individual visitors.',
                'Usamos Google Analytics para contar las visitas y entender qué páginas son útiles. Registra datos como las páginas que usted ve, cómo llegó al sitio, su ubicación aproximada (ciudad o región) y el tipo de dispositivo y navegador que utiliza. Google Analytics usa cookies para hacerlo. Usamos esta información únicamente para mejorar el sitio web, y no la usamos para identificar a visitantes individuales.',
              )}
            </p>
            <p>
              {t(
                <>
                  You can opt out of Google Analytics in any browser with the{' '}
                  <ExtLink href="https://tools.google.com/dispatch/tosd">Google Analytics opt-out browser add-on</ExtLink>
                  , or by blocking cookies in your browser settings. To learn how Google handles this data, see{' '}
                  <ExtLink href="https://policies.google.com/technologies/partner-sites">
                    How Google uses information from sites that use its services
                  </ExtLink>
                  .
                </>,
                <>
                  Puede excluirse de Google Analytics en cualquier navegador con el{' '}
                  <ExtLink href="https://tools.google.com/dispatch/tosd">
                    complemento de exclusión de Google Analytics para navegadores
                  </ExtLink>
                  , o bloqueando las cookies en la configuración de su navegador. Para saber cómo maneja Google estos datos, consulte{' '}
                  <ExtLink href="https://policies.google.com/technologies/partner-sites?hl=es">
                    Cómo utiliza Google la información de los sitios que usan sus servicios
                  </ExtLink>
                  .
                </>,
              )}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{t('Forms', 'Formularios')}</h2>
            <p className="mb-3">
              {t(
                <>
                  <strong>Contact form.</strong> When you send us a message, we receive the name, email address, subject and message you enter. The form is processed by{' '}
                  <ExtLink href="https://formspree.io/legal/privacy-policy">Formspree</ExtLink>
                  , which delivers it to us. We use this information only to respond to you.
                </>,
                <>
                  <strong>Formulario de contacto.</strong> Cuando nos envía un mensaje, recibimos el nombre, la dirección de correo electrónico, el asunto y el mensaje que usted escribe. El formulario es procesado por{' '}
                  <ExtLink href="https://formspree.io/legal/privacy-policy">Formspree</ExtLink>
                  , que nos lo entrega. Usamos esta información únicamente para responderle.
                </>,
              )}
            </p>
            <p>
              {t(
                <>
                  <strong>Studies in the Bible sign-up.</strong> The course sign-up form is provided by Cognito Forms. We use the information you enter to register you for the course and to contact you about it.
                </>,
                <>
                  <strong>Inscripción en Estudios Bíblicos.</strong> El formulario de inscripción al curso es proporcionado por Cognito Forms. Usamos la información que usted ingresa para inscribirle en el curso y comunicarnos con usted al respecto.
                </>,
              )}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{t('Content from other services', 'Contenido de otros servicios')}</h2>
            <p className="mb-3">
              {t(
                <>
                  Some pages show content hosted by other companies: YouTube (livestream and sermon archives), Vimeo (video Bible lessons), Google Maps and Google Calendar (contact and calendar pages), Biblia (daily Bible verse), and Google Fonts. When a page loads this content, your browser connects directly to those services. They may receive your IP address, set their own cookies, and collect information according to their own privacy policies, such as{' '}
                  <ExtLink href="https://policies.google.com/privacy">Google's</ExtLink>{' '}
                  and{' '}
                  <ExtLink href="https://vimeo.com/privacy">Vimeo's</ExtLink>
                  .
                </>,
                <>
                  Algunas páginas muestran contenido alojado por otras empresas: YouTube (transmisión en vivo y archivo de sermones), Vimeo (lecciones bíblicas en video), Google Maps y Google Calendar (páginas de contacto y calendario), Biblia (versículo bíblico diario, en la versión en inglés del sitio) y Google Fonts. Cuando una página carga este contenido, su navegador se conecta directamente con esos servicios. Estos pueden recibir su dirección IP, instalar sus propias cookies y recopilar información conforme a sus propias políticas de privacidad, como las de{' '}
                  <ExtLink href="https://policies.google.com/privacy?hl=es">Google</ExtLink>{' '}
                  y las de{' '}
                  <ExtLink href="https://vimeo.com/privacy">Vimeo</ExtLink>
                  .
                </>,
              )}
            </p>
            <p>
              {t(
                "Links from this site to other websites, including the member login and the ministries and organizations we link to, are governed by those sites' own privacy practices.",
                'Los enlaces de este sitio a otros sitios web, incluyendo el acceso para miembros y los ministerios y organizaciones a los que enlazamos, se rigen por las prácticas de privacidad de esos sitios.',
              )}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{t('How we use your information', 'Cómo usamos su información')}</h2>
            <p>
              {t(
                'We use the information described above only to run this website and to respond to you. We do not sell your personal information. This website is not directed to children under 13, and we do not knowingly collect their personal information.',
                'Usamos la información descrita anteriormente únicamente para administrar este sitio web y para responderle. No vendemos su información personal. Este sitio web no está dirigido a niños menores de 13 años, y no recopilamos a sabiendas su información personal.',
              )}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">{t('Questions', 'Preguntas')}</h2>
            <p>
              {t(
                <>
                  If you have questions about this notice or about information you have sent us, please{' '}
                  <Link to="/contact" className={linkClass}>
                    contact us
                  </Link>{' '}
                  or call (972) 241-3293.
                </>,
                <>
                  Si tiene preguntas sobre este aviso o sobre la información que nos ha enviado, por favor{' '}
                  <Link to="/contact" className={linkClass}>
                    contáctenos
                  </Link>{' '}
                  o llame al (972) 241-3293.
                </>,
              )}
            </p>
          </section>

          <p className="text-sm text-gray-500">
            {t(
              'We may update this notice from time to time. Last updated September 20, 2026.',
              'Podemos actualizar este aviso de vez en cuando. Última actualización: 20 de septiembre de 2026.',
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
