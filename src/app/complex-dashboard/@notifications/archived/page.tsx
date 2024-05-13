import Link from "next/link"
import Card from "../../../../../components/card"
export default function ArchivedNotification() {
    return (
        <Card>
            <div>Notifications</div>
            <Link href="/complex-dashboard">Default</Link>
        </Card>
    )
}