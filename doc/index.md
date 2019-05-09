---
layout: doc
title: Overview
---

MMT is a framework for knowledge representation using formal languages such as logics, type theories, ontologies, set theories, etc..
It achieves a high level of generality by systematically avoiding a commitment to a representational paradigm, a particular concrete or abstract syntax, or a particular semantics.

Instead, individual features of the abstract syntax (e.g., lambda-abstraction, conjunction), the concrete syntax (e.g. keywords, notations), or the semantics (e.g., excluded middle, set theoretical interpretation) are defined as separate, reusable modules, from which individual languages are assembled.

Despite this high degree of abstraction, it is possible to implement advanced algorithms generically at the MMT level.
The MMT system includes powerful generic solutions for knowledge management (e.g, IDE, change management) and verification (e.g., type reconstruction, module system).

By designing knowledge representation languages inside MMT, we can obtain strong implementations at extremely low cost.

A more detailed overview can be found in [this paper](philosophy/articles/mmt.pdf).

### What does MMT stand for?

The abbreviation means *m*eta-*m*eta-*t*heory or *m*eta-*m*eta-*t*ool, depending on whether you want to emphasize the theoretical or the practical aspects.

Here meta refers to using formal systems in which we represent, reason about, and implement languages.
meta-meta means that we abstract even from the concrete formal system used to do that.
This double meta level is a unique characteristic of MMT and, maybe surprisingly, makes it easier to build generic solutions than a single meta-level.

### Structure of this Documentation

This is the main entry point to the MMT documentation.
The documentation contains:

* practical instructions for [getting started](setup/) as a user as well [tutorials](tutorials/) for typical tasks
* a theoretical overview of the general [philosophy](philosophy/) behind MMT and the concrete [language](language/)
* information about the structure of the [MMT API](api/)
* documentation for individual [applications](applications/) built on top of the MMT API
* structure of the [development](development/) of MMT

### Disclaimer

MMT has been developed since 2005 and its theoretical foundation and practical implementation has become very mature.
But it continues to be developed in parallel with the research that informs its design.
Therefore, this documentation is occasionally incomplete or outdated.

We are committed to maintaining robust work flows for releasing, documenting, and bug-tracking to support large-scale applications.
But that takes effort, and we prioritize according to the concrete research projects we are involved in.

If you have any questions or feedback -- for example, if you want your particular use case to be better documented -- don't hesitate to contact me [directly](https://kwarc.info/frabe/contact.html). 
