import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Hide success message when user starts typing again
    if (submitted) {
      setSubmitted(false);
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Hero Header */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
              💬 We'd Love to Hear From You
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Get in Touch
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Have a question, suggestion, or feedback about CampusConnect?
              Our team is here to help you make the most of your campus
              experience.
            </p>
          </div>

        </div>
      </section>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">

        <div className="grid gap-8 lg:grid-cols-5">

          {/* Contact Information */}
          <div className="lg:col-span-2">

            <div className="h-full overflow-hidden rounded-3xl bg-slate-950 p-8 shadow-xl sm:p-10">

              <span className="text-sm font-semibold uppercase tracking-widest text-blue-400">
                Contact Information
              </span>

              <h2 className="mt-3 text-3xl font-bold text-white">
                Let's start a conversation.
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                Whether you need support, want to report an issue, or simply
                have an idea to improve CampusConnect, feel free to reach out.
              </p>

              <div className="mt-10 space-y-7">

                {/* Address */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/15 text-xl">
                    📍
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Visit Us
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      CampusConnect Student Hub
                      <br />
                      Kerala, India
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/15 text-xl">
                    📧
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Email Us
                    </h3>

                    <a
                      href="mailto:support@campusconnect.com"
                      className="mt-1 block text-sm text-slate-400 transition hover:text-blue-400"
                    >
                      support@campusconnect.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/15 text-xl">
                    📞
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Call Us
                    </h3>

                    <a
                      href="tel:+919876543210"
                      className="mt-1 block text-sm text-slate-400 transition hover:text-blue-400"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-600/15 text-xl">
                    🕒
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Working Hours
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Monday – Friday
                      <br />
                      9:00 AM – 5:00 PM
                    </p>
                  </div>
                </div>

              </div>

              {/* Bottom Note */}
              <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/70 p-5">
                <p className="text-sm leading-6 text-slate-400">
                  💡 We usually respond to messages within one business day.
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">

              <div className="mb-8">
                <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                  Send a Message
                </span>

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                  How can we help?
                </h2>

                <p className="mt-3 text-slate-500">
                  Fill out the form below and we'll get back to you as soon
                  as possible.
                </p>
              </div>

              {/* Success Message */}
              {submitted && (
                <div className="mb-6 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    ✅
                  </div>

                  <div>
                    <h3 className="font-semibold text-emerald-800">
                      Message sent successfully
                    </h3>

                    <p className="mt-1 text-sm text-emerald-700">
                      Thank you for contacting us. Our team will get back to
                      you soon.
                    </p>
                  </div>

                </div>
              )}

              <form onSubmit={handleSubmit}>

                {/* Name + Email */}
                <div className="grid gap-5 sm:grid-cols-2">

                  {/* Name */}
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
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                  {/* Email */}
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
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div className="mt-5">

                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="What would you like to talk about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

                {/* Message */}
                <div className="mt-5">

                  <div className="mb-2 flex items-center justify-between">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-slate-700"
                    >
                      Your Message
                    </label>

                    <span className="text-xs text-slate-400">
                      {formData.message.length}/500
                    </span>
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    maxLength="500"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm leading-6 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                  />

                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-600/30"
                >
                  Send Message
                  <span>→</span>
                </button>

                <p className="mt-4 text-center text-xs text-slate-400">
                  By submitting this form, you agree to be contacted regarding
                  your message.
                </p>

              </form>
            </div>

          </div>

        </div>

        {/* FAQ / Help Banner */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-blue-600 px-8 py-10 sm:px-12">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">

              <span className="text-sm font-semibold uppercase tracking-widest text-blue-100">
                Need Quick Help?
              </span>

              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Check our campus resources first.
              </h2>

              <p className="mt-3 leading-7 text-blue-100">
                You may find answers to common questions in announcements,
                campus guidelines, and student support resources.
              </p>

            </div>

            <button
              type="button"
              className="shrink-0 rounded-xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-blue-50"
            >
              Explore Resources →
            </button>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Contact;