import NavBar from '../../components/NavBar';

export default function CanadaPage() {
  const country = {
    name: 'Canada',
    population: '38,654,738',
    capital: 'Ottawa',
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
