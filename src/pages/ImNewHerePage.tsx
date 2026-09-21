import React from 'react';
import { Link } from '../components/LocaleLink';
import { MapPin, Clock, Users, BookOpen } from 'lucide-react';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

const ImNewHerePage: React.FC = () => {
  const t = useT();
  usePageMeta(
    t("I'm New Here", "Primera Visita"),
    t(
      "New to Webb Chapel church of Christ? Learn who we are, what to expect at worship, and our Sunday service times in Farmers Branch, Texas.",
      "¿Es su primera visita a la iglesia de Cristo de Webb Chapel? Conozca quiénes somos, qué esperar en la adoración y nuestros horarios de servicio del domingo en Farmers Branch, Texas.",
    ),
  );
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {t("I'M NEW HERE", "PRIMERA VISITA")}
        </h1>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Welcome Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t("WELCOME!", "¡BIENVENIDOS!")}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("Welcome to Webb Chapel church of Christ, and thank you for visiting our website! We would be delighted to have you, your family, and your friends visit with us for worship and Bible study at our facilities in Farmers Branch. We know that it can be intimidating visiting a new church community, but at Webb Chapel, it is impossible to walk through our doors without experiencing our love for God and His people. While here, you will not only be our honored guest, but part of our family of believers.", "¡Bienvenidos a la iglesia de Cristo de Webb Chapel, y gracias por visitar nuestro sitio web! Nos encantaría que usted, su familia y sus amigos nos acompañen en la adoración y el estudio bíblico en nuestras instalaciones en Farmers Branch. Sabemos que puede resultar intimidante visitar una nueva comunidad de fe, pero en Webb Chapel es imposible cruzar nuestras puertas sin sentir nuestro amor por Dios y por Su pueblo. Mientras esté con nosotros, no solo será nuestro honorable invitado, sino parte de nuestra familia de creyentes.")}
            </p>
          </div>

          {/* Who We Are Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t("WHO WE ARE", "QUIÉNES SOMOS")}</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                {t("Webb Chapel church of Christ is a local congregation of Christian believers who have been baptized by immersion into Christ for the remission of sin, attempting to follow the practices and examples of the followers of Christ of the 1st Century. We believe that Jesus founded only one church, and work to reproduce, in contemporary times, the church established on Pentecost in A.D. 33.", "La iglesia de Cristo de Webb Chapel es una congregación local de creyentes cristianos que han sido bautizados por inmersión en Cristo para el perdón de los pecados, y que procuran seguir las prácticas y los ejemplos de los seguidores de Cristo del primer siglo. Creemos que Jesús fundó una sola iglesia, y trabajamos para reproducir, en nuestros tiempos, la iglesia establecida el día de Pentecostés en el año 33 d.C.")}
              </p>
              <p>
                {t("The Webb Chapel church of Christ is a group of sinners, clinging to the grace of God offered through the sacrifice of His Son, Jesus, upon the cross.", "La iglesia de Cristo de Webb Chapel es un grupo de pecadores que se aferran a la gracia de Dios, ofrecida mediante el sacrificio de Su Hijo, Jesús, en la cruz.")}
              </p>
            </div>
          </div>

          {/* Public Worship Section */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t("PUBLIC WORSHIP", "ADORACIÓN PÚBLICA")}</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {t("Using the New Testament as our guide, we gather each first day of the week, Sunday, to partake of the Lord's Supper (Communion), sing, pray and teach. In our worship services our singing is \"a cappella\". This means we sing without musical instruments. Our teachings are based on the Bible scriptures, as we believe that the Bible is the only source of what God has revealed to us of Himself, His wishes, His expectations, and His salvation.", "Tomando el Nuevo Testamento como guía, nos reunimos cada primer día de la semana, el domingo, para participar de la Cena del Señor (la Comunión), cantar, orar y enseñar. En nuestros servicios de adoración cantamos «a cappella», es decir, sin instrumentos musicales. Nuestras enseñanzas se basan en las Sagradas Escrituras, pues creemos que la Biblia es la única fuente de lo que Dios nos ha revelado acerca de Sí mismo, Su voluntad, Sus expectativas y Su salvación.")}
            </p>
          </div>

          {/* Service Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-church-blue text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center">
                <Clock className="h-6 w-6 mr-3" />
                {t("Service Times", "Horarios de Servicio")}
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">{t("Sunday Morning", "Domingo por la Mañana")}</h4>
                  <p>{t("9:30 AM - Worship", "9:30 a.m. - Adoración")}</p>
                  <p>{t("11:00 AM - Bible Classes", "11:00 a.m. - Clases Bíblicas")}</p>
                </div>
                <div>
                  <h4 className="font-semibold">{t("Sunday Evening", "Domingo por la Tarde")}</h4>
                  <p>{t("Small Group Meetings", "Reuniones de Grupos Pequeños")}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6 flex items-center text-gray-800">
                <MapPin className="h-6 w-6 mr-3 text-church-blue" />
                {t("Location", "Ubicación")}
              </h3>
              <div className="text-gray-700">
                <p className="font-semibold">{t("Webb Chapel Church of Christ", "Iglesia de Cristo Webb Chapel")}</p>
                <p>13425 Webb Chapel Road</p>
                <p>Farmers Branch, Texas 75234</p>
                <p className="mt-4">
                  <strong>{t("Phone:", "Teléfono:")}</strong> (972) 241-3293
                </p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <Users className="h-8 w-8 mr-3 text-church-blue" />
              {t("WHAT TO EXPECT", "QUÉ ESPERAR")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{t("Our Worship Style", "Nuestro Estilo de Adoración")}</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>{t("• A cappella singing (no instruments)", "• Cantos a cappella (sin instrumentos)")}</li>
                  <li>{t("• Bible-based preaching", "• Predicación basada en la Biblia")}</li>
                  <li>{t("• Weekly communion", "• Comunión semanal")}</li>
                  <li>{t("• Prayer and fellowship", "• Oración y compañerismo")}</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">{t("Dress Code", "Vestimenta")}</h3>
                <p className="text-gray-700">
                  {t("We welcome you to come as you are. Most people dress in business casual attire, but we have no formal dress code. What matters most is that you're here to worship God.", "Le damos la bienvenida tal como es. La mayoría de las personas se viste de manera casual formal, pero no tenemos un código de vestimenta estricto. Lo más importante es que usted esté aquí para adorar a Dios.")}
                </p>
              </div>
            </div>
          </div>

          {/* Bible Study Information */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <BookOpen className="h-8 w-8 mr-3 text-church-blue" />
              {t("BIBLE STUDY OPPORTUNITIES", "OPORTUNIDADES DE ESTUDIO BÍBLICO")}
            </h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">{t("Sunday Classes", "Clases del Domingo")}</h3>
                <p className="text-gray-700">
                  {t("We offer age-appropriate Bible classes for everyone from 2 years old through adults. Classes begin at 11:00 AM and last approximately 45 minutes.", "Ofrecemos clases bíblicas apropiadas para cada edad, desde los 2 años hasta los adultos. Las clases comienzan a las 11:00 a.m. y duran aproximadamente 45 minutos.")}
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-church-blue text-white rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">{t("HAVE QUESTIONS?", "¿TIENE PREGUNTAS?")}</h2>
            <p className="text-lg mb-6">
              {t("We'd love to help you get connected! Feel free to reach out to us.", "¡Con gusto le ayudaremos a conectarse! No dude en comunicarse con nosotros.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:972-241-3293"
                className="bg-white text-church-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t("Call Us: (972) 241-3293", "Llámenos: (972) 241-3293")}
              </a>
              <Link 
                to="/contact"
                className="bg-white text-church-blue px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                {t("Send Us a Message", "Envíenos un Mensaje")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImNewHerePage;
