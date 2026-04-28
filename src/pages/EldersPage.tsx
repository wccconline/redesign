import React from 'react';
import { getImagePath } from '../utils/assets';

const elders = [
  {
    name: "Greg Chandler",
    image: "leadership/elderChandlerGreg.jpg",
    bio: "Greg and his wife Donelle have attended Webb Chapel since 1997. In that time, they have led a Care Group and a Small Group bible study for a number of years. Greg has also served as deacon over missions and adult education, and is part of the A/V team. Donelle was a teacher and coordinator for primary education. Greg has been a database programmer and systems designer for Solomon Associates since 1994. Their children, Garrett and Jara, grew up at Webb Chapel and are currently attending Texas A&M University."
  },
  {
    name: "Greg Hargis",
    image: "leadership/elderGregHargis.jpg",
    bio: "Greg and his wife Heidi came to Webb Chapel in June 1991. Greg has served as song leader for many years and was deacon over worship at Webb Chapel for several years. He has been active in teaching adult classes, leading singing, and helping at children's activities. Greg and Heidi were Care Group Leaders for several years. They also are Small Group Leaders. Greg learned to fly while serving in the US Navy and currently is a Captain for American Airlines. Greg and Heidi are the parents of two sons, Ryan and Glen."
  },
  {
    name: "Brian Herrington",
    image: "leadership/elderHerringtonBrian.jpg",
    bio: "Brian & his wife Deborah came to Webb Chapel in 2003 and have been active in the youth and education programs. Brian served as a deacon before he became a Shepherd in 2008. He has been a Software Engineer Project Manager for Rockwell Collins for more than 35 years. Brian & Deborah are the parents of Rebecca & husband Chris Faulkner and twin sons Jason and wife Stephanie of Cedar Park, Texas, and Jeremy and wife Angela of Lewisville, Texas. They have four grandchildren."
  },
  {
    name: "Steve Mankin",
    image: "leadership/elderMankinSteve.jpg",
    bio: "Steve came to Webb Chapel in 1976 with his family. He and his wife, Barbara, have been active in the teaching program, children's ministry, and other areas. Steve served as a Deacon before he was selected to be an Elder in 2000. He has worked for Oncor for 40 years and is a Distribution Services Advisor. Steve & Barbara are the parents of a daughter, Kami & husband Kelly Terashita, and a son, Grant & wife Vanessa. The Mankins have six grandchildren."
  },
  {
    name: "Bob Neinstadt",
    image: "leadership/elderBobNienstadt.jpg",
    bio: "Bob and his wife Linda came to Webb Chapel in 1998. Bob has been involved in teaching adult classes at Webb Chapel as well as occasionally leading singing and preaching, and Bob and Linda have served as Care Group Leaders. Bob served in the US Air Force for three years. He is a graduate of the Preston Road School of Preaching and preached in a Texas congregation for eight years. Bob is currently serving on the Board of Regents of Nations University. He and Linda are the parents of Trudy Zarnowiec, Ryan Nienstadt, and Leslie Wertz. They have four grandchildren, and one great grandson."
  }
];

const EldersPage: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-church-blue text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-6"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide">Our Shepherds</h1>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {elders.map((elder, index) => (
            <div key={index} className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md overflow-hidden">
              <div className="p-6 text-center border-b border-gray-100">
                <img
                  src={getImagePath(elder.image)}
                  alt={elder.name}
                  className="w-44 h-56 object-cover rounded mx-auto mb-4"
                />
                <h3 className="font-questrial text-xl font-bold text-church-blue">{elder.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">{elder.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default EldersPage;
