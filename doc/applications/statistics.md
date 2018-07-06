---
layout: doc
title: MMT Statistics Exporter
---

This adds the build target 'statistics' to MMT producing statistical information about an archive, an mmt document or a theory. The statistics are generated from the relational data files in an archive and are written to JSON files in export/statistics, one file per MMT document. Each statistics file contains a list of tuples of a key and a list of key value pairs (formally a JSON array of JSON objects consisting of a JSONString and a JSON array of JSON objects), each pair consist of a key describing the `sorts of relations to the declaration` considered and a list of tuples, consisting of a key describing the `type of declarations` counted and the count itself. 
How exactly different declarations in the archive are counted is detailed below: 

### Types of declarations

The statistics distinguishes the following `types of declarations` (abbreviated by a short `key` in the JSON files): 
- `document`, `theory` and `view` declared in the archive or document (transitive closure of the `declares` relation)
- `explicit theory morphism` (transitive closure of views)
- `any theory morphism`(transitive closure of any (explicit or implicit theory morphisms))
- `constant` of different type declared (as above) in the archive or document:
  - `structure` and `pattern`
  - `untyped constant` (can't be differentiated further) and `maltyped constant` (whoose type cannot be inferred succesfully)
  - Term-level constants (which ultimately return a term)
    - `data constructor`
    - `rule`
  - Type-level constants (which ultimately return a type)
    - `datatype constructor`
    - `judgment constructor`
  - constants of a `high universe` (returning a kind, or classes even higher in the type hirachy)
  - If not annotated otherwise (in the relational files) there are two fallbacks for declarations: 
    - `typed constant` for typed constants and `other` for non-constants
    
### Sorts of relations to the declarations
These types of declarations are counted for the following `sorts of relations to the declaration` of the given archive/document/theory as follows:
- `Declared declaration` (via possibly multiple intermediate declarations) of the given theory/document/archive
- `Induced declaration by explicit morphisms (views)` (via possibly multiple intermediate views)
- `Induced declaration by any morphisms` (via possibly multiple intermediate morphisms)
- `Alignment` (possibly via multiple intermediate alignments) of declared (as above) declarations

Since the statistics are based on the relational files, when an archive is updated, it needs to be rebuilt first, before the statistics can be updated. 

### Examples of one exported JSON file
The following example can be found in MMT/examples/export/statistics/narration/nat.json:

`[
  {
    "decl": [
      {
        "any_mor": 16
      },
      {
        "theo": 4
      },
      {
        "type": 2
      },
      {
        "ty_con": 8
      },
      {
        "data": 39
      }
    ]
  }
]
