import React from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


export const Paypal = () => {


    return (
        <div className='w-full text-center'>
            <PayPalScriptProvider options={{ "client-id": "AYtbBnGVMeMdzLGAAxFqaGbXLcW3FD7ay2iyrbxQv3Y_rAPxjcsbH6IUuFq1sZG04siCRt3l8KLCuaah" }}>
                <PayPalButtons
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [
                                {
                                    amount: {
                                        value: "0.01",
                                    },
                                },
                            ],
                        });
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then((details) => {
                            const name = details.payer.name.given_name;
                            alert(`Transaction completed by ${name}`);
                        });
                    }}
                />
            </PayPalScriptProvider>
        </div>
    )
}
