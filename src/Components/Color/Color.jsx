import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";

export default function Color({
  color,
  onEditClick,
  onUpdateColor,
  onCancelEdit,
  isEditing,
}) {
  return (
    <div
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      {!isEditing && (
        <>
          <p className="color-card-headline">{color.hex}</p>
          <p>{color.role}</p>
          <p>contrast: {color.contrastText}</p>
          <button onClick={() => onEditClick(color.id)}>EDIT</button>
        </>
      )}

      {isEditing && (
        <ColorForm
          initialData={color}
          onSubmitColor={onUpdateColor}
          buttonText="UPDATE COLOR"
          onCancel={onCancelEdit}
        />
      )}
    </div>
  );
}
