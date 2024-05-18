export type product = {
    id: number,
    name: string,
    type: string
}
export const products: product[] = [
    {
        id: 1,
        name: "Nvidia RTX 4090",
        type: "Hardware",
    },
    {
        id: 2,
        name: "Need for Speed",
        type: "Software",
    },
    {
        id: 3,
        name: "Kingston SSD",
        type: "Hardware",
    }
]