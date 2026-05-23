import Head from 'next/head';
import { colors } from '@olmeda/design-system/tokens';

export default function Home() {
  return (
    <>
      <Head>
        <title>Olmeda Agency</title>
        <meta name="description" content="Olmeda Agency - Web Solutions & Design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <header style={{ backgroundColor: colors.primary }}>
          <nav>
            <h1>Olmeda</h1>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        <section id="hero">
          <h2>Welcome to Olmeda</h2>
          <p>We create beautiful, functional digital experiences</p>
        </section>

        <section id="about">
          <h2>About Us</h2>
          <p>Olmeda is a digital agency focused on design and development.</p>
        </section>

        <section id="services">
          <h2>Services</h2>
          <ul>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Branding</li>
          </ul>
        </section>

        <section id="portfolio">
          <h2>Portfolio</h2>
          <p>Featured projects coming soon...</p>
        </section>

        <section id="blog">
          <h2>Blog</h2>
          <p>Latest articles and insights...</p>
        </section>

        <section id="contact">
          <h2>Contact</h2>
          <p>Get in touch with us at hello@amandaalmeidda.com</p>
        </section>

        <footer>
          <p>&copy; 2026 Olmeda Agency. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
