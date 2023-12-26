/* eslint-disable react/prop-types */

import { useState } from "react";

export default function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);

  const quantityNum = [...Array(20)].map((_, idx) => (
    <option key={idx + 1} value={idx + 1}>
      {idx + 1}
    </option>
  ));

  function handleSubmit(evt) {
    evt.preventDefault();

    if (!name) {
      return;
    }

    const newItem = { id: Date.now(), name, quantity, checked: false };
    onAddItem(newItem);

    setName("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select
          value={quantity}
          onChange={(evt) => setQuantity(Number(evt.target.value))}
        >
          {quantityNum}
        </select>
        <input
          type="text"
          placeholder="nama barang..."
          value={name}
          onChange={(evt) => setName(evt.target.value)}
        />
      </div>
      <button>Tambah</button>
    </form>
  );
}
