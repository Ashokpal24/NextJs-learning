export default function ProductDetails({ params }: {
    params: {
        productid: string
    }
}) {
    return (
        <>
            <h1>Details for product of ID {params.productid}</h1>
        </>
    )
}