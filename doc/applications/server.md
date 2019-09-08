---
layout: doc
title: The MMT Server
---

The MMT HTTP server is started using the command `server on PORT [HOSTNAME]` in the shell. `server off` switches it off.
When running this command, an HTTP Server will be started on `PORT`, by default this will only be reachable on `localhost`, but if desired a different `HOSTNAME` can be specified by giving the appropriate argument. 
In the following, we assume that no such argument is given, however all URIs will still work exactly the same if this is not the case. 

Individual services are available as `localhost:PORT/:SERVICE`. These may take arguments via a `?QUERY` or via the HTTP BODY.
Each *SERVICE* is defined by a [Server extension](../api/extensions).

#### Services
Some services are available by default, which can be browsed in the [API documentation](apidoc://info.kwarc.mmt.api.web.ServerExtension).

* `mmt`: retrieves the knowledge item whose [MMT URI](../api/uris) is QUERY. The URI may be followed with `present STYLE` to choose a presentation style. The default is OMDoc XML.
* `query`: interprets the BODY as a [QMT query](../api/queries) and returns the results.
* `svg`: serves the theory graph as an SVG element for the MMT document whose URI is `QUERY`.
* `admin`: interprets the query as an [MMT shell command](shell) and executes it

Note that logical algorithms like parsing, computation, etc. are exposed as special cases of QMT queries. 

### The MMT Web Site

The web browser is available at `localhost:PORT` after starting the HTTP server. Optionally, `localhost:PORT?MMTURI` can be used to set the initial page.

The web browser focuses on displaying the MMT content as HTML5 with presentation MathML and interactive JavaScript.
Some features are:

* The **sidebar** shows the hierarchy of documents and the theories defined within them.
  * *Clicking* on a document/theory loads it into the main area.
  * *Double-clicking* on a document loads its theory graph into the graph window. (If the graph window is not open yet, it is opened as a separate browser window.)
  * The tree can be expanded further below the theories. Then it will show all knowledge in relation to that theory via the MMT ontology. For example, this shows views into or out of the theory.
* The **main area** shows an MMT document or theory.
  * Nested documents and theories can be expanded in place by clicking on the keyword. Afterwards they can be folded in the same way.
  * Included theories can be loaded in place by clicking on the theory.
  * Each document/theory has a right-click menu that permits setting display options for the whole document/theory.
* **Mathematical formulas** in the main area show a variety of interactive behavior.
    * *Hovering* over
      * an *expression* selects the respective subexpression.
      * a *symbol* shows its full MMT URI as a tooltip.
      * a *variable* selects its declaration.
    * The *right-click menu* permits setting visibility options for the selected subexpression.
        These show/hide parts of the expression that were infered by the system:
      * *reconstructed types*: the omitted types of bound variables
      * *implicit arguments*: the omitted arguments to operator applications
      * *redundant brackets*: brackets that are not needed due to operator precedences
    * The right-click menu permits retrieving additional information from the server about *subexpressions*.
        This is displayed in a non-modal dialog window:
      * The type/definiens of the symbol under the cursor.
      * The type of the selected subexpressions. This type is computed dynamically on the server.
* The **graph view** is a separate browser window showing a theory graph (as SVG).
  * *Clicking* on a theory or view opens it in the main area.
  * The *mouse wheel* can be used for zooming.
  * *Dragging* the mouse can be used for panning.
