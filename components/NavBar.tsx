"use client";
import React, { useState } from "react";
import "./ComponentStyle.css";
import { useRouter } from "next/navigation";
import Image from "next/image";
export const NavBar = () => {
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  return (
    <>
      <div className="main-navigation">
        <div className="flex items-center">
          <Image src="/logo.png" alt="logo" height={50} width={50} />
          <p className="text-black font-bold text-xl">TrueDax</p>
        </div>

        <div className="navigation-items ml-auto mr-10 ">
          <p
            onClick={() => router.push("/#about-us")}
            className="nav-item hover:text-green-500"
          >
            About
          </p>
          <p
            onClick={() => router.push("/#contact-us")}
            className="nav-item hover:text-green-500"
          >
            Contact
          </p>
        </div>

        <div className="login-burger">
          <button
            onClick={() => router.push("/#contact-us")}
            className="navigation-login"
          >
            Login{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.5 2.5H15.8333C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H12.5M8.33333 14.1667L12.5 10M12.5 10L8.33333 5.83333M12.5 10H2.5"
                  stroke="#5A6475"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>

          <button
            onClick={() => setIsClicked(!isClicked)}
            className="nav-burger-btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M3 12H21M3 6H21M3 18H21"
                stroke="#363C46"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>

      <div className={`${isClicked ? "" : "item-hide"} `}>
        <div className="burger-item bg-slate-300">
          <p
            onClick={() => router.push("/#about-us")}
            className="nav-item hover:text-green-500"
          >
            About
          </p>
          <p
            onClick={() => router.push("/#contact-us")}
            className="nav-item hover:text-green-500"
          >
            Contact
          </p>
        </div>
      </div>
    </>
  );
};
