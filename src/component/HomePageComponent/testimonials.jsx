import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "MR. RAVI KUMAR",
    image: "/images/testimonial-user.png",
  },
  {
    name: "MR. RAVI KUMAR",
    image: "/images/testimonial-user.png",
  },
  {
    name: "MR. RAVI KUMAR",
    image: "/images/testimonial-user.png",
  },
];

const testimonialText =
  "SCMG is being set up through an extension to Space Combine; ahead in architecture and engineering and other tied, & putsup to project management. SCMG delivers sustainable results by partnering with clients to transfer knowledge, wisdom and skills to ensure long term success applied through all services under one roof.";

export default function Testimonials() {
  return (
    <section className="bg-slate-950 px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADING ================= */}
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Testimonials
        </h2>


        {/* ================= PEOPLE ================= */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 sm:mt-20 sm:grid-cols-3 sm:gap-6 lg:mt-24 lg:gap-12">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center"
            >

              {/* Profile Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="h-24 w-24 object-cover sm:h-24 sm:w-24 lg:h-28 lg:w-28"
              />

              {/* Name */}
              <h3 className="mt-4 text-lg font-bold text-white sm:text-base lg:text-xl">
                {testimonial.name}
              </h3>

              {/* Active Indicator */}
              {index === 1 && (
                <div className="mt-8 h-12 w-0.5 bg-orange-500" />
              )}

            </div>
          ))}

        </div>


        {/* ================= TESTIMONIAL TEXT ================= */}
        <div className="mx-auto mt-8 max-w-6xl text-center sm:mt-10 lg:mt-8">

          <p className="text-sm leading-7 text-white sm:text-base sm:leading-8 lg:text-lg lg:leading-9">
            {testimonialText}
          </p>

        </div>


        {/* ================= QUOTE DECORATION ================= */}
        <div className="mx-auto mt-10 flex max-w-xs items-center justify-center sm:mt-12">

          {/* Left Line */}
          <span className="h-0.5 flex-1 bg-orange-500" />

          {/* Quote Circle */}
          <div className="mx-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white">
            <Quote
              className="h-5 w-5 text-red-600"
              fill="currentColor"
            />
          </div>

          {/* Right Line */}
          <span className="h-0.5 flex-1 bg-orange-500" />

        </div>

      </div>

    </section>
  );
}