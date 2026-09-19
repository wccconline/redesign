import React from 'react';
import { Link } from 'react-router-dom';
import { getImagePath } from '../utils/assets';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Image Section */}
      <section className="relative">
        <img
          src={getImagePath('slider3.jpg')}
          alt="Our Vision: Living Transformed Through Christ To Serve. Our Mission: We glorify God by Loving one another, Reaching out to others, Walking in His way"
          className="w-full h-auto"
        />
      </section>

      {/* Welcome Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-church-gold font-bold tracking-[0.14em] text-sm uppercase">
            Farmers Branch, Texas
          </p>
          <h1 className="font-questrial text-3xl md:text-4xl text-church-blue mt-2 mb-4">
            You're invited
          </h1>
          <p className="max-w-xl mx-auto text-lg text-gray-600 leading-relaxed">
            Simply Christians, following the pattern of the first century church. Come as you
            are and worship with us.
          </p>

          <blockquote className="relative max-w-3xl mx-auto my-10 px-8 py-7 bg-church-blue text-white rounded-xl text-xl italic leading-relaxed">
            <span
              aria-hidden="true"
              className="absolute -top-1 left-4 text-7xl leading-none text-church-gold not-italic font-serif"
            >
              &ldquo;
            </span>
            Come, you children, listen to me; I will teach you the fear of the Lord. Depart from
            evil and do good; seek peace and pursue it.
            <cite className="block mt-3 text-base not-italic font-bold text-church-gold">
              Psalm 34:11&ndash;14
            </cite>
          </blockquote>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link
              to="/imnewhere"
              className="block p-5 border-2 border-gray-200 rounded-xl text-church-blue font-bold hover:border-church-gold hover:shadow-md transition"
            >
              Plan your visit
              <span className="block mt-1 text-sm font-normal text-gray-600">
                Times, what to expect
              </span>
            </Link>
            <Link
              to="/livestreaming"
              className="block p-5 border-2 border-gray-200 rounded-xl text-church-blue font-bold hover:border-church-gold hover:shadow-md transition"
            >
              Watch live
              <span className="block mt-1 text-sm font-normal text-gray-600">
                Sundays at 9:30 AM
              </span>
            </Link>
            <Link
              to="/smallgroups"
              className="block p-5 border-2 border-gray-200 rounded-xl text-church-blue font-bold hover:border-church-gold hover:shadow-md transition"
            >
              Small groups
              <span className="block mt-1 text-sm font-normal text-gray-600">
                Find one near you
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Come and Get Involved Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            COME AND GET INVOLVED!
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Welcome Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Link to="/imnewhere">
                <img 
                  src={getImagePath('thumb-imnew.jpg')} 
                  alt="Welcome" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-center text-gray-800">WELCOME!</h3>
                </div>
              </Link>
            </div>

            {/* James Group Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <a href="http://www.jamesgroupministries.com" target="_blank" rel="noopener noreferrer">
                <img 
                  src={getImagePath('thumb-jamesgroup.jpg')} 
                  alt="James Group" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-center text-gray-800">JAMES GROUP</h3>
                </div>
              </a>
            </div>

            {/* Studies in the Bible Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Link to="/sitb">
                <img 
                  src={getImagePath('thumb-studiesinthebible.jpg')} 
                  alt="Studies in the Bible" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-center text-gray-800">STUDIES IN THE BIBLE</h3>
                </div>
              </Link>
            </div>

            {/* Giving Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Link to="/giving">
                <img 
                  src={getImagePath('thumb-giving.jpg')} 
                  alt="Giving" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-center text-gray-800">GIVING</h3>
                </div>
              </Link>
            </div>

            {/* Ministries Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Link to="/ministries">
                <img 
                  src={getImagePath('thumb-ministries.jpg')} 
                  alt="Ministries" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-center text-gray-800">MINISTRIES</h3>
                </div>
              </Link>
            </div>

            {/* Missionaries Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Link to="/missionaries">
                <img 
                  src={getImagePath('thumb-missionaries.jpg')} 
                  alt="Missionaries" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-center text-gray-800">MISSIONARIES</h3>
                </div>
              </Link>
            </div>

            {/* Small Groups Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Link to="/smallgroups">
                <img 
                  src={getImagePath('thumb-smallgroups.jpg')} 
                  alt="Small Groups" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-center text-gray-800">SMALL GROUPS</h3>
                </div>
              </Link>
            </div>

            {/* Summer Learning Camp Card */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <Link to="/summerlearningcamp">
                <img 
                  src={getImagePath('thumb-summerlearningcamp.jpg')} 
                  alt="Summer Learning Camp" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-center text-gray-800">SUMMER LEARNING CAMP</h3>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Bible Lessons */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            VIDEO BIBLE LESSONS
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-center mb-4">SEARCHING FOR TRUTH</h3>
              <div className="aspect-video">
                <iframe 
                  src="https://player.vimeo.com/video/34565015" 
                  className="w-full h-full rounded"
                  frameBorder="0" 
                  allowFullScreen
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-center mb-4">WHY ARE THERE SO MANY CHURCHES?</h3>
              <div className="aspect-video">
                <iframe 
                  src="https://player.vimeo.com/video/48952092" 
                  className="w-full h-full rounded"
                  frameBorder="0" 
                  allowFullScreen
                />
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-center mb-4">WHAT MUST I DO TO BE SAVED?</h3>
              <div className="aspect-video">
                <iframe 
                  src="https://player.vimeo.com/video/57826363" 
                  className="w-full h-full rounded"
                  frameBorder="0" 
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            RESOURCE LINKS
          </h1>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            <a 
              href="http://www.eem.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
            >
              <img 
                src={getImagePath('eem.jpg')} 
                alt="Eastern European Missions" 
                className="w-full h-20 object-contain mb-2"
              />
              <p className="text-sm text-gray-600">Eastern European Missions</p>
            </a>
            
            <a 
              href="http://www.greatcities.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
            >
              <img 
                src={getImagePath('gcm.jpg')} 
                alt="Great Cities Missions" 
                className="w-full h-20 object-contain mb-2"
              />
              <p className="text-sm text-gray-600">Great Cities Missions</p>
            </a>
            
            <a 
              href="http://www.jamesgroupministries.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
            >
              <img 
                src={getImagePath('jamesgroup.jpg')} 
                alt="James Group Ministries" 
                className="w-full h-20 object-contain mb-2"
              />
              <p className="text-sm text-gray-600">James Group Ministries</p>
            </a>
            
            <a 
              href="http://www.mrnet.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
            >
              <img 
                src={getImagePath('mrn.jpg')} 
                alt="Missions Resource Network" 
                className="w-full h-20 object-contain mb-2"
              />
              <p className="text-sm text-gray-600">Missions Resource Network</p>
            </a>
            
            <Link 
              to="/sitb"
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
            >
              <img 
                src={getImagePath('sitb.jpg')} 
                alt="Studies In The Bible" 
                className="w-full h-20 object-contain mb-2"
              />
              <p className="text-sm text-gray-600">Studies In The Bible</p>
            </Link>
            
            <a 
              href="http://www.worldbibleschool.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow text-center"
            >
              <img 
                src={getImagePath('wbs.jpg')} 
                alt="World Bible School" 
                className="w-full h-20 object-contain mb-2"
              />
              <p className="text-sm text-gray-600">World Bible School</p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
