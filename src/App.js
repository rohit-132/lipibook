import React, { useState } from "react";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import logo from "./assets/logo.png"; // replace with your own image

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="app-container">
      {/* Sidebar */}
      {sidebarOpen && (
        <aside className="sidebar">
          <button
            className="close-btn"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close Sidebar"
          >
            <i className="fas fa-times"></i>
          </button>
          <button className="signout-btn">SIGN OUT</button>
        </aside>
      )}

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          {/* Logo on the left */}
          <div className="logo-container">
            <img src={logo} alt="LipiBook Logo" className="logo" />
          </div>

          {/* Title centered */}
          <h1 className="title">भारत इतिहास संशोधक मंडळ, पुणे</h1>
        </header>

        {/* Welcome Section */}
        <section className="welcome">
          {/* Menu icon */}
          <div
            className="menu-icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <i className="fas fa-bars"></i>
          </div>

          <p>
            Welcome! Our platform is dedicated to making historical documents
            accessible.
          </p>
          <p>
            Easily convert your documents from the Modi script{" "}
            <span className="highlight modi">(मोड़ी लिपी)</span> to the modern
            Devanagari script{" "}
            <span className="highlight devanagari">(देवनागरी लिपी)</span>.
          </p>
          <p>
            Preserve your heritage and unlock the knowledge within your
            manuscripts with our fast and accurate online tool.
          </p>
        </section>

        {/* Upload Section */}
        <section className="upload-section">
          <div className="upload-icon">
            <i className="fas fa-cloud-upload-alt"></i>
          </div>
          <p className="upload-text">Upload Your ModiDocs</p>

          <div className="toggle-container">
            <span>ResNet-9 - latest</span>
            <label className="switch">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>

          <button className="convert-btn">Convert to Devnagri</button>
        </section>

        {/* Footer */}
        <footer className="footer">
          © 2025 All rights reserved | LipiBook
        </footer>
      </main>

      {/* Help icon */}
      <div className="help-icon">?</div>
    </div>
  );
}