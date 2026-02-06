const { RuleTester } = require("eslint")
const rule = require("../lib/rules/no-typeof")

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2021 }
})

ruleTester.run("no-typeof", rule, {
  valid: [
    "const type = require(\"es-typeof\")(item)"
  ],
  invalid: [
    {
      code: "typeof x",
      errors: [{ messageId: "noTypeof" }]
    },
    {
      code: "if (typeof y === \"string\") {}",
      errors: [{ messageId: "noTypeof" }]
    }
  ]
})