---
layout: doc
title: General Methods for Rules
---
The following gives an overview for the most important objects passed to rules and the methods they provide. These are:
* A [`checking.Solver`](apidoc://info.kwarc.mmt.api.checking.Solver) for recursive checking calls, simplifying terms, inferring types etc. and is described in more detail below.
* A [`checking.History`](apidoc://info.kwarc.mmt.api.checking.History) documenting the solver's actions. A reduced version of this object is presented to the user if a judgment fails. The command `history += s` extends the current history by a new string `s`, `history.branch` creates a new copy of the current history to pass on to recursive checks, `history+s` creates a new copy and appends line `s`. If the top most judgment check fails, the user is presented with those histories that lead to an error; the others are thrown away. Consequently, it is advised to branch the history for recursive checks to reduce the user output to only the relevant parts.
* A [`objects.Stack`](apidoc://info.kwarc.mmt.api.objects.Stack) representing the current local context. It merely wraps around a [Context](apidoc://info.kwarc.mmt.api.objects.Stack) (described [here](../syntax/objects.html)). A stack can be extended by a [`objects.VarDecl`](apidoc://info.kwarc.mmt.api.objects.VarDecl) (described [here](../syntax/objects.html)) `v` by letting `stack ++ v`.

Both the stack and the history are usually *implicit* arguments.

It is strongly advised to always import [`objects.Conversions._`](apidoc://info.kwarc.mmt.api.objects.Conversions), which provides helpful syntactic sugar for handling common operations such as substituting variables.

### Generally useful methods:

* [`Context.pickFresh(context,name)`](apidoc:///info.kwarc.mmt.api.objects.Context$) picks a fresh variable name `newname` (by default `name`) that is not already used in `context`, and returns it along with the [`objects.Substitution`](apidoc:///info.kwarc.mmt.api.objects.Substitution) `name/OMV(newname)`.
* Given an [`api.LocalName`](apidoc://info.kwarc.mmt.api.LocalName) `ln` and a term `a`, then `ln % a` returns the [`objects.VarDecl`](apidoc://info.kwarc.mmt.api.objects.VarDecl) with name `ln` and type `a`.
* Given a LocalName `ln` and a term `a`, then `ln / a` returns the [`objects.Substitution`](apidoc:///info.kwarc.mmt.api.objects.Substitution) `ln/a`.
* Given a term `a` and a substitution `s`, then `a ^? s` returns the result ob applying `s` to `a`

