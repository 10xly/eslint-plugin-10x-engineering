module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow .toString() method calls",
      category: "Best Practices",
      recommended: false,
    },
    schema: [],
    messages: {
      noToString: ".toString() is not allowed. Use @rightpad/convert2string instead, which calls the .toString method on an object.",
    },
  },
  create(context) {
    return {
      MemberExpression(node) {
        if (node.property.type === "Identifier" && node.property.name === "toString") {
          context.report({ node: node.property, messageId: "noToString" })
        }
      },
    }
  },
}