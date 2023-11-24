import { useEffect, useState } from "react";


const Featured = () => {
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('/features.json')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    console.log(items)
    return (
        <div>
            <h2>Awesome Features</h2>
            <div>

            </div>
        </div>
    );
};

export default Featured;