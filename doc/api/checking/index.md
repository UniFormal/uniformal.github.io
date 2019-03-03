---
layout: doc
title: Type Checking
---
This section gives an overview of all relevant classes for extending MMT by additional type checking rules. The class relevant for checking judgments is [`checking.Solver`](apidoc://info.kwarc.mmt.api.checking.Solver). MMT uses the following judgments:

| Judgment       | Description                                                             |
| -------------- | ----------------------------------------------------------------------- |
| `G ctx`        | `G` is a well-formed context
| `Inh T`        | `T` is *inhabitable* (may occur on the right side of a typing judgment) |
| `Univ T`       | `T`is a *universe* (inhabitable, and every `t:T` is also inhabitable)   |
| -------------- | ----------------------------------------------------------------------- |
| `t1 = t2 [:T]` | `t1` is equal to `t2` (under optional type `T`)                         |
| `t1 ~> t2`     | `t1` *simplifies* to `t2`                                               |
| -------------- | ----------------------------------------------------------------------- |
| `t :=> T`      | The principal type of `t` is `T`                                        |
| `t :<= T`      | `t` checks against the given type `T`                                   |
| `T1 <: T2`     | `T1` is a subtype of `T2`                                               |
| `Prov T`       | `T` is inhabited                                                        |

In general, whenever a constant `c : T [= d]` is parsed, the solver will check the following judgments:
* `Inh T`
* `d :<= T`

The classes corresponding to these judgements and the tactics used to check them are describes [here](judgements.html).
