import "@/styles/globals.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  return (
  <>
  <Navigation/>
  <Component {...pageProps} />
  </>
  );
}


function Navigation(){
  const router = useRouter();

  const clickHandler = () => {
    router.push('contact');
  }

  return(
    <>
      <nav>
        <Link href="/">Home </Link>
        <Link href="/blogs">Blog </Link>
        <Link href="/services">Services </Link>
        <button onClick={clickHandler}>Click me</button>
      </nav>
    </>
  )
}