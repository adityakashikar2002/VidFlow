// // pages/Music.jsx
// import useVideos from '../hooks/useVideos';
// import VideoCard from '../components/VideoCard';
// import Loader from '../components/Loader';
// import { FiMusic } from 'react-icons/fi';

// const Music = () => {
//   const { videos, loading, error } = useVideos('https://apis.ccbp.in/videos/music');

//   return (
//     <div className="p-4 fade-in">
//       <div className="flex items-center mb-6">
//         <div className="p-3 mr-4 bg-pink-100 dark:bg-pink-900 rounded-full">
//           <FiMusic className="text-pink-600 dark:text-pink-300 text-xl" />
//         </div>
//         <h1 className="text-2xl font-bold">Music Videos</h1>
//       </div>

//       {loading ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {[...Array(8)].map((_, i) => (
//             <Loader key={i} />
//           ))}
//         </div>
//       ) : error ? (
//         <div className="text-center py-10">
//           <div className="bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 p-4 rounded-lg inline-block">
//             Error loading music videos: {error}
//           </div>
//         </div>
//       ) : videos.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//           {videos.map((video) => (
//             <VideoCard key={video.id} video={video} />
//           ))}
//         </div>
//       ) : (
//         <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
//           <div className="mx-auto w-24 h-24 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mb-4">
//             <FiMusic className="text-gray-400 dark:text-gray-500 text-3xl" />
//           </div>
//           <h2 className="text-xl font-medium text-gray-800 dark:text-gray-200">
//             No music videos found
//           </h2>
//           <p className="text-gray-600 dark:text-gray-400 mt-2">
//             Check back later for new music content
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Music;

// pages/Music.jsx
import VideoCard from '../components/VideoCard';
import { FiMusic } from 'react-icons/fi';

const Music = () => {
  // Dummy music videos data
  const musicVideos = [
    {
        id: 'music1',
        title: 'Top Hits 2023 Playlist',
        thumbnail_url: 'https://img.youtube.com/vi/FKJ0VvB0pV4/maxresdefault.jpg', // Top Hits 2023 | English
        channel: { name: 'Global Music' },
        view_count: '15.2M',
        published_at: '2023-01-10',
    },
    {
        id: 'music2',
        title: 'Classical Relaxation',
        thumbnail_url: 'https://img.youtube.com/vi/vCYk9CRxZxY/maxresdefault.jpg', // Relaxing Indian Classical
        channel: { name: 'Peaceful Tunes' },
        view_count: '8.9M',
        published_at: '2023-02-15',
    },
    {
        id: 'music3',
        title: 'Pop Dance Mix',
        thumbnail_url: 'https://img.youtube.com/vi/Uq6zZcI2V0o/maxresdefault.jpg', // English Pop Dance Mix
        channel: { name: 'Dance Party' },
        view_count: '22.5M',
        published_at: '2023-03-20',
    },
    {
        id: 'music4',
        title: 'Acoustic Covers',
        thumbnail_url: 'https://img.youtube.com/vi/jK2aIUmmdP4/maxresdefault.jpg', // English Acoustic Covers
        channel: { name: 'Guitar Sessions' },
        view_count: '12.7M',
        published_at: '2023-01-25',
    },
    {
        id: 'music5',
        title: 'Jazz Lounge',
        thumbnail_url: 'https://img.youtube.com/vi/NtLw9Rt3-RE/maxresdefault.jpg', // Jazz Lounge | Chillout
        channel: { name: 'Smooth Sounds' },
        view_count: '7.8M',
        published_at: '2023-04-18',
    },
    {
        id: 'music6',
        title: 'Rock Anthems',
        thumbnail_url: 'https://img.youtube.com/vi/LBr7kECsjcQ/maxresdefault.jpg', // English Rock Playlist
        channel: { name: 'Guitar Legends' },
        view_count: '18.3M',
        published_at: '2023-05-22',
    },
    {
        id: 'music7',
        title: 'Hip Hop Beats',
        thumbnail_url: 'https://img.youtube.com/vi/hU14wD0KQwI/maxresdefault.jpg', // Indian Hip Hop - Emiway Bantai
        channel: { name: 'Urban Flow' },
        view_count: '25.1M',
        published_at: '2023-06-15',
    },
    {
        id: 'music8',
        title: 'Electronic Vibes',
        thumbnail_url: 'https://img.youtube.com/vi/r3RzVn4AK2Q/maxresdefault.jpg', // EDM Mix 2023 | English
        channel: { name: 'EDM World' },
        view_count: '14.6M',
        published_at: '2023-07-30',
    },
    {
        id: 'music9',
        title: 'Country Roads',
        thumbnail_url: 'https://img.youtube.com/vi/1vrEljMfXYo/maxresdefault.jpg', // Country Roads - John Denver
        channel: { name: 'Southern Sounds' },
        view_count: '9.8M',
        published_at: '2023-08-12',
    },
    {
        id: 'music10',
        title: 'Indie Folk Collection',
        thumbnail_url: 'https://img.youtube.com/vi/eqg5NxyU5fQ/maxresdefault.jpg', // Indie Folk India | When Chai Met Toast
        channel: { name: 'Whispering Pines' },
        view_count: '11.2M',
        published_at: '2023-09-05',
    },
    ];


  return (
    <div className="p-4 fade-in">
      <div className="flex items-center mb-6">
        <div className="p-3 mr-4 bg-pink-100 dark:bg-pink-900 rounded-full">
          <FiMusic className="text-pink-600 dark:text-pink-300 text-xl" />
        </div>
        <h1 className="text-2xl font-bold">Music Videos</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {musicVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Music;