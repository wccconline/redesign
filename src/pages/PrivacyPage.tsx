import React from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../utils/usePageMeta';

const linkClass = 'text-church-blue underline hover:text-blue-800';

const PrivacyPage: React.FC = () => {
  usePageMeta('Privacy Notice', 'How the Webb Chapel church of Christ website collects and uses information, including analytics, forms and embedded content.');
  return (
    <div className="w-full">
      <div className="pt-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Privacy Notice</h1>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8 space-y-8 text-gray-600 leading-relaxed">
          <p>
            The Webb Chapel church of Christ respects your privacy. This page explains what
            information this website collects, why, and who else may receive it.
          </p>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Visit statistics</h2>
            <p className="mb-3">
              We use Google Analytics to count visits and understand which pages are helpful. It
              records things like the pages you view, how you arrived at the site, your approximate
              location (city or region), and the type of device and browser you use. Google
              Analytics uses cookies to do this. We use this information only to improve the
              website, and we do not use it to identify individual visitors.
            </p>
            <p>
              You can opt out of Google Analytics in any browser with the{' '}
              <a
                href="https://tools.google.com/dispatch/tosd"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Google Analytics opt-out browser add-on
              </a>
              , or by blocking cookies in your browser settings. To learn how Google handles this
              data, see{' '}
              <a
                href="https://policies.google.com/technologies/partner-sites"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                How Google uses information from sites that use its services
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Forms</h2>
            <p className="mb-3">
              <strong>Contact form.</strong> When you send us a message, we receive the name, email
              address, subject and message you enter. The form is processed by{' '}
              <a
                href="https://formspree.io/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Formspree
              </a>
              , which delivers it to us. We use this information only to respond to you.
            </p>
            <p>
              <strong>Studies in the Bible sign-up.</strong> The course sign-up form is provided by
              Cognito Forms. We use the information you enter to register you for the course and to
              contact you about it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Content from other services</h2>
            <p className="mb-3">
              Some pages show content hosted by other companies: YouTube (livestream and sermon
              archives), Vimeo (video Bible lessons), Google Maps and Google Calendar (contact and
              calendar pages), Biblia (daily Bible verse), and Google Fonts. When a page loads this
              content, your browser connects directly to those services. They may receive your IP
              address, set their own cookies, and collect information according to their own
              privacy policies, such as{' '}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Google's
              </a>{' '}
              and{' '}
              <a
                href="https://vimeo.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className={linkClass}
              >
                Vimeo's
              </a>
              .
            </p>
            <p>
              Links from this site to other websites, including the member login and the ministries
              and organizations we link to, are governed by those sites' own privacy practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">How we use your information</h2>
            <p>
              We use the information described above only to run this website and to respond to
              you. We do not sell your personal information. This website is not directed to
              children under 13, and we do not knowingly collect their personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-3">Questions</h2>
            <p>
              If you have questions about this notice or about information you have sent us, please{' '}
              <Link to="/contact" className={linkClass}>
                contact us
              </Link>{' '}
              or call (972) 241-3293.
            </p>
          </section>

          <p className="text-sm text-gray-500">
            We may update this notice from time to time. Last updated September 20, 2026.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;
