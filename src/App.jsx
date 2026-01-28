import { useState } from "react";
import { uid } from "uid";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);
  const [deletingId, setDeletingId] = useState(null);

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
        />
      ))}
    </>
  );
}

export default App;
