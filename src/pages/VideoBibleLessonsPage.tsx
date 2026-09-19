import React from 'react';
import { Video } from 'lucide-react';

const lessons = [
  {
    title: 'Searching for Truth',
    videoId: '34565015',
  },
  {
    title: 'Why Are There So Many Churches?',
    videoId: '48952092',
  },
  {
    title: 'What Must I Do To Be Saved?',
    videoId: '57826363',
  },
];

const VideoBibleLessonsPage: React.FC = () => {
  return (
    <div className="w-full">
      <div className="bg-gradient-to-r from-church-blue to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Video Bible Lessons</h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Watch short lessons on the Bible at your own pace
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-10">
        {lessons.map(({ title, videoId }) => (
          <div key={videoId} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b">
              <h2 className="text-2xl font-bold text-gray-800 flex items-center">
                <Video className="w-6 h-6 mr-3" />
                {title}
              </h2>
            </div>
            <div className="p-6">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src={`https://player.vimeo.com/video/${videoId}`}
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                  title={title}
                  allow="autoplay; fullscreen; picture-in-picture"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoBibleLessonsPage;
