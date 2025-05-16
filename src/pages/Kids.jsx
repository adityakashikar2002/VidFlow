// pages/Kids.jsx
import useVideos from '../hooks/useVideos';
import VideoCard from '../components/VideoCard';
import Loader from '../components/Loader';
import { FiUsers } from 'react-icons/fi';

const Kids = () => {
  const { videos, loading, error } = useVideos('https://apis.ccbp.in/videos/kids');

  return (
    <div className="p-4 fade-in">
      <div className="flex items-center mb-6">
        <div className="p-3 mr-4 bg-green-100 dark:bg-green-900 rounded-full">
          <FiUsers className="text-green-600 dark:text-green-300 text-xl" />
        </div>
        <h1 className="text-2xl font-bold">Kids Content</h1>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <Loader key={i} />
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-10">
          <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-lg inline-block">
            Error loading kids content: {error}
          </div>
        </div>
      ) : videos.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
          <div className="mx-auto w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
            <FiUsers className="text-gray-400 dark:text-gray-500 text-3xl" />
          </div>
          <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            No kids content found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">
            Check back later for new kids content
          </p>
        </div>
      )}
    </div>
  );
};

export default Kids;