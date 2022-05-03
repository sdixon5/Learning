# Getting Started with Docker

## Course Overview

End Goal

Take application source code from Github

Build it as a docker image

share it in a container registry

run it as a container

docker compose, swarm and stacks

## Course Introduction

100% noob => take docker and kubernetes the big picture => done=!

dev and operations paths, this is the start for both

next courses to take for devs =>

- docker for web developers
- docker deep dive

## Getting Docker

### Module Overview

want it all to be follow along

need docker to do so => getting docker has never been easier to install!

### Docker Desktop

PC or Mac

PC win 10 64 bit

docker.com > products > docker desktop

install stable

whale in bottom right, sys tray, can change general settings, can even configure kubernetes

getting started with kubernetes next

can run win and linux containers in windows

docker --version

### Play with Docker

labs.play-with-docker.com

need a docker hub account to login => will need to set this up myself?
hub.docker.com

play with docker is free!

you get a four hour session

## Deploying a Containerized App

### Module Overview

Source code to docker container

### Warp Speed Run-through

Source code to container to registry then run as registry

just watch

docker image build

docker image push

docker container run

### Containerizing an App

Slower step through of last process to learn things to see how it all works in detail

his app is available on https://github.com/nigelpoulton/gsd

Dockerfile is instructions on how to build the docker image

firstline: FROM node:current-alpine => alpine linux constructs and Node. No OS kernel!

COPY . /usr/src/app => the dot means wherever we run the command from

docker image build -t witcherc137/gsd:first-ctr .
docker image ls

### Hosting on a Registry

dockerhub, google and github all have container registys

witcherc137/gsd:first-ctr
witcherc137 => docker hub id
gsd => repo name
image name => first-ctr

docker image push witcherc137/gsd:first-ctr

### Running a Containerized App

a container is a running image
an image is a stopped container

docker image rm witcherc137/gsd:first-ctr => this will remove the local copy of the image

docker container run -d --name web -p 8000:8080 witcherc137/gsd:first-ctr
the d detaches the container from the current terminal session
web is the name of the app
8000 is the docker port
8080 is the web port we want the app to respond on, also 8080 matches what the express app is set to run on

go to localhost:8000 in the browser to see the running app

### Managing a Containerized App

how to start and stop the app

docker container stop web
web is the name of the app, can stop via name or container id

docker container ls -a

docker container start web
again web is the name, can also do it by container id

docker container rm web
again web is the name, can do it by id too
rm will delete the container locally

if you remove the -d flag from the run command it will launch you into the terminal for the active app session,
you can exit by typing exit which will get you out of that terminal session but it will also kill the container since you are exiting the terminal that the app is running within

instead of typing exit, you can type ctrl+P+Q which will get you out of the terminal session without killing the container process itself

docker container rm test -f
the -f will stop the running container forcefully then the rm will delete the container

### Recap

start with regular app code

docker image build
docker image push
docker container run
docker container stop
docker container start

containers are virtualization 2.0

each container is essentially containerizing the os

the container is the app and all of the same dependencies, so if it works locally it will work in production => does this apply to permissions though?

## Microservices and the Real World

### Module Overview

### Cloud-native Microservices

### Multi-container apps with docker

### taking things to the next level

### microservices and docker services

### multi-container apps with docker

## What's Next?
