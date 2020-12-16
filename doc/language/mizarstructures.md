---
layout: doc
title: Mizar Structures
---

### Declaraing a mizar structure
The structural feature **mizarStructure** for mizar structures used to elaborate a mizar structure into a record type along with restriction functions onto the structures this one inherits from. 
A derived declaration for this features consists of:

* A name of the derived declaration
* A list of parameters of the derived declaration (similar to theory parameters)
* Optionally one or several includes of the derived declarations of the structures this one extends
* The internal declarations defining the fields of the record

* The internal declarations define a name as well as the type of the fields of the record.
* Since they must all have the type `tp` in mmt, their type is given as a definien (if the type is `tp`, the definien is optional)

#### Notation of an mizar structure declaration

The syntax for a derived declaration `<name>` of the **mizarStructure** feature looks as follows:

`mizarStructure <name>(<parameter list>)` ![`\US`](../img/US.png) `= `
<br>`include  <includedStructure1>` ![`\RS`](../img/RS.png)
<br>`include  <includedStructure2>` ![`\RS`](../img/RS.png)
<br>...
<br>`include  <includedStructuren>` ![`\RS`](../img/RS.png)
<br>`<fieldl>: tp `![`\US`](../img/US.png)  `= tpDef1` ![`\RS`](../img/RS.png)
<br>`<field2>: tp `![`\US`](../img/US.png)  `= tpDef2` ![`\RS`](../img/RS.png)
<br>...
<br>`<fieldm>: tp `![`\US`](../img/US.png)  `= tpDefm` ![`\RS`](../img/RS.png)
<br>![`\GS`](../img/GS.png)

The declarations in the derived declaration `<name>` can additionally use the parameters given in `<parameter list>` (similar to theory parameters). 
