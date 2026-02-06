module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow boolean keywords true and false",
      category: "Stylistic Issues",
      recommended: false,
    },
    fixable: "code",
    schema: [],
    messages: {
      noBooleans: "Boolean keywords are not allowed. Use require(\"{{value}}-value\")() instead. (Make sure to npm install it first if you haven\"t already.)",
    },
  },
  create(context) {
    return {
      Literal(node) {
        if (node.value === true || node.value === false) {
          const value = node.value ? "true" : "false"
          
          context.report({
            node,
            messageId: "noBooleans",
            data: { value },
            fix(fixer) {
              return fixer.replaceText(node, `require(\"${value}-value\")()`)
            },
          })
        }
      },
    }
  },
}