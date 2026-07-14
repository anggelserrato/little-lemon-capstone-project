export default function Chicago() {
  return (
    <section aria-labelledby="about-heading" className="bg-white">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-card-600 px-card-400 py-card-600 md:grid-cols-2">
        {/* Text column */}
        <div className="flex flex-col gap-card-200">
          <h2
            id="about-heading"
            className="text-preset-1 leading-none text-charcoal"
          >
            Little Lemon
          </h2>
          <p
            aria-label="Location"
            className="-mt-card-100 text-preset-2 text-forest"
          >
            Chicago
          </p>
          <p className="text-preset-7 text-charcoal">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p className="text-preset-7 text-charcoal">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>

        {/* Images column — overlapping portrait pair */}
        <div
          aria-label="Photos of chefs Adrian and Mario"
          className="relative flex h-[320px] justify-center md:h-[380px]"
        >
          <img
            src="/images/mario-and-adrian-a.jpg"
            alt="Chef Mario preparing a dish in the Little Lemon kitchen"
            width={180}
            height={240}
            loading="lazy"
            className="absolute top-0 left-0 z-10 h-64 w-44 rounded-2xl object-cover shadow-md"
          />
          <img
            src="/images/mario-and-adrian-b.jpg"
            alt="Chef Adrian smiling in the Little Lemon restaurant"
            width={180}
            height={240}
            loading="lazy"
            className="absolute right-0 bottom-0 z-20 h-64 w-44 rounded-2xl object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
