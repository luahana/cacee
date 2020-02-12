// import Joi from 'joi';

const stripe = require('stripe')(process.env.STRIPE_TEST_SECRET_KEY);

export const pay = async ctx => {
  try {
    // Create the PaymentIntent
    let intent = await stripe.paymentIntents.create({
      amount: 1099,
      currency: 'cad',
      payment_method: ctx.request.body.payment_method_id,

      // A PaymentIntent can be confirmed some time after creation,
      // but here we want to confirm (collect payment) immediately.
      confirm: true,

      // If the payment requires any follow-up actions from the
      // customer, like two-factor authentication, Stripe will error
      // and you will need to prompt them for a new payment method.
      error_on_requires_action: true,
    });
    return generateResponse(ctx.response, intent);
  } catch (e) {
    console.log(e);
    if (e.type === 'StripeCardError') {
      // Display error on client
      ctx.response.body = { error: e.message };
      return;
    } else {
      // Something else happened
      ctx.response.statue = 500;
      ctx.response.body = { error: e.type };
      return;
    }
  }
};

function generateResponse(response, intent) {
  console.log(response);
  if (intent.status === 'succeeded') {
    // Handle post-payment fulfillment
    response.body = { success: true };
    return;
  } else {
    // Any other status would be unexpected, so error
    response.status = 500;
    response.body = { error: 'Unexpected status ' + intent.status };
    return;
  }
}
