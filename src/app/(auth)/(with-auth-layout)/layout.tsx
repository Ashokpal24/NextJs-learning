export default function AboutPageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <h1>Inner Layout</h1>
            {children}
        </>
    )
}
