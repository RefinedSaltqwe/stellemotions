import GalleryGrid from "./gallery-grid";

type GalleryProps = {
  images: string[];
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <section className="bg-background py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-12">
        <div className="mb-20 max-w-2xl">
          <p className="font-serif italic text-primary/70">{`Featured Collections`}</p>

          <h2 className="mt-4 font-serif text-5xl lg:text-7xl leading-none text-primary">
            Stelle Snaps
          </h2>
        </div>

        <GalleryGrid images={images} />
      </div>
    </section>
  );
};

export default Gallery;
