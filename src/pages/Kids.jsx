// pages/Kids.jsx
import VideoCard from '../components/VideoCard';
import { FiUsers } from 'react-icons/fi';

const Kids = () => {
  // Dummy kids videos data
  const kidsVideos = [
    {
        id: 'kid1',
        title: 'ABC Learning Fun',
        thumbnail_url: 'https://img.youtube.com/vi/fSIhA3fDRa4/maxresdefault.jpg', // ABC Song | Cocomelon
        channel: { name: 'Kids Learning' },
        view_count: '1.2M',
        published_at: '2023-01-15',
    },
    {
        id: 'kid2',
        title: 'Counting with Animals',
        thumbnail_url: 'https://img.youtube.com/vi/QkHQ0CYwjaI/maxresdefault.jpg', // Animal Counting Song | Super Simple Songs
        channel: { name: 'Fun Education' },
        view_count: '890K',
        published_at: '2023-02-20',
    },
    {
        id: 'kid3',
        title: 'Colorful Shapes',
        thumbnail_url: 'https://img.youtube.com/vi/OP5C4fJgfR0/maxresdefault.jpg', // Learn Shapes | BabyBus
        channel: { name: 'Toddler TV' },
        view_count: '1.5M',
        published_at: '2023-03-10',
    },
    {
        id: 'kid4',
        title: 'Nursery Rhymes Collection',
        thumbnail_url: 'https://img.youtube.com/vi/eT9CSL6Mp8c/maxresdefault.jpg', // Nursery Rhymes | LooLoo Kids
        channel: { name: 'Sing Along Kids' },
        view_count: '3.7M',
        published_at: '2023-01-05',
    },
    {
        id: 'kid5',
        title: 'Story Time: The Little Duck',
        thumbnail_url: 'https://img.youtube.com/vi/XqZsoesa55w/maxresdefault.jpg', // 5 Little Ducks | Cocomelon
        channel: { name: 'Bedtime Stories' },
        view_count: '2.1M',
        published_at: '2023-04-18',
    },
    {
        id: 'kid6',
        title: 'Learn to Draw Animals',
        thumbnail_url: 'https://img.youtube.com/vi/X5VOQUG6SKg/maxresdefault.jpg', // How to Draw Animals | Art for Kids Hub
        channel: { name: 'Creative Kids' },
        view_count: '1.8M',
        published_at: '2023-05-22',
    },
    {
        id: 'kid7',
        title: 'Fun Science Experiments',
        thumbnail_url: 'https://img.youtube.com/vi/Ni75vIE4vdk/maxresdefault.jpg', // Simple Science for Kids
        channel: { name: 'Young Scientists' },
        view_count: '1.3M',
        published_at: '2023-06-15',
    },
    {
        id: 'kid8',
        title: 'Dance Party for Kids',
        thumbnail_url: 'https://img.youtube.com/vi/KhfkYzUwYFk/maxresdefault.jpg', // Freeze Dance | The Kiboomu
        channel: { name: 'Move and Groove' },
        view_count: '2.5M',
        published_at: '2023-07-30',
    },
    {
        id: 'kid9',
        title: 'Puzzle Time with Friends',
        thumbnail_url: 'https://img.youtube.com/vi/FZ8XZkQ7ap8/maxresdefault.jpg', // Puzzle Games for Kids | BabyBus
        channel: { name: 'Brainy Kids' },
        view_count: '980K',
        published_at: '2023-08-12',
    },
    {
        id: 'kid10',
        title: 'Healthy Habits for Kids',
        thumbnail_url: 'https://img.youtube.com/vi/MK0zqGqfxmY/maxresdefault.jpg', // Healthy Habits | Cocomelon
        channel: { name: 'Happy Children' },
        view_count: '1.6M',
        published_at: '2023-09-05',
    },
    ];


  return (
    <div className="p-4 fade-in">
      <div className="flex items-center mb-6">
        <div className="p-3 mr-4 bg-green-100 dark:bg-green-900 rounded-full">
          <FiUsers className="text-green-600 dark:text-green-300 text-xl" />
        </div>
        <h1 className="text-2xl font-bold">Kids Content</h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {kidsVideos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
      </div>
    </div>
  );
};

export default Kids;