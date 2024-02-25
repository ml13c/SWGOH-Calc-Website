//character presetdata
let finalshardsremaining = 330;
const droprate=.33;
var BattleAmt;
var finalshardAmt;
//ship presetdata
let shipfinalshardsremaining = 330;
var shipBattleAmt;
var shipfinalshardAmt;
//tab funcitonality display
function openMAINTAB(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
//star selection functionality
function staramt() {
    let shardsremaining = 330;
    var select = document.getElementById("selectstar");
    var y = parseInt(select.value);
    document.getElementById("starselection").innerHTML = "Star shards amt: "+ y;
    shardsremaining -= y;
    switch (y){
     case "choose":
      var p = document.createElement("p");
      p.innerHTML = "select star amount";
      document.getElementById("starselection").appendChild(p);
      finalshardsremaining = 330-0;
      shardsremaining=330;
        break;
      case 0:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        finalshardsremaining = 330-0;
        document.getElementById("starselection").appendChild(p);
        shardsremaining=330;
        break;
      case 10:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        finalshardsremaining = 330-10;
        document.getElementById("starselection").appendChild(p);
        shardsremaining=330;
        break;
        case 25:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        finalshardsremaining = 330-25;
        document.getElementById("starselection").appendChild(p);
        shardsremaining=330;
        break;
      case 50:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        finalshardsremaining = 330-50;
        document.getElementById("starselection").appendChild(p);
        shardsremaining=330;
        break;
      case 80:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        finalshardsremaining = 330-80;
        document.getElementById("starselection").appendChild(p);
        shardsremaining=330;
      break;
      case 145:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        finalshardsremaining = 330-145;
        document.getElementById("starselection").appendChild(p);
        shardsremaining=330;
        break;
      case 230:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        finalshardsremaining = 330-230;
        document.getElementById("starselection").appendChild(p);
        shardsremaining=330;
        break;
      case 330:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        finalshardsremaining = 330-330;
        document.getElementById("starselection").appendChild(p);
        shardsremaining=330;
        break;
      default:
        break;
    }
  }
function staramtship() {
    let shardsremaining = 330;
    var select = document.getElementById("selectstarship");
    var y = parseInt(select.value);
    document.getElementById("starselectionship").innerHTML = "Star shards amt: "+ y;
    shardsremaining -= y;
    switch (y){
     case "choose":
      var p = document.createElement("p");
      p.innerHTML = "select star amount";
      document.getElementById("starselectionship").appendChild(p);
      shipfinalshardsremaining = 330-0;
      shardsremaining=330;
        break;
      case 0:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        shipfinalshardsremaining = 330-0;
        document.getElementById("starselectionship").appendChild(p);
        shardsremaining=330;
        break;
      case 10:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        shipfinalshardsremaining = 330-10;
        document.getElementById("starselectionship").appendChild(p);
        shardsremaining=330;
        break;
        case 25:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        shipfinalshardsremaining = 330-25;
        document.getElementById("starselectionship").appendChild(p);
        shardsremaining=330;
        break;
      case 50:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        shipfinalshardsremaining = 330-50;
        document.getElementById("starselectionship").appendChild(p);
        shardsremaining=330;
        break;
      case 80:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        shipfinalshardsremaining = 330-80;
        document.getElementById("starselectionship").appendChild(p);
        shardsremaining=330;
      break;
      case 145:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        shipfinalshardsremaining = 330-145;
        document.getElementById("starselectionship").appendChild(p);
        shardsremaining=330;
        break;
      case 230:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        shipfinalshardsremaining = 330-230;
        document.getElementById("starselectionship").appendChild(p);
        shardsremaining=330;
        break;
      case 330:
        var p = document.createElement("p");
        p.innerHTML = "Shards Remaining: "+ shardsremaining;
        shipfinalshardsremaining = 330-330;
        document.getElementById("starselectionship").appendChild(p);
        shardsremaining=330;
        break;
      default:
        break;
    }
  }


//Data
const relicMap = new Map([
  ["Relic 0", { Relic: "0", CarboniteCircuitBoard: 0, BronziumWiring: 0, ChromiumTransistor: 0, AurodiumHeatsink: 0, ElectriumConductor: 0, ZinbiddleCard: 0, Fragmented: 0, Incomplete: 0, Flawed: 0, ImpulseDetector: 0, Aeromagnifier: 0, GyrdaKeypad: 0, DroidBrain: 0 }],
  ["Relic 1", { Relic: "1", CarboniteCircuitBoard: 40, BronziumWiring: 0, ChromiumTransistor: 0, AurodiumHeatsink: 0, ElectriumConductor: 0, ZinbiddleCard: 0, Fragmented: 0, Incomplete: 0, Flawed: 0, ImpulseDetector: 0, Aeromagnifier: 0, GyrdaKeypad: 0, DroidBrain: 0 }],
  ["Relic 2", { Relic: "2", CarboniteCircuitBoard: 70, BronziumWiring: 40, ChromiumTransistor: 0, AurodiumHeatsink: 0, ElectriumConductor: 0, ZinbiddleCard: 0, Fragmented: 15, Incomplete: 0, Flawed: 0, ImpulseDetector: 0, Aeromagnifier: 0, GyrdaKeypad: 0, DroidBrain: 0 }],
  ["Relic 3", { Relic: "3", CarboniteCircuitBoard: 100, BronziumWiring: 80, ChromiumTransistor: 20, AurodiumHeatsink: 0, ElectriumConductor: 0, ZinbiddleCard: 0, Fragmented: 35, Incomplete: 15, Flawed: 0, ImpulseDetector: 0, Aeromagnifier: 0, GyrdaKeypad: 0, DroidBrain: 0 }],
  ["Relic 4", { Relic: "4", CarboniteCircuitBoard: 130, BronziumWiring: 120, ChromiumTransistor: 60, AurodiumHeatsink: 0, ElectriumConductor: 0, ZinbiddleCard: 0, Fragmented: 55, Incomplete: 40, Flawed: 0, ImpulseDetector: 0, Aeromagnifier: 0, GyrdaKeypad: 0, DroidBrain: 0 }],
  ["Relic 5", { Relic: "5", CarboniteCircuitBoard: 160, BronziumWiring: 160, ChromiumTransistor: 90, AurodiumHeatsink: 20, ElectriumConductor: 20, ZinbiddleCard: 0, Fragmented: 75, Incomplete: 65, Flawed: 15, ImpulseDetector: 0, Aeromagnifier: 0, GyrdaKeypad: 0, DroidBrain: 0 }],
  ["Relic 6", { Relic: "6", CarboniteCircuitBoard: 180, BronziumWiring: 190, ChromiumTransistor: 120, AurodiumHeatsink: 40, ElectriumConductor: 20, ZinbiddleCard: 0, Fragmented: 95, Incomplete: 90, Flawed: 40, ImpulseDetector: 20, Aeromagnifier: 20, GyrdaKeypad: 0, DroidBrain: 0 }],
  ["Relic 7", { Relic: "7", CarboniteCircuitBoard: 200, BronziumWiring: 220, ChromiumTransistor: 140, AurodiumHeatsink: 60, ElectriumConductor: 40, ZinbiddleCard: 10, Fragmented: 115, Incomplete: 115, Flawed: 75, ImpulseDetector: 40, Aeromagnifier: 40, GyrdaKeypad: 0, DroidBrain: 0 }],
  ["Relic 8", { Relic: "8", CarboniteCircuitBoard: 200, BronziumWiring: 220, ChromiumTransistor: 160, AurodiumHeatsink: 80, ElectriumConductor: 60, ZinbiddleCard: 30, Fragmented: 135, Incomplete: 140, Flawed: 120, ImpulseDetector: 60, Aeromagnifier: 60, GyrdaKeypad: 20, DroidBrain: 20 }],
  ["Relic 9", { Relic: "9", CarboniteCircuitBoard: 200, BronziumWiring: 220, ChromiumTransistor: 180, AurodiumHeatsink: 100, ElectriumConductor: 80, ZinbiddleCard: 50, Fragmented: 165, Incomplete: 170, Flawed: 175, ImpulseDetector: 100, Aeromagnifier: 80, GyrdaKeypad: 20, DroidBrain: 20 }]
]);

  const swgohMap = new Map([
    ["0-0-0", {Charactername: "0-0-0", Location: "Dark Side Battles: 2-A (Hard)", Nodeamount: 1 , NodeShardamount: 1 , charactershipmentshardamount: 0 ,}],
    ["50R-T", {Charactername: "50R-T", Location: "Dark Side Battles: 3-E (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Aayla Secura", {Charactername: "Aayla Secura", Location: "Cantina Battles: 5-B, Fanatical Devotion,Guild Activity Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Admiral Ackbar", {Charactername: "Admiral Ackbar", Location: "Fleet Arena Store,Guild Events Store,Rebel Roundup,Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Admiral Piett", {Charactername: "Admiral Piett", Location: "Light Side Battles: 6-B (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Admiral Raddus", {Charactername: "Admiral Raddus", Location: "Dark Side Battles: 4-A (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Admiral Trench", {Charactername: "Admiral Trench", Location: "Conquest,Conquest Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Ahsoka Tano", {Charactername: "Ahsoka Tano", Location: "Bronzium Data Card,Cantina Battles Store,Fleet Arena Store,Light Side Battles: 1-B (Hard),Places of Power", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Ahsoka Tano (Fulcrum)", {Charactername: "Ahsoka Tano (Fulcrum)", Location: "Fanatical Devotion,Fleet Arena Store,Galactic Bounties II", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Amilyn Holdo", {Charactername: "Amilyn Holdo", Location: "Dark Side Battles: 7-C (Hard),Galactic Bounties II", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["ARC Trooper", {Charactername: "ARC Trooper", Location: "Cantina Battles: 5-G", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Asajj Ventress", {Charactername: "Asajj Ventress", Location: "Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Aurra Sing", {Charactername: "Aurra Sing", Location: "Cantina Battles: 7-C", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["B1 Battle Droid", {Charactername: "B1 Battle Droid", Location: "Fleet Battles: 5-B (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["B2 Super Battle Droid", {Charactername: "B2 Super Battle Droid", Location: "Cantina Battles: 6-D,Guild Activity Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Barriss Offee", {Charactername: "Barriss Offee", Location: "Bronzium Data Card,Dark Side Battles: 5-C (Hard),Fanatical Devotion,Guild Activity Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Bastila Shan", {Charactername: "Bastila Shan", Location: "Dark Side Battles: 5-B (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Bastila Shan (Fallen)", {Charactername: "Bastila Shan (Fallen)", Location: "Dark Side Battles: 7-A (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Baze Malbus", {Charactername: "Baze Malbus", Location: "Light Side Battles: 9-C (Hard),Rebel Roundup", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],   
    ["BB-8", {Charactername: "BB-8", Location: "Journey Guide: Pieces and Plans", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Ben Solo", {Charactername: "Ben Solo", Location: "Conquest Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Biggs Darklighter", {Charactername: "Biggs Darklighter", Location: "Bronzium Data Card,Cantina Battles: 3-G,Fleet Arena Store,Galactic War Store,Guild Events Store,Rebel Roundup", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Bistan", {Charactername: "Bistan", Location: "Cantina Battles Store,Fleet Arena Store,Guild Events Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Bo-Katan Kryze", {Charactername: "Bo-Katan Kryze", Location: "Dark Side Battles: 6-D (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Boba Fett", {Charactername: "Boba Fett", Location: "Bronzium Data Card,Cantina Battles Store,Dark Side Battles: 2-B (Hard),Fleet Arena Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Boba Fett, Scion of Jango", {Charactername: "Boba Fett, Scion of Jango", Location: "Guild Events Store,Proving Grounds", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Bodhi Rook", {Charactername: "Bodhi Rook", Location: "Galactic War Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Bossk", {Charactername: "Bossk", Location: "Dark Side Battles: 9-B (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Boushh (Leia Organa)", {Charactername: "Boushh (Leia Organa)", Location: "Dark Side Battles: 2-C (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["BT-1", {Charactername: "BT-1", Location: "Light Side Battles: 2-C (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["C-3PO", {Charactername: "C-3PO", Location: "Journey Guide: Contact Protocol", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Cad Bane", {Charactername: "Cad Bane", Location: "Galactic War Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Cal Kestis", {Charactername: "Cal Kestis", Location: "Cantina Battles: 1-F", Nodeamount: 1 , NodeShardamount: 1 , charactershipmentshardamount: 0 ,}],
    ["Canderous Ordo", {Charactername: "Canderous Ordo", Location: "Cantina Battles: 5-C", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Captain Drogan", {Charactername: "Captain Drogan", Location: "Cantina Battles: 6-F", Nodeamount: 1 , NodeShardamount: 1 , charactershipmentshardamount: 0 ,}],
    ["Captain Han Solo", {Charactername: "Captain Han Solo", Location: "Cantina Battles: 7-D, Rebel Roundup", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],  
    ["Captain Phasma", {Charactername: "Captain Phasma", Location: "Galactic War Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Captain Rex", {Charactername: "Captain Rex", Location: "Dark Side Battles: 3-F (Hard)", Nodeamount: 1 , NodeShardamount: 1 , charactershipmentshardamount: 0 ,}],
    ["Cara Dune", {Charactername: "Cara Dune", Location: "Dark Side Battles: 5-E (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Carth Onasi", {Charactername: "Carth Onasi", Location: "Cantina Battles: 8-E", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Cassian Andor", {Charactername: "Cassian Andor", Location: "Guild Events Store,Rebel Roundup,Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["CC-2224 \"Cody\"", {Charactername: "CC-2224 \"Cody\"", Location: "Fleet Arena Store, Guild Activity Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],  
    ["Cere Junda", {Charactername: "Cere Junda", Location: "Light Side Battles: 3-A (Hard)", Nodeamount: 1 , NodeShardamount: 1 , charactershipmentshardamount: 0 ,}],
    ["Chewbacca", {Charactername: "Chewbacca", Location: "Journey Guide: One Famous Wookiee", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Chief Chirpa", {Charactername: "Chief Chirpa", Location: "Cantina Battles: 5-D, Forest Moon", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Chief Nebit", {Charactername: "Chief Nebit", Location: "Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Chirrut ├Ämwe", {Charactername: "Chirrut ├Ämwe", Location: "Fleet Arena Store, Rebel Roundup", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Chopper", {Charactername: "Chopper", Location: "Cantina Battles Store,Guild Events Store,Rebel Roundup", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}], 
    ["Clone Sergeant - Phase I", {Charactername: "Clone Sergeant - Phase I", Location: "Bronzium Data Card,Fleet Arena Store,Guild Activity Store,Light Side Battles: 5-C (Hard),Places of Power", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Clone Wars Chewbacca", {Charactername: "Clone Wars Chewbacca", Location: "Bronzium Data Card, Cantina Battles: 2-F", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Colonel Starck", {Charactername: "Colonel Starck", Location: "Guild Activity Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Commander Ahsoka Tano", {Charactername: "Commander Ahsoka Tano", Location: "Guild Events Store,Proving Grounds", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Commander Luke Skywalker", {Charactername: "Commander Luke Skywalker", Location: "Journey Guide: Luke Skywalker Hero's Journey", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Coruscant Underworld Police", {Charactername: "Coruscant Underworld Police", Location: "Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Count Dooku", {Charactername: "Count Dooku", Location: "Bronzium Data Card,Fleet Arena Store,Guild Activity Store,Light Side Battles: 5-C (Hard),Places of Power", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["CT-21-0408 \"Echo\"", {Charactername: "CT-21-0408 \"Echo\"", Location: "Fleet Arena Store, Guild Activity Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["CT-5555 \"Fives\"", {Charactername: "CT-5555 \"Fives\"", Location: "Bronzium Data Card,Cantina Battles Store,Dark Side Battles: 2-D (Hard),Fleet Arena Store,Places of Power", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["CT-7567 \"Rex\"", {Charactername: "CT-7567 \"Rex\"", Location: "Fleet Arena Store,Guild Activity Store,Places of Power", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Dark Trooper", {Charactername: "Dark Trooper", Location: "Light Side Battles: 1-C (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Dark Trooper Moff Gideon", {Charactername: "Dark Trooper Moff Gideon", Location: "Conquest", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Darth Malak", {Charactername: "Darth Malak", Location: "Journey Guide: Star Forge Showdown, Guild Events Store,", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Darth Malgus", {Charactername: "Darth Malgus", Location: "Conquest Store, Proving Grounds", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Darth Maul", {Charactername: "Darth Maul", Location: "Fleet Arena Store, Guild Activity Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Darth Nihilus", {Charactername: "Darth Nihilus", Location: "Dark Side Battles: 9-A (Hard), Secrets and Shadows", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Darth Revan", {Charactername: "Darth Revan", Location: "Journey Guide: Scourge of the Old Republic", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],     
    ["Darth Sidious", {Charactername: "Darth Sidious", Location: "Secrets and Shadows, Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],     
    ["Darth Sion", {Charactername: "Darth Sion", Location: "Light Side Battles: 9-A (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Darth Talon", {Charactername: "Darth Talon", Location: "Cantina Battles: 7-G", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Darth Traya", {Charactername: "Darth Traya", Location: "Hyperdrive Bundle, The Sith Triumvirate, Guild Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Darth Vader", {Charactername: "Darth Vader", Location: "Fleet Arena Store,Hyperdrive Bundle,Military Might, Achievements", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Dash Rendar", {Charactername: "Dash Rendar", Location: "Cantina Battles: 7-E", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Dathcha", {Charactername: "Dathcha", Location: "Bronzium Data Card,Galactic War Store,Light Side Battles: 3-F (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Death Trooper", {Charactername: "Death Trooper", Location: "Cantina Battles: 8-A, Military Might", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],       
    ["Dengar", {Charactername: "Dengar", Location: "Guild Activity Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Director Krennic", {Charactername: "Director Krennic", Location: "Guild Events Store,Light Side Battles: 9-D (Hard),Military Might", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Doctor Aphra", {Charactername: "Doctor Aphra", Location: "Journey Guide: Rogue Archaeologist", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Droideka", {Charactername: "Droideka", Location: "Light Side Battles: 8-B (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Echo", {Charactername: "Echo", Location: "Light Side Battles: 7-D (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Eeth Koth", {Charactername: "Eeth Koth", Location: "Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Eighth Brother", {Charactername: "Eighth Brother", Location: "Light Side Battles: 6-E (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Embo", {Charactername: "Embo", Location: "Dark Side Battles: 8-C (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Emperor Palpatine", {Charactername: "Emperor Palpatine", Location: "Journey Guide: Emperor's Demise", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],    
    ["Enfys Nest", {Charactername: "Enfys Nest", Location: "Fleet Battles: 5-D (Hard),Galactic Bounties II", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],   
    ["Ewok Elder", {Charactername: "Ewok Elder", Location: "Bronzium Data Card,Forest Moon,Guild Activity Store,Light Side Battles: 2-A (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Ewok Scout", {Charactername: "Ewok Scout", Location: "Bronzium Data Card,Forest Moon,Light Side Battles: 2-A (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Ezra Bridger", {Charactername: "Ezra Bridger", Location: "Cantina Battles: 2-B,Fanatical Devotion,Fleet Arena Store,Guild Events Store,Rebel Roundup", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Fennec Shand", {Charactername: "Fennec Shand", Location: "Light Side Battles: 6-C (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Fifth Brother", {Charactername: "Fifth Brother", Location: "Cantina Battles: 4-A", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Finn", {Charactername: "Finn", Location: "Cantina Battles: 3-E,Guild Activity Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["First Order Executioner", {Charactername: "First Order Executioner", Location: "Cantina Battles: 2-G", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],   
    ["First Order Officer", {Charactername: "First Order Officer", Location: "Cantina Battles Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["First Order SF TIE Pilot", {Charactername: "First Order SF TIE Pilot", Location: "Guild Activity Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}], 
    ["First Order Stormtrooper", {Charactername: "First Order Stormtrooper", Location: "Light Side Battles: 2-B (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["First Order TIE Pilot", {Charactername: "First Order TIE Pilot", Location: "Dark Side Battles: 6-B (Hard),Fleet Arena Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Gamorrean Guard", {Charactername: "Gamorrean Guard", Location: "Guild Activity Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Gar Saxon", {Charactername: "Gar Saxon", Location: "Cantina Battles: 2-E,Guild Events Store,Military Might", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Garazeb \"Zeb\" Orrelios", {Charactername: "Garazeb \"Zeb\" Orrelios", Location: "Galactic War Store,Guild Events Store,Rebel Roundup", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["General Grievous", {Charactername: "General Grievous", Location: "Fleet Arena Store,Ground War,Shard Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["General Hux", {Charactername: "General Hux", Location: "Dark Side Battles: 6-A (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["General Kenobi", {Charactername: "General Kenobi", Location: "Fanatical Devotion,Hyperdrive Bundle,Tank Takedown,Guild Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["General Skywalker", {Charactername: "General Skywalker", Location: "Journey Guide: Clash on Kamino,Guild Events Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["General Veers", {Charactername: "General Veers", Location: "Bronzium Data Card,Guild Events Store,Light Side Battles: 4-C (Hard),Military Might", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Geonosian Brood Alpha", {Charactername: "Geonosian Brood Alpha", Location: "Cantina Battles: 8-D", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],       
    ["Geonosian Soldier", {Charactername: "Geonosian Soldier", Location: "Cantina Battles: 1-A,Fleet Arena Store,Ground War", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Geonosian Spy", {Charactername: "Geonosian Spy", Location: "Cantina Battles: 4-D,Fleet Arena Store,Ground War", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Grand Admiral Thrawn", {Charactername: "Grand Admiral Thrawn", Location: "Journey Guide: Artist of War", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}], 
    ["Grand Inquisitor", {Charactername: "Grand Inquisitor", Location: "Journey Guide: Dark Times", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Grand Master Yoda", {Charactername: "Grand Master Yoda", Location: "Journey Guide: Grand Master's Training", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Grand Moff Tarkin", {Charactername: "Grand Moff Tarkin", Location: "Fleet Arena Store,Guild Events Store,Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Greedo", {Charactername: "Greedo", Location: "Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Greef Karga", {Charactername: "Greef Karga", Location: "Fleet Battles: 4-C (Hard),Light Side Battles: 3-E (Hard)", Nodeamount: 2 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Han Solo", {Charactername: "Han Solo", Location: "Galactic Bounties I,Hyperdrive Bundle,The Pit,Guild Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Hera Syndulla", {Charactername: "Hera Syndulla", Location: "Guild Events Store,Light Side Battles: 2-F (Hard),Rebel Roundup", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Hermit Yoda", {Charactername: "Hermit Yoda", Location: "Fanatical Devotion,Guild Events Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["HK-47", {Charactername: "HK-47", Location: "Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Hondo Ohnaka", {Charactername: "Hondo Ohnaka", Location: "Cantina Battles: 1-D", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Hoth Rebel Scout", {Charactername: "Hoth Rebel Scout", Location: "Bronzium Data Card,Cantina Battles Store,Dark Side Battles: 6-A (Hard),Guild Events Store,Rebel Roundup", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Hoth Rebel Soldier", {Charactername: "Hoth Rebel Soldier", Location: "Bronzium Data Card,Dark Side Battles: 3-B (Hard),Guild Events Store,Rebel Roundup", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Hunter", {Charactername: "Hunter", Location: "Light Side Battles: 5-B (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Iden Versio", {Charactername: "Iden Versio", Location: "Light Side Battles: 4-D (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["IG-100 MagnaGuard", {Charactername: "IG-100 MagnaGuard", Location: "Bronzium Data Card,Cantina Battles: 3-C,Dark Side Battles: 6-E (Hard),Guild Activity Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["IG-11", {Charactername: "IG-11", Location: "Light Side Battles: 3-E (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["IG-12 & Grogu", {Charactername: "IG-12 & Grogu", Location: "N/A", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["IG-86 Sentinel Droid", {Charactername: "IG-86 Sentinel Droid", Location: "Bronzium Data Card,Dark Side Battles: 2-F (Hard),Galactic War Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["IG-88", {Charactername: "IG-88", Location: "Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Ima-Gun Di", {Charactername: "Ima-Gun Di", Location: "Bronzium Data Card,Dark Side Battles: 5-C (Hard),Guild Activity Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Imperial Probe Droid", {Charactername: "Imperial Probe Droid", Location: "Galactic Bounties I,Guild Events Store,Hoth Imperial Retaliation", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Imperial Super Commando", {Charactername: "Imperial Super Commando", Location: "Fleet Battles: 4-A (Hard),Guild Events Store,Military Might", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Jabba the Hutt", {Charactername: "Jabba the Hutt", Location: "Greetings, Exalted One", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Jango Fett", {Charactername: "Jango Fett", Location: "Light Side Battles: 8-D (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Jawa", {Charactername: "Jawa", Location: "Bronzium Data Card,Dark Side Battles: 4-F (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Jawa Engineer", {Charactername: "Jawa Engineer", Location: "Guild Activity Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Jawa Scavenger", {Charactername: "Jawa Scavenger", Location: "Cantina Battles Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Jedi Consular", {Charactername: "Jedi Consular", Location: "Bronzium Data Card,Cantina Battles: 3-A,Dark Side Battles: 1-D (Hard),Fleet Arena Store,Places of Power", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Jedi Knight Anakin", {Charactername: "Jedi Knight Anakin", Location: "Dark Side Battles: 1-B (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],    
    ["Jedi Knight Cal Kestis", {Charactername: "Jedi Knight Cal Kestis", Location: "Journey Guide: Jedi Knight Cal Kestis ", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Jedi Knight Guardian", {Charactername: "Jedi Knight Guardian", Location: "Bronzium Data Card,Cantina Battles Store,Dark Side Battles: 3-F (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Jedi Knight Luke Skywalker", {Charactername: "Jedi Knight Luke Skywalker", Location: "Journey Guide: Luke Skywalker The Journey Continues", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Jedi Knight Revan", {Charactername: "Jedi Knight Revan", Location: "Journey Guide: Legend of the Old Republic", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Jedi Master Kenobi", {Charactername: "Jedi Master Kenobi", Location: "What Must Be Done", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Jedi Master Luke Skywalker", {Charactername: "Jedi Master Luke Skywalker", Location: "The Journey's End", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Jolee Bindo", {Charactername: "Jolee Bindo", Location: "Dark Side Battles: 6-D (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Juhani", {Charactername: "Juhani", Location: "Light Side Battles: 6-A (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Jyn Erso", {Charactername: "Jyn Erso", Location: "Guild Activity Store,Rebel Roundup", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["K-2SO", {Charactername: "K-2SO", Location: "Galactic War Store,Guild Events Store,Rebel Roundup", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],        
    ["Kanan Jarrus", {Charactername: "Kanan Jarrus", Location: "Fanatical Devotion,Guild Events Store,Rebel Roundup,Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Ki-Adi-Mundi", {Charactername: "Ki-Adi-Mundi", Location: "Geonosis Republic Offensive,Guild Events Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Kit Fisto", {Charactername: "Kit Fisto", Location: "Cantina Battles: 4-F,Fanatical Devotion,Guild Activity Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Krrsantan", {Charactername: "Krrsantan", Location: "Cantina Battles: 7-A", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Kuiil", {Charactername: "Kuiil", Location: "Dark Side Battles: 5-A (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Kyle Katarn", {Charactername: "Kyle Katarn", Location: "Cantina Battles: 6-A", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Kylo Ren", {Charactername: "Kylo Ren", Location: "Cantina Battles: 4-C,Guild Activity Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Kylo Ren (Unmasked)", {Charactername: "Kylo Ren (Unmasked)", Location: "Cantina Battles: 3-F,Light Side Battles: 1-D (Hard)", Nodeamount: 2 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["L3-37", {Charactername: "L3-37", Location: "Cantina Battles: 5-A", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Lando Calrissian", {Charactername: "Lando Calrissian", Location: "Cantina Battles: 1-E,Guild Events Store,Rebel Roundup", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Leia Organa", {Charactername: "Leia Organa", Location: "Galactic Legend", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Lobot", {Charactername: "Lobot", Location: "Bronzium Data Card,Light Side Battles: 4-B (Hard),Rebel Roundup", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Logray", {Charactername: "Logray", Location: "Forest Moon,Guild Activity Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Lord Vader", {Charactername: "Lord Vader", Location: "Lord Vader Hero's Fall", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Luke Skywalker (Farmboy)", {Charactername: "Luke Skywalker (Farmboy)", Location: "Cantina Battles: 1-B,Guild Activity Store,Guild Events Store,Light Side Battles: 7-D (Hard),Rebel Roundup", Nodeamount: 2 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Luminara Unduli", {Charactername: "Luminara Unduli", Location: "Bronzium Data Card,Dark Side Battles: 2-E (Hard),Fanatical Devotion,Galactic War Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Mace Windu", {Charactername: "Mace Windu", Location: "Bronzium Data Card,Fanatical Devotion,Fleet Arena Store,Light Side Battles: 2-E (Hard),Squad Arena Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Magmatrooper", {Charactername: "Magmatrooper", Location: "Galactic War Store,Guild Events Store,Military Might", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Mara Jade, The Emperor's Hand", {Charactername: "Mara Jade, The Emperor's Hand", Location: "Light Side Battles: 6-D (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Maul", {Charactername: "Maul", Location: "Guild Events Store,Proving Grounds", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Merrin", {Charactername: "Merrin", Location: "Fleet Battles: 1-C (Hard)", Nodeamount: 1 , NodeShardamount: 1 , charactershipmentshardamount: 0 ,}],
    ["Mission Vao", {Charactername: "Mission Vao", Location: "Light Side Battles: 5-D (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Mob Enforcer", {Charactername: "Mob Enforcer", Location: "Cantina Battles Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Moff Gideon", {Charactername: "Moff Gideon", Location: "Cantina Battles: 4-E,Light Side Battles: 2-D (Hard)", Nodeamount: 2 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Mon Mothma", {Charactername: "Mon Mothma", Location: "Light Side Battles: 5-E (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Mother Talzin", {Charactername: "Mother Talzin", Location: "Defense of Dathomir,Light Side Battles: 8-A (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Nightsister Acolyte", {Charactername: "Nightsister Acolyte", Location: "Cantina Battles: 2-A,Guild Activity Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Nightsister Initiate", {Charactername: "Nightsister Initiate", Location: "Galactic War Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Nightsister Spirit", {Charactername: "Nightsister Spirit", Location: "Cantina Battles: 7-F,Ghosts of Dathomir", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Nightsister Zombie", {Charactername: "Nightsister Zombie", Location: "Dark Side Battles: 8-D (Hard),Ghosts of Dathomir", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Ninth Sister", {Charactername: "Ninth Sister", Location: "Light Side Battles: 3-D (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Nute Gunray", {Charactername: "Nute Gunray", Location: "Ground War,Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Obi-Wan Kenobi (Old Ben)", {Charactername: "Obi-Wan Kenobi (Old Ben)", Location: "Cantina Battles: 1-C,Guild Activity Store,Rebel Roundup", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Old Daka", {Charactername: "Old Daka", Location: "Bronzium Data Card,Cantina Battles Store,Dark Side Battles: 4-B (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Omega", {Charactername: "Omega", Location: "Fleet Battles: 4-D (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Padme Amidala", {Charactername: "Padm├⌐ Amidala", Location: "Journey Guide: Aggressive Negotiations", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],   
    ["Pao", {Charactername: "Pao", Location: "Cantina Battles Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Paploo", {Charactername: "Paploo", Location: "Cantina Battles: 3-D,Forest Moon,Galactic Bounties I,Guild Activity Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Paz Vizsla", {Charactername: "Paz Vizsla", Location: "N/A", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Plo Koon", {Charactername: "Plo Koon", Location: "Bronzium Data Card,Cantina Battles: 4-G,Fleet Arena Store,Places of Power", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Poe Dameron", {Charactername: "Poe Dameron", Location: "Cantina Battles Store,Fleet Arena Store,Light Side Battles: 7-B (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Poggle the Lesser", {Charactername: "Poggle the Lesser", Location: "Bronzium Data Card,Galactic War Store,Ground War,Light Side Battles: 4-E (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Princess Kneesaa", {Charactername: "Princess Kneesaa", Location: "N/A", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Princess Leia", {Charactername: "Princess Leia", Location: "Guild Events Store,Rebel Roundup,Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Qi'ra", {Charactername: "Qi'ra", Location: "Cantina Battles: 3-B,Galactic Bounties II", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Qui-Gon Jinn", {Charactername: "Qui-Gon Jinn", Location: "Cantina Battles Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["R2-D2", {Charactername: "R2-D2", Location: "Journey Guide: Daring Droid", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Range Trooper", {Charactername: "Range Trooper", Location: "Dark Side Battles: 3-A (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Rebel Officer Leia Organa", {Charactername: "Rebel Officer Leia Organa", Location: "Galactic Bounties I,Guild Events Store,Hoth Rebel Assault", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Resistance Hero Finn", {Charactername: "Resistance Hero Finn", Location: "Light Side Battles: 8-C (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Resistance Hero Poe", {Charactername: "Resistance Hero Poe", Location: "Light Side Battles: 6-B (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}], 
    ["Resistance Pilot", {Charactername: "Resistance Pilot", Location: "Fleet Arena Store,Galactic War Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}], 
    ["Resistance Trooper", {Charactername: "Resistance Trooper", Location: "Guild Activity Store,Light Side Battles: 3-A (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Rey", {Charactername: "Rey", Location: "Heir to the Light Side", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Rey (Jedi Training)", {Charactername: "Rey (Jedi Training)", Location: "Journey Guide: Rey Hero's Journey", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Rey (Scavenger)", {Charactername: "Rey (Scavenger)", Location: "Dark Side Battles: 5-D (Hard),Guild Activity Store,Light Side Battles: 1-A (Hard)", Nodeamount: 2 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Rose Tico", {Charactername: "Rose Tico", Location: "Light Side Battles: 4-F (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Royal Guard", {Charactername: "Royal Guard", Location: "Bronzium Data Card,Dark Side Battles: 5-F (Hard),Guild Events Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Sabine Wren", {Charactername: "Sabine Wren", Location: "Dark Side Battles: 1-A (Hard),Rebel Roundup", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],    
    ["Sana Starros", {Charactername: "Sana Starros", Location: "Cantina Battles: 2-C", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Savage Opress", {Charactername: "Savage Opress", Location: "Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Saw Gerrera", {Charactername: "Saw Gerrera", Location: "Light Side Battles: 4-B (Hard)", Nodeamount: 1 , NodeShardamount: 1 , charactershipmentshardamount: 0 ,}],
    ["Scarif Rebel Pathfinder", {Charactername: "Scarif Rebel Pathfinder", Location: "Fleet Arena Store,Fleet Battles: 2-C (Hard),Guild Events Store,Rebel Roundup", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Scout Trooper", {Charactername: "Scout Trooper", Location: "Fleet Battles: 5-C (Hard)", Nodeamount: 1 , NodeShardamount: 1 , charactershipmentshardamount: 0 ,}],
    ["Second Sister", {Charactername: "Second Sister", Location: "Dark Side Battles: 4-C (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Seventh Sister", {Charactername: "Seventh Sister", Location: "Dark Side Battles: 4-E (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Shaak Ti", {Charactername: "Shaak Ti", Location: "Fanatical Devotion,Fleet Battles: 5-A (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Shoretrooper", {Charactername: "Shoretrooper", Location: "Light Side Battles: 9-B (Hard),Military Might", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Sith Assassin", {Charactername: "Sith Assassin", Location: "Cantina Battles: 6-C,Guild Activity Store,Secrets and Shadows", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Sith Empire Trooper", {Charactername: "Sith Empire Trooper", Location: "Cantina Battles: 8-B,Secrets and Shadows", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Sith Eternal Emperor", {Charactername: "Sith Eternal Emperor", Location: "The Final Order", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Sith Marauder", {Charactername: "Sith Marauder", Location: "Cantina Battles: 6-E", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Sith Trooper", {Charactername: "Sith Trooper", Location: "Light Side Battles: 2-B (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Skiff Guard (Lando Calrissian)", {Charactername: "Skiff Guard (Lando Calrissian)", Location: "Light Side Battles: 3-B (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Snowtrooper", {Charactername: "Snowtrooper", Location: "Bronzium Data Card,Cantina Battles: 7-B,Guild Activity Store,Guild Events Store,Light Side Battles: 8-C (Hard),Military Might", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Starkiller", {Charactername: "Starkiller", Location: "Journey Guide: The Force Unleashed", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Stormtrooper", {Charactername: "Stormtrooper", Location: "Bronzium Data Card,Cantina Battles Store,Guild Events Store,Light Side Battles: 3-C (Hard),Military Might", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Stormtrooper Han", {Charactername: "Stormtrooper Han", Location: "Cantina Battles Store,Guild Events Store,Rebel Roundup", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Sun Fac", {Charactername: "Sun Fac", Location: "Fleet Arena Store,Ground War,Guild Activity Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 10 ,}],     
    ["Supreme Leader Kylo Ren", {Charactername: "Supreme Leader Kylo Ren", Location: "Heir to the Dark Side", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["T3-M4", {Charactername: "T3-M4", Location: "Cantina Battles: 6-B", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Talia", {Charactername: "Talia", Location: "Bronzium Data Card,Cantina Battles: 1-G,Dark Side Battles: 9-C (Hard),Guild Activity Store", Nodeamount: 2 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Tarfful", {Charactername: "Tarfful", Location: "Dark Side Battles: 4-D (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Taron Malicos", {Charactername: "Taron Malicos", Location: "Conquest", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Tech", {Charactername: "Tech", Location: "Light Side Battles: 5-F (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Teebo", {Charactername: "Teebo", Location: "Bronzium Data Card,Dark Side Battles: 3-D (Hard),Forest Moon,Galactic War Store,Light Side Battles: 4-A (Hard)", Nodeamount: 2 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["The Armorer", {Charactername: "The Armorer", Location: "Light Side Battles: 9-C (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["The Mandalorian", {Charactername: "The Mandalorian", Location: "Dark Side Battles: 3-C (Hard),Fleet Battles: 5-E (Hard)", Nodeamount: 2 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["The Mandalorian (Beskar Armor)", {Charactername: "The Mandalorian (Beskar Armor)", Location: "Journey Guide: The Mandalorian Hero's Journey", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Third Sister", {Charactername: "Third Sister", Location: "Rise of the Empire", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 0 ,}],
    ["Threepio & Chewie", {Charactername: "Threepio & Chewie", Location: "Light Side Battles: 7-A (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],     
    ["TIE Fighter Pilot", {Charactername: "TIE Fighter Pilot", Location: "Cantina Battles: 4-B,Fleet Arena Store,Guild Events Store,Military Might", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Tusken Chieftain", {Charactername: "Tusken Chieftain", Location: "Dark Side Battles: 6-C (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],        
    ["Tusken Raider", {Charactername: "Tusken Raider", Location: "Bronzium Data Card, Dark Side Battles: 6-C (Hard), Galactic War Store", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Tusken Shaman", {Charactername: "Tusken Shaman", Location: "Fleet Arena Store, Guild Activity Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],    
    ["Tusken Warrior", {Charactername: "Tusken Warrior", Location: "Cantina Battles: 2-D", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Ugnaught", {Charactername: "Ugnaught", Location: "Squad Arena Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["URoRRuR'R'R", {Charactername: "URoRRuR'R'R", Location: "Bronzium Data Card Light Side Battles: 5-A (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Vandor Chewbacca", {Charactername: "Vandor Chewbacca", Location: "Dark Side Battles: 4-D (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],        
    ["Veteran Smuggler Chewbacca", {Charactername: "Veteran Smuggler Chewbacca", Location: "Cantina Battles: 5-F", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Veteran Smuggler Han Solo", {Charactername: "Veteran Smuggler Han Solo", Location: "Cantina Battles: 5-E", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Visas Marr", {Charactername: "Visas Marr", Location: "Dark Side Battles: 7-B (Hard) Galactic Bounties II", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Wampa", {Charactername: "Wampa", Location: "Galactic Bounties I, Guild Events Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Wat Tambor", {Charactername: "Wat Tambor", Location: "Geonosis Separatist Might, Guild Events Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],    
    ["Wedge Antilles", {Charactername: "Wedge Antilles", Location: "Cantina Battles: 6-F, Fleet Arena ,Store Rebel Roundup", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 5 ,}],
    ["Wicket", {Charactername: "Wicket", Location: "Dark Side Battles: 8-A (Hard), Endor Escalation", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Wrecker", {Charactername: "Wrecker", Location: "Light Side Battles: 7-C (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Young Han Solo", {Charactername: "Young Han Solo", Location: "Guild Activity Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Young Lando Calrissian", {Charactername: "Young Lando Calrissian", Location: "Fleet Battles: 1-D (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],["Zaalbar", {Charactername: "Zaalbar", Location: "Light Side Battles: 5-D (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
    ["Zam Wesell", {Charactername: "Zam Wesell", Location: "Fleet Arena Store,Guild Activity Store", Nodeamount: 0 , NodeShardamount: 0 , charactershipmentshardamount: 5 ,}],
    ["Zorii Bliss", {Charactername: "Zorii Bliss", Location: "Dark Side Battles: 1-C (Hard)", Nodeamount: 1 , NodeShardamount: 2 , charactershipmentshardamount: 0 ,}],
  ]);
  const shipsswgohMap = new Map([
  ["Ahsoka Tano's Jedi Starfighter", {Shipname: "Ahsoka Tano's Jedi Starfighter", SLocation: "Galactic War Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}], 
["Anakin's Eta-2 Starfighter", {Shipname: "Anakin's Eta-2 Starfighter", SLocation: "Fleet Battles: 1-B (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],  
["B-28 Extinction-class Bomber", {Shipname: "B-28 Extinction-class Bomber", SLocation: "Light Side Battles: 6-C (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["Biggs Darklighter's X-wing", {Shipname: "Biggs Darklighter's X-wing", SLocation: "Galactic War Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Bistan's U-wing", {Shipname: "Bistan's U-wing", SLocation: "Fleet Arena Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["BTL-B Y-wing Starfighter", {Shipname: "BTL-B Y-wing Starfighter", SLocation: "Light Side Battles: 7-C (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}], 
["Cassian's U-wing", {Shipname: "Cassian's U-wing", SLocation: "Cantina Battles Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Chimaera", {Shipname: "Chimaera", SLocation: "Imperial Chimaera", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 0.000000 ,}],
["Clone Sergeant's ARC-170", {Shipname: "Clone Sergeant's ARC-170", SLocation: "Galactic War Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Ebon Hawk", {Shipname: "Ebon Hawk", SLocation: "Cantina Battles: 8-E", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["Emperor's Shuttle", {Shipname: "Emperor's Shuttle", SLocation: "Dark Side Battles: 7-D (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["Endurance", {Shipname: "Endurance", SLocation: "Capital Ship Upgrades - Mace Windu", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 0.330000 ,}],
["Executor", {Shipname: "Executor", SLocation: "Discarded Doctrine", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 0.000000 ,}],
["Executrix", {Shipname: "Executrix", SLocation: "Capital Ship Upgrades - Grand Moff Tarkin", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 0.330000 ,}],
["Finalizer", {Shipname: "Finalizer", SLocation: "General's Command", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 0.000000 ,}],
["First Order SF TIE Fighter", {Shipname: "First Order SF TIE Fighter", SLocation: "Guild Activity Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],       
["First Order TIE Fighter", {Shipname: "First Order TIE Fighter", SLocation: "Galactic War Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Fury-class Interceptor", {Shipname: "Fury-class Interceptor", SLocation: "Conquest", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Gauntlet Starfighter", {Shipname: "Gauntlet Starfighter", SLocation: "Fleet Arena Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Geonosian Soldier's Starfighter", {Shipname: "Geonosian Soldier's Starfighter", SLocation: "Galactic War Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Geonosian Spy's Starfighter", {Shipname: "Geonosian Spy's Starfighter", SLocation: "Galactic War Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],       
["Ghost", {Shipname: "Ghost", SLocation: "Fleet Arena Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Han's Millennium Falcon", {Shipname: "Han's Millennium Falcon", SLocation: "Flight of the Falcon", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 0.000000 ,}],
["Home One", {Shipname: "Home One", SLocation: "Capital Ship Upgrades - Admiral Ackbar", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 0.330000 ,}],
["Hound's Tooth", {Shipname: "Hound's Tooth", SLocation: "Light Side Battles: 8-D (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["Hyena Bomber", {Shipname: "Hyena Bomber", SLocation: "Dark Side Battles: 8-B (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["IG-2000", {Shipname: "IG-2000", SLocation: "Light Side Battles: 6-E (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["Imperial TIE Bomber", {Shipname: "Imperial TIE Bomber", SLocation: "Dark Side Battles: 5-A (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["Imperial TIE Fighter", {Shipname: "Imperial TIE Fighter", SLocation: "Galactic War Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Jedi Consular's Starfighter", {Shipname: "Jedi Consular's Starfighter", SLocation: "Galactic War Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],       
["Kylo Ren's Command Shuttle", {Shipname: "Kylo Ren's Command Shuttle", SLocation: "Light Side Battles: 9-A (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["Lando's Millennium Falcon", {Shipname: "Lando's Millennium Falcon", SLocation: "Fleet Battles: 1-D (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],    
["Leviathan", {Shipname: "Leviathan", SLocation: "Journey Guide", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Malevolence", {Shipname: "Malevolence", SLocation: "Guild Events Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Marauder", {Shipname: "Marauder", SLocation: "n/a", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 0.000000 ,}],
["Mark VI Interceptor", {Shipname: "Mark VI Interceptor", SLocation: "n/a", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 0.000000 ,}],
["MG-100 StarFortress SF-17", {Shipname: "MG-100 StarFortress SF-17", SLocation: "Fleet Battles: 2-D (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],    
["Negotiator", {Shipname: "Negotiator", SLocation: "Guild Events Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Outrider", {Shipname: "Outrider", SLocation: "Fleet Battles: 3-C (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["Phantom II", {Shipname: "Phantom II", SLocation: "Fleet Arena Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Plo Koon's Jedi Starfighter", {Shipname: "Plo Koon's Jedi Starfighter", SLocation: "Galactic War Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],       
["Poe Dameron's X-wing", {Shipname: "Poe Dameron's X-wing", SLocation: "Fleet Arena Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Profundity", {Shipname: "Profundity", SLocation: "Stardust Transmission", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 0.000000 ,}],
["Raddus", {Shipname: "Raddus", SLocation: "Admiral's Maneuver", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 0.000000 ,}],
["Raven's Claw", {Shipname: "Raven's Claw", SLocation: "Fleet Battles: 2-E (Hard)", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 0.000000 ,}],
["Razor Crest", {Shipname: "Razor Crest", SLocation: "Fleet Arena Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Rebel Y-wing", {Shipname: "Rebel Y-wing", SLocation: "Fleet Battles: 4-C (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["Resistance X-wing", {Shipname: "Resistance X-wing", SLocation: "Galactic War Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Rex's ARC-170", {Shipname: "Rex's ARC-170", SLocation: "Fleet Arena Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Rey's Millennium Falcon", {Shipname: "Rey's Millennium Falcon", SLocation: "Dark Side Battles: 5-D (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],    
["Scimitar", {Shipname: "Scimitar", SLocation: "Fleet Arena Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Scythe", {Shipname: "Scythe", SLocation: "Conquest Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Sith Fighter", {Shipname: "Sith Fighter", SLocation: "Fleet Battles: 3-E (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["Slave I", {Shipname: "Slave I", SLocation: "Fleet Arena Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Sun Fac's Geonosian Starfighter", {Shipname: "Sun Fac's Geonosian Starfighter", SLocation: "Galactic War Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["TIE Advanced x1", {Shipname: "TIE Advanced x1", SLocation: "Fleet Arena Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["TIE Dagger", {Shipname: "TIE Dagger", SLocation: "n/a", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 0.000000 ,}],
["TIE Defender", {Shipname: "TIE Defender", SLocation: "Fleet Battles: 3-B (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["TIE Echelon", {Shipname: "TIE Echelon", SLocation: "Fleet Battles: 4-E (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["TIE Reaper", {Shipname: "TIE Reaper", SLocation: "Light Side Battles: 9-B (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["TIE Silencer", {Shipname: "TIE Silencer", SLocation: "Cantina Battles: 3-F", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["TIE/IN Interceptor Prototype", {Shipname: "TIE/IN Interceptor Prototype", SLocation: "Proving Grounds", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],        
["Umbaran Starfighter", {Shipname: "Umbaran Starfighter", SLocation: "Galactic War Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Vulture Droid", {Shipname: "Vulture Droid", SLocation: "Light Side Battles: 4-D (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
["Wedge Antilles's X-wing", {Shipname: "Wedge Antilles's X-wing", SLocation: "Galactic War Store", SNodeamount: 0 , SNodeShardamount: 0 , sshipmentshardamount: 4.000000 ,}],
["Xanadu Blood", {Shipname: "Xanadu Blood", SLocation: "Light Side Battles: 8-B (Hard)", SNodeamount: 1 , SNodeShardamount: 1 , sshipmentshardamount: 0.000000 ,}],
  ]);

  class GACleagues {
    constructor(daily, roundWinCrystals, roundLossCrystals, championshipCrystals) {
      this.daily = daily;
      this.roundWinCrystals = roundWinCrystals;
      this.roundLossCrystals = roundLossCrystals;
      this.championshipCrystals = championshipCrystals;
    }
}

class LeagueRewards {
  constructor() {
      this.leagues = {};
  }

  addLeague(leagueName, divisions) {
      this.leagues[leagueName] = divisions;
  }

  getDivisionReward(leagueName, division) {
      if (this.leagues[leagueName] && this.leagues[leagueName][division - 1]) {
          return this.leagues[leagueName][division - 1];
      } else {
          return null;
      }
  }
}
const leagueRewards = new LeagueRewards();
// league data
leagueRewards.addLeague("Kyber", [
  { division: 1, rewards: new GACleagues(260, 350, 900, 125) },
  { division: 2, rewards: new GACleagues(240, 350, 825, 125) },
  { division: 3, rewards: new GACleagues(220, 350, 750, 125) },
  { division: 4, rewards: new GACleagues(200, 350, 675, 125) },
  { division: 5, rewards: new GACleagues(180, 350, 600, 125) }
]);

leagueRewards.addLeague("Aurodium", [
  { division: 1, rewards: new GACleagues(170, 350, 550, 125) },
  { division: 2, rewards: new GACleagues(160, 350, 510, 125) },
  { division: 3, rewards: new GACleagues(150, 350, 470, 125) },
  { division: 4, rewards: new GACleagues(140, 350, 430, 125) },
  { division: 5, rewards: new GACleagues(130, 350, 390, 125) }
]);

leagueRewards.addLeague("Chromium", [
  { division: 1, rewards: new GACleagues(125, 350, 350, 125) },
  { division: 2, rewards: new GACleagues(120, 350, 320, 125) },
  { division: 3, rewards: new GACleagues(115, 350, 290, 125) },
  { division: 4, rewards: new GACleagues(110, 350, 260, 125) },
  { division: 5, rewards: new GACleagues(105, 350, 230, 125) }
]);

leagueRewards.addLeague("Bronzium", [
  { division: 1, rewards: new GACleagues(100, 350, 200, 125) },
  { division: 2, rewards: new GACleagues(95, 350, 180, 125) },
  { division: 3, rewards: new GACleagues(90, 350, 160, 125) },
  { division: 4, rewards: new GACleagues(85, 350, 140, 125) },
  { division: 5, rewards: new GACleagues(80, 350, 120, 125) }
]);

leagueRewards.addLeague("Carbonite", [
  { division: 1, rewards: new GACleagues(75, 350, 110, 125) },
  { division: 2, rewards: new GACleagues(70, 350, 100, 125) },
  { division: 3, rewards: new GACleagues(65, 350, 90, 125) },
  { division: 4, rewards: new GACleagues(60, 350, 80, 125) },
  { division: 5, rewards: new GACleagues(55, 350, 70, 125) }
]);

//Character Tab
function displayRefreshAmt() {
    var refreshAmt = document.getElementById("refreshamt").value;
    BattleAmt = 5 + (5 * refreshAmt);
    document.getElementById("refreshamt-display").innerHTML = "Total Battles: " + BattleAmt;
    }
function displayShardAmt() {
    var shardAmt = document.getElementById("shardamount").value;
    finalshardAmt = shardAmt;
    document.getElementById("shardamount-display").innerHTML = "Current Star Level Shards: " + shardAmt;
    }

function outputCharacterData() {
    const key = document.getElementById("characterdropdown").value;
    const values = [];
    for (const [k, v] of swgohMap.entries()) {
      if (k === key) {
        values.push("Character: "+ v.Charactername+", ");
        values.push("Location: "+ v.Location+": , ");
        values.push("Will obtain "+ (finalshardsremaining-finalshardAmt)+" shards in:");
        values.push(daystofarm= ((finalshardsremaining-finalshardAmt)/((v.Nodeamount)*(BattleAmt)*(droprate)*(v.NodeShardamount)+(v.charactershipmentshardamount))).toFixed(1)+ " days")
        if(v.Nodeamount==0){
          values.push("This unit is not accessible through energy nodes");
        }
        if(v.NodeShardamount==1){
          values.push("Unit not accelerated (only drops 1 shard)")
        }
      }
    }
    document.getElementById("output").innerHTML = values.join("<br>");
  }

  document.getElementById("shardamount").addEventListener("input", displayShardAmt);
  document.getElementById("refreshamt").addEventListener("input", displayRefreshAmt);

//Ship Tab
function displayShipRefreshAmt() {
    var refreshAmt = document.getElementById("refreshamtship").value;
    shipBattleAmt = 5 + (5 * refreshAmt);
    document.getElementById("refreshamtship-display").innerHTML = "Total Battles: " + shipBattleAmt;
    }
function displayShipShardAmt() {
      var shardAmt = document.getElementById("shardamountship").value;
      shipfinalshardAmt = shardAmt;
      document.getElementById("shardamountship-display").innerHTML = "Current Star Level Shards: " + shardAmt;
      }
function outputShipData(){
  const key = document.getElementById("shipdropdown").value;
  const values = [];
  for (const [k, v] of shipsswgohMap.entries()) {
    if (k === key) {
      values.push("Ship: "+ v.Shipname);
      values.push("Location: "+ v.SLocation+":");
      values.push("Will obtain "+ (shipfinalshardsremaining-shipfinalshardAmt)+" shards in:");
      values.push(sdaystofarm= ((shipfinalshardsremaining-shipfinalshardAmt)/((v.SNodeamount)*(shipBattleAmt)*(droprate)*(v.SNodeShardamount)+(v.sshipmentshardamount))).toFixed(1)+ " days")
      if(v.SNodeamount==0){
        values.push("This unit is not accessible through energy nodes");
      }
      if(v.SNodeShardamount==1){
        values.push("Unit not accelerated (only drops 1 shard)")
      }
    }
  }
  document.getElementById("shipoutput").innerHTML = values.join("<br>");
}
document.getElementById("shardamountship").addEventListener("input", displayShipShardAmt);
document.getElementById("refreshamtship").addEventListener("input", displayShipRefreshAmt);

//Relics tab
function relicCalculations() {
  const currentRelicIn = document.getElementById("selectcurrentRelic").value;
  const desiredRelicIn = document.getElementById("selectdesiredRelic").value;
  const cantinaRefreshesIn = parseInt(document.getElementById("cantinarefreshamt").value);
  const currentValues = [];
  const desiredValues = [];

  // Get the quantities for the current relic
  let currentRelicValues = {};
  for (const [relic, values] of relicMap.entries()) {
    if (relic === currentRelicIn) {
      currentRelicValues = values;
      break;
    }
  }

  // Get the quantities for the desired relic
  let desiredRelicValues = {};
  for (const [relic, values] of relicMap.entries()) {
    if (relic === desiredRelicIn) {
      desiredRelicValues = values;
      break;
    }
  }

  // Calculate the desired - current values for each item
  for (const key in currentRelicValues) {
    if (currentRelicValues.hasOwnProperty(key) && key !== "Relic") {
      const currentValue = currentRelicValues[key];
      const desiredValue = desiredRelicValues[key];
      const difference = desiredValue - currentValue;
      currentValues.push({ gear: key, value: currentValue });
      desiredValues.push({ gear: key, value: difference });
    }
  }

  // Define daily values for each specific gear item
  let cantinabattles = ((cantinaRefreshesIn * 120) + 165) / 16;
  const dailyFragmented = 1.3 * cantinabattles;
  const dailyIncomplete = cantinabattles * 0.9;
  const dailyFlawed = cantinabattles * 0.6;

  // Get the specific values for Fragmented, Incomplete, and Flawed gear
  const specificFragmented = desiredValues.find(item => item.gear === "Fragmented").value;
  const specificIncomplete = desiredValues.find(item => item.gear === "Incomplete").value;
  const specificFlawed = desiredValues.find(item => item.gear === "Flawed").value;

  // Calculate the number of days required to obtain each specific gear item
  const daysFragmented = specificFragmented / dailyFragmented;
  const daysIncomplete = specificIncomplete / dailyIncomplete;
  const daysFlawed = specificFlawed / dailyFlawed;

  // Output the results
  const matsNeededString = desiredValues.map(item => `${item.gear}: ${item.value}<br>`).join("");
  document.getElementById("RELICmatsneeded").innerHTML = "Relic Materials Needed:<br>" + matsNeededString;
  document.getElementById("daysFlawed").textContent = "Days to farm Flawed: " + Math.round(daysFlawed);
  document.getElementById("daysIncomplete").textContent = "Days to farm Incomplete: " + Math.round(daysIncomplete);
  document.getElementById("daysFragmented").textContent = "Days to farm Fragmented: " + Math.round(daysFragmented);
  document.getElementById("daystotal").textContent = "Total days to farm signal data: " + Math.round(daysFlawed + daysFragmented + daysIncomplete);
}

function outputRelicMats() {
  relicCalculations();
}


//Crystals Tab
let fleetDaily = 0;
let tbCrystals=0;
let GACWeeklyMatch = 0;
let GAClmatches, GACwmatches =0;
function fleetArena() {
  const rankIn = document.getElementById("fleetrank");
  const rank = parseInt(rankIn.value);
  if (rank === 1) {
    fleetDaily = 400;
  } else if (rank === 2) {
    fleetDaily = 375;
  } else if (rank === 3) {
    fleetDaily = 350;
  } else if (rank === 4) {
    fleetDaily = 325;
  } else if (rank === 5) {
    fleetDaily = 300;
  } else if (rank <= 10 && rank >= 6) {
    fleetDaily = 200;
  } else if (rank <= 20 && rank >= 11) {
    fleetDaily = 100;
  } else if (rank <= 50 && rank >= 21) {
    fleetDaily = 50;
  } else {
    fleetDaily = 0;
  }
}

function TerritoryBattles() {
  const selectraidstrs = document.getElementById("selectraidSTARS");
  const planetStars = parseInt(selectraidstrs.value);
  switch(planetStars){
    case 1:
        tbCrystals=250;
        break;
    case 2:
        tbCrystals=275;
        break;
    case 3:
        tbCrystals=300;
        break;
    case 4:
        tbCrystals=325;
        break;
    case 5:
        tbCrystals=350;
        break;
    case 6:
        tbCrystals=375;
        break;
    case 7:
        tbCrystals=400;
        break;
    case 8:
        tbCrystals=425;
        break;
    case 9:
        tbCrystals=450;
        break;
    case 10:
        tbCrystals=475;
        break;
    case 11:
        tbCrystals=500;
        break;
    case 12:
        tbCrystals=525;
        break;
    case 13:
        tbCrystals=550;
        break;
    case 14:
        tbCrystals=575;
        break;
    case 15:
        tbCrystals=600;
        break;
    case 16:
        tbCrystals=625;
        break;
    case 17:
        tbCrystals=650;
        break;
    case 18:
        tbCrystals=675;
        break;
    case 19:
        tbCrystals=700;
        break;
    case 20:
        tbCrystals=725;
        break;
    case 21:
        tbCrystals=750;
        break;
    case 22:
        tbCrystals=775;
        break;
    case 23:
        tbCrystals=800;
        break;
    case 24:
        tbCrystals=825;
        break;
    case 25:
        tbCrystals=850;
        break;
    case 26:
        tbCrystals=875;
        break;
    case 27:
        tbCrystals=900;
        break;
    case 28:
        tbCrystals=925;
        break;
    case 29:
        tbCrystals=950;
        break;
    case 30:
        tbCrystals=975;
        break;
    case 31:
        tbCrystals=1000;
        break;
    case 32:
        tbCrystals=1025;
        break;
    case 33:
        tbCrystals=1050;
        break;
    case 34:
        tbCrystals=1075;
        break;
    case 35:
        tbCrystals=1100;
        break;
    case 36:
        tbCrystals=1125;
        break;
    case 37:
        tbCrystals=1150;
        break;
    case 38:
        tbCrystals=1175;
        break;
    case 39:
        tbCrystals=1200;
        break;
    case 40:
        tbCrystals=1225;
        break;
    case 41:
        tbCrystals=1250;
        break;
    case 42:
        tbCrystals=1275;
        break;
    case 43:
        tbCrystals=1300;
        break;
    case 44:
        tbCrystals=1325;
        break;
    case 45:
        tbCrystals=1350;
        break;
    case 46:
        tbCrystals=1375;
        break;
    case 47:
        tbCrystals=1400;
        break;
    case 48:
        tbCrystals=1425;
        break;
    case 49:
        tbCrystals=1450;
        break;
    case 50:
        tbCrystals=1475;
        break;
    case 51:
        tbCrystals=1500;
        break;
    case 52:
        tbCrystals=1525;
        break;
    case 53:
        tbCrystals=1550;
        break;
    case 54:
        tbCrystals=1575;
        break;
    case 55:
        tbCrystals=1600;
        break;
        }
}

function weeklyGAC() {
  const GACrankin = document.getElementById("selectGACweeklyrank");
  const GACrank = parseInt(GACrankin.value);
  if (GACrank === 1) {
    GACWeeklyMatch = 750;
    GAClmatches=0;
    GACwmatches=3;
  } else if (GACrank >= 2 && GACrank <= 4) {
    GACWeeklyMatch = 500;
    GACwmatches=2;
    GAClmatches=1;
  } else if (GACrank >= 5 && GACrank <= 7) {
    GACWeeklyMatch = 250;
    GACwmatches=1;
    GAClmatches=2
  } else if (GACrank === 8) {
    GACWeeklyMatch = 100;
    GACwmatches=0;
    GAClmatches=3;
  }
}

function GACcalculateCrystals() {
  const selectedLeague = document.getElementById("selectGACleague").value;
  const selectedDivision = parseInt(document.getElementById("selectGACdivision").value);
  const divisionRewards = leagueRewards.getDivisionReward(selectedLeague, selectedDivision);
  return divisionRewards;
}

function outputCrystalData() {
  const divisionRewards = GACcalculateCrystals();
  if (divisionRewards) {
    document.getElementById("GACdailycrystals").textContent = "GAC Daily Crystals(30x/month): " + divisionRewards.rewards.daily;
    document.getElementById("GACchamprewards").textContent = "GAC Championship Rewards(1x/month): " + divisionRewards.rewards.championshipCrystals;
}
else {
  console.error("Division rewards not found.");
}

  dailycrystals = 95;
  fleetArena();
  TerritoryBattles();
  weeklyGAC();

  // Calculate total monthly income
  const monthlyIncome = (fleetDaily * 30) + (tbCrystals * 2) + (GACWeeklyMatch * 3) + (dailycrystals * 30) + (divisionRewards.rewards.daily * 30) + (divisionRewards.rewards.championshipCrystals) + ((divisionRewards.rewards.roundLossCrystals)*GAClmatches * 3) + (GACwmatches*(divisionRewards.rewards.roundWinCrystals) * 3);

  document.getElementById("GACWeeklyMatch").textContent = "GAC Weekly Match Income(3x/month): " + GACWeeklyMatch;
  document.getElementById("fleetCrystals").textContent = "Daily Fleet Arena Crystals(30x/month): " + fleetDaily;
  document.getElementById("tbCrystals").textContent = "ROTE Territory Battle Crystals(2x/month): " + tbCrystals;
  document.getElementById("monthlyIncome").textContent = "Monthly Crystal Income: " + monthlyIncome;
}



//sidebar
let btn = document.querySelector('#btn')
let sidebar = document.querySelector('.sidebar')
btn.onclick = function(){
  sidebar.classList.toggle('active')
};

//star background
const stars = 500;
const $stars = document.querySelector('.stars');

for (let i = 0; i < stars; i++) {
const $star = document.createElement('div');
$star.classList.add('star');
$star.style.top = `${Math.random() * 100}%`;
$star.style.left = `${Math.random() * 100}%`;
$star.style.animationDelay = `${Math.random() * 10}s`;
$stars.appendChild($star);
}