import generateRandomNumber from "./_lib/random_number"
export default function Home() {
    return (
        <>
            <h1> Hello world</h1>
            <h2> generate random number {generateRandomNumber()}</h2>
        </>
    )
}