// import { useParams } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { motion } from 'framer-motion';
// import VideoPlayer from '../components/VideoPlayer';
// import ChannelInfo from '../components/ChannelInfo';
// import VideoCard from '../components/VideoCard';
// import CommentsSection from '../components/CommentsSection';
// import Loader from '../components/Loader';

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU';

// const VideoDetail = () => {
//   const { id } = useParams();
//   const [video, setVideo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [relatedVideos, setRelatedVideos] = useState([]);
//   const [relatedLoading, setRelatedLoading] = useState(true);
//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const [isSaved, setIsSaved] = useState(false);

//   // useEffect(() => {
//   //   const savedVideos = JSON.parse(localStorage.getItem('vidfow-saved') || []);
//   //   setIsSaved(savedVideos.includes(id));
//   // }, [id]);

//   useEffect(() => {
//     const savedVideos = JSON.parse(localStorage.getItem('vidfow-saved') || '[]');
//     setIsSaved(savedVideos.includes(id));
//   }, [id]);


//   const fetchVideo = async () => {
//     try {
//       const response = await axios.get(`https://apis.ccbp.in/videos/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setVideo(response.data.video_details);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const fetchRelatedVideos = async () => {
//     try {
//       const response = await axios.get('https://apis.ccbp.in/videos', {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       setRelatedVideos(response.data.videos.filter(v => v.id !== id).slice(0, 4));
//     } catch (err) {
//       console.error('Error fetching related videos:', err);
//     } finally {
//       setRelatedLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchVideo();
//     fetchRelatedVideos();
//   }, [id]);

//   const handleSubscribe = () => {
//     setIsSubscribed(!isSubscribed);
//   };

//   const handleSaveVideo = () => {
//     const savedVideos = JSON.parse(localStorage.getItem('vidfow-saved') || '[]');
//     const updatedVideos = isSaved
//       ? savedVideos.filter(videoId => videoId !== id)
//       : [...savedVideos, id];
    
//     localStorage.setItem('vidfow-saved', JSON.stringify(updatedVideos));
//     setIsSaved(!isSaved);
//   };

//   if (loading) return <Loader fullPage />;
//   if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
//   if (!video) return <div className="p-4">Video not found</div>;

//   return (
//     <div className="fade-in">
//       <div className="mb-8">
//         <VideoPlayer videoUrl={video.video_url} title={video.title} />
//       </div>

//       <div className="flex flex-col lg:flex-row gap-8">
//         <div className="flex-1">
//           <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
//             {video.title}
//           </h1>
          
//           <ChannelInfo 
//             channel={video.channel} 
//             isSubscribed={isSubscribed}
//             onSubscribe={handleSubscribe}
//           />

//           <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl mb-8">
//             <div className="flex items-center space-x-4 mb-3">
//               <span className="text-gray-700 dark:text-gray-300">
//                 {video.view_count} views
//               </span>
//               <span className="text-gray-500">•</span>
//               <span className="text-gray-700 dark:text-gray-300">
//                 {new Date(video.published_at).toLocaleDateString()}
//               </span>
//             </div>
//             <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
//               {video.description}
//             </p>
//           </div>

//           <CommentsSection videoId={id} />
//         </div>

//         <div className="w-full lg:w-80 flex-shrink-0">
//           <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
//             Related Videos
//           </h2>
          
//           {relatedLoading ? (
//             <div className="space-y-4">
//               {[...Array(4)].map((_, i) => (
//                 <Loader key={i} compact />
//               ))}
//             </div>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               className="space-y-4"
//             >
//               {relatedVideos.map((video) => (
//                 <motion.div 
//                   key={video.id}
//                   whileHover={{ x: 5 }}
//                   transition={{ type: 'spring', stiffness: 300 }}
//                 >
//                   <VideoCard video={video} compact />
//                 </motion.div>
//               ))}
//             </motion.div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoDetail;


// pages/VideoDetail.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { VideoContext } from '../context/VideoContext';
import axios from 'axios';
import { motion } from 'framer-motion';
import VideoPlayer from '../components/VideoPlayer';
import ChannelInfo from '../components/ChannelInfo';
import VideoCard from '../components/VideoCard';
import CommentsSection from '../components/CommentsSection';
import Loader from '../components/Loader';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU';

const VideoDetail = () => {
  const { id } = useParams();
  const { savedVideos, saveVideo, unsaveVideo } = useContext(VideoContext);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [relatedLoading, setRelatedLoading] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const isSaved = savedVideos.includes(id); // Correctly deriving isSaved from context

  const handleSaveVideo = () => {
    isSaved ? unsaveVideo(id) : saveVideo(id);
  };

  // This useEffect is no longer needed as `isSaved` is directly derived
  // from the `savedVideos` context value, which updates automatically.
  // useEffect(() => {
  //   const savedVideos = JSON.parse(localStorage.getItem('vidfow-saved') || '[]');
  //   setIsSaved(savedVideos.includes(id)); // This line caused the error
  // }, [id]);


  const fetchVideo = async () => {
    try {
      const response = await axios.get(`https://apis.ccbp.in/videos/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setVideo(response.data.video_details);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedVideos = async () => {
    try {
      const response = await axios.get('https://apis.ccbp.in/videos', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setRelatedVideos(response.data.videos.filter(v => v.id !== id).slice(0, 4));
    } catch (err) {
      console.error('Error fetching related videos:', err);
    } finally {
      setRelatedLoading(false);
    }
  };

  useEffect(() => {
    fetchVideo();
    fetchRelatedVideos();
  }, [id]);

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };


  if (loading) return <Loader fullPage />;
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  if (!video) return <div className="p-4">Video not found</div>;

  return (
    <div className="fade-in">
      <div className="mb-8">
        <VideoPlayer videoUrl={video.video_url} title={video.title} />
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h1 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            {video.title}
          </h1>

          <ChannelInfo
            channel={video.channel}
            isSubscribed={isSubscribed}
            onSubscribe={handleSubscribe}
            isSaved={isSaved} // Pass isSaved from context
            onSave={handleSaveVideo} // Pass the handler from context
          />

          <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-xl mb-8">
            <div className="flex items-center space-x-4 mb-3">
              <span className="text-gray-700 dark:text-gray-300">
                {video.view_count} views
              </span>
              <span className="text-gray-500">•</span>
              <span className="text-gray-700 dark:text-gray-300">
                {new Date(video.published_at).toLocaleDateString()}
              </span>
            </div>
            <p className="text-gray-800 dark:text-gray-200 whitespace-pre-line">
              {video.description}
            </p>
          </div>

          <CommentsSection videoId={id} />
        </div>

        {/* <div className="w-full lg:w-80 flex-shrink-0">
          <h2 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Related Videos
          </h2>

          {relatedLoading ? (
            <div className="space-y-4">
              {[...Array(4)].map((_, i) => (
                <Loader key={i} compact />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-4"
            >
              {relatedVideos.map((video) => (
                <motion.div
                  key={video.id}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <VideoCard video={video} compact />
                </motion.div>
              ))}
            </motion.div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default VideoDetail;