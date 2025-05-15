// import { useEffect, useRef } from 'react';

// const VideoPlayer = ({ videoUrl, title }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.load();
//     }
//   }, [videoUrl]);

//   return (
//     <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
//       <video
//         ref={videoRef}
//         controls
//         className="w-full h-full object-contain"
//         poster={`https://img.youtube.com/vi/${videoUrl.split('v=')[1]}/maxresdefault.jpg`}
//         title={title}
//       >
//         <source src={videoUrl} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default VideoPlayer;

// components/VideoPlayer.jsx
import { useEffect, useRef } from 'react';

const VideoPlayer = ({ videoUrl, title }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      // Try to play when metadata is loaded
      videoRef.current.onloadedmetadata = () => {
        videoRef.current.play().catch(error => {
          console.log('Auto-play prevented:', error);
        });
      };
    }
  }, [videoUrl]);

  return (
    <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-lg">
      <video
        ref={videoRef}
        controls
        autoPlay
        playsInline
        className="w-full h-full object-contain"
        title={title}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;