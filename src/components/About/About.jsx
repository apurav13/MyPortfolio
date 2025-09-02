import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/profile2.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          {/* Greeting */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          {/* Name */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-red-500 mb-4 leading-tight">
            Apurav Swami
          </h2>
          {/* Skills Heading with Typing Effect */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-red-500 leading-tight">
            <span className="text-white">I'm a </span>
            <ReactTypingEffect
             text={[
  'Cybersecurity Enthusiast',
  'Web Developer',
  'Malware Analyst',
  'Coder',
  'Network Security Learner',
  'CTF Challenger Creator',
]}

              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-red-500">{cursor}</span>
              )}
            />
          </h3>
          {/* Resume Button */}
          <a
            href="https://drive.google.com/file/d/1hsbHIhOaFeran0iw2OSr1cMh-Zd6aHGG/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #e51313ff, #eb1717ff)',
              boxShadow: '0 0 2px #eb1717ff, 0 0 2px #eb1717ff, 0 0 40px #eb1717ff',
            }}
          >
            DOWNLOAD CV
          </a>

          
        </div>
        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-45 h-68 sm:w-64 sm:h-64 md:w-[25rem] md:h-[25rem] border-4 border-red-700 rounded-full"
            tiltMaxAngleX={30}
            tiltMaxAngleY={35}
            perspective={1000}
            scale={1.005}
            transitionSpeed={10000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Apurav Swami"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
      
      {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-500 mb-10 mt-8 leading-relaxed">
            I'm a web developer and cybersecurity enthusiast with experience in building responsive 
            applications and secure digital solutions. Skilled in HTML, CSS, Java, and C, I’ve developed 
            projects like personal portfolios and the Alcohol Sense Engine Lock system, combining development 
            with a strong security mindset.

          </p>
                
    </section>
  );
};

export default About;
