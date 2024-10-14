export interface Reason {
    icon: keyof typeof import("lucide-react");
    title: string;
    description: string;
    stat: {
        value: number;
        unit: string;
        prefix: string;
    };
    details: string[];
    color: string;
}

export const installationReasons: Reason[] = [
    {
        // icon:<Sparkles className="h-8 w-8" />,
        icon: "Sparkles",
        title: "Comprehensive Solutions",
        description: "End-to-end installation services for various industries.",
        stat: { value: 19000, unit: "+ Pincodes Covered", prefix: "" },
        details: [
            "EV charger installations",
            "Earthing solutions",
            "Maintenance services",
        ],
        color: "from-indigo-400 to-violet-600",
    },
    {
        // icon:<Award className="h-8 w-8" />,
        icon: "Award",
        title: "Industry Expertise",
        description: "Proven track record in installation projects.",
        stat: { value: 25000, unit: "Installations", prefix: "+" },
        details: [
            "Skilled and semi-skilled technicians",
            "Rigorous training on SOPs",
            "Experience with major brands like OLA and Bolt",
        ],
        color: "from-yellow-400 to-orange-500",
    },
    {
        // icon:<Clock className="h-8 w-8" />,
        icon: "Clock",
        title: "Efficient Operations",
        description: "Streamlined processes for faster deployments.",
        stat: { value: 27, unit: "% Faster TAT", prefix: "" },
        details: [
            "Quick setup time of 7-14 days",
            "Real-time tracking and reporting",
            "Automated daily, weekly, and monthly reports",
        ],
        color: "from-green-400 to-emerald-600",
    },
    {
        // icon:<Users className="h-8 w-8" />,
        icon: "User"
        , title: "Flexible Workforce",
        description: "On-demand deployment for optimal resource utilization.",
        stat: { value: 200, unit: "Technicians", prefix: "+" },
        details: [
            "Skilled technicians across multiple cities",
            "Scalable workforce for project requirements",
            "Continuous training and skill development",
        ],
        color: "from-blue-400 to-indigo-600",
    },
    {
        // icon:<Zap className="h-8 w-8" />,
        icon: "Zap",
        title: "Tech-Enabled Platform",
        description: "Advanced tools for project management and tracking.",
        stat: { value: 100, unit: "% Variable Cost", prefix: "" },
        details: [
            "Real-time monitoring of technicians",
            "Automated reporting systems",
            "Data-driven insights for improvement",
        ],
        color: "from-purple-400 to-fuchsia-600",
    },
    {
        // icon:<ShieldCheck className="h-8 w-8" />,
        icon: "ShieldCheck",
        title: "Quality Assurance",
        description: "Commitment to excellence in every installation.",
        stat: { value: 360, unit: "° Quality Checks", prefix: "" },
        details: [
            "Comprehensive audit services",
            "Regular feedback collection",
            "Continuous process improvement",
        ],
        color: "from-red-400 to-rose-600",
    },
];

export const onboardingReasons: Reason[] = [
    {
        icon: "Users",
        title: "Extensive Experience",
        description: "Proven expertise in merchant and partner onboarding across industries.",
        stat: { value: 100000, unit: "Successful Onboardings", prefix: "+" },
        details: [
            "Partnerships with Amazon, Meesho, Paytm, Zomato, Ola, and Uber",
            "Multi-sector expertise: e-commerce, ride-hailing, payments, food delivery",
            "Tailored strategies for different platforms and industries",
        ],
        color: "from-indigo-400 to-violet-600",
    },
    {
        icon: "Map",
        title: "Nationwide Reach",
        description: "Extensive coverage for comprehensive onboarding solutions.",
        stat: { value: 19000, unit: "Pincodes Covered", prefix: "+" },
        details: [
            "Operations in major metros, tier-2, and tier-3 cities",
            "Ability to rapidly scale to new locations",
            "Local expertise for region-specific onboarding challenges",
        ],
        color: "from-green-400 to-emerald-600",
    },
    {
        icon: "UserPlus",
        title: "Skilled Workforce",
        description: "Dedicated team of trained professionals for efficient onboarding.",
        stat: { value: 1000, unit: "Trained Taskers", prefix: "+" },
        details: [
            "Continuous training and upskilling programs",
            "Blend of skilled and semi-skilled professionals",
            "Expertise in handling various onboarding tasks and complexities",
        ],
        color: "from-yellow-400 to-orange-500",
    },
    {
        icon: "Zap",
        title: "Tech-Enabled Solutions",
        description: "Cutting-edge technology for streamlined onboarding processes.",
        stat: { value: 100, unit: "% Real-time Tracking", prefix: "" },
        details: [
            "Automated reporting systems for daily, weekly, and monthly updates",
            "Data-driven insights for continuous improvement",
            "Efficient resource allocation based on project requirements",
        ],
        color: "from-purple-400 to-fuchsia-600"
    },
    {
        icon: "Banknote",
        title: "Cost-Effective Model",
        description: "Flexible and efficient pricing for optimal resource utilization.",
        stat: { value: 18, unit: "% Cost Reduction", prefix: "Up to " },
        details: [
            "On-demand deployment reducing fixed overheads",
            "Pay only for successful onboardings",
            "Scalable workforce to manage seasonal demands efficiently",
        ],
        color: "from-red-400 to-rose-600",
    },
    {
        icon: "ShieldCheck",
        title: "Quality Assurance",
        description: "Commitment to excellence in every onboarding process.",
        stat: { value: 360, unit: "° Quality Checks", prefix: "" },
        details: [
            "Rigorous training on Standard Operating Procedures (SOPs)",
            "Regular feedback collection from merchants and partners",
            "Continuous improvement of onboarding processes",
        ],
        color: "from-violet-400 to-indigo-600",
    },
];