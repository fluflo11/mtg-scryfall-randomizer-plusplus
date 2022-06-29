const COCKATRICE_DECK_FILE_TEMPLATE = `<?xml version="1.0" encoding="UTF-8"?>
<cockatrice_deck version="1">
    <deckname>{DECKNAME}</deckname>
    <comments>{COMMENTS}</comments>
    <zone name="main">
        {CARDS}
    </zone>
</cockatrice_deck>
`

const COCKATRICE_DECK_CARD_TEMPLATE = '<card number="{NUMBER}" name="{NAME}"/>'

let card_list = new Array


// Function to download data to a file
function download(text, filename, type) {
    var file = new Blob([text], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function addCardToList(card) {
    card_list.push(card.name)
    console.log(card_list)
    return card_list
}

function createComplexCardList() {
    let card_list_complex = new Array
    /*   ------- Array example ------- 
     *
     *   [
     *       {
     *           "number" : 3,
     *           "name" : "Example 1"
     *       },
     *       {
     *           "number" : 1,
     *           "name" : "Example 2"
     *       }
     *   ]
    */

    for (let i = 0; i < card_list.length; i++) {
        // If card_list[i] doesn't exist somewhere in the array of objects that is card_list_complex, add it
        if (!card_list_complex.some(elem => elem.name === card_list[i])) {
            card_list_complex.push({
                "number" : 1,
                "name" : card_list[i]
            })
        } else { // If if exists already somewhere, find it and add +1 to the counter
            for (let i = 0; i < card_list_complex.length; i++) {
                if (card_list_complex[i].name == card_list[i]) {
                    card_list_complex[i].number += 1
                    break
                }
                
            }
        }
        
    }

    console.log(card_list_complex)
    console.table(card_list_complex)

    return card_list_complex
}

function cockatrice_deckCards(card_list_complex) {
    let cockatrice_deck_cards_array = new Array
    for (let i = 0; i < card_list_complex.length; i++) {
        var a = COCKATRICE_DECK_CARD_TEMPLATE
        var a = a.replace("{NUMBER}", card_list_complex[i].number)
        var a = a.replace("{NAME}", card_list_complex[i].name)
        
        cockatrice_deck_cards_array.push(a)
        
    }
    console.debug(cockatrice_deck_cards_array)
    return cockatrice_deck_cards_array
}

function cockatrice_deckCardListArrayToPlainText(cockatrice_deck_cards_array) {
    let cockatrice_deck_cards_plaintext = cockatrice_deck_cards_array.join("\n")
    console.debug(cockatrice_deck_cards_plaintext)
    return cockatrice_deck_cards_plaintext
}

function cockatrice_deckJoin(cockatrice_deck_cards_plaintext) {
    var cockatrice_deck = COCKATRICE_DECK_FILE_TEMPLATE
    var cockatrice_deck = cockatrice_deck.replace("{DECKNAME}", "deck name")
    var cockatrice_deck = cockatrice_deck.replace("{COMMENTS}", "this is a comment")
    var cockatrice_deck = cockatrice_deck.replace("{CARDS}", cockatrice_deck_cards_plaintext)
    console.debug(cockatrice_deck)
    return cockatrice_deck
}

function downloadCod() {
    let card_list_complex = createComplexCardList()
    let cockatrice_deck_cards_array = cockatrice_deckCards(card_list_complex)
    let cockatrice_deck_cards_plaintext = cockatrice_deckCardListArrayToPlainText(cockatrice_deck_cards_array)
    let cockatrice_deck = cockatrice_deckJoin(cockatrice_deck_cards_plaintext)
    download(cockatrice_deck, "file.cod", Text)
}

export { addCardToList, downloadCod }