module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow ESM (import/export). Use CommonJS instead.",
      category: "Best Practices",
      recommended: false,
    },
    schema: [],
    messages: {
      noEsm: "ESM is not allowed. Use CommonJS instead.",
    },
  },
  create(context) {
    return {
      ImportDeclaration(node) {
        context.report({ node, messageId: "noEsm" })
      },
      ExportNamedDeclaration(node) {
        context.report({ node, messageId: "noEsm" })
      },
      ExportDefaultDeclaration(node) {
        context.report({ node, messageId: "noEsm" })
      },
      ExportAllDeclaration(node) {
        context.report({ node, messageId: "noEsm" })
      }
    }
  },
}