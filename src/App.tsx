import { Suspense } from "react";
import Banner from "./Banner"
import Nav from "./components/Nav"
import Technologies from "./components/Technologies";
import Footer from "./components/Footer";
import type { TechnologyType } from "./components/type/technologiesType";

const technologyFetch = async (): Promise<TechnologyType[]> => {
  const res = await fetch('/technologies.json');
  const data = await res.json();
  return data;
}


function App() {
  const technologiesPromise = technologyFetch();

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4">
        <Nav />
        <Banner />
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Technologies technologiesPromise={technologiesPromise} />
        </Suspense>
      </div>
      <Footer />
    </div>
  )
}

export default App