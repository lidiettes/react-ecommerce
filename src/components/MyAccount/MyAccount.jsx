import React from 'react'

const MyAccount = () => {
    return (
        <>
            <input type="text" placeholder="name" name="name" className="name" />
            <input type="text" placeholder="lastName" name="lastName" className="lastName" />
            <input type="text" placeholder="email" name="email" className="email" />
            <input type="password" placeholder="password" name="password" className="passwd" />
            <button href="#" type="submit" className="btn btn-primary">Sign in</button>

            <div className="containerShipping">
                <form className="form" >
                    <h1>Shipping</h1>
                    <p>Please enter your shipping details.</p>
                    <div className="fields fields--2">
                        <label className="field">
                            <span className="field__label" >First name</span>
                            <input className="field__input" type="text" id="firstname" name="name" />

                        </label>
                        <label className="field">
                            <span className="field__label" >Last name</span>
                            <input className="field__input" type="text" id="lastname" name="lastName" />

                        </label>
                    </div>
                    <label className="field">
                        <span className="field__label" >Address</span>
                        <input className="field__input" type="text" id="address" name="address" />

                    </label>
                    <label className="field">
                        <span className="field__label" >Country</span>


                        <input className="field__input" type="text" id="country" name="country" />

                    </label>
                    <div className="fields fields--3">
                        <label className="field">
                            <span className="field__label" >Zip code</span>
                            <input className="field__input" type="number" id="zipcode" name="zipcode" />

                        </label>
                        <label className="field">
                            <span className="field__label" >City</span>
                            <input className="field__input" type="text" id="city" name="city" />

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

                    </label>
                    <label className="field">
                        <span className="field__label" >Name</span>
                        <input className="field__input" type="text" id="nameCard" name="nameCard" />

                    </label>
                    <div className="fields fields--2">
                        <label className="field">
                            <span className="field__label" >Date</span>
                            <input className="field__input" type="date" id="date" name="date" />

                        </label>
                        <label className="field">
                            <span className="field__label" >cvv</span>
                            <input className="field__input" type="number" id="cvv" name="cvv" />

                        </label>
                    </div>
                    <button className="buttonShipping" type="submit" >PAY</button>
                </form>
            </div>

        </>
    )
}

export default MyAccount