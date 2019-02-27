---
layout: doc
title: The Local MathHub Tool (LMH)
---

The Local MathHub (lmh) functionality in MMT provides local commands to install libraries
and archives
from and publish content to [MathHub.info](https://mathhub.info), a versioned hosting system and user
portal for OMDoc/MMT content.

### Configuring local folders
Before using any lmh functionality, a local folder needs to be configured to store archives in.

This is configured in the [mmtrc](/doc/setup/running) file automatically during setup,
however it can also be done manually on the MMT shell by typing `lmh root <path>`.

Furthermore, MMT archives can be cloned using ssh or https.
The difference is only relevant if you want to publish archives, or want to access non-public repositories.

The default method to clone archives is https. 
To enable ssh, type `lmh root <path> ssh` on the shell, to enable ssh for the current session. 
To make this change permanent, change the appropriate line in the configuration file to say "ssh" instaed of "https" (if neither is present, append ` ssh` to the end of the line). 
To view the current lmh configuration, type `show lmh`

### Installing an archive

To install an archive and the dependencies (recursively), type

    lmh install <name of archive>

If an archive already exists locally, then lmh will update the existing copy of the archive and afterwards do the same for any dependencies. 
This includes installing new dependencies if needed. 

LMH also allows installing a specific branch of an archive. The syntax for this is:

    lmh install <name of archive>@<version>

Archvies are versioned using git. 
A version of an archive can be a branch name or a git commit hash (Technically anything that is a ref in git).
When a non-existing version of the archive is specified, lmh will display a warning message and then fall back to the default version. 
If `lmh install` with a specific version is called on an archive that is already installed, it will make sure to update to the specified version. 

When an archive is installed with a specific version, it's dependencies are also installed in the same version. 

`lmh install` also allows installing multiple archives at once. 
This can be achieved, by simply providing multiple arguments. 
For example

    lmh install MMT/urtheories@master MMT/LFX@devel

will install the `MMT/urtheories` archive of version master (as described above) and the `MMT/LFX` archive in version devel. 
When a non-existing version of an archive is specified, t

It is also possible to use wildcards in this specification, or install an entire group at once. 
For example

    lmh install MMT

and

    lmh install MMT/*

will both install all archives from the `MMT` group. 

Wildcards can be combined with using specific versions. 
When a version is specified to a wildcard, it is applied to all archives of that group. 

For efficieny reasons and to work around cycles in the archive dependency graph, whenever an archive occurs more than once in an `lmh install` procedure, it is only installed / updated once. 
This leads to undefined behaviour when conflicting versions are specified. 
The current implementation of this command will use the version of the archive when it is first encountered (either explicitly in the arguments, or the first dependency tree it occurs in), but this is an implementation detail and may change in the future. 

### Updating archives

To update a set of archives, you can use

    lmh pull <name of archives>

Again wildcards can be used, but these only match against archives that are already installed. 
Internally, the update behaviour of `lmh pull` is the same as the one of `lmh install`, and internally the same function calls are used. 

### Managing Archives

To see which archives are installed locally, use the `lmh ls` command.
It optionally takes the name of an archive or library, and will restrict output to the matching archives.
It also shows the version numbers of locally installed archives.

To see which archives are available, use the `lmh search` command.
It functions exactly like the `lmh ls`, however it searches remotely for archives on
`http:.//gl.MathHub.info` instead of locally.


#### Switching branches

To use a specific version of an archive the command

    lmh use < name of archive >@< version >

can be used. 
This command supports wildcards (against local archives). 
The command works exactly like `lmh install`, except that it does not recursively install any dependencies. 

For example

    lmh use *@devel

will switch all installed archives to the devel branch. 

### Proposal to improve LMH

** Everything below is a proposal and not yet implemented **

#### Freezing dependencies (PROPOSAL)

Sometimes it is desired to be able to use the current versions of all archives. 
By convention, this is done for every release so that users can rely on a specific release working independent of future changes to the archives. 

It is possible to freeze the current versions of archives and store these versions in a file. 
This can be achieved by

    lmh freeze local < filename > [<archives>]

which will store the current versions, that is their commit hashes) of the given archives inside the specified file. 

To restore archives from a specific file, use

    lmh restore < filename >

This internally expands into a call to `lmh use`. 
It should be noted that afterwards, calls to `lmh pull` will not work update archives anymore -- the versions are frozen in place. 
To properly update archives from a specific branch

    lmh use *@<name of branch>

can be used to restore the normal behaviour. 

It is possible to furthermore store the current versions of all archives on gitlab. 
This can be achieved by using

    lmh freeze remote < filename > [<archives>]

and be restored accordingly. 
