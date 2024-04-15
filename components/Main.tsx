"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { CountUp } from "use-count-up";
export const Main = () => {
    const router = useRouter();
  return (
    <div style={{}}>
      {/* Hero Secton */}
      <div
        style={{ backgroundImage: "url(/images/grid.png)" }}
        className="hero-section bg-[image:var(/images/grid.png)]"
      >
        {/* <img src='/images/grid.png' /> */}
        <p className="seamless-experience">Seamless experience</p>
        <p className="bold-text1">
          We’re a team of engineers <br /> building powerful <br /> web
          experiences
        </p>
        <p className="text2">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        </p>
        <button onClick={() => router.push("/#contact-us")} className="button1 mt-10">
          Get in Touch
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
            >
              <path
                d="M4.66666 10.0001H16.3333M16.3333 10.0001L10.5 4.16675M16.3333 10.0001L10.5 15.8334"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </span>
        </button>
        <p className="text3">*No detail required</p>
      </div>
     
      {/* About Us  */}
      <div id="about-us" className="uses-data">
        <div className="uses-data-item">
          <p className="text7">
            {" "}
            <CountUp isCounting end={2} duration={3.2} />
            Million
          </p>
          <p>Customers</p>
          <p className="text2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          </p>
        </div>

        <div className="uses-data-item">
          <p className="text7">
            {" "}
            <CountUp isCounting end={1} duration={3.2} />K
          </p>
          <p>Downloads</p>
          <p className="text2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          </p>
        </div>

        <div className="uses-data-item">
          <p className="text7">
            $<CountUp isCounting end={73} duration={3.2} /> Million
          </p>
          <p>Transaction</p>
          <p className="text2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          </p>
        </div>

        <div className="uses-data-item">
          <p className="text7">2.0</p>
          <p>Latest Version</p>
          <p className="text2">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          </p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="testimonial">
        <img src="/images/wise.png" />
        <p className="testtomonial-text">
          I had the pleasure of experiencing the next generation of the
          solutions with this incredible product. It's refreshing to see such
          innovation in the tech industry.
        </p>
        <div className="testimonial-container">
          <img src="/testmonial/user.png" alt="testmonial" />
          <p>Nick Babich</p>
          <p className="text2">Lead Designer</p>
          <div className="star-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1919_299)">
                <path
                  d="M8.00001 11.8333L3.88535 13.9967L4.67135 9.41465L1.33801 6.16999L5.93801 5.50332L7.99535 1.33466L10.0527 5.50332L14.6527 6.16999L11.3193 9.41465L12.1053 13.9967L8.00001 11.8333Z"
                  fill="#E3AD54"
                  stroke="#E3AD54"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1919_299">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1919_299)">
                <path
                  d="M8.00001 11.8333L3.88535 13.9967L4.67135 9.41465L1.33801 6.16999L5.93801 5.50332L7.99535 1.33466L10.0527 5.50332L14.6527 6.16999L11.3193 9.41465L12.1053 13.9967L8.00001 11.8333Z"
                  fill="#E3AD54"
                  stroke="#E3AD54"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1919_299">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1919_299)">
                <path
                  d="M8.00001 11.8333L3.88535 13.9967L4.67135 9.41465L1.33801 6.16999L5.93801 5.50332L7.99535 1.33466L10.0527 5.50332L14.6527 6.16999L11.3193 9.41465L12.1053 13.9967L8.00001 11.8333Z"
                  fill="#E3AD54"
                  stroke="#E3AD54"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1919_299">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <g clip-path="url(#clip0_1919_299)">
                <path
                  d="M8.00001 11.8333L3.88535 13.9967L4.67135 9.41465L1.33801 6.16999L5.93801 5.50332L7.99535 1.33466L10.0527 5.50332L14.6527 6.16999L11.3193 9.41465L12.1053 13.9967L8.00001 11.8333Z"
                  fill="#E3AD54"
                  stroke="#E3AD54"
                  stroke-width="1.75"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1919_299">
                  <rect width="16" height="16" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>

    
    </div>
  );
};
