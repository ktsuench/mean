# MEAN-Vagrant
This project is a server using the MEAN stack running on Ubuntu 16.04 LTS in Vagrant.

On startup of the server, the application and associated processes will be started automatically. The application will be available on localhost:7500. By using this, there is a unified development environment between developers on the same team and Vagrant allows sharing the environment online so that changes to the environment can be synced in real time between developers.

## Getting Started
### Installing Vagrant
*If you already have Vagrant set up and Ubuntu 16.04 LTS box installed, skip this section*

You will need to have [Vagrant](https://www.vagrantup.com/intro/getting-started/index.html "Getting Started - Vagrant by HashiCorp") (minimum version 1.9.1) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads "Downloads - Oracle VM VirtualBox") (minimum version 5.1.14) installed to run this. Once those are installed, add the Ubuntu 16.04 LTS box by running the command `vagrant box add ubuntu/xenial64`.

### To install server
First fork this repository and then clone your forked repository by running `git clone https://github.com/<username>/mean-vagrant`. Then `cd` into the cloned repository and run `vagrant up`.

Installs:
- Nginx (newest version)
- Node with NPM (v6.x)
- MongoDB (v3.4)
- PM2 (newest version)

By default, changes made to the files will restart the server (PM2 setup to watch files)

### Setup
Rename the `template.env` file to `.env` and update the variables inside. That will serve as the environment variables being used on the server.

## Issues
### Symlink
*Only applies if vagrant box was not installed as an admin/superuser when running `vagrant up`*

__ONGOING ISSUE:__ If you are using Typescript, it will not compile if you need to use typings (i.e. Node). Will find a fix for it soon.

If you are having this issue:
- Go to `.provision/bootstrap.sh` and uncomment the "*Install Sympm to link node modules properly*" section. 
- Go to `.provision/startup.sh` and under "*Install Node Modules*" section change npm to sympm instead

To properly link the node modules, [sympm](https://www.npmjs.com/package/sympm "sympm") is used as a workaround for symlink issues with Vagrant shared folders. This causes node modules not to be installed in the local working directory but rather under `~/.sympm/vagrant/node_modules` instead.

## Using Vagrant
Clone the files and in terminal `cd` to the directory.

- ~~If the OS is outdated run: `vagrant box update`~~
- To start server: `vagrant up`
- To access server shell: `vagrant ssh`
- *Only do this if you need a fresh server*

    To remove server: `vagrant destroy`

- *Use this instead when you need to shut down server*

    To shutdown server: `vagrant halt`

- ~~To put server to sleep: `vagrant suspend`~~
- ~~To reload server: `vagrant reload`~~
- To reload server to updated provisions: `vagrant reload --provision`

The server should be up and running. To check, visit http://localhost:7500 in your browser.

To make changes to the box and automate the process of installing environment dependencies, place the commands in the __Vagrantfile__.

## Tutorials
### Documentation
- [Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet "Markdown Cheat Sheet")
### Environment
- [Vagrant](https://www.vagrantup.com/docs/ "Vagrant Docs")
- [Vagrant Symbolic Linking Solution](http://blog.rudylee.com/2014/10/27/symbolic-links-with-vagrant-windows/ "Vagrant Symbolic Linking Solution")
### Stack
- [MongoDB Data Modeling](https://docs.mongodb.com/manual/core/data-modeling-introduction/ "MongoDB Data Modeling")
- [MongoDB Connection](http://mongodb.github.io/node-mongodb-native/2.2/tutorials/connect/ "MongoDB Node Connection Tutorial")
- [MongoDB Tutorial](https://www.tutorialspoint.com/mongodb/ "MongoDB Tutorial")
- [Express](https://expressjs.com/en/4x/api.html "Express Web Application Framework")
- [AngularJS](https://angularjs.org "AngularJS Site")
- [Node.js](https://nodejs.org/dist/v6.10.0/docs/api/ "Node.js v6.10.0 Docs")
### Backend
- [TypeScript](https://www.typescriptlang.org/docs/tutorial.html "Typescript Tutorial")
- [Mongoose](http://mongoosejs.com/docs/index.html "Mongoose Quick Start")
### Frontend
- [Pug](https://pugjs.org/api/getting-started.html "Pug HTML Template Engine Docs")
- [Angular Material](https://material.angularjs.org/latest/getting-started "Angular Material Getting Started")
- [Angular Material Theme Builder](http://mcg.mbitson.com/#!?mcgpalette0=%233d8af7&mcgpalette1=%23f7b83d&themename=ch "Angular Material Theme Builder")
- [Material Design Icons](https://github.com/Templarian/MaterialDesign "Material Design Icons")

    Licenses included with font file (license.txt from Material Design Repo and LICENSE from Google Material Design Icons)

### Dependency Manager
- [npm](https://docs.npmjs.com/ "npm Documentation")
- [Bower](https://bower.io/ "Bower Web Package Manager")
### Version Control
- [Git](https://git-scm.com/docs "Git Reference Manual")

## License
Refer to the LICENSE file in this repository.

[MIT](https://opensource.org/licenses/MIT "MIT License")
