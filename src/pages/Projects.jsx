import React, { useEffect, useState } from "react";
import { Film, PlayCircle, X } from "lucide-react";
import SEO from "../components/SEO";
import { buildBreadcrumbSchema, buildUrl } from "../lib/siteMetadata";
import { useScrollReveal } from "../hooks/useScrollReveal";

const YT_API_KEY = process.env.REACT_APP_YT_API_KEY;
const PLAYLIST_ID = process.env.REACT_APP_PLAYLIST_ID || process.env.REACT_APP_Platlist_ID;

export default function Projects() {
  const [videosRef, videosVisible] = useScrollReveal(0.05);
  const [videos, setVideos] = useState([]);
  const [selected, setSelected] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    if (!PLAYLIST_ID || !YT_API_KEY) {
      console.warn("Missing YouTube configuration. Set REACT_APP_YT_API_KEY and REACT_APP_PLAYLIST_ID.");
      return undefined;
    }

    let ignore = false;

    const fetchAllVideos = async () => {
      setIsFetching(true);
      setFetchError(false);
      let allItems = [];
      let nextPageToken = "";

      try {
        do {
          const pageParam = nextPageToken ? `&pageToken=${nextPageToken}` : "";
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${PLAYLIST_ID}&maxResults=50${pageParam}&key=${YT_API_KEY}`
          );
          const data = await response.json();

          if (data.error) {
            throw new Error(data.error.message || "YouTube API error");
          }

          allItems = allItems.concat(
            (data.items || []).map((item) => ({
              id: item.contentDetails.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
              thumbnail: item.snippet.thumbnails?.high?.url || item.snippet.thumbnails?.medium?.url,
            }))
          );
          nextPageToken = data.nextPageToken || "";
        } while (nextPageToken && !ignore);

        if (!ignore) {
          setVideos(allItems.filter((v) => v.title !== "Private video" && v.title !== "Deleted video"));
        }
      } catch (error) {
        console.error("Playlist API error:", error);
        if (!ignore) setFetchError(true);
      } finally {
        if (!ignore) setIsFetching(false);
      }
    };

    fetchAllVideos();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="bg-white text-[#0A0F2C] min-h-screen">
      <SEO
        title="Software Projects and Live Demos"
        description="Explore Kodeneurons software projects, product demos, AI systems, and client work across web, mobile, and automation."
        keywords="projects, live demos, software portfolio, AI demos, web apps, mobile apps"
        path="/projects"
        schema={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Kodeneurons Projects",
            url: buildUrl("/projects"),
            description:
              "Collection of software projects, demos, and implementation highlights from Kodeneurons.",
          },
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
          ]),
        ]}
      />

      <section className="relative pt-32 pb-16 px-6 overflow-hidden bg-white">
        <div
          className="absolute -top-24 right-0 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,122,0,0.07), transparent 65%)" }}
        />
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-200 text-[#FF7A00] text-xs font-semibold tracking-widest uppercase mb-6">
            <Film className="w-3.5 h-3.5" />
            Live Project Demos
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold mb-5 text-[#0A0F2C]">
            Our Work,{" "}
            <span
              style={{
                backgroundImage: "linear-gradient(135deg,#FF7A00,#FF9E3D)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              In Action
            </span>
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Explore real implementations across AI, web, and mobile products built for students, startups, and businesses.
          </p>
        </div>
      </section>

   

      {/* ── YouTube Video Demos ── */}
      <section className="pb-24 px-6 pt-8 bg-[#FAFAFA] border-t border-gray-100" ref={videosRef}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col gap-3 mb-10 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <PlayCircle className="w-4 h-4 text-[#FF7A00]" />
                <p className="text-xs font-bold uppercase tracking-widest text-[#FF7A00]">Video Demos</p>
              </div>
              <h2 className="text-3xl font-extrabold text-[#0A0F2C]">Watch our work in action</h2>
              <p className="text-gray-500 text-sm mt-2">Live demos and walkthroughs from our YouTube channel.</p>
            </div>
            {videos.length > 0 && (
              <p className="text-sm text-gray-400 font-medium">{videos.length} videos</p>
            )}
          </div>

          {isFetching ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="w-10 h-10 rounded-full border-3 border-gray-200 border-t-[#FF7A00] animate-spin" />
              <p className="text-sm text-gray-400">Loading videos from YouTube...</p>
            </div>
          ) : fetchError ? (
            <div className="text-center py-16">
              <Film className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">Couldn't load videos right now. Please try again later.</p>
            </div>
          ) : videos.length === 0 ? (
            <div className="text-center py-16">
              <Film className="w-10 h-10 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-400 text-sm">No videos available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {videos.map((video, i) => (
                <div
                  key={video.id}
                  onClick={() => setSelected(video)}
                  className={`reveal-stagger-child${videosVisible ? " visible" : ""} card-shine group rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-[0_16px_50px_rgba(255,122,0,0.14)] hover:border-[#FF7A00]/25 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer`}
                  style={{ "--stagger-index": Math.min(i, 8) }}
                >
                  <div className="relative h-52 overflow-hidden bg-gray-100">
                    {video.thumbnail ? (
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => { e.target.style.display = "none"; }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-[#0A0F2C] via-[#122055] to-[#FF7A00] flex items-center justify-center">
                        <Film className="w-12 h-12 text-white/60" />
                      </div>
                    )}
                    {/* Play button - always visible */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-[#FF7A00]/90 group-hover:bg-[#FF7A00] flex items-center justify-center shadow-[0_0_25px_rgba(255,122,0,0.5)] group-hover:scale-110 transition-all duration-300">
                        <PlayCircle className="w-7 h-7 text-white ml-0.5" />
                      </div>
                    </div>
                    {/* Badge */}
                    <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-[#FF7A00] text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-lg tracking-wide shadow-md">
                      <PlayCircle className="w-3 h-3" /> Demo
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-[#0A0F2C] mb-1.5 line-clamp-2 group-hover:text-[#FF7A00] transition-colors duration-200">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-400 line-clamp-2 leading-relaxed">{video.description}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-[#FF7A00]">
                      <PlayCircle className="w-3.5 h-3.5" />
                      Watch Demo
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {selected ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(10,15,44,0.7)", backdropFilter: "blur(8px)" }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full shadow-2xl border border-gray-100"
            onClick={(event) => event.stopPropagation()}
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
      ) : null}
    </div>
  );
}
