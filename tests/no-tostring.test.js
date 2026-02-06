const { RuleTester } = require("eslint")
const rule = require("../lib/rules/no-tostring")

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2021 }
})

ruleTester.run("no-tostring", rule, {
  valid: [
    "const str = require(\"@rightpad/convert2string\")(obj)",
    "const x = obj.name"
  ],
  invalid: [
    {
      code: "const s = obj.toString()",
      errors: [{ messageId: "noToString" }]
    },
    {
      code: "const s = (123).toString()",
      errors: [{ messageId: "noToString" }]
    }
  ]
})