import React from 'react';
import { ExternalLink } from 'lucide-react';

interface Missionary {
  name: string;
  description: string;
  image: string;
  report?: string;
  update?: string;
}

const missionaries: Missionary[] = [
  {
    name: "Herman and Rosanne Alexander",
    description: "They were missionaries in Adelaide, Australia for 9 years, leaving an established Church when they moved back to the United States. Herman taught at the Preston Road School of Preaching later becoming the Preston Road School of Higher Education, from 1981 to 1995. Herman then taught at the South Pacific Bible College in New Zealand from 2006 to 2013. In 2013 he began working with Nations University serving as Vice Chancellor and Professor. He teaches, via skype, two days a week at the Cambodian Bible School and one day a week at Adelaide Church of Christ, via skype. Herman has also been preaching every Sunday at different churches. He and Rosanne currently reside in Irving, Texas. We began our financial support for them in 2015.",
    image: "/src/assets/images/missionaries-alexander.png"
  },
  {
    name: "Barry Baggott",
    description: "Barry and Rachel Baggott grew up at the Webb Chapel Church of Christ, married, decided to be missionaries, and went away for training. They specialized in teaching the French speaking world. They worked together diligently around the globe until Rachel's death in late 2017. They worked extensively in West African countries such as Morocco, Republic of Congo, Ivory Coast, Burundi, Chad, and many others. They also taught the French speaking people of the South Pacific and Polonaise. Barry continues to work with the French-speaking peoples of East Africa, Polynesia, and the Pacific Islands. He actively develops and produces new materials in French and visits those locals to encourage, train, and teach people in person. Barry currently lives in Nashville, Tennessee. We started supporting their work many many years ago.",
    image: "/src/assets/images/missionaries-baggott.png"
  },
  {
    name: "Thaddeus and Elaine Bruno",
    description: "They are from the Caribbean island of Dominica where they became Christians and began their love for missions. They moved to St. Thomas, Virgin Islands in 1991 to begin the St. Thomas Church of Christ. Through their work and God's blessings that congregation grew to become self-supporting and they left that work. Thaddeus then traveled throughout the Caribbean preaching at churches to help encourage and strengthen them. In 2015 the West End Church of Christ in Bermuda invited Thaddeus and Elaine to move there and be their located preacher. The congregation continues to grow, even during Covid. It is actively involved in teaching Bible classes, preaching the gospel, and worshiping together. We started our financial support of them in 1991.",
    image: "/src/assets/images/missionaries-bruno.png",
    report: "/src/assets/pdf/missionaryreport-bruno-0522.pdf"
  },
  {
    name: "Gerardo and Carola Garcia",
    description: "The Garcia's diligently work with the Church of Christ in Mexico City. They are actively involved in leading bible classes, small groups, evangelism classes, and special classes to help newcomers. In the last year, several people heard the gospel and respond with Baptism.",
    image: "/src/assets/images/missionaries-garcia.png",
    report: "/src/assets/pdf/missionaryreport-garcia-0322.pdf"
  },
  {
    name: "Calvin and Kayler Semple",
    description: "Calvin received his formal bible, teacher, and preacher training at the Jamaican School of Preaching. Upon graduation he was invited to move to Guyana to work with the small and struggling Blairmont Church of Christ. About a year after moving to Guyana Calvin married Kayler and they worked together for Lord. They are currently doing evangelism in local area villages where they have been able to teach over a hundred people at a time. They provide Vacation Bible schools for many area children and have converted several young men as a result. Calvin shares radio time with another local preacher on a radio program called The Narrow Way. They recently completed construction on a new church building, and are actively engaged in evangelism among the people of Guyana. We started their financial support upon Calvin's graduation and move to Guyana in 2015.",
    image: "/src/assets/images/missionaries-semple.png",
    report: "/src/assets/pdf/missionaryreport-semple-0822.pdf"
  },
  {
    name: "Yura and Yulia Taran",
    description: "The Tarans are native Ukrainians and after becoming Christians attended the Ukrainian Bible Institute. Upon graduation they moved to Zaparosia, Ukraine to work with the Church of Christ in that city. They are very active in evangelism in the area doing street teaching, youth programs and work with a local orphanage. They and their congregation of about 60 are committed to Jesus and the spread of the gospel. Their women's ministry does support projects and prays regularly. They have had many baptisms and are currently training their new converts to serve in the church and the community. In 2015 the Russians invaded the eastern part of Ukraine near Donetsk and caused vast destruction. Many Ukrainians fled toward the west and the church in Zaparosia was very active in caring for the needs of the refugees. We began their financial support in 2014.",
    image: "/src/assets/images/missionaries-taran.png",
    report: "/src/assets/pdf/missionaryreport-taran-0922.pdf",
    update: "UPDATE: Yura, his wife Julia, and younger son Nazer, now live at the refugee center outside the city of Warsaw Poland. Their older son Andrea had to stay in Ukraine and enlist in the military. Yura works among the many refugees who come to Warsaw seeking shelter. He preaches and teaches the love of Christ every day and leads them in worship each Sunday. Each day he also serves as a chauffeur for many people with needs. He drives them into Warsaw to buy food, clothes, medicines, doctors appointments, and to obtain travel papers for Europe. He is a dedicated worker in the Lord's kingdom and never stops serving people."
  },
  {
    name: "David and Paula Tarbet",
    description: "David and Paula Tarbet are native Texans who have devoted over 30 years of ministry to Churches of Christ in the Northeastern United States, especially in Connecticut. David Served as pulpit minister for the Danbury, Connecticut church for 23 years, before returning to \"roots\" in New Mexico and Texas. From 1995 to 2010, He served as pulpit minister of the White Rock Church of Christ in Dallas, Texas for 15 years before returning to Connecticut in 2011. He serves as Outreach Minister for the New Milford, Connecticut Church of Christ. The New Milford congregation is a congregation of about 50 people. The congregation is doctrinally sound, evangelistically focused and active in planting new congregations in the Northeastern United States. Eight congregations have been established in Connecticut, New York, New Jersey and Massachusetts. David is editor of \"Christ for Today\" — a direct mail publication distributed throughout the Northeast U.S. Published once a quarter, this magazine is responsible for baptisms in various cities each year. His video series, \"How the Bible Came To Us\" has been used by Churches of Christ throughout the United States. Their work for Christ is sponsored by the Webb Chapel Church of Christ. David is also volunteer Director of The White Rock Fund — a non-profit organization dedicated to assisting Churches of Christ support 75 missionaries around the world, including 10 locations in the Northeastern United States. Their collection of rare 1500's and 1600's English Bibles was donated to Freed-Hardeman University where it is on permanent display in the university library. David and Paula have 4 adult children and 10 grandchildren.",
    image: "/src/assets/images/missionaries-tarbet.png"
  }
];

const MissionariesPage: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero */}
      <div className="bg-church-blue text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-6"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide">Our Missionaries</h1>
          <p className="text-blue-200 text-lg mt-3">Spreading the gospel around the world</p>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto space-y-8">
          {missionaries.map((missionary, index) => (
            <div key={index} className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2 p-4">
                  <a href={missionary.image} target="_blank" rel="noopener noreferrer" className="block">
                    <img
                      src={missionary.image}
                      alt={missionary.name}
                      className="w-full h-auto rounded hover:opacity-90 transition-opacity"
                    />
                  </a>
                </div>
                <div className="md:w-1/2 p-6 border-t md:border-t-0 md:border-l border-gray-100">
                  <h3 className="font-questrial text-xl font-bold text-church-blue mb-4">{missionary.name}</h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">{missionary.description}</p>

                  {missionary.update && (
                    <div className="bg-amber-50 border-l-4 border-church-gold p-4 mb-4 rounded-r">
                      <p className="text-church-blue font-semibold text-xs uppercase tracking-wide mb-1">Update</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{missionary.update}</p>
                    </div>
                  )}

                  {missionary.report && (
                    <a
                      href={missionary.report}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-church-blue hover:text-church-gold font-semibold text-sm transition-colors"
                    >
                      Missionary Report
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default MissionariesPage;
