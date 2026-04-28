import React from 'react';
import { Globe, Smartphone, MessageSquare, Mail, ExternalLink } from 'lucide-react';

const givingMethods = [
  {
    icon: Globe,
    title: "Online",
    description: "Website giving provides a fast, convenient and secure way for you to give one-time gifts or recurring donations by debit card, check card, or credit card. Your gift can also be drawn from your checking account or a savings account. Gifts can be designated for Contribution or Assistance."
  },
  {
    icon: Smartphone,
    title: "Mobile App",
    description: "Using the \"Realm-Connect\" Application from your phone you can give one-time gifts or recurring donations by debit card, check card, or credit card. Your gift can also be drawn from your checking account or a savings account. Gifts can be designated for Contribution or Assistance."
  },
  {
    icon: MessageSquare,
    title: "Text Message",
    description: "Text the word WCCCGIVE to 73256. Your one-time gift can be made by debit card, check card, or credit card. Your gift can also be drawn from your checking account or a savings account. Gifts can be designated for Contribution or Assistance."
  },
  {
    icon: Mail,
    title: "Bill Pay",
    description: "You can also set up Webb Chapel in your banking Bill-Pay service. When using this method, please use this mailing address: Webb Chapel Church of Christ, 13425 Webb Chapel Rd., Dallas, Texas 75234, and note if the gift is for the Contribution or Assistance."
  }
];

const GivingPage: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-church-blue text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-6"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide">Giving</h1>
          <p className="text-blue-200 text-lg mt-3">Supporting the work of God's kingdom</p>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">

        {/* Giving Methods */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-16 bg-church-gold"></div>
            <h2 className="font-questrial text-3xl font-bold text-church-blue tracking-wide text-center">Ways to Give</h2>
            <div className="h-px flex-1 max-w-16 bg-church-gold"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {givingMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <div key={index} className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-6 hover:shadow-lg transition-shadow">
                  <div className="flex flex-col items-center text-center mb-4">
                    <div className="w-14 h-14 bg-church-blue rounded-full flex items-center justify-center mb-4">
                      <Icon className="h-7 w-7 text-church-gold" />
                    </div>
                    <h3 className="font-questrial text-lg font-bold text-church-blue">{method.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{method.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Online CTA + Scripture */}
        <div className="grid lg:grid-cols-2 gap-8">

          <div className="bg-church-blue text-white rounded-md p-8 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-0.5 bg-church-gold mb-6"></div>
            <h2 className="font-questrial text-2xl font-bold mb-6 tracking-wide">Give Online</h2>
            <a
              href="https://onrealm.org/WebbChapelChurch/Give"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-church-gold text-church-blue px-6 py-3 rounded font-bold hover:bg-amber-400 transition-colors"
            >
              Give Online Now
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8">
            <h3 className="font-questrial text-xl font-bold text-church-blue tracking-wide mb-5 text-center">Matthew 25:21</h3>
            <blockquote className="border-l-4 border-church-gold pl-4 italic text-gray-700 mb-5 text-base">
              "His master said to him, 'Well done, good and faithful servant. You have been faithful over a little: I will set you over much. Enter into the joy of your master.'"
            </blockquote>
            <p className="text-gray-600 text-sm leading-relaxed mb-5">
              Like the servants in the Parable of the Talents, we will be required to give an account of what we have done with everything we have been blessed with. This means our time, our money, and our talents. It is all God's. (Psalm 24:1) And we will give an accounting to the owner who has entrusted all things to us.
            </p>
            <div className="bg-church-cream rounded p-4">
              <p className="text-sm text-gray-700 font-medium">Need more help?</p>
              <p className="text-sm text-gray-600 mt-1">Call the church office at <strong>(972) 241-3293</strong>.</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GivingPage;
