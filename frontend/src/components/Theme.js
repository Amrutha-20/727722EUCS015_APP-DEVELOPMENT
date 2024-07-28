import React, { useState } from 'react';
import Footer from './Footer';
import './Theme.css';
import Navbar from './Navbar';

const themes = [
  {
    name: "Alice-Wonderland",
    title: "Alice in Wonderland Party Theme",
    description: `Transform your venue into the quirky quarters of the Mad Hatter from the Alice in Wonderland theme party and host an eccentric party modeled after the teatime soiree from Lewis Carroll’s classic childhood tale. Guests could opt to come in costume and will be in awe as they enter the event through the rabbit hole and once inside are greeted by a colorful site of off-beat décor with oversize tea cups, colorful mushrooms, a Grand Top Hat and characters that bring your space to life along with dramatic accents and vivid LED lighting! Add to this scrumptious funky foods, and fun libations along with just the right touch of entertainment and music and one enchanted evening is about to begin. Use our party designers and décor elements to have an event to remember!`,
    images: [
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-10-1-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-2-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-9-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-4.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-7-400x516.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-6.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-1.jpg",
      "https://themers.com/wp-content/uploads/2019/01/Alice-in-Wonderland-11.jpg",
    ],
  },
  {
    name: "Arabian-Egyptian",
    title: "Arabian-Egyptian Party Theme",
    description: `Arabian Nights-We can decorate your chosen venue, whether it is your home, office or special venue we can turn it into the perfect Arabian Nights party or Bollywood party using the highest quality Moroccan décor and drapings. Our unique authentic Moroccan style will let you and your guest really believe they are in a luxury Bedouin tent. We like to get the details and customize the Arabian style décor to your vision from pyramids to Anubis and more!`,
    images: [
      "/path-to-image/egypt1.jpg",
      "/path-to-image/egypt2.jpg",
      "/path-to-image/egypt3.jpg",
      "/path-to-image/egypt4.jpg",
      "/path-to-image/egypt5.jpg",
      "/path-to-image/egypt6.jpg",
      "/path-to-image/egypt7.jpg",
      "/path-to-image/egypt8.jpg",
    ],
  },
  {
    name: "Beach-Nautical",
    title: "Beach/Nautical Party Theme",
    description: `NAUTICAL– Enter through an over-sized life ring to find a 3-dimensional backdrop of a cruise ship, over-sized anchors, buoys, life rings hanging through-out the venue and nothing is better then a fun photo booth opportunity for your guest of a cruise ship adventure. Your tables are adorned with nautical blue and gold with small lanterns and buffets with lobster nets, traps and colorful fish. Your guests will just be wondering if we are there yet?
    BEACH—As guests arrive they enter on a dock into the venue. Once inside they will be awe struck by the over-sized, 12ft. Lifeguard stands, surfboards, beach blankets, umbrellas hanging down through-out and backdrop of the crashing sea shore and sandy beach. You can almost hear the waves over the island drums!`,
    images: [
      "/path-to-image/beach1.jpg",
      "/path-to-image/beach2.jpg",
      "/path-to-image/beach3.jpg",
      "/path-to-image/beach4.jpg",
      "/path-to-image/beach5.jpg",
      "/path-to-image/beach6.jpg",
      "/path-to-image/beach7.jpg",
      "/path-to-image/beach8.jpg",
    ],
  },
  {
    name: "Casino-Night",
    title: "Casino Night Party Theme",
    description: `A terrific time for all, whether it is corporate or social is the Casino Night Party! Themers can book your Casino Night Party with gaming tables, gaming pieces and dealers for a fun and exciting night! What could be more fun than being the “big spender”? Learning to play Craps, Roulette or even Poker! You can plan on 3/4 of your guests playing, but at a Casino Night Party, nearly all guests will play at one point in the night – it is just that exciting! You can add slot machines to your evening for the guests that like to try their luck on the sly! Blackjack is one of the more popular games and is fast moving. Our dealers are there to teach and play at any pace, so no matter what your guest’s level of expertise, they will feel welcome and have a roaring good time at a Casino Night Party! Now that the Holiday season is officially setting in, weekends are booking up, so please contact Themers, soon to get your special event booked! Don’t forget to add the decor, such as over sized dice, red carpet runners, showgirls, 5ft. tall stacks of poker chips! Or, maybe a theme for the Casino Night Party: Western, Las Vegas, Tropical, Holiday, Monte Carlo and more!`,
    images: [
      "/path-to-image/casino1.jpg",
      "/path-to-image/casino2.jpg",
      "/path-to-image/casino3.jpg",
      "/path-to-image/casino4.jpg",
      "/path-to-image/casino5.jpg",
      "/path-to-image/casino6.jpg",
      "/path-to-image/casino7.jpg",
      "/path-to-image/casino8.jpg",
    ],
  },
  {
    name: "Circus",
    title: "Circus Party Theme Rentals",
    description: `Lions, Tigers, and Bears, OH MY! Guests will be reeling from the excitement at this amazing circus theme party rentals. After walking through the red and white tent entrance, guests will marvel at the faux animals inside the large circus cages. The area will be decked out in red, white, blue, and yellow; creating an amazing circus event. Circus ticket booth buffets, firing cannons and a circus ring around the perimeter of the room will complete the circus atmosphere. So grab your popcorn and off we go to the circus.`,
    images: [
      "/path-to-image/circus1.jpg",
      "/path-to-image/circus2.jpg",
      "/path-to-image/circus3.jpg",
      "/path-to-image/circus4.jpg",
      "/path-to-image/circus5.jpg",
      "/path-to-image/circus6.jpg",
      "/path-to-image/circus7.jpg",
      "/path-to-image/circus8.jpg",
    ],
  },
  {
    name: "Elegant",
    title: "Elegant Party Theme",
    description: `Elegance, opulence and sophistication. From subtle lighting, ceiling drapings, wall accents, centerpieces to chiavari chairs and custom table designs, we will transform your ballroom, backyard or venue into a night to remember.`,
    images: [
      "/path-to-image/elegant1.jpg",
      "/path-to-image/elegant2.jpg",
      "/path-to-image/elegant3.jpg",
      "/path-to-image/elegant4.jpg",
      "/path-to-image/elegant5.jpg",
      "/path-to-image/elegant6.jpg",
      "/path-to-image/elegant7.jpg",
      "/path-to-image/elegant8.jpg",
    ],
  },
];

const Theme = () => {
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  return (
    <div>
      <Navbar />
      <header className="header">
        <p>Check out Different Themes We Offer!</p>
        <h2>Our clients demand perfection and we deliver just that. At PartyDelight, we are experienced, professional and precise. We listen to your goals and construct a plan starting with the end in mind and following your vision to help you bring your dream of the perfect event to life.</h2>
      </header>
      <section>
        <div className="theme-list">
          <ul>
            {themes.map((theme, index) => (
              <li key={index} onClick={() => setSelectedTheme(theme)}>{theme.name}</li>
            ))}
          </ul>
        </div>
        <div className="theme-detail">
          <div className="theme-description">
            <h2>{selectedTheme.title}</h2>
            <p>{selectedTheme.description}</p>
          </div>
          <div className="additional-images">
            {selectedTheme.images.map((src, index) => (
              <img key={index} src={src} alt={`Additional image ${index + 1}`} />
            ))}
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Theme;
