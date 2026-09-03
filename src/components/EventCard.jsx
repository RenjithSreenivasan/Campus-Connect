import React from "react";

function EventCard({ event }) {
  return (
    <div className="card h-100 shadow-sm border-0">

      {/* Event Image / Icon */}
      <div
        className="bg-dark text-white d-flex align-items-center justify-content-center"
        style={{
          height: "180px",
          fontSize: "60px",
          borderRadius: "12px 12px 0 0",
        }}
      >
        📅
      </div>

      <div className="card-body d-flex flex-column">

        {/* Category */}
        <div className="mb-2">
          <span className="badge bg-primary">
            {event.category}
          </span>
        </div>

        {/* Title */}
        <h4 className="card-title fw-bold">
          {event.title}
        </h4>

        {/* Date */}
        <p className="text-muted mb-2">
          📅 {event.date}
        </p>

        {/* Location */}
        <p className="text-muted mb-2">
          📍 {event.location}
        </p>

        {/* Description */}
        <p className="card-text">
          {event.description}
        </p>

        {/* Button */}
        <button
          className="btn btn-dark mt-auto"
          onClick={() => alert(`You selected: ${event.title}`)}
        >
          View Event
        </button>

      </div>

    </div>
  );
}

export default EventCard;