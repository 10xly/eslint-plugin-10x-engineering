const { RuleTester } = require("eslint")
const rule = require("../lib/rules/no-rickroll")

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2021 },
})

ruleTester.run("no-rickroll", rule, {
  valid: [
    "const x = 'hello world'",
    "function giveUp() { return true }",
    "const desert = 'cactus'"
  ],
  invalid: [
    {
      code: "const msg = 'never gonna give you up'",
      errors: [{ messageId: "noRickroll" }]
    },
    {
      code: "// never gonna let you down",
      errors: [{ messageId: "noRickroll" }]
    },
    {
      code: "const lyrix = 'run around and desert you'",
      errors: [{ messageId: "noRickroll" }]
    }
  ],
})