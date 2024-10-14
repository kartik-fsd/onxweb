export interface Testimonial {
    id: number;
    name: string;
    position: string;
    company: string;
    quote: string;
    rating: number;
    solution: string;
    impact: string;
}

export const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Priya Sharma",
        position: "Product Head",
        company: "TechInnovate Solutions",
        quote:
            "Awign's ONX streamlined our onboarding process, reducing time-to-productivity significantly. It's been a game-changer for our rapid growth.",
        rating: 5,
        solution: "Ecommerce",
        impact: "40% faster onboarding",
    },
    {
        id: 2,
        name: "Rahul Patel",
        position: "Operations Manager",
        company: "SwiftLogistics",
        quote:
            "The customization options in ONX allowed us to create a seamless onboarding experience for our diverse driver network. Highly recommended!",
        rating: 4,
        solution: "Logistics",
        impact: "98% driver satisfaction",
    },
    {
        id: 3,
        name: "Anita Desai",
        position: "Customer Success Lead",
        company: "FintechPro",
        quote:
            "ONX simplified our complex compliance requirements. We've seen a significant increase in onboarding completion rates since implementation.",
        rating: 5,
        solution: "BFSI",
        impact: "30% higher completion",
    },
];
export const onboardingTestimonials: Testimonial[] = [
    {
        id: 1,
        name: "Aisha Kapoor",
        position: "Merchant Acquisition Lead",
        company: "QuickCommerce",
        quote:
            "Awign's ONX transformed our seller onboarding process. Their nationwide reach and tech-enabled solutions helped us expand into new markets rapidly.",
        rating: 5,
        solution: "E-commerce",
        impact: "200% increase in seller acquisition",
    },
    {
        id: 2,
        name: "Karthik Nair",
        position: "Operations Manager",
        company: "SwiftRide",
        quote:
            "The customized onboarding strategies provided by ONX significantly improved our driver retention rates. Their on-ground team's efficiency is commendable.",
        rating: 4,
        solution: "Ride-hailing",
        impact: "30% improvement in driver retention",
    },
    {
        id: 3,
        name: "Meera Saxena",
        position: "Partner Relations Head",
        company: "FoodExpress",
        quote:
            "ONX's end-to-end management of our restaurant partner onboarding has been a game-changer. Their quality assurance processes ensure we maintain high standards.",
        rating: 5,
        solution: "Food Delivery",
        impact: "50% faster restaurant onboarding",
    },
];
export const installationTestimonials: Testimonial[] = [
    {
        id: 1,
        name: "Vikram Mehta",
        position: "Operations Director",
        company: "EV Charge Networks",
        quote:
            "Awign's ONX revolutionized our EV charger installations. Their tech-enabled platform and skilled technicians reduced our deployment time significantly.",
        rating: 5,
        solution: "EV Infrastructure",
        impact: "27% faster installations",
    },
    {
        id: 2,
        name: "Sneha Reddy",
        position: "Project Manager",
        company: "GreenPower Solutions",
        quote:
            "The quality of installations and the comprehensive audit services provided by ONX have been exceptional. It's greatly improved our customer satisfaction.",
        rating: 5,
        solution: "Renewable Energy",
        impact: "95% customer satisfaction",
    },
    {
        id: 3,
        name: "Rajesh Kumar",
        position: "Facilities Head",
        company: "TechCampus India",
        quote:
            "ONX's flexible workforce model allowed us to scale our office setup rapidly across multiple cities without compromising on quality.",
        rating: 4,
        solution: "Corporate Infrastructure",
        impact: "40% cost reduction",
    },
];