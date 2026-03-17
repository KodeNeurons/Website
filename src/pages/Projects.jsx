import React, { useState, useEffect } from "react";
import { PlayCircle, Film, X, ExternalLink } from "lucide-react";
import SEO from "../components/SEO";

const YT_API_KEY = process.env.REACT_APP_YT_API_KEY;
const PLAYLIST_ID = process.env.REACT_APP_Platlist_ID;

export default function Projects() {
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch$ = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${PLAYLIST_ID}&maxResults=50&key=${YT_API_KEY}`
        );
        const data = await res.json();
        setVideos(
          (data.items || []).map((item) => ({
            id: item.contentDetails.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails?.high?.url,
          }))
        );
      } catch (err) {
        console.error("Playlist API error:", err);
      } finally {
        setLoading(false);
      }
    };
    fetch$();
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-white gap-4">
        <SEO title="Our Projects & Live Demos" path="/projects" />
        <div className="w-12 h-12 rounded-full border-4 border-orange-100 border-t-[#FF7A00] animate-spin" />
        <p className="text-sm text-gray-400">Loading demo videos…</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#0A0F2C] min-h-screen">
      <SEO
        title="Our Projects & Live Demos"
        description="Watch live demos and walkthroughs of the software products, AI agents, and systems we've built at KodeNeurons."
        keywords="projects, live demos, software portfolio, AI demos, web apps, mobile apps"
        path="/projects"
      />

      {/* ─── Hero ─── */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden bg-white">
        <div className="absolute -top-24 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,122,0,0.07), transparent 65%)" }} />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A00] text-xs font-semibold tracking-widest uppercase mb-6">
            <Film className="w-3.5 h-3.5" />
            Live Project Demos
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 text-[#0A0F2C]">
            Our Work,{" "}
            <span style={{ backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              In Action
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Watch real demos of AI, web, and mobile solutions built for students, startups, and enterprises.
          </p>
        </div>
      </section>

      {/* ─── Grid ─── */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {videos.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Film className="w-14 h-14 mx-auto mb-4 opacity-25" />
              <p>No demos yet — check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((v) => (
                <div
                  key={v.id}
                  onClick={() => setSelected(v)}
                  className="group cursor-pointer rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-[0_12px_40px_rgba(255,122,0,0.12)] hover:border-[#FF7A00]/25 hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Thumbnail */}
                  <div className="relative h-52 overflow-hidden bg-gray-50">
                    <img
                      src={v.thumbnail}
                      alt={v.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-[#0A0F2C]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#FF7A00] flex items-center justify-center shadow-[0_0_25px_rgba(255,122,0,0.5)]">
                        <PlayCircle className="w-7 h-7 text-white ml-0.5" />
                      </div>
                    </div>
                    <div className="absolute top-3 right-3 bg-[#FF7A00] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-lg tracking-wide">
                      Demo
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <h3 className="font-bold text-[#0A0F2C] mb-1.5 line-clamp-2 group-hover:text-[#FF7A00] transition-colors">{v.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{v.description}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold text-[#FF7A00] opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-3 h-3" /> Watch Demo
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ─── Modal ─── */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(10,15,44,0.7)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#FF7A00] hover:bg-orange-50 hover:border-[#FF7A00]/30 transition-all"
            >
              <X className="w-4 h-4" />
            </button>
            <iframe
              src={`https://www.youtube.com/embed/${selected.id}?autoplay=1`}
              title={selected.title}
              className="w-full aspect-video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
            <div className="p-5 text-center border-t border-gray-100">
              <h3 className="text-base font-bold text-[#0A0F2C] mb-3 line-clamp-1">{selected.title}</h3>
              <button
                onClick={() => setSelected(null)}
                className="px-6 py-2.5 bg-[#FF7A00] text-white font-semibold rounded-xl text-sm hover:bg-[#e86e00] shadow-[0_4px_14px_rgba(255,122,0,0.35)] hover:scale-105 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
