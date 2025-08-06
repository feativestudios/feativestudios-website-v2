"use client";
import Link from "next/link";

const UXUIDesignerJob = () => {
  return (
    <div className="font-arca bg-black text-white min-h-screen">
      <section className="container mx-auto max-w-4xl px-6 py-20">
        <Link href="/about" className="inline-flex items-center text-gray-400 hover:text-white mb-8 font-jost">
          <span className="mr-2">←</span> Back
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-wider uppercase mb-4">
            UX/UI Designer
          </h1>
          <p className="text-gray-400 text-lg font-jost mb-6">Remote</p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="flex flex-col">
              <span className="text-sm text-gray-400 font-jost">Job Type</span>
              <span className="text-white font-medium">Full Time</span>
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-400 font-jost">Workspace</span>
              <span className="text-white font-medium">Remote / On-site</span>
            </div>
          </div>

          <Link href="/job-apply">
            <button className="bg-bitterSweet hover:bg-bitterSweet/60 text-white px-8 py-3 rounded font-arca text-lg tracking-wider uppercase transition-colors">
              Apply Now
            </button>
          </Link>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            About Us
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed space-y-4">
            <p>
              At Feative Studios, we are redefining the future of gaming by building a diverse portfolio 
              of micro-AAA games that leverage shared technology, resources, and an interconnected 
              player community. Unlike traditional mega AAA studios that rely on a single flagship IP, 
              our vision is to create multiple, interconnected IPs that together form a cohesive and 
              scalable gaming ecosystem. Each game's success amplifies the others, compounding 
              growth and enhancing the player experience across our titles. Our ultimate goal is to 
              become the premier destination for millions of players transitioning to more sophisticated 
              gaming environments, delivering seamless cross-game features like shared quests, social 
              interactions, and interoperable rewards.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            About the Role
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed space-y-4">
            <p>
              We are looking for a talented UX/UI Designer to create intuitive and engaging user 
              experiences for our gaming ecosystem. You will be responsible for designing user 
              interfaces that enhance player engagement while maintaining consistency across our 
              interconnected game portfolio. This role requires a deep understanding of gaming UX 
              principles and the ability to create designs that work seamlessly across multiple platforms.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            Key Responsibilities
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed">
            <ul className="space-y-3 list-disc list-inside">
              <li>Design intuitive user interfaces for games and companion applications</li>
              <li>Create wireframes, prototypes, and high-fidelity mockups</li>
              <li>Develop and maintain design systems across multiple game titles</li>
              <li>Conduct user research and usability testing to inform design decisions</li>
              <li>Collaborate with developers to ensure design implementation accuracy</li>
              <li>Design responsive interfaces for mobile, PC, and console platforms</li>
              <li>Create user flows and information architecture for complex game systems</li>
              <li>Work with product managers to define user requirements and success metrics</li>
              <li>Stay current with gaming industry trends and UX best practices</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            Requirements
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed">
            <ul className="space-y-3 list-disc list-inside">
              <li>3+ years of experience in UX/UI design, preferably in gaming</li>
              <li>Proficiency in design tools (Figma, Sketch, Adobe Creative Suite)</li>
              <li>Strong understanding of user-centered design principles</li>
              <li>Experience with prototyping tools and interactive design</li>
              <li>Knowledge of mobile and responsive design best practices</li>
              <li>Understanding of accessibility standards and inclusive design</li>
              <li>Experience with user research methodologies and usability testing</li>
              <li>Strong portfolio demonstrating UX/UI design skills</li>
              <li>Excellent communication and collaboration skills</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            Preferred Qualifications
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed">
            <ul className="space-y-3 list-disc list-inside">
              <li>Experience designing for gaming platforms and game engines</li>
              <li>Knowledge of game monetization and progression system design</li>
              <li>Familiarity with VR/AR interface design principles</li>
              <li>Understanding of front-end development (HTML, CSS, JavaScript)</li>
              <li>Experience with design systems and component libraries</li>
              <li>Background in motion graphics and animation</li>
              <li>Degree in Design, HCI, or related field</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <Link href="/job-apply">
            <button className="bg-bitterSweet hover:bg-bitterSweet/60 text-white px-12 py-4 rounded font-arca text-xl tracking-wider uppercase transition-colors">
              Apply Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UXUIDesignerJob;
