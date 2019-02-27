---
layout: doc
title: The Error Viewer
---

If MMT is started as a server (i.e. by the command "server on 8080") and the error manager extension is loaded (i.e. by "extension info.kwarc.mmt.api.archives.ErrorManager") the errors can be viewed on "http://localhost:8080/errorview.html".

Initially you see a grouped table near the top and the main table for individual errors at the bottom.

In the header row of the main table you can type in search strings for specific content in the corresponding column.
While you type non-matching rows will disappear. By pressing "RELOAD" matching rows will be freshly fetched from the server. This might refill the table up to the maximum row count (that may be adjusted).

Only "maximal entries" of all entries are shown in main big table.

You may **sort the entries** of the main table by clicking on a column header text. Small triangles will indicate the sorting order.

### Selecting Entries ###

Entries of the big main table are not only selected by typing search strings into a column's header, but also by clicking on `↷` in a row of the group table near the top of the page. In fact clicking `↷` simply fills the search
field of the corresponding column in the main table.

You should be aware that the search strings of all columns will be matched in conjunction which might soon lead to no entries at all. If you are surprised to see no entries check all search fields (even for currently non-displayed columns) or clear all or some of them.

Also note, that the group table changes if you type a search string into a column that is not grouped by.
 
### Grouping Entries ###

By default entries are grouped by the content of their "short message". The switch above the grouped table allows to group the entries by the content of any other column (although this may not be very helpful for all columns). In any case your are encouraged to play with the "group errors" switch that does not change any selected entry as long as you do not click on `↷` (for selecting) or `↶` (for hiding).

### Hiding Entries ###

In order to reduce the amount of errors to deal with, the grouped table allows to hide certain entries by clicking on
`↶`. This will create a new table with entries to be hidden. Any entry matching a hidden entry will no longer be counted inside the grouped table and the big main table. Buttons allow to clear all or the last hidden entries.

### Building and Cleaning ###

The buttons `⟳` and `✕` in the first column of the main table allow to build or clean all entries or the single entry of the corresponding row. Cleaning should immediately result in a short message "cleaned" for the corresponding entry.

Building will queue new tasks whose changes (to error files) are only visible after a "RELOAD" later on.
You may inspect the build queue to see your submitted tasks meanwhile.

By default `⟳` will do a "force build", but you may switch to a less severe build mode via the above pop-up button.
Since you usually see only errors "force build" is almost identical to "build on error" (except for "info" and "warning" entries and directories).

### Reloading ###

Note, that reloading via "RELOAD" is different from the browser's reloading function. The former respects previously done selections and hidings whereas the latter resets the whole page with all selections and hidings cleared.


