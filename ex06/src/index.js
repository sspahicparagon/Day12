function myNes() {
    var myStorage = {
        "car": {
            "inside": {
                "glove box": "maps",
                "passenger seat": "crumbs"
            },
            "outside": {
                "trunk": "jack"
            }
        }
    };

    // Only change code below this line
    return myStorage.car.inside["glove box"];
    // Only change code above this line
}

console.log(myNes());

module.exports = myNes;