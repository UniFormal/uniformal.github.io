---
layout: doc
title: MMT Docker
---

The MMT Repository contains a [Dockerfile](https://www.docker.com) for MMT. 
It is published as `kwarc/mmt` under DockerHub and is an [Automated Build](https://docs.docker.com/docker-cloud/builds/automated-build/). 

### Getting started

To start a temporary container with permanent volume for MMT content, use:

```
    docker run --rm -v mmt:/content/ -p 8080:8080 -t -i kwarc/mmt
```

This will run the newest MMT.jar and store all archives inside a new volume called mmt mounted under `/content/`. 
The command can be run multiple times to (re-)start the container if neccessary. 

### Storage

Inside the Image, the mmt.jar is stored under `/root/MMT/deploy/mmt.jar`. 
Because of the default MMT file structure, this means that MMT expects archives under `/root/content/MathHub` and a configuration file under `/root/MMT/mmtrc`. 

To this end, a docker volume is mounted under `/config/`. 
The `/root/content` folder is symlinked to it. 
Furthermore, `/root/MMT/mmtrc` is symlinked to `/content/mmtrc`. 

This means when the above command is run the first time, and the volume is empty, it will run the [setup routine](https://uniformal.github.io/doc/setup/#setup-mmt). 
All defaults can be accepted by the user as-is and a configuration file will be created. 
Note that JEdit is not supported, and by accepting defaults, MMT will skip the JEdit Install Step. 

When re-creating the container with the same mounted volume, MMT will from then onwards automatically use the stored configuration. 
Furthermore, it can be changed manually as desired by the end user, by editing the `mmtrc` file. 

### Running custom commands

By default, when the container is run with no arguments, it will simply start the MMT jar. 
To override this behaviour, and e.g. start the [MMT Server](https://uniformal.github.io/doc/applications/server.html) on port 8080 use the following command: 

```
    docker run --rm -v mmt:/content/ -p 8080:8080 -t -i kwarc/mmt -i "server on 8080 0.0.0.0"
```

### Caveats

Because of the way docker works, any server running inside the docker container (including the MMT webserver) can not simply bind to localhost. This means that running `server on 8080` from the MMT shell has no effect. Instead, `server on 8080 0.0.0.0` should be used. 


### Image Tags
* `kwarc/mmt:release` The latest released version of MMT. Corresponds to the `release` branch. 
* `kwarc/mmt:latest`: The latest working version of MMT. Corresponds to the `master` branch. 
* `kwarc/mmt:devel`: The latest compiling version of MMT. Corresponds to the `devel` branch and may have several unfixed bugs. 
* `kwarc/mmt:release_10`: MMT Release 10
