golds = 0;
gps = 0;
var click = 1;
save();
var minions = [
    { id: 1, name: "Wynne", cost: 10, gps: 0.1, owned: 0 },
    { id: 2, name: "Bonny", cost: 100, gps: 1, owned: 0 },
    { id: 3, name: "Avery", cost: 500, gps: 5, owned: 0 }
];

function addGold(x) {
    golds += x * click;
    displayGolds();
}

function auto() {


    if (localStorage.getItem("golds") != null) {
        load()
        console.log("test")
    }

    var timer = setInterval(function() {

        golds += gps;
        getGPS();
        displayGolds();
        displayGPS();
        affiché(1)
        affiché(2)
        affiché(3)

    }, 1000);
}

function displayGolds() {
    document.getElementById("gold").innerHTML = "Nombre de pièces d'or : " + golds.toFixed(1);
}

function displayGPS() {
    document.getElementById("gps").innerHTML = "Nombre de pièces/secondes : " + gps.toFixed(1);
}



function getGPS() {
    gps = 0;
    o = 0;
    minions.forEach(function(minion) {
        gps = gps + minion.gps * minion.owned;
        o = o + minion.owned;
    })

    //gps = minions[0].gps * minions[0].owned + minions[1].gps * minions[1].owned + minions[2].gps * minions[2].owned
    //o = minions[0].owned + minions[1].owned + minions[2].owned
    displayGPS();

}

function affiché(id) {
    var item = minions.find(item => item.id === id);
    getGPS();
    document.getElementById('cost' + id).innerHTML = (item.cost + " golds !").toString();
    document.getElementById('num' + id).innerHTML = (item.owned + " pirates !");
    document.getElementById('a').innerHTML = ("Vous possédez " + o + " pirates !");
    document.getElementById('minion_0_gps').innerHTML = ("Wynne makes " + minions[0].gps + "x's as much!");
    document.getElementById('minion_1_gps').innerHTML = ("Bonny makes " + minions[1].gps + "x's as much!");
    document.getElementById('minion_2_gps').innerHTML = ("Avery makes " + minions[2].gps + "x's as much!");
}

function buyMinion(id) {
    var item = minions.find(item => item.id === id);
    if (golds >= item.cost) {
        golds -= item.cost;
        item.owned += 1;
        item.cost = Math.round(item.cost * 1.15);


        if (minions[0].owned == 25) {
            minions[0].gps *= 2;
            console.log(minions[0].owned);
            console.log(minions[0].gps);
        } else if (minions[0].owned == 50) {
            minions[0].gps *= 2;
            console.log(minions[0].owned);
            console.log(minions[0].gps);
        } else if (minions[0].owned == 100) {
            minions[0].gps *= 2;
            console.log(minions[0].owned);
            console.log(minions[0].gps);
        } else if (minions[0].owned == 250) {
            minions[0].gps *= 2;
            console.log(minions[0].owned);
            console.log(minions[0].gps);
        } else if (minions[0].owned == 1000) {
            minions[0].gps *= 2;
            console.log(minions[0].owned);
            console.log(minions[0].gps);
        }



        if (minions[1].owned == 25) {
            minions[1].gps *= 2;
            console.log(minions[1].owned);
            console.log(minions[1].gps);
        } else if (minions[1].owned == 50) {
            minions[1].gps *= 2;
            console.log(minions[1].owned);
            console.log(minions[1].gps);
        } else if (minions[1].owned == 100) {
            minions[1].gps *= 2;
            console.log(minions[1].owned);
            console.log(minions[1].gps);
        } else if (minions[1].owned == 250) {
            minions[1].gps *= 2;
            console.log(minions[1].owned);
            console.log(minions[1].gps);
        } else if (minions[1].owned == 1000) {
            minions[1].gps *= 2;
            console.log(minions[1].owned);
            console.log(minions[1].gps);
        }


        if (minions[2].owned == 25) {
            minions[2].gps *= 2;
            console.log(minions[2].owned);
            console.log(minions[2].gps);
        } else if (minions[2].owned == 50) {
            minions[2].gps *= 2;
            console.log(minions[2].owned);
            console.log(minions[2].gps);
        } else if (minions[2].owned == 100) {
            minions[2].gps *= 2;
            console.log(minions[2].owned);
            console.log(minions[2].gps);
        } else if (minions[2].owned == 250) {
            minions[2].gps *= 2;
            console.log(minions[2].owned);
            console.log(minions[2].gps);
        } else if (minions[2].owned == 1000) {
            minions[2].gps *= 2;
            console.log(minions[2].owned);
            console.log(minions[2].gps);
        }

        getGPS();
        document.getElementById('cost' + id).innerHTML = (item.cost + " golds !").toString();
        document.getElementById('num' + id).innerHTML = (item.owned + " pirates !");
        document.getElementById('a').innerHTML = ("Vous possédez " + o + " pirates !");
        document.getElementById('minion_0_gps').innerHTML = ("Wynne makes " + minions[0].gps + "x's as much!");
        document.getElementById('minion_1_gps').innerHTML = ("Bonny makes " + minions[1].gps + "x's as much!");
        document.getElementById('minion_2_gps').innerHTML = ("Avery makes " + minions[2].gps + "x's as much!");

        if (o % 50 == 0) {
            click = click * 2;
        }

    }
}



function save() {
    var timer = setInterval(function() {
        localStorage.setItem("golds", golds);
        localStorage.setItem("click", click);

        localStorage.setItem("prix_0", minions[0].cost);
        localStorage.setItem("gps_0", minions[0].gps);
        localStorage.setItem("owned_0", minions[0].owned);

        localStorage.setItem("prix_1", minions[1].cost);
        localStorage.setItem("gps_1", minions[1].gps);
        localStorage.setItem("owned_1", minions[1].owned);

        localStorage.setItem("prix_2", minions[2].cost);
        localStorage.setItem("gps_2", minions[2].gps);
        localStorage.setItem("owned_2", minions[2].owned);
    }, 5000);
}

function load() {
    if (localStorage.length == 0) {
        //do nothing
        alert("nothing");
    } else {

        golds = Number(localStorage.getItem("golds"));
        click = Number(localStorage.getItem("click"));

        minions[0].cost = Number(localStorage.getItem("prix_0"));
        minions[0].gps = Number(localStorage.getItem("gps_0"));
        minions[0].owned = Number(localStorage.getItem("owned_0"));

        minions[1].cost = Number(localStorage.getItem("prix_1"));
        minions[1].gps = Number(localStorage.getItem("gps_1"));
        minions[1].owned = Number(localStorage.getItem("owned_1"));

        minions[2].cost = Number(localStorage.getItem("prix_2"));
        minions[2].gps = Number(localStorage.getItem("gps_2"));
        minions[2].owned = Number(localStorage.getItem("owned_2"));
    }
}

function reset() {
    localStorage.clear();
    console.log(localStorage);
    getGPS();
    displayGolds();
    displayGPS();
    affiché(1);
    affiché(2);
    affiché(3);

}