// models/regularAdmission.js
import mongoose from "mongoose";

const RegularAdmissionSchema = new mongoose.Schema(
  {
    // ===== REQUIRED (common across all your files) =====
    name: { type: String, required: true, trim: true },

    location: {
      city: { type: String, required: true, trim: true },
      state: { type: String, required: true, trim: true },
      country: { type: String, trim: true, default: "India" },
      raw: { type: String, trim: true } // original "City, State" if you have it
    },

    establishedYear: { type: Number, required: true, min: 1800 },
    shortDescription: { type: String, required: true, trim: true },

    // ===== OPTIONAL (appear in many, but not all) =====
    type: { type: String, trim: true },                    // Private/Public/Deemed/Institute
    approvals: [{ type: String, trim: true }],             // UGC, AICTE, PCI, etc.
    accreditations: [{ type: String, trim: true }],        // NAAC, NBA, etc.
    memberships: [{ type: String, trim: true }],           // AIU, CII, etc.
    affiliations: [{ type: String, trim: true }],
    ownership: { type: String, trim: true },
    website: { type: String, trim: true },
    applicationModes: [{ type: String, trim: true }],      // Online/Offline
    genderIntake: { type: String, trim: true },

    // Campus & quick facts (inline)
    campus: {
      sizeAcres: { type: Number, min: 0 },
      locationText: { type: String, trim: true },
      totalSeats: { type: Number, min: 0 },
      totalFaculty: { type: Number, min: 0 },
      totalStudents: { type: Number, min: 0 }
    },

    facilitiesAndInfrastructure: {
      description: { type: String, trim: true },
      keyFeatures: [{ type: String, trim: true }]
    },

    quickFacts: [
      {
        label: { type: String, trim: true },
        value: { type: String, trim: true }
      }
    ],

    placements: {
      highestPackage: { type: String, trim: true }, // keep string for "INR 42 LPA"
      medianSalary: { type: String, trim: true },
      notes: [{ type: String, trim: true }]
    },

    // Admissions (inline + flexible)
    admissions: {
      status: { type: String, trim: true },                // e.g., "Open for 2025-26"
      modes: [{ type: String, trim: true }],               // Online/Offline
      generalSummary: [{ type: String, trim: true }],      // prose bullets
      acceptedExams: [{ type: String, trim: true }],
      criteriaTable: [
        {
          course: { type: String, trim: true },
          eligibility: { type: String, trim: true },
          selectionCriteria: { type: String, trim: true }
        }
      ],
      notes: [{ type: String, trim: true }]
    },

    // Courses (flat list; inline)
    courses: [
      {
        name: { type: String, trim: true, required: true },
        level: { type: String, trim: true },               // UG/PG/PhD/Diploma
        duration: { type: String, trim: true },            // "3 Years", "2 Semesters", etc.
        type: { type: String, trim: true },                // Degree/Diploma/Certificate
        stream: { type: String, trim: true },              // Engineering, Management, etc.
        specialization: { type: String, trim: true },
        tuitionFees: { type: String, trim: true },         // keep as string for ranges
        eligibility: { type: String, trim: true },
        entranceExams: [{ type: String, trim: true }],
        seats: { type: Number, min: 0 },
        additional: { type: mongoose.Schema.Types.Mixed }  // any extra per-course fields
      }
    ],

    // Rankings (inline)
    rankings: [
      {
        framework: { type: String, trim: true },           // NIRF, IIRF, India Today, etc.
        year: { type: Number },
        rank: { type: String, trim: true },                // allow "Top 200", "87/175", etc.
        details: { type: String, trim: true }
      }
    ],

    highlights: [{ type: String, trim: true }],

    // Institution-level fees (optional)
    feeRangeText: { type: String, trim: true },
    currency: { type: String, trim: true },

    // Narrative sections (optional)
    about: [{ type: String, trim: true }],
    notes: [{ type: String, trim: true }],

    // Catch-all for anything not modeled above
    extra: { type: mongoose.Schema.Types.Mixed }
  },
  { timestamps: true, versionKey: false }
);

// Helpful index for lookups
RegularAdmissionSchema.index({ name: 1, 'location.state': 1 }, { unique: false });

// (Optional) strict validation on required subfields to avoid empty strings:
RegularAdmissionSchema.path('location.city').validate(v => !!(v && v.trim()), 'City is required');
RegularAdmissionSchema.path('location.state').validate(v => !!(v && v.trim()), 'State is required');

export const regularAdmission = mongoose.model("regularAdmission", RegularAdmissionSchema);
