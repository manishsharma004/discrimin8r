"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9797],{1720:function(module){function sass(Prism){var Prism1,variable,operator;(Prism1=Prism).languages.sass=Prism1.languages.extend("css",{comment:{pattern:/^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,lookbehind:!0,greedy:!0}}),Prism1.languages.insertBefore("sass","atrule",{"atrule-line":{pattern:/^(?:[ \t]*)[@+=].+/m,greedy:!0,inside:{atrule:/(?:@[\w-]+|[+=])/}}}),delete Prism1.languages.sass.atrule,variable=/\$[-\w]+|#\{\$[-\w]+\}/,operator=[/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,{pattern:/(\s)-(?=\s)/,lookbehind:!0}],Prism1.languages.insertBefore("sass","property",{"variable-line":{pattern:/^[ \t]*\$.+/m,greedy:!0,inside:{punctuation:/:/,variable:variable,operator:operator}},"property-line":{pattern:/^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,greedy:!0,inside:{property:[/[^:\s]+(?=\s*:)/,{pattern:/(:)[^:\s]+/,lookbehind:!0}],punctuation:/:/,variable:variable,operator:operator,important:Prism1.languages.sass.important}}}),delete Prism1.languages.sass.property,delete Prism1.languages.sass.important,Prism1.languages.insertBefore("sass","punctuation",{selector:{pattern:/^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,lookbehind:!0,greedy:!0}})}module.exports=sass,sass.displayName="sass",sass.aliases=[]}}]);