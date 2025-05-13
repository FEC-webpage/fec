"use client";
import React, { useState, useEffect } from 'react';
import { CalendarIcon, MapPinIcon, ClockIcon, UserGroupIcon } from '@heroicons/react/24/outline';

const upcomingEvents = [
  {
    id: 1,
    title: "StockSurge Competition 2023",
    date: "December 15, 2023",
    time: "10:00 AM - 4:00 PM",
    location: "Virtual Event",
    description: "Our flagship stock market simulation competition with prizes worth ₹50,000 for winners. Test your trading strategies in a real-time market environment.",
    image: "/images/stocksurge.jpg", // Replace with actual image path
    registrationLink: "/register/stocksurge",
    featured: true,
    attendees: 120
  },
  {
    id: 2,
    title: "Finance Industry Panel Discussion",
    date: "January 10, 2024",
    time: "6:00 PM - 8:00 PM",
    location: "Main Auditorium, IIT Kharagpur",
    description: "Join industry experts from top financial institutions as they discuss career opportunities and emerging trends in finance.",
    image: "/images/panel.jpg", // Replace with actual image path
    registrationLink: "/register/panel-discussion",
    featured: false,
    attendees: 85
  },
  {
    id: 3,
    title: "Blockchain & Crypto Workshop",
    date: "January 25, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Virtual Event",
    description: "Learn the fundamentals of blockchain technology and cryptocurrency trading in this hands-on workshop led by industry professionals.",
    image: "/images/blockchain.jpg", // Replace with actual image path
    registrationLink: "/register/blockchain-workshop",
    featured: false,
    attendees: 60
  }
];

const UpcomingEventsSection = () => {
  // Find the featured event
  const featuredEvent = upcomingEvents.find(event => event.featured);
  // Get the rest of the events
  const otherEvents = upcomingEvents.filter(event => !event.featured);
  
  // Animation states
  const [animate, setAnimate] = useState(false);
  
  // Trigger animations after component mounts
  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="w-full px-4 py-16 flex flex-col items-center justify-center bg-[linear-gradient(135deg,var(--background),var(--primary-blue),var(--background))]">
      {/* Section Header with Animation */}
      <div className={`mb-10 transform transition-all duration-1000 ${animate ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h3 className="text-2xl font-bold text-yellow-300 text-center mb-2 relative inline-block">
          <span className="relative z-10">What's Coming Next</span>
          <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#08a6c2]/0 via-[#08a6c2] to-[#08a6c2]/0 transform scale-x-100"></span>
        </h3>
        <p className="text-gray-300 text-center max-w-2xl mx-auto">
          Stay updated with our latest events and mark your calendar to not miss any opportunity
        </p>
      </div>

      {/* Featured Event - Modern Card Design */}
      {featuredEvent && (
        <div className={`mb-16 rounded-2xl overflow-hidden transition-all duration-1000 ease-out ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <div className="relative grid grid-cols-1 md:grid-cols-2 bg-gradient-to-br from-[#081824] via-[#0a1f2f] to-[#081824] shadow-[0_8px_30px_rgb(0,0,0,0.3)] border border-[#08a6c2]/20">
            
            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#08a6c2] to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-[#08a6c2] via-transparent to-[#08a6c2]"></div>
            <div className="absolute top-0 right-0 w-36 h-36 bg-[#08a6c2]/10 rounded-full blur-3xl -z-0"></div>
            <div className="absolute bottom-0 left-0 w-36 h-36 bg-yellow-500/5 rounded-full blur-3xl -z-0"></div>
            
            {/* Image Area */}
            <div className="relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/60 to-transparent z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
              
              <div className="absolute top-4 left-4 z-20 px-4 py-1.5 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-400 shadow-lg">
                <span className="text-[#0a1020] font-bold text-sm tracking-wide flex items-center">
                  <span className="mr-1.5 text-xs">⭐</span> Featured Event
                </span>
              </div>
              
              <img 
                src={featuredEvent.image || "https://via.placeholder.com/600x400?text=Event+Image"} 
                alt={featuredEvent.title} 
                className="w-full h-full object-cover min-h-[300px] md:min-h-[400px] transform transition duration-700 hover:scale-110"
              />
            </div>
            
            {/* Content Area */}
            <div className="p-8 flex flex-col justify-between relative z-10">
              <div className="space-y-4">
                <h4 className="text-3xl font-bold text-[#08a6c2] mb-4">{featuredEvent.title}</h4>
                
                <div className="flex items-center mb-1.5 text-gray-300">
                  <CalendarIcon className="h-5 w-5 mr-3 text-yellow-300" />
                  <span className="text-lg">{featuredEvent.date}</span>
                </div>
                
                <div className="flex items-center mb-1.5 text-gray-300">
                  <ClockIcon className="h-5 w-5 mr-3 text-yellow-300" />
                  <span className="text-lg">{featuredEvent.time}</span>
                </div>
                
                <div className="flex items-center mb-4 text-gray-300">
                  <MapPinIcon className="h-5 w-5 mr-3 text-yellow-300" />
                  <span className="text-lg">{featuredEvent.location}</span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {featuredEvent.description}
                </p>
                
                <div className="flex items-center text-cyan-400/70">
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  <span className="font-medium">{featuredEvent.attendees} people interested</span>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href={featuredEvent.registrationLink} 
                  className="inline-block px-8 py-3.5 bg-gradient-to-r from-[#08a6c2] to-[#0a7d9b] text-white font-semibold rounded-lg shadow-lg hover:shadow-[#08a6c2]/20 hover:shadow-xl hover:translate-y-[-2px] active:translate-y-[1px] transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center tracking-wide">
                    Register Now
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-400/0 w-full transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Other Events Grid - Enhanced Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {otherEvents.map((event, index) => (
          <div 
            key={event.id} 
            className={`bg-gradient-to-br from-[#081824] to-[#0a1f2f] rounded-xl overflow-hidden shadow-lg border border-[#08a6c2]/20 hover:shadow-[#08a6c2]/30 hover:shadow-xl transition-all duration-500 hover:translate-y-[-5px] transform ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            style={{ transitionDelay: `${(index + 1) * 150}ms` }}
          >
            <div className="relative overflow-hidden group">
              <img 
                src={event.image || "https://via.placeholder.com/400x200?text=Event+Image"} 
                alt={event.title} 
                className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#081824] via-transparent to-transparent"></div>
            </div>
            
            <div className="p-6 relative">
              {/* Card glow effect */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--glass-bg)] rounded-full blur-xl -z-0"></div>
              
              <h4 className="text-xl font-bold text-yellow-300 mb-3 relative z-10">{event.title}</h4>
              
              <div className="flex items-center mb-2.5 text-gray-300 text-sm">
                <CalendarIcon className="h-4 w-4 mr-2.5 text-[#08a6c2]" />
                <span>{event.date}</span>
              </div>
              
              <div className="flex items-center mb-2.5 text-gray-300 text-sm">
                <ClockIcon className="h-4 w-4 mr-2.5 text-[#08a6c2]" />
                <span>{event.time}</span>
              </div>
              
              <div className="flex items-center mb-4 text-gray-300 text-sm">
                <MapPinIcon className="h-4 w-4 mr-2.5 text-[#08a6c2]" />
                <span>{event.location}</span>
              </div>
              
              <p className="text-gray-400 text-sm mb-5 line-clamp-3">
                {event.description}
              </p>
              
              <div className="flex justify-between items-center">
                <div className="flex items-center text-xs text-cyan-400/60">
                  <UserGroupIcon className="h-3.5 w-3.5 mr-1.5" />
                  <span>{event.attendees} interested</span>
                </div>
                
                <a 
                  href={event.registrationLink} 
                  className="px-5 py-2 bg-[#081824] text-[#08a6c2] border border-[#08a6c2]/50 rounded-lg hover:bg-[#08a6c2]/10 transition-all duration-300 hover:translate-y-[-2px] active:translate-y-[1px] shadow-md hover:shadow-lg"
                >
                  Register
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* See All Events Button - Enhanced */}
      <div className={`mt-12 text-center transform transition-all duration-1000 ease-out delay-500 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <a 
          href="/events" 
          className="inline-block px-8 py-3.5 rounded-full bg-gradient-to-r from-[#081824] via-[#08a6c2]/30 to-[#081824] border border-[#08a6c2]/40 text-white hover:shadow-lg hover:shadow-[#08a6c2]/20 hover:scale-105 transition-all duration-300 group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center font-medium tracking-wide">
            View All Events
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#08a6c2]/0 via-[#08a6c2]/30 to-[#08a6c2]/0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500"></span>
        </a>
      </div>
    </section>
  );
};

export default UpcomingEventsSection; 