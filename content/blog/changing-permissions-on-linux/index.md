---
title: Changing permissions on Linux
description: I've recently encountered a situation in which I needed to change permissions on another level than just my user. This is what I learned from my research. 
date: "2020-06-02"
featuredImage: chmod.png
---

After copying some files from a USB drive I noticed a lot of the folders had more permissions than they actually needed. That's when I started diving into `chmod` and noticed there's more to it than basic current user file permission changes.

## chmod what?
`chmod` is a tool with which you can set file and folder permissions by specifying certain file mode bits. This can be done using alphanumeric characters or octal numbers (0 through 7). I started with the basic alphanumerical characters myself, which include:

- "r" for read
- "w" for write
- "x" for execute

<div style="color: #856404; background-color: #fff3cd; border-color: #ffeeba; padding: .75rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent border-top-color: transparent; border-right-color: transparent; border-bottom-color: transparent; border-left-color: transparent; border-radius: .25rem;" role="alert">
See the man page for more supported characters (man chmod) 
</div>

Want to add write permissions to a file or folder? Just run the following and you're golden:
```bash
chmod +w file.extension
```
The plus sign before the "w" notifies `chmod` to append the write permission to the current permission setup.

Intuitively, the same goes for "-r" and "-w" respectively removing read and write permissions instead of adding them:

```bash
chmod -w file.extension
```

Playing with this actually didn't fix my permission issue though, which is why I dug deeper to find other useful, and in hindsight obvious, settings. 

## More than just the user
Most of the time you just think about the permissions for you as the single user of your system. That's exactly what I did. `chmod` can also change permissions on other levels though. These are all the supported ones (at the time of writing):
- User who owns the file (u)
- Other users in the file's group (g)
- Other users _NOT_ in the file's group (o)
- All users (a)

In my case the "group" level of some directories had write permissions which I'd rather remove. 
Combining this knowledge with the basic alphanumerical character specification mentioned above I could solve my problem with this command:

```bash
chmod g-w directory
``` 
It will be a tedious process if I had to update all the folders by hand though. Who knows how many subfolders keep having the same write permissions? To prevent this I ran the code with the recursive flag:

```bash
chmod -R g-w directory
```

## Octal numbers
Remember the possibility of defining permissions with octal numbers instead of alphanumerical characters? These are pretty common to see in blog posts or in forums so they're important enough to go over. I find them to be less explicit and thus less easy to grasp though.

Octal numbers are defined as follows:

- 4 stands for read
- 2 stands for write
- 1 stands for execute
- 0 stands for no permission

Adding up these numbers makes it possible to provide a group with multiple permissions. Let's reason based on the octal number variation of my problem to make sense of this:

```bash
chmod 755 file
```

Here the first parameter is 7, which is the result of read (4), write (2) and execute (1) permissions since 4 + 2 + 1 = 7. The second parameter (5) denotes that only write permission is missing, with the third parameter mimicking this. The order in which the parameters appear is linked to the permission level:

1. User who owns the file 
2. Other users in the file's group
3. Other users _NOT_ in the file's group 
 
<div style="color: #856404; background-color: #fff3cd; border-color: #ffeeba; padding: .75rem 1.25rem; margin-bottom: 1rem; border: 1px solid transparent border-top-color: transparent; border-right-color: transparent; border-bottom-color: transparent; border-left-color: transparent; border-radius: .25rem;" role="alert">
There's actually a parameter that precedes the ones listed here. Not defining it ignores the value though
</div>

This results in me, as a user, being able to read, write and execute while other users can only read and execute. Just the way I want it!

## Closing thoughts
I'm pretty sure I'll keep using the alphanumeric character definition due to it clearly showing how a file or folder is changed. That said: it's important to be able to read the octal number notation as well, as most of the internet is filled with it by now.

Diving deeper into the inner workings of `chmod` definitely made me realize I should do this more often with programs I don't completely understand. Clearing these things up will save me a lot of time in the future. 

Thanks for reading!
