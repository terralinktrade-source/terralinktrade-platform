import Link from "next/link";export default function Navbar() { return ( <nav> { /* Navigation links will go here */ } </nav> ); }
<Link href="/">Home</Link>
<Link href="/about">About</Link>.
<Link href="/contact">Contact</Link>
npm run dev
Link href="/contact">Contact</Link
npm run dev
import Link from "next/link"; export default function Navbar() { return ( <nav> <Link href="/">Home</Link> <Link href="/about">About</Link> <Link href="/contact">Contact</Link> </nav> ); }