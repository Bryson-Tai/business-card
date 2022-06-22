import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Image from "./components/Image";
import MidDesc from "./components/Mid_Desc";
import MidContact from "./components/Mid_Contact";
import MidTitle from "./components/Mid_Title";
import SocialIcon from "./components/Social_Icon";
import Images from "./images";

const desc = [
  {
    id: 1,
    title: "About",
    desc: "I am a frontend developer with a passion for creating beautiful and functional websites. I have a background in graphic design and I am currently working on a portfolio website.",
  },
  {
    id: 2,
    title: "Interest",
    desc: "Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.",
  },
];

const contact = [
  {
    id: 1,
    title: "Email",
    icon: Images.email,
  },
  {
    id: 2,
    title: "LinkedIn",
    icon: Images.linkedIn,
  },
];

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <div className="card">
    <img src={Images.email} alt="prof" />
    <div className="card-body">
      <Image src={Images.profile} />
      <MidTitle className="title" />

      <div>
        {contact.map((contact) => (
          <MidContact
            key={contact.id}
            src={contact.icon}
            alt={contact.title}
            title={contact.title}
          />
        ))}
      </div>

      {desc.map((content) => (
        <MidDesc key={content.id} title={content.title} desc={content.desc} />
      ))}

      <SocialIcon />
    </div>
  </div>
);
