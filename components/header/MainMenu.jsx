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
        <ul className="navbar-nav">
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

          <li className="nav-item  mega-dropdown-md">
            <a
              // className="nav-link dropdown-toggle active-menu"
              
              role="button"
              className={
                menuItems.some((menu) =>
                  menu.items.some((elm) => isActive(elm.link))
                )
                  ? "nav-link "
      : "nav-link"
              }

              // style={{color:'green'}}
            >
              About us
            </a>
          
          </li>
          {/* End li (home mega menu) */}

           <li className="nav-item  mega-dropdown-md">
            <a
              // className="nav-link dropdown-toggle active-menu"
              
              role="button"
              className={
                menuItems.some((menu) =>
                  menu.items.some((elm) => isActive(elm.link))
                )
                  ? "nav-link "
      : "nav-link"
              }

              // style={{color:'green'}}
            >
              Services
            </a>
          
          </li>  <li className="nav-item  mega-dropdown-md">
            <a
              // className="nav-link dropdown-toggle active-menu"
              
              role="button"
              className={
                menuItems.some((menu) =>
                  menu.items.some((elm) => isActive(elm.link))
                )
                  ? "nav-link "
      : "nav-link"
              }

              // style={{color:'green'}}
            >
              Portfolio
            </a>
          
          </li>  <li className="nav-item  mega-dropdown-md">
            <a
              // className="nav-link dropdown-toggle active-menu"
              
              role="button"
              className={
                menuItems.some((menu) =>
                  menu.items.some((elm) => isActive(elm.link))
                )
                  ? "nav-link "
      : "nav-link"
              }

              // style={{color:'green'}}
            >
             Blogs
            </a>
          
          </li>
           <li className="nav-item  mega-dropdown-md">
            <a
              // className="nav-link dropdown-toggle active-menu"
              
              role="button"
              className={
                menuItems.some((menu) =>
                  menu.items.some((elm) => isActive(elm.link))
                )
                  ? "nav-link "
      : "nav-link"
              }

              // style={{color:'green'}}
            >
             Careers
            </a>
          
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
