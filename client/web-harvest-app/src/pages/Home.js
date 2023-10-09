import '../styles/home.css';
import Navbar from '../components/Navbar';
import HCards from './HCards';
import Footer from '../components/Footer';

export default function Home(){
    return(
        <>
            <Navbar />
            <div className='main-home'>
                <div className='nav-section'>
                    <div className='search-section'>
                        <form>
                            <div className='search-bar'>
                                <input type='text' placeholder='Search fresh. Eat Fresh.' />
                            </div>
                            <div className='search-sym'>
                            <input class="search-sym" type="submit" aria-label=""/>
                            </div>
                        </form>
                    </div>
                </div>
                <HCards />
            </div>
            <div>
            <Footer />
            </div>
        </>
    );
}