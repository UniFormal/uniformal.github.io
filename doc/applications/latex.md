---
layout: doc
title: LaTeX Processing
---

MMT can serve as a LaTeX interpreter that turns LaTeX into [MMT data structures for informal knowledge](../language/informal.html).

It consists if the following steps:

1. [sTeX](https://www.ctan.org/tex-archive/macros/latex/contrib/stex) is used as a LaTeX style to mix formal with informal content 
1. [LaTeXML](http://dlmf.nist.gov/LaTeXML/) is used to process the LaTeX sources 
1. the sTeX extension to MMT (see the project `src/mmt-stex`) interprets the LaTeXML output as MMT content
1. any MMT algorithms (e.g., HTML generation) are called on the MMT content

Much of this workflow in Mihnea Iancu's PhD thesis.
But it is already used heavily in Michael Kohlhase's KWARC group for producing lecture materials.

Only partial documentation exists at this point:

* [Integration with sTeX](stex.html)
* [Integration with LaTeXML](latexml.html)