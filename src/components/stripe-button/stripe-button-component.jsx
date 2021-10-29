import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JptNWImQzFKKCfMEBM20vggvnh6TBgwBXyrOY0mYak8CU10xm7z5tJl49lU4Qyqb1ctKZuFmhLAE852eQsISzvX00ilGuBaq9";

  const onToken = (token) => {
    console.log(token);
    alert("Pagación correcta LOL");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="VIDEOLOL"
      billingAddress
      shippingAddress
      image="https://i.ibb.co/wypZ4TG/vhs.png"
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
