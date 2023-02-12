import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <footer>
        <ul className="list footer-list">
          <li className="footer-item">
            <p>Made by: Olka Khmelova</p>
          </li>
          <li className="footer-item">
            <a
              href="https://github.com/Olka-Khmelova/weather-react"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link link"
            >
              My GitHub repository
            </a>
          </li>
          <li className="footer-item">
            <a
              href="https://comforting-arithmetic-edb1a8.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link link"
            >
              Published on Netlify
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
