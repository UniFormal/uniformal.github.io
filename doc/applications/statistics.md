---
layout: doc
title: MMT Statistics Exporter
---

This adds the build target 'statistics' to MMT producing statistical information about an archive, an mmt document or a theory. The statistics are generated from the relational data files in an archive and are written to JSON files in export/statistics, one file per MMT document. Each statistics file contains a list of tuples of a key and a list of key value pairs (formally a JSON array of JSON objects consisting of a JSONString and a JSON array of JSON objects), each pair consist of a key describing which relations are considered and a list of tuples, a key describing the type of objects counted and the count itself. 
How exactly different declarations in the archive are counted is detailed below: 

### Types of counted objects

The sorts of different counted objects are the following ones (although in the JSON files only a short key is written): 
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
The following example can be found in MMT/examples/export/statistics/narration/nat.json:

[
  {
    "decl": [
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
  },
  {
    "align": [
      
    ]
  },
  {
    "decl": [
      {
        "exp_mor": 0
      }
    ]
  },
  {
    "decl": [
      {
        "any_mor": 16
      }
    ]
  },
  {
    "exp_mor": [
      
    ]
  },
  {
    "any_mor": [
      {
        "type": 2
      },
      {
        "ty_con": 52
      },
      {
        "data": 33
      }
    ]
  }
]
