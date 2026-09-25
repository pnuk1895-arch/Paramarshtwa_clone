import WelcomeImage from '../../assets/heroImage/heroImage3.png'

const WelcomePage = () => {
  return (
    <section className="my-12 w-full px-4 sm:px-6 md:px-8 lg:px-10">
      <div className='max-w-6xl w-full mx-auto'>
        {/* Top section */}
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">

          {/* Left - Text */}
          <div className="flex flex-col gap-5">

            <h2 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
              Welcome To Paramarshtwa
            </h2>

            <div className="space-y-3 text-base leading-7 text-slate-600">
              <p>
                The leap of 20th century to 21st is not ordinary
                “NEXT LEVEL”. The 21st century entered to GALAXY –
                with GALA MEGA-TECHNO thrust, which was never ever
                been felt or even imagined.
              </p>

              <p>
                There comes the gangetic need for building-enclosures
                & infra development well-suited, adequately budgeted,
                environmentally-meant for their respective purposes.
                Here comes SCMG as (SC)'s Space Combine role in past
                2-decades in designing architecture are Engineering
                needs for their improvised product and “excellent
                life style” – and “eastowest” excellence for our
                products e.g. – Mansionz etc or Housing condos for
                large 30,000 dwelling plus commercial Space of
                million sq. ft. at one location with their Parking
                Upper Ground 3-tiers in Hindon river belt at low
                water of table.
              </p>

              <p>
                It was wellfelt need for SC's own support-services,
                enriched SCMG came into existence to deliver the
                Client – a single window products.
              </p>

            </div>
          </div>


          {/* Right - Image */}
          <div className="flex flex-col overflow-hidden pt-3">

            <img
              src={WelcomeImage}
              alt="Paramarshtwa construction project"
              className="aspect-video w-full object-cover h-94 object-center"
            />

            <div className="bg-linear-to-r from-orange-500 to-red-600 px-4 py-3 text-center">
              <p className="text-base font-bold text-white sm:text-lg">
                More than 50 projects were completed.
              </p>
            </div>

          </div>

        </div>


        {/* Bottom paragraph */}
        <div className="mt-10">
          <p className="text-base leading-7 text-slate-600">
            Honoured for opportunity bestowed to head as CEO, SCMG,
            which is for a value engineering having expertised global
            exposure with knowledge, including serviced UN bodies.
            An Engineer, who studied purposefully M.S. (Arch & Engg)
            comes very handy on California calling, obtained Ph. D
            (Env. Engg), PMI helps for my easy performing in CPM pert,
            3D models system and all relevant & controls of additional
            in Solar, Wind, Geo as an alternate energy as well better
            green building intelligent with Ultramodern engineering
            methodology.
          </p>
        </div>
      </div>

    </section>
  )
}

export default WelcomePage