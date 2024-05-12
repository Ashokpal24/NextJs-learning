"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import "./styles.css"
const navLinks = [
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
    { name: "Forgot password", href: "/forgot-password" },

]
export default function AboutPageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()
    return (
        <>
            <h1>Inner Layout</h1>
            <div>
                {navLinks.map((link) => {
                    const isActive = pathname.startsWith(link.href)
                    return (
                        <Link
                            // style={{ margin: "1rem" }}
                            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
                            href={link.href}>
                            {link.name}
                        </Link>
                    )
                })}
            </div>
            {children}
        </>
    )
}
