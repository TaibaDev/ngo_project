'use client'

import Card from "./card";
import HomeSection from "./home";
import Gallery from "./gallery";
import Testimonial from "./testimonial";
import { cardData } from "../utils/data";
import DonationCard from "./donationCard";

const HeroSection = () => {
  return (
    <div className="px-5 md:px-12 lg:px-32">
      <HomeSection />
      <div className="flex flex-row flex-wrap  gap-1 border lg:mt-28 lg:justify-center">
        {cardData.map((card, index) => (
          <Card key={index} imageUrl={index===1?"https://res.cloudinary.com/dzltzfaxy/image/upload/v1717860956/Zaheer_Welfare_Photos__page-0062_xscmut.jpg":card.imageUrl} description={card.description} count={card.count} />
        ))}
      </div>
      <DonationCard />
      <Gallery />
      <Testimonial />
    </div>
  );
};

export default HeroSection;
