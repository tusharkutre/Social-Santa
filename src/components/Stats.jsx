import { useQuery } from "@tanstack/react-query";
import youtube from "../assets/youtube.png";

const API_KEY = import.meta.env.VITE_YT_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YT_CHANNEL_ID;

// Simplified fetch function with better error handling
const fetchStats = async (signal) => {
  try {
    // Fetch channel data
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics,contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`,
      { signal }
    );
    
    if (!channelRes.ok) {
      throw new Error(`Channel API error: ${channelRes.status}`);
    }
    
    const channelData = await channelRes.json();
    const channel = channelData.items?.[0];
    
    if (!channel) {
      throw new Error("No channel found");
    }

    const stats = channel.statistics;
    const uploadsPlaylistId = channel.contentDetails.relatedPlaylists.uploads;

    // Fetch latest video
    const videoRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${API_KEY}`,
      { signal }
    );
    
    if (!videoRes.ok) {
      throw new Error(`Video API error: ${videoRes.status}`);
    }
    
    const videoData = await videoRes.json();
    const latestVideo = videoData.items?.[0]?.snippet;
    
    return { ...stats, latestVideo };
  } catch (error) {
    // Don't throw aborted fetch errors
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
      return null;
    }
    console.error("Error fetching YouTube stats:", error);
    throw error;
  }
};

export default function Stats() {
  const { data: stats, isLoading } = useQuery({
    queryKey: ["youtubeStats"],
    queryFn: ({ signal }) => fetchStats(signal),
    refetchInterval: 30000,
    staleTime: 60000,
  });

  // Format numbers with commas
  const formatNumber = (num) => parseInt(num || 0).toLocaleString();

  if (isLoading) {
    return <p className="text-center text-3xl font-semibold py-10">Loading stats...</p>;
  }

  return (
    <section className="py-16 px-16 mb-20 bg-slate-200/20 w-fit mx-auto max-w-7xl rounded-lg shadow-lg">
      <div className="flex relative">
        <div>
          <h1 className="text-3xl font-bold mb-4">YouTube Channel Stats</h1>
          <p className="text-gray-600">Get the latest stats from our YouTube channel.</p>
          <img className="absolute -top-14 -left-10" width={45} src={youtube} alt="YouTube Logo" />
        </div>
      </div>
      
      <div className="text-center text-xl space-y-4">        
        <p>Subscribers: {formatNumber(stats?.subscriberCount)}</p>
        <p>Total Views: {formatNumber(stats?.viewCount)}</p>
        
        {stats?.latestVideo && (
          <div className="mt-6">
            <h3 className="text-2xl font-semibold mb-2">Latest Video</h3>
            <img
              src={stats.latestVideo.thumbnails.medium.url}
              alt={stats.latestVideo.title}
              className="mx-auto rounded-lg shadow"
            />
            <p className="mt-2">{stats.latestVideo.title}</p>
          </div>
        )}
      </div>
    </section>
  );
}