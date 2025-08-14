import React from 'react'
import {PayPalButtons , PayPalScriptProvider} from "@paypal/react-paypal-js"

const PaypalButton = ({amount, onSuccess, onError}) => {
  return (
    <PayPalScriptProvider options={{ "client-id": "AT0ini9QiZEwg3u7P0AI-lAt3tHHEUPB9oPq4ke2gNDIRXAN2akNp79e8RJD0g-Do_3dYFucZH1s2HeY" }}>
        <PayPalButtons style={{ layout: 'vertical' }}
            createOrder={(data, actions) => {
                return actions.order.create({
                    purchase_units: [{
                        amount:{value:amount}
                    }]
                })
            }}
            onApprove={async (data, actions) => {
                return actions.order.capture().then(onSuccess)

            }}
            onError={onError}
            />

    </PayPalScriptProvider>
    )
}

export default PaypalButton