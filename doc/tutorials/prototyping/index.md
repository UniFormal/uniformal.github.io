---
layout: doc
title: Language Design in MMT
---

In this tutorial, we build an implementation of first-order logic (FOL) in MMT.

It assumes that

* MMT has been [installed](../../setup),
* archives are placed in some folder, which is refered to as `CONTENT`,<span class="detail">The MMT installer should take care of this </span>
* [jEdit](../../applications/jedit) is used for editing mmt files.<span class="detail">Other editors will work but might make editing awkward.</span>

### Define a Meta-Logic

Actually, we will skip this step because only advanced users need to define their own meta-logic.

Instead, we can choose one of the meta-logics already defined in MMT.
The most important example is the logical framework LF, whose MMT URI is
`http://cds.omdoc.org/urtheories?LF`.

This theory is defined in the archive MMT/urtheories, which is automatically cloned into the folder CONTENT when setting up MMT.

<div class="detail" markdown="1">
Other important meta-logics defined in this archive include

* `http://cds.omdoc.org/urtheories?PLF` extends LF with shallow polymorphism
* `http://cds.omdoc.org/urtheories?LFModulo`, which extends LF with a rewrite system

These can also be combined.
</div>

For FOL, LF is sufficient as a meta-logic.

### Define the Formal System in an Appropriate Meta-Logic

We create a new file `fol.mmt`, in which we will define FOL.

#### Creating the File

It does not matter where this file is located.
But to allow for running MMT build targets over it later, it is convenient to place it in a new MMT archive:

* create a folder `CONTENT/myarchive`
* create a file `MANIFEST.MF` in it containing (at least) the lines
 
  ```
  id: myarchive
  narration-base: http://mydomain.org/myarchive
  ```
* and create a file `source/fol.mmt` in it

<span class="detail">The id is some string that is used to refer to the archive. The narration base is some URI that is used as the default namespace for forming unique identifiers for the content of the archive.</span> 

#### Create a Theory for FOL

Open the file in jEdit and create an empty theory:

```
namespace http://mydomain.org/mmt-example [GS]

theory FOL : http://cds.omdoc.org/urtheories?LF =

[GS]
```

Here

* The `namespace` declaration defines a unique namespace (a URI) for our example.<span class="detail">The URI does not have to be a URL, i.e., it does not have to point to a physical location. It only acts as a unique identifier.</span> 
* The `theory` introduces an MMT theory called `FOL` with meta-theory `http://cds.omdoc.org/urtheories?LF`.<span class="detail">Alternatively, we can write `ur:?LF` because the namespace prefix definition `import ur http://cds.omdoc.org/urtheories [GS]` is implicitly present.</span>
* `[GS]` refers to ASCII 29, the toplevel [delimiter](../../language/delimiters.html) used by MMT.
  In jEdit, it can be inserted via the symbol button for it or by typing `jGS `.


#### Define the Syntax and Semantics of FOL

From this point on forwards, defining a language proceeds according to LF.

The details of doing so are given in the self-documenting mmt files in the archive `CONTENT/MMT/examples`, which has been cloned automatically when setting up MMT.

It contains the full definition of `FOL` in the file `tutorial/1-sfol.mmt`.
To complete this step of the tutorial, copy over the declarations in this file step by step.
(Note that this tutorial makes you use a different namespace than the that file. That's important to make sure all declarations have unique URIs.) 

#### View the Logic in the Browser

We can start the MMT web server from within jEdit to view our definition in the browser:

* go to the jEdit plugin called `console`
* choose `mmt` as the console language
* type `server on 8080` in the console (or some other port number)
* point your browser to [](http://localhost:8080?http://mydomain.org/mmt-example?FOL)

#### Build and Serve the Archive

To build your archive, use the command `build myarchive mmt-omdoc fol.mmt`. This will build all `mmt` files in your archive and convert them into `omdoc` (which is the XML format that MMT uses internally, corresponding to the binary files produced by a compiler).
The `omdoc` files are put into the folders `narration` (one `omdoc` file per source file) and `content` (one `omdoc` file per module in those source files).
Additionally, index files for fast querying are placed in the folder `relational`.

You can build the archive from within jEdit (by using the jEdit console as above).

Alternatively, you can build it directly from the MMT shell without involving jEdit.
Start the shell by running `mmt.jar`.
Then type

```
build myarchive mmt-omdoc fol.mmt
server on 8081
```

<span class="detail">The shell is completely independent from jEdit (but works with the same archives). Therefore, we use a different port number above.</span>

Eventually, you can leave the shell by typing `exit`.

### Use FOL to Build a Small Algebra Library

We can now apply our defined system to formalize some knowledge.
We pick algebra as an example.

#### Formalize the Library

Create a file `algebra.mmt` in your archive and put

```
namespace http://mydomain.org/mmt-example [GS]

theory Semigroup : ?FOL =

[GS]
```

This creates a new theory for semigroups, this time using our new theory `FOL` as the meta-theory.
<span class="detail">Because both theories are in the same namespace, we can use a relative URI to refer to `http://mydomain.org/mmt-example`.</span>

As for `FOL`, we do not give the details of the formalization here.
Instead, we refer to the self-documenting file `tutorial/2-algebra.mmt` in the archive `CONTENT/MMT/examples`.

#### Build and Serve the Library

Like before, you can now

* build the library using `build myarchive mmt-omdoc algebra.mmt`
* serve it using `server on 8081`.
