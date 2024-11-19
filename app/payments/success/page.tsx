import Link from "next/link"
export default function PaymentSuccess() {
    return (
        <div>
            <p>
                success
            </p>
            <Link href="/" >Home</Link>
        </div>
    )
}
//check for query params  IF none this might break the stock method