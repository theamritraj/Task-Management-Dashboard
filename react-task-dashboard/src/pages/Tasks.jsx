import { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState({ title: "", description: "" });
  const [errors, setErrors] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { query } = useSearch();

  // Load tasks from localStorage or set default tasks
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks && storedTasks.length > 0) {
      setTasks(storedTasks);
    } else {
      const defaultTasks = [
        {
          title: "Complete React Project",
          description: "Finish the frontend for the dashboard module",
        },
        {
          title: "Team Meeting",
          description: "Attend the weekly sync-up at 10 AM",
        },
        {
          title: "Code Review",
          description: "Review pull requests on GitHub",
        },
        {
          title: "Learning",
          description: "Watch React useEffect tutorials",
        },
      ];
      setTasks(defaultTasks);
      localStorage.setItem("tasks", JSON.stringify(defaultTasks));
    }
  }, []);

  // Save tasks to localStorage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const validate = () => {
    let newErrors = {};
    if (!taskInput.title.trim()) newErrors.title = "Title is required";
    if (!taskInput.description.trim()) newErrors.description = "Description is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    if (isEditing) {
      const updated = [...tasks];
      updated[editIndex] = taskInput;
      setTasks(updated);
      setIsEditing(false);
      setEditIndex(null);
    } else {
      setTasks([...tasks, taskInput]);
    }

    setTaskInput({ title: "", description: "" });
    setErrors({});
    setIsModalOpen(false);
  };

  const handleEdit = (index) => {
    setTaskInput(tasks[index]);
    setIsEditing(true);
    setEditIndex(index);
    setIsModalOpen(true);
  };

  const handleDelete = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(query.toLowerCase()) ||
    task.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-1">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 mb-3">
        <h2 className="text-2xl font-bold">My Tasks</h2>
        <button
          onClick={() => {
            setIsModalOpen(true);
            setIsEditing(false);
            setTaskInput({ title: "", description: "" });
          }}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          + Add Task
        </button>
      </div>

      {/* Task List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {filteredTasks.length === 0 ? (
          <p className="text-gray-500 col-span-full">No tasks found.</p>
        ) : (
          filteredTasks.map((task, index) => (
            <div key={index} className="bg-white shadow  rounded p-4">
              <h3 className="font-semibold text-lg">{task.title}</h3>
              <p className="text-sm text-gray-600">{task.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-blue-500 text-white px-3 py-1 mt-4 rounded hover:bg-blue-600"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-3 py-1 mt-4 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0  bg-opacity-30 flex items-center justify-center px-4 z-50">
          <div className="bg-white w-full max-w-md p-6 rounded shadow-lg relative">
            <button
              className="absolute top-2 right-3 text-gray-500 text-xl"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4">
              {isEditing ? "Edit Task" : "Create Task"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block font-medium">Title</label>
                <input
                  type="text"
                  value={taskInput.title}
                  onChange={(e) =>
                    setTaskInput({ ...taskInput, title: e.target.value })
                  }
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
              </div>
              <div>
                <label className="block font-medium">Description</label>
                <textarea
                  value={taskInput.description}
                  onChange={(e) =>
                    setTaskInput({ ...taskInput, description: e.target.value })
                  }
                  className="w-full border px-3 py-2 rounded"
                />
                {errors.description && (
                  <p className="text-red-500 text-sm">{errors.description}</p>
                )}
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 rounded"
              >
                {isEditing ? "Update Task" : "Add Task"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tasks;
