---
title: "Install Composer"
author: "Morgan Billingsley"
date: "2019-12-30"
category: "Tutorials"
---

## Get current version signature

Composer can be installed a number of ways. The quickest way is to visit [https://getcomposer.org/download/](https://getcomposer.org/download/), and copy the code from the first code block. Then, carefully follow the next steps.

## Download composer.phar

Paste the code from [https://getcomposer.org/download/](https://getcomposer.org/download/). It should look very similar to this. *Do not paste the following code. In line 2, there is an important difference between this code and the code you grabbed from composer.

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === 'COMPOSER_SIGNATURE') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
```

## Move Composer to bin folder

Once you have executed the code above, you must move the newly downloaded composer.phar file inside of your PATH. Do so with the following command:

```bash
sudo mv composer.phar /usr/local/bin/composer
```

Make sure the command is executable by running:

```bash
sudo chmod +x /usr/local/bin/composer
```

Test to make sure composer is working:

```bash
composer
```

You should see something similar to:

```bash
   ______
  / ____/___  ____ ___  ____  ____  ________  _____
 / /   / __ \/ __ `__ \/ __ \/ __ \/ ___/ _ \/ ___/
/ /___/ /_/ / / / / / / /_/ / /_/ (__  )  __/ /
\____/\____/_/ /_/ /_/ .___/\____/____/\___/_/
                    /_/
Composer version 1.9.1 2019-11-01 17:20:17
```