// Countdown to 15 Dec 2025
function updateCountdown() {
  const examDate = new Date("2025-12-15T00:00:00");
  const now = new Date();
  const diff = examDate - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("countdown").innerText = `⏳ ${days} days until CMA Exam`;
}
setInterval(updateCountdown, 1000);
updateCountdown();

// Show/hide sections
function showSection(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// Full syllabus (from your provided images)
const studySchedule = [
  // Section A – Commercial Laws (30%)
  "Commercial Laws – Introduction & Sources",
  "Indian Contract Act, 1872 – Offer, Acceptance, Consideration",
  "Indian Contract Act, 1872 – Performance of Contract",
  "Indian Contract Act, 1872 – Breach & Remedies",
  "Sale of Goods Act, 1930 – Formation of Contract",
  "Sale of Goods Act, 1930 – Conditions & Warranties",
  "Sale of Goods Act, 1930 – Rights of Unpaid Seller",
  
  // Section B – Industrial Laws (15%)
  "Factories Act, 1948 – Health, Safety & Welfare",
  "Factories Act, 1948 – Working Hours & Leave",
  "Payment of Wages Act, 1936",
  "Minimum Wages Act, 1948",
  "Employees’ State Insurance Act, 1948",

  // Section C – Corporate Laws (40%)
  "Companies Act, 2013 – Company Formation",
  "Companies Act, 2013 – Memorandum & Articles of Association",
  "Companies Act, 2013 – Share Capital & Debentures",
  "Companies Act, 2013 – Meetings & Resolutions",
  "Companies Act, 2013 – Directors & KMP",
  "Companies Act, 2013 – Accounts & Audit",
  "Companies Act, 2013 – Winding Up",

  // Section D – Business Ethics (15%)
  "Business Ethics – Introduction & Principles",
  "Ethical Decision Making",
  "Corporate Social Responsibility (CSR)",
  "Ethics in Workplace & Corporate Governance"
];

const studyList = document.getElementById("study-list");
studySchedule.forEach(item => {
  const li = document.createElement("li");
  li.innerText = item;
  studyList.appendChild(li);
});

// Expanded MCQ Quiz Bank
const quizData = [
  { q: "What is the maximum number of members in a public company?", a: "No limit" },
  { q: "Which law governs factories in India?", a: "Factories Act, 1948" },
  { q: "In a valid contract, consideration must be?", a: "Lawful" },
  { q: "Rights of an unpaid seller are given under which Act?", a: "Sale of Goods Act, 1930" },
  { q: "Under Minimum Wages Act, wages are fixed by?", a: "Appropriate Government" },
  { q: "Which section of Companies Act defines a private company?", a: "Section 2(68)" },
  { q: "CSR is mandatory for companies meeting which criteria?", a: "Net worth ₹500 cr or more, or turnover ₹1000 cr or more" },
  { q: "Who appoints the first auditor of a company?", a: "Board of Directors" },
  { q: "ESI Act applies to establishments with how many employees?", a: "10 or more" },
  { q: "Offer + Acceptance = ?", a: "Agreement" },
  { q: "Who can be a director?", a: "Any person above 18 years, not disqualified" },
  { q: "Factories Act prescribes maximum working hours per week?", a: "48 hours" },
  { q: "Ethics in workplace aims to?", a: "Promote integrity and fairness" },
  { q: "Which meeting must be held every year?", a: "Annual General Meeting" },
  { q: "A contract without consideration is?", a: "Void" },
  { q: "CSR expenditure must be at least what % of average profits?", a: "2%" },
  { q: "Which law ensures payment of wages on time?", a: "Payment of Wages Act, 1936" },
  { q: "Memorandum of Association contains?", a: "Objectives of the company" },
  { q: "Unpaid seller can?", a: "Lien on goods" },
  { q: "Ethical decision making requires?", a: "Considering moral principles" }
];

let currentQ = 0;

function loadQuestion() {
  const q = quizData[currentQ];
  document.getElementById("quiz-container").innerHTML = `<p>${q.q}</p><input type="text" id="answer" placeholder="Your answer">`;
}
function nextQuestion() {
  const ans = document.getElementById("answer").value;
  alert(`Correct Answer: ${quizData[currentQ].a}`);
  currentQ++;
  if (currentQ < quizData.length) loadQuestion();
  else alert("Quiz complete!");
}
loadQuestion();
