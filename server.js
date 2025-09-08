import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

// FAQ responses
const faqResponses = {
  programs: "Iron Lady offers programs: Women Leadership, Career Acceleration, Corporate Training, Public Speaking, Mentorship Program, Entrepreneurship Bootcamp, Personal Branding, Time Management, Negotiation Skills, Emotional Intelligence, Diversity & Inclusion, Team Building, Conflict Management, Strategic Thinking, Decision Making, Networking, Self-Development, Presentation Skills, Leadership Retreats, and Innovation Labs.",
  duration: "Programs run from 4 to 12 weeks depending on the track.",
  mode: "Most programs are online, some hybrid options are available.",
  certificate: "Yes, participants receive official Iron Lady certificates upon completion.",
  mentors: "Mentors are experienced leaders from top corporates and successful entrepreneurs.",
  eligibility: "Open to women professionals, students, and aspiring leaders.",
  fees: "Program fees vary per track. Scholarships are available for select programs.",
  enrollment: "You can enroll via the Iron Lady website or contact support.",
  benefits: "Enhances leadership skills, confidence, network, and career growth.",
  topics: "Covers leadership, communication, strategy, management, and personal growth.",
  workshops: "Regular workshops and webinars are part of the programs.",
  networking: "Participants get access to a global network of women leaders.",
  mentorship: "One-on-one mentorship sessions are provided in selected programs.",
  career_support: "Career guidance, resume reviews, and interview prep are offered.",
  alumni: "Alumni include leaders from Fortune 500 companies and startups.",
  success_stories: "Many participants have received promotions and started businesses.",
  certification_body: "Certificates are issued by Iron Lady Organization.",
  attendance: "Attendance is mandatory for live sessions; recordings are available.",
  feedback: "Participants provide feedback through surveys after each module.",
  contact: "Reach us at contact@ironlady.org or call +1-234-567-890."
};

// Serve UI
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Chat endpoint
app.post("/chat", (req, res) => {
  const userMessage = req.body.message?.toLowerCase() || "";

  let reply =
    "I’m not sure about that. Ask me about programs, duration, mode, certificates, mentors, eligibility, fees, enrollment, benefits, topics, workshops, networking, mentorship, career support, alumni, success stories, certification body, attendance, feedback, or contact.";

  if (userMessage.includes("program")) reply = faqResponses.programs;
  else if (userMessage.includes("duration")) reply = faqResponses.duration;
  else if (userMessage.includes("online") || userMessage.includes("offline") || userMessage.includes("mode")) reply = faqResponses.mode;
  else if (userMessage.includes("certificate")) reply = faqResponses.certificate;
  else if (userMessage.includes("mentor") || userMessage.includes("coach")) reply = faqResponses.mentors;
  else if (userMessage.includes("eligibility")) reply = faqResponses.eligibility;
  else if (userMessage.includes("fee")) reply = faqResponses.fees;
  else if (userMessage.includes("enroll") || userMessage.includes("registration")) reply = faqResponses.enrollment;
  else if (userMessage.includes("benefit")) reply = faqResponses.benefits;
  else if (userMessage.includes("topic")) reply = faqResponses.topics;
  else if (userMessage.includes("workshop")) reply = faqResponses.workshops;
  else if (userMessage.includes("network")) reply = faqResponses.networking;
  else if (userMessage.includes("mentorship")) reply = faqResponses.mentorship;
  else if (userMessage.includes("career")) reply = faqResponses.career_support;
  else if (userMessage.includes("alumni")) reply = faqResponses.alumni;
  else if (userMessage.includes("success")) reply = faqResponses.success_stories;
  else if (userMessage.includes("certification body")) reply = faqResponses.certification_body;
  else if (userMessage.includes("attendance")) reply = faqResponses.attendance;
  else if (userMessage.includes("feedback")) reply = faqResponses.feedback;
  else if (userMessage.includes("contact")) reply = faqResponses.contact;

  res.json({ reply });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`🤖 Iron Lady Chatbot running at http://localhost:${PORT}`));
