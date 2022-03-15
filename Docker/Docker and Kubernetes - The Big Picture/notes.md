# Docker and Kubernetes: The Big Picture

## Containers: Primer

### Bad old days

Underutilized servers - hard to determine right specs - huge costs
lots of waste

### VMware - virtualized servers

better use of servers but not perfect solution

create a vm for each app, is a slice of physical servers capacity

each vm needs its own os installed
each vm needs its own os license
admin costs, patching, updates, av, more...

### Containers

one server
install one os
on top of os create four containers, each a slice of the os not the server!

containers are smaller and more efficient than vm's

secure containers that run an app

### Docker demo

Container | Container | Container | Container|
Docker
Linux/Windows OS Server
Server (vm / bare metal / laptop)

Windows apps run on windows docker (linux can run but skipped)
linux apps run on linux docker

docker image, like a vm image : contains the apps

command:
docker container run -d --name web -p 8080:8080 nigelpoulton/ctr-demo:1 (launches the container)

docker hub - can download docker containers

### Recap

Microservices & Cloud native

monolith/legacy app (single binary) - old school app

microservices and cloud native break everything out into individual app's / containers

stock / search / web / auth / cart / check out

cloud native is about how the app is built and managed

Containers and Virtualization will most likely work side by side, containers won't fully replace vm's

## Docker (The Company)

### Docker

they are the ones who gave us containers

### Docker inc

Tech startup from san francisco

was originally dotCloud worked with AWS

were building stuff in containers while working with AWS

was using containers in house

gave that tech to the world and are now "selling it"

docker come from "dock worker" british term

raised 200 million plus

### Docker the technology

making containers easy

containers are like vms

docker makes running apps in containers easy!

docker app is open source - lives on github

community edition is free to use, and are free to contribute, quick release cycle

enterprise edition slower release cycle, addition features, support contract

Containerizing Apps

### Docker demo

github.com/nigelpoulton/psweb

containerize the app : docker image build - all source code needed to run the app

push to registry

run the container

### Docker summary

apps in containers

key to modern apps!

!scale! - two options: docker swarm or kubernetes

kubernetes is the more popular choice, where the action is

## Kubernetes

### Kubernetes: History

### Kubernetes: The Short and Skinny

### Recap
