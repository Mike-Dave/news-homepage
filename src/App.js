import retroPCs from "./images/image-retro-pcs.jpg";
import topLaptops from "./images/image-top-laptops.jpg";
import gamingGrowth from "./images/image-gaming-growth.jpg";
import WholeContent from "./Components/WholeContent";
import Nav from "./Components/Nav";
import MainImage from "./Components/MainImage";
import MainHeading from "./Components/MainHeading";
import ReadMoreContent from "./Components/ReadMoreContent";
import NewContentContainer from "./Components/NewContentContainer";
import FirstTechUpdate from "./Components/FirstTechUpdate";
import SecondTechUpdate from "./Components/SecondTechUpdate";
import ThirdTechUpdate from "./Components/ThirdTechUpdate";

const techInfoUpdate = [
  {
    number: "01",
    title: "Reviving Retro PCs",
    content: "What happens when old PCs are given modern upgrades?",
    image: `${retroPCs}`,
    id: 1,
  },
  {
    number: "02",
    title: "Top 10 Laptops of 2022",
    content: "Our best picks for various needs and budgets.",
    image: `${topLaptops}`,
    id: 2,
  },
  {
    number: "03",
    title: "The Growth of Gaming",
    content: "How the pandemic has sparked fresh opportunities.",
    image: `${gamingGrowth}`,
    id: 3,
  },
];
export default function App() {
  return (
    <main className="min-h-screen md:grid place-content-center">
      <WholeContent>
        <Nav />
        <MainImage />
        <MainHeading />
        <ReadMoreContent />
        <NewContentContainer />
        <FirstTechUpdate techInfoUpdate={techInfoUpdate} />
        <SecondTechUpdate techInfoUpdate={techInfoUpdate} />
        <ThirdTechUpdate techInfoUpdate={techInfoUpdate} />
      </WholeContent>
    </main>
  );
}
