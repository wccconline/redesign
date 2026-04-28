import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, BookOpen } from 'lucide-react';

const ImNewHerePage: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-church-blue text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-6"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide">I'm New Here</h1>
          <p className="text-blue-200 text-lg mt-3">You are welcome here</p>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Welcome */}
          <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8">
            <h2 className="font-questrial text-2xl font-bold text-church-blue tracking-wide mb-4">Welcome!</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to Webb Chapel church of Christ, and thank you for visiting our website! We would be delighted to have you, your family, and your friends visit with us for worship and Bible study at our facilities in Farmers Branch. We know that it can be intimidating visiting a new church community, but at Webb Chapel, it is impossible to walk through our doors without experiencing our love for God and His people. While here, you will not only be our honored guest, but part of our family of believers.
            </p>
          </div>

          {/* Who We Are */}
          <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8">
            <h2 className="font-questrial text-2xl font-bold text-church-blue tracking-wide mb-4">Who We Are</h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Webb Chapel church of Christ is a local congregation of Christian believers who have been baptized by immersion into Christ for the remission of sin, attempting to follow the practices and examples of the followers of Christ of the 1st Century. We believe that Jesus founded only one church, and work to reproduce, in contemporary times, the church established on Pentecost in A.D. 33.
              </p>
              <p>
                The Webb Chapel church of Christ is a group of sinners, clinging to the grace of God offered through the sacrifice of His Son, Jesus, upon the cross.
              </p>
            </div>
          </div>

          {/* Public Worship */}
          <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8">
            <h2 className="font-questrial text-2xl font-bold text-church-blue tracking-wide mb-4">Public Worship</h2>
            <p className="text-gray-700 leading-relaxed">
              Using the New Testament as our guide, we gather each first day of the week, Sunday, to partake of the Lord's Supper (Communion), sing, pray and teach. In our worship services our singing is "a cappella" — we sing without musical instruments. Our teachings are based on the Bible scriptures, as we believe that the Bible is the only source of what God has revealed to us of Himself, His wishes, His expectations, and His salvation.
            </p>
          </div>

          {/* Service Times + Location */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-church-blue text-white rounded-md p-8">
              <h3 className="font-questrial text-xl font-bold mb-1 flex items-center gap-2">
                <Clock className="h-5 w-5 text-church-gold" />
                Service Times
              </h3>
              <div className="w-10 h-0.5 bg-church-gold mb-5"></div>
              <div className="space-y-4 text-sm">
                <div>
                  <p className="font-semibold text-church-gold">Sunday Morning</p>
                  <p className="text-blue-200">9:30 AM &mdash; Worship</p>
                  <p className="text-blue-200">11:00 AM &mdash; Bible Classes</p>
                </div>
                <div>
                  <p className="font-semibold text-church-gold">Sunday Evening</p>
                  <p className="text-blue-200">Small Group Meetings</p>
                </div>
                <div>
                  <p className="font-semibold text-church-gold">Wednesday Evening</p>
                  <p className="text-blue-200">7:00 PM &mdash; Bible Study</p>
                </div>
              </div>
            </div>

            <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8">
              <h3 className="font-questrial text-xl font-bold text-church-blue mb-1 flex items-center gap-2">
                <MapPin className="h-5 w-5 text-church-gold" />
                Location
              </h3>
              <div className="w-10 h-0.5 bg-church-gold mb-5"></div>
              <div className="text-gray-700 text-sm space-y-1">
                <p className="font-semibold">Webb Chapel Church of Christ</p>
                <p>13425 Webb Chapel Road</p>
                <p>Farmers Branch, Texas 75234</p>
                <p className="mt-3"><strong>Phone:</strong> (972) 241-3293</p>
              </div>
            </div>
          </div>

          {/* What to Expect */}
          <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8">
            <h2 className="font-questrial text-2xl font-bold text-church-blue tracking-wide mb-1 flex items-center gap-2">
              <Users className="h-6 w-6 text-church-gold" />
              What to Expect
            </h2>
            <div className="w-10 h-0.5 bg-church-gold mb-6"></div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Our Worship Style</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {["A cappella singing (no instruments)", "Bible-based preaching", "Weekly communion", "Prayer and fellowship"].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-church-gold mt-1.5 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Dress Code</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We welcome you to come as you are. Most people dress in business casual attire, but we have no formal dress code. What matters most is that you're here to worship God.
                </p>
              </div>
            </div>
          </div>

          {/* Bible Study */}
          <div className="bg-church-cream border-t-4 border-church-gold rounded-b-md p-8">
            <h2 className="font-questrial text-2xl font-bold text-church-blue tracking-wide mb-1 flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-church-gold" />
              Bible Study Opportunities
            </h2>
            <div className="w-10 h-0.5 bg-church-gold mb-6"></div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm">Sunday Classes</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  We offer age-appropriate Bible classes for everyone from 2 years old through adults. Classes begin at 11:00 AM and last approximately 45 minutes.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 text-sm">Wednesday Evening</h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Join us for mid-week Bible study and fellowship. This is a great opportunity to dive deeper into God's Word and connect with other believers.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-church-blue text-white rounded-md p-8 text-center">
            <div className="w-12 h-0.5 bg-church-gold mx-auto mb-5"></div>
            <h2 className="font-questrial text-2xl font-bold mb-3 tracking-wide">Have Questions?</h2>
            <p className="text-blue-200 mb-6">We'd love to help you get connected!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:972-241-3293"
                className="bg-church-gold text-church-blue px-6 py-3 rounded font-bold hover:bg-amber-400 transition-colors"
              >
                Call Us: (972) 241-3293
              </a>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded font-semibold hover:bg-white hover:text-church-blue transition-colors"
              >
                Send Us a Message
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ImNewHerePage;
