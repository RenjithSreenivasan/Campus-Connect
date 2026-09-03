import React, { useMemo, useState } from "react";
import {
  ClipboardList,
  Clock3,
  CheckCircle2,
  ChartNoAxesColumnIncreasing,
  Plus,
  Trash2,
  RotateCcw,
  Check,
  ListTodo,
} from "lucide-react";
function Tasks() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Complete React Assignment",
      priority: "High",
      completed: false,
    },
    {
      id: 2,
      title: "Prepare Project Documentation",
      priority: "Medium",
      completed: false,
    },
  ]);

  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [filter, setFilter] = useState("All");

  // Add Task
  const addTask = (e) => {
    e.preventDefault();

    if (title.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      title: title.trim(),
      priority,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setTitle("");
    setPriority("Medium");
  };

  // Toggle task status
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete task
  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  };

  // Filter tasks
  const filteredTasks = useMemo(() => {
    return tasks.filter((task) => {
      if (filter === "Completed") return task.completed;
      if (filter === "Pending") return !task.completed;
      return true;
    });
  }, [tasks, filter]);

  // Statistics
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = tasks.filter((task) => !task.completed).length;

  const progress =
    totalTasks > 0
      ? Math.round((completedTasks / totalTasks) * 100)
      : 0;

  // Priority styles
  const priorityStyles = {
    High: {
      badge: "bg-red-50 text-red-700 border-red-100",
      dot: "bg-red-500",
    },
    Medium: {
      badge: "bg-amber-50 text-amber-700 border-amber-100",
      dot: "bg-amber-500",
    },
    Low: {
      badge: "bg-emerald-50 text-emerald-700 border-emerald-100",
      dot: "bg-emerald-500",
    },
  };

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Header */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">

          <div className="max-w-3xl">

            <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-semibold text-blue-300">
              <CheckCircle2 size={16} />Student Productivity
            </span>

            <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              My Tasks
            </h1>

            <p className="mt-4 text-lg leading-8 text-slate-300">
              Organize assignments, project work, deadlines, and personal
              goals—all in one simple task manager.
            </p>

          </div>

        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12">

        {/* Stats */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {/* Total */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Total Tasks
                </p>

                <p className="mt-2 text-3xl font-bold text-slate-900">
                  {totalTasks}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-xl">
                <ClipboardList size={22} />
              </div>

            </div>
          </div>

          {/* Pending */}
          <div className="rounded-2xl border border-amber-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Pending
                </p>

                <p className="mt-2 text-3xl font-bold text-amber-600">
                  {pendingTasks}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-xl">
                 <Clock3 size={22} />
              </div>

            </div>
          </div>

          {/* Completed */}
          <div className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Completed
                </p>

                <p className="mt-2 text-3xl font-bold text-emerald-600">
                  {completedTasks}
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-xl">
                <CheckCircle2 size={22} />
              </div>

            </div>
          </div>

          {/* Progress */}
          <div className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm">
            <div className="flex items-center justify-between">

              <div>
                <p className="text-sm font-semibold text-slate-500">
                  Progress
                </p>

                <p className="mt-2 text-3xl font-bold text-blue-600">
                  {progress}%
                </p>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl">
                <ChartNoAxesColumnIncreasing size={22} />
              </div>

            </div>

            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600 transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

        </div>

        {/* Add Task */}
        <section className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">

          <div className="mb-6">
            <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Productivity
            </span>

            <h2 className="mt-2 text-2xl font-bold text-slate-900">
              Add a New Task
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Create a task and assign a priority level.
            </p>
          </div>

          <form onSubmit={addTask}>
            <div className="grid gap-4 lg:grid-cols-12">

              {/* Task Title */}
              <div className="lg:col-span-7">
                <label
                  htmlFor="task-title"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Task
                </label>

                <input
                  id="task-title"
                  type="text"
                  placeholder="e.g. Complete database assignment"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                />
              </div>

              {/* Priority */}
              <div className="lg:col-span-3">
                <label
                  htmlFor="priority"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Priority
                </label>

                <select
                  id="priority"
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                >
                  <option value="High">High Priority</option>
                  <option value="Medium">Medium Priority</option>
                  <option value="Low">Low Priority</option>
                </select>
              </div>

              {/* Add Button */}
              <div className="flex items-end lg:col-span-2">
                <button
                  type="submit"
                  className="w-full rounded-xl bg-blue-600 px-5 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500"
                >
                  + Add Task
                </button>
              </div>

            </div>
          </form>
        </section>

        {/* Task List */}
        <section className="mt-8">

          {/* Heading & Filters */}
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>
              <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Task List
              </span>

              <h2 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
                Stay on top of your work
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                {filteredTasks.length} task
                {filteredTasks.length !== 1 ? "s" : ""} currently shown
              </p>
            </div>

            {/* Filters */}
            <div className="flex gap-2 overflow-x-auto pb-1">

              {["All", "Pending", "Completed"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                    filter === item
                      ? "bg-slate-900 text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-100"
                  }`}
                >
                  {item}
                </button>
              ))}

            </div>

          </div>

          {/* Tasks */}
          {filteredTasks.length > 0 ? (

            <div className="mt-6 grid gap-4 md:grid-cols-2">

              {filteredTasks.map((task) => {

                const styles =
                  priorityStyles[task.priority] ||
                  priorityStyles.Medium;

                return (
                  <article
                    key={task.id}
                    className={`group rounded-2xl border bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ${
                      task.completed
                        ? "border-emerald-100"
                        : "border-slate-200"
                    }`}
                  >

                    {/* Top */}
                    <div className="flex items-start justify-between gap-4">

                      <div className="min-w-0">

                        <div className="flex flex-wrap items-center gap-2">

                          <span
                            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-bold ${styles.badge}`}
                          >
                            <span
                              className={`h-2 w-2 rounded-full ${styles.dot}`}
                            />
                            {task.priority}
                          </span>

                          {task.completed && (
                            <span className="rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700">
                              Completed
                            </span>
                          )}

                        </div>

                        <h3
                          className={`mt-4 break-words text-lg font-bold ${
                            task.completed
                              ? "text-slate-400 line-through"
                              : "text-slate-900"
                          }`}
                        >
                          {task.title}
                        </h3>

                      </div>

                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${
                          task.completed
                            ? "bg-emerald-50 text-emerald-600"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {task.completed ? (
                          <CheckCircle2 size={22} />
                        ) : (
                          <Clock3 size={22} />
                        )}
                      </div>

                    </div>

                    {/* Actions */}
                    <div className="mt-6 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row">

                      <button
                        type="button"
                        onClick={() => toggleTask(task.id)}
                        className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                          task.completed
                            ? "bg-amber-50 text-amber-700 hover:bg-amber-100"
                            : "bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                        }`}
                      >
                        {task.completed
                          ? "↩ Mark as Pending"
                          : "✓ Mark Complete"}
                      </button>

                      <button
                        type="button"
                        onClick={() => deleteTask(task.id)}
                        className="rounded-xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                      >
                        🗑 Delete
                      </button>

                    </div>

                  </article>
                );
              })}

            </div>

          ) : (

            /* Empty State */
            <div className="mt-6 rounded-3xl border border-dashed border-slate-300 bg-white px-6 py-20 text-center">

              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 text-3xl">
                {filter === "Completed" ? "✅" : "📝"}
              </div>

              <h3 className="mt-5 text-xl font-bold text-slate-900">
                No {filter.toLowerCase()} tasks
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
                {filter === "All"
                  ? "You haven't added any tasks yet. Start by creating your first task above."
                  : `There are currently no ${filter.toLowerCase()} tasks in your task list.`}
              </p>

              {filter !== "All" && (
                <button
                  type="button"
                  onClick={() => setFilter("All")}
                  className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
                >
                  View All Tasks
                </button>
              )}

            </div>

          )}

        </section>

        {/* Productivity Banner */}
        <section className="mt-10 overflow-hidden rounded-3xl bg-blue-600 px-8 py-10 sm:px-12">

          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            <div className="max-w-2xl">

              <span className="text-sm font-semibold uppercase tracking-widest text-blue-100">
                Keep Going
              </span>

              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                {progress === 100
                  ? "Great job! You've completed everything."
                  : `${progress}% of your tasks are completed.`}
              </h2>

              <p className="mt-3 leading-7 text-blue-100">
                Stay consistent and keep checking off your academic and
                personal goals.
              </p>

            </div>

            <div className="shrink-0 text-center">
              <div className="text-5xl font-extrabold text-white">
                {progress}%
              </div>
              <p className="mt-1 text-sm text-blue-100">
                Completion
              </p>
            </div>

          </div>

        </section>

      </main>
    </div>
  );
}

export default Tasks;