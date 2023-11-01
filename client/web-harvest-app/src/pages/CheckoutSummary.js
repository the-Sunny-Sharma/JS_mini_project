import CardItemCO from "../components/CartItemCO";
import NavbarCheckout from "../components/NavbarCheckout";
import { useNavigate } from "react-router-dom";
import '../styles/carditemco.css';

export default function CheckoutSummary() {
    const navigate = useNavigate();
    return(<>
        <NavbarCheckout />
        <CardItemCO />
        <button className="checkout-btn co-pp" onClick={ () => {navigate('/payment')}}>Proceed to Pay</button>
        </>

    );
}