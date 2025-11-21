import img1 from "../assets/gallery/img1.jpeg";
import img2 from "../assets/gallery/img2.jpeg";
import img3 from "../assets/gallery/img3.jpeg";
import img4 from "../assets/gallery/img4.jpeg";
import img5 from "../assets/gallery/img5.jpeg";
import img6 from "../assets/gallery/img6.jpeg";
import DomeGallery from "./DomeGallery";

export default function GalleryPage() {
  // Base images
  const baseImages = [img1, img2, img3, img4, img5, img6];

  // Repeat images to fill the 3D sphere (you can tweak repetition count)
  const repeatedImages = Array(5)
    .fill(baseImages)
    .flat()
    .map((src, i) => ({ src, id: i }));

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: "#060010",
        overflow: "hidden",
      }}
    >
      <DomeGallery images={repeatedImages} />
    </div>
  );
}
