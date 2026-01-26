import "./Color.css";

export default function Color({ color }) {
  console.log(color);

  const backgroundColor = color.hex;
  const textColor = color.contrastText;

  console.log("Background:", backgroundColor);
  console.log("Textcolor:", textColor);

  return (
    <div
      className="color-card"
      style={{ backgroundColor: color.hex, color: color.contrastText }}
    >
      <p className="color-card-headline">{color.hex}</p>
      <p>{color.role}</p>
      <p>contrast: {color.contrastText}</p>
    </div>
  );
}
