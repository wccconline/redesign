import React from 'react';
import { Globe, Smartphone, MessageSquare, Mail, ExternalLink } from 'lucide-react';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

const GivingPage: React.FC = () => {
  const t = useT();
  usePageMeta(
    t('Giving', 'Ofrendas'),
    t(
      'Ways to give to Webb Chapel church of Christ, including online giving. Your generosity supports our worship, ministries and missions.',
      'Formas de ofrendar a la iglesia de Cristo de Webb Chapel, incluyendo ofrendas en línea. Su generosidad sostiene nuestra adoración, ministerios y misiones.',
    ),
  );
  const givingMethods = [
    {
      icon: Globe,
      title: { en: "ONLINE", es: "EN LÍNEA" },
      description: {
        en: "Website giving provides a fast, convenient and secure way for you to give one-time gifts or recurring donations by debit card, check card, or credit card. Your gift can also be drawn from your checking account or a savings account. Gifts can be designated for Contribution or Assistance.",
        es: "Las ofrendas por el sitio web son una forma rápida, cómoda y segura de dar ofrendas únicas o donaciones recurrentes con tarjeta de débito, tarjeta de cheques o tarjeta de crédito. Su ofrenda también puede debitarse de su cuenta de cheques o de ahorros. Las ofrendas pueden designarse para Contribución o Asistencia.",
      },
    },
    {
      icon: Smartphone,
      title: { en: "MOBILE APP", es: "APLICACIÓN MÓVIL" },
      description: {
        en: "Using the \"Realm-Connect\" Application from your phone you can give one-time gifts or recurring donations by debit card, check card, or credit card. Your gift can also be drawn from your checking account or a savings account. Gifts can be designated for Contribution or Assistance.",
        es: "Con la aplicación «Realm-Connect» en su teléfono puede dar ofrendas únicas o donaciones recurrentes con tarjeta de débito, tarjeta de cheques o tarjeta de crédito. Su ofrenda también puede debitarse de su cuenta de cheques o de ahorros. Las ofrendas pueden designarse para Contribución o Asistencia.",
      },
    },
    {
      icon: MessageSquare,
      title: { en: "TEXT MESSAGE", es: "MENSAJE DE TEXTO" },
      description: {
        en: "Text the word WCCCGIVE to 73256. Your one-time gift can be made by debit card, check card, or credit card. Your gift can also be drawn from your checking account or a savings account. Gifts can be designated for Contribution or Assistance.",
        es: "Envíe un mensaje de texto con la palabra WCCCGIVE al 73256. Su ofrenda única puede hacerse con tarjeta de débito, tarjeta de cheques o tarjeta de crédito. Su ofrenda también puede debitarse de su cuenta de cheques o de ahorros. Las ofrendas pueden designarse para Contribución o Asistencia.",
      },
    },
    {
      icon: Mail,
      title: { en: "BILL PAY", es: "PAGO DE FACTURAS" },
      description: {
        en: "You can also set up Webb Chapel in your banking Bill-Pay service. When using this method, please use this mailing address: Webb Chapel Church of Christ, 13425 Webb Chapel Rd., Dallas, Texas 75234, and note if the gift is for the Contribution or Assistance.",
        es: "También puede agregar a Webb Chapel en el servicio de pago de facturas de su banco. Si utiliza este método, use esta dirección postal: Webb Chapel Church of Christ, 13425 Webb Chapel Rd., Dallas, Texas 75234, e indique si la ofrenda es para Contribución o Asistencia.",
      },
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {t('GIVING METHODS', 'FORMAS DE OFRENDAR')}
        </h1>
        
        {/* Giving Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {givingMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-church-blue text-white rounded-full mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{t(method.title.en, method.title.es)}</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{t(method.description.en, method.description.es)}</p>
              </div>
            );
          })}
        </div>
        
        {/* Online Giving Link and Scripture */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Online Giving Link */}
            <div className="bg-church-blue text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">{t('CLICK HERE TO GIVE ONLINE', 'HAGA CLIC AQUÍ PARA OFRENDAR EN LÍNEA')}</h2>
              <a 
                href="https://onrealm.org/WebbChapelChurch/Give" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-church-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t('Give Online Now', 'Ofrende en Línea Ahora')}
                <ExternalLink className="ml-2 h-5 w-5" />
              </a>
            </div>
            
            {/* Scripture and Information */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                {t('MATTHEW 25:21', 'MATEO 25:21 (RVR1960)')}
              </h3>
              
              <blockquote className="text-lg italic text-gray-700 mb-6 text-center">
                {t(
                  "\"His master said to him, 'Well done, good and faithful servant. You have been faithful over a little: I will set you over much. Enter into the joy of your master.'\"",
                  '«Y su señor le dijo: Bien, buen siervo y fiel; sobre poco has sido fiel, sobre mucho te pondré; entra en el gozo de tu señor.»',
                )}
              </blockquote>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  {t(
                    "Like the servants in the Parable of the Talents, we will be required to give an account of what we have done with everything we have been blessed with. This means our time, our money, and our talents. It is all God's. (Psalm 24:1) And we will give an accounting to the owner who has entrusted all things to us.",
                    "Como los siervos de la Parábola de los Talentos, tendremos que rendir cuentas de lo que hemos hecho con todo aquello con lo que hemos sido bendecidos. Esto incluye nuestro tiempo, nuestro dinero y nuestros talentos. Todo es de Dios. (Salmo 24:1) Y daremos cuenta al dueño que nos ha confiado todas las cosas.",
                  )}
                </p>
                
                <div className="bg-gray-50 rounded-lg p-4 mt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{t('NEED MORE HELP?', '¿NECESITA MÁS AYUDA?')}</h4>
                  <p className="text-gray-600">
                    {t(
                      <>If you have questions, call the church office at <strong>(972) 241-3293</strong>.</>,
                      <>Si tiene preguntas, llame a la oficina de la iglesia al <strong>(972) 241-3293</strong>.</>,
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GivingPage;
