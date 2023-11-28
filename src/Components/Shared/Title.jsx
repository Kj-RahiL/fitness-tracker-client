

const Title = ({ title}) => {
    return (
        <div className="hero bg-gradient-to-r from-neutral-950 from-30% via-amber-500 via-70%">
        <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md py-5 pt-10 ">
                <h1 className=" text-white text-center text-5xl font-bold uppercase">{title}</h1>
            </div>
        </div>
         
    </div>
    );
};

export default Title;