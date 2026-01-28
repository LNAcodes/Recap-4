import ColorInput from "../ColorInput/ColorInput";
import "./ColorForm.css";

export default function ColorForm({
  onSubmitColor,
  initialData = { role: "some color", hex: "#123456", contrastText: "#ffffff" },
  buttonText = "ADD COLOR",
  onCancel,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    onSubmitColor(data);
    event.target.reset();
  }

  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <label htmlFor="role">
        Role
        <br />
        <input
          type="text"
          id="role"
          name="role"
          defaultValue={initialData.role}
        />
      </label>
      <br />
      <label htmlFor="hex">
        Hex
        <br />
        <ColorInput name="hex" defaultValue={initialData.hex} />
      </label>
      <br />
      <label htmlFor="contrastText">
        Contrast Text
        <br />
        <ColorInput
          name="contrastText"
          defaultValue={initialData.contrastText}
        />
      </label>
      <br />
      <button>{buttonText}</button>
      {onCancel && (
        <button type="button" onClick={onCancel}>
          CANCEL
        </button>
      )}
    </form>
  );
}
