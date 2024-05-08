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

export { statsData, faultTypeData, accPowerLossData, faultTypeDist, accFinLossData }