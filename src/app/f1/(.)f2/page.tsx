import Link from "next/link";

export default function InterceptedF2Page() {
    return (
        <>
            <h1>This is (.) Intercepted F2 page</h1>
            <Link href="/f1">F1</Link>
        </>
    )
}