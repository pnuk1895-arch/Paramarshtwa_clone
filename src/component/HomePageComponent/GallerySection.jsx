import { Plus } from "lucide-react";
import image from '../../assets/AboutImage/AboutImage.png'

const galleryImages = [
  {
    id: 1,
    image: image,
    alt: "Residential building",
  },
  {
    id: 2,
    image: image,
    alt: "Architectural project",
  },
  {
    id: 3,
    image: image,
    alt: "Residential project",
  },
  {
    id: 4,
    image: image,
    alt: "Villa project",
  },
  {
    id: 5,
    image: image,
    alt: "Commercial building",
  },
  {
    id: 6,
    image: image,
    alt: "Residential complex",
  },
];

export default function Gallery() {
  return (
    <section className="w-full bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mb-12 text-center sm:mb-14 lg:mb-16">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
            Our Gallery
          </h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {galleryImages.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.alt}
                className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-orange-600/85 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <button
                  type="button"
                  aria-label={`View ${item.alt}`}
                  className="flex h-14 w-14 items-center justify-center bg-slate-900 text-white transition-transform duration-300 group-hover:scale-100"
                >
                  <Plus className="h-8 w-8" strokeWidth={2} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}