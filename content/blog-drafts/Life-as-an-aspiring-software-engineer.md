---
title: Life as an aspiring software engineer
description: Here we are.
date: "2017-06-12T20:31:09.268Z"
---

### Life as an aspiring software engineer

#### Here we are.

Today is the day that I start to document my journey through the deep depths and amazing heights of software engineering. Let’s begin by taking a look at the projects I have created in the past. You can visit [my website](https://vosdevelopment.nl/en/index) if you want to view these projects in your very own browser (I won’t blame you).

#### Thyme Layers Android app

My first real dive into programming on Android. At that time, Layers (now called Substratum) was growing steadily. When I found out about the possibility to theme nearly every single component in Android I just had to try it myself. But that’s not all. I decided to make an app around it to also get into programming an Android app.

That all sounds well and good, but I had no real programming knowledge other than experimenting with building a few websites using HTML and CSS. The big challenge now was to not only figure out how these themers actually managed to make their Android quick settings look cool, but to also learn the programming language Java next to it.

![One of the banners a friend made for me](https://cdn-images-1.medium.com/max/1200/1*l-5p3Zu3MChZI8Dx5fXyIg.png)
One of the banners a friend made for me

I slowly started to get a feel for Android programming by using the bundled navigation bar template in Android Studio: changing the icons, editing the text, placing the items in a different order. I tried implementing a material design card and put some text in it. None of this went without a hitch, but that’s how you actually learn the most.

After a while I started to look into theming certain apps. I learned how to decompile apps, change the color values in XML files and apply them again with a bit of help from the Layers community.

A few months later I had a working application with a material deep purple theme. I even included some wallpapers! Overall I learned a LOT creating this application.

![Another creation of my friend](https://cdn-images-1.medium.com/max/1200/1*Sr6QJHjsEwLZBhX8GeuQiA.png)
Another creation of my friend

Layers was replaced with Substratum as time passed, making my application obsolete. I decided to unpublish the application from the Play Store for that reason. Fun fact: the application still has 4 active users at the time of writing!

#### WifiSwitcher

Having tasted Android programming (both the sweet and the bitter part), I decided that I was going to build another application.

The idea of this application came from the annoyance of my wifi repeater at home. It just wouldn’t let go once you went downstairs. The results were terribly slow WiFi connections and a frustrated me. ‘Why not toggle the WiFi via Android Wear?’, I thought just having received my smartwatch.

And so it began. After diving deeper and deeper into things like the activity lifecycle, broadcasts, intents and much much more, I started to get a feel for the placement of certain files in the hierarchy. I also started to get comfortable with classes and methods and learned how event listeners work.

![[Clickey for source](https://developer.android.com/guide/components/activities/activity-lifecycle.html)](https://cdn-images-1.medium.com/max/1200/1*CGGROXWhl8dTko1GdDeFsA.png)
[Clickey for source](https://developer.android.com/guide/components/activities/activity-lifecycle.html)

A big part of creating a favourable experience was to link the phone and watch seamlessly together, something that I hadn’t done before either. There were 3 ways of communication between the handheld device and the wearable:

1.  using the DataAPI
2.  using the MessageAPI
3.  using the ChannelAPI

The ChannelAPI is not suited for this application right out of the gate, because it’s only for transferring large amounts of data.

The only (though important) difference between the DataAPI and the MessageAPI is that the DataAPI syncs data between the devices while the MessageAPI acts as a one-way.

Both are very useful when you use them in the right environment. In WifiSwitcher the DataAPI is being used to sync the currently available WiFi networks to the watch in real-time. The MessageAPI is used to sent confirmation/failure messages after a request to switch networks.

![My DataAPI implementation](https://cdn-images-1.medium.com/max/1200/1*OfXw_o2kEWtqIzh2Jjc_qA.png)
My DataAPI implementation

These are just a few of the implementation details. You can find the complete source code on [GitHub](https://github.com/Martijnvos/WearWifiSwitcher). Hit me up if you want me to write more about the journey of making my WifiSwitcher app.

With that said, let’s move onto my next endeavor!

![](https://cdn-images-1.medium.com/max/1200/1*ufbfF9cdkAvWWgEPBwXg0Q.jpeg)

#### Napp

Napp is my first project in the world of more complex web applications. I was interested in creating a progressive web application (PWA) but didn’t really know how I could learn every big aspect of while being efficient with my time. Up until now I had been building applications by sourcing the needed material for my particular use case, but I also wanted to be able to substantiate my choices. That’s why I started searching for PWA courses.

One of the appealing courses was [this course from Google](https://codelabs.developers.google.com/codelabs/polymer-firebase-pwa/index.html?index=..%2F..%2Findex#0). I thought to myself:

> Well shit, let’s just do it and see if I like it

So I started.

Getting deeper into the fundamentals of a PWA was quite a challenge. At the time I had to configure my manifest file I was already halfway lost (keep in mind I didn’t know what bower was for back then). But I persevered. I tried to find a balance between trying to understand everything and following along good enough so I would understand the fundamentals.

After quite a few hours of struggling I could say I finished the course. I learned about service workers, JavaScript promises, caching in IndexedDB and much more. That’s not to say I understood everything though (quite a big portion of the course was copying and pasting predefined code without explanation).

I started to fix that by applying my own styles (do you recognise a pattern here?) to the application and making sure it would fit the browser window better. It still likes to behave better as a PWA than just the website on mobile though.

Sifting through the ‘copy — paste’ code was also something that helped me understand the essence of the PWA better.

P.S. If you’re wondering where the name came from: it’s literally just an abbreviation for note-taking app. Yeah, pretty lame. I know.

![Try it!](https://cdn-images-1.medium.com/max/800/1*7OatD4dI0kh7LjlryMaYmw.png)
Try it!

#### PokéInfo

After the guidance of the Google course on PWA’s, I wanted to dive into JavaScript frameworks. This time I was determined to figure it out myself, because I didn’t really feel the PWA course gave me the opportunity to discover a lot myself. It didn’t really feel like my creation.

I settled on making a pokédex after taking a few topics into consideration. The JavaScript framework I used is called Vue.js.

![The Vue.js logo ([Source](https://vuejs.org/images/logo.png))](https://cdn-images-1.medium.com/max/800/1*wqYF-8Dmh7LhtLkKfERc3Q.png)
The Vue.js logo ([Source](https://vuejs.org/images/logo.png))

Why did I choose Vue?

Well, I was simply more intrigued by it than Angular or other JavaScript frameworks at the time.

The way it handles binding with the colon notation and the nicely laid out documentation won me over. That’s not to say frameworks like Angular don’t have nice documentation. I just preferred the overall Vue.js look and feel.

After reading through the basics of the docs, the coding could commence. (sounds fancy, doesn’t it?)

I used MaterializeCSS to get a headstart on styling the application. After putting the required elements on the canvas I could already see a glimpse of what would become the pokédex. This made me even more excited.

Communicating with the PokéAPI was pretty straightforward, partly because I used a library called Axios which makes setting up and handling http requests a breeze. I started filling my elements with the necessary information while also making sure the puzzle was split into components.

![My folder structure for PokéInfo](https://cdn-images-1.medium.com/max/800/1*f4vk-VhUFrrfV1TA1wMQ-Q.png)
My folder structure for PokéInfo

I ended up using Vue’s single file components for that. They make sure you keep every piece of your component in the same file, thus stopping the need to search in different folders for the same component.

Using these single file components is as easy as creating a .vue file and putting the CSS, JS and HTML of your component into that file. More information on them can be found on [Vue’s official documentation page](https://vuejs.org/v2/guide/single-file-components.html).

Searching a pokémon, Pikachu in this case, results in this view:

![Pikachu’s information](https://cdn-images-1.medium.com/max/1200/1*sioGZifxy_q1GhWcJsuThg.png)
Pikachu’s information

You can also drill down deeper into things like stats or encounter information if you want.

I came to the conclusion that it would also be nice to be able to discover particular pokémon. So I decided to expand the application by implementing a ‘Most searched for Pokémon’ feature.

PokéInfo displays the top 3 most searched pokémon thanks to the Firebase realtime database and a library called VueFire. Everytime a user searches for a specific Pokémon, the name of that pokémon is stored in the database. If the value already exists, the value of ‘SearchAmount’ is updated.

The top 3 is even updated without refreshing the page thanks to the power of the Firebase database and Vue’s two way data binding!

The search component now looks like this after having added the top 3:

![](https://cdn-images-1.medium.com/max/1200/1*Am9pqoaviNYikqNAKomZ0g.png)

Want to try PokéInfo out yourself?

On your marks…

Get set…

[CLICK!](http://pokeinfo.vosdevelopment.nl)

### To be continued…

Clap it up if you enjoy this serie so far and make sure to subscribe to updates. Please consider sharing this serie if you enjoyed it and get in contact with me if you have any comments or questions.

![[See these and other projects on GitHub](https://github.com/Martijnvos)](https://cdn-images-1.medium.com/max/1200/1*g0PqEmojbmSVC0t0nuZrtw.png)
[See these and other projects on GitHub](https://github.com/Martijnvos)![[See my posts on Instagram](https://www.instagram.com/vosdevelopment/)](https://cdn-images-1.medium.com/max/1200/1*UP5QJHh9bNFpGLl6YNo_kQ.png)
[See my posts on Instagram](https://www.instagram.com/vosdevelopment/)![[Tweet at me on Twitter](https://twitter.com/VosDevelopment)](https://cdn-images-1.medium.com/max/1200/1*CO1FbafAZKQu1SgJjHjfwA.png)
[Tweet at me on Twitter](https://twitter.com/VosDevelopment)

[Twitter + Instagram icon creator](http://freepik.com)

[GitHub icon creator](http://www.flaticon.com/authors/dave-gandy)
