const { RuleTester } = require("eslint")
const rule = require("../lib/rules/no-strict-mode")

const ruleTester = new RuleTester({
  languageOptions: { ecmaVersion: 2021 },
})

ruleTester.run("no-strict-mode", rule, {
  valid: [
    "\"use sloppy\"",
    "const x = 1"
  ],
  invalid: [
    {
      code: "\"use strict\";",
      output: "\"use sloppy\";",
      errors: [{ messageId: "noStrict" }]
    },
    {
      code: "'use strict'",
      output: "\"use sloppy\"",
      errors: [{ messageId: "noStrict" }]
    }
  ],
})