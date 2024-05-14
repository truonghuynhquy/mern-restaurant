import axios from "axios";
import { useEffect, useState } from "react";

const Menu = () => {
    const [dishes, setDishes] = useState([]);

    useEffect(() => {
        const fecthData = async () => {
            try {
                const res = await axios.get(
                    "http://127.0.0.1:4000/api/v1/restApi/getDish"
                );
                const data = res.data.data;
                setDishes(data);
            } catch (error) {
                console.log("Error", error);
            }
        };
        fecthData();
    }, []);

    return (
        <>
            <section className="menu" id="menu">
                <div className="container">
                    <div className="heading_section">
                        <h1 className="heading">POPULAR DISHES</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Fuga, iusto dolorem! Voluptatibus ipsum nam
                            mollitia architecto. Soluta pariatur eius et
                            recusandae veritatis. Quasi, et molestias!
                        </p>
                    </div>

                    <div className="dishes_container">
                        {dishes.map((el) => (
                            <div className="card" key={el._id}>
                                <img src={el.image} alt={el.title} />
                                <h3>{el.title}</h3>
                                <button>{el.category}</button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Menu;
