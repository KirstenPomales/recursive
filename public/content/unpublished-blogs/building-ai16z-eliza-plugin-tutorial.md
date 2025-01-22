---
title: "How to Build an ai16z Eliza Plugin: A Step-by-Step Guide"
description: "The Eliza AI agent framework is known for it's highly extensible plugin system. Learn how to build Eliza Plugins."
date: "2024-03-21"
author: "kirsten-pomales"
coverImage: "/blog/images/your-cover-image.png"
readingTime: 5
---

**Eliza**, the now leading on-chain AI agent framework by ai16z, empowers developers to build innovative, decentralized applications. One of the reason it's so popular amongst the ai agent developer community is it's highly extensible plugin system. Any developer can ship plugins that help Eliza agents connect to and interact with third party data sources, apps, blockchains, and more. This enables rapid integration of diverse features and tools.

In this guide, we’ll cover what Eliza and its plugins are and provide a detailed walkthrough for building and sharing your first Eliza plugin with the community.

## What Is Eliza?

Eliza is "the Next.js of AI agents", designed to simplify building and deploying Web3 native AI agents. By abstracting away many complexities of blockchain integrations and traditional agent development, Eliza allows developers to focus on building great user experiences.

Eliza is an open-source movement, and the diverse ecosystem of plugins being developed today is a testiment to that. Want to be part of the movement? A great way to get involved is to build a plugin that adds value for other developers!

[Learn more about Eliza here.](https://elizaos.github.io/eliza/) 

### What Are Eliza Plugins?

[Eliza Plugins](https://elizaos.github.io/eliza/docs/packages/plugins/)  are modular extensions that enhance the core capabilities of the platform. They enable custom functionality for tasks like:

-   **Data analysis:** Fetching and processing blockchain or off-chain data.
    
-   **User interactions:** Adding conversational or interactive features.
    
-   **Automation:** Streamlining repetitive tasks like transaction batching or notifications.
  

Plugins are easy to develop, distribute, and integrate, making them a powerful way to expand the ecosystem’s capabilities.

## Types of Plugins You Can Build

Plugins are designed to give Eliza agents capabilities and info they wouldn't have otherwise. We see two categories of plugins that are being launched today. 

1.  **API wrappers:** Wrap any of your favorite APIs in a plugin to allow any Eliza based agents access to their datapoints and write capabilities.
    
2.  **Chain-specific plugins:** Allow Eliza agents to do transactions and pull data from a specific blockchain.
    
Have an idea for a plugin? Why not launch it for the good of the whole ai agent developer community!

----------

## 6 Things To Know ABout Eliza Plugin Development

**PSA: The code examples included in this blog are relevant for Eliza V1 as of early January. The Eliza Framework iterates fast! If you are having trouble with the examples, [message me](https://t.me/hellokirsten).**

The following 6 steps are the basis of developing an Eliza plugin. Later in this article, we'll go over an example project and build it together, following these steps.

### 1. **Defining the Plugin Interface**

To start, every plugin must implement the `Plugin` interface. This includes specifying a unique `name`, a brief `description`, and optionally arrays of `actions`, `evaluators`, `providers`, and `services`.

```typescript
interface Plugin {
  name: string; // Unique identifier for the plugin
  description: string; // Brief description of plugin functionality
  actions?: Action[]; // Custom actions provided by the plugin
  evaluators?: Evaluator[]; // Custom evaluators for behavior assessment
  providers?: Provider[]; // Context providers for message generation
  services?: Service[]; // Additional services (optional)
}
```

### 2. **Implementing Custom Actions**

Actions are specific tasks your agent can perform. They include a `name`, alternative names (`similes`), a `description`, a `validate` function to check when the action is applicable, and a `handler` function to execute the task.

```typescript
const myAction: Action = {
  name: "MY_ACTION",
  similes: ["SIMILAR_ACTION", "ALTERNATE_NAME"],
  description: "Description of what the action does",
  validate: async (runtime: IAgentRuntime, message: Memory) => {
    // Validation logic to determine if the action should run
    return true;
  },
  handler: async (runtime: IAgentRuntime, message: Memory, state: State, options: any, callback?: HandlerCallback) => {
    // Action execution logic
  },
};
```

### 3. **Adding Custom Evaluators**

Evaluators assess messages and guide the behavior of your agent. Each evaluator includes a `name`, alternative names (`similes`), an optional `alwaysRun` flag, a `validate` function, and a `handler` function.

```typescript
const myEvaluator: Evaluator = {
  name: "MY_EVALUATOR",
  similes: ["SIMILAR_EVALUATOR"],
  alwaysRun: false, // Set to true if it should run on every message
  validate: async (runtime: IAgentRuntime, message: Memory) => {
    // Logic to determine if the evaluator should run
    return true;
  },
  handler: async (runtime: IAgentRuntime, message: Memory) => {
    // Evaluation logic
  },
};
```

### 4. **Creating Context Providers**

Providers supply contextual information to the agent. Each provider includes a `name` and a `get` function to retrieve and return the necessary context.

```typescript
const myProvider: Provider = {
  name: "MY_PROVIDER",
  get: async (runtime: IAgentRuntime, message: Memory) => {
    // Logic to retrieve and return context information
    return "Context information";
  },
};
```

### 5. **Assembling the Plugin**

Now it’s time to combine your custom actions, evaluators, and providers into a single plugin object.

```typescript
const myPlugin: Plugin = {
  name: "my-plugin",
  description: "A plugin that provides custom actions, evaluators, and providers.",
  actions: [myAction],
  evaluators: [myEvaluator],
  providers: [myProvider],
};
```

### 6. **Registering Your Plugin**

Finally, integrate your plugin into the agent's configuration to activate its functionalities.

```typescript
import { myPlugin } from "./path-to-my-plugin";

const character = {
  // ... other character configuration
  plugins: [myPlugin],
};
```


----------

## Tutorial: Build a Simple Plugin to Fetch Token Price Data Using CoinGecko

In this tutorial, we’ll walk through creating a simple plugin for Eliza that fetches the price of the token $BITCOIN from the CoinGecko API. The plugin will include an action that queries the API and provides the result as a response. This response can then be used by agents for whatever purpouses like informing automated trades, giving recommendations, and more.

### Step 1: **Set Up Your Development Environment**

Before starting, ensure you have the following:

1. **Eliza framework** installed and set up in your project.
2. A working **Node.js** environment.
3. Access to the CoinGecko API documentation for reference: [CoinGecko API Reference](https://docs.coingecko.com/reference/endpoint-overview).


### Step 2: **Define the Plugin Interface**

Create a new file for your plugin, for example, `bitcoinPricePlugin.ts`, and define the basic structure.

```typescript
import { Plugin, Action } from "eliza-framework";

const bitcoinPricePlugin: Plugin = {
  name: "bitcoin-price-plugin",
  description: "Fetches the current price of $BITCOIN from CoinGecko.",
  actions: [],
};

export default bitcoinPricePlugin;
```


### Step 3: **Add an Action to Fetch the $BITCOIN Price**

We’ll use the CoinGecko `/simple/price` endpoint to fetch the current price of $BITCOIN in USD. The action will query this endpoint and return the price.

#### Action Implementation

```typescript
import axios from "axios";

const fetchBitcoinPriceAction: Action = {
  name: "FETCH_BITCOIN_PRICE",
  description: "Fetches the current price of $BITCOIN from CoinGecko.",
  validate: async (runtime, message) => {
    // Validate if the action should run
    return message.content.toLowerCase().includes("bitcoin price");
  },
  handler: async (runtime, message, state) => {
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price",
        {
          params: {
            ids: "bitcoin",
            vs_currencies: "usd",
          },
        }
      );

      const price = response.data.bitcoin.usd;
      return {
        reply: `The current price of $BITCOIN is $${price.toFixed(2)} USD.`,
      };
    } catch (error) {
      console.error("Error fetching Bitcoin price:", error);
      return {
        reply: "Sorry, I couldn't fetch the Bitcoin price at the moment.",
      };
    }
  },
};
```


### Step 4: **Integrate the Action Into the Plugin**

Add the `fetchBitcoinPriceAction` to the `actions` array in the plugin.

```typescript
const bitcoinPricePlugin: Plugin = {
  name: "bitcoin-price-plugin",
  description: "Fetches the current price of $BITCOIN from CoinGecko.",
  actions: [fetchBitcoinPriceAction],
};
```


### Step 5: **Register the Plugin in Your Eliza Configuration**

Integrate the plugin into your Eliza character configuration.

```typescript
import bitcoinPricePlugin from "./bitcoinPricePlugin";

const character = {
  // Other configuration options...
  plugins: [bitcoinPricePlugin],
};
```


### Step 6: **Test Your Plugin**

Run your Eliza application and try asking:

```
What is the current price of Bitcoin?
```

The plugin should respond with the current price of $BITCOIN in USD, e.g.:

```
The current price of $BITCOIN is $0.1982 USD.
```

### Step 7: **Promote Your Plugin**
Share your plugin with the community on forums, GitHub, or social media.

[ai16z X Profile](https://x.com/ai16zdao)

[ai16z Discord](https://discord.com/invite/ai16z)

----------

## Time to Build Your Plugin!

Eliza plugins open a world of possibilities for enhancing on-chain agents and their capabilities. By following this guide, you can create and share impactful tools, contributing to the growth of the Eliza ecosystem.

Whether it’s simplifying user interactions or automating complex workflows, your plugin could be the next big thing. Start building today, and don't forget to share your work with other ai agent developers!