// Define the structure for each section
interface Section {
    title: string;
    content: string | string[];  // Can be a single string or an array of strings
    description?: string;        // Optional field for sections that have a description
    subdesc?: string;            // Optional field for sections that have a sub-description
    contact?: {                  // Optional field for sections that have contact info
        name: string;
        email: string;
    };
}

// Define the sections data
export const privacyData: Section[] = [
    {
        title: "Introduction",
        content: `Onx By Awign Enterprises Private Limited (hereinafter referred to as "We", "Our", "Us" and "Onx" and shall include any affiliates) understands the privileged position We are in while providing the services through Our website 'www.onxwork.com' and/ or mobile application 'Onx By Awign Enterprises' available at Google Play store and Apple App Store (collectively referred to as "Platform") and are committed to protecting the information and data shared by all of Our users (hereinafter referred to as "You", "Yourself" and "User"). This privacy policy ("Privacy Policy") is in compliance with the Information Technology Act, 2000 and Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Information) Rules, 2011.`,
    },
    {
        title: "1. Your Consent",
        content: [
            "You may visit our Platform anonymously without providing any personal information. However, as a prerequisite We collect personal information from You when You register on the Platform for obtaining access to the Platform and usage of the services provided on the Platform, and such usage is deemed as Your acceptance of this Privacy Policy.",
            "This Privacy Policy shall apply to all entities that use the Platform. You grant Your consent to be bound by the terms of this Privacy Policy by:",
            "- accessing the Platform or registering on the Platform;",
            "- submitting any information to Onx; and",
            "- using the services offered by Onx on the Platform.",
            "As a part of providing our services to You or Your engagement as Project Participant with the Company, We may need to send routine communications to You. We may send such communications through any means available, including email, text, WhatsApp, other forms of messaging or calls.",
            "When You register with the Platform You also consent to allowing us to periodically send emails pertaining to marketing, new solutions/ jobs amongst others. You can opt out of receiving such communications by following the process mentioned in the communication or by sending us an email at support@onx.com.",
            "You must ensure to provide Us with the correct or up-to-date personal information at the time of Your registration on the Platform and during the use of our services.",
            "If, at any time, You want to access, update, modify or delete any information provided by You or which forms a part of the account created on the Platform, You may do so by accessing your account or by writing to us at support@onx.com or calling us at 080-45685396.",
        ],
    },
    {
        title: "2. Information Collected by the Company",
        description: "The Company collects the following Personal Information from all its users:",
        content: [
            "Mobile number",
            "Alternate number, if any",
            "E-Mail address",
            "Name",
            "Gender",
            "Date of birth",
            "Current location/ area/ location",
            "Pin code",
            "Past work experience",
            "Education qualification",
            "Electronic devices and/ or assets owned",
            "Preferred mode of communication",
            "Disability status",
            "Permanent Account Number (PAN)/ copy of PAN Card or other government recognized identity proof",
            "Bank account details",
            "Other ancillary information as required to carry out our operations",
        ],
        subdesc: "We may also collect Non-Personal Information, including location, browser information, internet protocol address, information collected through Cookies, details of Your internet service provider, and other technologies.",
    },
    {
        title: "3. Use of Your Information",
        content: `Onx will collect and retain your personal information only to the extent that it is necessary to fulfil Our services to You and for regulatory purposes. Any personal information submitted by You on the Platform or collected by us will be used ONLY for the purposes mentioned in the Privacy Policy, including user registration, responding to questionnaires, delivering targeted marketing communications, carrying out service requests, personalizing your experience, and dealing with grievances and complaints.`,
    },
    {
        title: "4. Security Policy",
        content: `Our security systems and process are compliant with applicable laws. Onx By Awign Enterprises takes careful precaution to protect our User's personal information from unauthorized access, improper use or disclosure or unauthorized modification. To prevent unauthorized access, We have put in place the latest industry-standard security technology and procedures to safeguard the information we collect online.`,
    },
    {
        title: "5. Storage and Data Retention Policy",
        content: `You agree and acknowledge that We shall retain all information provided by You until such time as required by Us or is otherwise required under the applicable laws for the time being in force. We may retain Your information being engaged as a Project Participant for perpetuity, unless specifically requested by You for deletion of the same from our systems.`,
    },
    {
        title: "6. Disclosure of Information",
        content: `We do not rent or sell Your Personal Information. We do not share Your Personal Information with third parties or non-affiliated companies except in accordance with this Privacy Policy and our Terms and Conditions. We limit the disclosure of Personal Information to such necessary persons who have a "need-to-know" such information, and only if the disclosure will enable that entity to provide Us with business, professional, or technical support to carry out our operations in relation to providing You our services or engagement with You.`,
    },
    {
        title: "7. Amendment of Privacy Policy",
        content: `We may update or amend this Privacy Policy at any time, with or without advance notice. In the event there are significant changes in the way the Company treats the User's information, the Company may display a notice on the Platform.`,
    },
    {
        title: "8. Third Party Links",
        content: `In an attempt to provide You with increased value, We may include on our Platform links to third party websites/ applications (referred to as "Third-Party Links") which are operated by third parties and are not controlled by, or affiliated to, or associated with Onx By Awign Enterprises unless expressly specified on the Platform.`,
    },
    {
        title: "9. Grievance Officer",
        content: `If You have any complaint or grievances or concerns with respect to the Platform or this Privacy Policy, please inform such matters to the designated Grievance Officer as mentioned below in writing or through electronic mail:`,
        contact: {
            name: "Mr. Praveen Sah",
            email: "support@onx.com",
        },
    },
    {
        title: "10. Governing Law And Dispute Resolution",
        content: `This Privacy Policy shall be governed by and construed in accordance with the laws of the Republic of India. The courts at Bangalore shall have exclusive jurisdiction in relation to any disputes arising out of or in connection with this Privacy Policy.`,
    },
];
