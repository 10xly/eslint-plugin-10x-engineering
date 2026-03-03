module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow semicolons",
      category: "Stylistic Issues",
      recommended: false,
    },
    fixable: "code",
    schema: [],
    messages: {
      noSemicolons: "Semicolons are not allowed. If it's required, like a for loop, eslint-disable this rule temporarily.",
    },
  },
  create(context) {
    const sourceCode = context.sourceCode

    return {
      ":statement, :declaration"(node) {
        const lastToken = sourceCode.getLastToken(node)
        
        if (lastToken && lastToken.value === ";") {
          context.report({
            node,
            loc: lastToken.loc,
            messageId: "noSemicolons",
            fix(fixer) {
              const nextToken = sourceCode.getTokenAfter(lastToken)
              
              // If there's a token on the same line after the semicolon, replace with newline
              if (nextToken && nextToken.loc.start.line === lastToken.loc.end.line) {
                return fixer.replaceText(lastToken, "\n")
              }
              
              // Otherwise just remove the semicolon
              return fixer.remove(lastToken)
            },
          })
        }
      },
    }
  },
}