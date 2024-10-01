"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[8389,3047],{2114:function(module,__unused_webpack_exports,__webpack_require__){var refractorMarkupTemplating=__webpack_require__(3205);function ftl(Prism){Prism.register(refractorMarkupTemplating),function(Prism){for(var FTL_EXPR=/[^<()"']|\((?:<expr>)*\)|<(?!#--)|<#--(?:[^-]|-(?!->))*-->|"(?:[^\\"]|\\.)*"|'(?:[^\\']|\\.)*'/.source,i=0;i<2;i++)FTL_EXPR=FTL_EXPR.replace(/<expr>/g,function(){return FTL_EXPR});FTL_EXPR=FTL_EXPR.replace(/<expr>/g,/[^\s\S]/.source);var ftl={comment:/<#--[\s\S]*?-->/,string:[{pattern:/\br("|')(?:(?!\1)[^\\]|\\.)*\1/,greedy:!0},{pattern:RegExp(/("|')(?:(?!\1|\$\{)[^\\]|\\.|\$\{(?:(?!\})(?:<expr>))*\})*\1/.source.replace(/<expr>/g,function(){return FTL_EXPR})),greedy:!0,inside:{interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\\\)*)\$\{(?:(?!\})(?:<expr>))*\}/.source.replace(/<expr>/g,function(){return FTL_EXPR})),lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:null}}}}],keyword:/\b(?:as)\b/,boolean:/\b(?:false|true)\b/,"builtin-function":{pattern:/((?:^|[^?])\?\s*)\w+/,lookbehind:!0,alias:"function"},function:/\b\w+(?=\s*\()/,number:/\b\d+(?:\.\d+)?\b/,operator:/\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,punctuation:/[,;.:()[\]{}]/};ftl.string[1].inside.interpolation.inside.rest=ftl,Prism.languages.ftl={"ftl-comment":{pattern:/^<#--[\s\S]*/,alias:"comment"},"ftl-directive":{pattern:/^<[\s\S]+>$/,inside:{directive:{pattern:/(^<\/?)[#@][a-z]\w*/i,lookbehind:!0,alias:"keyword"},punctuation:/^<\/?|\/?>$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:ftl}}},"ftl-interpolation":{pattern:/^\$\{[\s\S]*\}$/,inside:{punctuation:/^\$\{|\}$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:ftl}}}},Prism.hooks.add("before-tokenize",function(env){var pattern=RegExp(/<#--[\s\S]*?-->|<\/?[#@][a-zA-Z](?:<expr>)*?>|\$\{(?:<expr>)*?\}/.source.replace(/<expr>/g,function(){return FTL_EXPR}),"gi");Prism.languages["markup-templating"].buildPlaceholders(env,"ftl",pattern)}),Prism.hooks.add("after-tokenize",function(env){Prism.languages["markup-templating"].tokenizePlaceholders(env,"ftl")})}(Prism)}module.exports=ftl,ftl.displayName="ftl",ftl.aliases=[]},3205:function(module){function markupTemplating(Prism){!function(Prism){function getPlaceholder(language,index){return"___"+language.toUpperCase()+index+"___"}Object.defineProperties(Prism.languages["markup-templating"]={},{buildPlaceholders:{value:function(env,language,placeholderPattern,replaceFilter){if(env.language===language){var tokenStack=env.tokenStack=[];env.code=env.code.replace(placeholderPattern,function(match){if("function"==typeof replaceFilter&&!replaceFilter(match))return match;for(var placeholder,i=tokenStack.length;-1!==env.code.indexOf(placeholder=getPlaceholder(language,i));)++i;return tokenStack[i]=match,placeholder}),env.grammar=Prism.languages.markup}}},tokenizePlaceholders:{value:function(env,language){if(env.language===language&&env.tokenStack){env.grammar=Prism.languages[language];var j=0,keys=Object.keys(env.tokenStack);!function walkTokens(tokens){for(var i=0;i<tokens.length&&!(j>=keys.length);i++){var token=tokens[i];if("string"==typeof token||token.content&&"string"==typeof token.content){var k=keys[j],t=env.tokenStack[k],s="string"==typeof token?token:token.content,placeholder=getPlaceholder(language,k),index=s.indexOf(placeholder);if(index>-1){++j;var before=s.substring(0,index),middle=new Prism.Token(language,Prism.tokenize(t,env.grammar),"language-"+language,t),after=s.substring(index+placeholder.length),replacement=[];before&&replacement.push.apply(replacement,walkTokens([before])),replacement.push(middle),after&&replacement.push.apply(replacement,walkTokens([after])),"string"==typeof token?tokens.splice.apply(tokens,[i,1].concat(replacement)):token.content=replacement}}else token.content&&walkTokens(token.content)}return tokens}(env.tokens)}}}})}(Prism)}module.exports=markupTemplating,markupTemplating.displayName="markupTemplating",markupTemplating.aliases=[]}}]);