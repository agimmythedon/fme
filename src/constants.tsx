import { motion } from "motion/react";
import { 
  Bus, 
  Accessibility, 
  Car, 
  Bike, 
  ShieldCheck, 
  Leaf, 
  Briefcase, 
  GraduationCap, 
  Map, 
  Route, 
  Users, 
  Building2, 
  Globe, 
  CheckCircle2,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Menu,
  X
} from "lucide-react";

export const COLORS = {
  navy: "#1e293b", // slate-800
  charcoal: "#334155", // slate-700
  steel: "#64748b", // slate-500
  teal: "#0d9488", // teal-600
  accent: "#10b981", // emerald-500
  light: "#f8fafc", // slate-50
};

export const Logo = ({ className = "h-12 w-auto" }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="grid grid-cols-2 gap-0.5 w-10 h-10">
      <div className="bg-[#56b4e9] flex items-center justify-center p-1">
        <Bus className="text-white w-full h-full" />
      </div>
      <div className="bg-[#92d050] flex items-center justify-center p-1">
        <Accessibility className="text-white w-full h-full" />
      </div>
      <div className="bg-[#262626] flex items-center justify-center p-1">
        <Car className="text-white w-full h-full" />
      </div>
      <div className="bg-[#c4bd97] flex items-center justify-center p-1">
        <Bike className="text-white w-full h-full" />
      </div>
    </div>
    <div className="flex flex-col leading-none font-sans">
      <span className="text-xl font-bold tracking-tighter text-slate-900">FME</span>
      <span className="text-[8px] font-semibold tracking-widest text-slate-600 uppercase">Future Mobility</span>
      <span className="text-[8px] font-semibold tracking-widest text-slate-600 uppercase">Engineering</span>
    </div>
  </div>
);

export const SERVICES = [
  {
    id: "universal-access",
    title: "Universal Access and Design",
    icon: Accessibility,
    image: "/Image/1684148642791.jpeg",
    description: "Specialist consulting in creating inclusive environments that cater to all users, regardless of ability.",
    details: [
      "TGSI Standards Development to address industry confusion",
      "Universal Access reviews and recommendations",
      "Compliance audits for built environments",
      "Inclusive design strategy for transport systems"
    ]
  },
  {
    id: "transport-engineering",
    title: "Highways & Transport Engineering",
    icon: Route,
    image: "/Image/1535109171_tmp_IMG_3128.jpg",
    description: "Comprehensive engineering solutions for road networks, traffic management, and transportation systems.",
    details: [
      "Master Plans and Feasibility Studies",
      "Road Engineering Consulting & Improvement Projects",
      "Traffic Impact Assessments",
      "Road Safety Assessments"
    ]
  },
  {
    id: "nmt-infrastructure",
    title: "Non-Motorised Transport (NMT)",
    icon: Bike,
    image: "/Image/1684148940583.jpeg",
    description: "Designing safe and efficient infrastructure for pedestrians and cyclists to promote sustainable mobility.",
    details: [
      "Pedestrian and Cycle Infrastructure Design",
      "NMT Master Planning",
      "Safety improvements for vulnerable road users",
      "Integration with public transport nodes"
    ]
  },
  {
    id: "public-transport",
    title: "Public Transport Facilities",
    icon: Bus,
    image: "/Our Clients /Aerial+view+of+a+3D+model+of+one+of+the+station+prototypes.webp",
    description: "Planning and engineering for efficient public transport systems, including BRT infrastructure.",
    details: [
      "Bus Rapid Transit (BRT) infrastructure and systems",
      "Intermodal facility design",
      "Public transport network planning",
      "Operational feasibility studies"
    ]
  },
  {
    id: "project-management",
    title: "Project Management & Consulting",
    icon: Briefcase,
    image: "/Image/1601819980830.jpeg",
    description: "End-to-end management of complex infrastructure projects with a focus on quality and sustainability.",
    details: [
      "Environmental Consulting",
      "Strategic Infrastructure Planning",
      "Technical Advisory Services",
      "Policy Alignment and Implementation"
    ]
  }
];

export const SECTORS = [
  { name: "Municipalities", icon: Building2 },
  { name: "Government Departments", icon: Globe },
  { name: "Urban Developers", icon: Map },
  { name: "Transport Authorities", icon: Route },
  { name: "Engineering Consultants", icon: Briefcase },
  { name: "Architects & Planners", icon: Users }
];

export const CLIENTS = [
  { name: "A-Re-Yeng", logo: "/Our Clients /A-Re-Yeng-Logo-270px (1).png" },
  { name: "City of Tshwane", logo: "/Our Clients /City-of-Tshwane-Logo-768x740 (1).png" },
  { name: "Engineering Aces", logo: "/Our Clients /ENGINEERING-ACES-Logo-Elements-01-1.png" },
  { name: "Johannesburg Development Agency", logo: "/Our Clients /jda_logo_header_medium_png.png" },
  { name: "Mangaung Metropolitan Municipality", logo: "/Our Clients /Mangaung_CoA (1).png" },
  { name: "Transport Partner", logo: "/Our Clients /Logo-500x197-colour.png" },
  { name: "Infrastructure Partner", logo: "/Our Clients /Picture2 (1).png" },
  { name: "Mobility Partner", logo: "/Our Clients /images (1).png" },
];
