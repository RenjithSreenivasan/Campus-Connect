import React from "react";
import {
  CalendarDays,
  CheckCircle2,
  Megaphone,
  Users,
} from "lucide-react";
function Home() {
  return (
    <div className="bg-slate-50 text-slate-900">

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-950">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?auto=format&fit=crop&w=2000&q=80"
            alt="University campus"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-slate-900/30"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-12 lg:py-32">
          <div className="max-w-3xl">

            <span className="mb-6 inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-300 backdrop-blur-sm">
               Your Digital Campus Companion
            </span>

            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
              Everything You Need,
              <span className="block text-blue-400">
                All in One Campus.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              CampusConnect brings your college life together. Discover events,
              manage tasks, stay updated with announcements, and connect with
              your campus community from one simple platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/30 transition hover:bg-blue-500 hover:-translate-y-0.5">
                Explore Campus
              </button>

              <button className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/20">
                View Events
              </button>
            </div>

            <div className="mt-10 flex flex-wrap gap-8 text-sm text-slate-300">
              <div>
                <p className="text-2xl font-bold text-white">50+</p>
                <p>Campus Events</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">1,200+</p>
                <p>Students</p>
              </div>

              <div>
                <p className="text-2xl font-bold text-white">24/7</p>
                <p>Campus Updates</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section id="Features" className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            CampusConnect
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Everything your campus needs
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Stay organized, informed, and connected throughout your college
            journey.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {/* Events */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              <CalendarDays size={27} strokeWidth={2} />
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Events
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Discover workshops, cultural programs, seminars, competitions,
              and exciting campus activities.
            </p>

            <button className="mt-5 font-semibold text-blue-600 transition group-hover:text-blue-700">
              Explore events →
            </button>
          </div>

          {/* Tasks */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-100 text-2xl">
              <CheckCircle2 size={27} strokeWidth={2} />
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Smart Tasks
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Organize assignments, projects, deadlines, and personal goals
              without missing what matters.
            </p>

            <button className="mt-5 font-semibold text-emerald-600">
              Manage tasks →
            </button>
          </div>

          {/* Announcements */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-100 text-2xl">
              <Megaphone size={27} strokeWidth={2} />
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Announcements
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Get important notices, academic updates, exam information, and
              campus news in one place.
            </p>

            <button className="mt-5 font-semibold text-amber-600">
              Read updates →
            </button>
          </div>

          {/* Community */}
          <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-100 text-2xl">
              <Users size={27} strokeWidth={2} />
            </div>

            <h3 className="mt-6 text-xl font-bold">
              Community
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              Connect with classmates, clubs, organizations, and the wider
              college community.
            </p>

            <button className="mt-5 font-semibold text-purple-600">
              Join community →
            </button>
          </div>

        </div>
      </section>

      {/* Campus Image Section */}
      <section className="mx-auto max-w-7xl px-6 pb-20 sm:px-8 lg:px-12">
        <div className="grid overflow-hidden rounded-3xl bg-slate-900 lg:grid-cols-2">

          <div className="relative min-h-[350px]">
            <img
              src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1200&q=80"
              alt="Students on campus"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 to-transparent"></div>

            <div className="absolute bottom-6 left-6">
              <span className="rounded-full bg-white/15 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
                Life at Campus
              </span>
            </div>
          </div>

          <div className="flex items-center p-8 sm:p-12 lg:p-16">
            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Connected Campus
              </span>

              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Make your college experience more organized.
              </h2>

              <p className="mt-5 text-lg leading-8 text-slate-300">
                From your first day on campus to your final semester,
                CampusConnect helps you stay connected with everything happening
                around you.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-6">

                <div>
                  <p className="text-3xl font-bold text-white">100%</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Campus focused
                  </p>
                </div>

                <div>
                  <p className="text-3xl font-bold text-white">Easy</p>
                  <p className="mt-1 text-sm text-slate-400">
                    To use
                  </p>
                </div>

              </div>

              <button className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-blue-50">
                Learn More
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Upcoming Events */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Don't Miss Out
              </span>

              <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
                Upcoming Campus Events
              </h2>

              <p className="mt-3 text-slate-600">
                Find something exciting happening around your campus.
              </p>
            </div>

            <button className="font-semibold text-blue-600">
              View all events →
            </button>

          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">

              <img
                src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80"
                alt="College event"
                className="h-48 w-full object-cover"
              />

              <div className="p-6">

                <div className="mb-4 inline-flex rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                  12 SEP
                </div>

                <h3 className="text-xl font-bold">
                  Tech Fest 2026
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  📍 Main Auditorium
                </p>

                <p className="mt-4 leading-6 text-slate-600">
                  A day full of technology, innovation, coding challenges,
                  exhibitions, and competitions.
                </p>

                <button className="mt-5 font-semibold text-blue-600">
                  View details →
                </button>

              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">

              <img
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=800&q=80"
                alt="Students gathering"
                className="h-48 w-full object-cover"
              />

              <div className="p-6">

                <div className="mb-4 inline-flex rounded-lg bg-purple-100 px-3 py-1 text-sm font-semibold text-purple-700">
                  18 SEP
                </div>

                <h3 className="text-xl font-bold">
                  Cultural Fest
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  📍 College Grounds
                </p>

                <p className="mt-4 leading-6 text-slate-600">
                  Celebrate music, dance, art, food, and the diverse culture of
                  your campus community.
                </p>

                <button className="mt-5 font-semibold text-purple-600">
                  View details →
                </button>

              </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg">

              <img
                src="https://images.unsplash.com/photo-1540317580384-e5d43867caa6?auto=format&fit=crop&w=800&q=80"
                alt="College workshop"
                className="h-48 w-full object-cover"
              />

              <div className="p-6">

                <div className="mb-4 inline-flex rounded-lg bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-700">
                  24 SEP
                </div>

                <h3 className="text-xl font-bold">
                  Career Workshop
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  📍 Seminar Hall
                </p>

                <p className="mt-4 leading-6 text-slate-600">
                  Learn about careers, interviews, internships, and building a
                  successful professional future.
                </p>

                <button className="mt-5 font-semibold text-emerald-600">
                  View details →
                </button>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 px-8 py-12 sm:px-12 lg:px-16">

          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10"></div>
          <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-white/10"></div>

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

            <div className="max-w-2xl">
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-100">
                Stay Updated
              </span>

              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Never miss an important campus announcement.
              </h2>

              <p className="mt-4 text-lg leading-7 text-blue-100">
                Stay informed about exams, holidays, events, deadlines,
                workshops, and other important updates.
              </p>
            </div>

            <button className="shrink-0 rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-600 shadow-lg transition hover:bg-blue-50">
              View Announcements
            </button>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center sm:px-8 lg:px-12">

          <h2 className="text-3xl font-bold sm:text-4xl">
            Your campus. Your community. Your connection.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Make the most of your college journey with CampusConnect.
          </p>

          <div className="mt-8">
            <button className="rounded-xl bg-slate-900 px-8 py-3.5 font-semibold text-white transition hover:bg-slate-800">
              Get Started
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;