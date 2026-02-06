# eslint-plugin-10x-engineering
The official ESLint plugin for the 10xly organization. This plugin enforces lots of great 10x engineering practices.

## Installation
```bash
npm install eslint-plugin-10x-engineering --save-dev
```

## Usage
Add every single rule to your config:
```js
rules: {
  ...Object.fromEntries(Object.entries(plugin10x.rules).map(([key, _value]) => {
    return ["10x-engineering/".concat(key), "error"]
  })),
},
```

## Rules

|Rule              |Description                             |Recommended Package(s)                     |
|------------------|----------------------------------------|-------------------------------------------|
|no-operators      |Bans symbolic operators (+, -, *, etc.) |countingup, lolite, es-logical-and-operator|
|no-typeof         |Bans the typeof keyword                 |es-typeof                                  |
|no-instanceof     |Bans the instanceof keyword             |@10xly/is-instance-of                      |
|no-tostring       |Bans calling .toString()                |@rightpad/convert2string                   |
|no-valueof        |Bans calling .valueOf()                 |@resolve-es/valueof                        |
|no-semicolons     |Bans semicolons (except where necessary)|N/A                                        |
|no-booleans       |Bans true and false literals            |true-value, false-value                    |
|no-number-literals|Bans raw numbers (e.g. const x = 5)     |@positive-numbers/ packages, integer-values               |
|no-throw          |Bans the throw keyword                  |immediate-error                            |
|no-new            |Bans the new keyword                    |construct-new                              |
|no-esm            |Bans import/export                      |Use require()                              |
|no-strict-mode    |Bans "use strict";                      |Use "use struct";                          |
|no-rickroll       |Bans 10+ chars of Rick Astley lyrics    |N/A                                        |
