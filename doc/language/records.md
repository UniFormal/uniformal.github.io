---
layout: doc
title: Record Types
---

### Declaraing a record type

The structural feature **record** for inductive types can be used to define record types. A derived declaration for this features consists of:

* A name of the derived declaration
* A list of parameters of the derived declaration (containing the variables of the types of the fields)
* The (outgoing termlevel) internal declarations defining the fields of the record

#### Notation of a record type declaration

The syntax for a derived declaration of the record feature looks as follows:

<!--![-->`record <name>(<parameter list>) \US = 
<out1>: <args1> &rightarrow <tp1> \RS
...

<outn>: <argsn> &rightarrow <tpn> \RS
\GS`<!-- ](/doc/img/inductSyntax.png)-->

Here we have the outgoing declarations <out1>, ..., <outn> defining the names <out1>, ..., <outn> and types <tp1>, ..., <tpn> of the record fields. The types <tp1>, ..., <tpn> may depend on the parameters given in <parameter list> (similar to theory parameters). 

### Declaring an instance of a record type

There is an additional convenience feature **record_term** to construct instances of a record type. A derived declaration for this feature consists of:

* A name <name> of the derived declaration
* A list <parameter list> of parameters of the derived declaration
* A reference to the record type definition <recTp> of which we want to construct an instance and values <parameters for recTp> for the parameters of <recTp>
* The internal declarations defining the values of the fields of the record

#### Notation of a record_term declaration

The syntax for a derived declaration of a record_term is as follows:

<!--![-->`record <name>(<parameter list>): <recTp>(<parameters for recTp>) \US = 
<out1> \US = <def1> \RS
...

<outn>\US = <defn> \RS
\GS`<!-- ](/doc/img/inductSyntax.png)-->

Here we have the outgoing declarations <out1>, ..., <outn> defining the values <def1>, ..., <defn> of the record fields. These values, as well as the values in <parameters for recTp> may depend on the parameters given in <parameter list>. 
