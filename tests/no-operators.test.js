const { RuleTester } = require("eslint")
const rule = require("../lib/rules/no-operators")

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2021,
  },
})

ruleTester.run("no-operators", rule, {
  valid: [
    "let x = 10",
    "x++"
  ],
  invalid: [
    {
      code: "a == b",
      errors: [{ 
        message: "Operator '==' is not allowed. Use is-equal-to instead." 
      }]
    }
  ],
})