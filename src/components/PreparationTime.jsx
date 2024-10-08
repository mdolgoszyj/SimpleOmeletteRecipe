export default function PreparationTime() {
    return (
        <div className="px-8 py-4 my-2 rounded-[24px] bg-rose-50">
          <p className="my-2 font-bold text-rose-800">
              Preparation time
          </p>
          <p className="my-2">
              <ul className="list-inside list-disc marker:text-rose-800">
                <li><b>Total:</b> Approximately 10 minutes</li>
                <li><b>Preparation:</b> 5 minutes</li>
                <li><b>Cooking:</b> 5 minutes</li>  
              </ul>
          </p>
        </div>
    )
  }