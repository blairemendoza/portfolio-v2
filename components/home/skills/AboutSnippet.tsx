import Skills from "./Skills";

export default function AboutSnippet() {
  return (
    <section className="px-4 md:px-8 pb-16 md:pb-24">
      <div className="w-full py-16 lg:py-28 mx-auto max-w-[1600px] bg-surface-high-light dark:bg-surface-high-dark rounded-10xl lg:rounded-16xl transition-colors">
        <div className="grid grid-cols-20 mx-auto max-w-[1600px]">
          <div className="col-start-2 lg:col-start-2 col-end-[12] md:col-end-[14] mb-4 md:mb-8">
            <h3 className="font-display text-display-md text-primary-light dark:text-primary-dark">
              I am a profoundly passionate web developer.
            </h3>
          </div>
          <div className="col-start-2 lg:col-start-2 col-end-[12] md:col-end-[10] mb-4 md:mb-8">
            <p className="text-base text-secondary-light dark:text-secondary-dark antialiased">
              I find joy in designing and crafting web applications that are
              simple and intuitive. My journey through the world of web
              development allowed me to gather a rich palette of front-end and
              back-end technologies, enabling me to turn ideas into realities.
            </p>
          </div>
          <div className="col-start-2 lg:col-start-2 col-end-[12] md:col-end-[10]">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}
