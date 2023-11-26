import { Helmet } from "react-helmet-async";
import Cover from "../../Components/Shared/Cover";
import { useEffect, useState } from "react";

import background from '../../assets/Home/mesh-814.png'
import TrainerCard from "./TrainerCard";

const Trainer = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('/teams.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])

    return (
        <div>
            <Helmet>
                <title>FIT TO HIT | Trainer</title>
            </Helmet>
            <Cover text='Meet Our Experts' title='Trainer'></Cover>
            <div className="py-20 bg-cover" style={{ backgroundImage: `url(${background})` }}>
                <div className="grid grid-cols-3 gap-10 mx-5">
                    {
                        items.map(item => <TrainerCard key={item.id} item={item}></TrainerCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Trainer;