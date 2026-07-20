"use client";

import Heading from "@/app/(landing)/_common/heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/constants/services";
import { MinusIcon, PlusIcon } from "@phosphor-icons/react";

export default function FAQSection() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-7xl px-6">
        <div className="hidden md:block">
          <Heading textColor="black" title="Frequently Asked Questions" />
        </div>

        <div className="block md:hidden">
          <Heading textColor="black" title="FAQs" />
        </div>

        <Accordion type="single" collapsible className="mt-16 w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={faq.question}
              value={`item-${index}`}
              className="border-b"
            >
              <AccordionTrigger className="group py-6 text-left hover:no-underline">
                <div className="flex w-full items-center justify-between">
                  <span className="text-lg font-medium">{faq.question}</span>

                  <div className="relative h-6 w-6 shrink-0">
                    <PlusIcon
                      size={22}
                      weight="regular"
                      className="absolute inset-0 transition-all duration-200 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0"
                    />

                    <MinusIcon
                      size={22}
                      weight="regular"
                      className="absolute inset-0 opacity-0 transition-all duration-200 group-data-[state=open]:opacity-100"
                    />
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pb-6 pr-10 text-muted-foreground leading-7">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
