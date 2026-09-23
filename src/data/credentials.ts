export interface EducationCredential {
  institution: string;
  degree: string;
  specialization: string;
  period: string;
  location: string;
  cgpa: string;
  cpi?: string;
  transcriptRef?: string;
  status: string;
  coursework: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  bullets: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  status: 'Verified' | 'Completed' | 'Pending';
}

export interface AchievementItem {
  id: string;
  title: string;
  organization: string;
  metric: string;
  category: string;
  highlight: string;
}

export interface AdditionalCredentialItem {
  id: string;
  title: string;
  issuer: string;
  type: string;
  year: string;
  verification: string;
}

export const EDUCATION_DATA: EducationCredential = {
  institution: "IILM University",
  degree: "B.Tech in Computer Science and Engineering",
  specialization: "Full Stack Development & Applied Machine Learning",
  period: "Expected Graduation: Aug 2027",
  location: "Greater Noida, India",
  cgpa: "7.05 / 10",
  cpi: "6.86",
  transcriptRef: "24A12RES897",
  status: "In Progress (Expected Aug 2027)",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (OOP)",
    "Database Management Systems (DBMS)",
    "Operating Systems",
    "Computer Networks",
    "System Design Basics"
  ]
};

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-prodigy",
    role: "Web Developer Intern",
    company: "Prodigy Infotech",
    location: "Remote",
    period: "Jun 2025 – Jul 2025",
    type: "Internship",
    bullets: [
      "Developed 3+ responsive web applications using HTML, CSS, and JavaScript with consistent, cross-browser compatible UI.",
      "Optimized application performance, accessibility, and cross-browser compatibility, improving user experience.",
      "Managed source code with Git/GitHub and deployed projects to cloud platforms in collaboration with the team."
    ]
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-aws",
    name: "AWS Academy Graduate – AWS Academy Machine Learning Foundations",
    issuer: "AWS Academy",
    date: "2025",
    credentialId: "AWS-ACADEMY-ML",
    verificationUrl: "https://aws.amazon.com/training/awsacademy/",
    status: "Verified"
  },
  {
    id: "cert-web",
    name: "Web Development",
    issuer: "Udemy",
    date: "2025",
    credentialId: "UDEMY-WEB-DEV",
    verificationUrl: "https://www.udemy.com/",
    status: "Completed"
  },
  {
    id: "cert-java",
    name: "Java Programming: Beginner to Master",
    issuer: "Udemy",
    date: "2025",
    credentialId: "UDEMY-JAVA-MASTER",
    verificationUrl: "https://www.udemy.com/",
    status: "Completed"
  },
  {
    id: "cert-social",
    name: "Introduction to Social Media",
    issuer: "Professional Certification",
    date: "Jul 2026",
    credentialId: "SM-INTRO-2026",
    status: "Completed"
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    id: "ach-gcloud",
    title: "Google Cloud Agentic AI Day Contributor",
    organization: "Hack2Skill / Google Cloud",
    metric: "Feb 2025",
    category: "Hackathon & Innovation",
    highlight: "Contributed to Google Cloud Agentic AI Day through Hack2Skill, exploring cutting-edge agentic workflows and multi-modal AI systems."
  },
  {
    id: "ach-space",
    title: "Bharatiya Antariksh Hackathon 2025",
    organization: "ISRO / National Space Hackathon",
    metric: "2025 Participant",
    category: "National Hackathon",
    highlight: "Participated in Bharatiya Antariksh Hackathon 2025, solving complex space-tech engineering challenges and collaborative problem-solving."
  },
  {
    id: "ach-lc",
    title: "Knight Badge & Global Standing Top 3%",
    organization: "LeetCode",
    metric: "1950 Rating",
    category: "Competitive Programming",
    highlight: "Peak contest rating 1950, 75+ algorithm problems solved across arrays, DP & trees with 72.5% acceptance rate."
  },
  {
    id: "ach-cc",
    title: "4-Star Competitive Programmer",
    organization: "CodeChef",
    metric: "1840 Rating",
    category: "Competitive Programming",
    highlight: "Peak rating 1840 (4-Star), Global Rank #1,245, Country Rank #890, 42 rated contests attended."
  }
];

export const ADDITIONAL_CREDENTIALS_DATA: AdditionalCredentialItem[] = [
  {
    id: "add-1",
    title: "Web Developer Internship Completion",
    issuer: "Prodigy Infotech",
    type: "Industry Internship",
    year: "Jun 2025 – Jul 2025",
    verification: "Verified"
  },
  {
    id: "add-2",
    title: "Google Cloud Agentic AI Telemetry",
    issuer: "Hack2Skill / Google Cloud",
    type: "Hackathon Credential",
    year: "Feb 2025",
    verification: "Verified"
  },
  {
    id: "add-3",
    title: "AWS Academy Machine Learning Foundations",
    issuer: "Amazon Web Services (AWS)",
    type: "Cloud & ML Credential",
    year: "2025",
    verification: "Verified"
  },
  {
    id: "add-4",
    title: "Full Stack & Java Masterclass Specialization",
    issuer: "Udemy Verified Archive",
    type: "Technical Specialization",
    year: "2025",
    verification: "Completed"
  }
];
