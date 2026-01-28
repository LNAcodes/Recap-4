import ColorForm from "../ColorForm/ColorForm";
import "./Color.css";

export default function Color({
  color,
  onDeleteClick,
  onConfirmDelete,
  onCancelDelete,
  isDeleting,
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
      {!isDeleting && !isEditing && (
        <>
          <p className="color-card-headline">{color.hex}</p>
          <p>{color.role}</p>
          <p>contrast: {color.contrastText}</p>
          <button onClick={() => onDeleteClick(color.id)}>DELETE</button>
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
      {isDeleting && (
        <>
          <span className="color-card-highlight">Really delete?</span>
          <button onClick={onCancelDelete}>CANCEL</button>
          <button onClick={onConfirmDelete}>DELETE</button>
        </>
      )}
    </div>
  );
}
