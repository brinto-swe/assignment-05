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
    <>
      <Nav/>
      <Banner/>
      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Technologies technologiesPromise={technologiesPromise} />
      </Suspense>
      <Footer />
    </>
  )
}

export default App