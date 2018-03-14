---
layout: doc
title: License
---

The MMT license is based on the [BSD 3-clause license](https://en.wikipedia.org/wiki/BSD_licenses) with one major change: It forbids modifications.
While it is of course allowed to modify working copies and push the changes, it is not allowed to distribute any other version than the master branch of MMT.

The motivation for that restriction is twofold

* Attempts to modify MMT are almost misguided (see below).
  The license helps to nudge people in the right direction.
* Everybody who benefits from MMT should also make their changes accessible to the community.
  However, the GNU model of requiring modifications to be open source again is not enough here: Acquiring the sources of a modification is a negligible amount of the work - essentially all the work lies in merging multiple modifications.
  The MMT license makes sure that modifiers also do the work of merging their modifications back into the MMT code base.

If you believe that you need to modify MMT, please go through the following checklist:

1. Check if your application use MMT as is? MMT goes to great lengths to expose its interfaces and allow customization without modifying MMT.
   See [here](../api/extensions/) for details on how to do make use of that.
   In almost all cases so far, modification requests happened because users were unaware of the appropriate customization mechanism.
1. Ask the contributors to create an extension interface for your purposes.
   The current set of extension interfaces is not final and in fact intended to grow constantly.
   Moreover, almost all reasonable modifications are already the TO-DO list for MMT anyway. Many of them are already designed or even partially implemented.
   The contributors will happily comply if you suggest reasonable extension interfaces.
1. Ask if you can contribute your changes to MMT.
   MMT is meant to attract a community of develoers.
   If you need particularly difficult extension, the contributors are generally positive to give master-write access to competent users.
1. Ask for a special license.
   If your request is reasonable and really not covered by the above (which has never happened so far), we may modify the license or grant you an additional license. 
