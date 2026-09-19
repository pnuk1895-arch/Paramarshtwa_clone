

const teamMembers = [
  {
    id: 1,
    name: "Mr. Abhishek",
    position: "Founder CEO",
    image: "https://paramarshtwa.in/images/resource/team-2.jpg",
  },
  {
    id: 2,
    name: "Mr. Abhishek",
    position: "Founder CEO",
    image: "https://paramarshtwa.in/images/resource/team-2.jpg",
  },
  {
    id: 3,
    name: "Mr. Abhishek",
    position: "Founder CEO",
    image: "https://paramarshtwa.in/images/resource/team-2.jpg",
  },
  {
    id: 4,
    name: "Mr. Abhishek",
    position: "Founder CEO",
    image: "https://paramarshtwa.in/images/resource/team-2.jpg",
  },
];

const OurTeamComponent = () => {
  return (
    <section className="bg-indigo-50 py-16 sm:py-20 lg:py-24">

      {/* ================= SECTION CONTAINER ================= */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ================= SECTION HEADING ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <p className="text-base font-medium text-blue-700 sm:text-lg">
            Our Expert Team Members
          </p>

          <h2 className="mt-5 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Our Team Is Very Expert To Help
            <br className="hidden sm:block" />
            Your Business Growth
          </h2>

        </div>


        {/* ================= TEAM GRID ================= */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="overflow-hidden rounded-sm bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              {/* ================= IMAGE ================= */}
              <div className="overflow-hidden">

                <img
                  src={member.image}
                  alt={member.name}
                  className="h-96 w-full object-cover object-top transition-transform duration-500 hover:scale-105"
                />

              </div>


              {/* ================= MEMBER INFO ================= */}
              <div className="px-4 py-5 text-center">

                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-sm font-medium text-blue-600">
                  {member.position}
                </p>

              </div>

            </article>
          ))}

        </div>

      </div>


      {/* ================= WHATSAPP BUTTON ================= */}
      <a
        href="https://wa.me/919999997869"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-8 left-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-lg transition duration-300 hover:scale-110 hover:bg-green-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-8 w-8 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.4 8.4 0 0 1-4.1-1.1L3 20l1.1-5.2A8.4 8.4 0 0 1 3 10.5 8.5 8.5 0 1 1 21 11.5Z"
          />

          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.5 9.5c.2-.5.5-.6.8-.6h.6c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.5 1 1.3 1.8 2.3 2.3l.6-.5c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.6c0 .3-.1.6-.6.8-.5.2-1.8.1-3.2-.7-1.2-.7-2.2-1.7-2.9-2.9-.8-1.4-.9-2.7-.7-3.3Z"
          />
        </svg>
      </a>


      {/* ================= CALL BUTTON ================= */}
      <a
        href="tel:+919999997869"
        aria-label="Call us"
        className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 shadow-lg transition duration-300 hover:scale-110 hover:bg-blue-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-7 w-7 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z"
          />
        </svg>
      </a>

    </section>
  );
};

export default OurTeamComponent;