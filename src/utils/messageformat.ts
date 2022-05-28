export function formatMessage(message: string): string {
    return message
        .replace("/\n\n/g", "\n");
}