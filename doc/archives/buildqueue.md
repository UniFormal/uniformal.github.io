---
layout: doc
title: The Build Queue
---

The build queue is an advanced implementation of [building], which uses multi-threading, which is now the default build manager.

If MMT was started with a server (i.e. by command "server on 8080"), the build queue can be observed on the page "http://localhost:8080/buildqueue.html". 

The page starts with a box to control the refresh rate. Periodic refresh is needed to observe the changing queue state. Initially or after reloading the browser page the queue data is updated from the server every second.
After every 20 refreshes the time between refreshes doubles to avoid too much traffic for the page when it is merely left open. Reload the page to get full speed again. Press "get current state" to update the queue data without changing the refresh rate. 

Below the refresh box and the queue length follows the actual build queue that should get empty after some time. The top entry (if any) should be the currently "running" job. The queue length is at most a hundred or 50 for even longer queues. For such long queues the number of remaining queue elements is shown at the bottom of the queue.

Below the build queue is a list of blocked jobs whose dependencies could not be found.
These jobs are processed nevertheless after the actual build queue became empty. Usually
dependencies (that can be found) are simply inserted into the build queue automatically before the requested job.

At the end all finished jobs processed via the queue are shown (at most 200) with there result information.
(After more than 200 jobs the bottom 100 jobs are removed.)

### Queue Entries ###

For a queue entry usually only the relative name within an archive is shown, the target in parenthesis and the list of dependencies in square brackets. For directory tasks also the group and repository name separated by a slash are shown.

The top queue entry may be shown with a leading "running" string.

### Blocked Entries ###

Blocked entries are those whose dependencies could not be computed. They are displayed like queue entries with their missing dependencies.

### Finished Entries ###

Finished entries have been processed via the queue. They are shown with their build result possibly including a list of provided modules. More recently finished entries are shown nearer to the top.

### Clearing the Queue ###

By clicking on "clear queue" all entries are removed. Only a running job cannot be stopped and must be cleared from the finished list by clicking "clear queue" again.

### Pausing builds ###

By clicking on "pause" the building is suspended. This allows to observe or fine tune the queued jobs before clicking on "continue" again.

### Rebuilding ###

By selecting a target, an update level, an archive and clicking "make" new tasks for the whole archive can be submitted. The default update level is "build on change" so that only minimal work is done to make an archive up-to-date. It is also possible to type in a particular file name, however, if this file name does not exist or is not applicable for a certain target, nothing will happen. Maybe "pause" building to see which tasks get queued.

Note that if no archive is selected all archives will be made! It is also possible to clean archives, but this will not be noticeable until rebuilding again. After each "make" action the update level will switch back to "build on change" to avoid too many accidental changes. 
