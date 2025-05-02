import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import youtube from "../assets/youtube.png";
const API_KEY = import.meta.env.VITE_YT_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YT_CHANNEL_ID;

// Function to fetch YouTube stats with proper request cancellation
const fetchStats = async (signal) => {
  
  try {
    console.log("Making API request to YouTube...");
    // Fetch channel data with AbortSignal
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics,contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`,
      { signal } // Add AbortSignal here
    );
    
    if (!channelRes.ok) {
      const errorData = await channelRes.json();
      console.error("Channel API error:", errorData);
      throw new Error(`Channel API error: ${errorData?.error?.message || channelRes.statusText}`);
    }
    
    const channelData = await channelRes.json();

    if (!channelData.items || channelData.items.length === 0) {
      throw new Error("Invalid API response: No channel items found");
    }

    const stats = channelData.items[0].statistics;
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // Fetch latest video with AbortSignal
    const videoRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${API_KEY}`,
      { signal } // Add AbortSignal here
    );
    
    if (!videoRes.ok) {
      const errorData = await videoRes.json();
      console.error("Video API error:", errorData);
      throw new Error(`Video API error: ${errorData?.error?.message || videoRes.statusText}`);
    }
    
    const videoData = await videoRes.json();

    if (!videoData.items || videoData.items.length === 0) {
      throw new Error("No latest video found");
    }

    const latestVideo = videoData.items[0].snippet;
    
    return { ...stats, latestVideo };
  } catch (error) {
    // Don't throw aborted fetch errors
    if (error.name === 'AbortError') {
      console.log('Fetch aborted');
      return null;
    }
    console.error("Error in fetchStats:", error);
    throw error;
  }
};

export default function Stats() {
  const { data: stats, isLoading, isError, error } = useQuery({
    queryKey: ["youtubeStats"],
    queryFn: ({ signal }) => fetchStats(signal), // Pass AbortSignal to fetchStats
    refetchInterval: 30000,
    staleTime: 60000,
    gcTime: 0, // Immediately garbage collect when component unmounts
  });

  // Debug useEffect with conditional to reduce unnecessary logs
  useEffect(() => {
    if (stats) {
      console.log("Stats data updated:", stats);
    }
  }, [stats]);

  if (isLoading)
    return <p className="text-center text-3xl font-semibold py-10">Loading stats...</p>;

  // Check if stats exists and has the expected properties
  // const hasSubscriberCount = stats && 'subscriberCount' in stats;
  // const hasViewCount = stats && 'viewCount' in stats;
  
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
        {/* Debug info */}
        {/* <div className="bg-gray-100 p-4 rounded-md mb-6 text-left text-sm">
          <h3 className="font-bold mb-2">Debug Info:</h3>
          <p>Has subscriber count: {hasSubscriberCount ? "Yes" : "No"}</p>
          <p>Has view count: {hasViewCount ? "Yes" : "No"}</p>
          <p>Raw subscriber count: {stats?.subscriberCount || "undefined"}</p>
          <p>Raw view count: {stats?.viewCount || "undefined"}</p>
          <p>Channel ID: {CHANNEL_ID}</p>
        </div> */}
        
        <p>Subscribers: {stats?.subscriberCount ? parseInt(stats.subscriberCount).toLocaleString() : "0"}</p>
        <p>Total Views: {stats?.viewCount ? parseInt(stats.viewCount).toLocaleString() : "0"}</p>
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