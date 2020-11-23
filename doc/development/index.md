---
layout: doc
title: User and Developer Support
---

MMT blends the distinction between users and developers.
Some users use a ready-to-go version of MMT, while others customize MMT with extensions, e.g., for new language features or support for external formats.
The following typical use/development modes can be distinguished. 


### Using MMT without writing any code

All MMT functionality is language-independent.
Therefore, users can use MMT directly by defining their desired language in MMT:

* MMT is an extensible language where operators, typing rules, etc. can be added declaratively,
* MMT's rule-based algorithms can be customized by supplying new rules for, e.g., parsing, type-checking, etc.

MMT includes several main [applications](../applications/index) that are ready-to-use.
User-oriented documentation is growing, and good starting points are the [setup](../setup/index) instructions and the [tutorials](../tutorials/index).

There are multiple ways to [reach the main developers for support](../community/index). The best way is generally via the [MMT channel on our MatterMost instance](https://mattermost.kwarc.info/kwarc/channels/mmt).

### Developing new applications on top of MMT

The MMT code (written in Scala) is designed to be as [extensible](../api/extensions/index) and customizable as possible.
Therefore, you can build your own applications on top of MMT (without recompiling MMT).

MMT-based applications can be written in two ways:

* Include the MMT API (`mmt.jar`) in your project.
  MMT is written and Scala, and working with Scala is recommended. Alternatively, Java or any JVM-compatible language can be used.
  This allows:
  
  * instantiating the abstract interfaces designed for [extending MMT](../api/extensions/index),
  * or even replacing any of MMT's core components with your own variant.
                                        
* Use any other programming language and communicate with MMT via the HTTP API.
  If you use Python, use the [MMTPy project](https://github.com/UniFormal/MMTPy), which builds Python wrappers for the HTTP API.

### Developing MMT itself

Ultimately, MMT is a comprehensive research project about how to organize knowledge.
Therefore, it is never complete and can always be improved and extended.

MMT is open to the community, and access to the GitHub repository is given generously.
Interested developers are advised and encouraged to contact the core contributors directly in the [MMT MatterMost channel](https://mattermost.kwarc.info/kwarc/channels/mmt).
