const { RuleTester } = require("eslint")
const rule = require("../lib/rules/no-semicolons")

const ruleTester = new RuleTester({
  languageOptions: {
    ecmaVersion: 2021,
  },
})

ruleTester.run("no-semicolons", rule, {
  valid: [
    "const x = 1",
    "function foo() { return 42 }",
    "if (true) { console.log(\"hi\") }",
  ],
  invalid: [
    {
      code: "const x = 1;",
      errors: [{ messageId: "noSemicolons" }],
      output: "const x = 1",
    },
    {

  code: "function foo() { return 42; }",
  errors: [{ messageId: "noSemicolons" }],
  output: "function foo() { return 42\n }",
    },
    {
  code: "const a = 1; const b = 2;",
  errors: [
    { messageId: "noSemicolons" },
    { messageId: "noSemicolons" },
  ],
  output: "const a = 1\n const b = 2",

    },
  ],
})