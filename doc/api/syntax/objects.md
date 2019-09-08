---
layout: doc
title: MMT Objects
---
![data structures](../../img/Term.jpg)
[`objects.Obj`](apidoc://info.kwarc.mmt.api.objects.Obj) is the top level datastructure for all objects.
These are terms, variable declarations and contexts.

* **[`objects.Term`](apidoc://info.kwarc.mmt.api.objects.Term)** has the following important subclasses, all of which are scala case classes:
  * **[`OMID`](apidoc://info.kwarc.mmt.api.objects.OMID)/[`OMS`](apidoc://info.kwarc.mmt.api.objects.OMS$)**: `OMID` is the case class for references to content symbols taking a `ContentPath` as argument. `OMS` is a helper object (with convenience apply/unapply methods) for the case, where the path references a declaration, i.e. is a `GlobalName`.
  * **[`OMA`](apidoc://info.kwarc.mmt.api.objects.OMA)**: `OMA`s represent function applications. As such, the `OMA` case class takes a function (`Term`) and the argument terms (`List[Term]`) as arguments.
  * **[`OMBINDC`](apidoc://info.kwarc.mmt.api.objects.OMBINDC)/[`OMBIND`](apidoc://info.kwarc.mmt.api.objects.OMBIND$)**: `OMBINDC` is the case class for complex binding terms, again with a convenience object `OMBIND` (for the case, where the scope of the binder is exactly one term). It wraps around the binder (`Term`), a context (`Context`, for the bound variables) and a body (`Term`; the scope of the binder) as arguments.
  * **[`OMV`](apidoc://info.kwarc.mmt.api.objects.OMV)**: An `OMV` is a reference to a variable. The case class takes the `LocalName` of the referenced variable (or a `string`) as argument.

    `OMV`s can be substituted by arbitrary terms in an object. For `v:OMV`, `t:Term` and `s:Obj`, the expression `v/t` yields a Substitution of `v` by `t`, which can be applied to `s` with the expression `s ^? (v/t)`. 
  
  * **[`OMLITTrait`](apidoc://info.kwarc.mmt.api.objects.OMLITTrait)**: the trait being used by all [literals](../../language/literals). It has a `synType` method that returns its syntactic type. There are two variants of `OMLIT`, differing mostly in their `value` method:
    * An [`OMLIT`](apidoc://info.kwarc.mmt.api.objects.OMLIT) has a known *[RealizedType]TODO* and its `value` method returns the corresponding type of its semantic type (declared as `Any`).
    * An [`UnkownOMLIT`](apidoc://info.kwarc.mmt.api.objects.UnknownOMLIT)** has no (yet) known semantic type - the latter is usually inferred during type checking, so this usually only occurs between parsing and checking. Its `value` method returns the unparsed string of the literal value.

  Many of the content objects have `toTerm` methods, that return the appropriate terms to reference these on the object level - usually an `OMID` (in the case of constants or modules), in the case of variable declarations an `OMV`. Similarly, terms have a `toMPath` method, that returns a path to a module in the case, where the term is a reference to a module (or a declaration within one).
  
  The class [`objects.Traverser`](apidoc://info.kwarc.mmt.api.objects.Traverser) can be used to perform operations recursively on a term. A good example implementation of a traverser is [`objects.PushMorphs`](apidoc://info.kwarc.mmt.api.objects.PushMorphs).
* **[`objects.VarDecl`](apidoc://info.kwarc.mmt.api.objects.VarDecl)**: represents a variable declaration. The case class takes a name (`LocalName`) and optionally a type (`Option[Term]`), definition (`Option[Term]`) and notation (`Option[TextNotation]`) as arguments.
* **[`objects.Context`](apidoc://info.kwarc.mmt.api.objects.Context)**: represents a list of variable declarations. In fact, implicit conversion methods declared in the Context [companion object](apidoc://info.kwarc.mmt.api.objects.Context$) allow for using any
instance of `List[VarDecl]` as a `Context` and the other way around.
