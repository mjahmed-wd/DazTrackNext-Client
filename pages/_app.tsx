import Link from 'next/link';
import Layout from '../components/Layout';
import './../styles/styles.css';

const App = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <h1 className="text-3xl font-bold underline">Hello world!F</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

export default App;
