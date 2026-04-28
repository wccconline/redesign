import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { getImagePath } from '../utils/assets';

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex items-center justify-center gap-4 mb-12">
    <div className="h-px flex-1 max-w-16 bg-church-gold"></div>
    <h2 className="text-3xl md:text-4xl font-bold text-church-blue font-questrial tracking-wide text-center">
      {children}
    </h2>
    <div className="h-px flex-1 max-w-16 bg-church-gold"></div>
  </div>
);

const involvementCards = [
  { to: '/imnewhere',   img: 'thumb-imnew.jpg',             label: 'WELCOME!' },
  { href: 'http://www.jamesgroupministries.com', img: 'thumb-jamesgroup.jpg', label: 'JAMES GROUP' },
  { to: '/sitb',        img: 'thumb-studiesinthebible.jpg',  label: 'STUDIES IN THE BIBLE' },
  { to: '/giving',      img: 'thumb-giving.jpg',             label: 'GIVING' },
  { to: '/ministries',  img: 'thumb-ministries.jpg',         label: 'MINISTRIES' },
  { to: '/missionaries',img: 'thumb-missionaries.jpg',       label: 'MISSIONARIES' },
  { to: '/smallgroups', img: 'thumb-smallgroups.jpg',        label: 'SMALL GROUPS' },
  { to: '/summerlearningcamp', img: 'thumb-summerlearningcamp.jpg', label: 'SUMMER LEARNING CAMP' },
];

const videoLessons = [
  { src: 'https://player.vimeo.com/video/34565015',  title: 'SEARCHING FOR TRUTH' },
  { src: 'https://player.vimeo.com/video/48952092',  title: 'WHY ARE THERE SO MANY CHURCHES?' },
  { src: 'https://player.vimeo.com/video/57826363',  title: 'WHAT MUST I DO TO BE SAVED?' },
];

const resourceLinks = [
  { href: 'http://www.eem.org',           img: 'eem.jpg',        label: 'Eastern European Missions' },
  { href: 'http://www.greatcities.org',   img: 'gcm.jpg',        label: 'Great Cities Missions' },
  { href: 'http://www.jamesgroupministries.com', img: 'jamesgroup.jpg', label: 'James Group Ministries' },
  { href: 'http://www.mrnet.org',         img: 'mrn.jpg',        label: 'Missions Resource Network' },
  { to: '/sitb',                          img: 'sitb.jpg',       label: 'Studies In The Bible' },
  { href: 'http://www.worldbibleschool.org', img: 'wbs.jpg',     label: 'World Bible School' },
];

const HomePage: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero Slider */}
      <section className="relative border-b-4 border-church-gold">
        <HeroSlider />
      </section>

      {/* Welcome Section */}
      <section className="py-16 bg-church-cream">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <SectionHeading>Welcome to Webb Chapel Church of Christ!</SectionHeading>
            <div className="text-gray-700 text-lg leading-relaxed space-y-5">
              <p>
                Thank you for visiting our website! We would be delighted to have you, your friends,
                and your family visit with us for worship and Bible study. We strive to live and
                worship God as He instructed in His inspired Word, the Bible. Everything we do is
                founded on this principle.
              </p>
              <p>
                Churches of Christ are autonomous congregations across the United States and
                throughout the world. We are not denominational or even non-denominational; we are
                simply "Christians" following the pattern of the first century Christians. Our work
                as Christians is to share the gospel with those who have an ear for the truth (the
                "Good News" of Jesus Christ). We invite all sincere seekers of God to join us as we
                strive to walk by faith and glorify God.
              </p>
              <blockquote className="border-l-4 border-church-gold bg-white pl-6 pr-4 py-4 italic text-base text-gray-600 rounded-r-md shadow-sm text-left mt-8">
                "Come, you children, listen to me; I will teach you the fear of the Lord. Who is
                the man who desires life, And loves many days, that he may see good? Keep your
                tongue from evil, And your lips from speaking deceit. Depart from evil and do good;
                Seek peace and pursue it."
                <span className="block mt-2 not-italic font-semibold text-church-blue text-sm">— Psalm 34:11–14</span>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Come and Get Involved */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeading>Come and Get Involved!</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {involvementCards.map((card) => {
              const inner = (
                <>
                  <img
                    src={getImagePath(card.img)}
                    alt={card.label}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <p className="text-sm font-bold text-center text-church-blue tracking-wide">{card.label}</p>
                  </div>
                </>
              );
              const cardClass = "block border border-gray-100 border-t-4 border-t-church-gold rounded-b-md shadow-sm hover:shadow-md transition-shadow overflow-hidden";

              return card.to ? (
                <Link key={card.label} to={card.to} className={cardClass}>{inner}</Link>
              ) : (
                <a key={card.label} href={card.href} target="_blank" rel="noopener noreferrer" className={cardClass}>{inner}</a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Bible Lessons */}
      <section className="py-16 bg-church-blue">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-4 mb-12">
            <div className="h-px flex-1 max-w-16 bg-church-gold opacity-60"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white font-questrial tracking-wide text-center">
              Video Bible Lessons
            </h2>
            <div className="h-px flex-1 max-w-16 bg-church-gold opacity-60"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videoLessons.map((video) => (
              <div key={video.title} className="bg-white/10 rounded-md overflow-hidden border border-church-gold/30">
                <div className="p-4 border-b border-church-gold/30">
                  <h3 className="text-church-gold font-questrial font-bold text-sm tracking-wide text-center">{video.title}</h3>
                </div>
                <div className="aspect-video p-3">
                  <iframe
                    src={video.src}
                    className="w-full h-full rounded"
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resource Links */}
      <section className="py-16 bg-church-cream">
        <div className="container mx-auto px-4">
          <SectionHeading>Resource Links</SectionHeading>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {resourceLinks.map((link) => {
              const inner = (
                <>
                  <img
                    src={getImagePath(link.img)}
                    alt={link.label}
                    className="w-full h-16 object-contain mb-3"
                  />
                  <p className="text-xs text-gray-600 text-center leading-snug">{link.label}</p>
                </>
              );
              const cardClass = "flex flex-col items-center bg-white rounded border border-gray-100 border-t-2 border-t-church-gold p-4 hover:shadow-md transition-shadow";

              return link.to ? (
                <Link key={link.label} to={link.to} className={cardClass}>{inner}</Link>
              ) : (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={cardClass}>{inner}</a>
              );
            })}
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
