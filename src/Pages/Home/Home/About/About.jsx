import { GiHeartOrgan, GiHeavyTimer, GiNinjaHead, GiWeightLiftingUp } from "react-icons/gi";

const About = () => {
    return (
        <div className="my-20">
            <div className="text-center mb-14 space-y-0">
                <h2 className="text-5xl font-bold">About Us <br /> <span className="text-[#F4AF00] font-bold text-3xl">Who We Are</span></h2>
            </div>
            <div className="grid md:grid-cols-2">
                
                <div className="card-body space-y-3">
                    <div>
                        <p className="font-bold">BEST IS SELF MOTIVATION</p>
                        <h2 className="text-3xl font-normal text-gray-600">STAY FOCUSSED <span className="text-[#F4AF00]">STAY FIT & HEALTHY</span>.!!</h2>
                    </div>
                    <div className="flex items-center gap-5">
                        <span className="text-3xl" ><GiHeavyTimer></GiHeavyTimer></span>
                        <div>
                            <h2 className="text-xl font-semibold uppercase">Advance Pilates Training</h2>
                            <p className="text-sm text-gray-500">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <span className="text-3xl"><GiWeightLiftingUp></GiWeightLiftingUp></span>
                        <div>
                            <h2 className="text-xl font-semibold uppercase">Power Weight Lifting</h2>
                            <p className="text-sm text-gray-500">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <span className="text-3xl"><GiHeartOrgan></GiHeartOrgan></span>
                        <div>
                            <h2 className="text-xl font-semibold">CARDIO FIRST</h2>
                            <p className="text-sm text-gray-500">Fusce efficitur, ante sit amet sollicitudin tincidunt, tellus justo volutpat.</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5">
                        <span className="text-3xl"><GiNinjaHead></GiNinjaHead></span>
                        <div>
                            <h2 className="text-xl font-semibold">NINJA COACH</h2>
                            <p className="text-sm text-gray-500">Fusce efficitur, ante sit amet sollicitudin tincidunt, tellus justo volutpat.</p>
                        </div>
                    </div>

                </div>
                <div><img className="w-full" src="https://i.ibb.co/2trWHJ6/about.jpg" alt="" /></div>
            </div>
        </div>
    );
};

export default About;