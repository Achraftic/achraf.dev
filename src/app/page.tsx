
import Header from "@/components/Header";
import Main from "@/components/Main";
import About from "@/components/About";
import Projects from "@/components/Projects";




export default function Home() {
  return (
    <div className="max-w-4xl mx-auto h-full py-8  max-md:p-5 ">
      <Header />
      <div className=" sm:p-7 p-4 my-10 flex flex-col gap-32 overflow-hidden   ">
        <Main />
        <About />
        <Projects />
      </div>
    </div>
  );
}
