import { Mic, BookOpen, Heart, Users } from 'lucide-react';

function MinistersPage() {
  const ministers = [
    {
      name: "Galon Jones",
      title: "Pulpit Minister",
      image: "images/leadership/ministers/pulpitMinisterGalonJones.jpg",
      bio: "Galon Jones grew up in the north Dallas area. He has been married to Sharon for over forty years and has three children and five grandchildren. He has a BS in Theology from Harding University. He has master's degrees in Theology, Marriage and Family Therapy, Conflict Resolution, Mediation, Negotiation and Divorce Mediation from Abilene Christian University. He served over 10 years church planting in Florianopolis, Brasil.",
      education: "BS in Theology from Harding University. Master's degrees in Theology, Marriage and Family Therapy, Conflict Resolution, Mediation, Negotiation and Divorce Mediation from Abilene Christian University.",
      experience: "Before coming to Webb Chapel, he served on staff for twenty years, in various ministry positions at the Greenville Oaks Church in Allen, TX. He currently serves as director of James Group Ministries."
    },
    {
      name: "David Bates",
      title: "Outreach Minister",
      image: "images/leadership/ministers/outreachMinisterDavidBates.jpg",
      bio: "David Bates serves as our outreach minister, focusing on community engagement and evangelism efforts.",
      education: "Bachelor of Arts in Ministry from Abilene Christian University",
      experience: "Extensive experience in community outreach, evangelism, and church growth strategies."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-church-blue to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Ministers
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

        {/* Ministers Grid */}
        <div className="space-y-12 mb-12">
          {ministers.map((minister, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 p-6">
                  <img 
                    src={minister.image} 
                    alt={minister.name}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                </div>
                <div className="md:w-2/3 p-6">
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">
                    {minister.name}
                  </h3>
                  <p className="text-church-blue font-semibold text-xl mb-6">
                    {minister.title}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">About</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {minister.bio}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Education</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {minister.education}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Experience</h4>
                      <p className="text-gray-600 leading-relaxed">
                        {minister.experience}
                      </p>
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
};

export default MinistersPage;
