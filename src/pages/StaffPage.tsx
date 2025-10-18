function StaffPage() {
  const staff = [
    {
      name: "Maricela Obiedo",
      title: "Financial Secretary",
      image: "images/leadership/staff/staff-maricelaobiedo.jpg",
      bio: "Maricela handles the financial operations and administrative tasks for our church. She ensures that all financial matters are handled with integrity and transparency.",
      responsibilities: [
        "Financial record keeping",
        "Budget management",
        "Administrative support",
        "Office coordination"
      ]
    },
    {
      name: "Carolyn Fisher",
      title: "Administrative Assistant",
      image: "images/leadership/staff/staff-carolynfisher.jpg",
      bio: "Carolyn provides essential administrative support to our church operations, helping to keep everything running smoothly.",
      responsibilities: [
        "Office administration",
        "Event coordination",
        "Member communication",
        "General support"
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-church-blue to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Staff
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">

        {/* Staff Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {staff.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-center mb-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-48 h-60 object-cover rounded-lg mx-auto mb-4"
                  />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-church-blue font-semibold text-lg mb-4">
                    {member.title}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">About</h4>
                    <p className="text-gray-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Responsibilities</h4>
                    <ul className="space-y-1">
                      {member.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="w-2 h-2 bg-church-blue rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
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

export default StaffPage;
