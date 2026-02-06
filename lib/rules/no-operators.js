module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow symbolic operators and recommend specific packages",
      category: "Best Practices",
      recommended: false,
    },
    fixable: null,
    schema: [],
    messages: {
      noOperators: "Operator '{{operator}}' is not allowed. {{recommendation}}",
    },
  },
  create(context) {
    const recommendations = {
      "===": "Use @10xly/strict-equals instead.",
      "==": "Use is-equal-to instead.",
      "+": "Use countingup or lolite.add for math, or @rightpad/concat, general-concat, or .concat() for strings.",
      "-": "Use countingup or lolite.subtract instead.",
      "*": "Use countingup or lolite.multiply instead.",
      "/": "Use countingup or lolite.divide instead.",
      "%": "Use countingup or lolite.modulo instead.",
      "**": "Use countingup or lolite.pow instead.",
      "&&": "Use es-logical-and-operator instead.",
      "||": "Use es-logical-or-operator instead.",
      "!": "Use es-logical-not-operator instead.",
      "??": "Use es-logical-nullish-coalescing-operator instead.",
    }

    const getMessage = (node) => {
      const { operator } = node
      if (recommendations[operator]) return recommendations[operator]
      
      if (["&", "|", "^", "~", "<<", ">>", ">>>"].includes(operator)) {
        return "Look for a bitwise package, or make your own if it doesn't exist."
      }
      if (operator.endsWith("=") && operator !== "=") {
        return "Use a math library for the operation, then use = normally."
      }
      return "Use an npm package for this operator instead."
    }

    const report = (node) => {
      context.report({
        node,
        messageId: "noOperators",
        data: {
          operator: node.operator,
          recommendation: getMessage(node),
        },
      })
    }

    return {
      BinaryExpression: report,
      UnaryExpression(node) {
        if (!/^[a-z]+$/.test(node.operator)) {
          report(node)
        }
      },
      LogicalExpression: report,
      AssignmentExpression(node) {
        if (node.operator !== "=") {
          report(node)
        }
      },
      UpdateExpression(node) {
        if (node.operator !== "++") {
          report(node)
        }
      },
    }
  },
}