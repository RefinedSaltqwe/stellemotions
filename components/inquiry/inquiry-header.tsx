import Heading from "@/app/(landing)/_common/heading";

export default function InquiryHeader() {
  return (
    <div className="mx-auto max-w-3xl text-center px-8">
      <Heading
        textColor="blackMuted"
        eyebrow="INQUIRE"
        title={`Let's Tell Your Story.`}
        description={`Whether you're planning a wedding, celebrating a milestone, or
        documenting this season of life, we'd love to hear what you have in
        mind.`}
      />
    </div>
  );
}
