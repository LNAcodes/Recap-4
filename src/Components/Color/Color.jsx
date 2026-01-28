import "./Color.css";

export default function Color({
  color,
  onDeleteClick,
  onConfirmDelete,
  onCancelDelete,
  isDeleting,
}) {
  console.log(color);

  return (
    <div
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <p className="color-card-headline">{color.hex}</p>
      <p>{color.role}</p>
      <p>contrast: {color.contrastText}</p>
      {!isDeleting && (
        <button onClick={() => onDeleteClick(color.id)}>DELETE</button>
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
