---
layout: doc
title: Available Judgements and their Invariants
---

This document gives an overview of the classes corrsponding to the judgements described [here](index.html), and the corresponding invariants to be maintained by corresponding rules.

The available rule classes are described [here](???). By *exhaustively applying rules* to a (pair of) term `t`, we mean: Iteratively simplify `t` until a rule of the required kind is applicable. If so, apply the rule to the simplified term. Notably, this entails fully simplifying a term if no rules are applicable, which can be computationally expensive. If no rules are applicable, the solver will continue any alternative strategy using the original, unsimplified term.

* `G ctx`: [`objects.IsContext`](apidoc://info.kwarc.mmt.api.objects.IsContext)`(stack:Stack, G: Context)` - checks whether `stack++G` is a well-formed context, assuming `stack` is a well-formed context.
* `Inh T`: [`objects.Inhabitable`](apidoc://info.kwarc.mmt.api.objects.Inhabitable)`(stack:Stack, T: Term)` - checks whether `T`is inhabitable, i.e. may occur on the right side of a typing judgement. Assumes that `stack` is a well-formed context. This judgement is checked by exhaustively applying all `InhabitableRule`s. If no rules are applicable, the solver will attempt to infer the type `T'` of `T` and check `Univ T'`.
