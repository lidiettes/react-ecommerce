
import { useState } from 'react';
import '../ShippingForm/ShippingForm.css'
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext/UserContext';
import Total from '../Total/Total';
import { useNavigate } from 'react-router-dom';


const ShippingForm = () => {

    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate();

    const getAddress = (e) => {
        e.preventDefault();

        const newOrder = {
            id: new Date().getTime(),
            idUser: user.id,
            name: user.name,
            lastName: user.lastName,
            address: e.target.address.value,
            country: e.target.country.value,
            zipcode: e.target.zipcode.value,
            city: e.target.city.value,
            numberCard: e.target.numberCard.value,
            nameCard:e.target.nameCard.value,
            date: e.target.date.value,
            cvv:  e.target.cvv.value
        }

        
        fetch("http://localhost:3000/orders", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        }).then(res => res.json())
            .then(data => console.log(data))
            .catch(error => console.log(error));
        setUser(newOrder); 
        navigate("/thankyou");
    }

    // }

    return (
        <>
            <div className="container">
            <Total />
                
                <form className="form" onSubmit={(e)=>{getAddress(e)}}>
                <h1>Shipping</h1>
                <p>Please enter your shipping details.</p>
                    <div className="fields fields--2">
                        <label className="field">
                            <span className="field__label" >First name</span>
                            <input className="field__input" type="text" id="firstname" name="name" />
                            {/* <div className='invalid-feedback'>
                                Not valid
                            </div> */}
                        </label>
                        <label className="field">
                            <span className="field__label" >Last name</span>
                            <input className="field__input" type="text" id="lastname" name="lastName" />
                            {/* <div className='invalid-feedback'>
                                Not valid
                            </div> */}
                        </label>
                    </div>
                    <label className="field">
                        <span className="field__label" >Address</span>
                        <input className="field__input" type="text" id="address" name="address" />
                        {/* <div className='invalid-feedback'>
                                Not valid
                        </div> */}
                    </label>
                    <label className="field">
                        <span className="field__label" >Country</span>
                        {/* <select className="field__input" id="country"> */}
                        {/* <option value=""></option> */}
                        {/* <option value={country} onChange={(e) => setCountry(e.target.value)} >Country</option> */}
                        <input className="field__input" type="text" id="country" name="country" />

                        {/* <div className='invalid-feedback'>
                                Not valid
                            </div> */}

                        {/* </select> */}
                    </label>
                    <div className="fields fields--3">
                        <label className="field">
                            <span className="field__label" >Zip code</span>
                            <input className="field__input" type="number" id="zipcode" name="zipcode" />
                            {/* <div className='invalid-feedback'>
                                Not valid
                            </div> */}
                        </label>
                        <label className="field">
                            <span className="field__label" >City</span>
                            <input className="field__input" type="text" id="city" name="city" />
                            {/* <div className='invalid-feedback'>
                                Not valid
                            </div> */}
                        </label>

                    </div>
                    <hr></hr>
                    <h1>Payment</h1>
                    
                    <p>Please enter your payment details.</p>
                    <div>
                    <i className="fa fa-cc-visa fa-2x cartNav" aria-hidden="true"></i>
                    <i className="fa fa-cc-mastercard fa-2x cartNav" aria-hidden="true"></i>
                    <i className="fa fa-cc-paypal fa-2x cartNav" aria-hidden="true"></i>
                    </div>
                    <label className="field">
                        <span className="field__label" >Number Card</span>
                        <input className="field__input" type="number" id="numberCard" name="numberCard" />
                        {/* <div className='invalid-feedback'>
                                Not valid
                        </div> */}
                    </label>
                    <label className="field">
                        <span className="field__label" >Name</span>
                        <input className="field__input" type="text" id="nameCard" name="nameCard" />
                        {/* <div className='invalid-feedback'>
                                Not valid
                        </div> */}
                    </label>
                    <div className="fields fields--2">
                    <label className="field">
                            <span className="field__label" >Date</span>
                            <input className="field__input" type="date" id="date" name="date" />
                            {/* <div className='invalid-feedback'>
                                Not valid
                            </div> */}
                        </label>
                        <label className="field">
                            <span className="field__label" >cvv</span>
                            <input className="field__input" type="number" id="cvv" name="cvv" />
                            {/* <div className='invalid-feedback'>
                                Not valid
                            </div> */}
                        </label>
                        </div>
                        <button className="buttonShipping" type="submit" >PAY</button>
                </form>

                
            </div>

        </>
    )
}


//     const [firstName, setFirstName]= useState("");
//     const [lastName, setLastName]=useState("")
//     const [address, setAddress]= useState("");
//     const [country, setCountry]=useState("");
//     const [postalCode, setPostalCode] = useState("");
//     const [city, setCity] = useState("");

//     const validName = address.length > 0 ? true : false;
//     const validLastName = lastName.length > 0 ? true : false;
//     const validAddress = address.length > 0 ? true : false;
//     const validCountry = country.length > 0 ? true : false;
//     const validPostalCode = postalCode.length > 0 ? true : false;
//     const validCity = city.length > 0 ? true : false;

//     const inputCheck = (a, b, c, d, e, f ) => {
//         const okay = (a && b && c && d && e && f) ? true : false;
//         return okay;
//     };

// const enableButton = inputCheck (validName, validLastName, validAddress,validCountry, validPostalCode, validCity) ? "" : "true";


export default ShippingForm