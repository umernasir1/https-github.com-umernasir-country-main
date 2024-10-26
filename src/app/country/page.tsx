import Link from 'next/link';
import NavBar from '../components/NavBar';

const countries = [
  { name: 'Japan', slug: 'japan' },
  { name: 'Brazil', slug: 'brazil' },
  { name: 'Germany', slug: 'germany' },
  { name: 'Australia', slug: 'australia' },
  { name: 'Canada', slug: 'canada' },
];

export default function CountriesPage() {
  return (
    <div style={{ padding: '20px' }}>
      <NavBar />
      <h1 style={{ color: 'navy' }}>Country List</h1>
      <ol style={{ lineHeight: '2' }}>
        {countries.map((country) => (
          <li key={country.slug} style={{ marginBottom: '10px' }}>
            <Link href={`/country/${country.slug}`}>{country.name}</Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
