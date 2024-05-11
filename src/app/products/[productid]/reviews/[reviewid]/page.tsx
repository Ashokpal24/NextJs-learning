export default function ProductDetails({ params }: {
    params: {
        productid: string
        reviewid: string
    }
}) {
    return (
        <>
            <h1>Review {params.reviewid} of product {params.productid}</h1>
        </>
    )
}