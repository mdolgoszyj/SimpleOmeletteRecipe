import SimpleOmeletteRecipe from "./components/SimpleOmeletteRecipe";
import Nutrition from "./components/Nutrition";
import Instructions from "./components/Instructions";
import PreparationTime from "./components/PreparationTime";
import Ingredients from "./components/Ingredients";
import ImgOmlet from "./components/ImgOmlet";

export default function App() {
  return (
    <div className="bg-orange-100 w-100 flex flex-col items-center lg:py-24">
      <div className="bg-white lg:w-1/2 sm:w-1/8 p-8 lg:rounded-[24px] ">  
{/*---------- */}
        <ImgOmlet />
{/*---------- */}
        <SimpleOmeletteRecipe />
{/*---------- */}
        <PreparationTime />
{/*---------- */}
        <Ingredients />
{/*---------- */}
        <Instructions />
{/*---------- */}
        <Nutrition />
{/*---------- */}
        
{/*---------- */}        
      </div>
    </div>

  )
}