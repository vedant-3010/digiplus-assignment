import React, { useState, useEffect } from "react";
import "./styles.css";
import Table from "./Table";
import fakeData from "./data";

const App = () => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || fakeData
  );
  const [editedRow, setEditedRow] = useState(null);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  const handleDelete = (id) => {
    setData(data.filter((row) => row.id !== id));
  };

  const handleUpdate = (id, updatedRow) => {
    setData(data.map((row) => (row.id === id ? updatedRow : row)));
    setEditedRow(null);
  };

  const handleAdd = () => {
    const id = Math.max(...data.map((row) => row.id), 0) + 1;
    const newRow = {
      id,
      name: "New Name",
      city: "New City",
      age: 0,
      cgpa: 0
    };
    setData([...data, newRow]);
    setEditedRow(newRow);
  };

  return (
    <div className="App">
      <h2>Student Details Table</h2>
      <Table data={data} onDelete={handleDelete} onUpdate={handleUpdate} />
      <button onClick={handleAdd}>Add Row</button>
    </div>
  );
};

export default App;
