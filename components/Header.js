import styles from "../styles/Header.module.css";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
export default function Header() {
  const { user,isLoading  } = useUser();
  console.log("🚀 ~ file: Header.js:6 ~ Header ~ user", user);
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
  
      <div className={styles.footer_div}>
        <div className="container p-3">
          <nav className={styles.nav_bar}>
            <img src="/logo.jpg" alt="" className={styles.header_logo} />
            <div className={styles.links_div}>
              <Link href="/">Home</Link>
              <Link href="/bookTable">Book a Table</Link>
              <Link href="/dineoutPay">Dineout Pay</Link>
              <Link href="#">Events</Link>
              <Link href="#">Blogs</Link>
              {!user && (
                <Link
                  href="/api/auth/login"
                  className="btn btn-danger mx-3 text-light"
                >
                  Login
                </Link>
              )}
              {user && (
                <Link
                  href="/api/auth/logout"
                  className="btn btn-danger mx-3 text-light"
                >
                  Logout
                </Link>
              )}
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
