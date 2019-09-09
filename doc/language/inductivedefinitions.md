---
layout: doc
title: Inductive Definitions
---

### Defining a function by induction over an inductive type

In order to define a function by induction on an inductive type <indTp> a well-typed definition must be provided for each internal declaration of the inductive type <indTp>. 

#### Notation for inductive definitions

The syntax for an inductive definition looks as follows:

`inductive_definition` `<name>`(`<parameter list>`): `<indTp>`(`<values of parameters of indTp>`) ![`\US`](../img/US.png) `=`<br> 
`<tpl>`: `<tp>` ![`\US`](../img/US.png) = `<Tp>` `![`\RS`](../img/RS.png)`<br>
`<con>`: `<args> ⟶ <tp>` ![`\US`](../img/US.png) = `<def>`  `![`\RS`](../img/RS.png)`<br>
`<out>`: `<args2> ⟶ <tp2>` ![`\US`](../img/US.png) = `<def2>` `![`\RS`](../img/RS.png)`<br>
...<br>
![`\GS`](../img/GS.png)

Here `<indTp>` is a reference to an inductive type initialised to its parameter list. This reference list must provide a value for each parameter of the inductive type `<indTp>`.

The types of the internal declarations given here can also be automatically inferred from the inductive type and don't need to be given by the user. As with inductive types, the parameters in the `<parameter list>` can be used anywhere in the body of the derived declaration, additionally they can also be used in the definition of the parameters used to initialize the inductive type.

#### Elaboration of inductive definitions

Inductive definitions are elaborated to the following delarations:

* A declaration of the specified inductively-defined function for each type inductively-defined by `<indTp>`
* A declaration axiomatizing the definition for each constructor case
* An equivalent declaration axiomatizing the definition, but with the inductive morphism applied to all its arguments (provided by a lambda binder)
