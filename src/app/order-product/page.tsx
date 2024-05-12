"use client"
import { useRouter } from "next/navigation"

type Props = {
    params: {
        productid: string
    }
}
export default function OrderProduct({ params }: Props) {
    const router = useRouter()
    const handleClick = () => {
        console.log("Order placed")
        router.push("/")
    }
    return (
        <>
            <h1>Order Product</h1>
            <button onClick={() => handleClick()}> Order</button>
        </>
    )
}
