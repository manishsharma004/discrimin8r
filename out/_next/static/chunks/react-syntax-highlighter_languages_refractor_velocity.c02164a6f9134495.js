"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2980],{6891:function(module){function velocity(Prism){var Prism1,velocity;(Prism1=Prism).languages.velocity=Prism1.languages.extend("markup",{}),(velocity={variable:{pattern:/(^|[^\\](?:\\\\)*)\$!?(?:[a-z][\w-]*(?:\([^)]*\))?(?:\.[a-z][\w-]*(?:\([^)]*\))?|\[[^\]]+\])*|\{[^}]+\})/i,lookbehind:!0,inside:{}},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},number:/\b\d+\b/,boolean:/\b(?:false|true)\b/,operator:/[=!<>]=?|[+*/%-]|&&|\|\||\.\.|\b(?:eq|g[et]|l[et]|n(?:e|ot))\b/,punctuation:/[(){}[\]:,.]/}).variable.inside={string:velocity.string,function:{pattern:/([^\w-])[a-z][\w-]*(?=\()/,lookbehind:!0},number:velocity.number,boolean:velocity.boolean,punctuation:velocity.punctuation},Prism1.languages.insertBefore("velocity","comment",{unparsed:{pattern:/(^|[^\\])#\[\[[\s\S]*?\]\]#/,lookbehind:!0,greedy:!0,inside:{punctuation:/^#\[\[|\]\]#$/}},"velocity-comment":[{pattern:/(^|[^\\])#\*[\s\S]*?\*#/,lookbehind:!0,greedy:!0,alias:"comment"},{pattern:/(^|[^\\])##.*/,lookbehind:!0,greedy:!0,alias:"comment"}],directive:{pattern:/(^|[^\\](?:\\\\)*)#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})(?:\s*\((?:[^()]|\([^()]*\))*\))?/i,lookbehind:!0,inside:{keyword:{pattern:/^#@?(?:[a-z][\w-]*|\{[a-z][\w-]*\})|\bin\b/,inside:{punctuation:/[{}]/}},rest:velocity}},variable:velocity.variable}),Prism1.languages.velocity.tag.inside["attr-value"].inside.rest=Prism1.languages.velocity}module.exports=velocity,velocity.displayName="velocity",velocity.aliases=[]}}]);