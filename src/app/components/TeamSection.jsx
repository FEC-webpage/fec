"use client";
import React, { useRef, useState } from "react";
import { SocialIcon } from "react-social-icons";

const teamData = {
  groupPhoto: "/teams.png",
  teams: [
    {
      id: "finance-team",
      name: "Finance Team",
      description: "Our Finance Team specializes in portfolio optimization, investment strategies, and financial modeling. The team analyzes market trends, develops trading strategies, and manages the club's resources to organize impactful events and initiatives.",
      members: [
        {
          name: "Divyansh Gupta",
          image: "/images/Divyansh.webp",
          linkedin: "https://www.linkedin.com/in/divyanshhgupta/",
          facebook: "https://www.facebook.com/profile.php?id=100087196202941"
        },
        {
          name: "Divyansh Gupta",
          image: "/images/Divyansh.webp",
          linkedin: "https://www.linkedin.com/in/divyanshhgupta/",
          facebook: "https://www.facebook.com/profile.php?id=100087196202941"
        },
        {
          name: "Divyansh Gupta",
          image: "/images/Divyansh.webp",
          linkedin: "https://www.linkedin.com/in/divyanshhgupta/",
          facebook: "https://www.facebook.com/profile.php?id=100087196202941"
        },
      ]
    },
    {
      id: "branding-team",
      name: "Branding and Strategy Team",
      description: "The Branding and Strategy Team shapes our club's identity and outreach efforts. They develop our communication strategy, maintain our online presence, and ensure our events and initiatives align with our club's mission and vision.",
      members: [
        {
          name: "Divyansh Gupta",
          image: "/images/Divyansh.webp",
          linkedin: "https://www.linkedin.com/in/divyanshhgupta/",
          facebook: "https://www.facebook.com/profile.php?id=100087196202941"
        },
        {
          name: "Divyansh Gupta",
          image: "/images/Divyansh.webp",
          linkedin: "https://www.linkedin.com/in/divyanshhgupta/",
          facebook: "https://www.facebook.com/profile.php?id=100087196202941"
        },
        {
          name: "Divyansh Gupta",
          image: "/images/Divyansh.webp",
          linkedin: "https://www.linkedin.com/in/divyanshhgupta/",
          facebook: "https://www.facebook.com/profile.php?id=100087196202941"
        },
      ]
    },
    {
      id: "tech-team",
      name: "Tech Team",
      description: "Our Tech Team brings innovation and technical expertise to the club. They manage our digital infrastructure, develop tools for financial analysis, and explore applications of technology in finance and economics. The team works on creating resources that benefit all club members.",
      members: [
                {
          name: "Divyansh Gupta",
          image: "/images/Divyansh.webp",
          linkedin: "https://www.linkedin.com/in/divyanshhgupta/",
          facebook: "https://www.facebook.com/profile.php?id=100087196202941"
        },
        {
          name: "Divyansh Gupta",
          image: "/images/Divyansh.webp",
          linkedin: "https://www.linkedin.com/in/divyanshhgupta/",
          facebook: "https://www.facebook.com/profile.php?id=100087196202941"
        },
        {
          name: "Divyansh Gupta",
          image: "/images/Divyansh.webp",
          linkedin: "https://www.linkedin.com/in/divyanshhgupta/",
          facebook: "https://www.facebook.com/profile.php?id=100087196202941"
        },
      ]
    }
  ]
};

const TeamSection = () => {
  // Create refs for scrolling to each team section
  const teamRefs = useRef([]);
  const [loadedImages, setLoadedImages] = useState({});

  // Function to scroll to a team section when its button is clicked
  const scrollToTeam = (index) => {
    teamRefs.current[index].scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  // Handle image loading
  const handleImageLoad = (imagePath) => {
    setLoadedImages(prev => ({
      ...prev,
      [imagePath]: true
    }));
  };

  return (
    <section className="w-full flex flex-col items-center justify-center max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-16 bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))]">
      {/* Introduction Section */}
      <div className="w-full bg-[var(--glass-bg)] rounded-2xl shadow-2xl p-8 md:p-12 mb-10">
        <h2 className="text-4xl font-extrabold text-cyan-300 mb-6 text-center tracking-wide drop-shadow-lg">Our Team</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-1/2">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              {!loadedImages[teamData.groupPhoto] && (
                <div className="absolute inset-0 bg-[#101624] animate-pulse"></div>
              )}
              <img 
                src={teamData.groupPhoto} 
                alt="Group" 
                className={`w-full h-full object-cover transition-opacity duration-500 ${loadedImages[teamData.groupPhoto] ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => handleImageLoad(teamData.groupPhoto)}
                loading="lazy"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-yellow-300 mb-4">How We Work</h3>
            <p className="text-gray-200 mb-4 leading-relaxed">
              Since 2014, our club has been serving students and society through specialized teams that focus on different aspects of finance and economics. We segment our work across multiple teams that work rigorously throughout the year.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our teams participate in various competitions globally and develop projects that benefit both our members and the wider community. Each team brings unique expertise to create a well-rounded club experience.
            </p>
          </div>
        </div>
        
        {/* Team Navigation Buttons */}
        <div className="mt-12">
          <h3 className="text-xl font-bold text-[#135561] mb-4 text-center">Our Teams</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {teamData.teams.map((team, index) => (
              <button
                key={team.id}
                onClick={() => scrollToTeam(index)}
                className="px-6 py-3 rounded-full bg-[linear-gradient(135deg,var(--background),var(--glass-bg),var(--background))] border border-[#135561]/40 text-yellow-300 font-semibold hover:scale-105 hover:shadow-md transition-all duration-300 focus:outline-none"
              >
                {team.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Team Sections */}
      {teamData.teams.map((team, index) => (
        <div 
          key={team.id}
          id={team.id}
          ref={el => (teamRefs.current[index] = el)}
          className="w-full bg-[var(--glass-bg)] rounded-2xl shadow-2xl p-8 md:p-12 mb-10 transition-all duration-500 hover:shadow-[#135561]/20 hover:shadow-2xl"
        >
          <h3 className="text-3xl font-bold text-yellow-300 mb-6 text-center">{team.name}</h3>
          
          {/* Team Description */}
          <div className="bg-[#081824]/60 rounded-lg p-6 border border-[#135561]/20 mb-10">
            <p className="text-gray-200 text-center leading-relaxed">{team.description}</p>
          </div>
          
          {/* Team Members Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.members.map((member, idx) => (
              <div
                key={idx}
                className="bg-[linear-gradient(135deg,var(--background),var(--glass-bg),var(--background))] rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105 hover:shadow-[#135561]/30 hover:shadow-xl border border-cyan-900/40"
              >
                <div className="relative w-24 h-24 mb-4">
                  {!loadedImages[member.image] && (
                    <div className="absolute inset-0 rounded-full bg-[#101624] animate-pulse"></div>
                  )}
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className={`w-full h-full rounded-full object-cover border-4 border-yellow-300 shadow-md transition-opacity duration-500 ${loadedImages[member.image] ? 'opacity-100' : 'opacity-0'}`}
                    onLoad={() => handleImageLoad(member.image)}
                    loading="lazy"
                  />
                </div>
                <div className="text-xl font-semibold mb-1 text-cyan-200 truncate">{member.name}</div>
                <div className="flex gap-2 mt-2">
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#135561] hover:text-yellow-300 transition-all duration-300">
                      <SocialIcon url={member.linkedin} target="_blank" style={{ height: 30, width: 30 }} />
                    </a>
                  )}
                  {member.facebook && (
                    <a href={member.facebook} target="_blank" rel="noopener noreferrer" className="text-[#135561] hover:text-yellow-300 transition-all duration-300">
                      <SocialIcon url={member.facebook} target="_blank" style={{ height: 30, width: 30 }} />
                    </a>
                  )}
                  {member.gmail && (
                    <a href={`mailto:${member.gmail}`} target="_blank" rel="noopener noreferrer" className="text-[#135561] hover:text-yellow-300 transition-all duration-300">
                      <SocialIcon url={`mailto:${member.gmail}`} target="_blank" style={{ height: 30, width: 30 }} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
      
      {/* Back to Top Button */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-[#135561]/30 to-[#135561]/10 border border-[#135561]/40 text-white hover:from-[#135561]/40 hover:to-[#135561]/20 transition-all duration-300 flex items-center"
      >
        <span className="mr-2">Back to Top</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
        </svg>
      </button>
  </section>
);
};

export default TeamSection; 