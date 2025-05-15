// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import { FiMoreVertical, FiClock } from 'react-icons/fi';

// const VideoCard = ({ video, compact = false }) => {
//   const formatViews = (count) => {
//     if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M views`;
//     if (count >= 1000) return `${(count / 1000).toFixed(1)}K views`;
//     return `${count} views`;
//   };

//   const formatDate = (dateString) => {
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    
//     if (diffDays < 1) return 'Today';
//     if (diffDays < 7) return `${diffDays}d ago`;
//     if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
//     if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
//     return `${Math.floor(diffDays / 365)}y ago`;
//   };

//   return (
//     <motion.div
//       whileHover={{ scale: 1.02 }}
//       whileTap={{ scale: 0.98 }}
//       className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all ${
//         compact ? 'flex gap-3' : ''
//       }`}
//     >
//       <Link to={`/video/${video.id}`} className="block">
//         {/* Thumbnail */}
//         <div className={`relative ${compact ? 'w-40' : 'pb-[56.25%]'}`}>
//           <img
//             src={video.thumbnail_url || '/placeholder.jpg'}
//             alt={video.title}
//             className={`absolute inset-0 w-full h-full object-cover ${
//               compact ? 'rounded-lg' : ''
//             }`}
//             loading="lazy"
//           />
//           <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-md flex items-center">
//             <FiClock className="mr-1" size={12} />
//             {video.duration || '10:30'}
//           </div>
//         </div>

//         {/* Video info */}
//         <div className={`p-3 ${compact ? 'flex-1' : ''}`}>
//           <div className={`flex ${compact ? 'items-start' : 'items-start space-x-3'}`}>
//             {!compact && (
//               <div className="flex-shrink-0">
//                 <img
//                   src={video.channel?.profile_image_url || '/placeholder.jpg'}
//                   alt={video.channel?.name}
//                   className="w-10 h-10 rounded-full object-cover"
//                 />
//               </div>
//             )}
//             <div className="flex-1 min-w-0">
//               <h3
//                 className={`font-medium ${
//                   compact ? 'text-sm line-clamp-2' : 'text-base line-clamp-2'
//                 } leading-tight`}
//               >
//                 {video.title}
//               </h3>
//               {!compact && (
//                 <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
//                   <p className="truncate">{video.channel?.name || 'Unknown'}</p>
//                   <div className="flex items-center space-x-2 mt-1">
//                     <span>{formatViews(video.view_count || 0)}</span>
//                     <span>•</span>
//                     <span>{formatDate(video.published_at)}</span>
//                   </div>
//                 </div>
//               )}
//             </div>
//             <button 
//               className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
//               onClick={(e) => {
//                 e.preventDefault();
//                 e.stopPropagation();
//               }}
//             >
//               <FiMoreVertical size={18} />
//             </button>
//           </div>
//           {compact && (
//             <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
//               <p className="truncate">{video.channel?.name || 'Unknown'}</p>
//               <div className="flex items-center space-x-2 mt-1">
//                 <span>{formatViews(video.view_count || 0)}</span>
//                 <span>•</span>
//                 <span>{formatDate(video.published_at)}</span>
//               </div>
//             </div>
//           )}
//         </div>
//       </Link>
//     </motion.div>
//   );
// };

// export default VideoCard;


// components/VideoCard.jsx
import { useContext } from 'react';
import { VideoContext } from '../context/VideoContext';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FiMoreVertical, FiClock, FiHeart, FiBookmark } from 'react-icons/fi';

const VideoCard = ({ video, compact = false }) => {
  const { savedVideos, likedVideos, saveVideo, unsaveVideo, likeVideo, unlikeVideo } = useContext(VideoContext);
  const isSaved = savedVideos.includes(video.id);
  const isLiked = likedVideos.includes(video.id);
  const formatViews = (count) => {
    if (count >= 1000000) return `${(count / 1000000).toFixed(1)}M views`;
    if (count >= 1000) return `${(count / 1000).toFixed(1)}K views`;
    return `${count} views`;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));

    if (diffDays < 1) return 'Today';
    if (diffDays < 7) return `${diffDays}d ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)}w ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)}mo ago`;
    return `${Math.floor(diffDays / 365)}y ago`;
  };

  const handleSave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    isSaved ? unsaveVideo(video.id) : saveVideo(video.id);
  };

  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    isLiked ? unlikeVideo(video.id) : likeVideo(video.id);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all ${
        compact ? 'flex gap-3' : ''
      }`}
    >
      <Link to={`/video/${video.id}`} className="block">
        {/* Thumbnail */}
        <div className={`relative ${compact ? 'w-40' : 'pb-[56.25%]'}`}>
          <img
            src={video.thumbnail_url || '/placeholder.jpg'}
            alt={video.title}
            className={`absolute inset-0 w-full h-full object-cover ${
              compact ? 'rounded-lg' : ''
            }`}
            loading="lazy"
          />
          <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-md flex items-center">
            <FiClock className="mr-1" size={12} />
            {video.duration || '10:30'}
          </div>
        </div>
      </Link>

      {/* Video info */}
      <div className={`p-3 ${compact ? 'flex-1' : ''}`}>
        <div className={`flex ${compact ? 'items-start' : 'items-start space-x-3'}`}>
          {!compact && (
            <div className="flex-shrink-0">
              <img
                src={video.channel?.profile_image_url || '/placeholder.jpg'}
                alt={video.channel?.name}
                className="w-10 h-10 rounded-full object-cover"
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3
              className={`font-medium ${
                compact ? 'text-sm line-clamp-2' : 'text-base line-clamp-2'
              } leading-tight`}
            >
              {video.title}
            </h3>
            {!compact && (
              <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
                <p className="truncate">{video.channel?.name || 'Unknown'}</p>
                <div className="flex items-center space-x-2 mt-1">
                  <span>{formatViews(video.view_count || 0)}</span>
                  <span>•</span>
                  <span>{formatDate(video.published_at)}</span>
                </div>
              </div>
            )}
          </div>
          {/* This FiMoreVertical button is moved below to be alongside the new like and save buttons */}
          {/* <button
            className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <FiMoreVertical size={18} />
          </button> */}
        </div>
        {compact && (
          <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">
            <p className="truncate">{video.channel?.name || 'Unknown'}</p>
            <div className="flex items-center space-x-2 mt-1">
              <span>{formatViews(video.view_count || 0)}</span>
              <span>•</span>
              <span>{formatDate(video.published_at)}</span>
            </div>
          </div>
        )}

        {/* Add like and save buttons */}
        <div className="flex justify-end space-x-2 mt-2">
          <button
            onClick={handleLike}
            className={`p-1 rounded-full ${isLiked ? 'text-red-500' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            <FiHeart size={18} />
          </button>
          <button
            onClick={handleSave}
            className={`p-1 rounded-full ${isSaved ? 'text-blue-500' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}
          >
            <FiBookmark size={18} />
          </button>
          <button
            className="p-1 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <FiMoreVertical size={18} />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default VideoCard;