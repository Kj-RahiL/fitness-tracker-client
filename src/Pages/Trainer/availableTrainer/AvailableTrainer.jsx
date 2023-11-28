import { Link, useLoaderData } from "react-router-dom";
import Title from "../../../Components/Shared/Title";

const AvailableTrainer = () => {
    const item = useLoaderData()
    const { name, category, image } = item
    console.log(item)
    return (
        <div>
            <Title title='Available Trainer'></Title>
            <div className="my-20">
                <div className="card w-full bg-black text-white shadow-md shadow-amber-500 flex-col lg:flex-row">
                    <figure className="h-[300px]"><img className="h-full w-full" src={image} alt="Shoes" /></figure>
                    <div className="ml-20">
                        <h2 className="text-4xl font-bold uppercase text-center">Available Time Slot</h2>
                        <div className="overflow-x-auto w-full ml-10">
                            <table className="table ">
                                {/* head */}
                                <thead>
                                    <tr className="text-amber-500">
                                        <th></th>
                                        <th>Class Name</th>
                                        <th>Time</th>
                                        <th>Trainer</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <th>1</th>
                                        <td>{category}</td>
                                        <td>9:00 Am - 10:00 am</td>
                                        <td>{name}</td>
                                        <td>
                                            <Link to='bookedPrice'>
                                                <button className="btn btn-outline bg-amber-700 text-white">Join Now</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <th>2</th>
                                        <td>{category}</td>
                                        <td>10:00 Am - 11:00 am</td>
                                        <td>{name}</td>
                                        <td>
                                            <Link to='bookedTrainer'>
                                                <button>Join Now</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    {/* row 3 */}
                                    <tr>
                                        <th>3</th>
                                        <td>{category}</td>
                                        <td>3:00 Pm - 4:00 Am</td>
                                        <td>{name}</td>
                                        <td>
                                            <Link to='bookedTrainer'>
                                                <button>Join Now</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    {/* row 4 */}
                                    <tr>
                                        <th>4</th>
                                        <td>{category}</td>
                                        <td>5:00 Pm - 6:00 Pm</td>
                                        <td>{name}</td>
                                        <td>
                                            <Link to='bookedTrainer'>
                                                <button>Join Now</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    {/* row 5 */}
                                    <tr>
                                        <th>5</th>
                                        <td>{category}</td>
                                        <td>6:00 Pm - 7:00 Pm</td>
                                        <td>{name}</td>
                                        <td>
                                            <Link to='bookedTrainer'>
                                                <button>Join Now</button>
                                            </Link>
                                        </td>
                                    </tr>
                                    {/* row 6 */}
                                    <tr>
                                        <th>6</th>
                                        <td>{category}</td>
                                        <td>7:00 pm - 8:00 Pmm</td>
                                        <td>{name}</td>
                                        <td>
                                            <Link to='bookedTrainer'>
                                                <button>Join Now</button>
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default AvailableTrainer;