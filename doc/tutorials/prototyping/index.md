---
layout: doc
title: Defining a Formal System in MMT
---

In this tutorial, we build an implementation of first-order logic (FOL) in MMT.

It assumes that

* MMT has been [installed](../../setup),
* archives are placed in some folder, which is refered to as `CONTENT`,
* [jEdit](../../applications/jedit) is used for editing mmt files<span class="detail">Other editors will work but might make editing awkward</span>.

### Define a Meta-Logic

Actually, we will skip this step because only advanced need to define their own meta-logic.

Instead, we can choose one of the meta-logics already defined in MMT.
The most important example is the logical framework LF, whose MMT URI is
`http://cds.omdoc.org/urtheories?LF`.

This theory is defined in the archive MMT/urtheories, which is automatically cloned into the folder CONTENT when setting up MMT.
<div class="detail">
Other important meta-logics defined in this archive include
<ul>
<li>`http://cds.omdoc.org/urtheories?PLFextends` LF with shallow polymorphism</li>
<li>`http://cds.omdoc.org/urtheories?LFModulo`, which extends LF with a rewrite system</li>
</ul>
These can also be combined.
</div>

For FOL, LF is sufficient as a meta-logic.

### Define the Formal System in an Appropriate Meta-Logic

We create a new file `fol.mmt`, in which we will define FOL.

#### Creating the File

It does not matter where this file is located.
But to allow for running MMT build targets over it later, it is convenient to place it in a new MMT archive:

* create a folder `CONTENT/MYARCHIVE`
* create a file `MANIFEST.MF` in it containing the line `id: MYARCHIVE`,
* and create a file `source/fol.mmt` in it

#### Create a Theory for FOL

Open the file in jEdit and
