export default function Chicago() {
  return (
    <section aria-labelledby="about-heading">
      <div>
        <div>
          <h2 id="about-heading">Little Lemon</h2>
          <p aria-label="Location">Chicago</p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <div aria-label="Photos of chefs Adrian and Mario">
          <img
            src="/assets/mario-and-adrian-a.jpg"
            alt="Chef Mario preparing a dish in the Little Lemon kitchen"
            width={180}
            height={240}
            loading="lazy"
          />
          <img
            src="/assets/mario-and-adrian-b.jpg"
            alt="Chef Adrian smiling in the Little Lemon restaurant"
            width={180}
            height={240}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
