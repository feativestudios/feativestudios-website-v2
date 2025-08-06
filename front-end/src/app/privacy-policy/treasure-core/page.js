const PrivacyPolicy = () => {
  return (
    <section className="TERMS-AND-CONDITIONS min-h-screen text-gray-200">
      <div className="pt-32 flex flex-col max-w-7xl mx-auto px-10">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-[64px] font-semibold">Privacy Policy</h1>
            <div className="font-semibold self-start text-[18px]">
              Effective Date: June 18, 2025
            </div>
            <p className="self-start">
              Thank you for playing Treasure Core: Dig & Discover! This Privacy
              Policy explains:
            </p>
            <ul className="list-disc ml-10 self-start">
              <li>How we collect your personal data and why,</li>
              <li>How we use your personal data, and</li>
              <li>Your choices regarding your personal data.</li>
            </ul>
            <p>
              This Privacy Policy applies to the mobile game Treasure Core: Dig & Discover, along with
              any related services, features, and content provided by Feative Studios. We may
              periodically update this Privacy Policy by posting a new version on our official website
              at{" "}
              <a
                href="https://www.feativestudios.com"
                target="_blank"
                className="font-semibold underline text-[16px]"
              >
                https://www.feativestudios.com.
              </a>{" "}
              Your continued use of the Service after the effective
              date will be subject to the updated Privacy Policy.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <div className="text-bitterSweet uppercase font-bold sm:text-[28px] text-2xl md:text-[36px]">
            Information We Collect
          </div>
          <div className="text-night-rider text-base md:text-[18px] font-semibold">
            Personal Information
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            We do not collect any personal information from users of our game.
          </div>
          <div className="text-night-rider text-base md:text-[18px] font-semibold">
            Device Permissions
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            To make the game work properly, we may use the following:
          </div>
          <ul className="text-night-rider text-base md:text-[18px] list-disc ml-10">
            <li>Access to internet and network status</li>
            <li>Read/write storage for saving game data</li>
            <li>Keep screen on during gameplay</li>
            <li>Show ads using Google services</li>
            <li>Run background tasks when needed</li>
            <li>Basic system access for performance</li>
          </ul>
          <div className="text-night-rider text-base md:text-[18px]">
            We do not collect any personal information through these permissions.
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <div className="text-bitterSweet uppercase font-bold sm:text-[28px] text-2xl md:text-[36px]">
            Why We Collect Your Data
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            We collect limited data through ad services to support and improve your gameplay
            experience.
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            We use this data to:
          </div>
          <ul className="text-night-rider text-base md:text-[18px] list-disc ml-10">
            <li>Serve ads and allow reward-based ad features (e.g., double rewards)</li>
            <li>Save your in-game progress</li>
            <li>Improve gameplay experience based on general player behavior</li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <div className="text-bitterSweet uppercase font-bold sm:text-[28px] text-2xl md:text-[36px]">
            Who Can See Your Data
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            Treasure Core: Dig & Discover uses the following third-party service:
          </div>
          <ul className="text-night-rider text-base md:text-[18px] list-disc ml-10">
            <li>Google AdMob – for showing in-game advertisements</li>
          </ul>
          <div className="text-night-rider text-base md:text-[18px]">
            AdMob may collect certain data (such as device type and IP address) to deliver
            personalized ads. These services operate under their own privacy policies. You can
            learn more about AdMob's policy at:{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              className="font-semibold underline"
            >
              https://policies.google.com/privacy
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <div className="text-bitterSweet uppercase font-bold sm:text-[28px] text-2xl md:text-[36px]">
            Your Rights and Options
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            Treasure Core: Dig & Discover does not store any personal account data, so there is no
            personal information to delete. However:
          </div>
          <ul className="text-night-rider text-base md:text-[18px] list-disc ml-10">
            <li>
              You can control or limit ad tracking and data collection through your device's
              privacy or ad settings.
            </li>
            <li>
              If you uninstall the game, all locally stored data (such as progress and settings)
              will be automatically deleted from your device.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <div className="text-bitterSweet uppercase font-bold sm:text-[28px] text-2xl md:text-[36px]">
            Contact Us
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            If you have any questions about data protection, or requests related to your information, you
            may contact us at:{" "}
            <a
              href="mailto:feative@feativestudios.com"
              className="font-semibold underline"
            >
              feative@feativestudios.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;