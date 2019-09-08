---
layout: doc
title: Independence
---
MMT goes out of its way to be be **generic** and **reusable**. It does not commit to a particular that is implemented, and it does not commit to a particular application that this implementation is used for.

**Foundation independence** is discussed in more detail in [this paper](https://kwarc.info/people/frabe/Research/rabe_future_15.pdf).

### Application Independence

MMT is an API and as such not committed to particular applications.
The MMT system includes several [MMT-based applications](../applications/) that yield, e.g., [build tools](../archives/building) for [MMT archives](../archives), a [jEdit-based text editor](../applications/jedit), or a [web server](../applications/server) for MMT content.

### Logic Independence
MMT is logic-independent, i.e., it is not commited to a particular logic.
Therefore, MMT users have to define their logic in MMT or import a logic defined by someone else.
MMT beginners should check out the [MMT archive](../archives) [urtheories](https://gl.mathhub.info/MMT/urtheories). This archive defines several basic languages, in particular the logical framework [**LF**](https://en.wikipedia.org/wiki/Logical_framework#LF). Other archives can be found at [OAF](../archives/oaf)
