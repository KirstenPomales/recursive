---
title: "How to Save Your Eliza Agent From New Telegram App Rules"
description: "Important updates about Telegram's new blockchain policies and how they affect Eliza agents"
date: "2025-01-22"
author: "kirsten-pomales"
coverImage: "/blog/images/eliza-telegram.png"
readingTime: 8
---

# New Telegram Mini App Rules Will Ban Most Eliza Agents on February 21st: How to Save Your Agent!

On January 21st Telegram announced strict new policies on Mini Apps that use blockchain technology, requiring exclusive integration with the TON blockchain. 

These policies are already in effect for new apps, and go into effect for existing apps on February 21st. 

This guide shows you how you can AVOID getting your Eliza Agent banned on Telegram.

TLDR: Your Eliza Agent needs to meet criteria to be classified as a "standard bot" and NOT a "Mini App" or "Mini App affiliated bot". 

Today, most Eliza agents that I've seen DO NOT classify as "standard bots" - meaning they will be impacted by the ban. 

As fellow Eliza devs, his is our public service announcement to our fellow agent builders. If you don't meet criteria by February 21st, Telegram moderators will disable your bot. Act now. Tell your friends. Save the agents!

## Key Points: Why The F*@# is Telegram Doing This?

It's obvious that Telegram is consolidating control over its ecosystem by restricting blockchain integrations to TON, similar to Apple's App Store strategy with payments. 

Why now? We belive this is a direct response to the recent popularity of Eliza agents. 

Aside from Eliza agent bots, there are very few Telegram Mini Apps that actually use other blockchains - that's because its very hard to integrate other blockchains into Telegram (need to send users to other wallets, bad UX, etc). 

In recent weeks, Eliza agents have made it incredibly easy to use non-TON blockchains within Telegram Mini Apps (Eliza agents holds keys, replacing the wallet).

While this policy protects Telegram's blockchain interests, it disrupts innovation by forcing developers to comply or risk bans...

![Telegram Ban Message](/blog/images/ban.jpeg)
*We got this message on February 21st.*

## What This Means for Eliza Developers

Under the new rules:

- Mini Apps **must use the TON blockchain** for all blockchain-related activity.
- Bots without Mini Apps are **exempt** from these restrictions.

This leaves two choices:

1. Convert your bot into a **regular bot** (no Mini App component).
2. Transition your Mini App to exclusively use TON blockchain.

For most Eliza developers, option 1 is the more practical route. 

[Read the Terms of Service for Bot Developers here.](https://telegram.org/tos/bot-developers)

[Read the new Blockchain Guidelines (summary of terms) here.](https://core.telegram.org/bots/blockchain-guidelines)

[Read the official TOS update announcement form TON here.](https://x.com/TON_Ventures/status/1881705636154765509)

## How to Update Your Agent to Avoid Telegram's Ban

### 1. **Determine If Your Bot Is a Mini App**
A Telegram bot may be classified as a Mini App or a Mini App-affiliated bot if it integrates certain features or functionalities, such as:

- **Web Apps Integration:** Utilizing Web Apps to provide interactive HTML5 interfaces within Telegram.
- **Attachment Menu Integration:** Incorporating the bot into Telegram's attachment menu, allowing users to access the bot's features directly from the attachment options.
- **Main Mini App Configuration:** Setting a Main Mini App that can be previewed and launched directly from a button in the bot's profile.

### 2. **Convert Mini Apps/Mini app affiliated bots to Regular Bots**
To have your bot be classified as a regular Telegram bot, take the following steps immediately:

1. **Avoid Web Apps Integration:** Refrain from implementing Web Apps that provide interactive HTML5 interfaces within your bot.
2. **Do Not Use Attachment Menu Integration:** Ensure your bot does not integrate into Telegram's attachment menu, which would allow users to access it directly from the attachment options.
3. **Refrain from Setting a Main Mini App:** Do not configure a Main Mini App that can be previewed and launched from your bot's profile.
4. **Comply with Bot Platform Terms:** Adhere to Telegram's Bot Platform Developer Terms of Service, ensuring your bot operates within the guidelines set for standard bots.

### 3. **If Retaining a Mini App, Switch to TON**

For developers determined to use Mini App functionality:

- **Migrate to the TON blockchain:** Reissue assets and rewrite smart contracts for TON.
- **Use the TON Connect SDK exclusively:** Remove any other wallet connection protocols.
- **Stop promoting non-TON wallets:** Rewards or promotions for connecting wallets from other blockchains are banned.

If you need help with this, our team has been building Telegram Mini Apps and Eliza agents for the past year. [Message us](https://t.me/hellokirsten).

### 4. **Act Immediately**

- New projects must comply now.
- Existing Mini Apps must migrate by **February 21, 2025**.

## Deadlines to Watch

- **January 21, 2025:** All new TON apps must adhere to TON-only rules under Clauses 7.1–7.4 of the Telegram TOS.
- **February 21, 2025:** Final deadline for existing Mini Apps to migrate to TON. Compliance enforcement begins.

## Final Thoughts

Telegram's new rules are an aggressive move to lock developers into its TON ecosystem. 

While this limits flexibility, Eliza developers can adapt by shifting to regular bots or adopting TON. 

The stakes are high: failure to comply will lead to bans and disruption.

Take action now—audit your bots, remove non-compliant features, and ensure your work aligns with these new policies.

If you need help, feel free to [Message me](https://t.me/hellokirsten). The Recursive team has experience building Telegram Mini Apps, Eliza Agents, and TON apps and we've got some strategies in the works for how to keep our agents(and yours) out of trouble. 