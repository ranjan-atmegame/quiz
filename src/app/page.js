import dynamic from 'next/dynamic';
const Home = dynamic(() => import('@/components/home'));

export default async function Page() {
  return <Home />;
}
