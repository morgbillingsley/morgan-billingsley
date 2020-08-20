---
title: "Install Composer"
author: "Morgan Billingsley"
date: "2020-08-20"
category: "Tutorials"
---

## Server Configuration

### Create a User

If you already have a default/admin user account for your server, then you can easily add a new account by running the following commands:

```bash
sudo adduser user
```

or if you're using Ubuntu:

```bash
sudo adduser user --disabled-password
```

Once you have done that, you will need to set the authorized public key for your user like so:

```bash
sudo su - user
```

Make a directory for ssh configuration

```bash
mkdir .ssh
chmod 700 .ssh
```

Create an authorized keys file

```bash
touch .ssh/authorized_keys
chmod 600 .ssh/authorized_keys
```

Next, you will need to create a public/private key pair. You can use the `ssh-keygen` command. Learn how to create a public/private key pair using the `ssh-keygen` command by visiting the [this link](https://www.ssh.com/ssh/keygen/#creating-an-ssh-key-pair-for-user-authentication)

Once you have the public/private key pair, you need to copy the contents from your new public key and add it to the newly created `.ssh/authorized_keys` file on your server. Use the following command:

```bash
vim .ssh/authorized_keys
```

and paste the public key contents inside of that file

### Get the script

Download the script

```bash
wget https://gist.githubusercontent.com/morgbillingsley/1567413fd8d269818cb249cee94c5587/raw/c2ba4cefb13efc9b7cef90b63f8c0a852b16e49a/dylate-deploy.sh
```

Make the script executable

```bash
chmod +x ./dylate-deploy.sh
```

Run the script

```bash
./dylate-deploy.sh
```

## Local Configuration

### Configure the local ssh client

Adjust the user's ssh configuration

File: `~/.ssh/config`
```txt
Host server.com
    User user
    IndentityFile /path/to/private/key
```