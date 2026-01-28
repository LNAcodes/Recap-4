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
  const [deletingID, setDeletingID] = useState(null);

  function handleAddColor(newColorData) {
    const newColor = {
      id: uid(),
      role: newColorData.role,
      hex: newColorData.hex,
      contrastText: newColorData.contrastText,
    };

    setColors([newColor, ...colors]);
  }

  const handleDelete = (id) => {
    const newColorData = colors.filter((color) => color.id !== id);
    setColors(newColorData);
  };
  return (
    <>
      <h1>Theme Creator</h1>
      <ColorForm onSubmitColor={handleAddColor} />
      {colors.map((color) => (
        <Color key={color.id} color={color} />
      ))}
    </>
  );
}

export default App;
