import Skills from "./Skills";

export default function AboutSnippet() {
  return (
    <section className="px-4 md:px-8 pb-16 md:pb-24">
      <div className="grid grid-cols-10 gap-x-8 mx-auto max-w-[1600px]">
        <div className="col-start-2 md:col-start-3 col-end-10 md:col-end-9 mb-4 md:mb-8">
          <h3 className="font-display text-display-md text-primary-light dark:text-primary-dark">
            I am a profoundly passionate web developer.
          </h3>
        </div>
        <div className="col-start-2 md:col-start-3 col-end-10 md:col-end-8 mb-4 md:mb-8">
          <p className="text-base text-secondary-light dark:text-secondary-dark antialiased">
            I find joy in designing and crafting web applications that are
            simple and intuitive. My journey through the world of web
            development allowed me to gather a rich palette of front-end and
            back-end technologies, enabling me to turn ideas into realities.
          </p>
        </div>
        <div className="col-start-2 md:col-start-3 col-end-10 md:col-end-9 mb-4 md:mb-8">
          <Skills />
        </div>
      </div>
    </section>
  );
}
