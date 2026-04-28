import { Link } from 'react-router-dom';
import { Home, Phone, Mail, Facebook, Twitter } from 'lucide-react';

function Footer() {
  return (
    <>
      {/* Main Footer */}
      <footer className="bg-church-blue text-white py-12">
        <div className="container mx-auto px-4">

          {/* Gold accent divider */}
          <div className="w-24 h-0.5 bg-church-gold mx-auto mb-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Daily Encouragement */}
            <div>
              <h3 className="font-questrial text-church-gold tracking-widest text-sm uppercase font-bold mb-4 border-b border-church-gold/30 pb-2">
                Daily Encouragement
              </h3>
              <div className="bg-white rounded p-3">
                <a
                  href="https://biblia.com/bible/kjv/verseoftheday"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src="https://biblia.com/api/plugins/verseoftheday/kjv?width=300&height=250&singleImage=true&theme=imagebased&variant=light"
                    alt="Daily Bible Verse"
                    className="w-full h-auto rounded"
                  />
                </a>
              </div>
            </div>

            {/* When We Meet */}
            <div>
              <h3 className="font-questrial text-church-gold tracking-widest text-sm uppercase font-bold mb-4 border-b border-church-gold/30 pb-2">
                When We Meet
              </h3>
              <div className="space-y-5 text-gray-300 text-sm leading-relaxed">
                <div>
                  <p className="text-white font-semibold mb-1">Sunday Morning</p>
                  <p className="ml-3">9:30 am &mdash; Worship</p>
                  <p className="ml-3">11:00 am &mdash; Classes for all ages</p>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">Sunday Evening</p>
                  <p className="ml-3">Small Group Meetings</p>
                  <p className="ml-3">Contact church office</p>
                </div>
              </div>
            </div>

            {/* Where We Meet */}
            <div>
              <h3 className="font-questrial text-church-gold tracking-widest text-sm uppercase font-bold mb-4 border-b border-church-gold/30 pb-2">
                Where We Meet
              </h3>
              <div className="space-y-4 text-gray-300 text-sm">
                <div className="flex items-start">
                  <Home className="h-4 w-4 mt-0.5 mr-3 flex-shrink-0 text-church-gold" />
                  <div className="leading-relaxed">
                    <p>Webb Chapel church of Christ</p>
                    <p>13425 Webb Chapel Road,</p>
                    <p>Farmers Branch, Texas 75234</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-3 flex-shrink-0 text-church-gold" />
                  <p>(972) 241-3293</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 flex-shrink-0 text-church-gold" />
                  <Link
                    to="/contact"
                    className="underline hover:text-church-gold transition-colors"
                  >
                    Email Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright Bar */}
      <div className="bg-gray-900 text-gray-500 py-5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-xs">
              &copy; Overseen by the Webb Chapel church of Christ Eldership
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/WebbChapelUpdates"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-church-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/webbchapel"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-church-gold transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top */}
      <button
        className="fixed bottom-6 right-6 bg-church-blue border-2 border-church-gold text-white w-10 h-10 rounded-full shadow-lg hover:bg-church-gold hover:text-church-blue transition-colors z-50 flex items-center justify-center text-lg font-bold"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
      >
        ↑
      </button>
    </>
  );
}

export default Footer;
