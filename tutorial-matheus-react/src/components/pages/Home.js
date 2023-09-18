import { Link } from "react-router-dom";

const Home = () => {
    return ( 
        <section>
            <h1>Home</h1>
            <p>Ver todos os ususarios: <Link to="/alIusers">Clique aqui</Link></p>
        </section>
     );
}
 
export default Home;