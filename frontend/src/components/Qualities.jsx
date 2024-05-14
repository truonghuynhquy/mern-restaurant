import axios from "axios";
import { useEffect, useState } from "react";

const Qualities = () => {
    const [quality, setQuality] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(
                    "http://127.0.0.1:4000/api/v1/restApi/getQuality"
                );
                const data = res.data.data;
                setQuality(data);
            } catch (err) {
                console.log("Error", err);
            }
        };

        fetchData();
    }, []);
    return (
        <>
            <section className="qualities" id="qualities">
                <div className="container">
                    {quality.map((el) => (
                        <div className="card" key={el._id}>
                            <img src={el.image} alt={el.title} />
                            <p className="title">{el.title}</p>
                            <p className="description">{el.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Qualities;
