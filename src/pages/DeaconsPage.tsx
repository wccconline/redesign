import React from 'react';
import { getImagePath } from '../utils/assets';
import { usePageMeta } from '../utils/usePageMeta';

const DeaconsPage: React.FC = () => {
  usePageMeta('Deacons', 'Meet the deacons who serve the Webb Chapel church of Christ congregation in Farmers Branch, Texas.');
  const deacons = [
    {
      name: "Dennis Bartley",
      image: getImagePath('leadership/deacons/deaconBartleyDennis.jpg'),
      bio: "Dennis and his wife Julie placed membership at Webb Chapel in 1997. Dennis became a Deacon in 2006 and currently handles WebbKids (ages 2 - 5th grade and their families). Dennis and Julie are also co-leaders of a Small Group. They were married in 1996 and have 3 children, twins William and Grant and daughter Claire."
    },
    {
      name: "Roger Daw",
      image: getImagePath('leadership/placeholder.svg'),
      bio: "Bio coming soon."
    },
    {
      name: "David Day",
      image: getImagePath('leadership/deacons/deaconDayDavid.jpg'),
      bio: "David and his wife Lisa were married and placed membership at Webb Chapel in 1996. He became a deacon in 2006 and works with Retreats and Special Projects, and leads the communion servers and men's activities. They co-coordinate the Care Group Ministry and are Small Group Leaders. They are the parents of Alexander and Aubrey."
    },
    {
      name: "Luis Estrada",
      image: getImagePath('leadership/deacons/deaconEstradaLuis.jpg'),
      bio: "Luis and his wife, Ana Maria (Maria) were married in 2004 and placed membership at Webb Chapel in 2018. Luis became a deacon in 2021 and helps with Spanish membership and community outreach. Luis and Maria are active in Small Groups and bible studies with the Spanish-speaking members. They have two children, Mario and Alina who are growing and learning in the Children's Ministry."
    },
    {
      name: "Chris Faulkner",
      image: getImagePath('leadership/placeholder.svg'),
      bio: "Bio coming soon."
    },
    {
      name: "John Gattis",
      image: getImagePath('leadership/deacons/deaconJohnGattis.jpg'),
      bio: "John and his wife Crystal were married in 1995, placed membership membership at Webb Chapel in 1994, and John became a deacon in 2011, helping with ESL. Crystal helps with children's Bible classes. They are the parents of their son, Zachary Weisbard."
    },
    {
      name: "Rob Keith",
      image: getImagePath('leadership/placeholder.svg'),
      bio: "Bio coming soon."
    },
    {
      name: "Bondey Mays",
      image: getImagePath('leadership/deacons/deaconMaysBondey.jpg'),
      bio: "Bondey and his wife Jan were married in 1969 and placed membership with Webb Chapel in 2001. Bondey became a deacon in 2011 and helps with the Spanish ministry and PT Cruzer. They have two children, daughter Kelly and husband DJ Overman and son Jordan. They have 4 grandchildren."
    },
    {
      name: "Ryan Nienstadt",
      image: getImagePath('leadership/placeholder.svg'),
      bio: "Bio coming soon."
    },
    {
      name: "Marty Reach",
      image: getImagePath('leadership/placeholder.svg'),
      bio: "Bio coming soon."
    },
    {
      name: "Mike Swayne",
      image: getImagePath('leadership/deacons/deaconSwayneMike.jpg'),
      bio: "Mike and Judi were married in 1967, and placed membership at Webb Chapel in 1973. Mike became a deacon in 1988 and helps with Audio. Judi helps with children's Bible classes. They have a son named Eric and his wife Larissa of Dallas, and three grandchildren."
    }
  ];

  return (
    <div className="w-full">
      {/* Title */}
      <div className="pt-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Our Deacons
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

        {/* Deacons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {deacons.map((deacon, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-6">
                  <img 
                    src={deacon.image} 
                    alt={deacon.name}
                    className="w-48 h-60 object-cover rounded-lg mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {deacon.name}
                  </h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {deacon.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeaconsPage;
