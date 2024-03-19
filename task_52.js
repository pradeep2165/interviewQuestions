function getItems(list, ...grgs, moreItem){
    return [...list, ...grgs, moreItem]
}

getItems(['berry', 'apple'], 'pear','kiwi')