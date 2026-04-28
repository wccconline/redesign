import React from 'react';
import { Play, Archive, Calendar, Clock } from 'lucide-react';

const LiveStreamingPage: React.FC = () => {
  return (
    <div className="w-full">

      {/* Hero Banner */}
      <div className="bg-church-blue text-white py-14">
        <div className="container mx-auto px-4 text-center">
          <div className="w-16 h-0.5 bg-church-gold mx-auto mb-6"></div>
          <h1 className="font-questrial text-4xl md:text-5xl font-bold tracking-wide mb-3">
            Live Streaming Sunday Worship
          </h1>
          <p className="text-blue-200 text-lg">Join us for worship from anywhere</p>
          <div className="w-16 h-0.5 bg-church-gold mx-auto mt-6"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 space-y-12">

        {/* Live Stream Card */}
        <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md overflow-hidden">
          {/* Card Header */}
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between flex-wrap gap-3">
            <h2 className="font-questrial text-xl font-bold text-church-blue tracking-wide">
              Sunday Worship Service
            </h2>
            <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              LIVE NOW
            </div>
          </div>

          <div className="p-6">
            {/* Embed */}
            <div className="relative w-full rounded-md overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe
                src="https://www.youtube.com/embed/live_stream?channel=UC-ndzr4_oUM97yv5K_-B4vQ"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allowFullScreen
                title="Webb Chapel Livestream"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
            </div>

            {/* Meta */}
            <div className="mt-5 flex flex-wrap gap-5 text-sm text-gray-500">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-church-gold" />
                Sundays at 9:30 AM
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-church-gold" />
                Weekly Service
              </div>
            </div>
          </div>
        </div>

        {/* Sermon Archives */}
        <div>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px flex-1 max-w-16 bg-church-gold"></div>
            <h2 className="font-questrial text-3xl font-bold text-church-blue tracking-wide text-center">
              Sermon Archives
            </h2>
            <div className="h-px flex-1 max-w-16 bg-church-gold"></div>
          </div>

          <div className="space-y-8">
            {/* 2025 */}
            <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md overflow-hidden">
              <div className="bg-church-blue px-6 py-4 flex items-center gap-3">
                <Archive className="w-5 h-5 text-church-gold flex-shrink-0" />
                <div>
                  <h3 className="font-questrial text-white font-bold tracking-wide">Sermon Archives 2025</h3>
                  <p className="text-blue-300 text-sm">Recent sermons and teachings from 2025</p>
                </div>
              </div>
              <div className="p-6">
                <div className="relative w-full rounded-md overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/videoseries?list=PLom-0r33d-gAOWuczIHZAvbC_9eImSocp"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                    title="YouTube channel videos 2025"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              </div>
            </div>

            {/* 2024 */}
            <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md overflow-hidden">
              <div className="bg-church-blue px-6 py-4 flex items-center gap-3">
                <Archive className="w-5 h-5 text-church-gold flex-shrink-0" />
                <div>
                  <h3 className="font-questrial text-white font-bold tracking-wide">Sermon Archives 2024</h3>
                  <p className="text-blue-300 text-sm">Sermons and teachings from 2024</p>
                </div>
              </div>
              <div className="p-6">
                <div className="relative w-full rounded-md overflow-hidden" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    src="https://www.youtube.com/embed/videoseries?list=PLom-0r33d-gCan9qQJRoJMLTce2Nq0u4L"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allowFullScreen
                    title="YouTube channel videos 2024"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* How to Watch */}
          <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-6">
            <h3 className="font-questrial text-xl font-bold text-church-blue tracking-wide mb-5">
              How to Watch
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <Play className="w-4 h-4 mt-0.5 flex-shrink-0 text-church-gold" />
                <span>Click play on the live stream above</span>
              </li>
              <li className="flex items-start gap-3">
                <Play className="w-4 h-4 mt-0.5 flex-shrink-0 text-church-gold" />
                <span>Stream works on all devices</span>
              </li>
              <li className="flex items-start gap-3">
                <Play className="w-4 h-4 mt-0.5 flex-shrink-0 text-church-gold" />
                <span>No registration required</span>
              </li>
            </ul>
          </div>

          {/* Service Times */}
          <div className="bg-white border-t-4 border-church-gold rounded-b-md shadow-md p-6">
            <h3 className="font-questrial text-xl font-bold text-church-blue tracking-wide mb-5">
              Service Times
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-medium text-gray-700">Sunday Worship</span>
                <span className="text-church-blue font-bold">9:30 AM</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="font-medium text-gray-700">Sunday Bible Study</span>
                <span className="text-church-blue font-bold">11:00 AM</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LiveStreamingPage;
