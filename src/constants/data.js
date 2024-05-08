import testimonial1 from '../assets/images/testimonials/testimonial-1.jpg';
import testimonial2 from '../assets/images/testimonials/testimonial-2.jpg';
import testimonial3 from '../assets/images/testimonials/testimonial-3.jpg';

const statsData = [
    {
        id: 1,
        title: "Revenue Loss",
        value: "PKR 1,07,552",
        unit: "PKR"
    },
    {
        id: 2,
        title: "Potential Issues",
        value: "50",
        unit: ""
    },
    {
        id: 3,
        title: "Power Loss",
        value: "2.126 (KW)",
        unit: "(KW)"
    },

];


const faultTypeData = [
    {
        name: 'Active Bypass Diode',
        value: 12,
    },
    {
        name: 'Single-Cell Hotspot',
        value: 30,
    },
    {
        name: 'Multi-Cell Hotspot',
        value: 8,
    },
];



const accPowerLossData = [
    {
        name: 'Active Bypass Diode',
        value: 1.05,
    },
    {
        name: 'Single-Cell Hotspot',
        value: 0.69,
    },
    {
        name: 'Multi-Cell Hotspot',
        value: 0.26,
    },
];

const faultTypeDist = [
    {
        name: 'Active Bypass Diode',
        value: 26,
    },
    {
        name: 'Single-Cell Hotspot',
        value: 60,
    },
    {
        name: 'Multi-Cell Hotspot',
        value: 14,
    },
];


const accFinLossData = [
    {
        name: 'Active Bypass Diode',
        value: 52000,
    },
    {
        name: 'Single-Cell Hotspot',
        value: 37000,
    },
    {
        name: 'Multi-Cell Hotspot',
        value: 18000,
    },
];


const testimonials = [
    {
        name: "Emily Smith",
        experience: "Homeowner",
        imageSrc: testimonial1,
        description:
            "Exceptional Service! Spectrave provided us with an outstanding experience from start to finish. Their team of experts guided us through every step of the solar installation process, making it seamless and stress-free. The quality of their workmanship and attention to detail exceeded our expectations. We're thrilled with the results and highly recommend Spectrave to anyone considering solar energy!",
        rating: 5,
    },
    {
        name: "Sophia Rodriguez",
        experience: "Business Owner",
        imageSrc: testimonial2,
        description:
            "Impressive Results! Thanks to Spectrave, our business has significantly reduced its carbon footprint and energy costs with solar power. Their team conducted a thorough assessment of our energy needs and customized a solution that perfectly suited our requirements. The installation process was efficient, and the ongoing support has been exceptional. We're delighted with the impact solar energy has had on our bottom line and our commitment to sustainability!",
        rating: 5,
    },
    {
        name: "Michael Johnson",
        experience: "Environmentalist",
        imageSrc: testimonial3,
        description:
            "Highly Satisfied! Spectrave's dedication to environmental sustainability is truly commendable. They helped me transition to solar energy for my home, and I couldn't be happier with the decision. Not only am I saving money on my energy bills, but I also have peace of mind knowing that I'm reducing my carbon footprint. The professionalism and expertise of the Spectrave team made the entire process seamless. I wholeheartedly recommend them to anyone looking to make a positive impact on the planet!",
        rating: 5,
    },
];




export { statsData, faultTypeData, accPowerLossData, faultTypeDist, accFinLossData, testimonials }