import '../styles/home.css';
import Navbar from '../components/Navbar';
import CardDisplay from './CardDisplay';
export default function Home(){
    return(
        <>
            <Navbar />
            <h1 className="heading">Home Page</h1>
            <CardDisplay />
        </>
    );
}