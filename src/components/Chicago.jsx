export default function Chicago() {
  return (
    <section aria-labelledby="about-heading" className="bg-forest">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-card-600 px-card-400 py-card-600 md:grid-cols-2">
        {/* Text column */}
        <div className="flex flex-col gap-card-200">
          <h2
            id="about-heading"
            className="text-preset-1 leading-none text-lemon"
          >
            Little Lemon
          </h2>
          <p
            aria-label="Location"
            className="-mt-card-100 text-preset-2 text-white"
          >
            Chicago
          </p>
          <p className="text-preset-7 text-white">
            Little Lemon is a family-owned Mediterranean restaurant located in
            the heart of Chicago. Founded by two Italian brothers, Mario and
            Adrian, the restaurant combines traditional family recipes with
            modern culinary techniques to create a warm and memorable dining
            experience.
          </p>

          <p className="text-preset-7 text-white">
            Inspired by the flavors of Italy, Greece, and Turkey, our seasonal
            menu features a carefully selected collection of fresh dishes made
            with high-quality ingredients. While Mario brings authentic recipes
            and years of culinary experience from Italy, Adrian focuses on
            creating a welcoming atmosphere and sharing the Little Lemon story
            with the local community.
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
