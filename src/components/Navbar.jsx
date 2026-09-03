import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GraduationCap } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Tasks", path: "/tasks" },
    { name: "Announcements", path: "/announcements" },
    { name: "Profile", path: "/profile" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}
          <NavLink
            to="/"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl text-white shadow-md shadow-blue-600/20">
              <GraduationCap size={24} strokeWidth={2} />
            </div>

            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-slate-900">
                Campus<span className="text-blue-600">Connect</span>
              </h1>
              <p className="hidden text-[11px] font-medium text-slate-500 sm:block">
                Your smart campus companion
              </p>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden items-center lg:flex">
            <div className="flex items-center gap-1 rounded-2xl bg-slate-50 p-1.5">

              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === "/"}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                        : "text-slate-600 hover:bg-white hover:text-blue-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}

            </div>

            {/* CTA */}
            <NavLink
              to="/profile"
              className="ml-5 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              My Campus
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            className="rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-slate-700 transition hover:bg-slate-100 lg:hidden"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[500px] pb-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="space-y-1 rounded-2xl border border-slate-200 bg-slate-50 p-2">

            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block rounded-xl px-4 py-3 text-sm font-semibold transition ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm"
                      : "text-slate-700 hover:bg-white hover:text-blue-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            <NavLink
              to="/profile"
              onClick={() => setIsOpen(false)}
              className="mt-2 block rounded-xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              My Campus
            </NavLink>

          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;