// app/page.tsx

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Resources() {

  return (
    <div className="">
      <Navbar />
      <section className='w-full flex justify-center'>
        <div className='max-w-[1280px] w-full mt-10'>
          <h1 className="text-4xl font-bold mb-4">Resources</h1>
          <div style={{
            position: 'relative',
            width: '100%',
            height: 0,
            paddingTop: '56.25%',
            paddingBottom: 0,
            boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
            marginTop: '1.6em',
            marginBottom: '0.9em',
            overflow: 'hidden',
            borderRadius: '8px',
            willChange: 'transform'
          }}>
            <iframe loading="lazy" style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0,
              border: 'none',
              padding: 0,
              margin: 0
            }} src="https://www.canva.com/design/DAGBFUWMFiI/JK86bNc_prj1qWKejK6mjg/view?embed" allowFullScreen={true} allow="fullscreen">
            </iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}