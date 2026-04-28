import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Ministry {
  title: string;
  content: string;
  link?: string;
}

const ministries: Ministry[] = [
  {
    title: "Studies in the Bible Ministry",
    content: "STUDIES IN THE BIBLE is a 30-lesson series where we send 3 lessons that can be completed in your own timeframe. There is absolutely no cost as we include self-addressed stamped envelopes to return the completed lessons. We will check your knowledge of what you have studied and return the graded lessons with 3 new lessons. You will not be contacted in any way other than sending you the next set of lessons.",
    link: "/sitb"
  },
  {
    title: "James Group Ministry",
    content: "The JAMES GROUP helps people discover who they are intended to be. We help them realize what God intended for them and help them find it, restoring them to a peaceful existence."
  },
  {
    title: "English as a Second Language Ministry",
    content: "ENGLISH AS A SECOND LANGUAGE shares Jesus in the community by teaching English and U.S. Citizenship to speakers of other languages who desire to improve their English skills. The class meets on Wednesday evenings at 7:00 PM."
  },
  {
    title: "Ladies Ministry",
    content: "Our LADIES MINISTRY is a very active group at Webb Chapel. Ladies Bible Study meets each Tuesday from 10 AM to 11:30 AM. The lessons will be taught by several different ladies. Our biggest event of the year is a Ladies Day in the Spring, followed by several other gatherings throughout the year. All ladies are encouraged and welcomed to participate."
  },
  {
    title: "Brothers Keepers",
    content: "THE BROTHERS KEEPERS ministry at Webb Chapel is dedicated to meeting the needs of the Webb Chapel members through the strengthening of our relationships with one another and by providing help in times of need. Everyone at Webb Chapel is part of one of the 9 Care Groups."
  },
  {
    title: "The Missions Committee Ministry",
    content: "THE MISSIONS COMMITTEE consists of members of the Webb Chapel congregation. Its purpose is to ensure that the funding provided by the church for local and international evangelism is allocated in a manner which best spreads the gospel throughout the world. We currently provide monetary support to missionaries in the Ukraine, Mexico, Guyana, Bermuda, Cambodia, and the French speaking countries of Africa and the South Pacific. In addition to missionaries, we also provide funds to organizations such as Nations University, Eastern European Missions and Main Street church of Christ in Dallas, Texas, each dedicated to spreading the gospel."
  },
  {
    title: "Children's Ministry",
    content: "OUR CHILDREN'S MINISTRY at Webb Chapel is focused on growing the next generation of disciples. Each Sunday, we offer an age appropriate worship for our children followed by Bible classes for children 2 years old through 5th grade. We also host several events throughout the year, including fun summer activities such as game night, pool parties, service activities and holiday specific events like our Fall Festival and Christmas play."
  }
];

const MinistriesPage: React.FC = () => {
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const toggle = (index: number) => {
    setExpandedItems(prev =>
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-church-blue text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-6"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide">Ministries at Webb Chapel</h1>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-3">
          {ministries.map((ministry, index) => (
            <div key={index} className="bg-white border-t-4 border-church-gold rounded-b-md shadow-sm overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full px-6 py-4 text-left bg-church-blue text-white hover:bg-church-gold hover:text-church-blue transition-colors flex items-center justify-between gap-4"
              >
                <h3 className="font-questrial font-bold tracking-wide text-left">{ministry.title}</h3>
                {expandedItems.includes(index)
                  ? <ChevronUp className="h-5 w-5 flex-shrink-0" />
                  : <ChevronDown className="h-5 w-5 flex-shrink-0" />
                }
              </button>

              {expandedItems.includes(index) && (
                <div className="p-6 bg-church-cream">
                  <p className="text-gray-700 leading-relaxed mb-4">{ministry.content}</p>
                  {ministry.link && (
                    <Link
                      to={ministry.link}
                      className="inline-block bg-church-blue text-white px-5 py-2 rounded font-semibold text-sm hover:bg-church-gold hover:text-church-blue transition-colors"
                    >
                      Click here to enroll
                    </Link>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MinistriesPage;
