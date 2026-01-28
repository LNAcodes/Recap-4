import { useState } from "react";
import { uid } from "uid";
import { initialColors } from "./lib/colors";
import Color from "./Components/Color/Color";
import ColorForm from "./Components/ColorForm/ColorForm";
import "./App.css";

function App() {
  const [colors, setColors] = useState(initialColors);
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
      {colors.map((color) => (
        <Color
          key={color.id}
          color={color}
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
