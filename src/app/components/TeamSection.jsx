"use client";
import React from "react";
import { SocialIcon } from "react-social-icons";

const teamData = {
  groupPhoto: "/teams.png",
  teams: [
    {
      name: "Finance Team",
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
        // ... (add all other members as in your data)
      ]
    },
    {
      name: "Branding and Strategy Team",
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
        // ... (add all other members as in your data)
      ]
    },
    {
      name: "Tech Team",
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
        // ... (add all other members as in your data)
      ]
    }
  ]
};

const TeamSection = () => (
  <section className="w-full flex flex-col items-center justify-center max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-16 bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))]">
    <div className="w-full bg-[var(--glass-bg)] rounded-2xl shadow-2xl p-8 md:p-12">
      <h2 className="text-4xl font-extrabold text-cyan-300 mb-10 text-center tracking-wide drop-shadow-lg">Our Team</h2>
      <div className="flex justify-center mb-8">
        <img src="/teams.png" alt="Group" className="w-full max-w-2xl rounded-xl shadow-lg border-4 border-yellow-300" />
      </div>
      {teamData.teams.map((team, index) => (
        <div key={index} className="mb-10">
          <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">{team.name}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {team.members.map((member, idx) => (
              <div
                key={idx}
                className="bg-[linear-gradient(135deg,var(--background),var(--glass-bg),var(--background))] rounded-xl shadow-lg p-6 flex flex-col items-center transition-transform duration-200 hover:scale-105 hover:shadow-2xl border border-cyan-900"
              >
                <img src={member.image} alt={member.name} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-yellow-300 shadow-md" />
                <div className="text-xl font-semibold mb-1 text-cyan-200">{member.name}</div>
                <div className="flex gap-2 mt-2">
                  {member.linkedin && <SocialIcon url={member.linkedin} target="_blank" style={{ height: 30, width: 30 }} />}
                  {member.facebook && <SocialIcon url={member.facebook} target="_blank" style={{ height: 30, width: 30 }} />}
                  {member.gmail && <SocialIcon url={`mailto:${member.gmail}`} target="_blank" style={{ height: 30, width: 30 }} />}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamSection; 