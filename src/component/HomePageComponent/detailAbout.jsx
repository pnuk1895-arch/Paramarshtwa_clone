import {
  WalletCards,
  RefreshCcw,
  ChartNoAxesCombined,
  ChartCandlestick,
} from "lucide-react";

const cards = [
  {
    title: "Our Mission",
    icon: WalletCards,
    description:
      "To make available reliable and quality product & process in increasingly demand for better quantity through schematic system control i.e. 3D modeling etc.",
  },
  {
    title: "Our Strength",
    icon: RefreshCcw,
    description:
      "Present staffing to be further enhanced qualitatively & quantitatively. Outsourcing to be practiced for specialised services with all applicability of CPM-Pert & PRIMA VERA Channellising the best INPUTS & System Organisation of Global dedicated associations",
  },
  {
    title: "Our Vision",
    icon: ChartNoAxesCombined,
    description:
      "SCMG's vision is to spearhead the process of accelerated development but overall spectrum of engineering i.e. environment, water, climate change & other needs & adaption of system control : either housing and hospitality, well-being sector or others. SCMG envisions a project management system that can help in the accelerated development through planning and expeditiously implementing projects and facilities management by functioning economically and efficiently.",
  },
  {
    title: "Our Target",
    icon: ChartCandlestick,
    description:
      "Singularly begins with surveys (all kind), Reports - Feasibility to DPR, following modern techniques & routes most affordable & update system of construction, innovative & in-practice or neo-execution with science of global options. Cost effective, quality products, built in minimum TIME Period & Value Added Costs plus Recognisation of an ICON : Professional Leader in Pre-fab Construction System & others",
  },
];

export default function DetailAbout() {
  return (
    <section className="min-h-screen bg-slate-50 text-slate-900">

      {/* ================= HERO ================= */}
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:px-8 min-[1155px]:px-0! lg:py-20">

        <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-14">

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-4xl">
            Engineering The Future, Managing Success
          </h1>

          <p className="mt-5 text-base text-slate-700 sm:text-lg">
            Your Dream Project Awaits — Get Started Today!
          </p>

        </div>

        {/* ================= CARDS ================= */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">

          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="min-h-80 rounded-md bg-slate-950 px-6 py-8 text-center shadow-sm sm:min-h-96 sm:px-10 sm:py-10"
              >

                {/* Gold Icon */}
                <div className="flex justify-center">
                  <Icon
                    className="h-16 w-16 text-amber-500 sm:h-20 sm:w-20"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h2 className="mt-5 text-2xl font-bold text-white sm:text-2xl">
                  {card.title}
                </h2>

                {/* Description */}
                <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white sm:text-base sm:leading-7">
                  {card.description}
                </p>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}