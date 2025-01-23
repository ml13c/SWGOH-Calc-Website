/*
probalby need different functions and to call them

//SEPERATE PROJECT
have a crystal income portion
SOLO
daily-165 min-done
gac daily(based on rank)-done
gac match(3)-varies on wins/losses and bracket-done
gac round weekly-depends on wins/losses-done
calendar-300/month or 10 a day-done(with daily)
gac monthly-done
fleet arena(varies on rank)-done
GUILD
-tb(stars amt), also type of tb

at end avg crystals /day/week/month
make it similar to my sheets calculator
DONE

add web scrape functinoaloity where it enters and uses swgoh.gg profile name for this part
add web scrape functionality for journey guide and farm calculations
FUNCTIONALITY
    -add character to farming array
    -set desired relic based off journey guide or custom
    -compare character[index] in array to corresponding desired character index in desired_char_arr
        -calc relic mats
            -time to get relic mats
        -calc farm for stars
            -time to get 7*
        -gear NA but show total kyros req for total and each gear level
    -need to get requirements for swgoh journey guide (maybe scrape off of swgoh.gg)
*/
#include<iostream>
#include<map>
#include<string>
const int dailyCrystals = 165;//includes calendar
int GACweeklyMatch;
int fleetDaily;
//GAC Weekly Match rewards functions
    //Base Class-derived classes   
class GACweekly {
public:
    virtual void execute() = 0; // Pure virtual function
};
    class rank1 : public GACweekly {
    public:
        void execute() override {
            GACweeklyMatch=750;
        }
    };
    class rank2_4 : public GACweekly {
    public:
        void execute() override {
            GACweeklyMatch=500;
        }
    };
    class rank5_7 : public GACweekly {
    public:
        void execute() override {
            GACweeklyMatch=250;
        }
    };
    class rank8 : public GACweekly {
public:
    void execute() override {
        GACweeklyMatch=100;
    }
};
//GAC LEAGUES
// Base class representing GAC constr
class GACleagues {
public:
    virtual int getDaily() const = 0;
    virtual int getWin() const = 0;
    virtual int getLoss() const = 0;
    virtual int getChampRewards() const =0;
    virtual std::string getLeague() const = 0;
    virtual std::string getDivision() const = 0;
};
// Divisions for Carbonite1
    class Carbonite1 : public GACleagues {
    private:
        int GACdaily = 75;
        int GACwin = 110;
        int GACloss = 30;
        int GACChampReward = 290;
        std::string league;
        std::string division;
    public:
    // Constructor with league and division parameters
    Carbonite1(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    // Getter functions
    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Carbonite2 : public GACleagues {
    private:
        int GACdaily = 70;
        int GACwin = 100;
        int GACloss = 30;
        int GACChampReward = 225;
        std::string league;
        std::string division;
    public:
    Carbonite2(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Carbonite3 : public GACleagues {
    private:
        int GACdaily = 65;
        int GACwin = 90;
        int GACloss = 30;
        int GACChampReward = 170;
        std::string league;
        std::string division;
    public:
    Carbonite3(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Carbonite4 : public GACleagues {
    private:
        int GACdaily = 60;
        int GACwin = 80;
        int GACloss = 30;
        int GACChampReward = 170;
        std::string league;
        std::string division;
    public:
    Carbonite4(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Carbonite5 : public GACleagues {
    private:
        int GACdaily = 55;
        int GACwin = 70;
        int GACloss = 30;
        int GACChampReward = 100;
        std::string league;
        std::string division;
    public:
    Carbonite5(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};

// Divisions for Bronzium
    class Bronzium5 : public GACleagues {
    private:
        int GACdaily = 80;
        int GACwin = 120;
        int GACloss = 50;
        int GACChampReward = 530;
        std::string league;
        std::string division;
    public:
    // Constructor with league and division parameters
    Bronzium5(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    // Getter functions
    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Bronzium4 : public GACleagues {
    private:
        int GACdaily = 85;
        int GACwin = 140;
        int GACloss = 50;
        int GACChampReward = 560;
        std::string league;
        std::string division;
    public:
    Bronzium4(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}


    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Bronzium3 : public GACleagues {
    private:
        int GACdaily = 90;
        int GACwin = 160;
        int GACloss = 50;
        int GACChampReward = 595;
        std::string league;
        std::string division;
    public:
    Bronzium3(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Bronzium2 : public GACleagues {
    private:
        int GACdaily = 95;
        int GACwin = 180;
        int GACloss = 50;
        int GACChampReward = 630;
        std::string league;
        std::string division;
    public:
    Bronzium2(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}


    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Bronzium1 : public GACleagues {
    private:
        int GACdaily = 100;
        int GACwin = 200;
        int GACloss = 50;
        int GACChampReward = 670;
        std::string league;
        std::string division;
    public:
    Bronzium1(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
// Divisions for Chromium
    class Chromium5 : public GACleagues {
    private:
        int GACdaily = 105;
        int GACwin = 230;
        int GACloss = 80;
        int GACChampReward = 805;
        std::string league;
        std::string division;
    public:
    Chromium5(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}


    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Chromium4 : public GACleagues {
    private:
        int GACdaily = 110;
        int GACwin = 260;
        int GACloss = 80;
        int GACChampReward = 870 ;
        std::string league;
        std::string division;
    public:
    Chromium4(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}


    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Chromium3 : public GACleagues {
    private:
        int GACdaily = 115;
        int GACwin = 290;
        int GACloss = 80;
        int GACChampReward = 935;
        std::string league;
        std::string division;
    public:
    Chromium3(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Chromium2 : public GACleagues {
    private:
        int GACdaily = 120;
        int GACwin = 320;
        int GACloss = 80;
        int GACChampReward = 1005;
        std::string league;
        std::string division;
    public:
    Chromium2(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Chromium1 : public GACleagues {
    private:
        int GACdaily = 125;
        int GACwin = 350;
        int GACloss = 80;
        int GACChampReward = 1080;
        std::string league;
        std::string division;
    public:
    Chromium1(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};

//Divisions for Aurodium
    class Aurodium5 : public GACleagues {
    private:
        int GACdaily = 130;
        int GACwin = 390;
        int GACloss = 150;
        int GACChampReward = 1310;
        std::string league;
        std::string division;
    public:
    Aurodium5(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Aurodium4 : public GACleagues {
    private:
        int GACdaily = 140;
        int GACwin = 430;
        int GACloss = 150;
        int GACChampReward = 1375;
        std::string league;
        std::string division;
    public:
    Aurodium4(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}


    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Aurodium3 : public GACleagues {
    private:
        int GACdaily = 150;
        int GACwin = 470;
        int GACloss = 150;
        int GACChampReward = 1445;
        std::string league;
        std::string division;
    public:
    Aurodium3(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}


    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Aurodium2 : public GACleagues {
    private:
        int GACdaily = 160;
        int GACwin = 510;
        int GACloss = 150;
        int GACChampReward = 1515;
        std::string league;
        std::string division;
    public:
    Aurodium2(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}


    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Aurodium1 : public GACleagues {
    private:
        int GACdaily = 170;
        int GACwin = 550;
        int GACloss = 150;
        int GACChampReward = 1590;
        std::string league;
        std::string division;
    public:
    Aurodium1(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
// Divisions for Kyber
    class Kyber5 : public GACleagues {
    private:
        int GACdaily = 180;
        int GACwin = 600;
        int GACloss = 200;
        int GACChampReward = 1820;
        std::string league;
        std::string division;
    public:
    Kyber5(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Kyber4 : public GACleagues {
    private:
        int GACdaily = 200;
        int GACwin = 675;
        int GACloss = 200;
        int GACChampReward = 1895;
        std::string league;
        std::string division;
    public:
    Kyber4(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Kyber3 : public GACleagues {
    private:
        int GACdaily = 220;
        int GACwin = 750;
        int GACloss = 200;
        int GACChampReward = 1970;
        std::string league;
        std::string division;
    public:
    Kyber3(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Kyber2 : public GACleagues {
    private:
        int GACdaily = 240;
        int GACwin = 825;
        int GACloss = 200;
        int GACChampReward = 2050;
        std::string league;
        std::string division;
    public:
    Kyber2(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
    class Kyber1 : public GACleagues {
    private:
        int GACdaily = 260;
        int GACwin = 900;
        int GACloss = 200;
        int GACChampReward = 2135;//this one needs a switch statement
        std::string league;
        std::string division;
    public:
    // Constructor with league and division parameters
    Kyber1(const std::string& league_, const std::string& division_) : league(league_), division(division_) {}

    // Getter functions
    int getDaily() const override { return GACdaily; }
    int getWin() const override { return GACwin; }
    int getLoss() const override { return GACloss; }
    int getChampRewards() const override { return GACChampReward; }
    std::string getLeague() const override { return league; }
    std::string getDivision() const override { return division; }
};
//Fleet Arena
void fleetArena(int rank) {
    if(rank==1){
        fleetDaily=400;
    }
    else if(rank==2){
        fleetDaily=375;
    }
    else if(rank==3){
        fleetDaily=350;
    }
    else if(rank==4){
        fleetDaily=325;
    }
    else if(rank==5){
        fleetDaily=300;
    }
    else if((rank<=10)&&(rank>=6)){
        fleetDaily=200;
    }
    else if((rank<=20)&&(rank>=11)){
        fleetDaily=100;
    }
    else if((rank<=50)&&(rank>=21)){
        fleetDaily=50;
    }
    else {
        fleetDaily=0;
    }
}
//TerritoryBattles
void TerritoryBattles(int planetStars,int& tbCrystals) {
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

int main(){
    //GAC Weekly
    int GACwmatches;
    int GAClmatches;
    int tbCrystals;
    int fleetRank;
    int tbStars;
    int GACweeklyrank;
    std::string GACLeaguesDivision;

//FLEET ARENA
    std::cout<<"What Fleet Arena Rank are you?"<<std::endl;
    std::cin>>fleetRank;
    fleetArena(fleetRank);
//TB
    std::cout<<"How many stars do you get in ROTE"<<std::endl;
    std::cin>>tbStars;
    TerritoryBattles(tbStars, tbCrystals);
std::cout<<"What rank do you end up in for GAC Matchups?"<<std::endl;
std::cin>>GACweeklyrank;
        if(GACweeklyrank==1){
            GACwmatches = 3;
            GAClmatches = 0;
            rank1 obj;
            obj.execute();
    }
        if((GACweeklyrank>=2)&&(GACweeklyrank<=4)){
            GACwmatches =2;
            GAClmatches =1;
            rank2_4 obj;
            obj.execute();
    }
        if((GACweeklyrank>=5)&&(GACweeklyrank<=7)){
            GACwmatches=1;
            GAClmatches=2;
            rank5_7 obj;
            obj.execute();
    }
        if(GACweeklyrank==8){
            GAClmatches=3;
            GACwmatches=0;
            rank8 obj;
            obj.execute();
    }
    //GAC LEAGUES 

    std::cout << "What League and Division are you in: ";
    std::cin.ignore();
    std::getline(std::cin, GACLeaguesDivision);
   GACleagues* carbonite = nullptr;

    // Determine which Carbonite class to use based on user input
    if (GACLeaguesDivision == "Carbonite 1") {
        carbonite = new Carbonite1("Carbonite", "1");
    } else if (GACLeaguesDivision == "Carbonite 2") {
        carbonite = new Carbonite2("Carbonite", "2");
    } else if (GACLeaguesDivision == "Carbonite 3") {
        carbonite = new Carbonite3("Carbonite", "3");
    } else if (GACLeaguesDivision == "Carbonite 4") {
        carbonite = new Carbonite4("Carbonite", "4");
    } else if (GACLeaguesDivision == "Carbonite 5") {
        carbonite = new Carbonite5("Carbonite", "5");
    } 
    
    
    
    
    
    else {
        std::cout << "Unknown league!" << std::endl;
        return 1; // Exit program if league is unknown
    }

    // Print values for the selected Carbonite class
    std::cout << "GAC Daily: " << carbonite->getDaily() << std::endl;
    std::cout << "GAC Win: " << carbonite->getWin() << std::endl;
    std::cout << "GAC Loss: " << carbonite->getLoss() << std::endl;
    std::cout << "Champ Reward: " << carbonite->getChampRewards() << std::endl;

//CRYSTAL INCOME
std::cout<<"GAC WEEKLY MATCH INCOME: "<<GACweeklyMatch<<std::endl;
std::cout<<"Fleet Arena Crystals: "<<fleetDaily<<std::endl;
std::cout<<"ROTE Territory Battle Crystals: "<<tbCrystals<<std::endl;
std::cout<<"Monthly Crystal Income: "<<((fleetDaily*30)+(30*dailyCrystals)+(tbCrystals*2)+(GACweeklyMatch*3)+((carbonite->getDaily())*30)+(carbonite->getChampRewards())+((GAClmatches*(carbonite->getLoss()))*3)+(3*(GACwmatches*(carbonite->getWin()))))<<std::endl;
    delete carbonite;
}
