import AddCountry from "@/components/AddCountry";
import Header from "@/components/Header";
import RecentCountry from "@/components/RecentCountry";

export default function Home() {
  return (
    <div className="main_background">
    <Header/>
    <AddCountry/>
    <RecentCountry/>
    </div>
  );
}
