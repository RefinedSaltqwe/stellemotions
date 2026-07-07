"use client";

import { useState } from "react";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Calendar } from "@/components/ui/calendar";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Spinner } from "@/components/ui/spinner";
import { SERVICES } from "@/constants/services";
import { cn } from "@/lib/utils";
import { createBooking } from "@/server/actions/create-booking";
import {
  inquirySchema,
  InquirySchema,
} from "@/server/actions/create-booking/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { format } from "date-fns";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import { Booking } from "@/types";

type UpsertBookingDialogProps = {
  booking?: Booking;
  className: string;
  children: React.ReactNode;
  size?:
    | "default"
    | "xs"
    | "sm"
    | "lg"
    | "icon"
    | "icon-xs"
    | "icon-sm"
    | "icon-lg"
    | null
    | undefined;
  buttonVariant:
    | "default"
    | "link"
    | "outline"
    | "secondary"
    | "ghost"
    | "destructive"
    | null
    | undefined;
};

const UpsertBookingDialog: React.FC<UpsertBookingDialogProps> = ({
  booking,
  className,
  children,
  buttonVariant,
  size,
}) => {
  const [open, setOpen] = useState(false);
  // const queryClient = useQueryClient();
  const form = useForm<InquirySchema>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      id: booking?.id ? booking.id : undefined,
      firstName: booking?.firstName ?? "",
      lastName: booking?.lastName ?? "",
      email: booking?.email ?? "",
      phone: booking?.phone ?? "",
      location: booking?.location ?? "",
      service: booking?.service ?? SERVICES.WEDDING,
      date: booking?.date ?? null,
      message: booking?.message ?? "",
    },
  });

  const { mutate: mutateData, isPending } = useMutation({
    mutationFn: createBooking,
    onSuccess: async (data) => {
      // await queryClient.invalidateQueries({
      //   queryKey: ["images"],
      // });
      toast.success(`${data.message} for ${data.data?.firstName}`);
    },
    onError: () => {
      toast.error("Something went wrong.");
    },
    onSettled: () => {
      form.reset();
    },
  });

  function onSubmit(data: InquirySchema) {
    mutateData(data);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={size} variant={buttonVariant} className={cn(className)}>
          {children}
        </Button>
      </DialogTrigger>

      <DialogContent className="flex max-h-[90dvh] flex-col sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create Booking</DialogTitle>

          <DialogDescription>Add a new booking manually.</DialogDescription>
        </DialogHeader>

        <div className="grid gap-5 py-4 overflow-y-auto px-1">
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

                      <Select
                        value={field.value}
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger aria-invalid={fieldState.invalid}>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>

                        <SelectContent>
                          <SelectItem value={SERVICES.WEDDING}>
                            Wedding
                          </SelectItem>
                          <SelectItem value={SERVICES.ENGAGEMENT}>
                            Engagement
                          </SelectItem>
                          <SelectItem value={SERVICES.COUPLE}>
                            Couple
                          </SelectItem>
                          <SelectItem value={SERVICES.FAMILY}>
                            Family
                          </SelectItem>
                          <SelectItem value={SERVICES.MATERNITY}>
                            Maternity
                          </SelectItem>
                          <SelectItem value={SERVICES.GRADUATION}>
                            Graduation
                          </SelectItem>
                          <SelectItem value={SERVICES.LIFESTYLE}>
                            Lifestyle
                          </SelectItem>
                          <SelectItem value={SERVICES.PORTRAIT}>
                            Portraits
                          </SelectItem>
                          <SelectItem value={SERVICES.EVENT}>Events</SelectItem>
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
            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancel
                </Button>
              </DialogClose>

              <Button
                type="submit"
                form="booking-inquiry-form"
                disabled={isPending}
              >
                {isPending ? <Spinner /> : "Create Booking"}
              </Button>
            </DialogFooter>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default UpsertBookingDialog;
