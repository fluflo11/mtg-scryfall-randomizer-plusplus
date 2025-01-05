[![](https://files.catbox.moe/u0djqp.png)](https://rafuwu.github.io/mtg-scryfall-randomizer/)

# MTG card randomizer PlusPlus

This fork is a version I made for my web courses. The assignment was to take an open source web app and add features to it. This web app seemed very appropriate to me, as it uses the Scryfall API. 
The added functionality was the ability to draft a random commander deck in a colour identity chosen by the user. This makes it possible to draft decks almost completely at random.

[**Magic: The Gathering**](https://magic.wizards.com/en) card randomizer web app using the [**Scryfall API**](https://scryfall.com/docs/api).

## Technical

The new functions are : 
*generateCommanderDeck()*, which depends on : 
*getSelectedColorIdentity()*,
*fetchLegendaryCreature(colorIdentity)*,
*fetchOtherCards(colorIdentity, count)*,

and *getSelectedColors()*, which enhances the *getSearchQuery()* function, so that you can select the colour of randomly retrieved cards.

## Features

* **NEW FEATURE** Draft a random deck commander.
* Graphical User Interface via the web app.
* Get a list of random cards from the database.
* Specify what type of cards to get using the same syntax of [**Scryfall Search**](https://scryfall.com/docs/syntax).
* View various information about the cards, such as: set, rarity and card image.
* 100% client-side execution. All requests are made via the browser.
* No dependencies. All code was written from scratch and is included in the project.
* **Export** list to a **Cockatrice-compatible `.cod` deck file**.
