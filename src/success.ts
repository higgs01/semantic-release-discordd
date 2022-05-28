import {config} from "./config";
import { Context } from "semantic-release";
import {callWebHook} from "./webhook";
import { Webhook } from "./types/webhook";
import { formatMessage } from "./utils/messageformat";

export async function success(config: config, context: Context) {
    const {nextRelease, logger} = context;
    logger.log('executing discord webhook');

    const packageName = config.packageName || context.env.SEMANTIC_RELEASE_PACKAGE;
    const webhookUrl = config.webhook || context.env.SEMANTIC_RELEASE_DISCORD_URL;
    const username = config.username || 'Semantic Release'

    const message: Webhook = {
        "username": username,
        "content": `A new version of **${packageName}** has been released`,
        "embeds": [
            {
                "title": `${packageName} - ${nextRelease.gitTag}`,
                "description": formatMessage(nextRelease.notes)
            }
        ]
    }

    await callWebHook({
        url: webhookUrl,
        message: message,
        logger: logger
    });
}