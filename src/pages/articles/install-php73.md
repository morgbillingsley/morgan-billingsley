---
title: "Install PHP 7.3 on Debian"
author: "Morgan Billingsley"
date: "2019-12-30"
category: "Tutorials"
---

## Get signing key and PHP 7.3 PPA

Update apt

```bash
sudo apt update
```

Get the signing key and PPA:

```bash
sudo apt install ca-certificates apt-transport-https
wget -q https://packages.sury.org/php/apt.gpg -O- | sudo apt-key add -
echo "deb https://packages.sury.org/php/ stretch main" | sudo tee /etc/apt/sources. list.d/php.list
```

## Install PHP 7.3

Update Apt again:

```bash
sudo apt update
```

Install PHP:

```bash
sudo apt install php7.3
```

Check the current version of PHP to see if it was installed:

```bash
php -v
```

If everything was installed correctly, you should see something similar to this:

```bash
PHP 7.3.13-1+0~20191218.50+debian9~1.gbp23c2da (cli) (built: Dec 18 2019 15:03:24) ( NTS )
Copyright (c) 1997-2018 The PHP Group
Zend Engine v3.3.13, Copyright (c) 1998-2018 Zend Technologies
    with Zend OPcache v7.3.13-1+0~20191218.50+debian9~1.gbp23c2da, Copyright (c) 1999-2018, by Zend Technologies
```

## Install any necessary PHP packages

Use the following command to install a package, replacing `package-name` with the name of the PHP package:

```bash
apt install php7.3-{package-name}
```