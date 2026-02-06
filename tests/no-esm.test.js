const { RuleTester } = require("eslint")
const rule = require("../lib/rules/no-esm")

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2021,
    sourceType: "module" // Required to test import/export
  },
})

ruleTester.run("no-esm", rule, {
  valid: [
    "const x = require('pkg')",
    "module.exports = { x }"
  ],
  invalid: [
    { code: "import x from 'pkg'", errors: [{ messageId: "noEsm" }] },
    { code: "export const x = 1", errors: [{ messageId: "noEsm" }] },
    { code: "export default x", errors: [{ messageId: "noEsm" }] }
  ],
})