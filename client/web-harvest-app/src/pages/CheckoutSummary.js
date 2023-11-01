import NavbarCheckout from "../components/NavbarCheckout";
import { useNavigate } from "react-router-dom";
export default function CheckoutSummary() {
    const navigate = useNavigate();
    return(<>
        <NavbarCheckout />
        <button onClick={ () => {navigate('/payment')}}>Proceed to Pay</button>
        </>

    );
}