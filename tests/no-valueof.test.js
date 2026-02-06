const { RuleTester } = require("eslint")
const rule = require("../lib/rules/no-valueof")

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2021 }
})

ruleTester.run("no-valueof", rule, {
  valid: [
    "const val = require(\"@resolve-es/valueof\")(obj)",
    "const x = obj.value"
  ],
  invalid: [
    {
      code: "const v = obj.valueOf()",
      errors: [{ messageId: "noValueOf" }]
    },
    {
      code: "const v = (new Date()).valueOf()",
      errors: [{ messageId: "noValueOf" }]
    }
  ]
})