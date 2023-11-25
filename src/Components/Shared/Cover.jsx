
import cover from '../../assets/Shared/cover.jpg'

const Cover = ({text, title}) => {
    return (
        <div className="hero h-[70vh] bg-cover bg-blend-overlay bg-[#2f2f2f56]" style={{ backgroundImage: `url(${cover})` }}>
            <div className="hero-overlay bg-[#000000] bg-opacity-50"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className=" text-white text-center text-5xl font-bold uppercase">{text} <span className='text-[#F4AF00]'>{title}</span></h1>
                </div>
            </div>
        </div>
    );
};

export default Cover;