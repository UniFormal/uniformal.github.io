---
layout: doc
title: Inductive Types
---

### Declaraing an inductive type

The structural feature **inductive** for inductive types can be used to elaborate to define (mutally) inductive types. A derived declaration for this features consists of:

* A name of the derived declaration
* A list of parameters of the derived declaration (similar to theory parameters)
* The internal declarations defining the inductive type

There are three types of internal declarations:

* Type-Level internal declarations declaring the (mutaully) inductively-defined types we want to define
* The constructors of those types
* Further outgoing termlevel declarations, i.e. for declaring additional properties of the inductive type

#### Notation of an inductive type declaration

The syntax for a derived declaration `<name>` of the inductive feature looks as follows:

`inductive <name>(<parameter list>)` ![`\US`](/doc/img/US.png) `= `
`<tpl>: <tp>` ![`\RS`](/doc/img/RS.png)
`<con>: <args> &rightarrow <tp>` ![`\RS`](/doc/img/RS.png)
`<out>: <args2> &rightarrow <tp2>`![`\RS`](/doc/img/RS.png)
...
![`\GS`](/doc/img/GS.png)

Here we have a typelevel `<tpl>` (of type `<tp>`), a constructor `<con>` of `<tpl>` and an outgoing declaration `<out>`. The declarations in the inductive type `<name>` can additionally use the parameters given in `<parameter list>` (similar to theory parameters). 

#### Restrictions of the internal declarations

There are some restrictions on the internal declarations of derived declaration of the structural feature for inductive types for the derived declaration to be well-formed. In particular:

* The body of the derived declarations must be well-formed as an MMT theory.
* The internal declarations must be (at most) shallow polymorphicly typed
* The constructors may not be dependently-typed, except for dependencies on arguments occuring in all constructors of the inductively-defined type
* The constructors may not have arguments of higher order in an inductively-defined type.
* The outgoing declarations must be consistent with each other and the elaboration of the typelevel declarations and constructors (in particular the no-confusion declarations)

#### Inductive function definitions

To define functions by induction over inductive types a convenience feature [**inductive_definition**](inductivedefinitions.md) for inductive definitions can be used. 
