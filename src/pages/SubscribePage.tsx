import React from 'react';
import MailchimpForm from '../components/MailchimpForm';

const SubscribePage: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-church-blue text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-6"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide">Stay Connected</h1>
          <p className="text-blue-200 text-lg mt-3">Subscribe to our mailing list</p>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8">
            <MailchimpForm />
          </div>
        </div>
      </div>

    </div>
  );
};

export default SubscribePage;
