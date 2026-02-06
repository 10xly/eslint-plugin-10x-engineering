module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow new keyword",
      category: "Best Practices",
      recommended: false,
    },
    fixable: null,
    schema: [],
    messages: {
      noNew: "The new keyword is not allowed. Use construct() from the construct-new package instead.",
    },
  },
  create(context) {
    return {
      NewExpression(node) {
        context.report({
          node,
          messageId: "noNew",
        })
      },
    }
  },
}