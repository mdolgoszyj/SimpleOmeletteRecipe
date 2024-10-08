export default function Nutrition() {
    return (
        <div className="">
          <p className="text-2xl my-3 font-bold text-rose-800">
            Nutrition
          </p> 
          <p>
          The table below shows nutritional values per serving without the additional fillings.
          
          <table className="table-fixed w-full pl-5 my-3 ">
            <tbody className="text-xs divide-y divide-gray-100">
              <tr><td className="px-6 py-2">Calories</td><td className="font-bold text-rose-800">277kcal</td></tr>
              <tr><td className="px-6 py-2">Carbs</td><td className="font-bold text-rose-800">0g</td></tr>
              <tr><td className="px-6 py-2">Protein</td><td className="font-bold text-rose-800">20g</td></tr>
              <tr><td className="px-6 py-2">Fat</td><td className="font-bold text-rose-800">22g</td></tr>
            </tbody>
          </table>
          </p>
        </div> 
    )
  }