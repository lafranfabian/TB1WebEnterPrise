"use client";

import { cn } from "../../lib/utils.jsx";
import React, { useEffect, useState, useRef } from "react";

const getRandomStartPoint = () => {
  const side = Math.floor(Math.random() * 4);
  const offset = Math.random() * window.innerWidth;

  switch (side) {
    case 0: return { x: offset, y: 0, angle: 45 };
    case 1: return { x: window.innerWidth, y: offset, angle: 135 };
    case 2: return { x: offset, y: window.innerHeight, angle: 225 };
    case 3: return { x: 0, y: offset, angle: 315 };
    default: return { x: 0, y: 0, angle: 45 };
  }
};

const colors = ["#9E00FF", "#2EB9DF", "#FF7F50", "#00FF7F", "#FFD700"];

export const ShootingStars = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 120,
  maxDelay = 4200,
  starWidth = 10,
  starHeight = 1,
  className,
}) => {
  const [stars, setStars] = useState([]);
  const [backgroundStars, setBackgroundStars] = useState([]);
  const [comets, setComets] = useState([]);
  const svgRef = useRef(null);

  useEffect(() => {
    // Background faint stars
    const bgStars = Array.from({ length: 200 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      opacity: Math.random() * 0.5,
      radius: Math.random() * 1.5,
    }));
    setBackgroundStars(bgStars);
  }, []);

  useEffect(() => {
    const createStar = () => {
      const groupSize = Math.random() < 0.2 ? 3 : 1;
      const newStars = [];

      for (let i = 0; i < groupSize; i++) {
        const { x, y, angle } = getRandomStartPoint();
        newStars.push({
          id: Date.now() + i + Math.random(),
          x: x + i * 10,
          y: y + i * 10,
          angle: angle + Math.random() * 10,
          scale: 1,
          speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          distance: 0,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      setStars((prev) => [...prev, ...newStars]);

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    createStar();
  }, [minSpeed, maxSpeed, minDelay, maxDelay]);

  useEffect(() => {
    const createComet = () => {
      const { x, y, angle } = getRandomStartPoint();
      const comet = {
        id: "comet-" + Date.now(),
        x,
        y,
        angle,
        scale: 1,
        speed: 5 + Math.random() * 5, // slower than normal stars
        distance: 0,
      };
      setComets((prev) => [...prev, comet]);

      const randomDelay = Math.random() * 10000 + 5000; // every 5-15 seconds
      setTimeout(createComet, randomDelay);
    };

    createComet();
  }, []);

  useEffect(() => {
    const moveObjects = () => {
      // Move normal stars
      setStars((prevStars) =>
        prevStars
          .map((star) => {
            const newX = star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY = star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;
            const newScale = 1 + newDistance / 100;
            if (
              newX < -100 || newX > window.innerWidth + 100 ||
              newY < -100 || newY > window.innerHeight + 100
            ) {
              return null;
            }
            return { ...star, x: newX, y: newY, distance: newDistance, scale: newScale };
          })
          .filter(Boolean)
      );

      // Move comets
      setComets((prevComets) =>
        prevComets
          .map((comet) => {
            const newX = comet.x + comet.speed * Math.cos((comet.angle * Math.PI) / 180);
            const newY = comet.y + comet.speed * Math.sin((comet.angle * Math.PI) / 180);
            const newDistance = comet.distance + comet.speed;
            const newScale = 1 + newDistance / 300; // comets grow slower
            if (
              newX < -300 || newX > window.innerWidth + 300 ||
              newY < -300 || newY > window.innerHeight + 300
            ) {
              return null;
            }
            return { ...comet, x: newX, y: newY, distance: newDistance, scale: newScale };
          })
          .filter(Boolean)
      );

      requestAnimationFrame(moveObjects);
    };

    moveObjects();
  }, []);

  return (
    <svg ref={svgRef} className={cn("w-full h-full absolute inset-0", className)}>
      <defs>
        <linearGradient id="star-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#ffffff", stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
        </linearGradient>
        <linearGradient id="comet-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: "white", stopOpacity: 0.8 }} />
          <stop offset="100%" style={{ stopColor: "white", stopOpacity: 0 }} />
        </linearGradient>
      </defs>

      {/* Static background stars */}
      {backgroundStars.map((bgStar, idx) => (
        <circle
          key={`bg-${idx}`}
          cx={bgStar.x}
          cy={bgStar.y}
          r={bgStar.radius}
          fill="white"
          opacity={bgStar.opacity}
        />
      ))}

      {/* Moving colorful shooting stars */}
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill={star.color}
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      ))}

      {/* Moving bright comets */}
      {comets.map((comet) => (
        <rect
          key={comet.id}
          x={comet.x}
          y={comet.y}
          width={60 * comet.scale}
          height={2}
          fill="url(#comet-gradient)"
          transform={`rotate(${comet.angle}, ${
            comet.x + (60 * comet.scale) / 2
          }, ${comet.y + 1})`}
        />
      ))}
    </svg>
  );
};
