import Image from 'next/image'
import React from 'react'

const Footer = () => {
    return (
        <>
            <div className='footer'>

                <div className='footer-content'>
                <div className='flex items-center'> 
                    <Image src="/logo.png" alt='logo' height={50} width={50} />
                    <p className='text-black font-bold text-xl'>TrueDax</p>
                </div>
                </div>

                <hr />

                <div className='footer-items'>

                    <div className='footer-item'>
                        <p className='text10'>Company</p>
                        <p className='text2'>About us</p>
                        <p className='text2'>Pricing</p>
                        <p className='text2'>Contact us</p>
                        <p className='text2'>Features</p>
                    </div>

                    <div className='footer-item'>
                        <p className='text10'>Product</p>
                        <p className='text2'>Figma design system</p>
                        <p className='text2'>Ios kit</p>
                        <p className='text2'>Android kit</p>
                        <p className='text2'>Wireframe</p>
                    </div>

                    <div className='footer-item'>
                        <p className='text10'>Resources</p>
                        <p className='text2'>Templates</p>
                        <p className='text2'>Landing pages</p>
                        <p className='text2'>Documentation</p>
                        <p className='text2'>Comp library</p>
                    </div>

                    <div className='footer-item'>
                        <p className='text10'>Legal</p>
                        <p className='text2'>Privacy policy</p>
                        <p className='text2'>Terms & Conditions</p>
                        <p className='text2'>Disclaimer</p>
                        <p className='text2'>Affiliate programme</p>
                    </div>

                    <div className='footer-item'>
                        <p className='text10'>Support</p>
                        <p className='text2'>Help centre</p>
                        <p className='text2'>Raise ticket</p>
                        <p className='text2'>Report</p>
                        <p className='text2'>Refund</p>
                    </div>

                </div>

                <div className='social-media-logo'>
                    <div className='social-media-logo-items'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9.99998 1.66675C8.90567 1.66675 7.82204 1.8823 6.81099 2.30109C5.79995 2.71988 4.88129 3.33371 4.10747 4.10753C2.54466 5.67033 1.66669 7.78995 1.66669 10.0001C1.66669 13.6834 4.05836 16.8084 7.36669 17.9167C7.78336 17.9834 7.91669 17.7251 7.91669 17.5001V16.0917C5.60836 16.5917 5.11669 14.9751 5.11669 14.9751C4.73336 14.0084 4.19169 13.7501 4.19169 13.7501C3.43336 13.2334 4.25002 13.2501 4.25002 13.2501C5.08336 13.3084 5.52502 14.1084 5.52502 14.1084C6.25002 15.3751 7.47502 15.0001 7.95002 14.8001C8.02502 14.2584 8.24169 13.8917 8.47502 13.6834C6.62502 13.4751 4.68336 12.7584 4.68336 9.58342C4.68336 8.65842 5.00002 7.91675 5.54169 7.32509C5.45836 7.11675 5.16669 6.25009 5.62502 5.12509C5.62502 5.12509 6.32502 4.90009 7.91669 5.97509C8.57502 5.79175 9.29169 5.70009 9.99998 5.70009C10.7084 5.70009 11.425 5.79175 12.0834 5.97509C13.675 4.90009 14.375 5.12509 14.375 5.12509C14.8334 6.25009 14.5417 7.11675 14.4584 7.32509C15 7.91675 15.3167 8.65842 15.3167 9.58342C15.3167 12.7667 13.3667 13.4667 11.5084 13.6751C11.8084 13.9334 12.0834 14.4417 12.0834 15.2167V17.5001C12.0834 17.7251 12.2167 17.9917 12.6417 17.9167C15.95 16.8001 18.3334 13.6834 18.3334 10.0001C18.3334 8.90574 18.1178 7.8221 17.699 6.81106C17.2803 5.80001 16.6664 4.88135 15.8926 4.10753C15.1188 3.33371 14.2001 2.71988 13.1891 2.30109C12.178 1.8823 11.0944 1.66675 9.99998 1.66675Z" fill="#5A6475" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M15.8333 2.5C16.2754 2.5 16.6993 2.67559 17.0118 2.98816C17.3244 3.30072 17.5 3.72464 17.5 4.16667V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H15.8333ZM15.4167 15.4167V11C15.4167 10.2795 15.1304 9.5885 14.621 9.07903C14.1115 8.56955 13.4205 8.28333 12.7 8.28333C11.9917 8.28333 11.1667 8.71667 10.7667 9.36667V8.44167H8.44167V15.4167H10.7667V11.3083C10.7667 10.6667 11.2833 10.1417 11.925 10.1417C12.2344 10.1417 12.5312 10.2646 12.75 10.4834C12.9688 10.7022 13.0917 10.9989 13.0917 11.3083V15.4167H15.4167ZM5.73333 7.13333C6.10464 7.13333 6.46073 6.98583 6.72328 6.72328C6.98583 6.46073 7.13333 6.10464 7.13333 5.73333C7.13333 4.95833 6.50833 4.325 5.73333 4.325C5.35982 4.325 5.0016 4.47338 4.73749 4.73749C4.47338 5.0016 4.325 5.35982 4.325 5.73333C4.325 6.50833 4.95833 7.13333 5.73333 7.13333ZM6.89167 15.4167V8.44167H4.58333V15.4167H6.89167Z" fill="#5A6475" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <g clip-path="url(#clip0_2304_1831)">
                                <path d="M16.9307 4.24315C15.6557 3.66815 14.289 3.24315 12.8599 3.00148C12.8471 2.99904 12.834 3.00061 12.8222 3.00599C12.8104 3.01136 12.8006 3.02027 12.794 3.03148C12.619 3.33898 12.424 3.73981 12.2874 4.05648C10.7716 3.83001 9.23064 3.83001 7.71489 4.05648C7.56267 3.70553 7.39102 3.36334 7.20073 3.03148C7.19428 3.02013 7.18452 3.01102 7.17276 3.00537C7.16099 2.99971 7.14779 2.99777 7.13489 2.99982C5.70656 3.24148 4.3399 3.66648 3.06407 4.24231C3.05309 4.24692 3.04379 4.25477 3.0374 4.26481C0.444078 8.0773 -0.266754 11.7957 0.0824121 15.4673C0.0833837 15.4763 0.0861751 15.485 0.0906162 15.4929C0.0950574 15.5008 0.101055 15.5077 0.108245 15.5131C1.6219 16.6152 3.31018 17.4547 5.1024 17.9965C5.11489 18.0003 5.12826 18.0003 5.14074 17.9964C5.15323 17.9926 5.16426 17.985 5.1724 17.9748C5.5574 17.4581 5.90073 16.9123 6.19406 16.339C6.21156 16.3056 6.1949 16.2656 6.1599 16.2523C5.62157 16.0496 5.09997 15.8049 4.5999 15.5206C4.59091 15.5155 4.58334 15.5082 4.57786 15.4995C4.57239 15.4907 4.56917 15.4807 4.56851 15.4704C4.56785 15.46 4.56976 15.4497 4.57408 15.4403C4.57839 15.4309 4.58498 15.4227 4.59323 15.4165C4.69823 15.339 4.80323 15.2581 4.90323 15.1773C4.91223 15.17 4.92308 15.1654 4.93455 15.1639C4.94603 15.1625 4.95769 15.1642 4.96823 15.169C8.24072 16.639 11.7849 16.639 15.019 15.169C15.0296 15.1639 15.0414 15.162 15.053 15.1633C15.0647 15.1646 15.0757 15.1692 15.0849 15.1765C15.1849 15.2581 15.289 15.339 15.3949 15.4165C15.4032 15.4226 15.4099 15.4307 15.4144 15.44C15.4188 15.4493 15.4209 15.4596 15.4204 15.4699C15.4199 15.4802 15.4168 15.4903 15.4115 15.4991C15.4062 15.508 15.3988 15.5154 15.3899 15.5206C14.8915 15.8073 14.3732 16.0498 13.829 16.2515C13.8207 16.2545 13.8131 16.2593 13.8067 16.2655C13.8003 16.2717 13.7954 16.2792 13.7922 16.2875C13.7889 16.2958 13.7875 16.3047 13.788 16.3135C13.7884 16.3224 13.7908 16.3311 13.7949 16.339C14.0949 16.9115 14.4382 17.4565 14.8157 17.974C14.8236 17.9846 14.8345 17.9925 14.847 17.9967C14.8595 18.0009 14.8731 18.0011 14.8857 17.9973C16.681 17.457 18.372 16.6171 19.8874 15.5131C19.8948 15.508 19.901 15.5013 19.9056 15.4935C19.9102 15.4858 19.913 15.4771 19.914 15.4681C20.3307 11.2232 19.2157 7.5348 16.9565 4.26648C16.951 4.25586 16.9418 4.24758 16.9307 4.24315ZM6.68323 13.2315C5.69823 13.2315 4.88573 12.3407 4.88573 11.2482C4.88573 10.1548 5.6824 9.2648 6.68323 9.2648C7.69156 9.2648 8.49656 10.1623 8.48072 11.2482C8.48072 12.3415 7.68406 13.2315 6.68323 13.2315ZM13.329 13.2315C12.3432 13.2315 11.5315 12.3407 11.5315 11.2482C11.5315 10.1548 12.3274 9.2648 13.329 9.2648C14.3374 9.2648 15.1424 10.1623 15.1265 11.2482C15.1265 12.3415 14.3382 13.2315 13.329 13.2315Z" fill="#5A6475" />
                            </g>
                            <defs>
                                <clipPath id="clip0_2304_1831">
                                    <rect width="20" height="20" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <p className='text2'>© 2023 TrueDax  Inc. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer