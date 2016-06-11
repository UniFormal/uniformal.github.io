---
layout: doc
title: About MMT
---

### Overview

MMT is a framework for knowlwedge representation using formal languages such as logics, type theories, ontologies, set theories, etc..
It achieves a high level of generality by systematically avoiding a commitment to a representational paradigm, a particular concrete or abstract syntax, or a particular semantics.

Instead, individual features of the abstract syntax (e.g., lambda-abstraction, conjunction), the concrete syntax (e.g. keywords, notations), or the semantics (e.g., excluded middle, set theoretical interpretation) are defined as separate, reusable modules, from which individual languages are assembled.

Despite this high degree of abstraction, it is possible to implement advanced algorithms generically at the MMT level.
The MMT system include powerful generic solutions for knowledge management (e.g, IDE, change management) and verification (e.g., type reconstruction, module system).

By designing knowledge representation languages inside MMT, we can obtain strong implementations at extremely low cost.

A more detailed overview can be found in [this paper](https://svn.kwarc.info/repos/MMT/doc/introduction/mmt.pdf).

###

This is the main entry point to the MMT documentation.
It contains:

* practical instructions for [getting started](setup/index) as a user as well [tutorials](tutorials/index) for typical tasks
* a theoretical overview of the general [philosophy](philosophy/index) behind MMT and the concrete [language](language/index)
* documentation for individual [applications](applications/index) built on top of the MMT API
* information for developers about the structure of the [MMT API](api/index)


**Disclaimer**: MMT has been developed since 2005 and its theoretical foundation and practical implementation has become very mature.
But it continues to be developed in parallel with the research that informs its design.

We are committed to maintaining robust work flows for releasing, documenting, and bug-tracking to support large-scale applications.
But we also watch out not let these get in the way of doing research.

If you have any questions or feedback, don't hesitate to contact me [directly](http://kwarc.info/frabe/contact.html). 
