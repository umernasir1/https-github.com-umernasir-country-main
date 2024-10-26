import NavBar from '../../components/NavBar';

export default function BrazilPage() {
  const country = {
    name: 'Brazil',
    population: '213,993,437',
    capital: 'Brasília',
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
