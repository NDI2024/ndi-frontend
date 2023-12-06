/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    "50": "#eff6ff",
                    "100": "#dbeafe",
                    "200": "#bfdbfe",
                    "300": "#93c5fd",
                    "400": "#60a5fa",
                    "500": "#3b82f6",
                    "600": "#2563eb",
                    "700": "#1d4ed8",
                    "800": "#1e40af",
                    "900": "#1e3a8a",
                    "950": "#172554"
                },
                danger: {
                    "50": "#fdf2f2",
                    "100": "#fde8e8",
                    "200": "#fbd5d5",
                    "300": "#f8b4b4",
                    "400": "#f98080",
                    "500": "#f05252",
                    "600": "#e02424",
                    "700": "#c81e1e",
                    "800": "#9b1c1c",
                    "900": "#771d1d"
                },
                success: {
                    "50": "#f0fdf4",
                    "100": "#dcfce7",
                    "200": "#bbf7d0",
                    "300": "#86efac",
                    "400": "#4ade80",
                    "500": "#22c55e",
                    "600": "#16a34a",
                    "700": "#15803d",
                    "800": "#166534",
                    "900": "#14532d"
                },
                warning: {
                    "50": "#fdfdea",
                    "100": "#fdf6b2",
                    "200": "#fce96a",
                    "300": "#faca15",
                    "400": "#e3a008",
                    "500": "#c27803",
                    "600": "#9f580a",
                    "700": "#8e4b10",
                    "800": "#723b13",
                    "900": "#633112"
                },
                dark: {
                    "50": "#eaeaea",
                    "100": "#999999",
                    "200": "#888888",
                    "300": "#777777",
                    "400": "#666666",
                    "500": "#555555",
                    "600": "#444444",
                    "700": "#333333",
                    "800": "#222222",
                    "900": "#111111"
                },
                info: {
                    "50": "#e7f5ff",
                    "100": "#d0ebff",
                    "200": "#a5d8ff",
                    "300": "#74c0fc",
                    "400": "#4dabf7",
                    "500": "#339af0",
                    "600": "#228be6",
                    "700": "#1c7ed6",
                    "800": "#1971c2",
                    "900": "#1864ab"
                }
            },
            gridTemplateRows: {
                '8': 'repeat(8, minmax(0, 1fr))',
                '12': 'repeat(12, minmax(0, 1fr))',
            },
            gridRow: {
                'span-7': 'span 7 / span 7',
                'span-8': 'span 8 / span 8',
                'span-9': 'span 9 / span 9',
                'span-10': 'span 10 / span 10',
                'span-11': 'span 11 / span 11',
                'span-12': 'span 12 / span 12',
                'span-22': 'span 22 / span 22',
            }
        },
    },
    plugins: [
        require('flowbite/plugin')
    ],
}

