import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.svg";

function Footer() {
  const navLinks = [
    { id: 1, label: "Home", slug: "/" },
    { id: 2, label: "Shop", slug: "/shop" },
    { id: 3, label: "About Us", slug: "/about" },
    { id: 4, label: "Contact Us", slug: "/contact" },
  ];

  const resource = [
    { id: 1, label: "Educational", slug: "/educational" },
    { id: 2, label: "Mental Health", slug: "/mental-health" },
    { id: 3, label: "Nutrition", slug: "/nutrition" },
    { id: 4, label: "Medication Guide", slug: "/medication-guide" },
  ];

  const location = useLocation();

  return (
    <>
      {/* TODO: Add Responsiveness for large screen */}

      <footer className=" bg-gray-800 p-6">
        <section className="flex flex-col gap-4">
          <div className=" flex flex-col gap-3">
            <h1 className="text-secondary nunito text-xl font-extrabold">
              Join Our Newsletter
            </h1>
            <p className="text-slate-400 poppins-light text-md leading-5 ">
              Be the first to know about our latest updates, exclusive
              offers, and more.
            </p>
            <input
              className="p-2 rounded-md bg-slate-100 w-full outline-none poppins-light"
              type="email"
              name=""
              placeholder="Enter Your Email Address"
            />
            <button
              className="bg-secondary px-4 py-2 rounded-md text-slate-100 hover:bg-primary transition-all
              duration-300 nunito font-semibold"
              type="submit"
            >
              Subscribe
            </button>
          </div>

          <div className="flex justify-between ">
            <Link to={"/"} className="flex gap-1">
              <img className="w-8 h-8" src={Logo} alt="" />
              <h1 className="text-secondary text-lg kanit-semibold w-1/2">
                MediQuick
              </h1>
            </Link>
            <div className="flex justify-between items-center w-2/5 ">
              <Link to={"https://www.facebook.com/"}>
                <svg
                  className="hover:text-secondary text-slate-200 transition-all duration-200"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_104_1398)">
                    <path
                      d="M23.5 12.0698C23.5 5.71857 18.3513 0.569849 12 0.569849C5.64872 0.569849 0.5 5.71857 0.5 12.0698C0.5 17.8098 4.70538 22.5674 10.2031 23.4301V15.3941H7.2832V12.0698H10.2031V9.53626C10.2031 6.65407 11.92 5.06204 14.5468 5.06204C15.805 5.06204 17.1211 5.28665 17.1211 5.28665V8.11672H15.671C14.2424 8.11672 13.7969 9.00319 13.7969 9.91263V12.0698H16.9863L16.4765 15.3941H13.7969V23.4301C19.2946 22.5674 23.5 17.8098 23.5 12.0698Z"
                      fill="currentColor"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_104_1398">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </Link>
              <Link to={"https://www.instagram.com/"}>
                <svg
                  className="hover:text-secondary text-slate-200 transition-all duration-200"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.50078 11.7445C8.50078 9.95069 9.95546 8.4961 11.7504 8.4961C13.5453 8.4961 15.0008 9.95069 15.0008 11.7445C15.0008 13.5384 13.5453 14.993 11.7504 14.993C9.95546 14.993 8.50078 13.5384 8.50078 11.7445ZM6.74368 11.7445C6.74368 14.5081 8.98518 16.7482 11.7504 16.7482C14.5156 16.7482 16.7571 14.5081 16.7571 11.7445C16.7571 8.98099 14.5156 6.74084 11.7504 6.74084C8.98518 6.74084 6.74368 8.98099 6.74368 11.7445ZM15.7853 6.54244C15.7852 6.77371 15.8537 6.99982 15.9822 7.19217C16.1107 7.38452 16.2934 7.53447 16.5071 7.62306C16.7209 7.71165 16.9561 7.7349 17.1831 7.68987C17.4101 7.64485 17.6186 7.53356 17.7823 7.37009C17.946 7.20662 18.0575 6.99831 18.1028 6.77149C18.148 6.54468 18.1249 6.30955 18.0365 6.09585C17.948 5.88214 17.7981 5.69946 17.6057 5.57089C17.4134 5.44232 17.1872 5.37365 16.9558 5.37356H16.9553C16.6451 5.37371 16.3477 5.49689 16.1283 5.71605C15.9089 5.93521 15.7855 6.23243 15.7853 6.54244ZM7.81123 19.6764C6.86061 19.6331 6.34392 19.4748 6.00055 19.3412C5.54532 19.164 5.22051 18.9531 4.87902 18.6123C4.53752 18.2714 4.32613 17.9471 4.14969 17.4922C4.01583 17.1492 3.85749 16.6326 3.81427 15.6826C3.767 14.6554 3.75757 14.3469 3.75757 11.7446C3.75757 9.14236 3.76778 8.83467 3.81427 7.80666C3.85757 6.8566 4.01708 6.34108 4.14969 5.99706C4.32691 5.5421 4.53799 5.21749 4.87902 4.8762C5.22005 4.53491 5.54454 4.32364 6.00055 4.14731C6.34376 4.01353 6.86061 3.85528 7.81123 3.8121C8.839 3.76485 9.14774 3.75542 11.7504 3.75542C14.353 3.75542 14.6621 3.76563 15.6907 3.8121C16.6413 3.85536 17.1572 4.01478 17.5014 4.14731C17.9566 4.32364 18.2814 4.53537 18.6229 4.8762C18.9644 5.21702 19.175 5.5421 19.3523 5.99706C19.4861 6.34006 19.6445 6.8566 19.6877 7.80666C19.7349 8.83467 19.7444 9.14236 19.7444 11.7446C19.7444 14.3469 19.7349 14.6546 19.6877 15.6826C19.6444 16.6326 19.4853 17.149 19.3523 17.4922C19.175 17.9471 18.964 18.2717 18.6229 18.6123C18.2819 18.9528 17.9566 19.164 17.5014 19.3412C17.1582 19.4749 16.6413 19.6332 15.6907 19.6764C14.6629 19.7236 14.3542 19.733 11.7504 19.733C9.14657 19.733 8.83869 19.7236 7.81123 19.6764ZM7.7305 2.05901C6.69251 2.10625 5.98323 2.27074 5.36381 2.51163C4.72231 2.76039 4.17925 3.09412 3.63658 3.6356C3.09392 4.17709 2.76084 4.72068 2.51193 5.36179C2.2709 5.98123 2.10632 6.6897 2.05905 7.72706C2.011 8.76607 2 9.09824 2 11.7445C2 14.3908 2.011 14.723 2.05905 15.762C2.10632 16.7995 2.2709 17.5079 2.51193 18.1273C2.76084 18.768 3.09399 19.3122 3.63658 19.8535C4.17917 20.3947 4.72231 20.728 5.36381 20.9775C5.9844 21.2183 6.69251 21.3828 7.7305 21.4301C8.77067 21.4773 9.1025 21.4891 11.7504 21.4891C14.3983 21.4891 14.7307 21.4781 15.7703 21.4301C16.8083 21.3828 17.5172 21.2183 18.137 20.9775C18.7781 20.728 19.3215 20.395 19.8642 19.8535C20.4069 19.312 20.7392 18.768 20.9888 18.1273C21.2299 17.5079 21.3952 16.7994 21.4417 15.762C21.489 14.7222 21.5 14.3908 21.5 11.7445C21.5 9.09824 21.489 8.76607 21.4417 7.72706C21.3945 6.68962 21.2299 5.98084 20.9888 5.36179C20.7392 4.72107 20.406 4.17794 19.8642 3.6356C19.3224 3.09326 18.7781 2.76039 18.1378 2.51163C17.5172 2.27074 16.8083 2.10547 15.7711 2.05901C14.7314 2.01177 14.3991 2 11.7512 2C9.10328 2 8.77067 2.01099 7.7305 2.05901Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link to={"https://x.com/AkhilNagpal7"}>
                <svg
                  className="hover:text-secondary text-slate-200 transition-all duration-200"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.4133 5.93098C20.7825 6.20244 20.1194 6.39148 19.4402 6.4934C19.7577 6.43898 20.2249 5.86748 20.4109 5.63616C20.6934 5.28723 20.9087 4.88891 21.0459 4.46142C21.0459 4.42967 21.0776 4.38431 21.0459 4.36163C21.0299 4.3529 21.0119 4.34832 20.9937 4.34832C20.9755 4.34832 20.9576 4.3529 20.9416 4.36163C20.2041 4.76096 19.4193 5.06574 18.6057 5.26877C18.5773 5.27743 18.5471 5.27821 18.5184 5.27102C18.4896 5.26383 18.4633 5.24894 18.4424 5.22795C18.3791 5.15253 18.3109 5.08132 18.2383 5.01477C17.9064 4.71743 17.5299 4.47407 17.1225 4.2936C16.5726 4.06798 15.9786 3.97027 15.3853 4.00785C14.8097 4.0442 14.2478 4.19859 13.7344 4.46142C13.2288 4.73851 12.7845 5.11495 12.4281 5.56812C12.0532 6.03455 11.7825 6.57585 11.6343 7.15561C11.5121 7.70709 11.4983 8.27706 11.5935 8.83382C11.5935 8.92907 11.5935 8.94268 11.5119 8.92907C8.27792 8.45282 5.62455 7.30529 3.45649 4.84241C3.36124 4.73356 3.31135 4.73356 3.23424 4.84241C2.29082 6.27569 2.74892 8.54354 3.9282 9.66385C4.08695 9.81353 4.25023 9.95867 4.42259 10.0947C3.8819 10.0564 3.35441 9.90983 2.87138 9.66385C2.78067 9.60489 2.73078 9.63664 2.72624 9.74549C2.71338 9.89641 2.71338 10.0481 2.72624 10.1991C2.82088 10.9223 3.10591 11.6075 3.55219 12.1844C3.99847 12.7614 4.58998 13.2095 5.26623 13.4829C5.43108 13.5535 5.60286 13.6067 5.77876 13.6416C5.27821 13.7402 4.76484 13.7555 4.2593 13.687C4.15045 13.6643 4.10963 13.7233 4.15045 13.8276C4.81719 15.6419 6.26408 16.1952 7.32543 16.5037C7.47057 16.5263 7.61571 16.5263 7.779 16.5626C7.779 16.5626 7.779 16.5626 7.75178 16.5898C7.43882 17.1613 6.17336 17.5469 5.5928 17.7464C4.53311 18.1271 3.40329 18.2726 2.28175 18.1728C2.10485 18.1456 2.06403 18.1501 2.01868 18.1728C1.97332 18.1955 2.01868 18.2454 2.06857 18.2907C2.29535 18.4404 2.52214 18.5719 2.75799 18.6989C3.46014 19.0819 4.20245 19.3861 4.97141 19.6061C8.95374 20.7037 13.435 19.8964 16.424 16.9255C18.7735 14.5941 19.599 11.3783 19.599 8.158C19.599 8.03554 19.7487 7.96297 19.8349 7.89947C20.4293 7.43633 20.9533 6.88937 21.3906 6.27569C21.4663 6.18421 21.5052 6.06774 21.4995 5.94912C21.4995 5.88109 21.4995 5.89469 21.4133 5.93098Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
              <Link
                to={"https://www.linkedin.com/in/akhil-nagpal-dev/"}
              >
                <svg
                  className="hover:text-secondary text-slate-200 transition-all duration-200"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.44117 2C2.64548 2 2 2.62583 2 3.39684V20.1036C2 20.8747 2.64556 21.5 3.44117 21.5H20.0588C20.8548 21.5 21.5 20.8746 21.5 20.1034V3.39684C21.5 2.62583 20.8548 2 20.0588 2H3.44117ZM7.9257 9.54002V18.319H5.00771V9.54002H7.9257ZM8.11804 6.82502C8.11804 7.66748 7.48467 8.34161 6.46732 8.34161L6.4482 8.34153C5.46886 8.34153 4.83572 7.66741 4.83572 6.82495C4.83572 5.96337 5.48798 5.30806 6.48667 5.30806C7.48467 5.30806 8.099 5.96337 8.11804 6.82502ZM12.4586 18.319H9.54085C9.54085 18.319 9.57909 10.3639 9.54101 9.54032H12.4588V10.7829C12.8467 10.1849 13.5409 9.3342 15.0887 9.3342C17.0084 9.3342 18.4478 10.589 18.4478 13.2854V18.319H15.5301V13.623C15.5301 12.4427 15.1076 11.6377 14.052 11.6377C13.2457 11.6377 12.7656 12.1806 12.5547 12.705C12.4777 12.8922 12.4586 13.1549 12.4586 13.4169V18.319Z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </section>

        <hr className="m-4 border-gray-500" />

        <section className="flex justify-between items-center p-2">
          <div>
            <h1 className="text-slate-200 nunito font-bold text-md">
              Company
            </h1>
            <nav>
              {navLinks.map((item) => {
                return (
                  <div key={item?.id}>
                    <NavLink
                      className={`nunito text-md hover:text-secondary text-slate-400
                      ${
                        item?.slug === location.pathname
                          ? "text-secondary"
                          : null
                      }`}
                      to={item?.slug}
                    >
                      {item?.label}
                    </NavLink>
                  </div>
                );
              })}
            </nav>
          </div>
          <div>
            <h1 className="text-slate-200 nunito font-bold text-md">
              Resources
            </h1>
            <nav>
              {resource.map((item) => {
                return (
                  <div key={item?.id}>
                    <NavLink
                      className={`nunito text-md hover:text-secondary text-slate-400
                      ${
                        item?.slug === location.pathname
                          ? "text-secondary"
                          : null
                      }`}
                      to={item?.slug}
                    >
                      {item?.label}
                    </NavLink>
                  </div>
                );
              })}
            </nav>
          </div>
        </section>

        <hr className="m-4 border-gray-500" />

        <section className="flex items-center justify-between">
          <h1 className="text-slate-400 text-sm">
            &copy; 2024 Medi Quick
          </h1>
          <Link
            to={"/term-of-use"}
            className="text-slate-400 text-sm hover:text-slate-300 transition-all duration-200"
          >
            Term of Use
          </Link>
          <span className="text-slate-400">|</span>
          <Link
            to={"/privacy-policy"}
            className="text-slate-400 text-sm hover:text-slate-300 transition-all duration-200"
          >
            Privacy Policy
          </Link>
        </section>
      </footer>
    </>
  );
}

export default Footer;
