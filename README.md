<a href="https://github.com/typescript-package">
  <img
    src="https://avatars.githubusercontent.com/u/189665258?s=150&u=712e292bae048947d1f7d2020d7d38875c40e63a&v=4"
    title="@angular.x/project - An Angular library for layout."
  />
</a>

## @angular.x/layout

<!-- npm badge -->
[![npm version][angular.x-npm-badge-svg]][angular.x-npm-badge]
[![GitHub issues][angular.x-badge-issues]][angular.x-issues]
[![GitHub license][angular.x-badge-license]][angular.x-license]

An **Angular** library for layout.

## Features

- Named layout regions: left, right, top, bottom, center
- Sidebar and panel components that can be shown, hidden, or collapsed
- Supports both full DOM removal and visual hiding via CSS
- Works seamlessly with Angular’s inputs, outputs, and content projection
- Designed for dashboard, admin, or enterprise-style applications

## Table of contents

- [Installation](#installation)
- [Api](#api)
  - Component
    - [`Component`](#component)
  - Service
    - [`Service`](#service)
- [Contributing](#contributing)
- [Support](#support)
- [Code of Conduct](#code-of-conduct)
- [Git](#git)
  - [Commit](#commit)
  - [Versioning](#versioning)
- [License](#license)

## Installation

```bash
npm install @angular.x/project --save-peer
```

## Api

```typescript
import {
  // Component.
  Component,
  // Service.
  Service
} from '@angular.x/project';
```

### Component

### `Component`

```typescript
import { Component } from '@angular.x/project';
```

### Service

### `Service`

```typescript
import { Service } from '@angular.x/project';
```

## Contributing

Your contributions are valued! If you'd like to contribute, please feel free to submit a pull request. Help is always appreciated.

## Support

If you find this package useful and would like to support its and general development, you can contribute through one of the following payment methods. Your support helps maintain the packages and continue adding new.

Support via:

- [Stripe](https://donate.stripe.com/dR614hfDZcJE3wAcMM)
- [Revolut](https://checkout.revolut.com/pay/048b10a3-0e10-42c8-a917-e3e9cb4c8e29)
- [GitHub](https://github.com/sponsors/angular-package/sponsorships?sponsor=sciborrudnicki&tier_id=83618)
- [DonorBox](https://donorbox.org/become-a-sponsor-to-the-angular-package?default_interval=o)
- [Patreon](https://www.patreon.com/checkout/angularpackage?rid=0&fan_landing=true&view_as=public)

or via Trust Wallet

- [XLM](https://link.trustwallet.com/send?coin=148&address=GAFFFB7H3LG42O6JA63FJDRK4PP4JCNEOPHLGLLFH625X2KFYQ4UYVM4)
- [USDT (BEP20)](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94&token_id=0x55d398326f99059fF775485246999027B3197955)
- [ETH](https://link.trustwallet.com/send?coin=60&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)
- [BTC](https://link.trustwallet.com/send?coin=0&address=bc1qnf709336tfl57ta5mfkf4t9fndhx7agxvv9svn)
- [BNB](https://link.trustwallet.com/send?coin=20000714&address=0xA0c22A2bc7E37C1d5992dFDFFeD5E6f9298E1b94)

Thanks for your support!

## Code of Conduct

By participating in this project, you agree to follow **[Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/)**.

## GIT

### Commit

- [AngularJS Git Commit Message Conventions][git-commit-angular]
- [Karma Git Commit Msg][git-commit-karma]
- [Conventional Commits][git-commit-conventional]

### Versioning

[Semantic Versioning 2.0.0][git-semver]

**Given a version number MAJOR.MINOR.PATCH, increment the:**

- MAJOR version when you make incompatible API changes,
- MINOR version when you add functionality in a backwards-compatible manner, and
- PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

**FAQ**
How should I deal with revisions in the 0.y.z initial development phase?

> The simplest thing to do is start your initial development release at 0.1.0 and then increment the minor version for each subsequent release.

How do I know when to release 1.0.0?

> If your software is being used in production, it should probably already be 1.0.0. If you have a stable API on which users have come to depend, you should be 1.0.0. If you’re worrying a lot about backwards compatibility, you should probably already be 1.0.0.

## License

MIT © angular.x ([license][angular.x-license])


<!-- This package: angular.x  -->
  <!-- GitHub: badges -->
  [angular.x-badge-issues]: https://img.shields.io/github/issues/angular.x/project
  [angular.x-badge-forks]: https://img.shields.io/github/forks/angular.x/project
  [angular.x-badge-stars]: https://img.shields.io/github/stars/angular.x/project
  [angular.x-badge-license]: https://img.shields.io/github/license/angular.x/project
  <!-- GitHub: badges links -->
  [angular.x-issues]: https://github.com/angular.x/project/issues
  [angular.x-forks]: https://github.com/angular.x/project/network
  [angular.x-license]: https://github.com/angular.x/project/blob/master/LICENSE
  [angular.x-stars]: https://github.com/angular.x/project/stargazers
<!-- This package -->

<!-- Package: angular.x -->
  <!-- npm -->
  [angular.x-npm-badge-svg]: https://badge.fury.io/js/@angular.x%2Fproject.svg
  [angular.x-npm-badge]: https://badge.fury.io/js/@angular.x%2Fproject

<!-- GIT -->
[git-semver]: http://semver.org/

<!-- GIT: commit -->
[git-commit-angular]: https://gist.github.com/stephenparish/9941e89d80e2bc58a153
[git-commit-karma]: http://karma-runner.github.io/0.10/dev/git-commit-msg.html
[git-commit-conventional]: https://www.conventionalcommits.org/en/v1.0.0/
