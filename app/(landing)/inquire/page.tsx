import { InquiryForm, InquiryHeader } from "@/components/inquiry";

export default function InquirePage() {
  return (
    <div className="flex w-full justify-center items-center align-middle">
      <div className="py-32 flex flex-col max-w-7xl ">
        <InquiryHeader />

        <div className="mt-20 w-full px-8">
          <InquiryForm />
        </div>
      </div>
    </div>
  );
}
