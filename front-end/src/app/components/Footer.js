"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const Footer = () => {
  const [phoneNumber] = useState("+1 406-235-6377");
  const [isLoading, setIsLoading] = useState(false);
  const pathname = usePathname();
  const isTermsPage = pathname === "/termsAndConditions/";
  const isPrivacyPolicyPage = pathname === "/privacy-policy/";
  const isJobApplyPage = pathname === "/job-apply/";
  const isAboutPage = pathname === "/about/";
  const isPlanAdventurePrivacyPolicyPage = pathname === "/privacy-policy/plane-adventure/";
  const isTreasureCorePrivacyPolicyPage = pathname === "/privacy-policy/treasure-core/";

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://images.dmca.com/Badges/DMCABadgeHelper.min.js";
    script.async = true;
    document.body.appendChild(script);

    // Ensure toast is properly initialized
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      toast.success("Number copied to clipboard", {
        duration: 3000,
        position: 'top-center'
      });
    } catch (err) {
      toast.error("Failed to copy number", {
        duration: 3000,
        position: 'top-center'
      });
      console.error("Failed to copy number: ", err);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    if (!validateEmail(email)) {
      toast.error("Invalid email address", {
        duration: 3000,
        position: 'top-center'
      });
      return;
    }

    setIsLoading(true);
    try {
      const formData = {
        email,
        access_key: "27028b32-95a9-4d8e-903c-ea1b3e3c1a4c",
        subject: "Newsletter subscribed from your website",
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        toast.success("Subscribed Successfully", {
          duration: 3000,
          position: 'top-center'
        });
        e.target.reset();
      } else {
        toast.error("Subscription failed", {
          duration: 3000,
          position: 'top-center'
        });
      }
    } catch (error) {
      toast.error("An error occurred", {
        duration: 3000,
        position: 'top-center'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-night-rider mt-10">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        {/* Top Section - Services and Subscribe */}
        <div className="border-t-[0.5px] border-white border-opacity-40"></div>

        <div className="pt-16 pb-12">
          <div className="flex flex-col max-md:text-center md:flex-row justify-center items-center gap-8 ">
            {/* Services Section */}
            <div className="lg:col-span-2">
              <h3 className="text-xl md:text-2xl font-semibold text-light-white mb-6">Services</h3>
              <ul className="space-y-3 text-base md:text-lg text-light-white text-opacity-60">
                <li className="cursor-pointer hover:text-white transition-colors">
                  <div>Game Development</div>
                </li>
                <li className="cursor-pointer hover:text-white transition-colors">
                  <div>Metaverse</div>
                </li>
                <li className="cursor-pointer hover:text-white transition-colors">
                  <div>AR, VR</div>
                </li>
                <li className="cursor-pointer hover:text-white transition-colors">
                  <div>3D Artist</div>
                </li>
                <li className="cursor-pointer hover:text-white transition-colors">
                  <div>Art & Design</div>
                </li>
              </ul>
            </div>

            <div className="hidden lg:block lg:col-span-1"></div>

            <div className="lg:col-span-2">
              <h3 className="text-xl md:text-2xl font-semibold text-light-white mb-6">Subscribe</h3>
              <p className="text-light-white text-opacity-60 mb-6 text-base md:text-lg leading-relaxed">
                Get exclusive insights, curated resources and expert guidance.
              </p>
              <form onSubmit={onSubmit} className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  className="w-full px-4 py-3 bg-transparent border border-light-white border-opacity-20 rounded-md text-light-white placeholder-light-white placeholder-opacity-60 focus:outline-none focus:border-opacity-40 transition-colors"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  className="w-full bg-bitterSweet text-[18px] tracking-wider uppercase hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md transition-colors flex items-center justify-center"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Subscribing...
                    </div>
                  ) : (
                    "Subscribe"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <div className="border-t border-white border-opacity-40"></div> */}

      <div className=" ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <div className="flex  !border-[0.5px] !border-l-0 border-white/40 p-8 flex-col items-center md:items-start">
              <Image
                src="/assets/logo.webp"
                width={150}
                height={65}
                alt="logo"
                className="max-w-[215px] max-h-[65px] mb-4"
              />
              <p className="text-darkLiver text-sm md:text-base text-center md:text-left leading-relaxed">
                Your Partner In Digital Transformations
              </p>
            
            </div>

            <div className="flex flex-col !border-l-0  !border-[0.5px] px-8  py-4 border-white/40 items-center md:items-start">
              <h3 className="text-xl md:text-2xl font-semibold text-light-white mb-4">Address</h3>
              <p className="text-darkLiver text-base md:text-lg text-center md:text-left leading-relaxed">
                1001 S MAIN ST, STE 500, Kalispell, MT, United States, Montana
              </p>
              {/* <p className="text-darkLiver text-base md:text-lg text-center md:text-left leading-relaxed">
               Address 2: Innovation Heights Complex, Commercial Area Satellite Town, Bahawalpur, Pakistan
              </p> */}
            </div>

            <div className="flex flex-col !border-x-0 !border-[0.5px] px-8 py-4 border-white/40 items-center md:items-start">
              <h3 className="text-xl md:text-2xl font-semibold text-light-white mb-4">Contact Us</h3>
              <div className="space-y-2 text-center md:text-left">
                <div className="relative group inline-block">
                  <div className="text-darkLiver text-base md:text-lg cursor-pointer">{phoneNumber}</div>
                  <div className="absolute left-0 w-max -top-8 bg-black hidden group-hover:flex flex-row gap-2  bg-darkGray border border-gray-300 p-3  rounded shadow-lg">
                    <button
                      className=" text-ellipsis  text-sm text-light-white hover:text-white hover:font-semibold w-max text-center"
                      onClick={copyNumber}
                    >
                      Copy Number
                    </button>
                    <a
                      href={`tel:${phoneNumber}`}
                      className=" text-sm text-ellipsis text-light-white w-max hover:font-semibold hover:text-white text-center"
                    >
                      Call Number
                    </a>
                  </div>
                </div>
                <div className="text-darkLiver text-base md:text-lg">
                  <a href="mailto:services@feativestudios.com">services@feativestudios.com</a>
                  </div>
              </div>
            </div>

            {/* Follow Us Section */}
            <div className="flex !border-[0.5px] border-white/40 px-8 py-4 !border-r-0 flex-col items-center md:items-start">
              <h3 className="text-xl md:text-2xl font-semibold text-light-white mb-4">Follow Us</h3>
              <div className="flex flex-row gap-3">
                <Link
                  href="https://www.linkedin.com/company/feative-studios"
                  target="_blank"
                  name="linkedIn-Link"
                >
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-transparent border-white border-[2px] ring-inset ring-1 ring-white relative overflow-hidden group"
                    aria-label="linkedin"
                    type="button"
                    data-id="linkedin-btn"
                  >
                    <svg
                      className="relative z-10 fill-white transition-colors duration-300 group-hover:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      name="linkedIn-btn"
                      width="28"
                      height="28"
                      viewBox="0 0 72 72"
                    >
                      <path d="M24.7612 55.999V28.3354H15.5433V55.999H24.7621H24.7612ZM20.1542 24.5591C23.3679 24.5591 25.3687 22.4348 25.3687 19.7801C25.3086 17.065 23.3679 15 20.2153 15C17.0605 15 15 17.065 15 19.7799C15 22.4346 17.0001 24.5588 20.0938 24.5588H20.1534L20.1542 24.5591ZM29.8633 55.999H39.0805V40.5521C39.0805 39.7264 39.1406 38.8985 39.3841 38.3088C40.0502 36.6562 41.5668 34.9455 44.1138 34.9455C47.4484 34.9455 48.7831 37.4821 48.7831 41.2014V55.999H58V40.1376C58 31.6408 53.4532 27.6869 47.3887 27.6869C42.4167 27.6869 40.233 30.4589 39.0198 32.347H39.0812V28.3364H29.8638C29.9841 30.9316 29.8631 56 29.8631 56L29.8633 55.999Z" />
                    </svg>
                    <div className="absolute inset-0 bg-[#006699] origin-bottom scale-y-0 group-hover:origin-bottom group-hover:scale-y-100 transition-transform duration-500"></div>
                  </button>
                </Link>

                <Link
                  href="https://www.instagram.com/feativestudios/"
                  target="_blank"
                  name="insta-Link"
                >
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-transparent border-white ring-inset ring-1 ring-white border-[2px] group transition-all duration-500"
                    aria-label="instagram"
                    type="button"
                    data-id="instagram-btn"
                  >
                    <svg
                      className="fill-white relative z-10 transition-all duration-500 group-hover:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 51 51"
                      fill="none"
                    >
                      <path
                        d="M17.4456 25.7808C17.4456 21.1786 21.1776 17.4468 25.7826 17.4468C30.3875 17.4468 34.1216 21.1786 34.1216 25.7808C34.1216 30.383 30.3875 34.1148 25.7826 34.1148C21.1776 34.1148 17.4456 30.383 17.4456 25.7808ZM12.9377 25.7808C12.9377 32.8708 18.6883 38.618 25.7826 38.618C32.8768 38.618 38.6275 32.8708 38.6275 25.7808C38.6275 18.6908 32.8768 12.9436 25.7826 12.9436C18.6883 12.9436 12.9377 18.6908 12.9377 25.7808ZM36.1342 12.4346C36.1339 13.0279 36.3098 13.608 36.6394 14.1015C36.9691 14.595 37.4377 14.9797 37.9861 15.2069C38.5346 15.4342 39.1381 15.4939 39.7204 15.3784C40.3028 15.2628 40.8378 14.9773 41.2577 14.5579C41.6777 14.1385 41.9638 13.6041 42.0799 13.0222C42.1959 12.4403 42.1367 11.8371 41.9097 11.2888C41.6828 10.7406 41.2982 10.2719 40.8047 9.94202C40.3112 9.61218 39.7309 9.436 39.1372 9.43576H39.136C38.3402 9.43613 37.5771 9.75216 37.0142 10.3144C36.4514 10.8767 36.1349 11.6392 36.1342 12.4346ZM15.6765 46.1302C13.2377 46.0192 11.9121 45.6132 11.0311 45.2702C9.86323 44.8158 9.02993 44.2746 8.15381 43.4002C7.27768 42.5258 6.73536 41.6938 6.28269 40.5266C5.93928 39.6466 5.53304 38.3214 5.42217 35.884C5.3009 33.2488 5.27668 32.4572 5.27668 25.781C5.27668 19.1048 5.3029 18.3154 5.42217 15.678C5.53324 13.2406 5.94248 11.918 6.28269 11.0354C6.73736 9.86816 7.27888 9.03536 8.15381 8.15976C9.02873 7.28416 9.86123 6.74216 11.0311 6.28976C11.9117 5.94656 13.2377 5.54056 15.6765 5.42976C18.3133 5.30856 19.1054 5.28436 25.7826 5.28436C32.4598 5.28436 33.2527 5.31056 35.8916 5.42976C38.3305 5.54076 39.6539 5.94976 40.537 6.28976C41.7049 6.74216 42.5382 7.28536 43.4144 8.15976C44.2905 9.03416 44.8308 9.86816 45.2855 11.0354C45.6289 11.9154 46.0351 13.2406 46.146 15.678C46.2673 18.3154 46.2915 19.1048 46.2915 25.781C46.2915 32.4572 46.2673 33.2466 46.146 35.884C46.0349 38.3214 45.6267 39.6462 45.2855 40.5266C44.8308 41.6938 44.2893 42.5266 43.4144 43.4002C42.5394 44.2738 41.7049 44.8158 40.537 45.2702C39.6565 45.6134 38.3305 46.0194 35.8916 46.1302C33.2549 46.2514 32.4628 46.2756 25.7826 46.2756C19.1024 46.2756 18.3125 46.2514 15.6765 46.1302ZM15.4694 0.932162C12.8064 1.05336 10.9867 1.47536 9.39755 2.09336C7.75177 2.73156 6.35853 3.58776 4.9663 4.97696C3.57406 6.36616 2.71955 7.76076 2.08097 9.40556C1.46259 10.9948 1.04034 12.8124 0.919069 15.4738C0.795795 18.1394 0.767578 18.9916 0.767578 25.7808C0.767578 32.57 0.795795 33.4222 0.919069 36.0878C1.04034 38.7494 1.46259 40.5668 2.08097 42.156C2.71955 43.7998 3.57426 45.196 4.9663 46.5846C6.35833 47.9732 7.75177 48.8282 9.39755 49.4682C10.9897 50.0862 12.8064 50.5082 15.4694 50.6294C18.138 50.7506 18.9893 50.7808 25.7826 50.7808C32.5759 50.7808 33.4286 50.7526 36.0958 50.6294C38.759 50.5082 40.5774 50.0862 42.1676 49.4682C43.8124 48.8282 45.2066 47.9738 46.5989 46.5846C47.9911 45.1954 48.8438 43.7998 49.4842 42.156C50.1026 40.5668 50.5268 38.7492 50.6461 36.0878C50.7674 33.4202 50.7956 32.57 50.7956 25.7808C50.7956 18.9916 50.7674 18.1394 50.6461 15.4738C50.5248 12.8122 50.1026 10.9938 49.4842 9.40556C48.8438 7.76176 47.9889 6.36836 46.5989 4.97696C45.2088 3.58556 43.8124 2.73156 42.1696 2.09336C40.5775 1.47536 38.7588 1.05136 36.0978 0.932162C33.4306 0.810962 32.5779 0.780762 25.7846 0.780762C18.9913 0.780762 18.138 0.808962 15.4694 0.932162Z"
                        fill=""
                      />
                    </svg>
                    <div className="absolute top-full left-0 w-full h-full rounded-full bg-gradient-to-bl from-purple-500 via-pink-500 to-yellow-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                  </button>
                </Link>

                <Link
                  href="https://www.facebook.com/profile.php?id=61562092664446"
                  target="_blank"
                  name="fb-Link"
                >
                  <button
                    className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full bg-transparent ring-inset ring-1 ring-white border-white border-[2px] group transition-all duration-300"
                    aria-label="fb"
                    type="button"
                    data-id="fb-btn"
                  >
                    <svg
                      className="relative z-10 fill-white transition-all duration-300 group-hover:fill-white"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 72 72"
                      fill="none"
                    >
                      <path
                        d="M46.4927 38.6403L47.7973 30.3588H39.7611V24.9759C39.7611 22.7114 40.883 20.4987 44.4706 20.4987H48.1756V13.4465C46.018 13.1028 43.8378 12.9168 41.6527 12.8901C35.0385 12.8901 30.7204 16.8626 30.7204 24.0442V30.3588H23.3887V38.6403H30.7204V58.671H39.7611V38.6403H46.4927Z"
                        fill=""
                      />
                    </svg>
                    <div className="absolute top-full left-0 w-full h-full rounded-full bg-blue-500 z-0 transition-all duration-500 group-hover:top-0"></div>
                  </button>
                </Link>

                <Link
                  href="https://x.com/Feativestudios"
                  target="_blank"
                  aria-label="x"
                  type="button"
                  data-id="x-btn"
                >
                  <button
                    className="w-10 h-10 flex items-center justify-center rounded-full relative overflow-hidden bg-transparent border-white z-10 ring-inset ring-2 border-[1px] ring-white group transition-all duration-300"
                    aria-label="twitter"
                  >
                    <svg
                      className="fill-white z-10 transition-all duration-300 group-hover:fill-black"
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 72 72"
                      fill="none"
                    >
                      <path
                        d="M40.7568 32.1716L59.3704 11H54.9596L38.7974 29.383L25.8887 11H11L30.5205 38.7983L11 61H15.4111L32.4788 41.5869L46.1113 61H61L40.7557 32.1716H40.7568ZM34.7152 39.0433L32.7374 36.2752L17.0005 14.2492H23.7756L36.4755 32.0249L38.4533 34.7929L54.9617 57.8986H48.1865L34.7152 39.0443V39.0433Z"
                        fill=""
                      />
                    </svg>
                    <div className="absolute top-full left-0 w-full h-full rounded-full bg-white z-0 transition-all duration-500 group-hover:top-0"></div>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className=" border-white border-opacity-40 py-6">
          <div className="flex md:flex-row flex-col justify-between items-center gap-4 text-sm">
            <div className="flex items-center gap-4">
                <div className="">
                <a
                  href="//www.dmca.com/Protection/Status.aspx?ID=5933efba-be96-447b-b6b2-f75457c6a605"
                  title="DMCA.com Protection Status"
                  className="dmca-badge"
                >
                  <img
                    src="https://images.dmca.com/Badges/dmca-badge-w150-5x1-01.png?ID=5933efba-be96-447b-b6b2-f75457c6a605"
                    alt="DMCA.com Protection Status"
                  />
                </a>
              </div>
              <div className="text-light-white text-opacity-60">
                © 2025 | All rights reserved.
              </div>

            </div>
            <div className="flex flex-row items-center gap-4 md:gap-6  text-opacity-60">
          
            <div className=" flex flex-row gap-10">
             
           <ul className="text-base md:text-[20px]  flex max-lg:flex-wrap flex-row gap-5 text-opacity-[60%]">
  <li className="list-none cursor-pointer text-darkLiver hover:text-white">
    <Link href="/">Home</Link>
    </li>
     {/* {!isPrivacyPolicyPage && !isTermsPage && !isJobApplyPage && !isAboutPage && !isPlanAdventurePrivacyPolicyPage && !isTreasureCorePrivacyPolicyPage && ( <>
  <li className="cursor-pointer text-darkLiver hover:text-white"><Link href={"#services"}>Services</Link> </li>
  <li className="cursor-pointer text-darkLiver hover:text-white"><Link href={"#projects"}>Projects</Link></li>
  <li className="cursor-pointer text-darkLiver hover:text-white"><Link href={"#expertise"}>Expertise</Link></li>
  <li className="cursor-pointer text-darkLiver hover:text-white"><Link href={"#contact"}>Contact</Link></li>
</>
     )} */}
  <li className="cursor-pointer text-darkLiver hover:text-white">
    <Link href="/job-apply">Career</Link>
  </li>
  <li className="cursor-pointer text-darkLiver hover:text-white">
    <Link href="/about">About Us</Link>
  </li>
  <li>
    <Link
      href="/termsAndConditions"
      target="_blank"
      className="cursor-pointer md:text-sm ml-5 font-semibold text-base text-darkLiver hover:text-white transition-colors"
    >
      Terms of Use
    </Link>
  </li>
</ul>

            </div>
       
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;