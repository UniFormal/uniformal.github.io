---
layout: doc
title: The Controller
---

The MMT code is distributed over multiple components. The [`frontend.Controller`](apidoc://info.kwarc.mmt.api.frontend.Controller) class creates one instance of each component.
These components include the following:

* The [`frontend.Memory`](apidoc://info.kwarc.mmt.api.frontend.Memory) stores all known instances of data structures of the [MMT language](../language/), i.e., documents, theories, etc. It provides methods for retrieving, adding, updating, and deleting knowledge items identified by their [MMT URI](../language/uris).
    The same methods are present on the Controller class. High-level requests should always go through the Controller to benefit from transparent retrieval and change management.
* The [`backend.Backend`](apidoc://info.kwarc.mmt.api.backend.Backend) maintains connections to all known physical locations of MMT content. When retrieving a knowledge item by its [MMT URI](../language/uris) that is not held in memory, it is transparently retrieved by the backend and stored in the memory.
* The [`frontend.ExtensionManager`](apidoc://info.kwarc.mmt.api.frontend.ExtensionManager) maintains all registered [extensions](extensions/).
* The [`parser.Parser`](apidoc://info.kwarc.mmt.api.parser.Parser) reads data structures in native [MMT text syntax](../language/).
* The [`checking.MMTStructureChecker`](apidoc://info.kwarc.mmt.api.checking.MMTStructureChecker) validates MMT data structures.
* The [`ontology.Evaluator`](apidoc://info.kwarc.mmt.api.ontology.Evaluator) evaluates queries of the [MMT query language](queries.html).
* The [simplifier (`uom.UOM`)](apidoc://info.kwarc.mmt.api.uom.UOM) is a rewriting-like engine for MMT expressions that performs simplification and computation.

No static part of the MMT code maintains state: All stateful objects are maintained by the Controller or by one of the components maintained by the Controller.
Components that must communicate with the Controller or with other components are passed the appropriate instance as a constructor argument. 
