"use client";

import Link from "next/link";
import {
  menuItems,
  pagesItems,
  portfolioItems,
  blogItems,
  contactItems,
} from "@/data/menu";

import Image from "next/image";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const pathname = usePathname();

  const isActive = (link) => {
    return pathname.replace(/\/\d+$/, "") === link.replace(/\/\d+$/, "");
  };

  return (
    <nav className="navbar navbar-expand-lg order-lg-2">
      <button
        className="navbar-toggler d-block d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span />
      </button>
      {/* End mobile collapse menu */}

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          <li className="d-block d-lg-none">
            <div className="logo">
              <Link href="/" className="d-block">
                <Image
                  src="/images/logo/logo_01.png"
                  alt="logo"
                  width={95}
                  height={30}
                />
              </Link>
            </div>
          </li>
          {/* End li */}

          <li className="nav-item  mega-dropdown-md" style={{
            width:"140px"
          }}>
             <Link
    href="#our-about-us"
    scroll={true} // allows scrolling to anchors
    className="nav-link"
  >
    About Us
  </Link>
          </li>
          {/* End li (home mega menu) */}

           <li className="nav-item  mega-dropdown-md">
            <Link
    href="#our-services"
    scroll={true} // allows scrolling to anchors
    className="nav-link"
  >
    Services
  </Link>
          </li>  <li className="nav-item  mega-dropdown-md">
             <Link
    href="#our-portfolio"
    scroll={true} // allows scrolling to anchors
    className="nav-link"
  >
    Portfolio
  </Link>
          
          </li>  <li className="nav-item  mega-dropdown-md">
           <Link
    href="#our-blogs"
    scroll={true} // allows scrolling to anchors
    className="nav-link"
  >
    Blogs
  </Link>
          
          </li>
           <li className="nav-item  mega-dropdown-md">
               <Link
    href="#our-careers"
    scroll={true} // allows scrolling to anchors
    className="nav-link"
  >
Careers  </Link>
          </li>
          <li className="nav-item  mega-dropdown-md">
                     <Link
    href="#our-faq"
    scroll={true} // allows scrolling to anchors
    className="nav-link"
  >
    FAQ's
  </Link>
                    </li>
        </ul>
        {/* End ul */}

        {/* Mobile Content */}
        <div className="mobile-content d-block d-lg-none">
          <div className="d-flex flex-column align-items-center justify-content-center mt-70">
            <Link
              href="/contact/contact-v1"
              className="btn-twentyOne fw-500 tran3s"
            >
              Contact us
            </Link>
          </div>
        </div>
        {/* /.mobile-content */}
      </div>
    </nav>
  );
};

export default MainMenu;
