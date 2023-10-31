import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import ForwardToInboxIcon from "@mui/icons-material/ForwardToInbox";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <div className="Container-fluid footer ">
      <div className="footerC1">
        <Typography variant="h5">Let's Connect!</Typography>
        <Typography>
      
          Thank you for visiting my website. If you have any
          questions, inquiries, or would like to discuss a potential project,
          please feel free to get in touch with me. I'm here to assist you with
          any type of software, web development, or designing needs.
        </Typography>
        <Link to="/contact" className=" footerContactBtn  button2">


        <span></span>
              <span></span>
              <span></span>
              <span></span>
          <Typography>Contact Us</Typography>
        </Link>

      </div>


      <div className="footerC3 ">
        <div className="DirectlySet"><Typography variant="h6">Directly</Typography></div>
        <div className="button2">
        <a href="https://github.com/Gauravsdevelop" target="black">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          <ForwardToInboxIcon />

        </a>
        </div>

        <div className="button2">
        <a
          href="tel:+917976678956"
          target="black"
        >
          <span></span>
              <span></span>
              <span></span>
              <span></span>
           {<AddIcCallIcon />} 
        </a>


      </div>
      </div>




<div></div>

      <div className="footerC3">
        <Typography variant="h6">Socially</Typography>
        <div className="button2">
        <a href="https://github.com/Gauravsdevelop" target="black">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          <GitHubIcon />
        </a>
        </div>

        <div className="button2">
        <a
          href="https://www.youtube.com/channel/UCtO5YleuJtA-CRcdVAHYiag"
          target="black"
        >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          {<YouTubeIcon />}
        </a>
      </div>
        <div className="button2">
        <a
          href="https://instagram.com/gaurav_79766?igshid=YTQwZjQ0NmI0OA=="
          target="black"
        >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
          <InstagramIcon />
        </a>
        </div>

        <div className="button2">
        <a
          href="https://www.linkedin.com/in/gaurav-sharma-8379881b4/"
          target="black"
        >
          <span></span>
              <span></span>
              <span></span>
              <span></span>
          <LinkedInIcon />
          <span></span>
              <span></span>
              <span></span>
              <span></span>
        </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
