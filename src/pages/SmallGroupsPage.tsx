import { Phone, Users, Clock, MapPin } from 'lucide-react';
import { useT } from '../utils/i18n';
import { usePageMeta } from '../utils/usePageMeta';

function SmallGroupsPage() {
  const t = useT();
  usePageMeta(
    t("Small Groups", "Grupos Pequeños"),
    t(
      "Join a Webb Chapel small group for Bible study, prayer and fellowship. Groups meet Sunday afternoons and evenings at various locations.",
      "Únase a un grupo pequeño de Webb Chapel para el estudio bíblico, la oración y el compañerismo. Los grupos se reúnen los domingos por la tarde y por la noche en distintos lugares.",
    ),
  );
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          {t("SMALL GROUP MINISTRY", "MINISTERIO DE GRUPOS PEQUEÑOS")}
        </h1>
        
        <div className="max-w-4xl mx-auto">
          {/* Current Status Notice */}
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <Users className="h-6 w-6 text-blue-400" />
              </div>
              <div className="ml-3">
                <h3 className="text-lg font-semibold text-blue-800">
                  {t("Small Group Meetings", "Reuniones de Grupos Pequeños")}
                </h3>
                <p className="text-blue-700 mt-2">
                  {t("Small Group meetings are done at various times and in various locations Sunday afternoon and evening. If you would like to participate, contact the church office at (972) 241-3293.", "Las reuniones de los grupos pequeños se realizan en diferentes horarios y lugares los domingos por la tarde y por la noche. Si desea participar, comuníquese con la oficina de la iglesia al (972) 241-3293.")}
                </p>
              </div>
            </div>
          </div>

          {/* About Small Groups */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t("About Our Small Groups", "Acerca de Nuestros Grupos Pequeños")}</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="mb-4">
                {t("In an effort to foster both spiritual growth and relationship connections, Webb Chapel is proud of her small group ministry. Groups are varied, as is the time, and venue of the meetings. Some meet at the church facility, some meet in homes, some have children in their groups, others do not, one group is for women only, most groups meet on Sunday and some meet during the week. One of the groups is in Spanish.", "Con el propósito de fomentar tanto el crecimiento espiritual como las relaciones entre los hermanos, Webb Chapel se siente orgullosa de su ministerio de grupos pequeños. Los grupos son variados, al igual que los horarios y los lugares de reunión. Algunos se reúnen en las instalaciones de la iglesia y otros en hogares; algunos tienen niños en sus grupos y otros no; un grupo es solo para mujeres; la mayoría se reúne los domingos y algunos durante la semana. Uno de los grupos es en español.")}
              </p>
              <p className="mb-4">
                {t("Small groups provide an intimate setting for Bible study, prayer, and fellowship. They offer opportunities for deeper relationships and spiritual growth that complement our larger worship services.", "Los grupos pequeños ofrecen un ambiente íntimo para el estudio bíblico, la oración y el compañerismo. Brindan oportunidades para relaciones más profundas y para el crecimiento espiritual que complementan nuestros servicios de adoración más grandes.")}
              </p>
            </div>
          </div>

          {/* Group Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <Clock className="h-6 w-6 mr-3 text-church-blue" />
                {t("Meeting Times", "Horarios de Reunión")}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>{t("• Sunday afternoon groups", "• Grupos los domingos por la tarde")}</li>
                <li>{t("• Sunday evening groups", "• Grupos los domingos por la noche")}</li>
                <li>{t("• Weekday evening groups", "• Grupos entre semana por la noche")}</li>
                <li>{t("• Various times to fit your schedule", "• Diversos horarios para adaptarse a su agenda")}</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                <MapPin className="h-6 w-6 mr-3 text-church-blue" />
                {t("Meeting Locations", "Lugares de Reunión")}
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>{t("• Church facility", "• Instalaciones de la iglesia")}</li>
                <li>{t("• Member homes", "• Hogares de miembros")}</li>
                <li>{t("• Online options available", "• Opciones en línea disponibles")}</li>
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">{t("Benefits of Small Groups", "Beneficios de los Grupos Pequeños")}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-church-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t("Fellowship", "Compañerismo")}</h3>
                <p className="text-gray-700">
                  {t("Build meaningful relationships with other believers in a smaller, more intimate setting.", "Desarrolle relaciones significativas con otros creyentes en un ambiente más pequeño e íntimo.")}
                </p>
              </div>
              <div className="text-center">
                <div className="bg-church-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t("Spiritual Growth", "Crecimiento Espiritual")}</h3>
                <p className="text-gray-700">
                  {t("Dive deeper into God's Word through focused study and discussion.", "Profundice en la Palabra de Dios mediante el estudio y el diálogo enfocados.")}
                </p>
              </div>
              <div className="text-center">
                <a
                  href="tel:+19722413293"
                  aria-label={t("Call the church office at (972) 241-3293", "Llame a la oficina de la iglesia al (972) 241-3293")}
                  title="(972) 241-3293"
                  className="bg-church-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 hover:opacity-80 transition-opacity"
                >
                  <Phone className="h-8 w-8" />
                </a>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{t("Support", "Apoyo")}</h3>
                <p className="text-gray-700">
                  {t("Receive prayer, encouragement, and practical support from your group members.", "Reciba oración, aliento y apoyo práctico de los miembros de su grupo.")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallGroupsPage;
