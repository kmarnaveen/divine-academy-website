export type BoardResultEntry = {
  studentName: string;
  className: string;
  score: number;
  scoreDisplay: string;
  recognition: string;
};

export const boardResults: BoardResultEntry[] = [
  {
    studentName: "Satyam Parashar",
    className: "Class X",
    score: 97.8,
    scoreDisplay: "97.8%",
    recognition: "District Top 5",
  },
  {
    studentName: "Vansh Sharma",
    className: "Class X",
    score: 97,
    scoreDisplay: "97%",
    recognition: "Class X Topper",
  },
  {
    studentName: "Sanjeevani",
    className: "Class X",
    score: 94.6,
    scoreDisplay: "94.6%",
    recognition: "Merit Holder",
  },
  {
    studentName: "Arya",
    className: "Class X",
    score: 94.4,
    scoreDisplay: "94.4%",
    recognition: "Merit Holder",
  },
  {
    studentName: "Arun Pr. Singh",
    className: "Class X",
    score: 94.2,
    scoreDisplay: "94.2%",
    recognition: "Merit Holder",
  },
  {
    studentName: "Anshika Rajput",
    className: "Class X",
    score: 93.4,
    scoreDisplay: "93.4%",
    recognition: "Merit Holder",
  },
  {
    studentName: "Anshuman Singh",
    className: "Class X",
    score: 93.4,
    scoreDisplay: "93.4%",
    recognition: "Merit Holder",
  },
  {
    studentName: "Naitik",
    className: "Class X",
    score: 92.6,
    scoreDisplay: "92.6%",
    recognition: "Merit Holder",
  },
  {
    studentName: "Archit Jain",
    className: "Class X",
    score: 92.2,
    scoreDisplay: "92.2%",
    recognition: "Merit Holder",
  },
  {
    studentName: "Shivansh",
    className: "Class X",
    score: 91.4,
    scoreDisplay: "91.4%",
    recognition: "Merit Holder",
  },
  {
    studentName: "Vaishnavi Saxena",
    className: "Class X",
    score: 91.4,
    scoreDisplay: "91.4%",
    recognition: "Merit Holder",
  },
  {
    studentName: "Utsav",
    className: "Class X",
    score: 90.4,
    scoreDisplay: "90.4%",
    recognition: "Merit Holder",
  },
  {
    studentName: "Isha Pal",
    className: "Class X",
    score: 90,
    scoreDisplay: "90%",
    recognition: "Merit Holder",
  },
  {
    studentName: "Naman",
    className: "Class X",
    score: 89.8,
    scoreDisplay: "89.8%",
    recognition: "Merit Holder",
  },
  {
    studentName: "Nandini",
    className: "Class X",
    score: 89.6,
    scoreDisplay: "89.6%",
    recognition: "Merit Holder",
  },
  {
    studentName: "Om Pratap",
    className: "Class X",
    score: 89.4,
    scoreDisplay: "89.4%",
    recognition: "Merit Holder",
  },
  {
    studentName: "Krishna Singh",
    className: "Class X",
    score: 89.2,
    scoreDisplay: "89.2%",
    recognition: "Star Performer",
  },
  {
    studentName: "Veer Pr. Singh",
    className: "Class X",
    score: 89.2,
    scoreDisplay: "89.2%",
    recognition: "Star Performer",
  },
  {
    studentName: "Krishna Pr. Singh",
    className: "Class X",
    score: 88.6,
    scoreDisplay: "88.6%",
    recognition: "Star Performer",
  },
  {
    studentName: "Pranjal Jain",
    className: "Class X",
    score: 87.8,
    scoreDisplay: "87.8%",
    recognition: "Star Performer",
  },
  {
    studentName: "Anand Sharma",
    className: "Class X",
    score: 87.6,
    scoreDisplay: "87.6%",
    recognition: "Star Performer",
  },
  {
    studentName: "Saksham Porwal",
    className: "Class X",
    score: 87.6,
    scoreDisplay: "87.6%",
    recognition: "Star Performer",
  },
  {
    studentName: "Gunjan",
    className: "Class X",
    score: 87.2,
    scoreDisplay: "87.2%",
    recognition: "Star Performer",
  },
  {
    studentName: "Mayank",
    className: "Class X",
    score: 87,
    scoreDisplay: "87%",
    recognition: "Star Performer",
  },
  {
    studentName: "Sachin Yadav",
    className: "Class X",
    score: 87,
    scoreDisplay: "87%",
    recognition: "Star Performer",
  },
  {
    studentName: "Aadityi",
    className: "Class X",
    score: 86.6,
    scoreDisplay: "86.6%",
    recognition: "Star Performer",
  },
  {
    studentName: "Anika",
    className: "Class X",
    score: 86.4,
    scoreDisplay: "86.4%",
    recognition: "Star Performer",
  },
  {
    studentName: "Vaibhav Singh",
    className: "Class X",
    score: 85.8,
    scoreDisplay: "85.8%",
    recognition: "Star Performer",
  },
  {
    studentName: "Pragya",
    className: "Class X",
    score: 85.6,
    scoreDisplay: "85.6%",
    recognition: "Star Performer",
  },
  {
    studentName: "Vaishnavi Singh",
    className: "Class X",
    score: 85,
    scoreDisplay: "85%",
    recognition: "Star Performer",
  },
];

export const sortedBoardResults = [...boardResults].sort((left, right) => {
  if (right.score === left.score) {
    return left.studentName.localeCompare(right.studentName);
  }

  return right.score - left.score;
});

export const ninetyPlusCount = sortedBoardResults.filter(
  (entry) => entry.score >= 90,
).length;

export const meritHolderCount = sortedBoardResults.filter(
  (entry) => entry.recognition === "Merit Holder",
).length;

export const starPerformerCount = sortedBoardResults.filter(
  (entry) => entry.recognition === "Star Performer",
).length;

export const headlineRecognitionCount = sortedBoardResults.filter((entry) =>
  ["District Top 5", "Class X Topper"].includes(entry.recognition),
).length;

export const headlineResults = sortedBoardResults.slice(0, 6);

export function getRecognitionClasses(recognition: string) {
  if (recognition === "District Top 5") {
    return {
      badge:
        "border border-amber-200 bg-amber-50 text-amber-800 hover:bg-amber-50",
      card: "border-amber-200/80 bg-amber-50/60",
      ring: "bg-amber-100 text-amber-800",
    };
  }

  if (recognition === "Class X Topper") {
    return {
      badge:
        "border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-50",
      card: "border-emerald-200/80 bg-emerald-50/60",
      ring: "bg-emerald-100 text-emerald-800",
    };
  }

  if (recognition === "Merit Holder") {
    return {
      badge:
        "border border-primary/10 bg-primary/5 text-primary hover:bg-primary/5",
      card: "border-primary/10 bg-primary/5",
      ring: "bg-primary/10 text-primary",
    };
  }

  return {
    badge:
      "border border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-100",
    card: "border-slate-200 bg-slate-50",
    ring: "bg-slate-100 text-slate-700",
  };
}
