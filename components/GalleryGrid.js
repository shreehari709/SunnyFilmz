export default function GalleryGrid() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "10px" }}>
      <div style={{ background: "#eee", height: "150px" }}>Photo 1</div>
      <div style={{ background: "#eee", height: "150px" }}>Photo 2</div>
      <div style={{ background: "#eee", height: "150px" }}>Photo 3</div>
    </div>
  );
}
