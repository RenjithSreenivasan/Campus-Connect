import React, { useState } from "react";
import {
  Pencil,
  UserRound,
  CheckCircle2,
  GraduationCap,
  Building2,
  Phone,
  Lightbulb,
  Save,
  X,
} from "lucide-react";
function Profile() {
  const [profile, setProfile] = useState({
    name: "Renjith",
    email: "renjith@example.com",
    phone: "+91 98765 43210",
    course: "BCA",
    semester: "5th Semester",
    college: "MEC Kottappady",
    bio: "BCA student interested in web development and technology.",
  });

  const [editMode, setEditMode] = useState(false);
  const [saved, setSaved] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSaved(false);
  };

  // Save profile
  const handleSubmit = (e) => {
    e.preventDefault();

    setEditMode(false);
    setSaved(true);
  };

  // Cancel editing
  const handleCancel = () => {
    setEditMode(false);
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
              <UserRound size={16} /> Student Account
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              My Profile
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              View and manage your student information, academic details, and
              personal profile.
            </p>
          </div>

        </div>
      </section>

      {/* Main */}
      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">

        {/* Success Message */}
        {saved && (
          <div className="mb-8 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">

            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100">
              <CheckCircle2 size={19} />
            </div>

            <div>
              <h3 className="font-semibold text-emerald-800">
                Profile updated successfully
              </h3>

              <p className="mt-1 text-sm text-emerald-700">
                Your profile information has been saved.
              </p>
            </div>

          </div>
        )}

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Profile Card */}
          <aside className="lg:col-span-1">

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">

              {/* Profile Banner */}
              <div className="h-32 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600" />

              <div className="px-6 pb-7">

                {/* Avatar */}
                <div className="-mt-14 flex justify-center">

                  <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-slate-900 text-5xl shadow-xl">
                    <UserRound size={52} strokeWidth={1.8} />
                  </div>

                </div>

                {/* User Info */}
                <div className="mt-5 text-center">

                  <h2 className="text-2xl font-bold text-slate-900">
                    {profile.name}
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    {profile.email}
                  </p>

                  <div className="mt-4 flex flex-wrap justify-center gap-2">

                    <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700">
                      {profile.course}
                    </span>

                    <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700">
                      {profile.semester}
                    </span>

                  </div>

                </div>

                {/* Quick Information */}
                <div className="mt-7 space-y-4 border-t border-slate-100 pt-6">

                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50">
                      <GraduationCap size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Course
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {profile.course}
                      </p>
                    </div>

                  </div>

                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50">
                      <Building2 size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        College
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {profile.college}
                      </p>
                    </div>

                  </div>

                  <div className="flex items-start gap-3">

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50">
                      <Phone size={19} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                        Phone
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-800">
                        {profile.phone}
                      </p>
                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* Profile Tip */}
            <div className="mt-6 rounded-2xl border border-blue-100 bg-blue-50 p-5">

              <h3 className=" flex items-center gap-2 font-semibold text-blue-900">
                <Lightbulb size={18} /> Profile Tip
              </h3>

              <p className="mt-2 text-sm leading-6 text-blue-800/80">
                Keep your profile information up to date so CampusConnect can
                provide a better experience.
              </p>

            </div>

          </aside>

          {/* Profile Form */}
          <section className="lg:col-span-2">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

              {/* Form Header */}
              <div className="flex flex-col justify-between gap-5 border-b border-slate-100 pb-7 sm:flex-row sm:items-center">

                <div>
                  <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                    Personal Information
                  </span>

                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    Student Details
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    Update your personal and academic information.
                  </p>
                </div>

                {!editMode && (
                  <button
                    type="button"
                    onClick={() => {
                      setEditMode(true);
                      setSaved(false);
                    }}
                    className="flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600"
                  >
                    <Pencil size={17} /> Edit Profile
                  </button>
                )}

              </div>

              <form onSubmit={handleSubmit} className="mt-8">

                {/* Name & Email */}
                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                      disabled={!editMode}
                      required
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                        editMode
                          ? "border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          : "border-slate-100 bg-slate-50 text-slate-500"
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email Address
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={profile.email}
                      onChange={handleChange}
                      disabled={!editMode}
                      required
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                        editMode
                          ? "border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          : "border-slate-100 bg-slate-50 text-slate-500"
                      }`}
                    />
                  </div>

                </div>

                {/* Phone & Course */}
                <div className="mt-5 grid gap-5 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Phone Number
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={profile.phone}
                      onChange={handleChange}
                      disabled={!editMode}
                      required
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                        editMode
                          ? "border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          : "border-slate-100 bg-slate-50 text-slate-500"
                      }`}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="course"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Course
                    </label>

                    <input
                      id="course"
                      type="text"
                      name="course"
                      value={profile.course}
                      onChange={handleChange}
                      disabled={!editMode}
                      required
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                        editMode
                          ? "border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          : "border-slate-100 bg-slate-50 text-slate-500"
                      }`}
                    />
                  </div>

                </div>

                {/* Semester & College */}
                <div className="mt-5 grid gap-5 md:grid-cols-2">

                  <div>
                    <label
                      htmlFor="semester"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Semester
                    </label>

                    <select
                      id="semester"
                      name="semester"
                      value={profile.semester}
                      onChange={handleChange}
                      disabled={!editMode}
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                        editMode
                          ? "border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          : "border-slate-100 bg-slate-50 text-slate-500"
                      }`}
                    >
                      <option>1st Semester</option>
                      <option>2nd Semester</option>
                      <option>3rd Semester</option>
                      <option>4th Semester</option>
                      <option>5th Semester</option>
                      <option>6th Semester</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="college"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      College
                    </label>

                    <input
                      id="college"
                      type="text"
                      name="college"
                      value={profile.college}
                      onChange={handleChange}
                      disabled={!editMode}
                      required
                      className={`w-full rounded-xl border px-4 py-3.5 text-sm outline-none transition ${
                        editMode
                          ? "border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                          : "border-slate-100 bg-slate-50 text-slate-500"
                      }`}
                    />
                  </div>

                </div>

                {/* Bio */}
                <div className="mt-5">

                  <div className="mb-2 flex items-center justify-between">

                    <label
                      htmlFor="bio"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      About Me
                    </label>

                    {editMode && (
                      <span className="text-xs text-slate-400">
                        {profile.bio.length}/300
                      </span>
                    )}

                  </div>

                  <textarea
                    id="bio"
                    name="bio"
                    rows="5"
                    maxLength="300"
                    value={profile.bio}
                    onChange={handleChange}
                    disabled={!editMode}
                    placeholder="Tell something about yourself..."
                    className={`w-full resize-none rounded-xl border px-4 py-3.5 text-sm leading-7 outline-none transition ${
                      editMode
                        ? "border-slate-200 bg-slate-50 text-slate-900 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                        : "border-slate-100 bg-slate-50 text-slate-500"
                    }`}
                  />

                </div>

                {/* Buttons */}
                {editMode && (
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                    <button
                      type="submit"
                      className=" flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
                    >
                      <Save size={17} /> Save Changes
                    </button>

                    <button
                      type="button"
                      onClick={handleCancel}
                      className=" flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      <X size={17} />Cancel
                    </button>

                  </div>
                )}

              </form>
            </div>

          </section>

        </div>

      </main>

    </div>
  );
}

export default Profile;