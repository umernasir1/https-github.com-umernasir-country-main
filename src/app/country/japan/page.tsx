import NavBar from '../../components/NavBar';

export default function JapanPage() {
  const country = {
    name: 'Japan',
    population: '126,476,461',
    capital: 'Tokyo',
  };

  return (
    <div style={{ padding: '20px' }}>
      <NavBar />
      <h1 style={{ color: 'navy' }}>{country.name}</h1>
      <p><strong>Population:</strong> {country.population}</p>
      <p><strong>Capital:</strong> {country.capital}</p>
    </div>
  );
}