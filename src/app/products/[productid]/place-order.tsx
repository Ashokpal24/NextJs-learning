"use client"

import { useRouter } from "next/navigation"

type Props = {
    params: {
        productid: string
    }
}

export default function PlaceOrder({ params }: Props) {
    const router = useRouter()
    return (
        <div>
            <button onClick={() => router.push("/order-product")}>
                Place Order
            </button>
        </div>
    )
}