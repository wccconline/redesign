import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../utils/assets';
import { Calendar, Clock, BookOpen, Music, Users, Utensils } from 'lucide-react';

const programCards = [
  { icon: BookOpen, title: "Reading Tutoring",  desc: "Individualized reading support to help children improve their literacy skills" },
  { icon: Users,    title: "Character Class",   desc: "Building strong character through fun activities and biblical principles" },
  { icon: Music,    title: "Music",             desc: "Musical activities and learning to develop creativity and rhythm" },
];

const SummerLearningCampPage: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-church-blue text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-6"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide">Summer Learning Camp</h1>
          <p className="text-blue-200 text-lg mt-3">Fun learning and character development for children</p>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-10">

        {/* Banner image */}
        <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md overflow-hidden max-w-2xl mx-auto">
          <img
            src={getImagePath('thumb-summerlearningcamp.jpg')}
            alt="Summer Learning Camp"
            className="w-full h-auto"
          />
          <div className="p-6 text-center">
            <h2 className="font-questrial text-2xl font-bold text-church-blue">Summer Learning Camp 2023</h2>
          </div>
        </div>

        {/* Main Info */}
        <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8 max-w-3xl mx-auto">
          <div className="text-gray-700 leading-relaxed space-y-1 text-center">
            <p className="font-bold text-church-blue text-lg">Webb Chapel Church of Christ</p>
            <p>Tuesdays and Thursdays &bull; 10:00 am &ndash; 12:30 pm</p>
            <p>June 1 &ndash; July 13</p>
            <p>Reading Tutoring, Fun with Science, Character Class, Music, and lots of fun!</p>
            <p>Lunch provided</p>
            <p className="font-bold text-church-gold text-lg mt-2">All Free!</p>
          </div>
        </div>

        {/* Program Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {programCards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-6 text-center">
              <div className="w-12 h-12 bg-church-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon className="w-6 h-6 text-church-gold" />
              </div>
              <h3 className="font-questrial font-bold text-church-blue mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>

        {/* Schedule */}
        <div className="bg-church-blue text-white rounded-md p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-16 bg-church-gold opacity-60"></div>
            <h2 className="font-questrial text-2xl font-bold tracking-wide text-center">Program Schedule</h2>
            <div className="h-px flex-1 max-w-16 bg-church-gold opacity-60"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Calendar, label: "Days",     value: "Tuesdays and Thursdays" },
              { icon: Clock,    label: "Time",     value: "10:00 AM – 12:30 PM" },
              { icon: Calendar, label: "Duration", value: "June 1 – July 13" },
              { icon: Utensils, label: "Lunch",    value: "Provided daily" },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-center gap-4">
                <Icon className="w-7 h-7 text-church-gold flex-shrink-0" />
                <div>
                  <p className="font-questrial font-bold">{label}</p>
                  <p className="text-blue-200 text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* What We Offer + Benefits */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-6">
            <h3 className="font-questrial text-lg font-bold text-church-blue mb-4">What We Offer</h3>
            <ul className="space-y-2">
              {["Reading Tutoring", "Fun with Science", "Character Development", "Music Activities", "Interactive Learning"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-church-gold mt-1.5 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-6">
            <h3 className="font-questrial text-lg font-bold text-church-blue mb-4">Program Benefits</h3>
            <ul className="space-y-2">
              {["Completely Free", "Lunch Provided", "Safe Environment", "Experienced Teachers", "Fun Activities"].map(item => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 rounded-full bg-church-gold mt-1.5 flex-shrink-0"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8 text-center max-w-2xl mx-auto">
          <h2 className="font-questrial text-2xl font-bold text-church-blue mb-3">Ready to Join?</h2>
          <p className="text-gray-600 mb-6 text-sm">Contact us for more information or to register your child for the Summer Learning Camp.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-church-blue text-white px-8 py-3 rounded font-semibold hover:bg-church-gold hover:text-church-blue transition-colors"
            >
              Contact Us
            </Link>
            <Link
              to="/imnewhere"
              className="border-2 border-church-blue text-church-blue px-8 py-3 rounded font-semibold hover:bg-church-blue hover:text-white transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default SummerLearningCampPage;
