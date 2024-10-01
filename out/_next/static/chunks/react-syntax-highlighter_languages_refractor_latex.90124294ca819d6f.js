"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4732],{2876:function(module){function latex(Prism){var Prism1,funcPattern,insideEqu;Prism1=Prism,insideEqu={"equation-command":{pattern:funcPattern=/\\(?:[^a-z()[\]]|[a-z*]+)/i,alias:"regex"}},Prism1.languages.latex={comment:/%.*/,cdata:{pattern:/(\\begin\{((?:lstlisting|verbatim)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0},equation:[{pattern:/\$\$(?:\\[\s\S]|[^\\$])+\$\$|\$(?:\\[\s\S]|[^\\$])+\$|\\\([\s\S]*?\\\)|\\\[[\s\S]*?\\\]/,inside:insideEqu,alias:"string"},{pattern:/(\\begin\{((?:align|eqnarray|equation|gather|math|multline)\*?)\})[\s\S]*?(?=\\end\{\2\})/,lookbehind:!0,inside:insideEqu,alias:"string"}],keyword:{pattern:/(\\(?:begin|cite|documentclass|end|label|ref|usepackage)(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0},url:{pattern:/(\\url\{)[^}]+(?=\})/,lookbehind:!0},headline:{pattern:/(\\(?:chapter|frametitle|paragraph|part|section|subparagraph|subsection|subsubparagraph|subsubsection|subsubsubparagraph)\*?(?:\[[^\]]+\])?\{)[^}]+(?=\})/,lookbehind:!0,alias:"class-name"},function:{pattern:funcPattern,alias:"selector"},punctuation:/[[\]{}&]/},Prism1.languages.tex=Prism1.languages.latex,Prism1.languages.context=Prism1.languages.latex}module.exports=latex,latex.displayName="latex",latex.aliases=["tex","context"]}}]);