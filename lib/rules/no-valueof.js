module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow .valueOf() method calls",
      category: "Best Practices",
      recommended: false,
    },
    schema: [],
    messages: {
      noValueOf: ".valueOf() is not allowed. Use @resolve-es/valueof instead, which calls the .valueOf method on an object.",
    },
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (node.property.type === "Identifier" && node.property.name === "valueOf") {
          context.report({ node: node.property, messageId: "noValueOf" })
        }
      },
    }
  },
}