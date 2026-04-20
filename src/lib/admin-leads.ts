export type LeadStage =
  | "new"
  | "contacted"
  | "qualified"
  | "visit-scheduled"
  | "docs-pending"
  | "negotiation"
  | "enrolled";

export type LeadPriority = "hot" | "high" | "medium" | "low";

export type LeadTaskStatus = "open" | "waiting" | "done";

export type AdminLeadTask = {
  id: string;
  title: string;
  due: string;
  status: LeadTaskStatus;
};

export type AdminLeadActivity = {
  id: string;
  type: "note" | "call" | "email" | "meeting" | "system";
  title: string;
  detail: string;
  at: string;
  owner: string;
};

export type AdminLead = {
  id: string;
  parentName: string;
  studentName: string;
  classInterest: string;
  source: string;
  stage: LeadStage;
  priority: LeadPriority;
  owner: {
    name: string;
    initials: string;
    team: string;
  };
  phone: string;
  email: string;
  location: string;
  campusPreference: string;
  session: string;
  score: number;
  lastContactAt: string;
  nextActionAt: string;
  nextActionType: string;
  summary: string;
  valueBand: string;
  tags: string[];
  requirements: string[];
  notes: string[];
  tasks: AdminLeadTask[];
  activities: AdminLeadActivity[];
};

export const leadStageFlow: LeadStage[] = [
  "new",
  "contacted",
  "qualified",
  "visit-scheduled",
  "docs-pending",
  "negotiation",
  "enrolled",
];

export const leadStageLabels: Record<LeadStage, string> = {
  new: "New",
  contacted: "Contacted",
  qualified: "Qualified",
  "visit-scheduled": "Visit Scheduled",
  "docs-pending": "Docs Pending",
  negotiation: "Decision Pending",
  enrolled: "Enrolled",
};

export const leadPriorityLabels: Record<LeadPriority, string> = {
  hot: "Hot",
  high: "High",
  medium: "Medium",
  low: "Low",
};

export const adminLeads: AdminLead[] = [
  {
    id: "ananya-singh",
    parentName: "Priya Singh",
    studentName: "Ananya Singh",
    classInterest: "Grade VII",
    source: "Website form",
    stage: "qualified",
    priority: "hot",
    owner: {
      name: "Aditi Nair",
      initials: "AN",
      team: "Admissions Desk",
    },
    phone: "+91 98765 00421",
    email: "priya.singh@example.com",
    location: "Yelahanka",
    campusPreference: "Main Campus",
    session: "2026-27",
    score: 88,
    lastContactAt: "Today, 11:20 AM",
    nextActionAt: "Today, 3:30 PM",
    nextActionType: "Call parent and lock Saturday visit slot",
    summary:
      "Parent compared Grade VII fee structure, transport timing, and maths faculty support. Interested in a same-week campus visit before making a final shortlist.",
    valueBand: "Standard fee plan + transport",
    tags: ["Sibling studying", "Fee discussion", "STEM interest"],
    requirements: [
      "Needs afternoon visit timing",
      "Share Grade VII subject plan",
      "Clarify transport route 3 coverage",
    ],
    notes: [
      "Parent specifically asked for a counsellor-led academic walkthrough.",
      "Family is evaluating two schools and wants fee clarity within 48 hours.",
    ],
    tasks: [
      {
        id: "ananya-task-1",
        title: "Call parent to confirm visit slot",
        due: "Today, 3:30 PM",
        status: "open",
      },
      {
        id: "ananya-task-2",
        title: "Share Grade VII curriculum deck",
        due: "Today, 5:00 PM",
        status: "waiting",
      },
      {
        id: "ananya-task-3",
        title: "Prepare counsellor briefing note",
        due: "Tomorrow, 9:00 AM",
        status: "done",
      },
    ],
    activities: [
      {
        id: "ananya-activity-1",
        type: "system",
        title: "Lead captured from website form",
        detail: "Grade VII enquiry tagged with fee and transport intent.",
        at: "Today, 9:05 AM",
        owner: "System",
      },
      {
        id: "ananya-activity-2",
        type: "call",
        title: "Intro call completed",
        detail: "Confirmed session, location, and preferred visit window.",
        at: "Today, 11:20 AM",
        owner: "Aditi Nair",
      },
      {
        id: "ananya-activity-3",
        type: "email",
        title: "Fee sheet sent",
        detail: "Shared Grade VII fee structure and transport bands.",
        at: "Today, 11:45 AM",
        owner: "Aditi Nair",
      },
    ],
  },
  {
    id: "rudra-sharma",
    parentName: "Kunal Sharma",
    studentName: "Rudra Sharma",
    classInterest: "Grade I",
    source: "Walk-in",
    stage: "visit-scheduled",
    priority: "high",
    owner: {
      name: "Raghav Menon",
      initials: "RM",
      team: "Front Office",
    },
    phone: "+91 99110 10234",
    email: "kunal.sharma@example.com",
    location: "Jakkur",
    campusPreference: "Main Campus",
    session: "2026-27",
    score: 81,
    lastContactAt: "Today, 10:00 AM",
    nextActionAt: "Tomorrow, 10:30 AM",
    nextActionType: "Host campus visit and hand off to academic coordinator",
    summary:
      "Family completed a walk-in enquiry and requested an early-primary classroom viewing before confirming the application.",
    valueBand: "Standard fee plan",
    tags: ["Walk-in", "Primary", "Visit booked"],
    requirements: [
      "Show Grade I classroom",
      "Discuss transport from Jakkur",
    ],
    notes: [
      "Parent wants to assess class strength and teaching attention.",
    ],
    tasks: [
      {
        id: "rudra-task-1",
        title: "Send visit reminder",
        due: "Today, 6:00 PM",
        status: "open",
      },
      {
        id: "rudra-task-2",
        title: "Brief front-desk team",
        due: "Tomorrow, 9:15 AM",
        status: "waiting",
      },
    ],
    activities: [
      {
        id: "rudra-activity-1",
        type: "meeting",
        title: "Walk-in enquiry logged",
        detail: "Collected parent details and class preference at reception.",
        at: "Yesterday, 4:10 PM",
        owner: "Raghav Menon",
      },
      {
        id: "rudra-activity-2",
        type: "call",
        title: "Visit slot confirmed",
        detail: "Family confirmed tomorrow 10:30 AM visit.",
        at: "Today, 10:00 AM",
        owner: "Raghav Menon",
      },
    ],
  },
  {
    id: "aadhya-verma",
    parentName: "Meera Verma",
    studentName: "Aadhya Verma",
    classInterest: "Nursery",
    source: "Referral",
    stage: "docs-pending",
    priority: "medium",
    owner: {
      name: "Neha Kapoor",
      initials: "NK",
      team: "Admissions Desk",
    },
    phone: "+91 99881 33123",
    email: "meera.verma@example.com",
    location: "Hebbal",
    campusPreference: "Early Years Block",
    session: "2026-27",
    score: 72,
    lastContactAt: "Yesterday, 5:15 PM",
    nextActionAt: "Tomorrow, 1:00 PM",
    nextActionType: "Review missing birth certificate and vaccination record",
    summary:
      "Referral lead from an existing parent. Family is positive on the school but document collection is delaying movement.",
    valueBand: "Nursery package",
    tags: ["Referral", "Document hold", "Early years"],
    requirements: [
      "Receive birth certificate copy",
      "Confirm meal plan preference",
    ],
    notes: [
      "Family already toured early years classrooms and responded well.",
    ],
    tasks: [
      {
        id: "aadhya-task-1",
        title: "Send document reminder",
        due: "Tomorrow, 9:00 AM",
        status: "open",
      },
      {
        id: "aadhya-task-2",
        title: "Recheck upload link access",
        due: "Tomorrow, 1:00 PM",
        status: "waiting",
      },
    ],
    activities: [
      {
        id: "aadhya-activity-1",
        type: "email",
        title: "Document checklist mailed",
        detail: "Shared nursery checklist and upload steps.",
        at: "Yesterday, 3:40 PM",
        owner: "Neha Kapoor",
      },
      {
        id: "aadhya-activity-2",
        type: "note",
        title: "Parent requested extension",
        detail: "Asked for one extra day to upload pending records.",
        at: "Yesterday, 5:15 PM",
        owner: "Neha Kapoor",
      },
    ],
  },
  {
    id: "vihaan-patel",
    parentName: "Ritesh Patel",
    studentName: "Vihaan Patel",
    classInterest: "Grade IX",
    source: "Phone enquiry",
    stage: "contacted",
    priority: "high",
    owner: {
      name: "Aditi Nair",
      initials: "AN",
      team: "Admissions Desk",
    },
    phone: "+91 98710 77821",
    email: "ritesh.patel@example.com",
    location: "Thanisandra",
    campusPreference: "Senior School Wing",
    session: "2026-27",
    score: 69,
    lastContactAt: "Today, 12:10 PM",
    nextActionAt: "Today, 4:45 PM",
    nextActionType: "Send Grade IX board pathway comparison and call back",
    summary:
      "Parent wants stronger visibility into senior-school outcomes, science labs, and board-exam support before committing to a visit.",
    valueBand: "Senior school fee plan",
    tags: ["Phone enquiry", "Board comparison", "Academic outcome"],
    requirements: [
      "Share Grade IX board pathway note",
      "Highlight science-lab schedule",
    ],
    notes: [
      "Interested in CBSE outcomes and remedial support structure.",
    ],
    tasks: [
      {
        id: "vihaan-task-1",
        title: "Send board pathway PDF",
        due: "Today, 4:00 PM",
        status: "open",
      },
      {
        id: "vihaan-task-2",
        title: "Call parent after PDF delivery",
        due: "Today, 4:45 PM",
        status: "open",
      },
    ],
    activities: [
      {
        id: "vihaan-activity-1",
        type: "call",
        title: "Initial discovery call",
        detail: "Discussed board, labs, and class size expectations.",
        at: "Today, 12:10 PM",
        owner: "Aditi Nair",
      },
    ],
  },
  {
    id: "inayaa-khan",
    parentName: "Saima Khan",
    studentName: "Inayaa Khan",
    classInterest: "Grade IV",
    source: "Website form",
    stage: "negotiation",
    priority: "hot",
    owner: {
      name: "Neha Kapoor",
      initials: "NK",
      team: "Admissions Desk",
    },
    phone: "+91 98200 55124",
    email: "saima.khan@example.com",
    location: "Sahakar Nagar",
    campusPreference: "Main Campus",
    session: "2026-27",
    score: 91,
    lastContactAt: "Today, 1:05 PM",
    nextActionAt: "Today, 6:15 PM",
    nextActionType: "Resolve final fee-plan question and attempt closure",
    summary:
      "Family has completed visit and document review. Final hesitation is around annual charges and payment timing.",
    valueBand: "Fee plan under approval",
    tags: ["Hot lead", "Visit completed", "Closure risk"],
    requirements: [
      "Confirm annual charge breakup",
      "Share payment timeline options",
    ],
    notes: [
      "Principal interaction went well; closure depends on fee clarity.",
    ],
    tasks: [
      {
        id: "inayaa-task-1",
        title: "Review fee concession note",
        due: "Today, 4:30 PM",
        status: "waiting",
      },
      {
        id: "inayaa-task-2",
        title: "Call parent for closure attempt",
        due: "Today, 6:15 PM",
        status: "open",
      },
    ],
    activities: [
      {
        id: "inayaa-activity-1",
        type: "meeting",
        title: "Campus visit completed",
        detail: "Academic walkthrough and fee desk discussion completed.",
        at: "Yesterday, 11:00 AM",
        owner: "Neha Kapoor",
      },
      {
        id: "inayaa-activity-2",
        type: "note",
        title: "Fee objection captured",
        detail: "Parent asked for clarity on annual charges and deadlines.",
        at: "Today, 1:05 PM",
        owner: "Neha Kapoor",
      },
    ],
  },
  {
    id: "ahaan-rao",
    parentName: "Nishant Rao",
    studentName: "Ahaan Rao",
    classInterest: "Grade VI",
    source: "Education fair",
    stage: "new",
    priority: "medium",
    owner: {
      name: "Raghav Menon",
      initials: "RM",
      team: "Outreach",
    },
    phone: "+91 99531 00887",
    email: "nishant.rao@example.com",
    location: "Kogilu",
    campusPreference: "Main Campus",
    session: "2026-27",
    score: 58,
    lastContactAt: "Not contacted yet",
    nextActionAt: "Tomorrow, 11:00 AM",
    nextActionType: "First discovery call after fair follow-up batch",
    summary:
      "Captured at the education fair. Parent highlighted interest in sports balance and academic support.",
    valueBand: "To be qualified",
    tags: ["Outreach lead", "Sports interest"],
    requirements: [
      "Confirm exact class level",
      "Share sports and house-program overview",
    ],
    notes: [
      "No first call completed yet.",
    ],
    tasks: [
      {
        id: "ahaan-task-1",
        title: "Run first discovery call",
        due: "Tomorrow, 11:00 AM",
        status: "open",
      },
    ],
    activities: [
      {
        id: "ahaan-activity-1",
        type: "system",
        title: "Imported from fair lead sheet",
        detail: "Added from outreach spreadsheet with sports-interest tag.",
        at: "Today, 8:10 AM",
        owner: "System",
      },
    ],
  },
  {
    id: "meher-joseph",
    parentName: "Ashwin Joseph",
    studentName: "Meher Joseph",
    classInterest: "Grade II",
    source: "Referral",
    stage: "enrolled",
    priority: "low",
    owner: {
      name: "Aditi Nair",
      initials: "AN",
      team: "Admissions Desk",
    },
    phone: "+91 99112 55109",
    email: "ashwin.joseph@example.com",
    location: "Hebbal",
    campusPreference: "Main Campus",
    session: "2026-27",
    score: 95,
    lastContactAt: "Yesterday, 2:20 PM",
    nextActionAt: "Friday, 4:00 PM",
    nextActionType: "Send onboarding welcome pack",
    summary:
      "Lead successfully converted and enrolled. Retained in CRM for onboarding and conversion reporting.",
    valueBand: "Confirmed enrolment",
    tags: ["Converted", "Referral", "Onboarding"],
    requirements: [
      "Share onboarding calendar",
      "Confirm transport opt-in",
    ],
    notes: [
      "Good candidate for referral-based testimonial later.",
    ],
    tasks: [
      {
        id: "meher-task-1",
        title: "Send onboarding welcome pack",
        due: "Friday, 4:00 PM",
        status: "open",
      },
    ],
    activities: [
      {
        id: "meher-activity-1",
        type: "meeting",
        title: "Admission closed successfully",
        detail: "Application accepted and payment received.",
        at: "Yesterday, 12:15 PM",
        owner: "Aditi Nair",
      },
      {
        id: "meher-activity-2",
        type: "email",
        title: "Acknowledgement mail sent",
        detail: "Shared payment acknowledgement and onboarding note.",
        at: "Yesterday, 2:20 PM",
        owner: "Aditi Nair",
      },
    ],
  },
];

export const leadOwners = Array.from(
  new Set(adminLeads.map((lead) => lead.owner.name)),
);

export const leadSources = Array.from(
  new Set(adminLeads.map((lead) => lead.source)),
);

export function getLeadById(leadId: string) {
  return adminLeads.find((lead) => lead.id === leadId) ?? null;
}

export function getLeadStageLabel(stage: LeadStage) {
  return leadStageLabels[stage];
}

export function getLeadPriorityLabel(priority: LeadPriority) {
  return leadPriorityLabels[priority];
}