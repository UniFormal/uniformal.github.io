---
layout: doc
title: MMT Statistics Exporter
---

This adds the build target 'statistics' to MMT producing statistical information about an archive or a mmt document. The statistics are generated from the relational data files in an archive and are written to json files in export/statistics, one file per MMT document. Each statistics file contains a dictionary, whoose entries consist of a string describing what is counted and the count itself. 
How exactly different declarations in the archive are counted is detailed below. 

### Types of counted objects

The sorts of different counted objects are the following ones: 
- `Documents`, `theories` and `views` declared in the archive or document (transitive closure of the `declares` relation)
- `Constants` of different type declared (as above) in the archive or document:
  - Term-level constants (which ultimately return a term)
    - `Data constructors`
    - `Rules`
  - Type-level constants (which ultimately return a type)
    - `Datatype constructors`
    - `Judgment constructors`
- Induced declarations by views (their transitive closure) of all induced declarations, distinguished in the above types
- Induced declarations by arbitrary (explicit or implicit) morphisms (again their transitive closure), also distinguished in the above types

Since the statistics are based on the relational files, when an archive is updated, it needs to be rebuild first, before the statistics can be generated, otherwise the statistics will be outdated. 
