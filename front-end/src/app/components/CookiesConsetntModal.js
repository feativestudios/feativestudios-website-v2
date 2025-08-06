"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

const CookieConsentModal = () => {
  const [showModal, setShowModal] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const [cookieSettings, setCookieSettings] = useState({
    necessary: true,
    functional: false,
    performance: false,
    targeting: false,
  })

  const [expandedDescriptions, setExpandedDescriptions] = useState({
    necessary: false,
    performance: false,
    targeting: false,
    functional: false,
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasConsentCookie = document.cookie.includes("cookie_consent=")
      if (!hasConsentCookie) {
        setShowModal(true)
      }
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleToggle = (cookieType) => {
    if (cookieType === "necessary") return
    setCookieSettings((prev) => ({
      ...prev,
      [cookieType]: !prev[cookieType],
    }))
  }

  const toggleDescription = (cookieType) => {
    setExpandedDescriptions({
      necessary: false,
      performance: false,
      targeting: false,
      functional: false,
      [cookieType]: !expandedDescriptions[cookieType],
    })
  }

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      performance: true,
      targeting: true,
    }
    document.cookie = `cookie_consent=${JSON.stringify(allAccepted)}; max-age=31536000; path=/`
    setShowModal(false)
  }

  const acceptSelected = () => {
    document.cookie = `cookie_consent=${JSON.stringify(cookieSettings)}; max-age=31536000; path=/`
    setShowModal(false)
  }

  const rejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      performance: false,
      targeting: false,
    }
    document.cookie = `cookie_consent=${JSON.stringify(onlyNecessary)}; max-age=31536000; path=/`
    setShowModal(false)
  }

  // Reusable CookieToggleItem component with smooth grid-based accordion animations
  const CookieToggleItem = ({ 
    cookieType, 
    title, 
    description, 
    enabled, 
    disabled = false 
  }) => (
    <div className="border-b border-gray-700 pb-3 last:border-b-0">
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <button
            onClick={disabled ? undefined : () => handleToggle(cookieType)}
            disabled={disabled}
            className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
              enabled ? "bg-bitterSweet" : "bg-gray-600"
            } ${disabled ? "cursor-not-allowed" : ""}`}
          >
            <span
              className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                enabled ? "translate-x-6" : "translate-x-1"
              }`}
            />
          </button>
          <span className="text-white font-medium">{title}</span>
        </div>
        <button
          onClick={() => toggleDescription(cookieType)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {expandedDescriptions[cookieType] ? (
            <div className="text-5xl transition-transform rotate-180 relative -top-1 duration-500 ease-in-out font-thin font-mono text-center content-center">
              -
            </div>
          ) : (
            <div className="text-4xl font-thin font-mono text-center transition-transform -rotate-0 duration-700 relative top-[0.5px] right-1 ease-in-out content-center">
              +
            </div>
          )}
        </button>
      </div>
      
      {/* Smooth expanding description using grid with min-height/max-height */}
      <div
        className={`grid transition-[max-height,min-height] duration-500 ease-in-out overflow-hidden ${
          expandedDescriptions[cookieType] 
            ? 'min-h-[50px] max-h-[500px]' 
            : 'min-h-0 max-h-0'
        }`}
      >
        <div className="text-sm text-gray-300 leading-relaxed py-2 font-jost">
          {description}
        </div>
      </div>
    </div>
  )

  if (!showModal) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />

      <div className="relative bg-black/70 backdrop-blur-md border-2 border-bitterSweet/40 rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto">
        {!showDetails ? (
          <div className="p-8">
            <div className="mb-6">
              <h1 className="text-2xl font-bold text-bitterSweet ">Feative Studios</h1>
            </div>

            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Your Privacy</h2>
              <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
                <p>
                  Feative Studios uses essential cookies and similar technologies to ensure the optimal operation of our
                  website and to offer you a tailored user experience. Alongside these necessary cookies, Feative
                  Stuidos utilizes additional cookies to enhance your experience, conduct analytics such as tracking
                  visits and traffic sources, deliver relevant advertisements, and engage with third-party services.
                </p>
                <p>
                  By clicking <span className="text-white font-medium">"Accept,"</span> you consent to the use all of
                  these cookies on your device. You can adjust your cookie settings or withdraw your consent for
                  optional cookies at any time by selecting the{" "}
                  <span className="text-white font-medium">"Customize Cookies"</span> option. Please note that depending
                  on your cookie preferences, some features or personalized aspects of our website may not be fully
                  available to you.
                </p>
                <p>
                  For more information, please review our{" "}
                  <Link href={"/privacy-policy"}>
                    <span className="text-bitterSweet cursor-pointer hover:underline">Policy</span>.
                  </Link>
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={() => setShowDetails(true)}
                className="flex-1 bg-transparent border border-gray-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-500 transition-colors"
              >
                Customize Cookies
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 bg-bitterSweet hover:bg-red-500 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        ) : (
          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-white">Control Your Privacy</h2>
              <button
                onClick={() => setShowDetails(false)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mb-8">
              <p className="text-gray-300 text-sm leading-relaxed">
                Websites may store or retrieve information on your browser, mostly in the form of cookies. This
                information is used to personalize your experience and is not usually linked to your identity. You can
                choose not to allow certain types of cookies, but it may affect your website experience. Learn more and
                change settings by clicking on the different categories.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-lg font-medium text-white mb-6">Choose Which Cookies To Enable</h3>

              <div className="space-y-4">
                <CookieToggleItem
                  cookieType="necessary"
                  title="Strictly Necessary"
                  description="Strictly necessary cookies enable website functionality and cannot be turned off. They are typically set in response to actions you take, like setting privacy preferences, logging in, or filling in forms. You can block or receive alerts about these cookies, but some website features may not work. These cookies do not store personal information."
                  enabled={cookieSettings.necessary}
                  disabled={true}
                />

                <CookieToggleItem
                  cookieType="performance"
                  title="Performance"
                  description="Performance cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. They allow us to count visits, identify traffic sources, and measure site performance to improve user experience. All information collected is aggregated and anonymous."
                  enabled={cookieSettings.performance}
                />

                <CookieToggleItem
                  cookieType="targeting"
                  title="Targeting"
                  description="Targeting cookies are set by our advertising partners to build a profile of your interests and show you relevant ads on other sites. They work by uniquely identifying your browser and device. If you do not allow these cookies, you will experience less targeted advertising."
                  enabled={cookieSettings.targeting}
                />

                <CookieToggleItem
                  cookieType="functional"
                  title="Functional"
                  description="Functional cookies enable enhanced functionality and personalization, such as videos and live chats. They may be set by us or third-party providers whose services we use on our pages. If you do not allow these cookies, some or all of these services may not function properly."
                  enabled={cookieSettings.functional}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={acceptSelected}
                className="flex-1 bg-transparent border border-gray-600 text-white font-medium py-3 px-6 rounded-lg hover:bg-red-500 transition-colors"
              >
                Confirm My Choices
              </button>
              <button
                onClick={acceptAll}
                className="flex-1 bg-bitterSweet hover:bg-red-500 text-white font-medium py-3 px-6 rounded-lg transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CookieConsentModal