---
layout: doc
title: Abstract Syntax
---
This section gives an overview of MMT's **abstract syntax** and the corresponding classes in the [MMT API](../). MMT's surface syntax is described in detail [here](../../language/).

### Abstract Grammar

The abstract syntax of MMT is:

 Level | Symbol | Grammar | Description
---- |----: | :---- | ----
*Document Level* | | |
. | `Doc` | `:= (Thy | Mor)*` | [Documents](namespaces.html)
*Module Level* | | |
. | `Thy` | `:= c [:o] = {Dec*}` | [Theories](modules.html#theories)
. | `Mor` | `:= c : o -> o = {Ass*}` | [Views](modules.html#views)
*Symbol Level* | | |
. | `Dec` | `:= c [:o] [=o] [#N]` | [Declarations](declarations.html)
. | `Ass` | `:= c = o` | Symbol [Assignments](modules.html#views)
*Object Level* | | |
. | `o`   | `:= c | x | c( (x[: o])* ; o* )` | [Objects/Terms](objects.html)
. | `N`   |   | [Notations](declarations.html#constants)
. | `c`   |   | [URI](../uris.html)
. | `x`   |   | [Variable](objects.html)

### Data Structures

**[`api.Content`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.Content)** is the top level datastructure for all of the classes representing the MMT language. For our purposes, it branches into 

* [`api.StructuralElement`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.StructuralElement) (described [here](structural.html)), e.g. modules, declarations and 
* [`objects.Obj`](http://kwarc.github.io/MMT/api/index.html#info.kwarc.mmt.api.objects.Obj) (described [here](objects.html)), e.g. terms and contexts.

The following (simplified) inheritance graph gives an overview of the most relevant data structures in the [MMT API](../):

![data structures](/doc/img/datastructures.png)
