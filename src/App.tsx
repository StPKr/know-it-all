export default function App() {
  return (
    <div className="landing-container">
      {/* Header */}
      <header>
        <h1 className="heading">Welcome to My Landing Page</h1>
        <p className="subheading">
          This is a simple starting point for a React + Vite + Tailwind project.
        </p>
      </header>

      {/* Call-to-action button */}
      <a href="#" className="cta-button">
        Get Started
      </a>

      {/* Footer */}
      <footer className="footer">
        &copy; 2025 My Company. All rights reserved.
      </footer>
    </div>
  );
}