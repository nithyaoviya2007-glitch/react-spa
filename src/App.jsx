
import { Link, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";

function Navbar() {
  const location = useLocation();

  const links = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/services", label: "Services" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        React<span>Space</span>
      </Link>

      <div className="nav-links">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={
              location.pathname === link.path
                ? "nav-link active"
                : "nav-link"
            }
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function Home() {
  return (
    <section className="hero">
      <p className="eyebrow">WELCOME TO REACTSPACE</p>
      <h1>One app. Multiple pages. <span>No reloads.</span></h1>
      <p className="hero-text">
        Discover how React routing makes it easy to build
        fast, modern single-page applications.
      </p>
      <div className="hero-actions">
        <Link to="/services" className="primary-btn">
          Explore Services →
        </Link>
        <Link to="/about" className="secondary-btn">
          Learn More
        </Link>
      </div>

      <div className="feature-grid">
        <div className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3>Fast Navigation</h3>
          <p>Switch pages without reloading the website.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🧩</div>
          <h3>Reusable Components</h3>
          <p>Build interfaces with reusable React components.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🎨</div>
          <h3>Modern Design</h3>
          <p>Create a clean and responsive user interface.</p>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="page">
      <p className="eyebrow">WHO WE ARE</p>
      <h1>About ReactSpace</h1>
      <p className="page-text">
        ReactSpace is a sample single-page application
        developed using React, Vite, and React Router.
        It demonstrates how different views can be displayed
        using URL-based routing.
      </p>
      <div className="info-card">
        <h3>Our Objective</h3>
        <p>
          To demonstrate component-based development,
          client-side navigation, and reusable layouts.
        </p>
      </div>
      <Link to="/" className="primary-btn">← Back to Home</Link>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: "💻",
      title: "Web Development",
      text: "Build responsive websites using modern web technologies.",
    },
    {
      icon: "⚛️",
      title: "React Applications",
      text: "Create reusable components and interactive interfaces.",
    },
    {
      icon: "🧭",
      title: "Page Navigation",
      text: "Organize your application with client-side routing.",
    },
  ];

  return (
    <section className="page">
      <p className="eyebrow">WHAT WE OFFER</p>
      <h1>Our Services</h1>
      <p className="page-text">
        Explore the features demonstrated in this project.
      </p>

      <div className="feature-grid">
        {services.map((service) => (
          <div className="feature-card" key={service.title}>
            <div className="feature-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();

    const form = event.currentTarget;
    const name = new FormData(form).get("name");

    alert(`Thank you, ${name}! Your demo form was submitted.`);
    form.reset();
  }

  return (
    <section className="page">
      <p className="eyebrow">GET IN TOUCH</p>
      <h1>Contact Us</h1>
      <p className="page-text">
        Have a question? Send us a message using the form below.
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Your Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          name="message"
          placeholder="Write your message here"
          rows="4"
          required
        />

        <button type="submit" className="primary-btn">
          Submit Message →
        </button>
      </form>
      <p className="form-note">
        This is a demo form. It does not send data to a server.
      </p>
    </section>
  );
}

function NotFound() {
  return (
    <section className="page not-found">
      <h1>404 - Page Not Found</h1>
      <p className="page-text">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/" className="primary-btn">Go to Home</Link>
    </section>
  );
}

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="footer">
        © 2026 ReactSpace · Built with React
      </footer>
    </div>
  );
}
