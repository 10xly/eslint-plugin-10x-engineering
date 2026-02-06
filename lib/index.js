module.exports = {
  rules: {
    "no-semicolons": require("./rules/no-semicolons"),
    "no-booleans": require("./rules/no-booleans"),
    "no-throw": require("./rules/no-throw"),
    "no-new": require("./rules/no-new"),
    "no-number-literals": require("./rules/no-number-literals"),
    "no-operators": require("./rules/no-operators"),
    "no-esm": require("./rules/no-esm"),
    "no-strict-mode": require("./rules/no-strict-mode"),
    "no-rickroll": require("./rules/no-rickroll"),
    "no-typeof": require("./rules/no-typeof"),
    "no-instanceof": require("./rules/no-instanceof"),
    "no-tostring": require("./rules/no-tostring"),
    "no-valueof": require("./rules/no-valueof")
  }
}