import { getImagePath } from '../utils/assets';

const staff = [
  {
    name: "Maricela Obiedo",
    title: "Financial Secretary",
    image: "leadership/staff/staff-maricelaobiedo.jpg",
    bio: "Maricela handles the financial operations and administrative tasks for our church. She ensures that all financial matters are handled with integrity and transparency.",
    responsibilities: ["Financial record keeping", "Budget management", "Administrative support", "Office coordination"]
  },
  {
    name: "Carolyn Fisher",
    title: "Administrative Assistant",
    image: "leadership/staff/staff-carolynfisher.jpg",
    bio: "Carolyn provides essential administrative support to our church operations, helping to keep everything running smoothly.",
    responsibilities: ["Office administration", "Event coordination", "Member communication", "General support"]
  }
];

function StaffPage() {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-church-blue text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-6"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide">Our Staff</h1>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {staff.map((member, index) => (
            <div key={index} className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md overflow-hidden">
              <div className="p-6 text-center border-b border-gray-100">
                <img
                  src={getImagePath(member.image)}
                  alt={member.name}
                  className="w-44 h-56 object-cover rounded mx-auto mb-4"
                />
                <h3 className="font-questrial text-xl font-bold text-church-blue">{member.name}</h3>
                <p className="text-church-gold font-semibold text-sm tracking-wide uppercase mt-1">{member.title}</p>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-1">About</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm mb-2">Responsibilities</h4>
                  <ul className="space-y-1">
                    {member.responsibilities.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-church-gold mt-1.5 flex-shrink-0"></span>
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default StaffPage;
