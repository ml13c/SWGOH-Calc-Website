/*
HOW IT WORKS
In Star Wars Galaxy of Heroes characters are obtainable through shards. These shards accumulate and after a certain amount
they are upgradable to a star amount. The max amount of stars is 7. All characters have a max of 7 stars or 330 shards.
Some characters are obtainable through one or more locations known as a node. These nodes can be played 5 times each day.
You can choose to refresh the node to play 5 more times. 
These nodes contain the shards of a certain character and either award 1 or 2 shards.
Some characters can be obtained through nodes and shipments or are exclusive to shipments.
Shipments are a group of stores in which you buy 10 shards of a character using a type of currency.
Sometimes there are more than 10 shards some specific characters.
These shipments are rotated every couple of hours throughout the day.
There are around 256 characters some of which are not obtainable through either shipments or nodes.
All of the obtainabe characters can be "Farmed"/obtained in a certain amount of time depending on the battles done a day as well as->
if they are also obtainable through shipments.
Because of each characters unique location and obtainability they each have their own data
This data is used to calculate how long it wil take to farm based off of refresh amounts, and how many shards have already been obtained.
As of 11/27/2023
*/
#include<iostream>
#include<map>
#include<string>
#include<stdio.h>
#define maxshards 330
float droprate = .33;
struct Swgoh
{
    std::string Charactername;
    std::string Location;
    int Nodeamount, NodeShardamount, charactershipmentshardamount; 
};
int main()
{
    std::map<std::string, Swgoh> swgohMap;
        swgohMap["0-0-0"] = Swgoh {"0-0-0","Dark Side Battles: 2-A (Hard)", 1, 1, 0};
        swgohMap["50R-T"] = Swgoh {"50R-T","Dark Side Battles: 3-E (Hard)", 1, 2, 0};
        swgohMap["Aayla Secura"] = Swgoh {"Aayla Secura","Cantina Battles: 5-B, Fanatical Devotion,Guild Activity Store", 1, 2, 5};
        swgohMap["Admiral Ackbar"] = Swgoh {"Admiral Ackbar","Fleet Arena Store,Guild Events Store,Rebel Roundup,Squad Arena Store", 0, 0, 5};
        swgohMap["Admiral Piett"] = Swgoh {"Admiral Piett","Light Side Battles: 6-B (Hard)", 1, 2, 0};
        swgohMap["Admiral Raddus"] = Swgoh {"Admiral Raddus","Dark Side Battles: 4-A (Hard)", 1, 2, 0};
        swgohMap["Admiral Trench"] = Swgoh {"Admiral Trench","Conquest,Conquest Store", 0, 0, 0};
        swgohMap["Ahsoka Tano"] = Swgoh {"Ahsoka Tano","Bronzium Data Card,Cantina Battles Store,Fleet Arena Store,Light Side Battles: 1-B (Hard),Places of Power", 1, 2, 5};
        swgohMap["Ahsoka Tano (Fulcrum)"] = Swgoh {"Ahsoka Tano (Fulcrum)","Fanatical Devotion,Fleet Arena Store,Galactic Bounties II", 0, 0, 5};      
        swgohMap["Amilyn Holdo"] = Swgoh {"Amilyn Holdo","Dark Side Battles: 7-C (Hard),Galactic Bounties II", 1, 2, 0};
        swgohMap["ARC Trooper"] = Swgoh {"ARC Trooper","Cantina Battles: 5-G", 1, 2, 0};
        swgohMap["Asajj Ventress"] = Swgoh {"Asajj Ventress","Squad Arena Store", 0, 0, 5};
        swgohMap["Aurra Sing"] = Swgoh {"Aurra Sing","Cantina Battles: 7-C", 1, 2, 0};
        swgohMap["B1 Battle Droid"] = Swgoh {"B1 Battle Droid","Fleet Battles: 5-B (Hard)", 1, 2, 0};
        swgohMap["B2 Super Battle Droid"] = Swgoh {"B2 Super Battle Droid","Cantina Battles: 6-D,Guild Activity Store", 1, 2, 5};
        swgohMap["Barriss Offee"] = Swgoh {"Barriss Offee","Bronzium Data Card,Dark Side Battles: 5-C (Hard),Fanatical Devotion,Guild Activity Store", 1, 2, 5};
        swgohMap["Bastila Shan"] = Swgoh {"Bastila Shan","Dark Side Battles: 5-B (Hard)", 1, 2, 0};
        swgohMap["Bastila Shan (Fallen)"] = Swgoh {"Bastila Shan (Fallen)","Dark Side Battles: 7-A (Hard)", 1, 2, 0};
        swgohMap["Baze Malbus"] = Swgoh {"Baze Malbus","Light Side Battles: 9-C (Hard),Rebel Roundup", 1, 2, 0};
        swgohMap["BB-8"] = Swgoh {"BB-8","Journey Guide: Pieces and Plans", 0, 0, 0};
        swgohMap["Ben Solo"] = Swgoh {"Ben Solo","Conquest Store", 0, 0, 0};
        swgohMap["Biggs Darklighter"] = Swgoh {"Biggs Darklighter","Bronzium Data Card,Cantina Battles: 3-G,Fleet Arena Store,Galactic War Store,Guild Events Store,Rebel Roundup", 1, 2, 5};
        swgohMap["Bistan"] = Swgoh {"Bistan","Cantina Battles Store,Fleet Arena Store,Guild Events Store", 0, 0, 5};
        swgohMap["Bo-Katan Kryze"] = Swgoh {"Bo-Katan Kryze","Dark Side Battles: 6-D (Hard)", 1, 2, 0};
        swgohMap["Boba Fett"] = Swgoh {"Boba Fett","Bronzium Data Card,Cantina Battles Store,Dark Side Battles: 2-B (Hard),Fleet Arena Store", 1, 2, 5};
        swgohMap["Boba Fett, Scion of Jango"] = Swgoh {"Boba Fett, Scion of Jango","Guild Events Store,Proving Grounds", 0, 0, 0};
        swgohMap["Bodhi Rook"] = Swgoh {"Bodhi Rook","Galactic War Store", 0, 0, 0};
        swgohMap["Bossk"] = Swgoh {"Bossk","Dark Side Battles: 9-B (Hard)", 1, 2, 0};
        swgohMap["Boushh (Leia Organa)"] = Swgoh {"Boushh (Leia Organa)","Dark Side Battles: 2-C (Hard)", 1, 2, 0};
        swgohMap["BT-1"] = Swgoh {"BT-1","Light Side Battles: 2-C (Hard)", 1, 2, 0};
        swgohMap["C-3PO"] = Swgoh {"C-3PO","Journey Guide: Contact Protocol", 0, 0, 0};
        swgohMap["Cad Bane"] = Swgoh {"Cad Bane","Galactic War Store", 0, 0, 5};
        swgohMap["Cal Kestis"] = Swgoh {"Cal Kestis","Cantina Battles: 1-F", 1, 1, 0};
        swgohMap["Canderous Ordo"] = Swgoh {"Canderous Ordo","Cantina Battles: 5-C", 1, 2, 0};
        swgohMap["Captain Drogan"] = Swgoh {"Captain Drogan","Cantina Battles: 6-F", 1, 1, 0};
        swgohMap["Captain Han Solo"] = Swgoh {"Captain Han Solo","Cantina Battles: 7-D, Rebel Roundup", 1, 2, 5};
        swgohMap["Captain Phasma"] = Swgoh {"Captain Phasma","Galactic War Store", 0, 0, 5};
        swgohMap["Captain Rex"] = Swgoh {"Captain Rex","Dark Side Battles: 3-F (Hard)", 1, 1, 0};
        swgohMap["Cara Dune"] = Swgoh {"Cara Dune","Dark Side Battles: 5-E (Hard)", 1, 2, 0};
        swgohMap["Carth Onasi"] = Swgoh {"Carth Onasi","Cantina Battles: 8-E", 1, 2, 0};
        swgohMap["Cassian Andor"] = Swgoh {"Cassian Andor","Guild Events Store,Rebel Roundup,Squad Arena Store", 0, 0, 5};
        swgohMap["CC-2224 \"Cody\""] = Swgoh {"CC-2224 \"Cody\"","Fleet Arena Store, Guild Activity Store", 0, 0, 5};
        swgohMap["Cere Junda"] = Swgoh {"Cere Junda","Light Side Battles: 3-A (Hard)", 1, 1, 0};
        swgohMap["Chewbacca"] = Swgoh {"Chewbacca","Journey Guide: One Famous Wookiee", 0, 0, 0};
        swgohMap["Chief Chirpa"] = Swgoh {"Chief Chirpa","Cantina Battles: 5-D, Forest Moon", 1, 2, 0};
        swgohMap["Chief Nebit"] = Swgoh {"Chief Nebit","Squad Arena Store", 0, 0, 5};
        swgohMap["Chirrut ├Ämwe"] = Swgoh {"Chirrut ├Ämwe","Fleet Arena Store, Rebel Roundup", 0, 0, 5};
        swgohMap["Chopper"] = Swgoh {"Chopper","Cantina Battles Store,Guild Events Store,Rebel Roundup", 0, 0, 5};
        swgohMap["Clone Sergeant - Phase I"] = Swgoh {"Clone Sergeant - Phase I","Bronzium Data Card,Fleet Arena Store,Guild Activity Store,Light Side Battles: 5-C (Hard),Places of Power", 1, 2, 5};
        swgohMap["Clone Wars Chewbacca"] = Swgoh {"Clone Wars Chewbacca","Bronzium Data Card, Cantina Battles: 2-F", 1, 2, 0};
        swgohMap["Colonel Starck"] = Swgoh {"Colonel Starck","Guild Activity Store", 0, 0, 5};
        swgohMap["Commander Ahsoka Tano"] = Swgoh {"Commander Ahsoka Tano","Guild Events Store,Proving Grounds", 0, 0, 0};
        swgohMap["Commander Luke Skywalker"] = Swgoh {"Commander Luke Skywalker","Journey Guide: Luke Skywalker Hero's Journey", 0, 0, 0};
        swgohMap["Coruscant Underworld Police"] = Swgoh {"Coruscant Underworld Police","Squad Arena Store", 0, 0, 5};
        swgohMap["Count Dooku"] = Swgoh {"Count Dooku","Bronzium Data Card,Fleet Arena Store,Guild Activity Store,Light Side Battles: 5-C (Hard),Places of Power", 1, 2, 0};
        swgohMap["CT-21-0408 \"Echo\""] = Swgoh {"CT-21-0408 \"Echo\"","Fleet Arena Store, Guild Activity Store", 0, 0, 5};
        swgohMap["CT-5555 \"Fives\""] = Swgoh {"CT-5555 \"Fives\"","Bronzium Data Card,Cantina Battles Store,Dark Side Battles: 2-D (Hard),Fleet Arena Store,Places of Power", 1, 2, 5};
        swgohMap["CT-7567 \"Rex\""] = Swgoh {"CT-7567 \"Rex\"","Fleet Arena Store,Guild Activity Store,Places of Power", 0, 0, 5};
        swgohMap["Dark Trooper"] = Swgoh {"Dark Trooper","Light Side Battles: 1-C (Hard)", 1, 2, 0};
        swgohMap["Dark Trooper Moff Gideon"] = Swgoh {"Dark Trooper Moff Gideon","Conquest", 0, 0, 0};
        swgohMap["Darth Malak"] = Swgoh {"Darth Malak","Journey Guide: Star Forge Showdown, Guild Events Store,", 0, 0, 0};
        swgohMap["Darth Malgus"] = Swgoh {"Darth Malgus","Conquest Store, Proving Grounds", 0, 0, 0};
        swgohMap["Darth Maul"] = Swgoh {"Darth Maul","Fleet Arena Store, Guild Activity Store", 0, 0, 5};
        swgohMap["Darth Nihilus"] = Swgoh {"Darth Nihilus","Dark Side Battles: 9-A (Hard), Secrets and Shadows", 1, 2, 0};
        swgohMap["Darth Revan"] = Swgoh {"Darth Revan","Journey Guide: Scourge of the Old Republic", 0, 0, 0};
        swgohMap["Darth Sidious"] = Swgoh {"Darth Sidious","Secrets and Shadows, Squad Arena Store", 0, 0, 5};
        swgohMap["Darth Sion"] = Swgoh {"Darth Sion","Light Side Battles: 9-A (Hard)", 1, 2, 0};
        swgohMap["Darth Talon"] = Swgoh {"Darth Talon","Cantina Battles: 7-G", 1, 2, 0};
        swgohMap["Darth Traya"] = Swgoh {"Darth Traya","Hyperdrive Bundle, The Sith Triumvirate, Guild Store", 0, 0, 5};
        swgohMap["Darth Vader"] = Swgoh {"Darth Vader","Fleet Arena Store,Hyperdrive Bundle,Military Might, Achievements", 0, 0, 5};
        swgohMap["Dash Rendar"] = Swgoh {"Dash Rendar","Cantina Battles: 7-E", 1, 2, 0};
        swgohMap["Dathcha"] = Swgoh {"Dathcha","Bronzium Data Card,Galactic War Store,Light Side Battles: 3-F (Hard)", 1, 2, 5};
        swgohMap["Death Trooper"] = Swgoh {"Death Trooper","Cantina Battles: 8-A, Military Might", 1, 2, 0};
        swgohMap["Dengar"] = Swgoh {"Dengar","Guild Activity Store", 0, 0, 5};
        swgohMap["Director Krennic"] = Swgoh {"Director Krennic","Guild Events Store,Light Side Battles: 9-D (Hard),Military Might", 1, 2, 5};
        swgohMap["Doctor Aphra"] = Swgoh {"Doctor Aphra","Journey Guide: Rogue Archaeologist", 0, 0, 0};
        swgohMap["Droideka"] = Swgoh {"Droideka","Light Side Battles: 8-B (Hard)", 1, 2, 0};
        swgohMap["Echo"] = Swgoh {"Echo","Light Side Battles: 7-D (Hard)", 1, 2, 0};
        swgohMap["Eeth Koth"] = Swgoh {"Eeth Koth","Squad Arena Store", 0, 0, 5};
        swgohMap["Eighth Brother"] = Swgoh {"Eighth Brother","Light Side Battles: 6-E (Hard)", 1, 2, 0};
        swgohMap["Embo"] = Swgoh {"Embo","Dark Side Battles: 8-C (Hard)", 1, 2, 0};
        swgohMap["Emperor Palpatine"] = Swgoh {"Emperor Palpatine","Journey Guide: Emperor's Demise", 0, 0, 0};
        swgohMap["Enfys Nest"] = Swgoh {"Enfys Nest","Fleet Battles: 5-D (Hard),Galactic Bounties II", 1, 2, 0};
        swgohMap["Ewok Elder"] = Swgoh {"Ewok Elder","Bronzium Data Card,Forest Moon,Guild Activity Store,Light Side Battles: 2-A (Hard)", 1, 2, 5};   
        swgohMap["Ewok Scout"] = Swgoh {"Ewok Scout","Bronzium Data Card,Forest Moon,Light Side Battles: 2-A (Hard)", 1, 2, 0};
        swgohMap["Ezra Bridger"] = Swgoh {"Ezra Bridger","Cantina Battles: 2-B,Fanatical Devotion,Fleet Arena Store,Guild Events Store,Rebel Roundup", 1, 2, 5};
        swgohMap["Fennec Shand"] = Swgoh {"Fennec Shand","Light Side Battles: 6-C (Hard)", 1, 2, 0};
        swgohMap["Fifth Brother"] = Swgoh {"Fifth Brother","Cantina Battles: 4-A", 1, 2, 0};
        swgohMap["Finn"] = Swgoh {"Finn","Cantina Battles: 3-E,Guild Activity Store", 1, 2, 5};
        swgohMap["First Order Executioner"] = Swgoh {"First Order Executioner","Cantina Battles: 2-G", 1, 2, 0};
        swgohMap["First Order Officer"] = Swgoh {"First Order Officer","Cantina Battles Store", 0, 0, 5};
        swgohMap["First Order SF TIE Pilot"] = Swgoh {"First Order SF TIE Pilot","Guild Activity Store", 0, 0, 5};
        swgohMap["First Order Stormtrooper"] = Swgoh {"First Order Stormtrooper","Light Side Battles: 2-B (Hard)", 1, 2, 0};
        swgohMap["First Order TIE Pilot"] = Swgoh {"First Order TIE Pilot","Dark Side Battles: 6-B (Hard),Fleet Arena Store", 1, 2, 5};
        swgohMap["Gamorrean Guard"] = Swgoh {"Gamorrean Guard","Guild Activity Store", 0, 0, 5};
        swgohMap["Gar Saxon"] = Swgoh {"Gar Saxon","Cantina Battles: 2-E,Guild Events Store,Military Might", 1, 2, 5};
        swgohMap["Garazeb \"Zeb\" Orrelios"] = Swgoh {"Garazeb \"Zeb\" Orrelios","Galactic War Store,Guild Events Store,Rebel Roundup", 0, 0, 5};
        swgohMap["General Grievous"] = Swgoh {"General Grievous","Fleet Arena Store,Ground War,Shard Store", 0, 0, 5};
        swgohMap["General Hux"] = Swgoh {"General Hux","Dark Side Battles: 6-A (Hard)", 1, 2, 0};
        swgohMap["General Kenobi"] = Swgoh {"General Kenobi","Fanatical Devotion,Hyperdrive Bundle,Tank Takedown,Guild Store", 0, 0, 5};
        swgohMap["General Skywalker"] = Swgoh {"General Skywalker","Journey Guide: Clash on Kamino,Guild Events Store", 0, 0, 0};
        swgohMap["General Veers"] = Swgoh {"General Veers","Bronzium Data Card,Guild Events Store,Light Side Battles: 4-C (Hard),Military Might", 1, 2, 5};
        swgohMap["Geonosian Brood Alpha"] = Swgoh {"Geonosian Brood Alpha","Cantina Battles: 8-D", 1, 2, 0};
        swgohMap["Geonosian Soldier"] = Swgoh {"Geonosian Soldier","Cantina Battles: 1-A,Fleet Arena Store,Ground War", 1, 2, 5};
        swgohMap["Geonosian Spy"] = Swgoh {"Geonosian Spy","Cantina Battles: 4-D,Fleet Arena Store,Ground War", 1, 2, 5};
        swgohMap["Grand Admiral Thrawn"] = Swgoh {"Grand Admiral Thrawn","Journey Guide: Artist of War", 0, 0, 0};
        swgohMap["Grand Inquisitor"] = Swgoh {"Grand Inquisitor","Journey Guide: Dark Times", 0, 0, 0};
        swgohMap["Grand Master Yoda"] = Swgoh {"Grand Master Yoda","Journey Guide: Grand Master's Training", 0, 0, 0};
        swgohMap["Grand Moff Tarkin"] = Swgoh {"Grand Moff Tarkin","Fleet Arena Store,Guild Events Store,Squad Arena Store", 0, 0, 0};
        swgohMap["Greedo"] = Swgoh {"Greedo","Squad Arena Store", 0, 0, 0};
        swgohMap["Greef Karga"] = Swgoh {"Greef Karga","Fleet Battles: 4-C (Hard),Light Side Battles: 3-E (Hard)", 2, 2, 0};
        swgohMap["Han Solo"] = Swgoh {"Han Solo","Galactic Bounties I,Hyperdrive Bundle,The Pit,Guild Store", 0, 0, 5};
        swgohMap["Hera Syndulla"] = Swgoh {"Hera Syndulla","Guild Events Store,Light Side Battles: 2-F (Hard),Rebel Roundup", 1, 2, 5};
        swgohMap["Hermit Yoda"] = Swgoh {"Hermit Yoda","Fanatical Devotion,Guild Events Store", 0, 0, 5};
        swgohMap["HK-47"] = Swgoh {"HK-47","Squad Arena Store", 0, 0, 5};
        swgohMap["Hondo Ohnaka"] = Swgoh {"Hondo Ohnaka","Cantina Battles: 1-D", 1, 2, 0};
        swgohMap["Hoth Rebel Scout"] = Swgoh {"Hoth Rebel Scout","Bronzium Data Card,Cantina Battles Store,Dark Side Battles: 6-A (Hard),Guild Events Store,Rebel Roundup", 1, 2, 5};
        swgohMap["Hoth Rebel Soldier"] = Swgoh {"Hoth Rebel Soldier","Bronzium Data Card,Dark Side Battles: 3-B (Hard),Guild Events Store,Rebel Roundup", 1, 2, 5};
        swgohMap["Hunter"] = Swgoh {"Hunter","Light Side Battles: 5-B (Hard)", 1, 2, 0};
        swgohMap["Iden Versio"] = Swgoh {"Iden Versio","Light Side Battles: 4-D (Hard)", 1, 2, 0};
        swgohMap["IG-100 MagnaGuard"] = Swgoh {"IG-100 MagnaGuard","Bronzium Data Card,Cantina Battles: 3-C,Dark Side Battles: 6-E (Hard),Guild Activity Store", 1, 2, 5};
        swgohMap["IG-11"] = Swgoh {"IG-11","Light Side Battles: 3-E (Hard)", 1, 2, 0};
        swgohMap["IG-12 & Grogu"] = Swgoh {"IG-12 & Grogu","N/A", 0, 0, 0};
        swgohMap["IG-86 Sentinel Droid"] = Swgoh {"IG-86 Sentinel Droid","Bronzium Data Card,Dark Side Battles: 2-F (Hard),Galactic War Store", 1, 2, 5};
        swgohMap["IG-88"] = Swgoh {"IG-88","Squad Arena Store", 0, 0, 5};
        swgohMap["Ima-Gun Di"] = Swgoh {"Ima-Gun Di","Bronzium Data Card,Dark Side Battles: 5-C (Hard),Guild Activity Store", 1, 2, 5};
        swgohMap["Imperial Probe Droid"] = Swgoh {"Imperial Probe Droid","Galactic Bounties I,Guild Events Store,Hoth Imperial Retaliation", 0, 0, 5}; 
        swgohMap["Imperial Super Commando"] = Swgoh {"Imperial Super Commando","Fleet Battles: 4-A (Hard),Guild Events Store,Military Might", 1, 2, 5};
        swgohMap["Jabba the Hutt"] = Swgoh {"Jabba the Hutt","Greetings, Exalted One", 0, 0, 0};
        swgohMap["Jango Fett"] = Swgoh {"Jango Fett","Light Side Battles: 8-D (Hard)", 1, 2, 0};
        swgohMap["Jawa"] = Swgoh {"Jawa","Bronzium Data Card,Dark Side Battles: 4-F (Hard)", 1, 2, 0};
        swgohMap["Jawa Engineer"] = Swgoh {"Jawa Engineer","Guild Activity Store", 0, 0, 5};
        swgohMap["Jawa Scavenger"] = Swgoh {"Jawa Scavenger","Cantina Battles Store", 0, 0, 5};
        swgohMap["Jedi Consular"] = Swgoh {"Jedi Consular","Bronzium Data Card,Cantina Battles: 3-A,Dark Side Battles: 1-D (Hard),Fleet Arena Store,Places of Power", 1, 2, 5};
        swgohMap["Jedi Knight Anakin"] = Swgoh {"Jedi Knight Anakin","Dark Side Battles: 1-B (Hard)", 1, 2, 0};
        swgohMap["Jedi Knight Cal Kestis"] = Swgoh {"Jedi Knight Cal Kestis","Journey Guide: Jedi Knight Cal Kestis ", 0, 0, 0};
        swgohMap["Jedi Knight Guardian"] = Swgoh {"Jedi Knight Guardian","Bronzium Data Card,Cantina Battles Store,Dark Side Battles: 3-F (Hard)", 1, 2, 5};
        swgohMap["Jedi Knight Luke Skywalker"] = Swgoh {"Jedi Knight Luke Skywalker","Journey Guide: Luke Skywalker The Journey Continues", 0, 0, 0};  
        swgohMap["Jedi Knight Revan"] = Swgoh {"Jedi Knight Revan","Journey Guide: Legend of the Old Republic", 0, 0, 0};
        swgohMap["Jedi Master Kenobi"] = Swgoh {"Jedi Master Kenobi","What Must Be Done", 0, 0, 0};
        swgohMap["Jedi Master Luke Skywalker"] = Swgoh {"Jedi Master Luke Skywalker","The Journey's End", 0, 0, 0};
        swgohMap["Jolee Bindo"] = Swgoh {"Jolee Bindo","Dark Side Battles: 6-D (Hard)", 1, 2, 0};
        swgohMap["Juhani"] = Swgoh {"Juhani","Light Side Battles: 6-A (Hard)", 1, 2, 0};
        swgohMap["Jyn Erso"] = Swgoh {"Jyn Erso","Guild Activity Store,Rebel Roundup", 0, 0, 5};
        swgohMap["K-2SO"] = Swgoh {"K-2SO","Galactic War Store,Guild Events Store,Rebel Roundup", 0, 0, 5};
        swgohMap["Kanan Jarrus"] = Swgoh {"Kanan Jarrus","Fanatical Devotion,Guild Events Store,Rebel Roundup,Squad Arena Store", 0, 0, 5};
        swgohMap["Ki-Adi-Mundi"] = Swgoh {"Ki-Adi-Mundi","Geonosis Republic Offensive,Guild Events Store", 0, 0, 5};
        swgohMap["Kit Fisto"] = Swgoh {"Kit Fisto","Cantina Battles: 4-F,Fanatical Devotion,Guild Activity Store", 1, 2, 5};
        swgohMap["Krrsantan"] = Swgoh {"Krrsantan","Cantina Battles: 7-A", 1, 2, 0};
        swgohMap["Kuiil"] = Swgoh {"Kuiil","Dark Side Battles: 5-A (Hard)", 1, 2, 0};
        swgohMap["Kyle Katarn"] = Swgoh {"Kyle Katarn","Cantina Battles: 6-A", 1, 2, 0};
        swgohMap["Kylo Ren"] = Swgoh {"Kylo Ren","Cantina Battles: 4-C,Guild Activity Store", 1, 2, 5};
        swgohMap["Kylo Ren (Unmasked)"] = Swgoh {"Kylo Ren (Unmasked)","Cantina Battles: 3-F,Light Side Battles: 1-D (Hard)", 2, 2, 0};
        swgohMap["L3-37"] = Swgoh {"L3-37","Cantina Battles: 5-A", 1, 2, 0};
        swgohMap["Lando Calrissian"] = Swgoh {"Lando Calrissian","Cantina Battles: 1-E,Guild Events Store,Rebel Roundup", 1, 2, 5};
        swgohMap["Leia Organa"] = Swgoh {"Leia Organa","Galactic Legend", 0, 0, 0};
        swgohMap["Lobot"] = Swgoh {"Lobot","Bronzium Data Card,Light Side Battles: 4-B (Hard),Rebel Roundup", 1, 2, 0};
        swgohMap["Logray"] = Swgoh {"Logray","Forest Moon,Guild Activity Store", 0, 0, 5};
        swgohMap["Lord Vader"] = Swgoh {"Lord Vader","Lord Vader Hero's Fall", 0, 0, 0};
        swgohMap["Luke Skywalker (Farmboy)"] = Swgoh {"Luke Skywalker (Farmboy)","Cantina Battles: 1-B,Guild Activity Store,Guild Events Store,Light Side Battles: 7-D (Hard),Rebel Roundup", 2, 2, 5};
        swgohMap["Luminara Unduli"] = Swgoh {"Luminara Unduli","Bronzium Data Card,Dark Side Battles: 2-E (Hard),Fanatical Devotion,Galactic War Store", 1, 2, 5};
        swgohMap["Mace Windu"] = Swgoh {"Mace Windu","Bronzium Data Card,Fanatical Devotion,Fleet Arena Store,Light Side Battles: 2-E (Hard),Squad Arena Store", 1, 2, 5};
        swgohMap["Magmatrooper"] = Swgoh {"Magmatrooper","Galactic War Store,Guild Events Store,Military Might", 0, 0, 5};
        swgohMap["Mara Jade, The Emperor's Hand"] = Swgoh {"Mara Jade, The Emperor's Hand","Light Side Battles: 6-D (Hard)", 1, 2, 0};
        swgohMap["Maul"] = Swgoh {"Maul","Guild Events Store,Proving Grounds", 0, 0, 0};
        swgohMap["Merrin"] = Swgoh {"Merrin","Fleet Battles: 1-C (Hard)", 1, 1, 0};
        swgohMap["Mission Vao"] = Swgoh {"Mission Vao","Light Side Battles: 5-D (Hard)", 1, 2, 0};
        swgohMap["Mob Enforcer"] = Swgoh {"Mob Enforcer","Cantina Battles Store", 0, 0, 5};
        swgohMap["Moff Gideon"] = Swgoh {"Moff Gideon","Cantina Battles: 4-E,Light Side Battles: 2-D (Hard)", 2, 2, 0};
        swgohMap["Mon Mothma"] = Swgoh {"Mon Mothma","Light Side Battles: 5-E (Hard)", 1, 2, 0};
        swgohMap["Mother Talzin"] = Swgoh {"Mother Talzin","Defense of Dathomir,Light Side Battles: 8-A (Hard)", 1, 2, 0};
        swgohMap["Nightsister Acolyte"] = Swgoh {"Nightsister Acolyte","Cantina Battles: 2-A,Guild Activity Store", 1, 2, 5};
        swgohMap["Nightsister Initiate"] = Swgoh {"Nightsister Initiate","Galactic War Store", 0, 0, 5};
        swgohMap["Nightsister Spirit"] = Swgoh {"Nightsister Spirit","Cantina Battles: 7-F,Ghosts of Dathomir", 1, 2, 0};
        swgohMap["Nightsister Zombie"] = Swgoh {"Nightsister Zombie","Dark Side Battles: 8-D (Hard),Ghosts of Dathomir", 1, 2, 0};
        swgohMap["Ninth Sister"] = Swgoh {"Ninth Sister","Light Side Battles: 3-D (Hard)", 1, 2, 0};
        swgohMap["Nute Gunray"] = Swgoh {"Nute Gunray","Ground War,Squad Arena Store", 0, 0, 5};
        swgohMap["Obi-Wan Kenobi (Old Ben)"] = Swgoh {"Obi-Wan Kenobi (Old Ben)","Cantina Battles: 1-C,Guild Activity Store,Rebel Roundup", 1, 2, 5};  
        swgohMap["Old Daka"] = Swgoh {"Old Daka","Bronzium Data Card,Cantina Battles Store,Dark Side Battles: 4-B (Hard)", 1, 2, 5};
        swgohMap["Omega"] = Swgoh {"Omega","Fleet Battles: 4-D (Hard)", 1, 2, 0};
        swgohMap["Padm├⌐ Amidala"] = Swgoh {"Padm├⌐ Amidala","Journey Guide: Aggressive Negotiations", 0, 0, 0};
        swgohMap["Pao"] = Swgoh {"Pao","Cantina Battles Store", 0, 0, 5};
        swgohMap["Paploo"] = Swgoh {"Paploo","Cantina Battles: 3-D,Forest Moon,Galactic Bounties I,Guild Activity Store", 1, 2, 5};
        swgohMap["Paz Vizsla"] = Swgoh {"Paz Vizsla","N/A", 0, 0, 0};
        swgohMap["Plo Koon"] = Swgoh {"Plo Koon","Bronzium Data Card,Cantina Battles: 4-G,Fleet Arena Store,Places of Power", 1, 2, 5};
        swgohMap["Poe Dameron"] = Swgoh {"Poe Dameron","Cantina Battles Store,Fleet Arena Store,Light Side Battles: 7-B (Hard)", 1, 2, 5};
        swgohMap["Poggle the Lesser"] = Swgoh {"Poggle the Lesser","Bronzium Data Card,Galactic War Store,Ground War,Light Side Battles: 4-E (Hard)", 1, 2, 5};
        swgohMap["Princess Kneesaa"] = Swgoh {"Princess Kneesaa","N/A", 0, 0, 0};
        swgohMap["Princess Leia"] = Swgoh {"Princess Leia","Guild Events Store,Rebel Roundup,Squad Arena Store", 0, 0, 5};
        swgohMap["Qi'ra"] = Swgoh {"Qi'ra","Cantina Battles: 3-B,Galactic Bounties II", 1, 2, 0};
        swgohMap["Qui-Gon Jinn"] = Swgoh {"Qui-Gon Jinn","Cantina Battles Store", 0, 0, 5};
        swgohMap["R2-D2"] = Swgoh {"R2-D2","Journey Guide: Daring Droid", 0, 0, 0};
        swgohMap["Range Trooper"] = Swgoh {"Range Trooper","Dark Side Battles: 3-A (Hard)", 1, 2, 0};
        swgohMap["Rebel Officer Leia Organa"] = Swgoh {"Rebel Officer Leia Organa","Galactic Bounties I,Guild Events Store,Hoth Rebel Assault", 0, 0, 5};
        swgohMap["Resistance Hero Finn"] = Swgoh {"Resistance Hero Finn","Light Side Battles: 8-C (Hard)", 1, 2, 0};
        swgohMap["Resistance Hero Poe"] = Swgoh {"Resistance Hero Poe","Light Side Battles: 6-B (Hard)", 1, 2, 0};
        swgohMap["Resistance Pilot"] = Swgoh {"Resistance Pilot","Fleet Arena Store,Galactic War Store", 0, 0, 5};
        swgohMap["Resistance Trooper"] = Swgoh {"Resistance Trooper","Guild Activity Store,Light Side Battles: 3-A (Hard)", 1, 2, 5};
        swgohMap["Rey"] = Swgoh {"Rey","Heir to the Light Side", 0, 0, 0};
        swgohMap["Rey (Jedi Training)"] = Swgoh {"Rey (Jedi Training)","Journey Guide: Rey Hero's Journey", 0, 0, 0};
        swgohMap["Rey (Scavenger)"] = Swgoh {"Rey (Scavenger)","Dark Side Battles: 5-D (Hard),Guild Activity Store,Light Side Battles: 1-A (Hard)", 2, 2, 5};
        swgohMap["Rose Tico"] = Swgoh {"Rose Tico","Light Side Battles: 4-F (Hard)", 1, 2, 0};
        swgohMap["Royal Guard"] = Swgoh {"Royal Guard","Bronzium Data Card,Dark Side Battles: 5-F (Hard),Guild Events Store", 1, 2, 5};
        swgohMap["Sabine Wren"] = Swgoh {"Sabine Wren","Dark Side Battles: 1-A (Hard),Rebel Roundup", 1, 2, 0};
        swgohMap["Sana Starros"] = Swgoh {"Sana Starros","Cantina Battles: 2-C", 1, 2, 0};
        swgohMap["Savage Opress"] = Swgoh {"Savage Opress","Squad Arena Store", 0, 0, 5};
        swgohMap["Saw Gerrera"] = Swgoh {"Saw Gerrera","Light Side Battles: 4-B (Hard)", 1, 1, 0};
        swgohMap["Scarif Rebel Pathfinder"] = Swgoh {"Scarif Rebel Pathfinder","Fleet Arena Store,Fleet Battles: 2-C (Hard),Guild Events Store,Rebel Roundup", 1, 2, 5};
        swgohMap["Scout Trooper"] = Swgoh {"Scout Trooper","Fleet Battles: 5-C (Hard)", 1, 1, 0};
        swgohMap["Second Sister"] = Swgoh {"Second Sister","Dark Side Battles: 4-C (Hard)", 1, 2, 0};
        swgohMap["Seventh Sister"] = Swgoh {"Seventh Sister","Dark Side Battles: 4-E (Hard)", 1, 2, 0};
        swgohMap["Shaak Ti"] = Swgoh {"Shaak Ti","Fanatical Devotion,Fleet Battles: 5-A (Hard)", 1, 2, 0};
        swgohMap["Shoretrooper"] = Swgoh {"Shoretrooper","Light Side Battles: 9-B (Hard),Military Might", 1, 2, 0};
        swgohMap["Sith Assassin"] = Swgoh {"Sith Assassin","Cantina Battles: 6-C,Guild Activity Store,Secrets and Shadows", 1, 2, 5};
        swgohMap["Sith Empire Trooper"] = Swgoh {"Sith Empire Trooper","Cantina Battles: 8-B,Secrets and Shadows", 1, 2, 0};
        swgohMap["Sith Eternal Emperor"] = Swgoh {"Sith Eternal Emperor","The Final Order", 0, 0, 0};
        swgohMap["Sith Marauder"] = Swgoh {"Sith Marauder","Cantina Battles: 6-E", 1, 2, 0};
        swgohMap["Sith Trooper"] = Swgoh {"Sith Trooper","Light Side Battles: 2-B (Hard)", 1, 2, 0};
        swgohMap["Skiff Guard (Lando Calrissian)"] = Swgoh {"Skiff Guard (Lando Calrissian)","Light Side Battles: 3-B (Hard)", 1, 2, 0};
        swgohMap["Snowtrooper"] = Swgoh {"Snowtrooper","Bronzium Data Card,Cantina Battles: 7-B,Guild Activity Store,Guild Events Store,Light Side Battles: 8-C (Hard),Military Might", 1, 2, 5};
        swgohMap["Starkiller"] = Swgoh {"Starkiller","Journey Guide: The Force Unleashed", 0, 0, 0};
        swgohMap["Stormtrooper"] = Swgoh {"Stormtrooper","Bronzium Data Card,Cantina Battles Store,Guild Events Store,Light Side Battles: 3-C (Hard),Military Might", 1, 2, 5};
        swgohMap["Stormtrooper Han"] = Swgoh {"Stormtrooper Han","Cantina Battles Store,Guild Events Store,Rebel Roundup", 0, 0, 5};
        swgohMap["Sun Fac"] = Swgoh {"Sun Fac","Fleet Arena Store,Ground War,Guild Activity Store", 0, 0, 10};
        swgohMap["Supreme Leader Kylo Ren"] = Swgoh {"Supreme Leader Kylo Ren","Heir to the Dark Side", 0, 0, 0};
        swgohMap["T3-M4"] = Swgoh {"T3-M4","Cantina Battles: 6-B", 1, 2, 0};
        swgohMap["Talia"] = Swgoh {"Talia","Bronzium Data Card,Cantina Battles: 1-G,Dark Side Battles: 9-C (Hard),Guild Activity Store", 2, 2, 5};     
        swgohMap["Tarfful"] = Swgoh {"Tarfful","Dark Side Battles: 4-D (Hard)", 1, 2, 0};
        swgohMap["Taron Malicos"] = Swgoh {"Taron Malicos","Conquest", 0, 0, 0};
        swgohMap["Tech"] = Swgoh {"Tech","Light Side Battles: 5-F (Hard)", 1, 2, 0};
        swgohMap["Teebo"] = Swgoh {"Teebo","Bronzium Data Card,Dark Side Battles: 3-D (Hard),Forest Moon,Galactic War Store,Light Side Battles: 4-A (Hard)", 2, 2, 5};
        swgohMap["The Armorer"] = Swgoh {"The Armorer","Light Side Battles: 9-C (Hard)", 1, 2, 0};
        swgohMap["The Mandalorian"] = Swgoh {"The Mandalorian","Dark Side Battles: 3-C (Hard),Fleet Battles: 5-E (Hard)", 2, 2, 0};
        swgohMap["The Mandalorian (Beskar Armor)"] = Swgoh {"The Mandalorian (Beskar Armor)","Journey Guide: The Mandalorian Hero's Journey", 0, 0, 0};
        swgohMap["Third Sister"] = Swgoh {"Third Sister","Rise of the Empire", 0, 0, 0};
        swgohMap["Threepio & Chewie"] = Swgoh {"Threepio & Chewie","Light Side Battles: 7-A (Hard)", 1, 2, 0};
        swgohMap["TIE Fighter Pilot"] = Swgoh {"TIE Fighter Pilot","Cantina Battles: 4-B,Fleet Arena Store,Guild Events Store,Military Might", 1, 2, 5};
        swgohMap["Tusken Chieftain"] = Swgoh {"Tusken Chieftain","Dark Side Battles: 6-C (Hard)", 1, 2, 0};
        swgohMap["Tusken Raider"] = Swgoh {"Tusken Raider","Bronzium Data Card, Dark Side Battles: 6-C (Hard), Galactic War Store", 1, 2, 5};
        swgohMap["Tusken Shaman"] = Swgoh {"Tusken Shaman","Fleet Arena Store, Guild Activity Store", 0, 0, 5};
        swgohMap["Tusken Warrior"] = Swgoh {"Tusken Warrior","Cantina Battles: 2-D", 1, 2, 0};
        swgohMap["Ugnaught"] = Swgoh {"Ugnaught","Squad Arena Store", 0, 0, 5};
        swgohMap["URoRRuR'R'R"] = Swgoh {"URoRRuR'R'R","Bronzium Data Card Light Side Battles: 5-A (Hard)", 1, 2, 0};
        swgohMap["Vandor Chewbacca"] = Swgoh {"Vandor Chewbacca","Dark Side Battles: 4-D (Hard)", 1, 2, 0};
        swgohMap["Veteran Smuggler Chewbacca"] = Swgoh {"Veteran Smuggler Chewbacca","Cantina Battles: 5-F", 1, 2, 0};
        swgohMap["Veteran Smuggler Han Solo"] = Swgoh {"Veteran Smuggler Han Solo","Cantina Battles: 5-E", 1, 2, 0};
        swgohMap["Visas Marr"] = Swgoh {"Visas Marr","Dark Side Battles: 7-B (Hard) Galactic Bounties II", 1, 2, 0};
        swgohMap["Wampa"] = Swgoh {"Wampa","Galactic Bounties I, Guild Events Store", 0, 0, 5};
        swgohMap["Wat Tambor"] = Swgoh {"Wat Tambor","Geonosis Separatist Might, Guild Events Store", 0, 0, 5};
        swgohMap["Wedge Antilles"] = Swgoh {"Wedge Antilles","Cantina Battles: 6-F, Fleet Arena ,Store Rebel Roundup", 1, 2, 5};
        swgohMap["Wicket"] = Swgoh {"Wicket","Dark Side Battles: 8-A (Hard), Endor Escalation", 1, 2, 0};
        swgohMap["Wrecker"] = Swgoh {"Wrecker","Light Side Battles: 7-C (Hard)", 1, 2, 0};
        swgohMap["Young Han Solo"] = Swgoh {"Young Han Solo","Guild Activity Store", 0, 0, 5};
        swgohMap["Young Lando Calrissian"] = Swgoh {"Young Lando Calrissian","Fleet Battles: 1-D (Hard)", 1, 2, 0};
        swgohMap["Zaalbar"] = Swgoh {"Zaalbar","Light Side Battles: 5-D (Hard)", 1, 2, 0};
        swgohMap["Zam Wesell"] = Swgoh {"Zam Wesell","Fleet Arena Store,Guild Activity Store", 0, 0, 5};
        swgohMap["Zorii Bliss"] = Swgoh {"Zorii Bliss","Dark Side Battles: 1-C (Hard)", 1, 2, 0};
//abovee is all of characters as of 11/27/2023 still need to check data and work on galactic legend data
    int shardsamt;
    int starsamt;
    int starsshards;
    int shardsremaining;
    int daystofarm;
    int refreshamts;
//Question to user
    std::string askname;
    std::cout<<"What is the characters in game name?"<<std::endl;
    getline(std::cin, askname);
//map find character and data, also calculations
std::map<std::string, Swgoh>::iterator iter = swgohMap.find(askname);
if(iter != swgohMap.end())
{
        std::cout<<"How many node refreshes a day?"<<std::endl;
    std::cin >>refreshamts;
    std::cout<<"How many stars?"<<std::endl;
    std::cin >> starsamt;
//calculates how many shards already obtained based on star level
        if (starsamt<=7 && starsamt>=0)
        {
            switch(starsamt)
            {
            case 7:
                starsshards = maxshards;
                break;
            case 6:
                starsshards = 230;
                break;
            case 5:
                starsshards = 145;
                break;
            case 4:
                starsshards = 80;
                break;
            case 3:
                starsshards = 50;
                break;
            case 2:
                starsshards =25;
                break;
            case 1:
                starsshards = 10;
                break;
            case 0:
                starsshards = 0;
                break;
            default:
                std::cout<<"Invalid star amount"<<std::endl;
                return 0;
            }
        }

    std::cout<<"How many shards?"<<std::endl;
    std::cin>>shardsamt;
    shardsremaining= maxshards-(shardsamt+starsshards); 
    
    //after questions are asked run through calculations
    std::cout << "Character: " << iter->first << std::endl;
    std::cout << "Data: " << iter->second.Charactername << ", Accessible through:" 
              << iter->second.Location << std::endl; 
              std::cout<<"Will obtain "<<shardsremaining<<" shards in "<< 
              (daystofarm = (shardsremaining)/
              ((iter->second.Nodeamount*5*refreshamts*droprate*iter->second.NodeShardamount)+(iter->second.charactershipmentshardamount)))
            <<" days." << std::endl;
} else {
    std::cout << "Character not found." << std::endl;
}
    return 0;
}
