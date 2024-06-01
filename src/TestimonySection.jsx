import React, { useState } from "react";
import "./Testimony.css";
import { GrFormNextLink, GrLinkPrevious } from "react-icons/gr";

const testimonies = [
  {
    text: "Joining Ikibeho, was the best decision I ever made. The photography training not only gave me a skill but also a sense of purpose. I never imagined that I could turn my passion into a career. The internship they provided helped me gain real-world experience, and now I have started my own small photography business. I am forever grateful for the support and guidance I received.",
    age: 18,
    program: "Photography",
    name: "Janine Dushimana",
  },
  {
    text: "Before I found Ikibeho Foundation, I felt lost and overwhelmed. The videography program changed everything for me. I learned so much and got to work on real projects during my internship. The staff were incredibly supportive and always there to help. Now, I’m working with a local media company, and I feel like I have a bright future ahead.",
    age: 17,
    program: "Videography",
    name: "Yvette Icyimpaye",
  },
  {
    text: "As a young mother, I never thought I could have a career in tourism. The training I received from Ikibeho was thorough and inspiring. The internship at a local tour company gave me hands-on experience, and I’ve recently been offered a permanent position. This opportunity has given me hope and confidence in my abilities.",
    age: 20,
    program: "Tourism",
    name: "Aline Nkurunziza",
  },
];

const TestimonySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length
    );
  };

  const { text, age, program, name } = testimonies[currentIndex];

  return (
    <div className="home_testimonies">
      <h2>Testimonies</h2>
      <p>
        At Ikibeho Digital Foundation, the impact of our work is best told
        through the voices of the young mothers we support. Here are some of
        their stories:
      </p>
      <div className="testimony">
        <p>{text}</p>
        <ul>
          <li>
            <strong>Age: </strong>
            {age}
          </li>
          <li>
            <strong>Program: </strong>
            {program}
          </li>
          <li>
            <strong>Name: </strong>
            {name}
          </li>
        </ul>
        <div className="navigation">
          <button onClick={handlePrev}>
            <GrLinkPrevious />
          </button>
          <button onClick={handleNext}>
            <GrFormNextLink />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonySection;
