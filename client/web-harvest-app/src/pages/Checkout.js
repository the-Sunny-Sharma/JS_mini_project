const printRec = () => {
    window.print();
}

export default function Checkout(){
    return(
        <>
        <p>Checkout</p>
        <p>{localStorage.getItem('NoItems')}</p>
        <p>₹ {localStorage.getItem('TotalBill')}</p>
        <button onClick={printRec}>Print Receipt</button>
        </>
    );
}