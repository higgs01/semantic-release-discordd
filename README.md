# semantic-release-discord
> :warning: this project istn't maintained anymore
![](https://img.shields.io/npm/l/@higgs01dev/semantic-release-discord)
[![](https://img.shields.io/npm/v/@higgs01dev/semantic-release-discord)](https://www.npmjs.com/package/@higgs01dev/semantic-release-discord)
![](https://img.shields.io/bundlephobia/min/@higgs01dev/semantic-release-discord)
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

### Parameters
|name|env|description|
|---|---|---|
|webhook|SEMANTIC_RELEASE_DISCORD_URL|webhook url|
|packageName|SEMANTIC_RELEASE_PACKAGE|name of the package|
|username|-|Username for the webhook|
