---
layout: doc
title: Releases & Changelog
---

Since Fall 2017, a new binary version of MMT is released roughly every six weeks. 
See the [development roadmap on GitHub](https://github.com/UniFormal/MMT/milestones) for scheduled improvements.
To keep up-to-date, you can [subscribe to the Atom Feed](https://github.com/Uniformal/MMT/releases.atom). 

### Changelog

This document contains a changelog of existing as well as upcoming releases. 

### Release 15

- IDE Improvements
  - Support for the [MMT Plugin for the IntelliJ-IDE](https://github.com/UniFormal/IntelliJ-MMT)
  - added a Scala console to JEdit to interact with MMT's internal classes from within jEdit

- New examples in `MMT/examples`
  - resource semantics of linear logic (`logic/linear.mmt`)
  - prototypical theorem prover (`logic/prover.mmt`)
  - proof irrelevance as a logical feature (`logic/pl.mmt`)
  - inductive functions on lists as special cases of rewrite rules (`lists.mmt`)
  - case study on implicit morphisms: lattice of theories of regular bands
- New Concrete link syntax
  - for includes that include a morphism expression as opposed to an MMT URI
- Added support for right-associative delimiters in mixfix notations
  - Use `%Rd` for delimiter `d` that associates to the right
- Cleanups and additions to various internal components
  - first steps towards implicit coercions
  - new class `DocumentLevel` (e.g., archive, folder, file, theory, etc.); every document now carries it level
  - new `elementEnd` calls after processing container elements in all MMT components
  - dropped distinction between declared and defined elements, container elements now inherit from `ModuleOrLink` class
  - re-implemented applicability check of checking rules
  - various cleanups of the MathHub API
- compatible with major reimplementations of archives:
  - `LFX`
  - `MitM/Foundation`
  - `MitM/smglom`

### Release 14

Released on [13th November 2018](https://github.com/UniFormal/MMT/releases/tag/v14.0.0).

- MitM infrastructure for using MMT as system integration mediator (as used in the OpenDreamKit project)
- major rewrite of the type checker to allow for head normalization with an arbitrary set of rules
- MMT kernel for Jupyter; import/export of Jupyter notebooks
- complete importer for Isabelle libraries by Makarius Wenzel (see [his blog post](https://sketis.net/2018/isabelle-mmt-export-of-isabelle-theories-and-import-as-omdoc-content) for details)
- OMDoc files now stored in compressed form using xz (requires clean rebuild of archives to remove old OMDoc files)
- major progress on the IMPS importer
- rework of the MathHub API
- minor lmh cleanup
- stopped using `sbt test` for integration tests (makes them more reproducible)
- compatible with major reimplementations of archives:
  * LFX
  * MitM/Foundation
  * MitM/smglom

### Release 13

Released on [30th August 2018](https://github.com/UniFormal/MMT/releases/tag/v13.0.0). (This release was delayed until August 30 to avoid new releases during conference season.)

- new class AnnotationProvider for providing extra information on MMT declarations
  these are shown in particular in the jEdit gutter
- first version of structural features for inductive types, record types
- improved statistics generation
- major progress on Isabelle importer
- minor improvements of GAP/Sage-Imports and LMFDB-Plugin

### Release 12

Released on [26th June 2018](https://github.com/UniFormal/MMT/releases/tag/v12.0.0).

- Switched the IMPS importer to parser combinators
- added a Python bridge to control MMT from Python (using Py4J), see python-mmt
- started Isabelle importer (see mmt-isabelle)
- MMT tasks now carry progress messages (currently sent by structure parser/checker/elaborator)
- jEdit gutter contains marker indicating checking progress
- stop button in jEdit toolbar to gracefully kill MMT processing of file
- LaTeX-MMT integration works, see self-documenting example.pdf in latex-mmt
- extensions can now add productions to the syntax of the MMT shell
- various technical improvements and fixes
- lmh can now handle non-archive repositories
- new MathHub Extension
- Dockerfile improvements
- SBT dependency changes

#### Release 11

Released on [3rd May 2018](https://github.com/UniFormal/MMT/releases/tag/v11.0.0). 

- implemented a Jupyter Kernel based on MMT
    - updated MMT REPL Extension
- added Viewfinder
- moved Dockerfile into main repository and enabled automatic builds
- updated setup to be able to be run in automated scenarios
- [TGView](https://github.com/UniFormal/TGView) updates
  - Added Redo-Button
  - Allow locking of nodes together
  - Added local graph editing
  - Added show/hide nodes manually
  - Added Show/Hide/Select nodes/edges by node-/edge-type
  - Added Save graph as JSON
- added importer for IMPS files
- minor improvements and bug fixes
  
#### Release 10.1

Released on [11th April 2018](https://github.com/UniFormal/MMT/releases/tag/v10.1.0). 

This release is smaller than previous releases and mainly contains various bugfixes for use throughout the semester. 

- added an MMT-specific context menu to jEdit
- an MMT Docker Container is now available at [kwarc/mmt](https://hub.docker.com/r/kwarc/mmt/) on DockerHub
- Deprecation of old delimiters and LF Arrows
    - systematic replacement across all existing archives
- [TGView](https://github.com/UniFormal/TGView) minor improvements
- numerous bugfixes and cleanup

#### Release 10

Released on [16th March 2018](https://github.com/UniFormal/MMT/releases/tag/v10.0.0). 

This release is much more substantial than previous releases, including major new features, the promotion of several previously experimental features to official ones, and numerous fixes of minor issues that had accumulated over time.

- complete overhaul of
   - strucuture level elaboration and type checking
   - handling of structure declarations in theories and morphisms
   - handling includes of parametric theories
- support for theory expressions (see MMT/examples)
- smarter type inference for defined, untyped constants
- simplifier now supports definition expansion (optionally)
- new lexing rule for flexible string interpolation (see MMT/examples for strings and quotation)
- [TGView](https://github.com/UniFormal/TGView) improved
    - allow sharing graphs via email, facebook, twitter, etc.
    - allow downloading as json and embedding in HTML
    - can upload custom graphs as json
- jEdit improvements
    - display of elaborated declarations in sidekick
    - display of rendered expressions as tooltips in sidekick
    - more precise highlighting of errors
    - jEdit action for normalization of the selected expression (bound to CS-N by default)
- travis test improvements
    - addition of proper test structure
    - cleaned up tests for API and LF
    - added alignment tests
    - preliminary co-versioning of archives and MMT system
- cleanup of localmh functionality
    - replaces previous `oaf` shell action
    - now possible to install multiple archives at once
- dependency Updates
    - upgrade sbt to 1.1.1
    - upgrade Scala to 2.12
    - upgrade tiscaf
    - remove non-funcational plugins: GuidedTours, leo
- proper versioning of MMT within sbt
- use the MMT logo within the webserver
- re-styling and documentation cleanup
- lots of bugfixes and cleanup

#### Release 9

Released on [20th December 2017](https://github.com/UniFormal/MMT/releases/tag/v9.0.0). 

- Preliminary implementation of parametric theories (experimental!)
- fixed lexing of float literals
- TGView updated
- Travis testing improved
- Preliminary support for Java 9
- Bumped scala version to 2.11.12
- Simplifier improved

#### Release 8

Released on [6th Nov 2017](https://github.com/UniFormal/MMT/releases/tag/v8.0.0). 

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

Released on [11th May 2017](https://github.com/UniFormal/MMT/releases/tag/v7.0.0). 

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

Released on [13th April 2017](https://github.com/UniFormal/MMT/releases/tag/v6.0.0). 

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

Released on [22nd February 2017](https://github.com/UniFormal/MMT/releases/tag/v5.0.0). 

* New additions:
  * Initial version of Active Computation Extension
* Improvements:
  * Update to Travis Build Scripts
  * Webserver Improvements, including CORS support, hostname support, and client side libarary updates]

#### Release 4

Released on [8th February 2017](https://github.com/UniFormal/MMT/releases/tag/v4.0.0). 

* Improvements to IMPS Parser
* Improvements to PVS Importer
* Improvements to Metamath Importer / Parser
* Miscellaneous other bug fixes and improvements

#### Release 3

Released on [26th January 2017](https://github.com/UniFormal/MMT/releases/tag/v3.0.0). 

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

Released on [30th August 2016](https://github.com/UniFormal/MMT/releases/tag/v2.0.0). 


* New additions:
  * Semantic Highlighting in jEdit
* Improvements:
  * Improvements of the Metamath Importer / Translator
  * Fixing of the lmfdb Virtual Theory
 * Miscellaneous other bug fixes and improvements


#### Release 1

Released on [28th July 2016](https://github.com/UniFormal/MMT/releases/tag/v1.0.0). 

The first release of MMT on GitHub.
