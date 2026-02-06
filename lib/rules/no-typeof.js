module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow typeof operator",
      category: "Best Practices",
      recommended: false,
    },
    schema: [],
    messages: {
      noTypeof: "The typeof operator is not allowed. Use the es-typeof package instead.",
    },
  },
  create(context) {
    return {
      UnaryExpression(node) {
        if (node.operator === "typeof") {
          context.report({ node, messageId: "noTypeof" })
        }
      },
    }
  },
}