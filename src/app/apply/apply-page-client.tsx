"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  FileText,
  Mail,
  MapPin,
  Phone,
  Shield,
} from "lucide-react";

import { MainLayout } from "../../components/layout/main-layout";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { schoolContact } from "@/lib/school-contact";

const admissionCycle = "2026-27";
const draftStorageKey = "dia-application-draft-v1";
const submittedStorageKey = "dia-application-submission-v1";

const officeSupport = [
  {
    label: "Admissions desk",
    value: schoolContact.phoneDisplay,
    detail: "Call for class entry, process, and form guidance",
    href: schoolContact.phoneHref,
    icon: Phone,
  },
  {
    label: "Admissions email",
    value: schoolContact.emailDisplay,
    detail: "Share questions on class entry, documents, or fee review",
    href: schoolContact.onlineApplicationEnquiryHref,
    icon: Mail,
  },
  {
    label: "Campus location",
    value: schoolContact.addressLine1,
    detail: schoolContact.addressLine2,
    icon: MapPin,
  },
] as const;

const documentChecklist = [
  "Birth certificate",
  "Previous school report card or transfer certificate where applicable",
  "Recent passport-size photographs",
  "Parent or guardian address proof",
  "Medical or category certificate if required by the school",
] as const;

const stepLabels = [
  {
    title: "Student details",
    description: "Basic admission and school-entry information",
  },
  {
    title: "Family contact",
    description: "Primary family and communication details",
  },
  {
    title: "Review and confirm",
    description: "Review the draft and keep it ready for admissions review",
  },
] as const;

const classOptions = [
  "Nursery",
  "LKG",
  "UKG",
  "Class I",
  "Class II",
  "Class III",
  "Class IV",
  "Class V",
  "Class VI",
  "Class VII",
  "Class VIII",
  "Class IX",
  "Class X",
  "Class XI",
  "Class XII",
] as const;

const genderOptions = ["Girl", "Boy", "Prefer not to say"] as const;
const relationOptions = ["Father", "Mother", "Guardian"] as const;
const transportOptions = [
  "No transport needed",
  "Yes, transport needed",
  "Need route guidance first",
] as const;

type ApplicationFormState = {
  admissionSession: string;
  preferredClass: string;
  studentName: string;
  dateOfBirth: string;
  gender: string;
  previousSchool: string;
  previousBoard: string;
  parentName: string;
  relationship: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  transportRequired: string;
  notes: string;
  documentsReady: boolean;
  consent: boolean;
};

type ApplicationField = keyof ApplicationFormState;
type ApplicationErrors = Partial<Record<ApplicationField, string>>;

const defaultFormState: ApplicationFormState = {
  admissionSession: admissionCycle,
  preferredClass: "",
  studentName: "",
  dateOfBirth: "",
  gender: "",
  previousSchool: "",
  previousBoard: "",
  parentName: "",
  relationship: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  transportRequired: "",
  notes: "",
  documentsReady: false,
  consent: false,
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return phone.replace(/\D/g, "").length >= 10;
}

function getStepErrors(
  stepIndex: number,
  formData: ApplicationFormState,
): ApplicationErrors {
  const errors: ApplicationErrors = {};

  if (stepIndex === 0) {
    if (!formData.preferredClass) {
      errors.preferredClass = "Select the class you are applying for.";
    }
    if (!formData.studentName.trim()) {
      errors.studentName = "Enter the student’s full name.";
    }
    if (!formData.dateOfBirth) {
      errors.dateOfBirth = "Select the student’s date of birth.";
    }
    if (!formData.gender) {
      errors.gender = "Select a gender option.";
    }
  }

  if (stepIndex === 1) {
    if (!formData.parentName.trim()) {
      errors.parentName = "Enter the parent or guardian name.";
    }
    if (!formData.relationship) {
      errors.relationship = "Select the relationship to the student.";
    }
    if (!formData.phone.trim()) {
      errors.phone = "Enter the primary contact number.";
    } else if (!isValidPhone(formData.phone)) {
      errors.phone = "Enter a valid phone number with at least 10 digits.";
    }
    if (!formData.email.trim()) {
      errors.email = "Enter an email address.";
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Enter a valid email address.";
    }
    if (!formData.address.trim()) {
      errors.address = "Enter the current address.";
    }
    if (!formData.city.trim()) {
      errors.city = "Enter the city or area.";
    }
  }

  if (stepIndex === 2 && !formData.consent) {
    errors.consent =
      "Please confirm that the details are correct for the admissions review.";
  }

  return errors;
}

function getAllErrors(formData: ApplicationFormState) {
  return {
    ...getStepErrors(0, formData),
    ...getStepErrors(1, formData),
    ...getStepErrors(2, formData),
  };
}

function createReference() {
  const serial = Math.floor(1000 + Math.random() * 9000);
  return `DIA-${new Date().getFullYear()}-${serial}`;
}

export default function ApplyPageClient() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] =
    useState<ApplicationFormState>(defaultFormState);
  const [formErrors, setFormErrors] = useState<ApplicationErrors>({});
  const [draftStatus, setDraftStatus] = useState(
    "Start the form below. Your draft can stay on this device while you complete it.",
  );
  const [draftReady, setDraftReady] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationReference, setApplicationReference] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    try {
      const savedDraft = window.localStorage.getItem(draftStorageKey);

      if (savedDraft) {
        const parsedDraft = JSON.parse(
          savedDraft,
        ) as Partial<ApplicationFormState>;
        setFormData((previous) => ({
          ...previous,
          ...parsedDraft,
          admissionSession: admissionCycle,
        }));
        setDraftStatus(
          "A saved application draft was restored on this device.",
        );
      }
    } catch {
      setDraftStatus(
        "Continue below. This browser did not restore a previous draft.",
      );
    } finally {
      setDraftReady(true);
    }
  }, []);

  useEffect(() => {
    if (!draftReady || isSubmitted || typeof window === "undefined") {
      return;
    }

    try {
      window.localStorage.setItem(draftStorageKey, JSON.stringify(formData));
      setDraftStatus(
        "Draft saved on this device while you continue the application.",
      );
    } catch {
      setDraftStatus(
        "Continue below. This browser blocked automatic draft saving.",
      );
    }
  }, [draftReady, formData, isSubmitted]);

  function updateField<Field extends ApplicationField>(
    field: Field,
    value: ApplicationFormState[Field],
  ) {
    setFormData((previous) => ({ ...previous, [field]: value }));

    setFormErrors((previous) => {
      if (!previous[field]) {
        return previous;
      }

      const nextErrors = { ...previous };
      delete nextErrors[field];
      return nextErrors;
    });
  }

  function moveToNextStep() {
    const nextErrors = getStepErrors(currentStep, formData);

    if (Object.keys(nextErrors).length > 0) {
      setFormErrors(nextErrors);
      return;
    }

    setFormErrors({});
    setCurrentStep((previous) => Math.min(previous + 1, stepLabels.length - 1));
  }

  function moveToPreviousStep() {
    setFormErrors({});
    setCurrentStep((previous) => Math.max(previous - 1, 0));
  }

  function resetDraft() {
    setFormData(defaultFormState);
    setFormErrors({});
    setCurrentStep(0);
    setApplicationReference("");
    setIsSubmitted(false);
    setDraftStatus("Start a fresh application draft on this device.");

    if (typeof window !== "undefined") {
      window.localStorage.removeItem(draftStorageKey);
      window.localStorage.removeItem(submittedStorageKey);
    }
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const allErrors = getAllErrors(formData);

    if (Object.keys(allErrors).length > 0) {
      setFormErrors(allErrors);

      if (Object.keys(getStepErrors(0, formData)).length > 0) {
        setCurrentStep(0);
      } else if (Object.keys(getStepErrors(1, formData)).length > 0) {
        setCurrentStep(1);
      } else {
        setCurrentStep(2);
      }

      return;
    }

    const reference = createReference();
    setApplicationReference(reference);
    setIsSubmitted(true);
    setDraftStatus(
      "Application draft completed on this device. Review the next admissions step below.",
    );

    if (typeof window !== "undefined") {
      window.localStorage.removeItem(draftStorageKey);
      window.localStorage.setItem(
        submittedStorageKey,
        JSON.stringify({
          reference,
          submittedAt: new Date().toISOString(),
          formData,
        }),
      );
    }
  }

  const progressValue = Math.round(
    ((currentStep + 1) / stepLabels.length) * 100,
  );
  const progressWidth = `${progressValue}%`;

  return (
    <MainLayout>
      <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fffdfb_0%,#fff7f1_46%,#ffffff_100%)] pt-16 pb-20 sm:pt-20 sm:pb-24">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/5 to-transparent" />

        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
              Apply Online {admissionCycle}
            </Badge>
            <h1 className="mt-5 text-4xl font-bold font-heading leading-tight text-primary sm:text-5xl lg:text-[3.35rem]">
              Start your admission application draft for Nursery to Class XII
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
              Fill in the student and family details once, review the draft, and
              keep everything ready for the next admissions interaction.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_360px] xl:items-start">
            <Card className="rounded-[32px] border-slate-200/80 bg-white shadow-[0_24px_70px_-50px_rgba(15,23,42,0.24)]">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col gap-4 border-b border-slate-200 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <Badge className="border border-primary/10 bg-primary/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-primary hover:bg-primary/5">
                      Online Application
                    </Badge>
                    <h2 className="mt-4 text-3xl font-bold font-heading leading-tight text-slate-950 sm:text-4xl">
                      Complete the form in 3 clear steps
                    </h2>
                  </div>
                  <div className="min-w-0 rounded-[20px] border border-primary/10 bg-primary/5 px-4 py-3 text-sm leading-6 text-primary break-words sm:max-w-xs">
                    {draftStatus}
                  </div>
                </div>

                {!isSubmitted ? (
                  <form onSubmit={handleSubmit} className="mt-8">
                    <div className="rounded-[24px] border border-slate-200 bg-slate-50 p-4 sm:p-5">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                            Step {currentStep + 1} of {stepLabels.length}
                          </p>
                          <p className="mt-1 text-sm font-semibold text-slate-900">
                            {stepLabels[currentStep].title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-slate-600">
                            {stepLabels[currentStep].description}
                          </p>
                        </div>
                        <div className="text-sm font-semibold text-primary">
                          {progressValue}%
                        </div>
                      </div>

                      <div className="mt-4 h-2 rounded-full bg-slate-200">
                        <div
                          className="h-2 rounded-full bg-primary transition-all duration-300"
                          style={{ width: progressWidth }}
                        />
                      </div>

                      <div className="mt-4 grid gap-3 md:grid-cols-3">
                        {stepLabels.map((step, index) => {
                          const isCurrent = currentStep === index;
                          const isComplete = currentStep > index;

                          return (
                            <button
                              key={step.title}
                              type="button"
                              onClick={() => {
                                if (index < currentStep) {
                                  setCurrentStep(index);
                                  setFormErrors({});
                                }
                              }}
                              disabled={index > currentStep}
                              className={`rounded-[20px] border px-4 py-3 text-left transition-colors ${
                                isCurrent
                                  ? "border-primary bg-primary text-white"
                                  : isComplete
                                    ? "border-primary/20 bg-primary/5 text-primary"
                                    : "border-slate-200 bg-white text-slate-500"
                              } ${index > currentStep ? "cursor-not-allowed opacity-70" : ""}`}
                            >
                              <p className="text-xs font-semibold uppercase tracking-[0.16em]">
                                Step {index + 1}
                              </p>
                              <p className="mt-1 text-sm font-bold">
                                {step.title}
                              </p>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {currentStep === 0 ? (
                      <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        <div className="sm:col-span-2">
                          <label className="text-sm font-semibold text-slate-900">
                            Admission session
                          </label>
                          <Input
                            value={formData.admissionSession}
                            readOnly
                            className="mt-2 h-11 rounded-xl border-slate-200 bg-slate-50 text-slate-700"
                          />
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-900">
                            Preferred class
                          </label>
                          <select
                            value={formData.preferredClass}
                            onChange={(event) =>
                              updateField("preferredClass", event.target.value)
                            }
                            aria-invalid={Boolean(formErrors.preferredClass)}
                            className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                          >
                            <option value="">Select class</option>
                            {classOptions.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                          {formErrors.preferredClass ? (
                            <p className="mt-2 text-sm text-red-600">
                              {formErrors.preferredClass}
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-900">
                            Student full name
                          </label>
                          <Input
                            value={formData.studentName}
                            onChange={(event) =>
                              updateField("studentName", event.target.value)
                            }
                            placeholder="Enter the student’s full name"
                            aria-invalid={Boolean(formErrors.studentName)}
                            className="mt-2 h-11 rounded-xl border-slate-200 bg-white"
                          />
                          {formErrors.studentName ? (
                            <p className="mt-2 text-sm text-red-600">
                              {formErrors.studentName}
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-900">
                            Date of birth
                          </label>
                          <Input
                            type="date"
                            value={formData.dateOfBirth}
                            onChange={(event) =>
                              updateField("dateOfBirth", event.target.value)
                            }
                            aria-invalid={Boolean(formErrors.dateOfBirth)}
                            className="mt-2 h-11 rounded-xl border-slate-200 bg-white"
                          />
                          {formErrors.dateOfBirth ? (
                            <p className="mt-2 text-sm text-red-600">
                              {formErrors.dateOfBirth}
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-900">
                            Gender
                          </label>
                          <select
                            value={formData.gender}
                            onChange={(event) =>
                              updateField("gender", event.target.value)
                            }
                            aria-invalid={Boolean(formErrors.gender)}
                            className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                          >
                            <option value="">Select gender</option>
                            {genderOptions.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                          {formErrors.gender ? (
                            <p className="mt-2 text-sm text-red-600">
                              {formErrors.gender}
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-900">
                            Previous school
                          </label>
                          <Input
                            value={formData.previousSchool}
                            onChange={(event) =>
                              updateField("previousSchool", event.target.value)
                            }
                            placeholder="Optional for fresh entry levels"
                            className="mt-2 h-11 rounded-xl border-slate-200 bg-white"
                          />
                        </div>

                        <div className="sm:col-span-2">
                          <label className="text-sm font-semibold text-slate-900">
                            Previous board or curriculum
                          </label>
                          <Input
                            value={formData.previousBoard}
                            onChange={(event) =>
                              updateField("previousBoard", event.target.value)
                            }
                            placeholder="Example: CBSE, ICSE, State Board, or Not Applicable"
                            className="mt-2 h-11 rounded-xl border-slate-200 bg-white"
                          />
                        </div>
                      </div>
                    ) : null}

                    {currentStep === 1 ? (
                      <div className="mt-8 grid gap-5 sm:grid-cols-2">
                        <div>
                          <label className="text-sm font-semibold text-slate-900">
                            Parent or guardian name
                          </label>
                          <Input
                            value={formData.parentName}
                            onChange={(event) =>
                              updateField("parentName", event.target.value)
                            }
                            placeholder="Enter the primary parent or guardian name"
                            aria-invalid={Boolean(formErrors.parentName)}
                            className="mt-2 h-11 rounded-xl border-slate-200 bg-white"
                          />
                          {formErrors.parentName ? (
                            <p className="mt-2 text-sm text-red-600">
                              {formErrors.parentName}
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-900">
                            Relationship to student
                          </label>
                          <select
                            value={formData.relationship}
                            onChange={(event) =>
                              updateField("relationship", event.target.value)
                            }
                            aria-invalid={Boolean(formErrors.relationship)}
                            className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                          >
                            <option value="">Select relationship</option>
                            {relationOptions.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                          {formErrors.relationship ? (
                            <p className="mt-2 text-sm text-red-600">
                              {formErrors.relationship}
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-900">
                            Mobile number
                          </label>
                          <Input
                            type="tel"
                            value={formData.phone}
                            onChange={(event) =>
                              updateField("phone", event.target.value)
                            }
                            placeholder="Enter the primary phone number"
                            aria-invalid={Boolean(formErrors.phone)}
                            className="mt-2 h-11 rounded-xl border-slate-200 bg-white"
                          />
                          {formErrors.phone ? (
                            <p className="mt-2 text-sm text-red-600">
                              {formErrors.phone}
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-900">
                            Email address
                          </label>
                          <Input
                            type="email"
                            value={formData.email}
                            onChange={(event) =>
                              updateField("email", event.target.value)
                            }
                            placeholder="Enter the primary email address"
                            aria-invalid={Boolean(formErrors.email)}
                            className="mt-2 h-11 rounded-xl border-slate-200 bg-white"
                          />
                          {formErrors.email ? (
                            <p className="mt-2 text-sm text-red-600">
                              {formErrors.email}
                            </p>
                          ) : null}
                        </div>

                        <div className="sm:col-span-2">
                          <label className="text-sm font-semibold text-slate-900">
                            Current address
                          </label>
                          <Textarea
                            value={formData.address}
                            onChange={(event) =>
                              updateField("address", event.target.value)
                            }
                            placeholder="Enter the full address used for school communication"
                            aria-invalid={Boolean(formErrors.address)}
                            className="mt-2 min-h-[120px] rounded-xl border-slate-200 bg-white"
                          />
                          {formErrors.address ? (
                            <p className="mt-2 text-sm text-red-600">
                              {formErrors.address}
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-900">
                            City or area
                          </label>
                          <Input
                            value={formData.city}
                            onChange={(event) =>
                              updateField("city", event.target.value)
                            }
                            placeholder="Example: Sirsaganj or nearby area"
                            aria-invalid={Boolean(formErrors.city)}
                            className="mt-2 h-11 rounded-xl border-slate-200 bg-white"
                          />
                          {formErrors.city ? (
                            <p className="mt-2 text-sm text-red-600">
                              {formErrors.city}
                            </p>
                          ) : null}
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-900">
                            Transport requirement
                          </label>
                          <select
                            value={formData.transportRequired}
                            onChange={(event) =>
                              updateField(
                                "transportRequired",
                                event.target.value,
                              )
                            }
                            className="mt-2 h-11 w-full rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
                          >
                            <option value="">Select preference</option>
                            {transportOptions.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    ) : null}

                    {currentStep === 2 ? (
                      <div className="mt-8 space-y-6">
                        <div className="grid gap-5 lg:grid-cols-2">
                          <Card className="rounded-[24px] border-slate-200/80 bg-slate-50 shadow-none">
                            <CardContent className="p-5">
                              <h3 className="text-lg font-bold font-heading text-slate-950">
                                Student summary
                              </h3>
                              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                                <p>
                                  <span className="font-semibold text-slate-950">
                                    Session:
                                  </span>{" "}
                                  {formData.admissionSession}
                                </p>
                                <p>
                                  <span className="font-semibold text-slate-950">
                                    Preferred class:
                                  </span>{" "}
                                  {formData.preferredClass || "Not shared yet"}
                                </p>
                                <p>
                                  <span className="font-semibold text-slate-950">
                                    Student name:
                                  </span>{" "}
                                  {formData.studentName || "Not shared yet"}
                                </p>
                                <p>
                                  <span className="font-semibold text-slate-950">
                                    Date of birth:
                                  </span>{" "}
                                  {formData.dateOfBirth || "Not shared yet"}
                                </p>
                                <p>
                                  <span className="font-semibold text-slate-950">
                                    Gender:
                                  </span>{" "}
                                  {formData.gender || "Not shared yet"}
                                </p>
                                <p>
                                  <span className="font-semibold text-slate-950">
                                    Previous school:
                                  </span>{" "}
                                  {formData.previousSchool ||
                                    "Not applicable or not shared"}
                                </p>
                                <p>
                                  <span className="font-semibold text-slate-950">
                                    Previous board:
                                  </span>{" "}
                                  {formData.previousBoard ||
                                    "Not applicable or not shared"}
                                </p>
                              </div>
                            </CardContent>
                          </Card>

                          <Card className="rounded-[24px] border-slate-200/80 bg-slate-50 shadow-none">
                            <CardContent className="p-5">
                              <h3 className="text-lg font-bold font-heading text-slate-950">
                                Family summary
                              </h3>
                              <div className="mt-4 space-y-3 text-sm leading-6 text-slate-700">
                                <p>
                                  <span className="font-semibold text-slate-950">
                                    Family or guardian:
                                  </span>{" "}
                                  {formData.parentName || "Not shared yet"}
                                </p>
                                <p>
                                  <span className="font-semibold text-slate-950">
                                    Relationship:
                                  </span>{" "}
                                  {formData.relationship || "Not shared yet"}
                                </p>
                                <p>
                                  <span className="font-semibold text-slate-950">
                                    Phone:
                                  </span>{" "}
                                  {formData.phone || "Not shared yet"}
                                </p>
                                <p>
                                  <span className="font-semibold text-slate-950">
                                    Email:
                                  </span>{" "}
                                  {formData.email || "Not shared yet"}
                                </p>
                                <p>
                                  <span className="font-semibold text-slate-950">
                                    Address:
                                  </span>{" "}
                                  {formData.address || "Not shared yet"}
                                </p>
                                <p>
                                  <span className="font-semibold text-slate-950">
                                    City or area:
                                  </span>{" "}
                                  {formData.city || "Not shared yet"}
                                </p>
                                <p>
                                  <span className="font-semibold text-slate-950">
                                    Transport:
                                  </span>{" "}
                                  {formData.transportRequired ||
                                    "Will be confirmed later"}
                                </p>
                              </div>
                            </CardContent>
                          </Card>
                        </div>

                        <div>
                          <label className="text-sm font-semibold text-slate-900">
                            Notes for the admissions office
                          </label>
                          <Textarea
                            value={formData.notes}
                            onChange={(event) =>
                              updateField("notes", event.target.value)
                            }
                            placeholder="Share anything important about class entry, sibling details, academic background, or transport questions"
                            className="mt-2 min-h-[120px] rounded-xl border-slate-200 bg-white"
                          />
                        </div>

                        <div className="space-y-4 rounded-[24px] border border-slate-200 bg-slate-50 p-5">
                          <label className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                            <input
                              type="checkbox"
                              checked={formData.documentsReady}
                              onChange={(event) =>
                                updateField(
                                  "documentsReady",
                                  event.target.checked,
                                )
                              }
                              className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/30"
                            />
                            <span>
                              Main documents are ready or will be arranged
                              before the admissions review.
                            </span>
                          </label>

                          <label className="flex items-start gap-3 text-sm leading-6 text-slate-700">
                            <input
                              type="checkbox"
                              checked={formData.consent}
                              onChange={(event) =>
                                updateField("consent", event.target.checked)
                              }
                              className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary/30"
                            />
                            <span>
                              I confirm that the details shared here are correct
                              for the admissions review.
                            </span>
                          </label>

                          {formErrors.consent ? (
                            <p className="text-sm text-red-600">
                              {formErrors.consent}
                            </p>
                          ) : null}
                        </div>
                      </div>
                    ) : null}

                    <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row sm:justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={moveToPreviousStep}
                        disabled={currentStep === 0}
                        className="border-slate-200 text-slate-700 hover:bg-slate-100"
                      >
                        Back
                      </Button>

                      <div className="flex flex-col gap-3 sm:flex-row">
                        <Button
                          type="button"
                          variant="ghost"
                          className="text-primary hover:bg-primary/5"
                          onClick={resetDraft}
                        >
                          Clear draft
                        </Button>

                        {currentStep < stepLabels.length - 1 ? (
                          <Button
                            type="button"
                            onClick={moveToNextStep}
                            className="bg-primary text-white hover:bg-primary/90"
                          >
                            Continue
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        ) : (
                          <Button
                            type="submit"
                            className="bg-primary text-white hover:bg-primary/90"
                          >
                            Finish Application Draft
                            <CheckCircle2 className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </form>
                ) : (
                  <div className="mt-8 rounded-[28px] border border-emerald-200 bg-emerald-50 p-6 sm:p-8">
                    <Badge className="border border-emerald-200 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700 hover:bg-white">
                      Draft Ready
                    </Badge>
                    <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950 sm:text-3xl">
                      Your application draft has been completed
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-700 sm:text-base">
                      Keep this reference for your own record, then move to the
                      admissions process or contact the school office for the
                      next discussion on documents, fees, and class
                      availability.
                    </p>

                    <div className="mt-6 rounded-[24px] border border-emerald-200 bg-white px-5 py-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                        Application reference
                      </p>
                      <p className="mt-2 break-all text-2xl font-bold text-primary">
                        {applicationReference}
                      </p>
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      <Button
                        asChild
                        size="lg"
                        className="bg-primary text-white hover:bg-primary/90"
                      >
                        <Link href="/admissions/process">
                          Review Admission Process
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button
                        asChild
                        size="lg"
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        <Link href="/contact">Contact Admissions</Link>
                      </Button>
                    </div>

                    <Button
                      type="button"
                      variant="ghost"
                      onClick={resetDraft}
                      className="mt-5 text-primary hover:bg-primary/5"
                    >
                      Start a new application draft
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="rounded-[28px] border-slate-200/80 bg-white shadow-[0_20px_60px_-46px_rgba(15,23,42,0.22)]">
                <CardContent className="p-6 sm:p-7">
                  <Badge className="border border-primary/10 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
                    Admissions Help
                  </Badge>
                  <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950">
                    Contact the school if you need help while filling the form
                  </h3>

                  <div className="mt-6 space-y-4">
                    {officeSupport.map((item) => {
                      const Icon = item.icon;

                      return (
                        <div
                          key={item.label}
                          className="rounded-[22px] border border-slate-200 bg-slate-50 px-4 py-4"
                        >
                          <div className="flex items-start gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                              <Icon className="h-5 w-5" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                                {item.label}
                              </p>
                              {"href" in item ? (
                                <Link
                                  href={item.href}
                                  className="mt-1 block break-words text-sm font-semibold text-primary hover:underline"
                                >
                                  {item.value}
                                </Link>
                              ) : (
                                <p className="mt-1 break-words text-sm font-semibold text-slate-900">
                                  {item.value}
                                </p>
                              )}
                              <p className="mt-1 text-sm leading-6 text-slate-600">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[28px] border-slate-200/80 bg-slate-50 shadow-none">
                <CardContent className="p-6 sm:p-7">
                  <Badge className="border border-primary/10 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-white">
                    Document Checklist
                  </Badge>
                  <h3 className="mt-5 text-2xl font-bold font-heading text-slate-950">
                    Keep these documents ready for admissions review
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {documentChecklist.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm leading-6 text-slate-700">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 rounded-[24px] border border-amber-200 bg-amber-50 px-4 py-4">
                    <div className="flex items-start gap-3">
                      <Shield className="mt-0.5 h-5 w-5 shrink-0 text-amber-700" />
                      <p className="text-sm leading-6 text-amber-900">
                        Filling this form does not by itself confirm admission.
                        The school reviews documents and shares the next update
                        according to class-wise seat availability.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
