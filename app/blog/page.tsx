import { Metadata } from "next"

export const metadata: Metadata = {
    title: "blog"
}
// export const metadata: Metadata = {
//     title: {
//         absolute:"blog"
//     },
// }
export default function Blog() {
    return <h1>blog</h1>
}