"use client";

import { useEffect, useState } from "react";
import MainMenu from "./MainMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DefaulHeader = () => {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname(); // ✅ get current path

  const changeBackground = () => {
    if (window.scrollY >= 10) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, []);

  // ✅ check if the current page is a contact page
  const hideMenu = pathname.startsWith("/contact");

  return (
    <header
      className={`theme-main-menu sticky-menu theme-menu-six ${
        navbar ? "fixed" : ""
      }`}
    >
      <div className="inner-content position-relative">
        <div className="d-flex align-items-center justify-content-between">
          <div className="logo order-lg-0">
            <Link href="/" className="d-block">
              <h4>Neo Sharks</h4>
            </Link>
          </div>

          <div className="right-widget ms-auto d-flex align-items-center order-lg-3">
            <Link
              href="/contact/contact-v3"
              className="start-btn-one fs-18 fw-500 tran3s position-relative d-none d-lg-block"
            >
              Let's Talk
            </Link>
          </div>

          {/* ✅ Show MainMenu only if not on a contact page */}
          {!hideMenu && <MainMenu />}
        </div>
      </div>
    </header>
  );
};

export default DefaulHeader;
