import {
  AlarmClock,
  BookOpen,
  Brain,
  CalendarDays,
  ClipboardCheck,
  Layers,
  Pencil,
  PhoneCall,
  RefreshCw,
  Sparkles,
  Target,
  Timer,
  TrendingUp,
  Video
} from "lucide-react";
import React from "react";

/**
 * ExamToolkit90Day (JavaScript version)
 * Topic: Exam Toolkit – NEET, JEE, NATA, CET (90-Day Plan)
 * Design: brand palette (primary #3E96F4, text #31393C, chips #EDEEEB), two-column layout with sticky CTA.
 * Deps: Tailwind + lucide-react only.
 */
export default function ExamToolkit90Day({
  defaultExam = "NEET",
  showCTA = true,
  startDate = null,
}) {
  const EXAMS = ["NEET", "JEE", "NATA", "CET"];

  // examColors keyed by exam string values
  const examColors = {
    NEET: "#3E96F4",
    JEE: "#06b6d4", // cyan accent for variety
    NATA: "#6366f1", // indigo accent for design
    CET: "#10b981", // emerald accent for state CETs
  };

  const initialExam = EXAMS.includes(defaultExam) ? defaultExam : "NEET";
  const [exam, setExam] = React.useState(initialExam);

  // Utility — split 90 days into 3 phases of 30 days each, then weeks
  const makeWeeks = (start) => {
    const weeks = Array.from({ length: 13 }, (_, i) => ({
      label: `Week ${i + 1}`,
    }));
    if (!start) return weeks;
    const base = new Date(start);
    if (isNaN(base.getTime())) return weeks;
    return weeks.map((w, i) => {
      const s = new Date(base);
      s.setDate(s.getDate() + i * 7);
      const e = new Date(s);
      e.setDate(e.getDate() + 6);
      const fmt = (d) =>
        d.toLocaleDateString(undefined, { month: "short", day: "numeric" });
      return { label: `${w.label} (${fmt(s)}–${fmt(e)})` };
    });
  };

  const WEEKS = makeWeeks(startDate);

  const syllabus = {
    NEET: {
      subjects: ["Physics", "Chemistry", "Biology (Botany + Zoology)"],
      weightage: [
        "Biology heavy → NCERT line-by-line, diagrams, PYQs",
        "Physics numericals (Kinematics, Newton's Laws, Electrostatics, Modern Physics)",
        "Chemistry NCERT (Organic GOC, Hydrocarbons; Physical numericals; Inorganic NCERT tables)",
      ],
    },
    JEE: {
      subjects: ["Physics", "Chemistry (Phy/Org/Inorg)", "Mathematics"],
      weightage: [
        "Math focus: Algebra, Calculus, Coordinate Geometry",
        "Physics: Mechanics, Electrostatics & Current, Modern Physics",
        "Chemistry: Physical numericals + Organic mechanisms",
      ],
    },
    NATA: {
      subjects: [
        "Cognitive Skills",
        "Visual/Spatial Ability",
        "Design Sensitivity",
        "Math (basic)",
      ],
      weightage: [
        "Drawing not mandatory now; focus on cognitive & aptitude via NATA pattern",
        "Practice past mock interfaces; speed + accuracy",
        "Architecture awareness (famous works, materials, proportions)",
      ],
    },
    CET: {
      subjects: [
        "Physics",
        "Chemistry",
        "Math/Biology (state pattern)",
        "Logical/General (variant)",
      ],
      weightage: [
        "State-board aligned theory + speed; PYQs from your state CET",
        "High ROI chapters differ by state; stick to official blueprint",
        "Time management with sectional cutoffs where applicable",
      ],
    },
  };

  const phasePlan = {
    NEET: [
      {
        phase: "Phase 1: Foundation",
        color: "bg-[#FFC067]",
        goals: [
          "NCERT-first approach (Bio & Chem)",
          "Physics formulas + concept drills",
          "Daily PYQ streak (20–40 Q)",
        ],
        weeks: [1, 2, 3, 4],
      },
      {
        phase: "Phase 2: Practice",
        color: "bg-[#FFC067]",
        goals: [
          "Sectional tests (3/week)",
          "Error logs + targeted revision",
          "Full Biology notes consolidation",
        ],
        weeks: [5, 6, 7, 8],
      },
      {
        phase: "Phase 3: Mock & Revise",
        color: "bg-[#FFC067]",
        goals: [
          "Alt-day full mocks",
          "Weak-topic sprints",
          "NCERT diagrams & tables blitz",
        ],
        weeks: [9, 10, 11, 12, 13],
      },
    ],
    JEE: [
      {
        phase: "Phase 1: Core Concepts",
        color: "bg-cyan-50",
        goals: [
          "Mechanics + Algebra base",
          "Daily mixed problem set (60–90 min)",
          "Chem physical formulas deck",
        ],
        weeks: [1, 2, 3, 4],
      },
      {
        phase: "Phase 2: Problem Practice",
        color: "bg-cyan-50",
        goals: [
          "Topic tests (PCM) 4/week",
          "Timed drills (QA sets)",
          "Error log → redo till 100%",
        ],
        weeks: [5, 6, 7, 8],
      },
      {
        phase: "Phase 3: Mock Cycle",
        color: "bg-cyan-50",
        goals: [
          "Every 2nd day full mock",
          "Advanced-level boosters",
          "Revision sheets (last-mile)",
        ],
        weeks: [9, 10, 11, 12, 13],
      },
    ],
    NATA: [
      {
        phase: "Phase 1: Fundamentals",
        color: "bg-indigo-50",
        goals: [
          "Pattern familiarization",
          "Spatial reasoning drills",
          "Speed arithmetic (ratios, percent, angles)",
        ],
        weeks: [1, 2, 3, 4],
      },
      {
        phase: "Phase 2: Section Practice",
        color: "bg-indigo-50",
        goals: [
          "Cognitive + visual mocks alt-days",
          "Architecture GK capsules",
          "Interface practice (official style)",
        ],
        weeks: [5, 6, 7, 8],
      },
      {
        phase: "Phase 3: Full Mocks",
        color: "bg-indigo-50",
        goals: [
          "Full-length mocks 3/week",
          "Heatmap of weak areas",
          "Exam temperament & time splits",
        ],
        weeks: [9, 10, 11, 12, 13],
      },
    ],
    CET: [
      {
        phase: "Phase 1: Syllabus Sweep",
        color: "bg-emerald-50",
        goals: [
          "State-board theory quick pass",
          "Formulae deck (PCM/Bio)",
          "Daily PYQs (chapter-wise)",
        ],
        weeks: [1, 2, 3, 4],
      },
      {
        phase: "Phase 2: Speed Practice",
        color: "bg-emerald-50",
        goals: [
          "Sectional speed tests 4/week",
          "OMR practice & bubbling",
          "Error logs consolidation",
        ],
        weeks: [5, 6, 7, 8],
      },
      {
        phase: "Phase 3: Full Mocks",
        color: "bg-emerald-50",
        goals: [
          "Alt-day full mocks",
          "High-weightage sprint",
          "Last 5-year PYQ recap",
        ],
        weeks: [9, 10, 11, 12, 13],
      },
    ],
  };

  const dailyPlanner = {
    NEET: {
      blocks: [
        {
          label: "Concept Study (Bio/Chem)",
          mins: 90,
          tip: "NCERT + highlight diagrams",
        },
        { label: "Numericals (Physics)", mins: 75, tip: "15 Q timed + review" },
        { label: "PYQ Drill", mins: 60, tip: "20–40 Q; maintain error log" },
        { label: "Revision", mins: 45, tip: "Flashcards/tables" },
      ],
      examTips: [
        "NCERT Bio verbatim focus",
        "Mark tricky NCERT lines in a separate sheet",
        "Practice OMR bubbling daily",
      ],
    },
    JEE: {
      blocks: [
        {
          label: "Math Problem Set",
          mins: 90,
          tip: "Algebra/Calculus alt-days",
        },
        { label: "Physics Drills", mins: 75, tip: "Mechanics/Electrostatics" },
        { label: "Chem Mix", mins: 60, tip: "Physical numericals + Org mech" },
        { label: "Revision/Errors", mins: 45, tip: "Redo error log sets" },
      ],
      examTips: [
        "Set 25-min Pomodoros for tough math",
        "Create formula walls for Phy/Chem",
        "Analyze mock heatmaps",
      ],
    },
    NATA: {
      blocks: [
        {
          label: "Cognitive Drills",
          mins: 60,
          tip: "Analogy, patterns, sequences",
        },
        {
          label: "Visual/Spatial",
          mins: 60,
          tip: "3D rotation, nets, projections",
        },
        { label: "Math Basics", mins: 45, tip: "Ratios, geometry, angles" },
        {
          label: "Full-Section Practice",
          mins: 60,
          tip: "Interface timing practice",
        },
      ],
      examTips: [
        "Train with on-screen calculator limits",
        "Practice official-style UI",
        "Note design principles & famous works",
      ],
    },
    CET: {
      blocks: [
        {
          label: "High-Weightage Chapter",
          mins: 60,
          tip: "Per state blueprint",
        },
        { label: "Speed Set", mins: 60, tip: "35–50 Q timed" },
        { label: "PYQ Sprint", mins: 45, tip: "OMR practice" },
        { label: "Revision", mins: 30, tip: "Key formulas" },
      ],
      examTips: [
        "Focus on accuracy > attempts",
        "Time each section separately",
        "Simulate center environment",
      ],
    },
  };

  const mockCadence = {
    NEET: [
      "Weeks 1–2: 1 mock/week",
      "Weeks 3–8: 2 mocks/week",
      "Weeks 9–13: Alt-day mocks",
    ],
    JEE: [
      "Weeks 1–2: 1 mock/week",
      "Weeks 3–8: 2–3 mocks/week",
      "Weeks 9–13: Alt-day mocks",
    ],
    NATA: [
      "Weeks 1–2: Interface practice",
      "Weeks 3–8: 2 mocks/week",
      "Weeks 9–13: 3 mocks/week",
    ],
    CET: [
      "Weeks 1–2: 1 mock/week",
      "Weeks 3–8: 2 mocks/week",
      "Weeks 9–13: Alt-day mocks",
    ],
  };

  const Chip = ({ children }) => (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#EDEEEB] px-3 py-1 text-xs font-medium text-[#31393C]">
      {children}
    </span>
  );

  return (
    <div className="min-h-screen w-full bg-white text-[#31393C]">
      {/* Header */}
      <div className="bg-[#FFC067] text-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6">
          <div className="flex items-center gap-3">
            <BookOpen className="h-6 w-6" aria-hidden />
            <h1 className="text-2xl sm:text-3xl font-bold">
              Exam Toolkit: NEET, JEE, NATA, CET – 90-Day Plan
            </h1>
          </div>
          <p className="mt-1 text-gray-900/90 text-sm sm:text-base">
            Phase-wise schedule, daily blocks, mock cadence, and last-mile
            revision — optimized for speed & retention.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 py-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main */}
        <section className="lg:col-span-2 space-y-6">
          {/* Exam switcher */}
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-4 sm:p-5">
            <div className="flex flex-wrap gap-2">
              {EXAMS.map((e) => (
                <button
                  key={e}
                  onClick={() => setExam(e)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium ring-1 ring-gray-200 ${
                    exam === e ? "text-white" : "text-[#31393C] bg-white"
                  }`}
                  style={exam === e ? { backgroundColor: examColors[e] } : {}}
                >
                  {e}
                </button>
              ))}
            </div>
            {startDate && (
              <div className="mt-3 text-xs text-gray-600 flex items-center gap-2">
                <CalendarDays className="h-4 w-4" /> Plan anchored to start
                date: {new Date(startDate).toLocaleDateString()}
              </div>
            )}
          </div>

          {/* Syllabus & Weightage */}
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5">
            <div className="flex items-center gap-2">
              <Layers className="h-5 w-5" />
              <h2 className="text-lg font-semibold">
                Syllabus Focus & Weightage
              </h2>
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl bg-[#EDEEEB] p-4">
                <div className="font-semibold mb-1">Core Subjects</div>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {syllabus[exam].subjects.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-[#EDEEEB] p-4">
                <div className="font-semibold mb-1">High-ROI Emphasis</div>
                <ul className="list-disc list-inside text-sm space-y-1">
                  {syllabus[exam].weightage.map((w) => (
                    <li key={w}>{w}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 3-Phase 90-day Plan */}
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 overflow-hidden">
            <header className="border-b border-gray-100 p-4 sm:p-6 flex items-center gap-2">
              <Target className="h-5 w-5" />
              <h2 className="text-lg font-semibold">90-Day Phases</h2>
            </header>
            <div className="divide-y divide-gray-100">
              {phasePlan[exam].map((p) => (
                <div key={p.phase} className="p-4 sm:p-6">
                  <div className="flex items-center gap-2">
                    <Chip>{p.phase}</Chip>
                    <span className="text-xs text-gray-600">
                      {p.weeks
                        .map((w) => WEEKS[w - 1]?.label)
                        .filter(Boolean)
                        .join(" • ")}
                    </span>
                  </div>
                  <ul className="mt-3 list-disc list-inside text-sm space-y-1">
                    {p.goals.map((g) => (
                      <li key={g}>{g}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Daily Planner */}
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5">
            <div className="flex items-center gap-2">
              <AlarmClock className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Daily Planner (Sample)</h2>
            </div>
            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              {dailyPlanner[exam].blocks.map((b) => (
                <div key={b.label} className="rounded-xl bg-[#EDEEEB] p-4">
                  <div className="flex items-center justify-between">
                    <div className="font-semibold">{b.label}</div>
                    <div className="text-xs text-gray-700 inline-flex items-center gap-1">
                      <Timer className="h-4 w-4" />
                      {b.mins} min
                    </div>
                  </div>
                  <div className="mt-1 text-sm text-gray-700">Tip: {b.tip}</div>
                </div>
              ))}
            </div>
            <div className="mt-3 text-xs text-gray-600 flex items-center gap-2">
              <RefreshCw className="h-4 w-4" /> Rest 1 day every 7–8 days; do
              light revision & error-log cleanup.
            </div>
          </div>

          {/* Mock Cadence & Analysis */}
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5">
            <div className="flex items-center gap-2">
              <ClipboardCheck className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Mock Test Cadence</h2>
            </div>
            <ul className="mt-3 list-disc list-inside text-sm space-y-1">
              {mockCadence[exam].map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <div className="mt-3 rounded-xl bg-[#EDEEEB] p-3 text-sm">
              <div className="font-semibold mb-1 flex items-center gap-2">
                <TrendingUp className="h-4 w-4" /> Score Growth Routine
              </div>
              <ul className="list-disc list-inside space-y-1">
                <li>
                  Post-mock: 30–40 min error analysis → tag by concept &
                  mistake-type
                </li>
                <li>
                  Make a <em>redo set</em> with only incorrect Qs; redo within
                  48 hours
                </li>
                <li>Update formula sheets/flashcards for missed concepts</li>
              </ul>
            </div>
          </div>

          {/* Last-Mile Revision Kits */}
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              <h2 className="text-lg font-semibold">
                Last-Mile Revision (Weeks 11–13)
              </h2>
            </div>
            <ul className="mt-3 list-disc list-inside text-sm space-y-1">
              <li>High-yield chapter sprints (per exam focus)</li>
              <li>Formula/diagram blitz + flashcards (15–20 min pockets)</li>
              <li>Sleep routine & exam-day simulation (same time of day)</li>
              <li>OMR practice (NEET/CET) or CBT shortcuts (JEE/NATA)</li>
            </ul>
          </div>
        </section>

        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-4">
          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              <h3 className="font-semibold">Success Checklist</h3>
            </div>
            <ul className="mt-2 text-sm list-disc list-inside">
              <li>Create an error log from day 1</li>
              <li>Weekly mini-revision of formulae/notes</li>
              <li>Alternate tough/easy topics to avoid burnout</li>
              <li>Hydration + 7–8h sleep; screen-free buffer before bed</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5">
            <div className="flex items-center gap-2">
              <Pencil className="h-5 w-5" />
              <h3 className="font-semibold">Resources (Generic)</h3>
            </div>
            <ul className="mt-2 text-sm list-disc list-inside">
              <li>Official syllabus + past papers (last 5–10 years)</li>
              <li>Chapter-wise PYQ books; formula/diagram flashcards</li>
              <li>Timer + OMR sheets (as applicable); error-log notebook</li>
            </ul>
            <p className="mt-2 text-xs text-gray-600">
              *Use state/official blueprints for CET; NATA uses CBT with
              cognitive/visual emphasis.
            </p>
          </div>

          {showCTA && (
            <div className="sticky top-6 space-y-4">
              <div className="rounded-2xl bg-white shadow-sm ring-1 ring-gray-200 p-5">
                <h4 className="font-semibold">
                  Need a personalized 90-day schedule?
                </h4>
                <p className="mt-1 text-sm text-gray-600">
                  We’ll align topics to your school tests and available hours.
                </p>
                <div className="mt-4 flex flex-col gap-2">
                  <a
                    href="tel:+917887881060"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#FFC067] text-black px-4 py-2 font-semibold shadow-sm hover:bg-[#3187e2]"
                  >
                    <PhoneCall className="h-4 w-4" /> Quick Call
                  </a>
                  <a
                    href="https://wa.me/+917887881060"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white text-[#31393C] px-4 py-2 font-semibold shadow-sm ring-1 ring-gray-200 hover:bg-gray-50"
                  >
                    <Video className="h-4 w-4" /> WhatsApp Counselling
                  </a>
                </div>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}
