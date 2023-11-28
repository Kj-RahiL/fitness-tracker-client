

const BookedPrice = () => {
        return (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10 pt-20">
                <div className=" mt-20 relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr bg-clip-border p-8 text-white shadow-md bg-white shadow-pink-500/40">
                    <div className=" border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none space-y-5">
                        <h1 className="-mt-20 w-40 flex justify-center mx-auto gap-1 text-7xl rounded-full py-5 border-2 text-white bg-gray-500 ">
                            <span className="mt-2 text-4xl">$</span>299
                        </h1>
                        <div>
                            <h2 className="font-semibold text-2xl tracking-widest">SLIVER</h2>
                           
                        </div>
                        <hr />

                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4 text-center text-gray-500 font-medium">
                            <li>Free Hand</li>
                            <li>Gym Fitness</li>
                            <li>Weight Loss</li>
                            <li>Personal Trainer</li>
                            <li>Cycling</li>
                        </ul>
                    </div>
                    <div className="mt-12 p-0 mx-auto">
                        <button className="btn hover:text-white text-gray-500 bg-transparent hover:bg-[#fd2d2d] border-2 border-gray-500  ">Join Now</button>
                    </div>
                </div>

                <div className="mt-20 relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr bg-clip-border p-8 text-white shadow-md bg-gray-50 shadow-pink-500/40">
                    <div className=" border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none space-y-5">
                        <h1 className="-mt-20 w-40 flex justify-center mx-auto gap-1 text-7xl rounded-full py-5 border-2 text-white bg-[#fe3e01] ">
                            <span className="mt-2 text-4xl">$</span>499
                        </h1>
                        <div>
                            <h2 className="font-semibold text-2xl tracking-widest">GOLD</h2>
                        </div>
                        <hr />

                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4 text-center text-gray-500 font-medium">
                        <li>Free Hand</li>
                        <li>Gym Fitness</li>
                        <li>Weight Loss</li>
                        <li>Personal Trainer</li>
                        <li>Cycling</li>
                        </ul>
                    </div>
                    <div className="mt-12 p-0 mx-auto">
                        <button className="btn hover:text-white text-gray-500 bg-transparent hover:bg-gray-500 border-2 border-gray-500  ">Join Now</button>
                    </div>
                </div>

                <div className="mt-20 relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr bg-clip-border p-8 text-white shadow-md bg-white shadow-pink-500/40">
                    <div className=" border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center text-gray-700 shadow-none space-y-5">
                        <h1 className="-mt-20 w-40 flex justify-center mx-auto gap-1 text-7xl rounded-full py-5 border-2 text-white bg-gradient-to-r from-neutral-950 from-10% to-emerald-500 to-90% via-90% ">
                            <span className="mt-2 text-4xl">$</span>699
                        </h1>
                        <div>
                            <h2 className="font-semibold text-2xl tracking-widest">DIAMOND</h2>
                        </div>
                        <hr />

                    </div>
                    <div className="p-0">
                        <ul className="flex flex-col gap-4 text-center text-gray-500 font-medium">
                            <li>Unlimited Access to Home Club</li>
                            <li>Free Fitness Training</li>
                            <li>Free training session with a Club</li>
                            <li>Over 16 free group fitness classes</li>
                            <li>Free functional movement screen</li>
                            <li>Movement screen</li>
                        </ul>
                    </div>
                    <div className="mt-4 p-0 mx-auto">
                        <button className="btn hover:text-white text-gray-500 bg-transparent hover:bg-[#fd2d2d] border-2 border-gray-500  ">Join Now</button>
                    </div>
                </div>
            </div>
        );
    };

export default BookedPrice
    ;