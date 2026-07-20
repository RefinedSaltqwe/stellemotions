import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { InquiryForm, InquiryHeader } from "@/components/inquiry";
import PreferEmail from "./_component/prefer-email";

export default function InquirePage() {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full max-w-7xl py-32">
        <InquiryHeader />

        <Tabs defaultValue="form" className="mt-16 mx-8">
          <TabsList className="h-auto w-full justify-start border-b rounded-none bg-transparent p-0">
            <TabsTrigger
              value="form"
              className="
                rounded-none border-0 border-b-2 border-transparent
                bg-transparent px-0 pb-5 pt-0
                text-sm font-medium uppercase tracking-widest
                text-muted-foreground shadow-none
                transition-all
                hover:text-foreground
                data-[state=active]:border-foreground
                data-[state=active]:bg-transparent
                data-[state=active]:text-foreground
                data-[state=active]:shadow-none
              "
            >
              Inquiry Form
            </TabsTrigger>

            <TabsTrigger
              value="email"
              className="
                rounded-none border-0 border-b-2 border-transparent
                bg-transparent px-0 pb-5 pt-0
                text-sm font-medium uppercase tracking-widest
                text-muted-foreground shadow-none
                transition-all
                hover:text-foreground
                data-[state=active]:border-foreground
                data-[state=active]:bg-transparent
                data-[state=active]:text-foreground
                data-[state=active]:shadow-none
              "
            >
              Direct Email
            </TabsTrigger>
          </TabsList>

          <TabsContent value="form" className="mt-16">
            <InquiryForm />
          </TabsContent>

          <TabsContent value="email" className="mt-16">
            <PreferEmail />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
