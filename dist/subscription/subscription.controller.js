"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionController = void 0;
const stripe_1 = require("stripe");
const secretManager_1 = require("../utils/secretManager");
const secretName = 'projects/315650529779/secrets/stripe-secret-key/versions/latest';
let stripe;
(async () => {
    const stripeSecret = await (0, secretManager_1.accessSecret)(secretName);
    stripe = new stripe_1.Stripe(stripeSecret);
})();
class SubscriptionController {
    static async createSubscription(req, res) {
        const origin = req.get("origin") || req.get("referer");
        const successUrl = `${origin}/plans/thank-you`;
        const cancelUrl = `${origin}/plans`;
        const { plan } = req.body;
        console.log(plan, 'plan');
        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            line_items: [
                {
                    price: plan.priceId,
                    quantity: 1,
                },
            ],
            subscription_data: {
                metadata: {
                    plan: JSON.stringify(plan),
                    uid: req.uid
                },
            },
            success_url: successUrl,
            cancel_url: cancelUrl,
        });
        res.json({ url: session.url });
    }
}
exports.SubscriptionController = SubscriptionController;
