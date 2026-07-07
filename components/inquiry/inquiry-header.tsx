export default function InquiryHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center px-8">
      <p className="text-xs uppercase tracking-[0.35em] text-muted-foreground">
        INQUIRE
      </p>

      <h1 className="mt-6 font-serif text-5xl md:text-6xl lg:text-7xl">
        {`Let's Tell Your Story.`}
      </h1>

      <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
        {`Whether you're planning a wedding, celebrating a milestone, or
        documenting this season of life, we'd love to hear what you have in
        mind.`}
      </p>
    </div>
  );
}
