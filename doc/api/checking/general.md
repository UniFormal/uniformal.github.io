---
layout: doc
title: General Methods for Rules
---
The following gives an overview for the most important objects passed to rules and the methods they provide. These are:
* A [`checking.Solver`](apidoc://info.kwarc.mmt.api.checking.Solver) for recursive checking calls, simplifying terms, inferring types etc. and is described in more detail below.
* A [`checking.History`](apidoc://info.kwarc.mmt.api.checking.History) documenting the solver's actions. A reduced version of this object is presented to the user if a judgment fails. The command `history += s` extends the current history by a new string `s`, `history.branch` creates a new copy of the current history to pass on to recursive checks, `history+s` creates a new copy and appends line `s`. If the top most judgment check fails, the user is presented with those histories that lead to an error; the others are thrown away. Consequently, it is advised to branch the history for recursive checks to reduce the user output to only the relevant parts.
* A [`objects.Stack`](apidoc://info.kwarc.mmt.api.objects.Stack) representing the current local context. It merely wraps around a [Context](apidoc://info.kwarc.mmt.api.objects.Stack) (described [here](../syntax/objects.html)). A stack can be extended by a [`objects.VarDecl`](apidoc://info.kwarc.mmt.api.objects.VarDecl) (described [here](../syntax/objects.html)) `v` by letting `stack ++ v`.

Both the stack and the history are usually *implicit* arguments.

### Generally useful methods:

It is strongly advised to always import [`objects.Conversions._`](apidoc://info.kwarc.mmt.api.objects.Conversions), which provides helpful syntactic sugar for handling common operations such as substituting variables.

* [`Context.pickFresh(context,name)`](apidoc:///info.kwarc.mmt.api.objects.Context$) picks a fresh variable name `newname` (by default `name`) that is not already used in `context`, and returns it along with the [`objects.Substitution`](apidoc:///info.kwarc.mmt.api.objects.Substitution) `name/OMV(newname)`.
* Given an [`api.LocalName`](apidoc://info.kwarc.mmt.api.LocalName) `ln` and a term `a`, then `ln % a` returns the `VarDecl` with name `ln` and type `a`.
* Given a LocalName `ln` and a term `a`, then `ln / a` returns the substitution `ln/a`.
* Given a term `a` and a substitution `s`, then `a ^? s` returns the result of applying `s` to `a`
* The last three often occur in combination, as in `stack ++ ln % (tp ^? (x / a))`

### Solver Methods

The [`checking.Solver`](apidoc://info.kwarc.mmt.api.checking.Solver) provides the following methods for rules:
* `solver.check` is the main method for recursive checks of rule premises. Takes a judgement (see [here](judgements.html)) as argument.
* `solver.inferType(tm : Term, covered : Boolean)` attempts to infer the type of `tm`. The additional argument `covered` denotes whether the term is already known to be well-typed, in which case some well-formedness checks can be skipped.
* `solver.inferTypeAndThen(tm : Term)(cont : Term => Boolean)` is useful for rules that return Booleans. If a type for `tm` can not be inferred yet due to unsolved variables, the current judgement will be delayed until the variables are solved during further checks. Afterwards, the continuation function will be called on the inferred type to check the current judgement.
* `solver.simplify(o : Obj)` aggressively simplifies `o` until all computation rules are exhausted.
* `solver.safeSimplifyUntil(tm : Term)(simple : Term => Option[A])` safely iterates one-step-simplification until `simple` (usually an unapply-method) returns `Some` on the result. This is primarily used to enforce a specific syntactic pattern on a term, if a rule requires a term to be e.g. a lambda expression (`solver.safeSimplifyUntil(tm)(Lambda.unapply)`). Returns both the simplified term as well as the result of `simple` on the result.
* `solver.getType` and `solver.getDef` take a `GlobalName` (see [here](../syntax/uris.html)) for a constant and attempt to return its type or definiens (relative to the current context), respectively.
* `solver.error(s : String)` should always be used instead of returning `false`. This method a) returns `false` and b) registers `s` as the reason why the judgement failed, thus providing more detailed information to the user.
