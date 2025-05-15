// components/ChannelInfo.jsx
import { useState } from 'react';
import { FiThumbsUp, FiThumbsDown, FiShare2, FiBookmark } from 'react-icons/fi';

const ChannelInfo = ({ channel, isSubscribed, onSubscribe, isSaved, onSave }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isDisliked, setIsDisliked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
    if (isDisliked) setIsDisliked(false);
  };

  const handleDislike = () => {
    setIsDisliked(!isDisliked);
    if (isLiked) setIsLiked(false);
  };

  // Removed handleSave as isSaved is a prop controlled by the parent.

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
      <div className="flex items-center space-x-4">
        <img
          src={channel.profile_image_url}
          alt={channel.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-indigo-500"
        />
        <div>
          <h3 className="font-medium text-gray-800 dark:text-gray-200">{channel.name}</h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {channel.subscriber_count} subscribers
          </p>
        </div>
      </div>

      <div className="flex items-center flex-wrap gap-2">
        <button
          onClick={handleLike}
          className={`flex items-center px-3 py-2 rounded-full ${isLiked
            ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-200'
            : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
        >
          <FiThumbsUp className="mr-2" />
          Like
        </button>

        <button
          onClick={handleDislike}
          className={`flex items-center px-3 py-2 rounded-full ${isDisliked
            ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-200'
            : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
        >
          <FiThumbsDown className="mr-2" />
        </button>

        <button
          onClick={onSave} // Directly call the onSave prop
          className={`flex items-center px-3 py-2 rounded-full ${isSaved
            ? 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-200'
            : 'bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600'}`}
        >
          <FiBookmark className="mr-2" />
          {isSaved ? 'Saved' : 'Save'}
        </button>

        <button className="flex items-center px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600">
          <FiShare2 className="mr-2" />
          Share
        </button>

        <button
          onClick={onSubscribe}
          className={`px-4 py-2 rounded-full ${isSubscribed
            ? 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
            : 'bg-red-600 text-white hover:bg-red-700'}`}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    </div>
  );
};

export default ChannelInfo;