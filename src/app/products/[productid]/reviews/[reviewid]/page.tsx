"use client"
import { generateRandomBool } from "@/app/_lib/random_number"
import { notFound } from "next/navigation"

export default function ProductDetails({ params }: {
    params: {
        productid: string
        reviewid: string
    }
}) {
    if (parseInt(params.reviewid) > 100) notFound()
    if (generateRandomBool() == false) throw new Error("Error loading review")
    return (
        <>
            <h1>Review {params.reviewid} of product {params.productid}</h1>
        </>
    )
}