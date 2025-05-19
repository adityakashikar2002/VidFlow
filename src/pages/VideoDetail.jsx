// import { useParams } from 'react-router-dom';
// import { useState, useEffect, useContext, useCallback } from 'react';
// import { VideoContext } from '../context/VideoContext';
// import axios from 'axios';
// import VideoPlayer from '../components/VideoPlayer';
// import ChannelInfo from '../components/ChannelInfo';
// import CommentsSection from '../components/CommentsSection';
// import Loader from '../components/Loader';

// const token = process.env.REACT_APP_AUTH_TOKEN;

// const VideoDetail = () => {
//   const { id } = useParams();
//   const { savedVideos, saveVideo, unsaveVideo } = useContext(VideoContext);
//   const [video, setVideo] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const isSaved = savedVideos.includes(id);

//   const fetchVideo = useCallback(async () => {
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
//   }, [id]);

//   useEffect(() => {
//     fetchVideo();
//   }, [fetchVideo]);

//   const handleSaveVideo = () => {
//     if (!video) return;
//     isSaved ? unsaveVideo(video.id) : saveVideo(video.id);
//   };

//   const [isSubscribed, setIsSubscribed] = useState(false);
//   const handleSubscribe = () => {
//     setIsSubscribed(!isSubscribed);
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
//             isSaved={isSaved}
//             onSave={handleSaveVideo}
//             videoId={video.id} // Pass the video ID here
//           />

// pages/VideoDetail.jsx
import { useParams } from 'react-router-dom';
import { useState, useEffect, useContext, useCallback } from 'react';
import { VideoContext } from '../context/VideoContext';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';
import ChannelInfo from '../components/ChannelInfo';
import CommentsSection from '../components/CommentsSection';
import Loader from '../components/Loader';

const token = process.env.REACT_APP_AUTH_TOKEN;

const VideoDetail = () => {
  const { id } = useParams();
  const { savedVideos, saveVideo, unsaveVideo, likedVideos, likeVideo, unlikeVideo } = useContext(VideoContext);
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isSaved = savedVideos.includes(id);
  const isLiked = likedVideos.includes(id);

  const fetchVideo = useCallback(async () => {
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
  }, [id]);

  useEffect(() => {
    fetchVideo();
  }, [fetchVideo]);

  const handleSaveVideo = () => {
    if (!video) return;
    isSaved ? unsaveVideo(video.id) : saveVideo(video.id);
  };

  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed);
  };

  const handleTimestampClick = (timestamp) => {
    // Convert timestamp (e.g., "1:23" or "1:23:45") to seconds
    const parts = timestamp.split(':').map(part => parseInt(part));
    let seconds = 0;
    
    if (parts.length === 3) { // hh:mm:ss
      seconds = parts[0] * 3600 + parts[1] * 60 + parts[2];
    } else if (parts.length === 2) { // mm:ss
      seconds = parts[0] * 60 + parts[1];
    } else { // ss
      seconds = parts[0];
    }
    
    // Get the iframe element
    const iframe = document.querySelector('iframe');
    
    if (iframe) {
      // Extract the video ID from the current src
      const videoId = video.video_url.split('v=')[1];
      
      // Create a new URL with the start parameter
      const newSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&start=${seconds}`;
      
      // Update the iframe src to force a reload at the new timestamp
      iframe.src = newSrc;
      
      // Focus the iframe to ensure keyboard controls work
      iframe.focus();
    }
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
            isSaved={isSaved}
            onSave={handleSaveVideo}
            videoId={video.id}
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

          <CommentsSection 
            videoId={id} 
            onTimestampClick={handleTimestampClick}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;