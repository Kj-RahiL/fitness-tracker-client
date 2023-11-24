

const FeatureCard = ({item}) => {
    return (
        <div className="card  bg-black text-white shadow-md shadow-amber-500">
            <figure className="px-10 pt-10 h-[220px]">
                <img src={item.icon} alt="Shoes" className="rounded-xl h-full" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-2xl font-bold">{item.title}</h2>
                <p className="text-base text-gray-400">{item.description}</p>
                
            </div>
        </div>
    );
};

export default FeatureCard;