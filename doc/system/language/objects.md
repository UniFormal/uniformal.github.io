---
layout: doc
title: Objects
---

## Terms

Terms occur on the object level; specifically as components of [declarations](declarations.html), most notably as types and definitions of [constants](declarations.html#constants). They represent syntax trees with binding, e.g. first-order terms and formulas, types, lambda expressions etc.

Terms are defined recursively:

* Symbol references are terms ([OMID](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.objects.OMID))
* Variable references are terms ([OMV](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.objects.OMV))
* Applications of a term to a list of *arguments* (terms) are terms ([OMA](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.objects.OMA))
* Binding applications of a term - *binding* (optionally typed) variables - to a list of arguments are terms ([OMBIND](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.objects.OMBINDC))

The precise abstract syntax is explained in more detail [here](../api/syntax).

In the MMT language, terms are given by using symbol/variable names and the [*notations*](declarations.html#notations) of the symbols in the current context (previous declarations in the containing module). Binders extend the current context for their arguments by the variables they bind.

#### Examples

* The expression `a + (b ⋅ c)` would be an application (OMA) of a symbol `+` (OMS) to a symbol `a` (OMS) and (an application (OMA) of a symbol `⋅` (OMS) to a symbol `b` (OMS) and a symbol `c` (OMS)). We can write this as:
  
  `OMA(OMS(+),OMS(a),OMA(⋅,OMS(b),OMA(c)))`

  The symbols `+,⋅,a,b,c` have to be in context, of course.
* The expression `λx:t. x+a` would be a binding application (OMBIND) binding a variable `x` of type `t` to (an application of ...). We can write this as:

  `OMBIND({x:t},OMA(+,OMV(x),OMS(a)))`
  
  The binder `λ` extends the inner context of the argument by the variable `x`, guaranteeing that `x+a` is a well-formed term.
