import { Metadata } from "next"
type Props = {
    params: {
        productid: string
    }
}
export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const title = await new Promise(resolve => {
        setTimeout(() => {
            resolve(`Samsung ${params.productid}`)
        }, 5000)
    })
    return {
        title: `Product ${title}`
    }
}
export default function ProductDetails({ params }: Props) {
    return (
        <>
            <h1>Details for product of ID {params.productid}</h1>
        </>
    )
}