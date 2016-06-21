---
layout: doc
title: The LATIN Project: Logic Atlas and Integrator
---

LATIN aims at developing methods, techniques, and tools for interfacing logics and proof
systems. Logics allow making the mathematical knowledge at the core of science,
engineering, and economics accessible to computational systems like (semi-)automated
theorem provers, model checkers, computer algebra systems, constraint solvers, or concept
classifiers. Unfortunately, these systems have differing foundational assumptions and
input languages, which makes them non-interoperable and difficult to compare and evaluate
in practice.

The LATIN project focuses on developing a foundationally unconstrained framework for
knowledge representation that allows to represent the meta-theoretic foundations of the
mathematical knowledge in the same format and to interlink the foundations at the
meta-logical level. This approach of *logics as theories* leads to interoperability
of both system behavior and represented knowledge.

To evaluate the developed framework and provide a service to the community, the project
will build an atlas of logics used in automated reasoning, mathematics, and software
engineering concentrating on paradigmatic logics from first-order logic (TPTP, CASL, and
Mizar), higher-order logics (PVS, Isabelle/HOL, HasCASL), and logical frameworks (LF and
Isabelle). For all of these we will build logic representations in our framework and
(where possible) structure and relate them using logic morphisms.

Finally we will make the logic atlas sustainable and future-proof by developing a
community portal, a tool suite, and a workflow that allow outside users to add their
logics to the Logic Atlas by representing them in the LATIN framework and provide
interoperability-inducing logic morphisms.

### Institutions, Members, and Funding

LATIN is a joint research project between the [KWARC](http://kwarc.info/]) research group at Jacobs University Bremen and the research department [Safe and Secure Cognitive Systems](http://www.dfki.de/sks ) at the German Research Center for Artificial Intelligence Bremen (DFKI-Bremen). It is funded 2010-2011 by the [German Research Council (DFG)](http://www.dfg.de) under grant KO-2428/9-1.

Members of LATIN are [Michael Kohlhase](http://kwarc.info/kohlhase), [http://www.informatik.uni-bremen.de/~till/](Till Mossakowski), [Florian Rabe](http://kwarc.info/frabe/), [Mihai Codescu](http://www.dfki.de/web/forschung/sks/mitarbeiter/base_view?uid=mico01) and [Fulya Horozal](http://kwarc.info/fhorozal/).

At Jacobs University, also involved are [Christoph Lange](http://kwarc.info/clange/) and [Vyacheslav Zholudev](http://kwarc.info/vzholudev/). Students involved in LATIN are Kristina Sojakova, Stefania Dumbrava, Catalin David, Alin Iacob, Mihnea Iancu, Iulia Ignatov, Corneliu-Claudiu Prodescu, Jonathan von Schroeder and Martha Rohte.

### Main systems used in LATIN

The following systems and technologies are employed, designed, and/or developed within LATIN:

 * the [HETS](http://www.informatik.uni-bremen.de/agbkb/forschung/formal_methods/CoFI/hets/index_e.htm) system (Heterogeneous Tool Set): a logical framework based on model theory and institutions that uses logic translations to mediate between languages and systems (developed at DFKI Bremen),
 * the [Twelf](http://twelf.plparty.org/wiki/Main_Page) system: a logical framework based on proof theory and dependent type theory (developed at Carnegie Mellon University), which we equipped with an MMT-based module system,
 * the [OMDoc](https://trac.omdoc.org/OMDoc/) format: an XML-based document format for mathematical content developed at Jacobs University (developed at Jacobs University),
 * the [MMT](https://uniformal.github.io) language and system: a fragment of OMDoc designed as a scalable, foundation-independent module system for mathematical theories (developed at Jacobs University),
 * the [TNTBase](https://trac.mathweb.org/tntbase/) system: a database combining SVN and XML functionalities (developed at Jacobs University with support from DFKI Bremen),
 * the [JOBAD](https://jomdoc.omdoc.org/wiki/JOBAD) framework: a !JavaScript library for interactive mathematical documents (developed at Jacobs University).

### LATIN Atlas

LATIN will provide both a logical framework with a strong theoretical foundation, a scalable infrastructure for this framework, and a library of formalizations in it. On the theoretical side, LATIN will extend and unify the languages of Twelf, MMT, and Hets in order to provide a comprehensive logical framework. Applying the infrastructure to the library, we obtain a more tangible deliverables of the project: the LATIN Atlas of logics.

The formalizations underlying the LATIN Atlas use the new [Twelf module system](http://www.twelf.org/mod/) and are available at [https://gl.mathhub.info/MMT/LATIN]. In particular, the folders contain:

 * Type theories: formal languages based on typed expressions including a modular development of the lambda cube, Martin-L&öunl; Type Theory, and the type theory of Isabelle,
 * Logics: formal languages using formulas and truth including first-order, higher-order, modal, and description logics, usually including both proof and model theory,
 * Set theories: formal languages based on sets, including Zermelo-Fraenkel and the Mizar variant of Tarski-Grothendieck set theory,
 * Mathematics: some case studies from mathematics leveraging modularity,
 * Logic translations: a growing number of logic translations including , e.g., the relativization translations from modal, description, and sorted first-order logics to unsorted first-order logics, the interpretation of type theory in set theory, the negative translation from classical to intuitionistic logic, and the translation from first to higher-order logic.

When the LATIN project finished, the atlas was taken over by the [OAF](../oaf.html) project.
That also maintains the *browsable* HTML+MathML version of the atlas.
The web server uses a conversion of the Twelf sources into OMDoc/MMT and stores them in MathHub. Then the MMT web server retrieves the needed document fragments from MathHub and assembles the requested document on the fly. Then it uses notation definitions to render it into JOBAD-enabled XHTML+MathML. This already yields some useful non-trivial services such as folding and toggling the display of brackets, inferrable types, and implicit arguments.

A SVG image of the current snapshot of the LATIN *graph* is available [here](latin-graph.html).

### Papers (including drafts and preprints)

 * LATIN final [report](docs/latin_report.pdf), 2012.

 * M. Codescu, F. Horozal, T. Mossakowski, and F. Rabe. [Compiling Logics](docs/compiling-logics.pdf), Abstract in WADT 2012.

 * F. Horozal and F. Rabe. [Representing Categories of Theories in a Proof-Theoretical Framework](docs/theory-cats_abstract.pdf), Abstract in WADT 2012.

 * M. Codescu, F. Horozal, I. Ignatov, and F. Rabe. [Representing CASL in a Proof-Theoretical Framework](docs/representing-casl.pdf), Abstract in WADT 2012.

 * F. Horozal, M. Kohlhase, and F. Rabe. [Extending MKM Formats at the Statement Level](docs/pragmatic-strict.pdf), CICM 2012.

 * F. Horozal and F. Rabe. [Representing Logics of Theorem Provers --- TLTP: Tens of Logics for Theorem Provers](docs/tltp_draft.pdf), draft, 2012.

 * M. Iancu, M. Kohlhase, and F. Rabe. [Translating the Mizar Mathematical Library into OMDoc format](docs/Mizar2OMDoc-Report.pdf), KWARC-Report, 2011.

 * F. Horozal, A. Iacob, C. Jucovschi, M. Kohlhase, and F. Rabe. [Combining Source, Content, Presentation, Narration and Relational Representation](docs/mar_cicm11.pdf), CICM 2011.

 * M. Codescu and T. Mossakowski, [Refinement trees: calculi, tools and applications](docs/refinement-calco2011.pdf), CALCO 2011, LNCS.
 
 * M. Codescu and F. Horozal and M. Kohlhase and T. Mossakowski and F. Rabe, [LATIN project abstract](docs/latin-abstract_cicm11.pdf), CICM 2011.

 * M. Codescu and F. Horozal and M. Kohlhase and T. Mossakowski and F. Rabe and K. Sojakova, [Towards Logical Frameworks in the Heterogeneous Tool Set Hets](docs/latin-integration_wadt10.pdf), WADT 2010, to appear in LNCS.

 * M. Codescu and F. Horozal and M. Kohlhase and T. Mossakowski and F. Rabe, [A Proof Theoretic Interpretation of Model Theoretic Hiding](docs/latin-hiding_wadt10.pdf), WADT 2010, to appear in LNCS.

 * M. Codescu, [Lambda Expressions in CASL Architectural Specifications](docs/lambda-wadt2010.pdf), WADT 2010, to appear in LNCS.

 * M. Iancu and F. Rabe, [Formalizing Foundations of Mathematics](docs/foundations_mscs10.pdf), Mathematical Structures in Computer Science, 2011.
 Over the recent decades there has been a trend towards formalized mathematics, and a number of sophisticated systems have been developed to support the formalization process and mechanically verify its result. However, each tool is based on a specific foundation of mathematics, and formalizations in different systems are not necessarily compatible. Therefore, the integration of these foundations has received growing interest. We contribute to this goal by using LF as a foundational framework in which the mathematical foundations themselves can be formalized and therefore also the relations between them. We represent three of the most important foundations -- Isabelle/HOL, Mizar, and ZFC set theory -- as well as relations between them. The relations are formalized in such a way that the framework permits the extraction of translation functions, which are guaranteed to be well-defined and sound. Our work provides the starting point of a systematic study of formalized foundations in order to compare, relate, and integrate them.
 
  * [ZFC](https://svn.kwarc.info/repos/twelf/set_theories/zfc)
 
  * [Isabelle/HOL](https://svn.kwarc.info/repos/twelf/type_theories/isabelle) 
 
  * [Mizar](https://svn.kwarc.info/repos/twelf/set_theories/mizar) 

 * Mihai Codescu, Till Mossakowski, Adrían Riesco, Christian Maeder, [Integrating Maude into Hets](docs/maude-hets_amast10.pdf), AMAST 2010, LNCS.

 * K. Sojakova, [Mechanically Verifying Logic Translations](http://kwarc.info/frabe/Research/Soj_thesis_10.pdf), Master's Thesis, Jacobs University, 2010.

 * F. Horozal, M. Kohlhase, F. Rabe, K. Sojakova, [Towards an Atlas of Logics](http://kwarc.info/frabe/Research/HKRS_latinlf_10.pdf), the first paper about LATIN as a whole.

 * F. Rabe, [Representing Isabelle in LF](http://kwarc.info/frabe/Research/rabe_isalf_10.pdf), LFMTP 2010.

 * F. Horozal and F. Rabe, [Representing Model Theory in a Type-Theoretical Logical Framework](http://kwarc.info/frabe/Research/HR_folsound_10), Special issue on "Logical and Semantic Frameworks with Applications 8+9", Journal of Theoretical Computer Science, 2011.

 * F. Rabe and M. Iancu, [A Formalized Set-Theoretical Semantics of Isabelle/HOL](http://kwarc.info/frabe/Research/RI_isabelle_10.pdf)

 * F. Horozal and F. Rabe, [Representing Model Theory in a Type-Theoretical Logical Framework](http://kwarc.info/frabe/Research/HR_folsound_09.pdf), Fourth Workshop on Logical and Semantic Frameworks, with Applications, 2009.

  * F. Rabe and C. Schürmann, [A Practical Module System for LF](http://kwarc.info/frabe/Research/RS_lf_09.pdf) the Twelf instantiation of the MMT module system, LFMTP 2009.

 * S. Dumbrava, F. Horozal, and K. Sojakova, [A Case Study on Formalizing Algebra in a Module System](http://kwarc.info/frabe/Research/DHS_case-study_09.pdf), MLPA 2009. 
