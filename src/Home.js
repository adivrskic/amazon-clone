import React from "react";

import "./Home.css";

import Product from "./Product";

import banner from "./images/banner.jpg";
import theLeanStartup from "./images/products/the-lean-startup.jpg";
import panOrganizer from "./images/products/pan-organizer.jpg";
import batteryCharger from "./images/products/battery-charger.jpg";
import dbz from "./images/products/dbz.jpg";
import memoryCard from "./images/products/memory-card.jpg";
import tv from "./images/products/tv.jpg";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={banner} alt="Home Banner" className="home__image" />

        <div className="home__row">
          <Product
            key="3"
            title="GOOLOO 6V/12V Smart Battery Charger and Maintainer 6-Amp Full Automatic"
            price={24.49}
            image={batteryCharger}
            rating={4}
          />
          <Product
            key="4"
            title="Dragon Ball Z: Infinite World - PlayStation 2"
            price={59.95}
            image={dbz}
            rating={5}
          />
          <Product
            key="5"
            title="Suncala 128MB Memory Card for Playstation 2, High Speed Memory Card for Sony PS2"
            price={6.99}
            image={memoryCard}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            key="6"
            title="SAMSUNG 65-inch Class Curved UHD TU-8300 Series - 4K UHD HDR Smart TV With Alexa Built-in"
            price={677.99}
            image={tv}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            key="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
            price={14.79}
            image={theLeanStartup}
            rating={4}
          />
          <Product
            key="2"
            title="Heavy Duty Pan Organizer, Extra Large 5 Tier Rack - Holds Cast Iron Skillets, Dutch Oven, Griddles - Durable Steel Construction - Space Saving Kitchen Storage - No Assembly Required - Black 15.4-inch"
            price={22.39}
            image={panOrganizer}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
