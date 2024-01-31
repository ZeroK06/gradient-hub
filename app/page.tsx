import { Gradients } from "./components/Gradients";
import { Hero } from "./components/Hero";
import arr_gradients from '../gradients.json'
import { Footer } from "./components/Footer";
import { Wrapper } from "./components/Wrapper";
import Link from "next/link";

export default function Home() {

  const gradients = arr_gradients.slice(0, 10)

  return (
    <main className="bg-gray-100">
      <Hero />
      <Gradients gradients={gradients} />
      <Wrapper>
        <div className="flex justify-center mb-20 mt-4 underline">
          <Link href="/gradients">All gradients</Link>
        </div>
      </Wrapper>
      <Footer />
    </main>
  );
}
