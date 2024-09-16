import Aboutme from "./Components/Aboutme";
import Cta from "./Components/Cta";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import TechstackSection from "./Components/TechstackSection";

function App() {
  return (
    <div className="bg-[#191919] h-100 md:px-16 md:py-6 px-6 py-10 text-white flex flex-col gap-32 items-center">
      <Header />
      <Cta />
      <TechstackSection />
      <Projects />
      <Aboutme />
    </div>
  );
}

export default App;
