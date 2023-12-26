const quantityNum = Array(20).map((_, idx) => (
  <option key={idx + 1} value={idx + 1}>
    {idx + 1}
  </option>
));

export default function Form() {
  return (
    <form className="add-form">
      <h3>Hari ini belanja apa kita?</h3>
      <div>
        <select>{quantityNum}</select>
        <input type="text" placeholder="nama barang..." />
      </div>
      <button>Tambah</button>
    </form>
  );
}
