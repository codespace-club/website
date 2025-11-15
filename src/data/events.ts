export interface Event {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  date: string;
  time: string;
  location: string;
  venue: string;
  category: string;
  status: "upcoming" | "past";
  registrationLink?: string;
  attendees?: number;
  sponsors?: {
    name: string;
    logo?: string;
  }[];
  guests?: {
    name: string;
    role: string;
    image?: string;
  }[];
  photos?: string[];
  highlights?: string[];
}

export const events: Event[] = [
  {
    id: "annual-hackathon-2024",
    title: "Annual Hackathon 2024",
    description: "48-hour coding marathon with exciting prizes and mentorship opportunities.",
    fullDescription: `Join us for our biggest event of the year! The Annual Hackathon 2024 brings together the brightest minds in tech for 48 hours of non-stop innovation, collaboration, and creativity.

This year's theme focuses on sustainable technology and social impact. Teams will compete to build solutions that address real-world problems while pushing the boundaries of what's possible with modern technology.

Participants will have access to industry mentors, workshops, and state-of-the-art facilities. Whether you're a seasoned developer or just starting your coding journey, this hackathon offers something for everyone.`,
    date: "2024-04-15",
    time: "9:00 AM - 9:00 PM (Day 1)",
    location: "Main Campus Auditorium",
    venue: "Building A, 3rd Floor",
    category: "Hackathon",
    status: "upcoming",
    registrationLink: "https://example.com/register",
    attendees: 250,
    sponsors: [
      { name: "Tech Corp" },
      { name: "Innovation Labs" },
      { name: "StartupHub" },
    ],
    guests: [
      {
        name: "Dr. Sarah Johnson",
        role: "Chief Technology Officer, Tech Corp",
      },
      {
        name: "Michael Chen",
        role: "Founder, Innovation Labs",
      },
      {
        name: "Emily Rodriguez",
        role: "Lead Developer, StartupHub",
      },
    ],
    highlights: [
      "Prize pool of $10,000",
      "Mentorship from industry experts",
      "Free meals and snacks",
      "Networking opportunities",
      "Workshop sessions on cutting-edge technologies",
    ],
  },
  {
    id: "ai-ml-workshop-series",
    title: "AI & ML Workshop Series",
    description: "Comprehensive workshop series covering machine learning fundamentals and advanced topics.",
    fullDescription: `Dive deep into the world of Artificial Intelligence and Machine Learning with our comprehensive workshop series. This multi-week program is designed to take you from basics to advanced concepts in AI/ML.

Week 1: Introduction to Machine Learning and Python for Data Science
Week 2: Supervised Learning - Regression and Classification
Week 3: Unsupervised Learning and Neural Networks
Week 4: Deep Learning with TensorFlow and PyTorch
Week 5: Real-world Projects and Deployment

Each session includes hands-on coding exercises, real-world case studies, and project work. By the end of the series, you'll have built and deployed multiple ML models.`,
    date: "2024-03-20",
    time: "6:00 PM - 8:00 PM",
    location: "Computer Lab 2",
    venue: "Building B, 2nd Floor",
    category: "Workshop",
    status: "upcoming",
    registrationLink: "https://example.com/register",
    attendees: 80,
    sponsors: [
      { name: "AI Research Institute" },
      { name: "DataTech Solutions" },
    ],
    guests: [
      {
        name: "Prof. James Liu",
        role: "AI Researcher, AI Research Institute",
      },
      {
        name: "Amanda Foster",
        role: "Data Scientist, DataTech Solutions",
      },
    ],
    highlights: [
      "Hands-on coding sessions",
      "Industry-standard tools and frameworks",
      "Certificate of completion",
      "Access to exclusive learning resources",
      "Project showcase opportunity",
    ],
  },
  {
    id: "tech-talk-blockchain",
    title: "Tech Talk: Blockchain & Web3",
    description: "Expert discussion on blockchain technology and the future of decentralized web.",
    fullDescription: `Join us for an enlightening evening exploring the revolutionary world of blockchain technology and Web3. This tech talk features leading experts who will demystify blockchain concepts and showcase real-world applications.

Topics covered:
- Blockchain fundamentals and architecture
- Smart contracts and DApps development
- Cryptocurrency and DeFi ecosystems
- NFTs beyond digital art
- The future of decentralized internet

The session includes live demonstrations, Q&A with experts, and networking opportunities with blockchain enthusiasts and professionals.`,
    date: "2024-03-25",
    time: "5:00 PM - 7:00 PM",
    location: "Seminar Hall",
    venue: "Building C, Ground Floor",
    category: "Tech Talk",
    status: "upcoming",
    attendees: 120,
    sponsors: [
      { name: "CryptoVentures" },
      { name: "BlockChain Innovators" },
    ],
    guests: [
      {
        name: "David Kumar",
        role: "Blockchain Architect, CryptoVentures",
      },
      {
        name: "Lisa Wang",
        role: "Smart Contract Developer, BlockChain Innovators",
      },
    ],
    highlights: [
      "Live smart contract demonstration",
      "Free blockchain development resources",
      "Networking with industry professionals",
      "Q&A session with experts",
    ],
  },
  {
    id: "web-dev-bootcamp-2023",
    title: "Web Development Bootcamp 2023",
    description: "Intensive bootcamp covering full-stack web development from basics to deployment.",
    fullDescription: `Our Web Development Bootcamp was a massive success! Over 150 students participated in this intensive program that covered everything from HTML/CSS basics to full-stack application deployment.

The bootcamp featured:
- Frontend development with React and modern JavaScript
- Backend development with Node.js and Express
- Database design with MongoDB and PostgreSQL
- API development and integration
- Deployment and DevOps basics

Participants built real-world projects and many have gone on to secure internships and jobs in web development.`,
    date: "2023-11-10",
    time: "10:00 AM - 6:00 PM",
    location: "Innovation Center",
    venue: "Building D, 1st Floor",
    category: "Bootcamp",
    status: "past",
    attendees: 150,
    sponsors: [
      { name: "WebTech Corp" },
      { name: "CloudHost Services" },
      { name: "DevTools Inc" },
    ],
    guests: [
      {
        name: "Rachel Green",
        role: "Senior Full-Stack Developer, WebTech Corp",
      },
      {
        name: "Tom Anderson",
        role: "DevOps Engineer, CloudHost Services",
      },
    ],
    photos: [],
    highlights: [
      "5-day intensive training",
      "Real-world project portfolio",
      "Job placement assistance",
      "Certificate of completion",
      "Alumni network access",
    ],
  },
  {
    id: "cybersecurity-summit-2023",
    title: "Cybersecurity Summit 2023",
    description: "Annual summit focusing on latest trends in cybersecurity and ethical hacking.",
    fullDescription: `The Cybersecurity Summit 2023 brought together security professionals, researchers, and students to discuss the latest trends and challenges in cybersecurity.

Key highlights included:
- Keynote speeches from industry leaders
- Live ethical hacking demonstrations
- Security challenges and CTF competition
- Workshops on penetration testing
- Panel discussions on data privacy

The event was attended by over 200 participants and featured some of the most renowned names in cybersecurity. Participants gained invaluable insights into protecting systems and data in an increasingly connected world.`,
    date: "2023-09-15",
    time: "9:00 AM - 5:00 PM",
    location: "Main Auditorium",
    venue: "Building A, Ground Floor",
    category: "Summit",
    status: "past",
    attendees: 200,
    sponsors: [
      { name: "SecureNet Solutions" },
      { name: "CyberGuard Technologies" },
      { name: "InfoSec Alliance" },
    ],
    guests: [
      {
        name: "Dr. Alex Morgan",
        role: "Chief Security Officer, SecureNet Solutions",
      },
      {
        name: "Jennifer Lee",
        role: "Ethical Hacker, CyberGuard Technologies",
      },
      {
        name: "Robert Davis",
        role: "Security Researcher, InfoSec Alliance",
      },
    ],
    photos: [],
    highlights: [
      "CTF competition with prizes",
      "Live hacking demonstrations",
      "Security certification workshops",
      "Networking with security professionals",
      "Exclusive access to security tools",
    ],
  },
  {
    id: "startup-pitch-competition-2023",
    title: "Startup Pitch Competition 2023",
    description: "Student startups competed for funding and mentorship opportunities.",
    fullDescription: `The Startup Pitch Competition 2023 was an incredible showcase of entrepreneurial talent! Twenty student teams presented their innovative business ideas to a panel of investors and industry experts.

The competition featured:
- 3-minute pitch presentations
- Live Q&A with judges
- Networking sessions with investors
- Mentorship opportunities
- Prize money for top 3 teams

Winners received funding, mentorship, and access to incubation facilities. The event demonstrated the entrepreneurial spirit of our student community and resulted in several teams securing seed funding for their ventures.`,
    date: "2023-08-20",
    time: "2:00 PM - 7:00 PM",
    location: "Business Innovation Center",
    venue: "Building E, 3rd Floor",
    category: "Competition",
    status: "past",
    attendees: 180,
    sponsors: [
      { name: "Venture Capital Group" },
      { name: "Angel Investors Network" },
      { name: "Startup Accelerator" },
    ],
    guests: [
      {
        name: "Mark Johnson",
        role: "Managing Partner, Venture Capital Group",
      },
      {
        name: "Sarah Williams",
        role: "Angel Investor",
      },
      {
        name: "Kevin Brown",
        role: "Director, Startup Accelerator",
      },
    ],
    photos: [],
    highlights: [
      "Prize pool of $25,000",
      "Mentorship from successful entrepreneurs",
      "Investor networking",
      "Media coverage",
      "Incubation center access for winners",
    ],
  },
];
