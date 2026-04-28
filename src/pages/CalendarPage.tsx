import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';

const upcomingEvents = [
  {
    title: "Sunday Worship Service",
    date: "Every Sunday",
    time: "9:30 AM",
    location: "Main Sanctuary",
    description: "Join us for our weekly worship service with preaching, singing, and fellowship."
  },
  {
    title: "Bible Study",
    date: "Every Sunday",
    time: "11:00 AM",
    location: "Various Rooms",
    description: "Adult Bible study classes for all ages and levels."
  },
  {
    title: "Wednesday Bible Study",
    date: "Every Wednesday",
    time: "7:00 PM",
    location: "Main Sanctuary",
    description: "Mid-week Bible study and prayer meeting."
  },
  {
    title: "Small Groups",
    date: "Various Days",
    time: "Various Times",
    location: "Homes & Church",
    description: "Small group Bible studies and fellowship meetings."
  }
];

const CalendarPage: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-church-blue text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-6"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide mb-3">Event Calendar</h1>
          <p className="text-blue-200 text-lg">Stay connected with all our church activities and events</p>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">

        {/* Calendar Embed */}
        <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md overflow-hidden">
          <div className="bg-church-blue px-6 py-4 flex items-center gap-3">
            <Calendar className="w-5 h-5 text-church-gold flex-shrink-0" />
            <div>
              <h2 className="font-questrial text-white font-bold tracking-wide">Church Calendar</h2>
              <p className="text-blue-300 text-sm">View all upcoming events and activities</p>
            </div>
          </div>
          <div className="p-6">
            <div className="relative w-full" style={{ paddingBottom: '75%' }}>
              <iframe
                src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&showPrint=0&src=bWFydHlyZWFjaDUxQGdtYWlsLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039be5&color=%230b8043"
                className="absolute top-0 left-0 w-full h-full rounded border-0"
                title="Church Calendar"
              />
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://www.webbchapel.org/calendar32/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-church-blue text-white px-6 py-3 rounded font-semibold hover:bg-church-gold hover:text-church-blue transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                View Full Calendar
              </a>
            </div>
          </div>
        </div>

        {/* Regular Weekly Events */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-16 bg-church-gold"></div>
            <h2 className="font-questrial text-3xl font-bold text-church-blue tracking-wide text-center">Regular Weekly Events</h2>
            <div className="h-px flex-1 max-w-16 bg-church-gold"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white border-t-4 border-church-gold rounded-b-md shadow-sm hover:shadow-md transition-shadow p-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-church-blue rounded flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-church-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-questrial text-lg font-bold text-church-blue mb-2">{event.title}</h3>
                    <div className="space-y-1 text-sm text-gray-500 mb-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-church-gold" />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-church-gold" />
                        {event.time}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-church-gold" />
                        {event.location}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Special Events */}
        <div className="bg-church-blue text-white rounded-md p-8">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-16 bg-church-gold opacity-60"></div>
            <h2 className="font-questrial text-3xl font-bold text-white tracking-wide text-center">Special Events</h2>
            <div className="h-px flex-1 max-w-16 bg-church-gold opacity-60"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Holiday Services", desc: "Special worship services for Christmas, Easter, and other holidays" },
              { title: "Community Events", desc: "Outreach events, community service projects, and fellowship activities" },
              { title: "Educational Programs", desc: "Bible studies, seminars, and educational workshops for all ages" },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-12 h-0.5 bg-church-gold mx-auto mb-4"></div>
                <h3 className="font-questrial text-lg font-bold mb-3">{item.title}</h3>
                <p className="text-blue-200 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Admin */}
        <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8 text-center">
          <h2 className="font-questrial text-2xl font-bold text-church-blue tracking-wide mb-3">Calendar Administration</h2>
          <p className="text-gray-600 mb-6">For church leaders and staff who need to add or modify events on the calendar.</p>
          <a
            href="https://www.webbchapel.org/calendar32/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-church-blue text-church-blue px-6 py-2.5 rounded font-semibold hover:bg-church-blue hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            Calendar Admin Login
          </a>
        </div>

      </div>
    </div>
  );
};

export default CalendarPage;
