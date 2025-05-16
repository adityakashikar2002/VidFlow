import { useState, useEffect } from 'react';
import axios from 'axios';

const token = process.env.REACT_APP_AUTH_TOKEN;

const useVideos = (url, params = {}) => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(url, {
          params,
          headers: { Authorization: `Bearer ${token}` },
        });
        
        // Process videos to ensure consistent structure
        const processedVideos = (response.data.videos || []).map(video => ({
          ...video,
          id: video.id || video.video_id || Math.random().toString(36).substring(2, 9), // Handle different ID fields
          view_count: video.view_count || 0,
          published_at: video.published_at || 'Recently',
          channel: video.channel || {
            name: 'Unknown Channel',
            profile_image_url: '/placeholder.jpg',
            subscriber_count: '0'
          },
          thumbnail_url: video.thumbnail_url || video.thumbnail || '/placeholder.jpg',
          video_url: video.video_url || video.video_link // Handle different video URL fields
        }));
        
        setVideos(processedVideos);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [url, JSON.stringify(params)]);

  return { videos, loading, error };
};

export default useVideos;