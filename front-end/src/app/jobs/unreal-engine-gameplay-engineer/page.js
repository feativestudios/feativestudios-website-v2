"use client";
import Link from "next/link";

const UnrealEngineGameplayEngineerJob = () => {
  return (
    <div className="font-arca bg-black text-white min-h-screen">
      <section className="container mx-auto max-w-4xl px-6 py-20">
        <Link href="/about" className="inline-flex items-center text-gray-400 hover:text-white mb-8 font-jost">
          <span className="mr-2">←</span> Back
        </Link>

        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black tracking-wider uppercase mb-4">
            Unreal Engine Gameplay Engineer
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
              We are seeking a skilled Unreal Engine Gameplay Engineer to join our development team. 
              You will be responsible for implementing core gameplay systems, mechanics, and features 
              that create engaging player experiences. This role requires strong technical skills in 
              Unreal Engine 5, C++, and Blueprint scripting, along with a passion for creating 
              innovative gameplay solutions.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            Key Responsibilities
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed">
            <ul className="space-y-3 list-disc list-inside">
              <li>Design and implement gameplay systems using Unreal Engine 5 and C++</li>
              <li>Develop player mechanics, AI behaviors, and interactive systems</li>
              <li>Create and maintain Blueprint systems for rapid prototyping and iteration</li>
              <li>Optimize gameplay code for performance across multiple platforms</li>
              <li>Collaborate with designers to implement and refine game mechanics</li>
              <li>Integrate audio, visual effects, and animation systems into gameplay</li>
              <li>Debug and resolve gameplay-related issues and bugs</li>
              <li>Participate in code reviews and maintain coding standards</li>
              <li>Work with multiplayer networking and replication systems</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            Requirements
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed">
            <ul className="space-y-3 list-disc list-inside">
              <li>4+ years of experience in game development with Unreal Engine</li>
              <li>Strong proficiency in C++ programming and object-oriented design</li>
              <li>Expert knowledge of Unreal Engine 5 Blueprint system</li>
              <li>Experience with gameplay programming and system design</li>
              <li>Understanding of game physics, animation, and AI systems</li>
              <li>Knowledge of multiplayer networking and replication</li>
              <li>Experience with version control systems (Perforce, Git)</li>
              <li>Strong debugging and problem-solving skills</li>
              <li>Bachelor's degree in Computer Science or equivalent experience</li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-wider uppercase mb-6">
            Preferred Qualifications
          </h2>
          <div className="text-gray-300 font-jost leading-relaxed">
            <ul className="space-y-3 list-disc list-inside">
              <li>Experience with mobile game development and optimization</li>
              <li>Knowledge of console development (PlayStation, Xbox, Nintendo Switch)</li>
              <li>Familiarity with agile development methodologies</li>
              <li>Experience with live service games and backend integration</li>
              <li>Understanding of game monetization and progression systems</li>
              <li>Portfolio of shipped games or notable projects</li>
              <li>Experience with VR/AR development</li>
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

export default UnrealEngineGameplayEngineerJob;
