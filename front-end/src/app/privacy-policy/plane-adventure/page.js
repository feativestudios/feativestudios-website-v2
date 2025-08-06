const PrivacyPolicy = () => {
  return (
    <section className="TERMS-AND-CONDITIONS min-h-screen text-gray-200">
      <div className="pt-32 flex flex-col max-w-7xl mx-auto px-10">
        <div className="flex items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-[64px] font-semibold">Privacy Policy</h1>
            <div className="font-semibold self-start text-[18px]">
              Effective Date: May 15, 2025
            </div>
            <p className="self-start">
              Thank you for playing Plane Adventure: Fly Challenge! This Privacy
              Policy explains:
            </p>
            <ul className="list-disc ml-10 self-start">
              <li>How we collect your personal data and why,</li>
              <li>How we use your personal data, and</li>
              <li>Your choices regarding your personal data.</li>
            </ul>
            <p>
              This Privacy Policy applies to the mobile game Plane Adventure:
              Fly Challenge, related services, features, and content provided by
              Feative Studios We may periodically update this Privacy Policy by
              posting a new version on our official website at{" "}
              <a
                href="https://www.feativestudios.com"
                target="_blank"
                className="font-semibold underline text-[16px]"
              >
                Feative Studios.
              </a>
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
            We may collect the following data when you use Plane Adventure: Fly
            Challenge:
          </div>
          <ul className="text-night-rider text-base md:text-[18px] list-disc ml-10">
            <li>Email address</li>
            <li>Player usemame</li>
            <li>Password</li>
          </ul>
          <div className="text-night-rider text-base md:text-[18px] font-semibold">
            Device Permissions
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            We may request access to your device's camera to enable the
            Augmented Reality (AR) mode within the game. You may modify or
            revoke these permissions through your device settings at any time.
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <div className="text-bitterSweet uppercase font-bold sm:text-[28px] text-2xl md:text-[36px]">
            Why We Collect Your Data
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            We collect your data solely to display, save and maintain your game
            progress within Plane Adventure: Fly Challenge.
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            We use your data to:
          </div>
          <ul className="text-night-rider text-base md:text-[18px] list-disc ml-10">
            <li>Operate and improve the game and its services</li>
            <li>Create and manage user accounts</li>
            <li>Enable gameplay and store user progress</li>
            <li>Access the camera to enable AR features</li>
            <li>
              Develop and improve features based on player activity to enhance
              your overall experience.
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <div className="text-bitterSweet uppercase font-bold sm:text-[28px] text-2xl md:text-[36px]">
            Who Can See Your Data
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            Plane Adventure: Fly Challenge uses the following third-party
            services:
          </div>
          <ul className="text-night-rider text-base md:text-[18px] list-disc ml-10">
            <li>Firebase (by Google): Analytics, crash reporting</li>
          </ul>
          <div className="text-night-rider text-base md:text-[18px]">
            We use trusted third-party services like Firebase to help operate
            the game and handle analytics. These services may process data
            independently based on their own privacy policies. We encourage you
            to review them.
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <div className="text-bitterSweet uppercase font-bold sm:text-[28px] text-2xl md:text-[36px]">
            Your Rights and Options
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            We store your personal data only as long as your Plane Adventure:
            Fly Challenge account is active.
          </div>
          <ul className="text-night-rider text-base md:text-[18px] list-disc ml-10">
            <li>
              When your account is deleted, your personal information and
              gameplay progress are permanently erased immediately and cannot be
              restored.
            </li>
          </ul>
          <div className="text-night-rider text-base md:text-[18px] font-semibold">
            How to Delete Your Account:
          </div>
          <ol className="text-night-rider text-base md:text-[18px] list-decimal ml-10">
            <li>Open Plane Adventure: Fly Challenge.</li>
            <li>Go to Settings.</li>
            <li>Select Delete Account.</li>
            <li>Confirm the deletion.</li>
          </ol>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <div className="text-bitterSweet uppercase font-bold sm:text-[28px] text-2xl md:text-[36px]">
            Children's Privacy
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            Our services are not intended for users under 13 years of age. We do
            not knowingly collect personal data from children. If we discover
            such data, it will be deleted immediately.
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            While the game may access the camera for AR features, we do not
            record, store, or transmit any images or video.
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-10">
          <div className="text-bitterSweet uppercase font-bold sm:text-[28px] text-2xl md:text-[36px]">
            Contact Us
          </div>
          <div className="text-night-rider text-base md:text-[18px]">
            If you have questions about data protection, or if you have any
            requests regarding your personal data, you may contact us at:{" "}
            <a
              href="mailto:feative@feativestudios.com"
              className="font-semibold underline"
            >
              feative@feativestudios.com.
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
