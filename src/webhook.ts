import axios from "axios";
import { Context } from "semantic-release";
import {Webhook} from "./types/webhook";

type WebhookProperties = {
    url: string;
    message: Webhook
    logger: Context['logger'];
};

export async function callWebHook(properties: WebhookProperties) {
    properties.logger.log(`Sending webhook to "${properties.url}"`)
    try {
        await axios.post(properties.url, properties.message);
    } catch (e) {
        properties.logger.error("failed to send webhook: " + e);
    }
}