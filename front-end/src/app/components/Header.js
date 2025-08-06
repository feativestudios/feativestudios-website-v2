// components/Navbar.js
'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import useScrollNavigation from '../hooks/useScrollNavigation';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  const [stickyHeader, setStickyHeader] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [visible, setVisible] = useState(true);

  const isTermsPage = pathname === '/termsAndConditions/';
  const isPrivacyPolicyPage = pathname === '/privacy-policy/';
  const isJobApplyPage = pathname === '/job-apply/';
  const isAboutPage = pathname === '/about/';
   const isPlanAdventurePrivacyPolicyPage = pathname === "/privacy-policy/plane-adventure/";
  const isTreasureCorePrivacyPolicyPage = pathname === "/privacy-policy/treasure-core/";



  const sectionIds = ['home', 'services', 'projects', ,'expertise', 'contact'];
  const activeSection = useScrollNavigation(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (!(pathname === '/') && scrollTop < 200) {
        if (scrollTop >= 40 && scrollTop <= 180) {
          setVisible(false);
        } else {
          setVisible(true);
        }
        setStickyHeader(false);
      } else {
        setStickyHeader(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const servicesItems = [
    {
      label: 'Game Development',
      href: '/services/game-services',
      pathname: '/assets/miniController2.webp',
    },
    {
      label: 'Metaverse',
      href: '/services/metaverse-services',
      pathname: '/assets/miniVr2.webp',
    },
    {
      label: 'AR',
      href: '/services/ar-services',
      pathname: '/assets/miniAr2.webp',
    },
    {
      label: 'VR',
      href: '/services/vr-services',
      pathname: '/assets/miniAr2.webp',
    },
    {
      label: 'Art & Design',
      href: '/services/art-and-design-services',
      pathname: '/assets/miniArt2.webp',
    },
  ];

  const menuItems = [
    'Home',
    {
      label: 'Services',
      submenu: servicesItems,
    },
    'Projects',
    'Expertise',
    // 'About',
    'Contact',
  ];

  const isActive = (item) => {
    const sectionId = typeof item === 'string' ? item.toLowerCase() : item.label.toLowerCase();
    return activeSection === sectionId;
  };

  const handleMobileMenuClick = (sectionId) => {
    setToggle(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }
    }, 300);
  };


  return (
    <>
      {toggle && <div className="inset-0 fixed z-[15] top-0 backdrop-blur-3xl w-full h-full"></div>}
      <nav
        className={`w-full contain z-[15] font-arca ${
          stickyHeader
            ? 'fixed bg-black translate-y-0 transition-transform delay-300 ease-in-out'
            : 'absolute bg-transparent transition-transform duration-1000 top-0 ease-in-out'
        } ${visible ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="px-5 sm:px-20 h-[85px] w-full flex flex-row justify-center">
          <div className="flex flex-row gap-5 justify-between text-white items-center w-full">
            <div>
              <Link href="/">
                <Image
                  src="/assets/logo.webp"
                  width={238}
                  height={50}
                  alt="logo"
                  priority
                  quality={65}
                  className="md:max-w-[170px] max-w-[150px]"
                />
              </Link>
            </div>

            {!isTermsPage && !isPrivacyPolicyPage && !isJobApplyPage && !isAboutPage && !isPlanAdventurePrivacyPolicyPage && !isTreasureCorePrivacyPolicyPage &&  (
              <div className="max-xl:hidden items-center font-medium text-xl flex flex-row gap-10">
                {menuItems.map((item, ind) => {
                  if (typeof item === 'string') {
                    const active = isActive(item);
                    return (
                      <Link
                        href={`${item.toLocaleLowerCase() !== 'about' ?  `#${item.toLowerCase()}`:  `/${item.toLocaleLowerCase()}`}`}
                        key={item}
                        className={clsx(
                          'flex items-center flex-col',
                          active ? 'text-bitterSweet' : 'text-white hover:text-bitterSweet'
                        )}
                        onClick={() => handleMobileMenuClick(item.toLowerCase())}
                      >
                        <div
                          className={`${
                            ind === menuItems.length - 1
                              ? 'bg-bitterSweet hover:border hover:border-white rounded-full cursor-pointer min-w-[160px] h-[46px]'
                              : ''
                          } flex items-center justify-center text-center ${
                            active && item.toLowerCase() === 'contact' ? 'border border-white' : ''
                          }`}
                        >
                          <span
                            className={`uppercase text-[14px] font-bold leading-[18.2px] ${
                              item === 'Contact' ? 'text-white' : ''
                            }
                            
                            `}
                            
                          >
                            {item}
                          </span>
                        </div>
                        {active && item !== 'Contact' && (
                        <div className="h-[2px] relative bg-bitterSweet w-full" style={{boxShadow: "0px -5px 40px 7px red"}}></div>
                        )}
                      </Link>
                    );
                  } else {
                    const active = isActive(item);
                    return (
                      <div key={item.label} className="flex flex-col items-center">
                        <Link
                          href="#services"
                          className="relative flex items-center justify-center"
                          onClick={() => handleMobileMenuClick('services')}
                        >
                          <div className="flex flex-row text-white hover:text-bitterSweet cursor-pointer justify-between items-center">
                            <button
                              className={clsx(
                                active ? '!text-bitterSweet' : 'text-white hover:text-bitterSweet'
                              )}
                              onClick={() => setServicesOpen(!servicesOpen)}
                            >
                              <div className="text-[14px]  uppercase">{item.label}</div>
                            </button>
                          </div>
                        </Link>
                        {active && (
                          <div className="h-[2px] relative bg-bitterSweet drop-shadow-lg shadow-bitterSweet w-full -top-1 " style={{boxShadow: "0px -5px 40px 7px red"}}></div>
                        )}
                      </div>
                    );
                  }
                })}
              </div>
            )}

            {!isTermsPage && !isPrivacyPolicyPage && !isJobApplyPage && !isAboutPage && !isPlanAdventurePrivacyPolicyPage && !isTreasureCorePrivacyPolicyPage &&  (
              <div className="xl:hidden block relative right-0 text-white">
                {toggle ? (
                  <svg
                    className="md:w-10 w-[28px] h-[28px] md:h-10 text-white hover:cursor-pointer transition-transform duration-300 ease-in-out transform rotate-90"
                    onClick={() => setToggle(!toggle)}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <path
                      d="M19 5L5 19M5.00001 5L19 19"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    className="md:w-10 w-[28px] h-[28px] md:h-10 text-white hover:cursor-pointer transition-transform duration-300 ease-in-out transform rotate-180"
                    onClick={() => setToggle(!toggle)}
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#ffffff"
                  >
                    <path
                      d="M4 7C4 6.44771 4.44772 6 5 6H24C24.5523 6 25 6.44771 25 7C25 7.55229 24.5523 8 24 8H5C4.44772 8 4 7.55229 4 7Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M4 13.9998C4 13.4475 4.44772 12.9997 5 12.9997L16 13C16.5523 13 17 13.4477 17 14C17 14.5523 16.5523 15 16 15L5 14.9998C4.44772 14.9998 4 14.552 4 13.9998Z"
                      fill="#ffffff"
                    />
                    <path
                      d="M5 19.9998C4.44772 19.9998 4 20.4475 4 20.9998C4 21.552 4.44772 21.9997 5 21.9997H22C22.5523 21.9997 23 21.552 23 20.9998C23 20.4475 22.5523 19.9998 22 19.9998H5Z"
                      fill="#ffffff"
                    />
                  </svg>
                )}
              </div>
            )}
          </div>
        </div>

        {toggle && !isTermsPage && !isPrivacyPolicyPage && !isJobApplyPage && !isAboutPage && !isPlanAdventurePrivacyPolicyPage && !isTreasureCorePrivacyPolicyPage &&  (
          <div className="w-full flex flex-row h-max justify-end xl:hidden">
            <div className="flex flex-col w-full h-full font-medium md:text-xl text-sm text-start bg-night-rider items-end self-end text-white">
              {menuItems.map((item, index) => {
                const isObject = typeof item !== 'string';
                const label = isObject ? item?.label : item;
                const sectionId = label.toLowerCase();
                const active = isActive(item);


                return (
                  <div key={index} className="relative w-full">
                    {console.log("item",item)}
                    <Link
                        href={`${!isObject && item.toLowerCase() !== 'about' ?  `#${item?.toLowerCase()}`: isObject ? `#${item?.label.toLowerCase()}`: `/${item.toLowerCase()}`}`}
                      className="block w-full"
                      onClick={() => handleMobileMenuClick(sectionId)}
                    >
                      <div
                        className={`py-6 uppercase w-full px-10 border-b-[0.25px] border-lightWhite border-opacity-50 last:border-[0px] ${
                          active ? 'text-bitterSweet' : 'text-white'
                        }`}
                      >
                        {label}
                      </div>
                    </Link>
                    {active && (
                      <div className="absolute bottom-0 left-0 h-[2px] bg-bitterSweet w-full"></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;