import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header/Header';

function Search() {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      <Header />
    </div>
  );
}

export default Search;
