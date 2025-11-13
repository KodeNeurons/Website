import React, { useState, useEffect } from "react";
import { PlayCircle } from "lucide-react";

export default function Projects() {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        // 👇 Use backend port explicitly
        const res = await fetch("https://kncbbd.onrender.com/api/youtube/videos");
        console.log(res);
        
        const data = await res.json();
        setVideos(data.videos || []);
      } catch (err) {
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0B0B0F] text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-[#6C63FF]" />
      </div>
    );
  }

  return (
    <section className="bg-[#0B0B0F] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6C63FF] to-[#00D1FF]">
          🎬 KodeNeurons Project Demos
        </h2>

        {/* Video Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((v) => (
            <div
              key={v.id}
              onClick={() => setSelected(v)}
              className="relative group cursor-pointer rounded-2xl overflow-hidden bg-[#101016] border border-[#1F1F25] shadow-[0_0_20px_rgba(108,99,255,0.15)] hover:shadow-[0_0_30px_rgba(108,99,255,0.25)] transition"
            >
              <img
                src={v.thumbnail}
                alt={v.title}
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                <PlayCircle className="w-16 h-16 text-[#00D1FF] drop-shadow-lg" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-400 line-clamp-2">
                  {v.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for video playback */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#0C0C15] rounded-2xl overflow-hidden max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${selected.id}?autoplay=1`}
              title={selected.title}
              className="w-full aspect-video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-white mb-2">
                {selected.title}
              </h3>
              <button
                className="px-4 py-2 bg-gradient-to-r from-[#6C63FF] to-[#00D1FF] rounded-lg text-white font-semibold hover:scale-105 transition"
                onClick={() => setSelected(null)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
