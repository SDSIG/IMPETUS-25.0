import { useState, useRef } from "react";
import Button from "./Button";
import EventsLanding from "./EventsLanding";
import Section from "./Section"
import Header from "./Header"

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const flagshipEventsRef = useRef(null);

  const flagshipEvents = [
    { name: "CodeStorm", description: "CODESTORM is a dynamic coding competition designed to test problem-solving skills and drive technological excellence. Featuring diverse challenges that gauge proficiency, participants embark on an exciting journey of innovation and skill refinement. Be part of the experience—unleash your coding prowess and shape the future of tech!" },
    { name: "Mock Placements", description: "Mock placements give students a realistic simulation of actual placement drives, offering hands-on experience and valuable feedback to refine their interview skills." },
    { name: "Silic-o-Hack", description: "Silic-O-Hack is a simulated hardware hackathon with two rounds utilizing mimetic software, challenging participants to tackle a real-world problem on TinkerCAD within a specified timeframe, employing creative solutions." },
    { name: "Hack-a-Maze", description: "Dive into Hack-A-Maze, an exciting challenge where you design an autonomous bot to navigate complex mazes independently. The fastest bot to reach the exit wins—test your skills and push the limits of automation!" },
    { name: "Summit", description: "Summit is a dynamic and formal student parliament where participants harness creativity to develop optimal solutions for humanitarian challenges. Carefully structured, this event tackles critical global issues while driving strategic progress." },
    { name: "Civicture", description: "Civicture is a dynamic platform where creativity meets precision in urban planning and design. CIVICTURE kicks off with a thrilling design competition, showcasing participants' innovative ideas, further on the stakes rise as contestants compete in a plan drawing competition, bringing their visions to life with meticulous detail. Join us in shaping the future of urban landscapes!" },
    { name: "Brand IT", description: "Welcome to Brand It—where innovation meets strategy! Teams will build a brand from the ground up, designing logos, color schemes, product visuals, and packaging. Earn bonus points for compelling promotional materials in this multi-day showdown of creativity and competition. Get ready to brand like a pro!" },
    { name: "Mechronins", description: "This engaging three-part event features a mix of mechanical-related questions and presentations, making for a fun and interactive experience. Tighten your brain bolts and gear up for an exciting challenge!"},
    { name: "AvionX", description: "Gear up for an electrifying aerospace challenge that tests both creativity and technical expertise! The event begins with an engaging and interactive round filled with fun problem-solving elements. But the real test awaits in the next stage, where participants will take on a hands-on engineering challenge tailored to their domain. Working together, different disciplines will contribute their expertise to create a unified aerospace solution, making this a truly multidisciplinary and immersive experience!" },
    { name: "Laser Tag", description: "Laser Tag is a high-energy event featuring advanced infrared guns and sensor vests. Players navigate a dynamic arena, strategically tagging opponents to score points electronically. With speed, precision, and tactical skill as the keys to victory, get ready for an adrenaline-fueled showdown!" },
  ];

  // General Events
  const generalEvents = [
    { name: "Brain Bids 2.0", description: "An auction-based strategy game..." },
    { name: "Escape Room: UVCE Edition", description: "Solve puzzles to escape..." },
    { name: "IPL Auction", description: "Cricket auction simulation..." },
    { name: "Synthetic Intelligence", description: "AI-driven problem-solving..." },
    { name: "Tantragyan Tarka", description: "Tech-based quiz & discussion..." },
    { name: "The Time Traveler's Code", description: "Solve coding puzzles across time periods..." },
    { name: "Think Tank", description: "A brainstorming and ideation challenge..." },
  ];

  // Gaming Events
  const gamingEvents = [
    { name: "BGMI Tournament", description: "Battle Royale gaming tournament..." },
    { name: "Chess Mania", description: "Competitive chess tournament..." },
    { name: "Valorant", description: "5v5 tactical shooter tournament..." },
  ];

  // Open the modal with the selected event
  const openModal = (event) => {
    setSelectedEvent(event);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEvent(null);
  };

  return (
    <Section>
    <Header/>
    <EventsLanding flagshipEventsRef={flagshipEventsRef}/>
    <div className="min-h-screen text-white px-5 py-10">
  <div className={`max-w-7xl mx-auto ${isModalOpen ? "pointer-events-none" : ""}`}>

        {/* Flagship Events */}
        <section ref={flagshipEventsRef} id="flagship-events">
          <h1 className="text-4xl font-bold mb-6 text-center">Flagship Events</h1><br/><br/>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {flagshipEvents.map((event, index) => (
              <div key={index} className="bg-n-6 p-5 rounded-xl shadow-lg flex flex-col">
                <div className="h-48 bg-n-4 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-lg">Image Placeholder</span>
                </div>
                <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-2">
                  <Button onClick={() => openModal(event)} className="w-full text-black py-2 px-4 rounded-lg font-bold transition">
                    View
                  </Button>
                  <Button className="w-full text-black py-2 px-4 rounded-lg font-bold transition">
                    Register
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section><br/><br/>

        {/* General Events */}
        <section className="mt-16">
          <h1 className="text-4xl font-bold mb-6 text-center">General Events</h1><br/><br/>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {generalEvents.map((event, index) => (
              <div key={index} className="bg-n-6 p-5 rounded-xl shadow-lg flex flex-col">
                <div className="h-48 bg-n-4 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-lg">Image Placeholder</span>
                </div>
                <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-2">
                  <Button onClick={() => openModal(event)} className="w-full text-black py-2 px-4 rounded-lg font-bold transition">
                    View
                  </Button>
                  <Button className="w-full text-black py-2 px-4 rounded-lg font-bold transition">
                    Register
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section><br/><br/>

        {/* Gaming Events */}
        <section className="mt-16">
          <h1 className="text-4xl font-bold mb-6 text-center">Gaming Events</h1><br/><br/>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gamingEvents.map((event, index) => (
              <div key={index} className="bg-n-6 p-5 rounded-xl shadow-lg flex flex-col">
                <div className="h-48 bg-n-4 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-lg">Image Placeholder</span>
                </div>
                <h2 className="text-2xl font-semibold mb-2">{event.name}</h2>

                {/* Buttons */}
                <div className="mt-auto flex flex-col gap-2">
                  <Button onClick={() => openModal(event)} className="w-full text-black py-2 px-4 rounded-lg font-bold transition">
                    View
                  </Button>
                  <Button className="w-full text-black py-2 px-4 rounded-lg font-bold transition">
                    Register
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

     {/* Modal Popup */}
{isModalOpen && selectedEvent && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-5 z-50">
    <div className="bg-[#0c0215] text-white p-6 rounded-lg w-full max-w-lg shadow-lg relative">
      <h2 className="text-white text-3xl font-bold mb-3">{selectedEvent.name}</h2>
      <p className="text-white">{selectedEvent.description}</p>
      <div className="mt-4 flex justify-end">
        <Button onClick={closeModal} className="text-black py-2 px-4 rounded-lg font-bold transition">
          Close
        </Button>
      </div>
    </div>
  </div>
)}

    </div>
    </Section>
  );
}
