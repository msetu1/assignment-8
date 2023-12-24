import { useLoaderData } from "react-router-dom";
import WorkshopCard from "./WorkshopCard";

const Workshop = () => {
    const workshop=useLoaderData([])
    return (
        <div className="pt-32 pb-28">
            <h1 className="text-4xl mb-10 font-bold text-center ">Electronics Workshop</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {
                    workshop?.map(item=><WorkshopCard
                    key={item.id}
                    item={item}
                    ></WorkshopCard>)
                }
            </div>
        </div>
    );
};

export default Workshop;