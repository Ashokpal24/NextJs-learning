import Link from "next/link"
import { generateRandomNumber } from "./_lib/random_number"
export default function Home() {
    return (
        <>
            <h1> Hello world</h1>
            <h2> generate random number {generateRandomNumber()}</h2>
            <div><Link href={"/about"}>About</Link></div>
            <div><Link href={"/products"}>Products</Link></div>
            <div><Link href={"/blog"}>Blog</Link></div>

        </>
    )
}