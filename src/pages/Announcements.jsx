import { useEffect, useState } from "react";
import { getAnnouncementsAPI } from "../services/allAPI";
import { CalendarDays } from "lucide-react";

function Announcements() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const fetchAnnouncements = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getAnnouncementsAPI();
      if (response && response.status >= 200 && response.status < 300) {
        setAnnouncements(response.data || []);
      } else {
        setError("Failed to fetch announcements from server.");
      }
    } catch (err) {
      console.error("Error fetching announcements:", err);
      setError("Unable to connect to the JSON server. Please ensure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;

    getAnnouncementsAPI()
      .then((response) => {
        if (!ignore) {
          if (response && response.status >= 200 && response.status < 300) {
            setAnnouncements(response.data || []);
          } else {
            setError("Failed to fetch announcements from server.");
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!ignore) {
          console.error("Error fetching announcements:", err);
          setError("Unable to connect to the JSON server. Please ensure the server is running.");
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  // Get unique categories from fetched data
  const categories = [
    "All",
    ...new Set(announcements.map((item) => item.category)),
  ];

  // Search and filter announcements
  const filteredAnnouncements = announcements.filter((item) => {
    const searchText = search.toLowerCase();

    const matchesSearch =
      item.title?.toLowerCase().includes(searchText) ||
      item.description?.toLowerCase().includes(searchText) ||
      item.category?.toLowerCase().includes(searchText);

    const matchesCategory =
      category === "All" || item.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
              📢 Campus News & Updates
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Campus Announcements
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Stay informed about important academic updates, examinations,
              events, holidays, deadlines, and other campus news.
            </p>
          </div>

        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">

        {/* Search & Filters */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            {/* Search */}
            <div className="relative w-full lg:max-w-xl">

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>

              <input
                type="text"
                placeholder="Search announcements..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto pb-1">

              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                    category === item
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>
        </div>

        {/* Section Heading */}
        <div className="mt-10 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Latest Updates
            </span>

            <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Important Announcements
            </h2>
          </div>

          <p className="text-sm text-slate-500">
            Showing{" "}
            <span className="font-bold text-slate-900">
              {filteredAnnouncements.length}
            </span>{" "}
            of{" "}
            <span className="font-bold text-slate-900">
              {announcements.length}
            </span>
          </p>

        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-12 flex flex-col items-center justify-center py-16">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
            <p className="mt-4 text-base font-semibold text-slate-600">
              Loading announcements from server...
            </p>
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="mt-10 rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-2xl">
              ⚠️
            </div>
            <h3 className="mt-4 text-xl font-bold text-red-900">
              Failed to load announcements
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-red-700">
              {error}
            </p>
            <p className="mt-1 text-xs text-red-600">
              Please make sure the JSON server is running (`npm run server`).
            </p>
            <button
              onClick={fetchAnnouncements}
              className="mt-5 rounded-xl bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Announcement Grid */}
        {!loading && !error && (
          filteredAnnouncements.length > 0 ? (

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              {filteredAnnouncements.map((item) => (

                <article
                  key={item.id}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Top Accent */}
                  <div className="absolute left-0 top-0 h-full w-1 bg-blue-600" />

                  <div className="flex items-start justify-between gap-4">

                    {/* Category */}
                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                      {item.category}
                    </span>

                    {/* Priority */}
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                        item.priority === "High"
                          ? "bg-red-50 text-red-600"
                          : item.priority === "Medium"
                          ? "bg-amber-50 text-amber-600"
                          : "bg-emerald-50 text-emerald-600"
                      }`}
                    >
                      {item.priority || "General"}
                    </span>

                  </div>

                  {/* Title */}
                  <h3 className="mt-5 text-xl font-bold leading-7 text-slate-900 transition group-hover:text-blue-600">
                    {item.title}
                  </h3>

                  {/* Date */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-slate-500">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100">
                      <CalendarDays size={27} strokeWidth={2} />
                    </span>
                    <span>{item.date}</span>
                  </div>

                  {/* Description */}
                  <p className="mt-5 leading-7 text-slate-600">
                    {item.description}
                  </p>

                  {/* Footer */}
                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">

                    <span className="text-xs font-medium text-slate-400">
                      CampusConnect
                    </span>

                    <button
                      type="button"
                      className="font-semibold text-blue-600 transition hover:text-blue-700"
                    >
                      Read More →
                    </button>

                  </div>

                </article>

              ))}

            </div>

          ) : (

            /* Empty State */
            <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
                📭
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                No announcements found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-slate-500">
                There are no announcements matching your current search or
                category filter.
              </p>

              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                }}
                className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Clear Filters
              </button>

            </div>

          )
        )}

      </main>

      {/* Information Banner */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">

        <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-8 py-10 sm:px-12">

          <div className="absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-600/20 blur-2xl" />
          <div className="absolute -bottom-24 -left-16 h-60 w-60 rounded-full bg-blue-400/10 blur-2xl" />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">

              <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Stay Informed
              </span>

              <h2 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                Don't miss important campus updates.
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                Check CampusConnect regularly for new academic notices,
                event updates, deadlines, and other important announcements.
              </p>

            </div>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="shrink-0 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Back to Top ↑
            </button>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Announcements;