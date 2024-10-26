import NavBar from '../../components/NavBar';

export default function AustraliaPage() {
  const country = {
    name: 'Australia',
    population: '25,687,041',
    capital: 'Canberra',
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
