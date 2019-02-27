---
layout: doc
title: Abstract Syntax
---
This section gives an overview of MMT's **abstract syntax** and the corresponding classes in the [MMT API](../). MMT's surface syntax is described in detail [here](../../language/).

### Abstract Grammar

The (simplified) abstract syntax of MMT is:

 Level | Symbol | Grammar | Description
---- |----: | :---- | ----
*Document Level* | | |
. | `Doc` | `:= (Thy | Mor)*` | [Documents](narrative.html)
*Module Level* | | |
. | `Thy` | `:= c [:o] = {Dec*}` | [Theories](structural.html#theories)
. | `Mor` | `:= c : o -> o = {Ass*}` | [Views](structural.html#views)
*Symbol Level* | | |
. | `Dec` | `:= c [:o] [=o] [#N]` | [Declarations](structural.html)
. | `Ass` | `:= c = o` | Symbol [Assignments](structural.html#constants)
*Object Level* | | |
. | `o`   | `:= c | x | c( (x[: o])* ; o* ) | c(STRING)` | [Objects/Terms](objects.html)
. | `N`   |   | [Notations](declarations.html#constants)
. | `c`   |   | [URI](uris.html)
. | `x`   |   | [Variable](objects.html)

### Data Structures

**[`api.Content`](apidoc://info.kwarc.mmt.api.Content)** is the top level datastructure for all of the classes representing the MMT language. For our purposes, it branches into 
* [`api.NarrativeElement`](apidoc://info.kwarc.mmt.api.NarrativeElement) (described [here](narrative.html)), e.g. documents,
* [`api.StructuralElement`](apidoc://info.kwarc.mmt.api.ContentElement) (described [here](content.html)), e.g. modules, declarations and 
* [`objects.Obj`](apidoc://info.kwarc.mmt.api.objects.Obj) (described [here](objects.html)), e.g. terms and contexts.

The following inheritance graph gives an overview of the most relevant data structures in the [MMT API](../):

![data structures](/doc/img/datastructures.png)
