module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow Rickrolling in the codebase",
      category: "Best Practices",
      recommended: false,
    },
    schema: [],
    messages: {
      noRickroll: "Rickrolling is not allowed. We are never gonna give you a pass on this.",
    },
  },
  create(context) {
    const lyrics = "nevergonnagiveyouupnevergonnaletyoudownnevergonnarunaroundanddesertyou".toLowerCase()
    
    return {
      Program(node) {
        const sourceCode = context.getSourceCode().getText().toLowerCase().replace(/\s+/g, "")
        
        for (let i = 0; i <= lyrics.length - 10; i++) {
          const substring = lyrics.substring(i, i + 10)
          if (sourceCode.includes(substring)) {
            context.report({
              node,
              messageId: "noRickroll",
            })
            break
          }
        }
      },
    }
  },
}