import NavBar from '../components/NavBar';

export default function ContactUsPage() {
  return (
    <div style={{ padding: '20px' }}>
      <NavBar />
      <h1 style={{ color: 'navy' }}>Contact Us</h1>
      <p>If you have any questions, comments, or suggestions, feel free to reach out!</p>
      <p>Email: <a href="mailto:info@countryinfoapp.com">info@countryinfoapp.com</a></p>
      <p>Follow us on our social media:</p>
      <ul>
        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
        <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
      </ul>
    </div>
  );
}
