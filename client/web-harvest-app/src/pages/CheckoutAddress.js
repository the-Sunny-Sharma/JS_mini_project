import NavbarCheckout from "../components/NavbarCheckout";
import { useState } from "react";

export default function CheckoutAddress() {
    const iframeStyle = {
        width: "425px",
        height: "350px",
        border: "1px solid black",
    };

    const [userLocation, setUserLocation] = useState(null);

    const handleSelectLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setUserLocation({ latitude, longitude });

                // Update the iframe URL with the new coordinates
                const iframe = document.getElementById("mapFrame");
                const newURL = `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.002}%2C${latitude - 0.002}%2C${longitude + 0.002}%2C${latitude + 0.002}&amp;layer=mapnik&amp;marker=${latitude}%2C${longitude}`;
                iframe.src = newURL;
            });
        }
    };

    return (
        <>
            <NavbarCheckout />
            <div className="co-add-wrapper">
                <iframe
                    id="mapFrame"
                    width="425"
                    height="350"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=72.81532287597658%2C19.05157140646745%2C72.89566040039064%2C19.103486043929642&amp;layer=mapnik&amp;marker=19.077530758700785%2C72.8554916381836"
                    style={iframeStyle}
                ></iframe>
                <br />
                <button onClick={handleSelectLocation}>Select My Current Location</button>
                {userLocation && (
                    <div>
                        Latitude: {userLocation.latitude}, Longitude: {userLocation.longitude}
                    </div>
                )}
            </div>
        </>
    );
}
