# semantic-release-discord
## Usage
```json
{
  "plugins": [
    "@semantic-release/release-notes-generator",
    [
      "@higgs01dev/semantic-release-discord",
      {
        "webhook": "https://discord.com/api/webhooks/...",
        "packageName": "some package"
      }
    ]
  ]
}
```
