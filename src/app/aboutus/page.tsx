import NavBar from '../components/NavBar';

export default function AboutUsPage() {
  return (
    <div style={{ padding: '20px' }}>
      <NavBar />
      <h1 style={{ color: 'navy' }}>About Us</h1>
      <p>
        Welcome to our Country Information App! We aim to provide comprehensive details about various countries around the world.
      </p>
      <p>
        Our team is dedicated to delivering accurate and up-to-date information, making it easy for users to learn about different nations, including their population, capital, and unique attributes.
      </p>
    </div>
  );
}
