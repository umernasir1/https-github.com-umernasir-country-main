import NavBar from './components/NavBar';

export default function HomePage() {
  return (
    <div style={{ padding: '20px' }}>
      <NavBar />
      <h1 style={{ color: 'navy' }}>Welcome to the Country Information App</h1>
      <p>
        This application provides information about various countries, including their population and capital.
      </p>
      <p>
        Click on the links below to explore:
      </p>
      <ul>
        <li><a href="/country">View Country List</a></li>
        <li><a href="/aboutus">About Us</a></li>
        <li><a href="/contactus">Contact Us</a></li>
      </ul>
    </div>
  );
}
