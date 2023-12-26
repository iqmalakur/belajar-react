/* eslint-disable react/prop-types */

export default function Item({ item }) {
  return (
    <li>
      <input type="checkbox" checked={item.checked} />
      <span style={item.checked ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.name}
      </span>
      <button>&times;</button>
    </li>
  );
}
