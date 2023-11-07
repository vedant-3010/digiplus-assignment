import React, { useState } from "react";

const Table = ({ data, onDelete, onUpdate }) => {
  const [editedRow, setEditedRow] = useState(null);

  const handleEdit = (row) => {
    setEditedRow({ ...row });
  };

  const handleSave = (id, updatedRow) => {
    setEditedRow(null);
    onUpdate(id, updatedRow);
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Row Num</th>
          <th>Name</th>
          <th>Location</th>
          <th>Age</th>
          <th>CGPA</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>
              {editedRow && editedRow.id === row.id ? (
                <input
                  type="text"
                  value={editedRow.name}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, name: e.target.value })
                  }
                />
              ) : (
                row.name
              )}
            </td>
            <td>
              {editedRow && editedRow.id === row.id ? (
                <input
                  type="text"
                  value={editedRow.city}
                  onChange={(e) =>
                    setEditedRow({ ...editedRow, city: e.target.value })
                  }
                />
              ) : (
                row.city
              )}
            </td>
            <td>
              {editedRow && editedRow.id === row.id ? (
                <input
                  type="number"
                  value={editedRow.age}
                  onChange={(e) =>
                    setEditedRow({
                      ...editedRow,
                      age: parseInt(e.target.value)
                    })
                  }
                />
              ) : (
                row.age
              )}
            </td>
            <td>
              {editedRow && editedRow.id === row.id ? (
                <input
                  type="number"
                  step="0.01"
                  value={editedRow.cgpa}
                  onChange={(e) =>
                    setEditedRow({
                      ...editedRow,
                      cgpa: parseFloat(e.target.value)
                    })
                  }
                />
              ) : (
                row.cgpa
              )}
            </td>
            <td>
              {editedRow && editedRow.id === row.id ? (
                <button onClick={() => handleSave(row.id, editedRow)}>
                  Save
                </button>
              ) : (
                <button onClick={() => handleEdit(row)}>Edit</button>
              )}
              <button onClick={() => onDelete(row.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
