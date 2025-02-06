import React, { useState } from 'react';
import { X } from 'lucide-react';

const EventModal = ({ isOpen, onClose, eventDetails }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50 animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-4xl bg-gradient-to-br from-gray-900 to-gray-800 rounded-lg shadow-2xl overflow-hidden animate-slideUp"
        onClick={e => e.stopPropagation()}
      >
        {/* Header with close button */}
        <div className="relative h-64 sm:h-72 md:h-96">
          <img 
            src={eventDetails.imageUrl} 
            alt="event cover" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-300 hover:rotate-90 transform"
          >
            <X className="w-6 h-6 md:w-8 md:h-8 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8 space-y-4 md:space-y-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-wide">
            {eventDetails.title}
          </h2>
          
          <div className="space-y-2 md:space-y-3">
            <div className="flex items-center space-x-2 md:space-x-3">
              <span className="text-red-500 text-base md:text-xl">Date:</span>
              <span className="text-gray-300 text-base md:text-xl">{eventDetails.date}</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3">
              <span className="text-red-500 text-base md:text-xl">Time:</span>
              <span className="text-gray-300 text-base md:text-xl">{eventDetails.time}</span>
            </div>
            <div className="flex items-center space-x-2 md:space-x-3">
              <span className="text-red-500 text-base md:text-xl">Location:</span>
              <span className="text-gray-300 text-base md:text-xl">{eventDetails.location}</span>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed text-sm md:text-lg">
            {eventDetails.description}
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 md:pt-6 space-y-4 sm:space-y-0">
            <div className="text-gray-400 text-base md:text-lg">
              <span className="text-red-500">Spots Available:</span> {eventDetails.spotsAvailable}
            </div>
            <button
              onClick={() => console.log('Register clicked')}
              className="w-full sm:w-auto px-6 md:px-8 py-2 md:py-3 bg-red-600 hover:bg-red-700 text-white text-base md:text-lg font-semibold rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/50"
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = ({ imageUrl, titleUrl, characterUrl, link, eventDetails }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      <a 
        onClick={(e) => {
          e.preventDefault();
          setIsModalOpen(true);
        }}
        href={link} 
        className={`relative flex justify-center items-end w-full sm:w-[340px] md:w-[384px] h-[500px] md:h-[600px] mx-4 sm:mx-8 md:mx-16 group perspective-[2500px] cursor-pointer transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        onLoad={() => setIsLoaded(true)}
      >
        <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:-translate-y-4 group-hover:rotate-x-12 will-change-transform">
          <div className="absolute inset-0 overflow-hidden rounded-xl shadow-2xl">
            <img 
              src={imageUrl} 
              alt="cover" 
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-transparent via-black/50 to-black" />
            <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent via-black/50 to-black opacity-100 transition-all duration-500 group-hover:h-48" />
          </div>
        </div>

        <img 
          src={titleUrl} 
          alt="title" 
          className="absolute bottom-12 w-full max-w-[85%] transition-all duration-500 group-hover:-translate-y-12 group-hover:scale-110 z-10"
        />

        <img 
          src={characterUrl} 
          alt="character" 
          className="absolute -bottom-4 w-full max-w-[95%] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-24 group-hover:scale-105 z-20"
        />
      </a>

      <EventModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        eventDetails={eventDetails}
      />
    </>
  );
};

const HoverCards = () => {
  const cards = [
    {
      link: "https://www.mythrillfiction.com/the-dark-rider",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
      titleUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
      characterUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp",
      eventDetails: {
        title: "Marvel Heroes Assemble",
        date: "March 15, 2025",
        time: "6:00 PM EST",
        location: "Stark Tower, New York",
        description: "Join Earth's mightiest heroes for an evening of unprecedented entertainment and heroic displays. Experience the power of the Avengers up close and personal in this once-in-a-lifetime event.",
        spotsAvailable: "150",
        imageUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
      }
    },{
      link: "https://www.mythrillfiction.com/force-mage",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      titleUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-title.png",
      characterUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp",
      eventDetails: {
        title: "Marvel Heroes Assemble",
        date: "March 15, 2025",
        time: "6:00 PM EST",
        location: "Stark Tower, New York",
        description: "Join Earth's mightiest heroes for an evening of unprecedented entertainment and heroic displays. Experience the power of the Avengers up close and personal in this once-in-a-lifetime event.",
        spotsAvailable: "150",
        imageUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
    },
  },
    {
      link: "https://www.mythrillfiction.com/the-dark-rider",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
      titleUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
      characterUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp",
      eventDetails: {
        title: "Marvel Heroes Assemble",
        date: "March 15, 2025",
        time: "6:00 PM EST",
        location: "Stark Tower, New York",
        description: "Join Earth's mightiest heroes for an evening of unprecedented entertainment and heroic displays. Experience the power of the Avengers up close and personal in this once-in-a-lifetime event.",
        spotsAvailable: "150",
        imageUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
      }
    },{
      link: "https://www.mythrillfiction.com/force-mage",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      titleUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-title.png",
      characterUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp",
      eventDetails: {
        title: "Marvel Heroes Assemble",
        date: "March 15, 2025",
        time: "6:00 PM EST",
        location: "Stark Tower, New York",
        description: "Join Earth's mightiest heroes for an evening of unprecedented entertainment and heroic displays. Experience the power of the Avengers up close and personal in this once-in-a-lifetime event.",
        spotsAvailable: "150",
        imageUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
    },
  }, {
    link: "https://www.mythrillfiction.com/the-dark-rider",
    imageUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
    titleUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
    characterUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp",
    eventDetails: {
      title: "Marvel Heroes Assemble",
      date: "March 15, 2025",
      time: "6:00 PM EST",
      location: "Stark Tower, New York",
      description: "Join Earth's mightiest heroes for an evening of unprecedented entertainment and heroic displays. Experience the power of the Avengers up close and personal in this once-in-a-lifetime event.",
      spotsAvailable: "150",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg"
    }
  },{
    link: "https://www.mythrillfiction.com/force-mage",
    imageUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
    titleUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-title.png",
    characterUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp",
    eventDetails: {
      title: "Marvel Heroes Assemble",
      date: "March 15, 2025",
      time: "6:00 PM EST",
      location: "Stark Tower, New York",
      description: "Join Earth's mightiest heroes for an evening of unprecedented entertainment and heroic displays. Experience the power of the Avengers up close and personal in this once-in-a-lifetime event.",
      spotsAvailable: "150",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg"
  },
}
    // ... rest of the cards
  ];

  return (
    <div className="relative w-full min-h-screen bg-black/50 flex flex-col justify-center items-center p-4 sm:p-6 md:p-8">
      <h1 className="font-['Doto'] text-4xl sm:text-5xl md:text-7xl font-bold mb-12 md:mb-20 text-white tracking-wider relative text-center">
        Our Events
        <span className="absolute -bottom-4 left-0 w-full h-1 bg-white/20"></span>
      </h1>
      <div className="flex flex-wrap justify-center gap-8 md:gap-12">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

// Add these base styles to your CSS
const style = `
@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.animate-slideUp {
  animation: slideUp 0.5s ease-out forwards;
}

.animate-fadeIn {
  animation: fadeIn 0.3s ease-out forwards;
}
`;

export default HoverCards;