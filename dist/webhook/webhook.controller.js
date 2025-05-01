"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookController = void 0;
const firebase_admin_1 = require("firebase-admin");
class WebhookController {
    static async listenToWebhook(req, res) {
        let event = req.body;
        console.log("Received event:", event.type);
        let plan = null;
        let uid = null;
        try {
            if (event.type === "customer.subscription.created") {
                const metadata = event.data.object.metadata;
                const planString = metadata.plan;
                uid = metadata.uid;
                plan = JSON.parse(planString);
                console.log(plan, "Plan selected");
                const expiresAt = new Date();
                expiresAt.setMonth(expiresAt.getMonth() + 1);
                const doc = (0, firebase_admin_1.firestore)().doc("users/" + uid);
                console.log(doc.get(), 'socc');
                if (plan) {
                    await doc.update({
                        plan: {
                            planId: plan.id,
                            startedAt: firebase_admin_1.firestore.Timestamp.now(),
                            expiresAt: expiresAt,
                            cost: plan.cost,
                            name: plan.name,
                            recipeCount: plan.recipeCount ?? null,
                        },
                    });
                    console.log("Plan changed successfully");
                }
            }
            res.status(200).send();
        }
        catch (error) {
            console.log("Error: ", error);
            res.status(500).send();
        }
    }
}
exports.WebhookController = WebhookController;
