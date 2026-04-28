import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import CognitoForm from '../components/CognitoForm';

const ContactPage: React.FC = () => {
  return (
    <div className="w-full">

      {/* Map */}
      <div className="w-full h-80 border-b-4 border-church-gold">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.847942046478!2d-96.87624268434288!3d32.92861548092659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c2706c730337d%3A0xc22385d7f5df5c60!2sWebb+Chapel+Church+of+Christ!5e0!3m2!1sen!2sus!4v1504245714174"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Webb Chapel location map"
        />
      </div>

      <div className="bg-church-blue text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-5"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide">Contact Us</h1>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-5"></div>
        </div>
      </div>

      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-8">

              <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-6">
                <h2 className="font-questrial text-xl font-bold text-church-blue tracking-wide mb-5">Get In Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-church-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Address</p>
                      <p className="text-gray-600 text-sm">13425 Webb Chapel Road<br />Farmers Branch, Texas 75234</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-church-gold flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Phone</p>
                      <p className="text-gray-600 text-sm">(972) 241-3293</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-church-gold flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Email</p>
                      <p className="text-gray-600 text-sm">info@webbchapel.org</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-6">
                <h2 className="font-questrial text-xl font-bold text-church-blue tracking-wide mb-5">Service Times</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-church-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Sunday Morning</p>
                      <p className="text-gray-600 text-sm">9:30 AM &mdash; Worship<br />11:00 AM &mdash; Bible Classes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-church-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Sunday Evening</p>
                      <p className="text-gray-600 text-sm">Small Group Meetings<br />Contact church office</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-church-gold mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">Wednesday Evening</p>
                      <p className="text-gray-600 text-sm">7:00 PM &mdash; Bible Study</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8">
              <h2 className="font-questrial text-xl font-bold text-church-blue tracking-wide mb-6 text-center">
                Send Us a Message
              </h2>
              <div className="bg-church-cream rounded p-6">
                <CognitoForm
                  dataKey="V3ZbR_hZIEKuz9M3qRqiEA"
                  dataForm="93"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
