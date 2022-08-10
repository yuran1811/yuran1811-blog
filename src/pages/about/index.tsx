import Layout from '@cpns/layouts/Layout';
import { Container, Meta } from '@cpns/shared';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Meta title="About | Yuran Blog" desc="Yuran Blog About" />
      <Layout>
        <Container>
          <div className="p-6 text-center text-6xl font-bold">About Me.</div>

          <div className="w-full p-6">
            <div className="flexcentercol relative m-4 p-4">
              <div className="absolute h-[160px] w-[160px] animate-ping rounded-full bg-[#f2da87]" />
              <Image src="/avatar.jpg" width={250} height={250} className="rounded-full" />
            </div>

            <div className="m-4 space-y-4 p-4 text-3xl">
              <div className="text-center">My name is Khoa - aka Yuran</div>
              <div className="text-center">I'm {new Date().getFullYear() - 2005} years old</div>
            </div>

            <div className="m-4 mt-12 space-y-4 p-4 text-3xl">
              <div className="text-center">That's all for now</div>
              <div className="text-center">Thanks for reading {':)'} </div>
            </div>
          </div>
        </Container>
      </Layout>
    </>
  );
}
