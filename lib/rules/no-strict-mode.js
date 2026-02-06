module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow strict mode directives.",
      category: "Best Practices",
      recommended: false,
    },
    fixable: "code",
    schema: [],
    messages: {
      noStrict: "Strict mode is not allowed. Use sloppy mode instead.",
    },
  },
  create(context) {
    return {
      ExpressionStatement(node) {
        if (
          node.expression.type === "Literal" &&
          node.expression.value === "use strict"
        ) {
          context.report({
            node,
            messageId: "noStrict",
            fix(fixer) {
              return fixer.replaceText(node.expression, "\"use sloppy\"")
            }
          })
        }
      },
    }
  },
}