

import dynamic from 'next/dynamic';

const Viewer = dynamic(() => import('@/components/Viewer'), { ssr: false });

export default function Home() {
  return (
    <main style={{ height: '100vh', background: '#f0f0f0' }}>
      <Viewer />
    </main>
  );
}
