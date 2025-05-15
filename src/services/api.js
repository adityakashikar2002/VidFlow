import axios from 'axios';

const API_BASE_URL = 'https://apis.ccbp.in';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InJhaHVsIiwicm9sZSI6IlBSSU1FX1VTRVIiLCJpYXQiOjE2MjMwNjU1MzJ9.D13s5wN3Oh59aa_qtXMo3Ec4wojOx0EZh8Xr5C5sRkU';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const fetchVideos = async (endpoint, params = {}) => {
  try {
    const response = await api.get(endpoint, { params });
    return response.data.videos;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const fetchVideoDetails = async (videoId) => {
  try {
    const response = await api.get(`/videos/${videoId}`);
    return response.data.video_details;
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};

export const fetchRelatedVideos = async (videoId) => {
  try {
    const response = await api.get('/videos');
    return response.data.videos
      .filter(video => video.id !== videoId)
      .slice(0, 4);
  } catch (error) {
    console.error('API Error:', error);
    throw error;
  }
};