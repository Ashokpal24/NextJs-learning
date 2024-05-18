import React from "react"
import "./style.css"

export default function PhotoFeedLayout({
    modal,
    children
}: {
    modal: React.ReactNode,
    children: React.ReactNode
}) {
    return (
        <>
            <div>{modal}</div>
            <div>{children}</div>

            {/* {children} */}
        </>
    )
}