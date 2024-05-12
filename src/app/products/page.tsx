import Link from "next/link"

export default function Products() {
    return (
        <>
            <h1>Product Page</h1>
            {[...Array(10).keys()].map(i => {
                return (
                    <div key={i + 1}>
                        <Link href={`products/${i + 1}`} replace>{`product ${i + 1}`}</Link>
                    </div>
                )
            })}
        </>
    )
}