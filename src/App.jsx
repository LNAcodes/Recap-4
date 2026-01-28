import { useState } from "react";
import { uid } from "uid";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";
import useLocalStorageState from "use-local-storage-state";

function App() {
  const [colors, setColors] = useLocalStorageState("colors", {
    defaultValue: initialColors,
  });
  const [deletingId, setDeletingId] = useState(null);
  const [editId, setEditId] = useState(null);

  function handleAddColor(newColorData) {
    const newColor = {
      id: uid(),
      role: newColorData.role,
      hex: newColorData.hex,
      contrastText: newColorData.contrastText,
    };

    setColors([newColor, ...colors]);
  }

  function handleDeleteClick(id) {
    setDeletingId(id);
  }

  function handleConfirmDelete() {
    const newColors = colors.filter((color) => color.id !== deletingId);
    setColors(newColors);
    setDeletingId(null);
  }

  function handleCancelDelete() {
    setDeletingId(null);
  }
  function handleEditClick(id) {
    setEditId(id);
  }

  function handleUpdateColor(updatedColorData) {
    const updatedColors = colors.map((color) =>
      color.id === editId
        ? {
            ...color,
            role: updatedColorData.role,
            hex: updatedColorData.hex,
            contrastText: updatedColorData.contrastText,
          }
        : color,
    );
    setColors(updatedColors);
    setEditId(null);
  }

  function handleCancelEdit() {
    setEditId(null);
  }

  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.length === 0 && <p>Have fun adding colors!</p>}
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
          onDeleteClick={handleDeleteClick}
          onConfirmDelete={handleConfirmDelete}
          onCancelDelete={handleCancelDelete}
          isDeleting={deletingId === color.id}
          onEditClick={handleEditClick}
          onCancelEdit={handleCancelEdit}
          onUpdateColor={handleUpdateColor}
          isEditing={editId === color.id}
        />
      ))}
    </>
  );
}

export default App;
