import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import youtube from "../assets/youtube.png";
const API_KEY = import.meta.env.VITE_YT_API_KEY;
const CHANNEL_ID = import.meta.env.VITE_YT_CHANNEL_ID;

// Function to fetch YouTube stats with better error handling
const fetchStats = async () => {
  console.log("Using API Key:", API_KEY);
  console.log("Using Channel ID:", CHANNEL_ID);
  
  try {
    // Fetch channel data
    const channelRes = await fetch(
      `https://www.googleapis.com/youtube/v3/channels?part=statistics,contentDetails&id=${CHANNEL_ID}&key=${API_KEY}`
    );
    
    if (!channelRes.ok) {
      const errorData = await channelRes.json();
      console.error("Channel API error:", errorData);
      throw new Error(`Channel API error: ${errorData?.error?.message || channelRes.statusText}`);
    }
    
    const channelData = await channelRes.json();
    console.log("Channel data response:", channelData);

    if (!channelData.items || channelData.items.length === 0) {
      throw new Error("Invalid API response: No channel items found");
    }

    const stats = channelData.items[0].statistics;
    const uploadsPlaylistId = channelData.items[0].contentDetails.relatedPlaylists.uploads;

    // Fetch latest video
    const videoRes = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=1&key=${API_KEY}`
    );
    
    if (!videoRes.ok) {
      const errorData = await videoRes.json();
      console.error("Video API error:", errorData);
      throw new Error(`Video API error: ${errorData?.error?.message || videoRes.statusText}`);
    }
    
    const videoData = await videoRes.json();
    console.log("Video data response:", videoData);

    if (!videoData.items || videoData.items.length === 0) {
      throw new Error("No latest video found");
    }

    const latestVideo = videoData.items[0].snippet;

    return { ...stats, latestVideo };
  } catch (error) {
    console.error("Error in fetchStats:", error);
    throw error; // Re-throw to let React Query handle it
  }
};

// Helper function to safely parse and format numbers
const formatNumber = (value) => {
  if (!value && value !== 0) return "0";
  const num = parseInt(value);
  return isNaN(num) ? "0" : num.toLocaleString();
};

export default function Stats() {
  // Include error in the destructured values
  const { data: stats, isLoading, isError, error } = useQuery({
    queryKey: ["youtubeStats"],
    queryFn: fetchStats,
    refetchInterval: 30000,
    staleTime: 60000,
  });

  if (isLoading)
    return <p className="text-center text-3xl font-semibold py-10">Loading stats...</p>;

  // Debug log to see what stats we're getting
  console.log("Stats data received:", stats);

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