import NavBar from '../../components/NavBar';

export default function GermanyPage() {
  const country = {
    name: 'Germany',
    population: '83,132,799',
    capital: 'Berlin',
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
