import { getImagePath } from '../utils/assets';

const ministers = [
  {
    name: "Galon Jones",
    title: "Pulpit Minister",
    image: "leadership/ministers/pulpitMinisterGalonJones.jpg",
    bio: "Galon Jones grew up in the north Dallas area. He has been married to Sharon for over forty years and has three children and five grandchildren. He has a BS in Theology from Harding University. He has master's degrees in Theology, Marriage and Family Therapy, Conflict Resolution, Mediation, Negotiation and Divorce Mediation from Abilene Christian University. He served over 10 years church planting in Florianopolis, Brasil.",
    education: "BS in Theology from Harding University. Master's degrees in Theology, Marriage and Family Therapy, Conflict Resolution, Mediation, Negotiation and Divorce Mediation from Abilene Christian University.",
    experience: "Before coming to Webb Chapel, he served on staff for twenty years, in various ministry positions at the Greenville Oaks Church in Allen, TX. He currently serves as director of James Group Ministries."
  },
  {
    name: "David Bates",
    title: "Outreach Minister",
    image: "leadership/ministers/outreachMinisterDavidBates.jpg",
    bio: "David Bates serves as our outreach minister, focusing on community engagement and evangelism efforts.",
    education: "Bachelor of Arts in Ministry from Abilene Christian University",
    experience: "Extensive experience in community outreach, evangelism, and church growth strategies."
  }
];

function MinistersPage() {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-church-blue text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-6"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide">Our Ministers</h1>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="space-y-10 max-w-4xl mx-auto">
          {ministers.map((minister, index) => (
            <div key={index} className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 p-6 flex items-start justify-center">
                  <img
                    src={getImagePath(minister.image)}
                    alt={minister.name}
                    className="w-full max-w-[220px] h-72 object-cover rounded"
                  />
                </div>
                <div className="md:w-2/3 p-6 border-t md:border-t-0 md:border-l border-gray-100">
                  <h3 className="font-questrial text-2xl font-bold text-church-blue mb-1">{minister.name}</h3>
                  <p className="text-church-gold font-semibold text-sm tracking-wide uppercase mb-5">{minister.title}</p>
                  <div className="space-y-4 text-sm">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">About</h4>
                      <p className="text-gray-600 leading-relaxed">{minister.bio}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Education</h4>
                      <p className="text-gray-600 leading-relaxed">{minister.education}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Experience</h4>
                      <p className="text-gray-600 leading-relaxed">{minister.experience}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default MinistersPage;
