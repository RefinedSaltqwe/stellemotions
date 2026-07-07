"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";
import { format } from "date-fns";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { inquirySchema } from "@/server/actions/create-booking/schema";
import { Service } from "@prisma/client";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Calendar } from "../ui/calendar";

const InquiryForm: React.FC = () => {
  const form = useForm<z.infer<typeof inquirySchema>>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      location: "",
      service: Service.WEDDING,
      date: null,
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof inquirySchema>) {
    console.log(data);
    toast("You submitted the following values:", {
      description: (
        <pre className="mt-2 w-[320px] overflow-x-auto rounded-md bg-code p-4 text-code-foreground">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    });
  }

  return (
    <Card className="w-full border-border/50 bg-background shadow-none">
      <CardHeader className="space-y-3 text-center">
        <CardTitle className="font-serif text-xl">
          {`Let's Create Something Beautiful`}
        </CardTitle>

        <CardDescription className="mx-auto max-w-lg text-base leading-relaxed">
          {`We'd love to hear your story. Fill out the form below and we'll get
          back to you within 24–48 hours.`}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form
          id="booking-inquiry-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          <FieldGroup>
            {/* First + Last Name */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* First Name */}
              <Controller
                name="firstName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>First Name</FieldLabel>

                    <Input
                      {...field}
                      placeholder="Stella"
                      aria-invalid={fieldState.invalid}
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              {/* Last Name */}
              <Controller
                name="lastName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Last Name</FieldLabel>

                    <Input
                      {...field}
                      placeholder="Doe"
                      aria-invalid={fieldState.invalid}
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* Email + Phone */}

            <div className="grid gap-6 md:grid-cols-2">
              {/* Email */}
              <Controller
                name="email"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Email Address</FieldLabel>

                    <Input
                      {...field}
                      type="email"
                      placeholder="you@example.com"
                      aria-invalid={fieldState.invalid}
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Phone */}
              <Controller
                name="phone"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Phone Number</FieldLabel>

                    <Input
                      value={field.value}
                      placeholder="(306) 555-1234"
                      autoComplete="tel"
                      onChange={(e) => {
                        const numbers = e.target.value
                          .replace(/\D/g, "")
                          .slice(0, 10);

                        let formatted = numbers;

                        if (numbers.length > 3) {
                          formatted = `(${numbers.slice(0, 3)}) ${numbers.slice(3)}`;
                        }

                        if (numbers.length > 6) {
                          formatted = `(${numbers.slice(0, 3)}) ${numbers.slice(
                            3,
                            6,
                          )}-${numbers.slice(6)}`;
                        }

                        field.onChange(formatted);
                      }}
                    />

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* Service + Date */}

            <div className="grid gap-6 md:grid-cols-2">
              {/* Service */}
              <Controller
                name="service"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Photography Service</FieldLabel>

                    <Select value={field.value} onValueChange={field.onChange}>
                      <SelectTrigger aria-invalid={fieldState.invalid}>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectItem value={Service.WEDDING}>Wedding</SelectItem>
                        <SelectItem value={Service.ENGAGEMENT}>
                          Engagement
                        </SelectItem>
                        <SelectItem value={Service.COUPLE}>Couples</SelectItem>
                        <SelectItem value={Service.FAMILY}>Family</SelectItem>
                        <SelectItem value={Service.MATERNITY}>
                          Maternity
                        </SelectItem>
                        <SelectItem value={Service.GRADUATION}>
                          Graduation
                        </SelectItem>
                        <SelectItem value={Service.PORTRAIT}>
                          Portraits
                        </SelectItem>
                        <SelectItem value={Service.EVENT}>Events</SelectItem>
                      </SelectContent>
                    </Select>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              {/* Date */}
              <Controller
                name="date"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Preferred Event Date</FieldLabel>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          type="button"
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          {field.value
                            ? format(field.value, "PPP")
                            : "Select a date"}
                        </Button>
                      </PopoverTrigger>

                      <PopoverContent align="start" className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={field.value ?? undefined}
                          onSelect={(date) => field.onChange(date ?? null)}
                          disabled={(date) => date < new Date()}
                        />
                      </PopoverContent>
                    </Popover>

                    <FieldDescription>
                      {`Don't worry if your date isn't finalized yet.`}
                    </FieldDescription>

                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>

            {/* Location */}
            <Controller
              name="location"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Event Location</FieldLabel>

                  <Input {...field} placeholder="Regina, Saskatchewan" />

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Message */}
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Tell Us About Your Day</FieldLabel>

                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      rows={7}
                      className="resize-none"
                      placeholder="Tell us about your story, venue, wedding plans, timeline, guest count, or anything you'd like us to know."
                    />

                    <InputGroupAddon align="block-end">
                      <InputGroupText>
                        {(field.value ?? "").length}/1000
                      </InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>

                  <FieldDescription>
                    {`We'd love to hear about your vision and what matters most to
                    you.`}
                  </FieldDescription>

                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter className="flex justify-between gap-4">
        <Button type="button" variant="outline" onClick={() => form.reset()}>
          Reset
        </Button>

        <Button type="submit" form="booking-inquiry-form">
          Send Inquiry
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InquiryForm;
