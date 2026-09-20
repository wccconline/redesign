import React from 'react';
import { getImagePath } from '../utils/assets';
import { usePageMeta } from '../utils/usePageMeta';

const EldersPage: React.FC = () => {
  usePageMeta('Shepherds', 'Meet the shepherds (elders) who oversee the Webb Chapel church of Christ in Farmers Branch, Texas.');
  const elders = [
    {
      name: "Greg Chandler",
      image: getImagePath('leadership/elderChandlerGreg.jpg'),
      bio: "Greg and his wife Donelle have attended Webb Chapel since 1997. In that time, they have led a Care Group and a Small Group bible study for a number of years. Greg has also served as deacon over missions and adult education, and is part of the A/V team. Donelle was a teacher and coordinator for primary education. Greg has been a database programmer and systems designer for Solomon Associates since 1994. Their children, Garrett and Jara, grew up at Webb Chapel and are currently attending Texas A&M University."
    },
    {
      name: "Greg Hargis",
      image: getImagePath('leadership/elderGregHargis.jpg'),
      bio: "Greg and his wife Heidi came to Webb Chapel in June 1991. Greg has served as song leader for many years and was deacon over worship at Webb Chapel for several years. He has been active in teaching adult classes, leading singing, and helping at children's activities. Greg and Heidi were Care Group Leaders for several years. They also are Small Group Leaders. Greg learned to fly while serving in the US Navy and currently is a Captain for American Airlines. Greg and Heidi are the parents of two sons, Ryan and Glen."
    },
    {
      name: "Brian Herrington",
      image: getImagePath('leadership/elderHerringtonBrian.jpg'),
      bio: "Brian & his wife Deborah came to Webb Chapel in 2003 and have been active in the youth and education programs. Brian served as a deacon before he became a Shepherd in 2008. He has been a Software Engineer Project Manager for Rockwell Collins for more than 35 years. Brian & Deborah are the parents of Rebecca & husband Chris Faulkner and twin sons Jason and wife Stephanie of Cedar Park, Texas, and Jeremy and wife Angela of Lewisville, Texas. They have four grandchildren."
    },
    {
      name: "Steve Mankin",
      image: getImagePath('leadership/elderMankinSteve.jpg'),
      bio: "Steve came to Webb Chapel in 1976 with his family. He and his wife, Barbara, have been active in the teaching program, children's ministry, and other areas. Steve served as a Deacon before he was selected to be an Elder in 2000. He has worked for Oncor for 40 years and is a Distribution Services Advisor. Steve & Barbara are the parents of a daughter, Kami & husband Kelly Terashita, and a son, Grant & wife Vanessa. The Mankins have six grandchildren."
    },
    {
      name: "Bob Nienstadt",
      image: getImagePath('leadership/elderBobNienstadt.jpg'),
      bio: "Bob and his wife Linda came to Webb Chapel in 1998. Bob has been involved in teaching adult classes at Webb Chapel as well as occasionally leading singing and preaching, and Bob and Linda have served as Care Group Leaders. Bob served in the US Air Force for three years. He is a graduate of the Preston Road School of Preaching and preached in a Texas congregation for eight years. Bob is currently serving on the Board of Regents of Nations University. He and Linda are the parents of Trudy Zarnowiec, Ryan Nienstadt, and Leslie Wertz. They have four grandchildren, and one great grandson."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="pt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Our Shepherds
            </h1>
          
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        

        {/* Elders Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {elders.map((elder, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-6">
                  <img 
                    src={elder.image} 
                    alt={elder.name}
                    className="w-48 h-60 object-cover rounded-lg mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {elder.name}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {elder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EldersPage;
