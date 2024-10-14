
export interface Solution {
    name: string;
    icon: keyof typeof import("lucide-react");
    slug: string;
    categories: string[];
    color: string;
    description: string;
    features: string[];
}

export const solutions: Solution[] = [
    {
        name: "Ecommerce",
        icon: "ShoppingBag",
        slug: "ecommerce",
        categories: ["Seller", "Merchant"],
        color: "from-blue-400 to-blue-600",
        description:
            "Streamlined onboarding solutions tailored for both sellers and merchants to ensure smooth integration into your e-commerce platform.",
        features: [
            "Targeted merchant acquisition",
            //  "App download assistance",
            "Platform benefits demonstration",
            "Customized pitching strategies",
            //    "Performance tracking and reporting"
        ],
    },
    {
        name: "BFSI",
        slug: "bfsi",
        icon: "Building2",
        categories: ["SME", "Selling"],
        color: "from-green-400 to-green-600",
        description:
            "Empower your financial services with specialized onboarding tools for SMEs and digital payment solutions.",
        features: [
            "Merchant onboarding across cities",
            "Digital payment platform explanation",
            //  "Tailored benefit demonstrations",
            //    "Query resolution for trust-building",
            "Performance tracking and analysis"
        ],
    },
    {
        name: "Hospitality",
        icon: "Utensils",
        slug: "hospitality",
        categories: ["Hotel", "Restaurant", "Cafe"],
        color: "from-yellow-400 to-yellow-600",
        description:
            "Elevate your food delivery and restaurant discovery platform with our comprehensive onboarding solutions for diverse culinary establishments.",
        features: [
            "Restaurant network expansion",
            //  "Cuisine category diversification",
            // "Platform benefits presentation",
            "Personalized owner engagement",
            "Swift query resolution"
        ],
    },
    {
        name: "Mobility",
        icon: "Car",
        slug: "mobility",
        categories: ["Auto", "Cab", "Moto"],
        color: "from-red-400 to-red-600",
        description:
            "Accelerate your ride-hailing platform growth with our efficient driver and vehicle onboarding processes across multiple cities.",
        features: [
            "Pan-India partner onboarding",
            "On-field workforce deployment",
            "App-based onboarding assistance",
            // "Partner targeting and engagement",
            // "Field work tracking and reporting"
        ],
    },
    {
        name: "Logistics",
        icon: "Truck",
        slug: "logistics",
        categories: ["Truck", "Large Vehicles", "Semi-Large Vehicles"],
        color: "from-purple-400 to-purple-600",
        description:
            "Optimize your logistics operations with our specialized onboarding solutions for trucking and large vehicle categories, bringing offline operations online.",
        features: [
            // "Truck owner subscription management",
            //  "Load program onboarding",
            "Specialized Onboarding for Large Vehicles",
            "Technical support for monitoring",
            //"Productivity enhancement strategies",
            "Enhanced Operational Efficiency"
        ],
    },
];