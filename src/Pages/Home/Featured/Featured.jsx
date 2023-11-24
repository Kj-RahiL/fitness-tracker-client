import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";


const Featured = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('/feature.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    console.log(items)
    return (
        <div className="py-20 bg-gray-950">
            <h2 className="text-5xl text-center font-bold text-white mb-16">Awesome Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 gap-8">
                {
                    items?.map(item => <FeatureCard key={item.id} item={item}></FeatureCard>)
                }
            </div>
        </div>
    );
};

export default Featured;