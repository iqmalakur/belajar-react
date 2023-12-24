/* eslint-disable react/prop-types */

export default function CounterButton({ text, handler, condition }) {
  const btnStyle = text !== "Reset!" ? {} : { margin: 20, display: "block" };

  return (
    <button onClick={handler} style={btnStyle} disabled={condition}>
      {text}
    </button>
  );
}
