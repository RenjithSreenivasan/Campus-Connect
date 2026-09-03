import React from "react";

function TaskCard({ task, onToggle, onDelete }) {
  return (
    <div className="card shadow-sm h-100 border-0">

      <div className="card-body">

        {/* Task Header */}
        <div className="d-flex justify-content-between align-items-start">

          <div>
            <h5
              className={`fw-bold ${
                task.completed
                  ? "text-decoration-line-through text-muted"
                  : ""
              }`}
            >
              {task.title}
            </h5>

            {/* Priority */}
            <span
              className={`badge ${
                task.priority === "High"
                  ? "bg-danger"
                  : task.priority === "Medium"
                  ? "bg-warning text-dark"
                  : "bg-success"
              }`}
            >
              {task.priority} Priority
            </span>
          </div>

          {/* Status */}
          <span className="fs-4">
            {task.completed ? "✅" : "⏳"}
          </span>

        </div>

        {/* Status Text */}
        <p className="text-muted mt-3 mb-3">
          Status:{" "}
          <strong>
            {task.completed ? "Completed" : "Pending"}
          </strong>
        </p>

        {/* Buttons */}
        <div>

          <button
            className={`btn btn-sm me-2 ${
              task.completed
                ? "btn-outline-warning"
                : "btn-success"
            }`}
            onClick={() => onToggle(task.id)}
          >
            {task.completed
              ? "Mark Pending"
              : "Mark Complete"}
          </button>

          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDelete(task.id)}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default TaskCard;