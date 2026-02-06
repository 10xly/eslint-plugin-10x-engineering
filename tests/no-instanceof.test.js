const { RuleTester } = require("eslint")
const rule = require("../lib/rules/no-instanceof")

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2021 }
})

ruleTester.run("no-instanceof", rule, {
  valid: [
    "const isInst = require(\"@10xly/is-instance-of\")(obj, Constructor)"
  ],
  invalid: [
    {
      code: "obj instanceof Array",
      errors: [{ messageId: "noInstanceof" }]
    }
  ]
})