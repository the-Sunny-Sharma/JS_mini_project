import NavbarCheckout from "../components/NavbarCheckout";
import { useNavigate } from "react-router-dom";
export default function CheckoutPayment() {
    const navigate = useNavigate();
    return(<>
        <NavbarCheckout />
        <p>CAsh on Delhivery</p>
        <button onClick={ () => {navigate('/')}}>PAY</button>
        </>

    );
}