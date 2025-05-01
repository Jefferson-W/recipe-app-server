"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accessSecret = void 0;
const secret_manager_1 = require("@google-cloud/secret-manager");
const client = new secret_manager_1.SecretManagerServiceClient();
async function accessSecret(secretName) {
    try {
        const [version] = await client.accessSecretVersion({ name: secretName });
        const payload = version.payload?.data?.toString();
        return payload;
    }
    catch (error) {
        console.error(`Failed to access secret: ${error.message}`);
    }
}
exports.accessSecret = accessSecret;
