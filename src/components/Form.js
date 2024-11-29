import React, { useState } from "react";

export default function Form({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      onAddTask({ id: Date.now(), description, complete: false });
      setDescription("");
  };
}
  return (
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="New Task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
