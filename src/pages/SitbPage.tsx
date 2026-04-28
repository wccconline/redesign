import React from 'react';
import { getImagePath } from '../utils/assets';
import { BookOpen, Mail, Clock, Users } from 'lucide-react';
import CognitoForm from '../components/CognitoForm';

const features = [
  { icon: BookOpen, title: "30 Lessons", desc: "Comprehensive Bible study series" },
  { icon: Mail,     title: "3 at a Time", desc: "Receive lessons in manageable batches" },
  { icon: Clock,    title: "Your Pace", desc: "Study at your own comfortable speed" },
  { icon: Users,    title: "Personal", desc: "Individual attention and feedback" },
];

const SitbPage: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-church-blue text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-6"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide">Studies in the Bible</h1>
          <p className="text-blue-200 text-lg mt-3">Deepen your understanding of God's Word</p>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto space-y-10">

          {/* Logo */}
          <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8 text-center">
            <img
              src={getImagePath('sitb-logo.png')}
              alt="SITB Logo"
              className="mx-auto max-w-full h-auto"
            />
          </div>

          {/* Description */}
          <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8">
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                "Hello and welcome to our Bible correspondence ministry called Studies in the Bible (SITB).
                If you are interested in a detailed study of God's word, you've found the right ministry to do just that.
              </p>
              <p>
                This is a 30 lesson series and we send you 3 lessons at a time which you can complete on your own timeframe.
                We will not contact you in any way other than sending you the next lessons in the series.
              </p>
              <p>
                There is absolutely no cost to you as we also include self-addressed stamped envelopes for you to return
                3 lessons after you have answered the study questions for each lesson. We will check your knowledge
                of what you've studied and return the graded lessons with 3 new lessons.
              </p>
              <p>No matter what your level of knowledge of the Bible is, I think you will benefit from this study."</p>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-6 text-center">
                <div className="w-12 h-12 bg-church-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-church-gold" />
                </div>
                <h3 className="font-questrial font-bold text-church-blue mb-1">{title}</h3>
                <p className="text-gray-600 text-sm">{desc}</p>
              </div>
            ))}
          </div>

          {/* What You'll Receive */}
          <div className="bg-church-blue text-white rounded-md p-8">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px flex-1 max-w-16 bg-church-gold opacity-60"></div>
              <h2 className="font-questrial text-2xl font-bold tracking-wide text-center">What You'll Receive</h2>
              <div className="h-px flex-1 max-w-16 bg-church-gold opacity-60"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-questrial font-bold text-church-gold mb-3">Study Materials</h3>
                <ul className="space-y-2 text-sm text-blue-100">
                  {["30 comprehensive Bible study lessons", "Study questions for each lesson", "Self-addressed stamped envelopes"].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-church-gold mt-1.5 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-questrial font-bold text-church-gold mb-3">Personal Support</h3>
                <ul className="space-y-2 text-sm text-blue-100">
                  {["Graded lessons with feedback", "No cost to you", "No pressure or follow-up calls"].map(item => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-church-gold mt-1.5 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sign Up Form */}
          <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-8">
            <h2 className="font-questrial text-2xl font-bold text-church-blue tracking-wide mb-6 text-center">
              Sign Up for the Course
            </h2>
            <div className="bg-church-cream rounded p-6">
              <CognitoForm
                dataKey="V3ZbR_hZIEKuz9M3qRqiEA"
                dataForm="94"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SitbPage;
