const { RuleTester } = require("eslint")
const rule = require("../lib/rules/no-new")

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2021,
  },
})

ruleTester.run("no-new", rule, {
  valid: [
    "const x = construct(Object)",
    "const date = createDate()",
    "const map = Map.from([])",
    "const promise = Promise.resolve()",
    "const b = Boolean(true)"
  ],
  invalid: [
    {
      code: "const x = new Object()",
      errors: [{ messageId: "noNew" }]
    },
    {
      code: "const date = new Date()",
      errors: [{ messageId: "noNew" }]
    },
    {
      code: "const map = new Map()",
      errors: [{ messageId: "noNew" }]
    },
    {
      code: "const socket = new WebSocket('ws://localhost')",
      errors: [{ messageId: "noNew" }]
    },
    {
      code: "throw new Error('something went wrong')",
      errors: [{ messageId: "noNew" }]
    }
  ],
})