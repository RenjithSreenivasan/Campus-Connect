import React from "react";
import { NavLink } from "react-router-dom";
import { GraduationCap, MapPin, Mail, Phone } from "lucide-react";


function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">

            <NavLink to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl text-white shadow-lg shadow-blue-600/20">
                <GraduationCap size={24} strokeWidth={2} />
              </div>

              <div>
                <h2 className="text-xl font-extrabold tracking-tight text-white">
                  Campus<span className="text-blue-500">Connect</span>
                </h2>
                <p className="text-xs text-slate-500">
                  Your smart campus companion
                </p>
              </div>
            </NavLink>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              CampusConnect is your all-in-one digital campus platform. Stay
              informed, organized, and connected with everything happening
              around your college.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-slate-300 transition hover:bg-blue-600 hover:text-white"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-slate-300 transition hover:bg-blue-600 hover:text-white"
              >
                ◎
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-slate-300 transition hover:bg-blue-600 hover:text-white"
              >
                𝕏
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 text-sm font-bold text-slate-300 transition hover:bg-blue-600 hover:text-white"
              >
                in
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <div className="mt-5 space-y-3">

              <NavLink
                to="/"
                className="block text-sm transition hover:text-blue-400"
              >
                Home
              </NavLink>

              <NavLink
                to="/events"
                className="block text-sm transition hover:text-blue-400"
              >
                Events
              </NavLink>

              <NavLink
                to="/tasks"
                className="block text-sm transition hover:text-blue-400"
              >
                Tasks
              </NavLink>

              <NavLink
                to="/announcements"
                className="block text-sm transition hover:text-blue-400"
              >
                Announcements
              </NavLink>

              <NavLink
                to="/profile"
                className="block text-sm transition hover:text-blue-400"
              >
                Profile
              </NavLink>

            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Resources
            </h3>

            <div className="mt-5 space-y-3">

              <a
                href="#"
                className="block text-sm transition hover:text-blue-400"
              >
                Student Support
              </a>

              <a
                href="#"
                className="block text-sm transition hover:text-blue-400"
              >
                Campus Guidelines
              </a>

              <a
                href="#"
                className="block text-sm transition hover:text-blue-400"
              >
                FAQs
              </a>

              <a
                href="#"
                className="block text-sm transition hover:text-blue-400"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="block text-sm transition hover:text-blue-400"
              >
                Terms & Conditions
              </a>

            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4 text-sm">

              <div className="flex gap-3">
                <span className="text-lg"><MapPin size={18} strokeWidth={2} /></span>
                <p className="leading-6 text-slate-400">
                  CampusConnect Student Center,
                  <br />
                  College Campus, Kerala, India
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-lg"><Mail size={18} strokeWidth={2} /></span>
                <a
                  href="mailto:support@campusconnect.com"
                  className="transition hover:text-blue-400"
                >
                  support@campusconnect.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-lg"><Phone size={18} strokeWidth={2} /></span>
                <a
                  href="tel:+919876543210"
                  className="transition hover:text-blue-400"
                >
                  +91 98765 43210
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Newsletter */}
        <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/70 p-6 sm:p-8">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div className="max-w-xl">
              <h3 className="text-xl font-bold text-white">
                Stay connected with campus life
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                Get the latest events, announcements, workshops, and campus
                updates directly in your inbox.
              </p>
            </div>

            <div className="w-full lg:max-w-md">
              <form className="flex flex-col gap-3 sm:flex-row">

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="min-w-0 flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
                />

                <button
                  type="submit"
                  className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Subscribe
                </button>

              </form>
            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm md:flex-row md:items-center md:justify-between">

          <p className="text-slate-500">
            © {new Date().getFullYear()} CampusConnect. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="#"
              className="text-slate-500 transition hover:text-white"
            >
              Privacy
            </a>

            <a
              href="#"
              className="text-slate-500 transition hover:text-white"
            >
              Terms
            </a>

            <NavLink
              to="/contact"
              className="text-slate-500 transition hover:text-white"
            >
              Contact
            </NavLink>
          </div>

        </div>

      </div>
    </footer>
  );
}

export default Footer;