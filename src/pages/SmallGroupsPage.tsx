import { Phone, Users, Clock, MapPin } from 'lucide-react';

function SmallGroupsPage() {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-church-blue text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-6"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide">Small Group Ministry</h1>
          <p className="text-blue-200 text-lg mt-3">Deeper fellowship, deeper faith</p>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Notice */}
          <div className="bg-amber-50 border-l-4 border-church-gold p-6 rounded-r-md flex items-start gap-4">
            <Users className="h-6 w-6 text-church-gold flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-questrial font-bold text-church-blue mb-1">Small Group Meetings</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Small Group meetings are done at various times and in various locations Sunday afternoon and evening.
                If you would like to participate, contact the church office at{' '}
                <a href="tel:972-241-3293" className="font-semibold text-church-blue hover:text-church-gold transition-colors">(972) 241-3293</a>.
              </p>
            </div>
          </div>

          {/* About */}
          <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8">
            <h2 className="font-questrial text-2xl font-bold text-church-blue tracking-wide mb-4">About Our Small Groups</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                In an effort to foster both spiritual growth and relationship connections, Webb Chapel is proud of her small group ministry. Groups are varied, as is the time, and venue of the meetings. Some meet at the church facility, some meet in homes, some have children in their groups, others do not, one group is for women only, most groups meet on Sunday and some meet during the week. One of the groups is in Spanish.
              </p>
              <p>
                Small groups provide an intimate setting for Bible study, prayer, and fellowship. They offer opportunities for deeper relationships and spiritual growth that complement our larger worship services.
              </p>
            </div>
          </div>

          {/* Meeting Info */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-6">
              <h3 className="font-questrial text-lg font-bold text-church-blue mb-1 flex items-center gap-2">
                <Clock className="h-5 w-5 text-church-gold" />
                Meeting Times
              </h3>
              <div className="w-8 h-0.5 bg-church-gold mb-4"></div>
              <ul className="space-y-2 text-gray-700 text-sm">
                {["Sunday afternoon groups", "Sunday evening groups", "Weekday evening groups", "Various times to fit your schedule"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-church-gold mt-1.5 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-6">
              <h3 className="font-questrial text-lg font-bold text-church-blue mb-1 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-church-gold" />
                Meeting Locations
              </h3>
              <div className="w-8 h-0.5 bg-church-gold mb-4"></div>
              <ul className="space-y-2 text-gray-700 text-sm">
                {["Church facility", "Member homes", "Community centers", "Online options available"].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-church-gold mt-1.5 flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-church-blue text-white rounded-md p-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 max-w-16 bg-church-gold opacity-60"></div>
              <h2 className="font-questrial text-2xl font-bold tracking-wide text-center">Benefits of Small Groups</h2>
              <div className="h-px flex-1 max-w-16 bg-church-gold opacity-60"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Users, title: "Fellowship", desc: "Build meaningful relationships with other believers in a smaller, more intimate setting." },
                { icon: Clock, title: "Spiritual Growth", desc: "Dive deeper into God's Word through focused study and discussion." },
                { icon: Phone, title: "Support", desc: "Receive prayer, encouragement, and practical support from your group members." },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="text-center">
                  <div className="w-12 h-12 border-2 border-church-gold rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-church-gold" />
                  </div>
                  <h3 className="font-questrial font-bold text-church-gold mb-2">{title}</h3>
                  <p className="text-blue-200 text-sm">{desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default SmallGroupsPage;
