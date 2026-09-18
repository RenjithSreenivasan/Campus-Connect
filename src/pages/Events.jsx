import { useEffect, useState } from "react";
import { getEventsAPI } from "../services/allAPI";

function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getEventsAPI();
      if (response && response.status >= 200 && response.status < 300) {
        setEvents(response.data || []);
      } else {
        setError("Failed to fetch events from server.");
      }
    } catch (err) {
      console.error("Error fetching events:", err);
      setError("Unable to connect to the JSON server. Please ensure the server is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let ignore = false;

    getEventsAPI()
      .then((response) => {
        if (!ignore) {
          if (response && response.status >= 200 && response.status < 300) {
            setEvents(response.data || []);
          } else {
            setError("Failed to fetch events from server.");
          }
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!ignore) {
          console.error("Error fetching events:", err);
          setError("Unable to connect to the JSON server. Please ensure the server is running.");
          setLoading(false);
        }
      });

    return () => {
      ignore = true;
    };
  }, []);

  const categories = [
    "All",
    ...new Set(events.map((event) => event.category)),
  ];

  const filteredEvents = events.filter((event) => {
    const matchesSearch =
      event.title?.toLowerCase().includes(search.toLowerCase()) ||
      event.description?.toLowerCase().includes(search.toLowerCase()) ||
      event.location?.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || event.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Page Header */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
          <div className="max-w-3xl">

            <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
              📅 Campus Activities
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Discover Campus Events
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Explore workshops, cultural programs, competitions, seminars,
              technical events, and everything happening around your campus.
            </p>

          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">

        {/* Search + Filter */}
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

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
                placeholder="Search events, workshops, locations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3.5 pl-12 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex gap-2 overflow-x-auto pb-1 lg:pb-0">
              {categories.map((item) => (
                <button
                  key={item}
                  onClick={() => setCategory(item)}
                  className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
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

        {/* Result Count */}
        <div className="mt-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Upcoming Events
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {filteredEvents.length} event
              {filteredEvents.length !== 1 ? "s" : ""} found
            </p>
          </div>
        </div>

        {/* Loading State */}
        {loading && (
          <div className="mt-12 flex flex-col items-center justify-center py-16">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-blue-200 border-t-blue-600"></div>
            <p className="mt-4 text-base font-semibold text-slate-600">
              Loading campus events from server...
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
              Failed to load events
            </h3>
            <p className="mx-auto mt-2 max-w-md text-sm text-red-700">
              {error}
            </p>
            <p className="mt-1 text-xs text-red-600">
              Please make sure the JSON server is running (`npm run server`).
            </p>
            <button
              onClick={fetchEvents}
              className="mt-5 rounded-xl bg-red-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-red-500"
            >
              Try Again
            </button>
          </div>
        )}

        {/* Event Grid */}
        {!loading && !error && (
          filteredEvents.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

              {filteredEvents.map((event) => (
                <article
                  key={event.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >

                  {/* Image */}
                  <div className="relative h-52 overflow-hidden bg-slate-200">

                    <img
                      src={
                        event.image ||
                        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1000&q=80"
                      }
                      alt={event.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />

                    {/* Category */}
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-blue-700 shadow-sm">
                      {event.category}
                    </span>

                    {/* Date */}
                    <div className="absolute bottom-4 left-4 rounded-xl bg-white px-4 py-2 shadow-lg">
                      <p className="text-xs font-semibold uppercase tracking-wide text-blue-600">
                        Date
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        {event.date}
                      </p>
                    </div>

                  </div>

                  {/* Card Content */}
                  <div className="p-6">

                    <h3 className="text-xl font-bold text-slate-900 transition group-hover:text-blue-600">
                      {event.title}
                    </h3>

                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-600">
                      {event.description}
                    </p>

                    <div className="mt-5 space-y-3 border-t border-slate-100 pt-5">

                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          📍
                        </div>

                        <span>{event.location}</span>
                      </div>

                      {event.time && (
                        <div className="flex items-center gap-3 text-sm text-slate-600">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                            🕒
                          </div>

                          <span>{event.time}</span>
                        </div>
                      )}

                    </div>

                    {/* Action */}
                    <button
                      className="mt-6 w-full rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-blue-600"
                    >
                      Register for Event →
                    </button>

                  </div>
                </article>
              ))}

            </div>
          ) : (
            /* Empty State */
            <div className="mt-10 rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
                🔎
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                No events found
              </h3>

              <p className="mx-auto mt-2 max-w-md text-slate-500">
                We couldn't find any events matching your search or selected
                category. Try a different search term.
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

      {/* Bottom CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-16 sm:px-8 lg:px-12">
        <div className="overflow-hidden rounded-3xl bg-blue-600 px-8 py-10 sm:px-12">

          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">

            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Have an event coming up?
              </h2>

              <p className="mt-2 max-w-xl text-blue-100">
                Stay involved and make your campus experience more exciting
                by participating in upcoming activities.
              </p>
            </div>

            <button className="shrink-0 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50">
              Explore More
            </button>

          </div>

        </div>
      </section>

    </div>
  );
}

export default Events;