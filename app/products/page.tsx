import Link from "next/link";

export default function ProductList() {
    return (
        <>
            <Link href='/'>Home</Link>
            <h1>products</h1>
            <h2> <Link href="products/1">product1</Link></h2>
            <h2> <Link href="products/2">product2</Link></h2>
            <h2> <Link href="products/3" replace>product3</Link></h2>
        </>
    )
}