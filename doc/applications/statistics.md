---
layout: doc
title: MMT Statistics Exporter
---

This adds the build target 'statistics' to MMT producing statistical information about an archive an mmt document and the contained theories. The statistics are generated from the relational data files in an archive and are written to JSON files in export/statistics, one file per MMT document. Each statistics file contains a list of key value pairs (formaly a JSON array of JSON objects), each pair consist of a string describing what is counted and the count itself. 
How exactly different declarations in the archive are counted is detailed below: 

### Types of counted objects

The sorts of different counted objects are the following ones: 
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
- Induced declarations by `explicit theory morphism`, distinguished in the above types
- Induced declarations by `any theory morphism`, also distinguished in the above types
- `alignments` of the above types

Since the statistics are based on the relational files, when an archive is updated, it needs to be rebuilt first, before the statistics can be updated. 

### Examples of one exported JSON file
The following example can be found in MMT/examples/export/statistics/content/nat.json:

[
  {
    "theory": 4
  },
  {
    "datatype constructor": 2
  },
  {
    "typed constant": 8
  },
  {
    "data constructor": 39
  },
  {
    "Any theory morphisms": 16
  },
  {
    "Induced declarations via any theory morphisms of datatype constructor": 2
  },
  {
    "Induced declarations via any theory morphisms of typed constant": 73
  },
  {
    "Induced declarations via any theory morphisms of data constructor": 33
  }
]
