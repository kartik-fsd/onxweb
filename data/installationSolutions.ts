

export interface Solution {
    name: string;
    icon: keyof typeof import("lucide-react");
    slug: string;
    categories: string[];
    color: string;
    description: string;
    features: string[];
}

export const industries: Solution[] = [
    // {
    //     name: "Enterprise Networking Solutions",
    //     icon: "Wifi",
    //     slug: "enterprise-networking",
    //     categories: ["Network Infrastructure", "Wireless Solutions", "Network Security"],
    //     color: "from-blue-400 to-blue-600",
    //     description: "Empower your business with cutting-edge enterprise networking solutions for seamless connectivity and enhanced productivity.",
    //     features: [
    //         "High-Performance Network Architecture",
    //         "Advanced Security Protocols",
    //         "Scalable Network Management"
    //     ],
    // },
    // {
    //     name: "Telecommunications Technology",
    //     icon: "Phone",
    //     slug: "telecommunications-tech",
    //     categories: ["5G Networks", "Fiber Optic Solutions", "Cloud Communications"],
    //     color: "from-green-400 to-green-600",
    //     description: "Transform your communication infrastructure with state-of-the-art telecommunications technology for unparalleled connectivity and reliability.",
    //     features: [
    //         "Next-Generation 5G Deployment",
    //         "High-Speed Fiber Optic Networks",
    //         "Unified Communications Platforms"
    //     ],
    // },
    {
        name: "EV Infra",
        icon: "Zap",
        slug: "ev-infrastructure",
        categories: ["EV Charging Networks", "Battery Technology", "Sustainable Transportation"],
        color: "from-red-400 to-red-600",
        description: "Expert installation of EV charging stations, ensuring reliable and efficient setup for residential, commercial, and public infrastructure projects.",
        features: [
            "Precision EV Charger Mounting and Wiring",
            "Nationwide Installation Coverage",
            "Streamlined, Client-Focused Installation Process"
        ],
    },
    {
        name: "Home Utility",
        icon: "Wrench",
        slug: "utility-management",
        categories: ["Kitchen Appliance", "Water System", "Home Safety", "Entertainment Setup", "Energy & Major Appliance "],
        color: "from-yellow-400 to-yellow-600",
        description: "Comprehensive installation services for home appliances and utility systems, ensuring optimal performance and integration within residential settings.",
        features: [
            "Expert Appliance Positioning and Connection",
            "Seamless Client Education & Operational Training",
            "Efficient and Clean Installation Process"
        ],
    },
    // {

    //     icon: "Refrigerator",
    //     name: "Smart Home Appliance ",
    //     slug: "smart-home-appliance-installation",
    //     categories: ["Connected Appliances", "Energy-Efficient Solutions", "Smart Home Ecosystems"],
    //     color: "from-gray-400 to-gray-600",
    //     description: "We offer flexible, on-demand workforce solutions to B2B companies for seamless, hassle-free installation of smart home appliances.",
    //     features: [
    // "Scalable Workforce Solutions for All Leading Brands",
    // "End-to-End Installation Management",
    // "Post-Installation Support"
    //     ],
    // },
    // {
    //     name: "Solar Energy Systems",
    //     icon: "Sun",
    //     slug: "solar-energy-systems",
    //     categories: ["Photovoltaic Solutions", "Solar Power Storage", "Renewable Energy Management"],
    //     color: "from-orange-400 to-orange-600",
    //     description: "Harness the power of the sun with advanced solar energy systems for sustainable and cost-effective power generation.",
    //     features: [
    //         "High-Efficiency Solar Panels",
    //         "Intelligent Energy Storage Solutions",
    //         "Solar Performance Analytics"
    //     ],
    // },
    // {
    //     name: "Smart Metering Technology",
    //     icon: "Gauge",
    //     slug: "smart-metering",
    //     categories: ["Advanced Metering Infrastructure", "Energy Management Systems", "Utility Analytics"],
    //     color: "from-purple-400 to-purple-600",
    //     description: "Optimize resource management with innovative smart metering technology for improved accuracy, efficiency, and customer engagement.",
    //     features: [
    //         "Real-Time Consumption Monitoring",
    //         "Predictive Maintenance Algorithms",
    //         "Smart Grid Integration"
    //     ],
    // },
    // {
    //     name: "IoT Ecosystem Solutions",
    //     icon: "Cpu",
    //     slug: "iot-ecosystem",
    //     categories: ["Industrial IoT", "Smart City Technologies", "Connected Devices"],
    //     color: "from-red-400 to-red-600",
    //     description: "Create interconnected, intelligent environments with comprehensive IoT ecosystem solutions for enhanced efficiency and innovation.",
    //     features: [
    //         "Seamless Device Interoperability",
    //         "Edge Computing Capabilities",
    //         "Advanced Data Analytics"
    //     ],
    // },
    {
        name: "BFSI & Financial",
        icon: "CreditCard",
        slug: "fintech-systems",
        categories: ["Digital Payment Solutions", "Banking Automation", "POS/Kiosks"],
        color: "from-purple-400 to-purple-600",
        description: "Professional installation services for financial hardware, including POS systems, and banking kiosks, ensuring secure and efficient setup.",
        features: [
            "Precise Hardware Placement and Configuration",
            "Secure Network Integration for Financial Systems",
            "Compliance-Focused Installation Protocols"
        ],
    },
    {
        name: "Digital Inspection",
        icon: "ClipboardCheck",
        slug: "digital-inspections",
        categories: ["Quality Assurance Technology", "Compliance Management"],
        color: "from-green-400 to-green-600",
        description: "Skilled digital inspection and quality control, tailored to meet specific industry compliance and efficiency standards.",
        features: [
            "Photo & Video Documentation",
            "Predictive Maintenance Insights",
            "Real-Time Reporting & Analytics"
        ],
    },
    // {
    //     name: "Digital Signage Innovations",
    //     icon: "Monitor",
    //     slug: "digital-signage",
    //     categories: ["Interactive Displays", "Outdoor Advertising Technology", "Retail Media Solutions"],
    //     color: "from-teal-400 to-teal-600",
    //     description: "Transform customer engagement with state-of-the-art digital signage innovations for impactful visual communications.",
    //     features: [
    //         "Dynamic Content Management",
    //         "AI-Driven Audience Analytics",
    //         "Touchless Interactive Displays"
    //     ],
    // },
    // {
    //     name: "Satellite Communication Systems",
    //     icon: "Satellite",
    //     slug: "satellite-communications",
    //     categories: ["Global Connectivity Solutions", "Maritime Communications", "Remote Area Networks"],
    //     color: "from-cyan-400 to-cyan-600",
    //     description: "Enable seamless global communications with advanced satellite systems for reliable connectivity in the most challenging environments.",
    //     features: [
    //         "High-Throughput Satellite Networks",
    //         "Low-Latency Data Transmission",
    //         "Robust Emergency Communication Systems"
    //     ],
    // },

];