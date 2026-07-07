import { InquiryForm, InquiryHeader } from "@/components/inquiry";

export default function InquirePage() {
  return (
    <div className="container py-32 flex flex-col max-w-7xl justify-center items-center">
      <InquiryHeader />

      <div className="mt-20 w-full px-8">
        <InquiryForm />
      </div>
    </div>
  );
}
