import Image from "next/image";
import Table from "./components/Table";
import TopPlatformTable from "./components/TopPlatformTable";
import Header from "./components/Header";
import BarChart from "./components/BarChart";
import ChartGroup from "./components/ChartGroup";



export default function Home() {
  const data = [20, 30, 40, 25, 50]; // Example data
  const labels = ['Label 1', 'Label 2', 'Label 3', 'Label 4', 'Label 5'];


  return (
    <main className=" w-full ">
      <Header />
    
     <section className="p-2 md:p-5 h-auto flex flex-col lg:flex-row gap-5">
      <div className="w-full flex flex-col gap-5 ">
        <BarChart  />
        <Table />
      </div>
      <div className="w-full ">
        <ChartGroup />
        <TopPlatformTable />
      </div>
      

     </section>
    </main>
  );
}
