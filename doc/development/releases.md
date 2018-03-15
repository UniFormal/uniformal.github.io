---
layout: doc
title: Releases & Changelog
---

Since Fall 2017, a new binary version of MMT is released roughly every six weeks. 
See the [development roadmap on GitHub](https://github.com/UniFormal/MMT/milestones) for scheduled improvements.
To keep up-to-date, you can [subscribe to the Atom Feed](https://github.com/Uniformal/MMT/releases.atom). 

### Changelog

This document contains a changelog of existing as well as upcoming releases. 


<!--
#### Release 11 (unreleased)

This release has not yet been released and is scheduled for [17th April 2018](https://github.com/UniFormal/MMT/milestone/3). 

- now improvements yet
-->

#### Release 10 (unreleased)

This release has not yet been released and is scheduled for [15th March 2018](https://github.com/UniFormal/MMT/milestone/2). 

- new treatment of defined, untyped constants
- Simplifier now supports deep simplification
    - can be set via a boolean flag 
- JEdit Sidekick improvements
- Travis Test Improvements
    - addition of proper test structure
    - cleaned up tests for API and LF
    - added alignment tests
    - preliminary co-versioning of archives and MMT system
- TGView Improvements
    - not documented
- Cleanup of localmh functionality
    - replaces previous `oaf` shell action
    - now possible to install multiple archives at once
- Dependency Updates
    - Upgrade Scala to 2.12
    - Upgrade Tiscaf
    - remove non-funcational GuidedTours plugin
- proper versioning of MMT within sbt
- use the MMT logo within the webserver
- re-styling and documentation cleanup
- various bugfixes and cleanup

<!--
Released on [15th March 2018](https://github.com/UniFormal/MMT/releases/tag/v10.0.0). 
-->


#### Release 9

Released on [20th December 2017](https://github.com/UniFormal/MMT/releases/tag/20-Dec-2017). 

- Preliminary implementation of parametric theories (experimental!)
- fixed lexing of float literals
- TGView updated
- Travis testing improved
- Preliminary support for Java 9
- Bumped scala version to 2.11.12
- Simplifier improved

#### Release 8

Released on [6th Nov 2017](https://github.com/UniFormal/MMT/releases/tag/06-Nov-2017). 

- Views are now checked for totality
- Improved Query error messages
- Improved and redesigned graphviewer
- Added set of alternative (higher unicode instead of lower ASCII) delimiters that allow for previewing .mmt files in github/gitlab
- Fixed bug concerning higher unicode symbols in .mmt files
- Improved SCSCP implementation
- BuildQueue now better tracks build dependencies
- Autocompletion in MMT shell
- Added Singular importer to mmt-odk plugin
- various bugfixes

#### Release 7

Released on [11th May 2017](https://github.com/UniFormal/MMT/releases/tag/11-May-2017). 

* New additions:
  * Views are allowed within Theories now
* Improvements:
  * Theory Combinators are now fully implemented
  * The MMT build manager now uses the catalogue to dereference logical dependencies, this improves the automated build of OAF libraries like the PVS library
  * Structures are now elaborated correctly
  * Refactoring of WebServer and ServerExtension Code
  * Improvements to lmfdb, Sage and GAP
  * Improvements to Client-Side Interactive Graph
  * Some problems with Elaboration in general fixed
* Miscellaneous other bug fixes and improvements

#### Release 6

Released on [13th April 2017](https://github.com/UniFormal/MMT/releases/tag/13-Apr-2017). 

* New additions: 
  * Introduction of Theory Expressions
  * OpenDreamKit Importers: Sage, GAP
  * Client-Side Interactive Graph
  * new advanced REPL with a prompt and Tab Completion support
* Improvements:
  * Improvements to MathScheme Components
  * Improvements to the HTML Presenter
  * Improvements to PVS Components
  * Improvements of MMT termination behaviour
  * Rework of VarDecl class
* Miscellaneous other bug fixes and improvements

#### Release 5

Released on [22nd February 2017](https://github.com/UniFormal/MMT/releases/tag/22-Feb-2017). 

* New additions:
  * Initial version of Active Computation Extension
* Improvements:
  * Update to Travis Build Scripts
  * Webserver Improvements, including CORS support, hostname support, and client side libarary updates]

#### Release 4

Released on [8th February 2017](https://github.com/UniFormal/MMT/releases/tag/08-Feb-2017). 

* Improvements to IMPS Parser
* Improvements to PVS Importer
* Improvements to Metamath Importer / Parser
* Miscellaneous other bug fixes and improvements

#### Release 3

Released on [26th January 2017](https://github.com/UniFormal/MMT/releases/tag/26-Jan-2017). 

* New additions:
  * Introduction of Alignments and Concept Server along with translation
  * Initial version of IMPS Parser
  * Initial version of an SCSCP Server
* Improvements:
  * Refactoring of Parsing Infrastructure
  * Reworked to the Query Language, specifically w.r.t. Virtual Theories
  * Improvements to Mizar
* Miscellaneous other bug fixes and improvements

#### Release 2

Released on [30th August 2016](https://github.com/UniFormal/MMT/releases/tag/30-Aug-2016). 


* New additions:
  * Semantic Highlighting in jEdit
* Improvements:
  * Improvements of the Metamath Importer / Translator
  * Fixing of the lmfdb Virtual Theory
 * Miscellaneous other bug fixes and improvements


#### Release 1

Released on [28th July 2016](https://github.com/UniFormal/MMT/releases/tag/28-Jul-2016). 

The first release of MMT on GitHub.