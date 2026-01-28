export default function ColorInput({ name, defaultValue }) {
  return (
    <>
      <input type="text" id={name} name={name} defaultValue={defaultValue} />
      <input type="color" name={name} defaultValue={defaultValue} />
    </>
  );
}
