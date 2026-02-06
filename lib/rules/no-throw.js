module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow throw statements",
      category: "Best Practices",
      recommended: false,
    },
    fixable: null,
    schema: [],
    messages: {
      noThrow: "Throw statements are not allowed. Use immediateError() or throwWhatever() from the immediate-error package instead.",
    },
  },
  create(context) {
    return {
      ThrowStatement(node) {
        context.report({
          node,
          messageId: "noThrow",
        })
      },
    }
  },
}