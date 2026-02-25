import React from "react";
import myImage from "../../Assets/Kana.jpg";

const AboutMe = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2 className="page-titles">About Me</h2>
      <img src={myImage} className="my-image" alt="" />
      <section className="my-info">
        <p>
          Hello, I’m Mr. Kanayochi Ifediora, a junior web developer with a
          strong interest in building practical, user-focused web applications.
        </p>
        <p>
          I have a background in Chemical Engineering and over 11 years of
          experience in the banking and financial services sector, where I
          developed strong analytical, problem-solving, and stakeholder
          engagement skills.
        </p>
        <p>
          In recent years, I transitioned into Information Technology,
          completing a Web Development Bootcamp at the University of Adelaide in
          September 2023. Since then, I have been actively developing projects using
          the <strong>MERN stack (Mongo DB, Express, React and Node.js)</strong> along with
          related technologies, to deepen my understanding of modern web development and backend systems.
        </p>
        <p>
          Outside of development, I enjoy soccer, basketball, chess, and
          automotive culture, and I have an unusual fascination with aircraft
          spotting.
        </p>
        <p>
          This portfolio showcases a selection of projects I have developed over
          time, reflecting both my technical growth and my commitment to
          continuous learning.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;
