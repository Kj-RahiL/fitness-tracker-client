

const WeeklyShedule = () => {
    return (
        <div className="overflow-x-auto bg-neutral-950">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr className="text-[#F4AF00] text-xl">
                            <th></th>
                            <th>Sat</th>
                            <th>Sun</th>
                            <th>Mon</th>
                            <th>Tue</th>
                            <th>Wed</th>
                            <th>Thu</th>
                            <th>Fri</th>
                        </tr>
                    </thead>
                    <tbody className="text-white  text-base">
                        {/* row 1 */}
                        <tr>
                            <th>9:00am</th>
                            <td>
                                <p>9:00am - 10:00am</p>
                                <h2>Fitness</h2>
                            </td>
                            <td>
                                <p>9:00am - 10:00am</p>
                                <h2>Boxing</h2>
                            </td>
                            <td>
                                <p>9:00am - 10:00am</p>
                                <h2>Cycling</h2>
                            </td>
                            <td></td>
                            <td>
                                <p>9:00am - 10:00am</p>
                                <h2>CrossFit</h2>
                            </td>
                            <td>
                                <p>9:00am - 10:00am</p>
                                <h2>Power Lifting</h2>
                            </td>
                            <td></td>
                        </tr>
                        {/* row 2 */}
                        <tr>
                            <th>10:00am</th>
                            <td>
                                <p>10:00am - 11:00am</p>
                                <h2>Body Building</h2>
                            </td>
                            <th></th>
                            <th></th>
                            <td>
                                <p>10:00am - 11:00am</p>
                                <h2>Karate</h2>
                            </td>
                            <td>
                                <p>10:00am - 11:00am</p>
                                <h2>Boxing</h2>
                            </td>
                            <td></td>
                            <td>
                                <p>10:00am - 11:00am</p>
                                <h2>Boxing</h2>
                            </td>
                            
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>4:00am</th>
                            <th></th>
                            <td>
                                <p>4:00am - 5:00am</p>
                                <h2>Body Building</h2>
                            </td>
                            <th></th>
                            <td>
                                <p>4:00am - 5:00am</p>
                                <h2>Karate</h2>
                            </td>
                            <td>
                                <p>4:00am - 5:00am</p>
                                <h2>Boxing</h2>
                            </td>
                            <td></td>
                            <td>
                                <p>4:00am - 5:00am</p>
                                <h2>Boxing</h2>
                            </td>
                            
                        </tr>
                        {/* row 4 */}
                        <tr>
                            <th>5:00pm</th>
                            <th></th>
                            <td>
                                <p>5:00pm - 6:00pm</p>
                                <h2>Body Building</h2>
                            </td>
                            <td>
                            <p>5:00pm - 6:00pm</p>
                                <h2>Boxing</h2>
                            </td>
                            <th></th>
                            <td>
                            <p>5:00pm - 6:00pm</p>
                                <h2>Karate</h2>
                            </td>
                            <td>
                            <td></td>
                            <p>5:00pm - 6:00pm</p>
                                <h2>Boxing</h2>
                            </td>
                            <td>
                            <p>5:00pm - 6:00pm</p>
                                <h2>Boxing</h2>
                            </td>
                            
                        </tr>
                        {/* row 5 */}
                        <tr>
                            <th>6:00pm</th>
                            <td>
                                <p>6:00pm - 7:00pm</p>
                                <h2>Fitness</h2>
                            </td>
                            <td>
                                <p>6:00pm - 7:00pm</p>
                                <h2>Boxing</h2>
                            </td>
                            <td>
                                <p>6:00pm - 7:00pm</p>
                                <h2>Cycling</h2>
                            </td>
                            <td></td>
                            <td></td>
                            <td>
                                <p>6:00pm - 7:00pm</p>
                                <h2>CrossFit</h2>
                            </td>
                            <td>
                                <p>6:00pm - 7:00pm</p>
                                <h2>Power Lifting</h2>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
    );
};

export default WeeklyShedule;