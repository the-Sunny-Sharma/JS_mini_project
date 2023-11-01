import NavbarCheckout from "../components/NavbarCheckout";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CheckoutAddress() {
    const nav = useNavigate();
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
        const newURL = `https://www.openstreetmap.org/export/embed.html?bbox=${
          longitude - 0.002
        }%2C${latitude - 0.002}%2C${longitude + 0.002}%2C${
          latitude + 0.002
        }&amp;layer=mapnik&amp;marker=${latitude}%2C${longitude}`;
        iframe.src = newURL;
      });
    }
  };
  // Initialize a state variable to hold the selected value
  const [selectedValue, setSelectedValue] = useState("option1"); // Default selection

  // Handle changes in the radio button selection
  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const [fullName, setFullName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // You can process the form data here (e.g., send it to a server)
    console.log("Form data submitted:", {
      fullName,
      streetAddress,
      city,
      state,
      zipCode,
    });
  };

  const clearData = () => {
    setFullName("");
    setStreetAddress("");
    setCity("");
    setState("");
    setZipCode("");
    return;
  }
  return (
    <>
      <NavbarCheckout />
      <div className="co-add-wrapper">
        <h2>Address</h2>
        <div onChange={handleRadioChange}>
          <label>
            <input
              type="radio"
              value="option1"
              checked={selectedValue === "option1"}
              onChange={handleRadioChange}
            />
            Use my Current Location
          </label>
          <br />
          <label>
            <input
              type="radio"
              value="option2"
              checked={selectedValue === "option2"}
              onChange={handleRadioChange}
            />
            Enter the Address Manually
          </label>
        </div>
        {selectedValue === "option1" && (
          <div className="pinAdd">
            <iframe
              id="mapFrame"
              width="425"
              height="350"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.81532287597658%2C19.05157140646745%2C72.89566040039064%2C19.103486043929642&amp;layer=mapnik&amp;marker=19.077530758700785%2C72.8554916381836"
              style={iframeStyle}
            ></iframe>
            <br />
            <button onClick={handleSelectLocation}>
              Select My Current Location
            </button>
            {userLocation && (
              <div>
                Latitude: {userLocation.latitude}, Longitude:{" "}
                {userLocation.longitude}
              </div>
            )}
          </div>
        )}
        {selectedValue === "option2" && (
          <diV className="typeAdd">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="fullName">Full Name:</label>
                <input
                  type="text"
                  id="fullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="streetAddress">Street Address:</label>
                <input
                  type="text"
                  id="streetAddress"
                  value={streetAddress}
                  onChange={(e) => setStreetAddress(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="city">City:</label>
                <input
                  type="text"
                  id="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="state">State:</label>
                <input
                  type="text"
                  id="state"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="zipCode">Zip Code:</label>
                <input
                  type="text"
                  id="zipCode"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  required
                />
              </div>
              <div>
                <button type="submit">Submit</button>
                <button onClick={clearData}>Clear</button>
              </div>
            </form>
          </diV>
        )}

        <button onClick={(e) => nav('/ordersummary')}>NEXT</button>
      </div>
    </>
  );
}
