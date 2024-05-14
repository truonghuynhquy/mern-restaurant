import axios from "axios";
import { useEffect, useState } from "react";

const WhoAreWe = () => {
    const [who, setWho] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(
                    "http://127.0.0.1:4000/api/v1/restApi/getWho"
                );
                const data = res.data.data;
                setWho(data);
            } catch (error) {
                console.log("Error", error);
            }
        })();
    }, []);

    return (
        <>
            <section className="who_are_we" id="who_are_we">
                <div className="container">
                    <div className="text_banner">
                        {who.slice(0, 2).map((el) => (
                            <div className="card" key={el._id}>
                                <h1
                                    className="heading"
                                    style={{ fontWeight: "300" }}
                                >
                                    {el.number}
                                </h1>
                                <p>{el.title}</p>
                            </div>
                        ))}
                    </div>

                    <div className="image_banner">
                        <img
                            className="gradient_bg"
                            src="center.svg"
                            alt="gradientBg"
                        />
                        <img src="whoweare.png" alt="food" />
                    </div>

                    <div className="text_banner">
                        {who.slice(2).map((el) => (
                            <div className="card" key={el._id}>
                                <h1
                                    className="heading"
                                    style={{ fontWeight: "300" }}
                                >
                                    {el.number}
                                </h1>
                                <p>{el.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhoAreWe;
