"use client";
import { useEffect } from "react";

const GlowCard = ({ children, identifier }) => {
  useEffect(() => {
    const CONTAINER = document.querySelector(`.glow-container-${identifier}`);
    const CARDS = document.querySelectorAll(`.glow-card-${identifier}`);

    const CONFIG = {
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
    };

    // Continuous glow engine
    let AUTO_ANGLE = 0;

    const UPDATE = (event) => {
      for (const CARD of CARDS) {
        const BOUNDS = CARD.getBoundingClientRect();

        // Always active
        CARD.style.setProperty("--active", 1);

        const CENTER_X = BOUNDS.left + BOUNDS.width / 2;
        const CENTER_Y = BOUNDS.top + BOUNDS.height / 2;

        let angle;

        if (event) {
          angle =
            (Math.atan2(event.y - CENTER_Y, event.x - CENTER_X) * 180) /
            Math.PI;
        } else {
          AUTO_ANGLE += 0.5;
          angle = AUTO_ANGLE;
        }

        angle = angle < 0 ? angle + 360 : angle;
        CARD.style.setProperty("--start", angle + 90);
      }
    };

    document.body.addEventListener("pointermove", UPDATE);

    const LOOP = () => {
      UPDATE();
      requestAnimationFrame(LOOP);
    };
    LOOP();

    const RESTYLE = () => {
      CONTAINER.style.setProperty("--gap", CONFIG.gap);
      CONTAINER.style.setProperty("--blur", CONFIG.blur);
      CONTAINER.style.setProperty("--spread", CONFIG.spread);
      CONTAINER.style.setProperty(
        "--direction",
        CONFIG.vertical ? "column" : "row"
      );
    };

    RESTYLE();

    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
    };
  }, [identifier]);

  return (
    <div className={`glow-container glow-container-${identifier}`}>
      <article
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
