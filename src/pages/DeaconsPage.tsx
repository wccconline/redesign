import React from 'react';
import { getImagePath } from '../utils/assets';

const deacons = [
  {
    name: "Dennis Bartley",
    image: "leadership/deacons/deaconBartleyDennis.jpg",
    bio: "Dennis and his wife Julie placed membership at Webb Chapel in 1997. Dennis became a Deacon in 2006 and currently handles WebbKids (ages 2 - 5th grade and their families). Dennis and Julie are also co-leaders of a Small Group. They were married in 1996 and have 3 children, twins William and Grant and daughter Claire."
  },
  {
    name: "David Day",
    image: "leadership/deacons/deaconDayDavid.jpg",
    bio: "David and his wife Lisa were married and placed membership at Webb Chapel in 1996. He became a deacon in 2006 and works with Retreats and Special Projects, and leads the communion servers and men's activities. They co-coordinate the Care Group Ministry and are Small Group Leaders. They are the parents of Alexander and Aubrey."
  },
  {
    name: "Luis Estrada",
    image: "leadership/deacons/deaconEstradaLuis.jpg",
    bio: "Luis and his wife, Ana Maria (Maria) were married in 2004 and placed membership at Webb Chapel in 2018. Luis became a deacon in 2021 and helps with Spanish membership and community outreach. Luis and Maria are active in Small Groups and bible studies with the Spanish-speaking members. They have two children, Mario and Alina who are growing and learning in the Children's Ministry."
  },
  {
    name: "Ged Erwin",
    image: "leadership/deacons/deaconGedErwin.jpg",
    bio: "Ged and and his wife Jodie were married in 2001, and placed membership at Webb Chapel in 2008. Ged became a deacon in 2011 and helps with Health & Wellness due to his medical background. Their children are Callahan and Isabelle Clarice."
  },
  {
    name: "Bob Fellers",
    image: "leadership/deacons/deaconFellersBob.jpg",
    bio: "Bob and his wife Lynne were married in 1974, and placed membership at Webb Chapel in 1977. Bob became a deacon in 1984 and helps with transportation, ushering and tracks attendance. Lynne helps with children's Bible classes. They have two daughters, Lindsay and husband Derek Crites of McKinney and daughter Lauren of New York City."
  },
  {
    name: "John Gattis",
    image: "leadership/deacons/deaconJohnGattis.jpg",
    bio: "John and his wife Crystal were married in 1995, placed membership at Webb Chapel in 1994, and John became a deacon in 2011, helping with ESL. Crystal helps with children's Bible classes. They are the parents of their son, Zachary Weisbard."
  },
  {
    name: "Bondey Mays",
    image: "leadership/deacons/deaconMaysBondey.jpg",
    bio: "Bondey and his wife Jan were married in 1969 and placed membership with Webb Chapel in 2001. Bondey became a deacon in 2011 and helps with the Spanish ministry and PT Cruzer. They have two children, daughter Kelly and husband DJ Overman and son Jordan. They have 4 grandchildren."
  },
  {
    name: "Mike Swayne",
    image: "leadership/deacons/deaconSwayneMike.jpg",
    bio: "Mike and Judi were married in 1967, and placed membership at Webb Chapel in 1973. Mike became a deacon in 1988 and helps with Audio. Judi helps with children's Bible classes. They have a son named Eric and his wife Larissa of Dallas, and three grandchildren."
  }
];

const DeaconsPage: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-church-blue text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-6"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide">Our Deacons</h1>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {deacons.map((deacon, index) => (
            <div key={index} className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md overflow-hidden">
              <div className="p-6 text-center border-b border-gray-100">
                <img
                  src={getImagePath(deacon.image)}
                  alt={deacon.name}
                  className="w-44 h-56 object-cover rounded mx-auto mb-4"
                />
                <h3 className="font-questrial text-xl font-bold text-church-blue">{deacon.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm leading-relaxed">{deacon.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default DeaconsPage;
