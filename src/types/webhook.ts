import { Embed } from "./embed"

export interface Webhook {
    username?: string,
    content?: string,
    avatar_url?: string,
    embeds?: Embed[]
}