import React, { FC } from 'react'

export const Footer: FC = () => (
  <footer>
    <div className="footer-circle"></div>
    <section className="footer-content">
      <h2 className="section-title">Contact me</h2>
      <div className="footer-content__contacts">
        <div className="footer-content__contacts--social">
          <a href="#" target="_blank">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="footer-content__contacts--personal">
          <a href="mailto:katiekennedy9@gmail.com">katiekennedy9@gmail.com</a>
          <a href="tel:5144650339">514-465-0339</a>
        </div>
      </div>
      <a href="#" className="btn btn-primary">
        Book a session
      </a>
    </section>
  </footer>
)
