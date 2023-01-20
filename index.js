function countryToCity(s1, s2) {
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";

    if (s1.value == "turkiye") {
        var optionArray = ['secimYap|Lütfen bir şehir seçin','ankara|Ankara', 'istanbul|İstanbul', 'kocaeli|Kocaeli'];
    } else if (s1.value == 'fransa') {
        var optionArray = ['secimYap|Lütfen bir şehir seçin','paris|Paris', 'marsilya|Marsilya', 'nice|Nice'];
    }
    for (var option in optionArray) {
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");

        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        s2.options.add(newOption)
    }
}


function cityToDistrict(param1,param2) {
    var param1 = document.getElementById(param1);
    var param2 = document.getElementById(param2);
    param2.innerHTML = "";

    if (param1.value == "ankara") {
        var newOptionArray = ['cankaya|Çankaya','etimesgut|Etimesgut','kecioren|Keçiören'];
    } else if (param1.value =="istanbul") {
        var newOptionArray = ['gungoren|Güngören','esenler|Esenler','bagcilar|Bağcılar'];
    } else if (param1.value == "kocaeli") {
        var newOptionArray = ['kandira|Kandira','izmit|İzmit','karamursel|Karamürsel'];
    } else if (param1.value == "paris") {
        var newOptionArray = ['louvre|Louvre','bourse|Bourse','temple|Temple'];
    } else if (param1.value == "marsilya") {
        var newOptionArray = ['saintantoine|Saint Antoine','chanot|Chanot','euromed|Euromed'];
    } else if (param1.value == "nice") {
        var newOptionArray = ['vieuxnice|Vieux Nice','antibes|Antibes','grasse|Grasse'];
    }
     for (var option in newOptionArray) {
        var pair2 = newOptionArray[option].split("|")
        var newOption2 = document.createElement("option")
        
        newOption2.value = pair2[0];
        newOption2.innerHTML = pair2[1];
        param2.options.add(newOption2);
     }
}