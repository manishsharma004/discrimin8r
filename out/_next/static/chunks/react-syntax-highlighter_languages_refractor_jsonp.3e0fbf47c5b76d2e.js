"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7561,3657],{5950:function(module){function json(Prism){Prism.languages.json={property:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,lookbehind:!0,greedy:!0},string:{pattern:/(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,lookbehind:!0,greedy:!0},comment:{pattern:/\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,greedy:!0},number:/-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,punctuation:/[{}[\],]/,operator:/:/,boolean:/\b(?:false|true)\b/,null:{pattern:/\bnull\b/,alias:"keyword"}},Prism.languages.webmanifest=Prism.languages.json}module.exports=json,json.displayName="json",json.aliases=["webmanifest"]},963:function(module,__unused_webpack_exports,__webpack_require__){var refractorJson=__webpack_require__(5950);function jsonp(Prism){Prism.register(refractorJson),Prism.languages.jsonp=Prism.languages.extend("json",{punctuation:/[{}[\]();,.]/}),Prism.languages.insertBefore("jsonp","punctuation",{function:/(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*\()/})}module.exports=jsonp,jsonp.displayName="jsonp",jsonp.aliases=[]}}]);