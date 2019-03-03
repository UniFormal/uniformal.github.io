---
layout: doc
title: Available Judgements and their Invariants
---

This document gives an overview of the classes corrsponding to the judgements described [here](index.html), and the corresponding invariants to be maintained by corresponding rules.

The available rule classes are described [here](???). By *exhaustively applying rules* to a (pair of) term `t`, we mean: Iteratively simplify `t` until a rule of the required kind is applicable. If so, apply the rule to the simplified term. Notably, this entails fully simplifying a term if no rules are applicable, which can be computationally expensive. If no rules are applicable, the solver will continue any alternative strategy using the original, unsimplified term.

* `G ctx`: [`objects.IsContext`](apidoc://info.kwarc.mmt.api.objects.IsContext)`(stack:Stack, G:Context)` - checks whether `stack++G` is a well-formed context, assuming `stack` is a well-formed context.
* `Inh T`: [`objects.Inhabitable`](apidoc://info.kwarc.mmt.api.objects.Inhabitable)`(stack:Stack, T:Term)` - checks whether `T` is inhabitable, i.e. may occur on the right side of a typing judgement. Assumes that `stack` is a well-formed context. This judgement is checked by exhaustively applying all `InhabitableRule`s. If no rules are applicable, the solver will attempt to infer the type `T'` of `T` and check `Univ T'`.
* `Univ T`: [`objects.Universe`](apidoc://info.kwarc.mmt.api.objects.Universe)`(stack:Stack, U:Term)` - checks whether `U` is a universe, i.e. is inhabitable and all `T:U` are inhabitable. Assumes that `stack` is a well-formed context. This judgement is checked by exhaustively applying all `UniverseRule`s.
* `t1 = t2 [:T]`: [`objects.Equality`](apidoc://info.kwarc.mmt.api.objects.Equality)`(stack:Stack, t1:Term, t2:Term, T:Option[Term])` - checks whether `t1` and `t2` are equal under optional type `T`. This judgement is checked by 
  * aggressively simplifying both `t1` and `t2` and checking syntactic equality.
  * checking whether the judgement `t1=t2` allows for solving variables in either term.
  * exhaustively applying all `TermBasedEqualityRule`s.
  * exhaustively applying all `TypeBasedEqualityRule`s. If no type is provided, the type of `t1` is first inferred. If type inferrence for `t1` fails, the type of `t2` is inferred instead.
  * If `t1=f(args)` and `t2=f(args')` and `args` and `args'` have the same length, congruence reasoning is attempted by checking `args=args'`.
