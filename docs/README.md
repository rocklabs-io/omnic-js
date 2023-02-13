# @rocklabs-io/omnic-js

Omnic is a crosschain messaging protocol, powered by the Internet Computer's threshold ECDSA and outbound http call features, we can build programmability into the message passing process.

And This SDK package Omnic-js provides support for your app using the bridge app.

## 📚 Documentation

Looking to get Omnic-js setup in your project? The Omnic docs are your best bet!

## 📋Table of contents

### Classes

- [OmnicQuery](classes/OmnicQuery.md)

### Namespaces

- [OmnicQuery](modules/OmnicQuery-1.md)

## 📥 Installation 

Omnic-js can be installed locally from our Github repository. To do so you're going to need a [personal access token](https://github.com/settings/tokens) with the following configurations:

- **repo**
- **read:packages**

Next, authenticate yourself via `npm login` command using your Github email for the **username** and the **personal access token** as your **password:**

```bash
npm login --registry=https://npm.pkg.github.com --scope=@rocklabs-io
```
And if you want to deploy with this package on web development framework like [Vercel](https://vercel.com). Remember to set token as `NPM_RC` following [Vercel Guides](https://vercel.com/guides/using-private-dependencies-with-vercel)'s instruction.

The last thing we’ve got to do before installing is set your npm configuration so that when you run `npm install @rocklabs-io/`, npm will pull from Github instead of its own registry.

To do this, **we have two options:**

1) Run the following command
```bash
npm config set @rocklabs-io:registry https://npm.pkg.github.com
```


2) Add a `.npmrc` file to your project's root directory and add the following line to the file:

```bash
@rocklabs-io:registry=https://npm.pkg.github.com
```

You're all set! Install icns-js into your project with the following command:

```bash
yarn add @rocklabs-io/icns-js
```

<br>