
import { useState } from 'react';
import '../ShippingForm/ShippingForm.css'

const ShippingForm = () => {

    const [firstName, setFirstName]= useState("");
    const [lastName, setLastName]=useState("")
    const [address, setAddress]= useState("");
    const [country, setCountry]=useState("");
    const [postalCode, setPostalCode] = useState("");
    const [city, setCity] = useState("");

    const validName = address.length > 0 ? true : false;
    const validLastName = lastName.length > 0 ? true : false;
    const validAddress = address.length > 0 ? true : false;
    const validCountry = country.length > 0 ? true : false;
    const validPostalCode = postalCode.length > 0 ? true : false;
    const validCity = city.length > 0 ? true : false;

    const inputCheck = (a, b, c, d, e, f ) => {
        const okay = (a && b && c && d && e && f) ? true : false;
        return okay;
    };

const enableButton = inputCheck (validName, validLastName, validAddress,validCountry, validPostalCode, validCity) ? "" : "true";


    return (
        <>
            <div className="container">
                <h1>Shipping</h1>
                <p>Please enter your shipping details.</p>
                
                <div className="form">

                    <div className="fields fields--2">
                        <label className="field">
                            <span className="field__label" >First name</span>
                            <input className="field__input" type="text" id="firstname" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                            <div className='invalid-feedback'>
                                Not valid
                            </div>
                        </label>
                        <label className="field">
                            <span className="field__label" >Last name</span>
                            <input className="field__input" type="text" id="lastname" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                            <div className='invalid-feedback'>
                                Not valid
                            </div>
                        </label>
                    </div>
                    <label className="field">
                        <span className="field__label" >Address</span>
                        <input className="field__input" type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                        <div className='invalid-feedback'>
                                Not valid
                            </div>
                    </label>
                    <label className="field">
                        <span className="field__label" >Country</span>
                        {/* <select className="field__input" id="country"> */}
                            {/* <option value=""></option> */}
                            {/* <option value={country} onChange={(e) => setCountry(e.target.value)} >Country</option> */}
                            <input className="field__input" type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} />

                            <div className='invalid-feedback'>
                                Not valid
                            </div>
                            
                        {/* </select> */}
                    </label>
                    <div className="fields fields--3">
                        <label className="field">
                            <span className="field__label" >Zip code</span>
                            <input className="field__input" type="number" id="zipcode" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                            <div className='invalid-feedback'>
                                Not valid
                            </div>
                        </label>
                        <label className="field">
                            <span className="field__label" >City</span>
                            <input className="field__input" type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                            <div className='invalid-feedback'>
                                Not valid
                            </div>
                        </label>
                        
                    </div>
                </div>
                
                    <button className="button" type="submit" onChange={(e) => enableButton(e.target.value)} >Continue</button>
            </div>

        </>
    )
}

export default ShippingForm