---
layout: doc
title: Generic Literals
---

MMT uses generic literals. That means that the MMT syntax does not commit to a particular set of literals.
This is a deviation from [OpenMath](http://www.openmath.org) (which fixes - somewhat arbitrarily - integers, floating point numbers, strings, and byte arrays).
MMT literals are

* *extensible*: any type of literals can be added
* *local*: only theories that explicitly declare a type of literals may use them
* *subject to computation*: a type of literals can define computation rules for them, e.g., to simplify 1+1 into 2
