module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow instanceof operator",
      category: "Best Practices",
      recommended: false,
    },
    schema: [],
    messages: {
      noInstanceof: "The instanceof operator is not allowed. Use @10xly/is-instance-of instead.",
    },
  },
  create(context) {
    return {
      BinaryExpression(node) {
        if (node.operator === "instanceof") {
          context.report({ node, messageId: "noInstanceof" })
        }
      },
    }
  },
}