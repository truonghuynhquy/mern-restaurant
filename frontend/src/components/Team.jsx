import axios from "axios";
import { useEffect, useState } from "react";

const Team = () => {
    const [team, setTeam] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await axios.get(
                    "http://127.0.0.1:4000/api/v1/restApi/getTeam"
                );
                const data = res.data.data;
                setTeam(data);
            } catch (error) {
                console.log("Error", error);
            }
        })();
    }, []);

    return (
        <>
            <section className="team" id="team">
                <div className="container">
                    <div className="heading_section">
                        <h1 className="heading">OUR TEAM</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Fuga, iusto dolorem! Voluptatibus ipsum nam
                            mollitia architecto. Soluta pariatur eius et
                            recusandae veritatis. Quasi, et molestias!
                        </p>
                    </div>

                    <div className="team_container">
                        {team.map((el) => (
                            <div className="card" key={el._id}>
                                <img src={el.image} alt={el.name} />
                                <h3>{el.name}</h3>
                                <p>{el.designation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Team;
