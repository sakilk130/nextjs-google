import Head from 'next/head';
import { useRouter } from 'next/router';
import Header from '../components/Header/Header';
import SearchResults from '../components/SearchResults/SearchResults';
import Response from '../response';

function Search({ results }: any) {
  const router = useRouter();
  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
      </Head>

      <Header />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;

export async function getServerSideProps(context: any) {
  const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_API;
  const CONTEXT_KEY = process.env.NEXT_PUBLIC_SEARCH_ENGINE_ID;
  const startIndex = context.query.start || '0';

  const useDummyData = true;
  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
      ).then((response) => response.json());

  return {
    props: {
      results: data,
    },
  };
}
