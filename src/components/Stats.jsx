import { useEffect, useState } from "react";
import youtube from "../assets/youtube.png";

export default function Stats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const API_KEY = process.env.REACT_APP_YT_API_KEY;
  const CHANNEL_ID = process.env.REACT_APP_YT_CHANNEL_ID;

  // Fetch data from YouTube API
  // If the fetch fails, use cached data from localStorage
  // If localStorage is empty, set loading to false
  // and display an error message
  const fetchData = async () => {
    try {
      setLoading(true);
      // 1. Get channel statistics and uploads playlist ID
      const channelRes = await fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics,contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
      );
      const channelData = await channelRes.json();
      const stats = channelData.items[0].statistics;
      const uploadsPlaylistId =
        channelData.items[0].contentDetails.relatedPlaylists.uploads;

      // 2. Get latest video from uploads playlist
      const videoRes = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${API_KEY}`
      );
      const videoData = await videoRes.json();
      const latestVideo = videoData.items[0].snippet;

      // 3. Save data
      const fullStats = { ...stats, latestVideo };
      setStats(fullStats);
      localStorage.setItem("yt_stats", JSON.stringify(fullStats));
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      const cached = localStorage.getItem("yt_stats");
      if (cached) setStats(JSON.parse(cached));
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  if (loading)
    return (
      <p className="text-center text-3xl font-semibold py-10">
        Loading stats...
      </p>
    );

  // If stats are not available, display an error message
  return (
    <section className="py-16 px-16 mb-20 bg-slate-200/20 w-fit mx-auto max-w-7xl rounded-lg shadow-lg">
      <div className="flex relative">
        <div>
          <h1 className="text-3xl font-bold mb-4">YouTube Channel Stats</h1>
          <p className="text-gray-600">
            Get the latest stats from our YouTube channel.
          </p>
          <img className="absolute -top-14 -left-10" width={45} src={youtube} alt="" />
        </div>
      </div>
      <div className="text-center text-xl space-y-4">
        <p>Subscribers: {parseInt(stats?.subscriberCount).toLocaleString()}</p>
        <p>Total Views: {parseInt(stats?.viewCount).toLocaleString()}</p>
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
