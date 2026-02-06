const { RuleTester } = require("eslint")
const rule = require("../lib/rules/no-throw")

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2021,
  },
})

ruleTester.run("no-throw", rule, {
  valid: [
    "immediateError()",
    'immediateError("test")',
    'immediateError("test", ErrorType.TypeError)',
    'throwWhatever("something")',
  ],
  invalid: [
    {
      code: 'throw new Error("test")',
      errors: [{ messageId: "noThrow" }],
    },
    {
      code: 'throw new TypeError("type error")',
      errors: [{ messageId: "noThrow" }],
    },
    {
      code: 'throw new RangeError("out of range")',
      errors: [{ messageId: "noThrow" }],
    },
    {
      code: 'throw "string error"',
      errors: [{ messageId: "noThrow" }],
    },
    {
      code: 'throw 1',
      errors: [{ messageId: "noThrow" }],
    },
  ],
})