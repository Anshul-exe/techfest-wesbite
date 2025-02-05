import React from 'react';

const Card = ({ imageUrl, titleUrl, characterUrl, link }) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="relative flex justify-center items-end w-80 h-[450px] mx-12 group perspective-[2500px]"
    >
      <div className="absolute inset-0 transition-transform duration-500 ease-out group-hover:-translate-y-4 group-hover:rotate-x-12 will-change-transform">
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <img 
            src={imageUrl} 
            alt="cover" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-transparent via-black/50 to-black" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-black/50 to-black opacity-100 transition-all duration-500 group-hover:h-40" />
        </div>
      </div>

      <img 
        src={titleUrl} 
        alt="title" 
        className="absolute bottom-8 w-full max-w-[80%] transition-all duration-500 group-hover:-translate-y-10 z-10"
      />

      <img 
        src={characterUrl} 
        alt="character" 
        className="absolute bottom-0 w-full max-w-[90%] opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:-translate-y-20 z-20"
      />
    </a>
  );
};

const HoverCards = () => {
  const cards = [
    {
      link: "https://www.mythrillfiction.com/the-dark-rider",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
      titleUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
      characterUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
    },
    {
      link: "https://www.mythrillfiction.com/force-mage",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      titleUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-title.png",
      characterUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
    },
    {
      link: "https://www.mythrillfiction.com/the-dark-rider",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
      titleUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
      characterUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
    },
    {
      link: "https://www.mythrillfiction.com/force-mage",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      titleUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-title.png",
      characterUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
    },
    {
      link: "https://www.mythrillfiction.com/the-dark-rider",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
      titleUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
      characterUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
    },
    {
      link: "https://www.mythrillfiction.com/force-mage",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      titleUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-title.png",
      characterUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
    },
    {
      link: "https://www.mythrillfiction.com/the-dark-rider",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
      titleUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
      characterUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
    },
    {
      link: "https://www.mythrillfiction.com/force-mage",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg",
      titleUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-title.png",
      characterUrl: "https://ggayane.github.io/css-experiments/cards/force_mage-character.webp"
    },
    {
      link: "https://www.mythrillfiction.com/the-dark-rider",
      imageUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg",
      titleUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-title.png",
      characterUrl: "https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp"
    }
  ];

  return (
    <div className="relative w-full min-h-screen bg-black/50 flex flex-col justify-center items-center p-8">
      <h1 className="font-['Doto'] text-6xl font-bold mb-16 text-white tracking-wider relative">
        Our Events
        <span className="absolute -bottom-4 left-0 w-full h-1 bg-white/20"></span>
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default HoverCards;