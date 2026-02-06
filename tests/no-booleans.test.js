const { RuleTester } = require("eslint")
const rule = require("../lib/rules/no-booleans")

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2021,
  },
})

ruleTester.run("no-booleans", rule, {
  valid: [
    "const x = require(\"true-value\")()",
    "const y = require(\"false-value\")()",
    "const z = \"true\"",
  ],
  invalid: [
    {
      code: "const x = true",
      errors: [{ messageId: "noBooleans" }],
      output: "const x = require(\"true-value\")()",
    },
    {
      code: "const y = false",
      errors: [{ messageId: "noBooleans" }],
      output: "const y = require(\"false-value\")()",
    },
    {
      code: "if (true) { console.log(\"hi\") }",
      errors: [{ messageId: "noBooleans" }],
      output: "if (require(\"true-value\")()) { console.log(\"hi\") }",
    },
  ],
})