import { notFound } from "next/navigation"

export default function ProductDetails({ params }: {
    params: {
        productid: string
        reviewid: string
    }
}) {
    if (parseInt(params.reviewid) > 100) notFound()
    return (
        <>
            <h1>Review {params.reviewid} of product {params.productid}</h1>
        </>
    )
}