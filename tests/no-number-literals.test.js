const { RuleTester } = require("eslint")
const rule = require("../lib/rules/no-number-literals")

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2021,
  },
})

ruleTester.run("no-number-literals", rule, {
  valid: [
    "const x = require(\"@positive-numbers/five\")",
    "const y = require(\"@negative-numbers/ten\")",
    "const z = 101",
    "const a = -101",
  ],
  invalid: [
    {
      code: "const x = 5",
      errors: [{ messageId: "noNumberLiterals" }],
      output: "const x = require(\"@positive-numbers/five\")",
    },
    {
      code: "const y = -10",
      errors: [{ messageId: "noNumberLiterals" }],
      output: "const y = require(\"@negative-numbers/ten\")",
    },
    {
      code: "const z = 0",
      errors: [{ messageId: "noNumberLiterals" }],
      output: "const z = require(\"@positive-numbers/zero\")",
    },
    {
      code: "const a = 100",
      errors: [{ messageId: "noNumberLiterals" }],
      output: "const a = require(\"@positive-numbers/one-hundred\")",
    },
  ],
})