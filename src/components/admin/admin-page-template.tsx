import { CheckCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type AdminMetric = {
  label: string;
  value: string;
  detail: string;
};

type AdminHighlight = {
  title: string;
  description: string;
};

type AdminWorkflowStep = {
  title: string;
  description: string;
};

type AdminRecord = {
  title: string;
  meta: string;
  status: string;
};

type AdminPageTemplateProps = {
  section: string;
  title: string;
  description: string;
  metrics: AdminMetric[];
  highlights: AdminHighlight[];
  workflowTitle: string;
  workflow: AdminWorkflowStep[];
  recordsTitle: string;
  records: AdminRecord[];
  noteTitle: string;
  note: string;
};

function getStatusTone(status: string) {
  const normalizedStatus = status.toLowerCase();

  if (normalizedStatus.includes("active") || normalizedStatus.includes("live")) {
    return "border-emerald-200 bg-emerald-50 text-emerald-700";
  }

  if (normalizedStatus.includes("pending") || normalizedStatus.includes("review")) {
    return "border-amber-200 bg-amber-50 text-amber-700";
  }

  if (normalizedStatus.includes("draft") || normalizedStatus.includes("queued")) {
    return "border-slate-200 bg-slate-100 text-slate-700";
  }

  return "border-primary/10 bg-primary/5 text-primary";
}

export function AdminPageTemplate({
  section,
  title,
  description,
  metrics,
  highlights,
  workflowTitle,
  workflow,
  recordsTitle,
  records,
  noteTitle,
  note,
}: AdminPageTemplateProps) {
  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[34px] border border-slate-200/80 bg-white shadow-[0_24px_70px_-50px_rgba(15,23,42,0.22)]">
        <div className="border-b border-slate-200/80 bg-[linear-gradient(180deg,#fff8f4_0%,#ffffff_100%)] px-6 py-6 sm:px-8">
          <Badge className="border border-primary/10 bg-primary/5 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary hover:bg-primary/5">
            {section}
          </Badge>
          <h1 className="mt-4 text-3xl font-bold font-heading text-slate-950 sm:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
            {description}
          </p>
        </div>

        <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4 sm:p-8">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4"
            >
              <p className="text-2xl font-bold text-slate-950">{metric.value}</p>
              <p className="mt-1 text-sm font-semibold text-slate-700">
                {metric.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1.1fr)_390px]">
        <div className="space-y-6">
          <Card className="rounded-[30px] border-slate-200/80 bg-white shadow-[0_22px_70px_-52px_rgba(15,23,42,0.2)]">
            <CardContent className="p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Focus Areas
              </p>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {highlights.map((highlight) => (
                  <div
                    key={highlight.title}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <h2 className="text-base font-bold text-slate-950">
                      {highlight.title}
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {highlight.description}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[30px] border-slate-200/80 bg-white shadow-[0_22px_70px_-52px_rgba(15,23,42,0.2)]">
            <CardContent className="p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {workflowTitle}
              </p>
              <div className="mt-5 space-y-4">
                {workflow.map((step) => (
                  <div key={step.title} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <h3 className="text-base font-bold text-slate-950">
                        {step.title}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card className="rounded-[30px] border-slate-200/80 bg-white shadow-[0_22px_70px_-52px_rgba(15,23,42,0.2)]">
            <CardContent className="p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                {recordsTitle}
              </p>
              <div className="mt-5 space-y-4">
                {records.map((record) => (
                  <div
                    key={record.title}
                    className="rounded-[24px] border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-base font-bold text-slate-950">
                          {record.title}
                        </h3>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          {record.meta}
                        </p>
                      </div>
                      <div
                        className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] ${getStatusTone(record.status)}`}
                      >
                        {record.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-[30px] border-0 bg-slate-950 text-white shadow-[0_24px_70px_-52px_rgba(15,23,42,0.45)]">
            <CardContent className="p-6 sm:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
                {noteTitle}
              </p>
              <p className="mt-4 text-sm leading-7 text-white/78">
                {note}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}