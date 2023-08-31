let codeone= Math.floor(Math.random()*6) + 1
let codetwo= Math.floor(Math.random()*6) + 1
let codethree= Math.floor(Math.random()*6) + 1
let codefour= Math.floor(Math.random()*6) + 1
var finish = 0
var excuse = 0
var excuseme = 0
while (codeone==codetwo || codeone==codethree || codeone==codefour || codetwo==codefour || codetwo==codethree || codethree==codefour) {
    codeone= Math.floor(Math.random()*6) + 1
    codetwo= Math.floor(Math.random()*6) + 1
    codethree= Math.floor(Math.random()*6) + 1
    codefour= Math.floor(Math.random()*6) + 1
}
let code= " " + codeone+codetwo+codethree+codefour 
let subone = "0"
let subtwo = "0"
let subthree = "0"
let subfour = "0"
let done = 0
let submit=0
var X=0
var Y=0
var Red = 0
var yellow = 0
var doneed = 0
let player = 0
function Switch (location){
var change=location
console.log(Location)
window.location.href = change
}

function Colors (color){
    if(submit==0){
    document.getElementById("Submit").style.backgroundColor="Gray"
done++
submit=0
if (done==1){
    document.getElementById("oneone").style.backgroundColor=color
    Fours()
}
if (done==2){
    document.getElementById("onetwo").style.backgroundColor=color
    Fours()
}
if (done==3){
    document.getElementById("onethree").style.backgroundColor=color
    Fours()
}
if (done==4){
    document.getElementById("onefour").style.backgroundColor=color
    Fours()
}
if (done==5){
    document.getElementById("twoone").style.backgroundColor=color
    Fours()
}
if (done==6){
    document.getElementById("twotwo").style.backgroundColor=color
    Fours()
}
if (done==7){
    document.getElementById("twothree").style.backgroundColor=color
    Fours()
}
if (done==8){
    document.getElementById("twofour").style.backgroundColor=color
    Fours()
}
if (done==9){
    document.getElementById("threeone").style.backgroundColor=color
    Fours()
}
if (done==10){
    document.getElementById("threetwo").style.backgroundColor=color
    Fours()
}
if (done==11){
    document.getElementById("threethree").style.backgroundColor=color
    Fours()
}
if (done==12){
    document.getElementById("threefour").style.backgroundColor=color
    Fours()
}
if (done==13){
    document.getElementById("fourone").style.backgroundColor=color
    Fours()
}
if (done==14){
    document.getElementById("fourtwo").style.backgroundColor=color
    Fours()
}if (done==15){
    document.getElementById("fourthree").style.backgroundColor=color
    Fours()
}
if (done==16){
    document.getElementById("fourfour").style.backgroundColor=color
    Fours()
}
if (done==17){
    document.getElementById("fiveone").style.backgroundColor=color
    Fours()
}
if (done==18){
    document.getElementById("fivetwo").style.backgroundColor=color
    Fours()
}
if (done==19){
    document.getElementById("fivethree").style.backgroundColor=color
    Fours()
}
if (done==20){
    document.getElementById("fivefour").style.backgroundColor=color
    Fours()
}
if (done==21){
    document.getElementById("sixone").style.backgroundColor=color
    Fours()
}
if (done==22){
    document.getElementById("sixtwo").style.backgroundColor=color
    Fours()
}
if (done==23){
    document.getElementById("sixthree").style.backgroundColor=color
    Fours()
}
if (done==24){
    document.getElementById("sixfour").style.backgroundColor=color
    Fours()
}
if (done==25){
    document.getElementById("sevenone").style.backgroundColor=color
    Fours()
}
if (done==26){
    document.getElementById("seventwo").style.backgroundColor=color
    Fours()
}
if (done==27){
    document.getElementById("seventhree").style.backgroundColor=color
    Fours()
}
if (done==28){
    document.getElementById("sevenfour").style.backgroundColor=color
    Fours()
}
if (done==29){
    document.getElementById("eightone").style.backgroundColor=color
    Fours()
}
if (done==30){
    document.getElementById("eighttwo").style.backgroundColor=color
    Fours()
}
if (done==31){
    document.getElementById("eightthree").style.backgroundColor=color
    Fours()
}
if (done==32){
    document.getElementById("eightfour").style.backgroundColor=color
    Fours()
}
if (done==33){
    document.getElementById("nineone").style.backgroundColor=color
    Fours()
}
if (done==34){
    document.getElementById("ninetwo").style.backgroundColor=color
    Fours()
}
if (done==35){
    document.getElementById("ninethree").style.backgroundColor=color
    Fours()
}
if (done==36){
    document.getElementById("ninefour").style.backgroundColor=color
    Fours()
}
if (done==37){
    document.getElementById("tenone").style.backgroundColor=color
    Fours()
}
if (done==38){
    document.getElementById("tentwo").style.backgroundColor=color
    Fours()
}
if (done==39){
    document.getElementById("tenthree").style.backgroundColor=color
    Fours()
}
if (done==40){
    document.getElementById("tenfour").style.backgroundColor=color
    Fours()
}
}
}

function Fours (){
    Red=0
yellow=0
    if(window.location.href=="https://saamik100.github.io/Mastermind/One.html"){
        player = 1
        }
        if(window.location.href=="https://saamik100.github.io/Mastermind/Two.html"){
            player = 2
        }
    if(X==0){
if(done%4==0){
    document.getElementById("Submit").style.backgroundColor="Red"
submit=1

}
    }else{
        X=0
    }
}
function Del(){
    if(done==0){

    }else{
    
        if(done%4==0){
        if(Y+1==done/4){
            X=1
            submit=0
        done--
        Colors(color='white')
        done--
        console.log("Hi")
        console.log(done)
        }
    
        }else{
        X=1
        submit=0
    done--
    Colors(color='white')
    done--
    console.log("Hi")
    console.log(done)
    }
}
}
function Submit(){
if(submit==1){
    document.getElementById("Submit").style.backgroundColor="Gray"
    submit=0
    X=0
    Y++
if(done/4==1){
 subone = document.getElementById("oneone").style.backgroundColor
 subtwo = document.getElementById("onetwo").style.backgroundColor
 subthree = document.getElementById("onethree").style.backgroundColor
 subfour = document.getElementById("onefour").style.backgroundColor
}
if(done/4==2){
    subone = document.getElementById("twoone").style.backgroundColor
    subtwo = document.getElementById("twotwo").style.backgroundColor
    subthree = document.getElementById("twothree").style.backgroundColor
    subfour = document.getElementById("twofour").style.backgroundColor
   }
   if(done/4==3){
    subone = document.getElementById("threeone").style.backgroundColor
    subtwo = document.getElementById("threetwo").style.backgroundColor
    subthree = document.getElementById("threethree").style.backgroundColor
    subfour = document.getElementById("threefour").style.backgroundColor
   }
   if(done/4==4){
    subone = document.getElementById("fourone").style.backgroundColor
    subtwo = document.getElementById("fourtwo").style.backgroundColor
    subthree = document.getElementById("fourthree").style.backgroundColor
    subfour = document.getElementById("fourfour").style.backgroundColor
   }
   if(done/4==5){
    subone = document.getElementById("fiveone").style.backgroundColor
    subtwo = document.getElementById("fivetwo").style.backgroundColor
    subthree = document.getElementById("fivethree").style.backgroundColor
    subfour = document.getElementById("fivefour").style.backgroundColor
   }
   if(done/4==6){
    subone = document.getElementById("sixone").style.backgroundColor
    subtwo = document.getElementById("sixtwo").style.backgroundColor
    subthree = document.getElementById("sixthree").style.backgroundColor
    subfour = document.getElementById("sixfour").style.backgroundColor
   }
   if(done/4==7){
    subone = document.getElementById("sevenone").style.backgroundColor
    subtwo = document.getElementById("seventwo").style.backgroundColor
    subthree = document.getElementById("seventhree").style.backgroundColor
    subfour = document.getElementById("sevenfour").style.backgroundColor
   }
   if(done/4==8){
    subone = document.getElementById("eightone").style.backgroundColor
    subtwo = document.getElementById("eighttwo").style.backgroundColor
    subthree = document.getElementById("eightthree").style.backgroundColor
    subfour = document.getElementById("eightfour").style.backgroundColor
   }
   if(done/4==9){
    subone = document.getElementById("nineone").style.backgroundColor
    subtwo = document.getElementById("ninetwo").style.backgroundColor
    subthree = document.getElementById("ninethree").style.backgroundColor
    subfour = document.getElementById("ninefour").style.backgroundColor
   }
   if(done/4==10){
    subone = document.getElementById("tenone").style.backgroundColor
    subtwo = document.getElementById("tentwo").style.backgroundColor
    subthree = document.getElementById("tenthree").style.backgroundColor
    subfour = document.getElementById("tenfour").style.backgroundColor
   var finish = 1
}
Translate()
console.log(subthree + "Bre")
   if(subone==codeone){
Red++
console.log("Bruh")
   }else if(subone==codetwo){
    if(subtwo!==codetwo){
    yellow++
    }else{
        Red++
        console.log("AhemTw")
    }
   } else if(subone==codethree){
    if(subthree!==codethree){
    yellow++}else {
        Red++
        console.log("AHemm")
    }
   } else if (subone==codefour){
    if(subfour!==codefour){
    yellow++
   }else {
    Red++
    console.log("AhemF")
   }
 }
   if(subtwo==codeone){
    if(subone!==codeone){
        yellow++
    }
   }
   if(subtwo==codethree){
    if(subone!==codethree){
        if(subthree!==codethree){
        yellow++
    }
    }
   }
   if(subtwo==codefour){
    if(subone!==codefour){
        if(codefour!==subfour){
        yellow++
        }
    }
   }
if(subtwo==codetwo){
    if(subone!==codetwo){
        Red++
        console.log("BruhTw")
    }else{
        if(subone==codeone){
            Red++
        }
    }
}
if(subthree==codethree){
    if(subone!==codethree){
        Red++
        console.log("BruhTh")
    }else{
        if(subone==codeone){
            Red++
        }
    }
}

if(subfour==codefour){
    if(subone!==codefour){
        Red++
        console.log("BruhF")
    }else{
        if(subone==codeone){
            Red++
        }
    }
}

   if(subthree==codeone){
    if(subone!==codeone){
        if(subtwo!==codeone){
yellow++
        }
    }
   }
   if(subthree==codetwo){
    if(subone!==codetwo){
        if(subtwo!==codetwo){
            yellow++
        }
    }
   }
   if(subthree==codefour){
    if(subone!==codefour){
        if(subtwo!==codefour){
            if(subfour!==codefour){
            yellow++
            }
        }
    }
   }
   if(subfour==codeone){
if(subone!==codeone){
    if(subtwo!==codeone){
        if(subthree!==codeone){

yellow++
        }
    }
}
   }
   if(subfour==codetwo){
    if(subone!==codetwo){
        if(subtwo!==codetwo){
            if(subthree!==codetwo){
    
    yellow++
            }
        }
    }
       }
       if(subfour==codethree){
        if(subone!==codethree){
            if(subtwo!==codethree){
                if(subthree!==codethree){
        
        yellow++
                }
            }
        }
           }

    Finish()
        }
}

function Translate(){
if(subone=="red"){
    subone=1
}
if(subone=="yellow"){
    subone=2
}
if(subone=="green"){
    subone=3
}
if(subone=="orange"){
    subone=4
}
if(subone=="black"){
subone=5
}
if(subone=="pink"){
    subone=6
    }
    if(subtwo=="red"){
        subtwo=1
    }
    if(subtwo=="yellow"){
        subtwo=2
    }
    if(subtwo=="green"){
        subtwo=3
    }
    if(subtwo=="orange"){
        subtwo=4
    }
    if(subtwo=="black"){
    subtwo=5
    }
    if(subtwo=="pink"){
        subtwo=6
        }
        if(subthree=="red"){
            subthree=1
        }
        if(subthree=="yellow"){
            subthree=2
            console.log("Sub")
            console.log(subthree+"bruh")
        }
        if(subthree=="green"){
            subthree=3
        }
        if(subthree=="orange"){
            subthree=4
            console.log("Ahem")
        }
        if(subthree=="black"){
        subthree=5
        }
        if(subthree=="pink"){
            subthree=6
            }if(subfour=="red"){
                subfour=1
            }
            if(subfour=="yellow"){
                subfour=2
                console.log(subthree+"brumh")
            }
            if(subfour=="green"){
                subfour=3
            }
            if(subfour=="orange"){
                subfour=4
            }
            if(subfour=="black"){
            subfour=5
            }
            if(subfour=="pink"){
                subfour=6
                }
}

function Finish(){
    if(done/4==1){
       
if(yellow==1){
    document.getElementById("aoneone").style.backgroundColor="white"
}
if(yellow==2){
    document.getElementById("aoneone").style.backgroundColor="white"
    document.getElementById("aonetwo").style.backgroundColor="white"
}
if(yellow==3){
    document.getElementById("aoneone").style.backgroundColor="white"
    document.getElementById("aonetwo").style.backgroundColor="white"
    document.getElementById("aonethree").style.backgroundColor="white"
}
if(yellow==4){
    document.getElementById("aoneone").style.backgroundColor="white"
    document.getElementById("aonetwo").style.backgroundColor="white"
    document.getElementById("aonefour").style.backgroundColor="white"
    document.getElementById("aonethree").style.backgroundColor="white"
}
if(Red==1){
    document.getElementById("aonefour").style.backgroundColor="Red"
}
if(Red==2){
    document.getElementById("aonefour").style.backgroundColor="Red"
    document.getElementById("aonethree").style.backgroundColor="Red"
}
if(Red==3){
    document.getElementById("aonefour").style.backgroundColor="Red"
    document.getElementById("aonethree").style.backgroundColor="Red"
    document.getElementById("aonetwo").style.backgroundColor="Red"
}
if(Red==4){
    document.getElementById("aonefour").style.backgroundColor="Red"
    document.getElementById("aonethree").style.backgroundColor="Red"
    document.getElementById("aonetwo").style.backgroundColor="Red"
    document.getElementById("aoneone").style.backgroundColor="Red"
    console.log("Credits Appear Now")
    End (Parameter=1)
}

    }
    if(done/4==2){
       
        if(yellow==1){
            document.getElementById("atwoone").style.backgroundColor="white"
        }
        if(yellow==2){
            document.getElementById("atwoone").style.backgroundColor="white"
            document.getElementById("atwotwo").style.backgroundColor="white"
        }
        if(yellow==3){
            document.getElementById("atwoone").style.backgroundColor="white"
            document.getElementById("atwotwo").style.backgroundColor="white"
            document.getElementById("atwothree").style.backgroundColor="white"
        }
        if(yellow==4){
            document.getElementById("atwoone").style.backgroundColor="white"
            document.getElementById("atwotwo").style.backgroundColor="white"
            document.getElementById("atwofour").style.backgroundColor="white"
            document.getElementById("atwothree").style.backgroundColor="white"
        }
        if(Red==1){
            document.getElementById("atwofour").style.backgroundColor="Red"
        }
        if(Red==2){
            document.getElementById("atwofour").style.backgroundColor="Red"
            document.getElementById("atwothree").style.backgroundColor="Red"
        }
        if(Red==3){
            document.getElementById("atwofour").style.backgroundColor="Red"
            document.getElementById("atwothree").style.backgroundColor="Red"
            document.getElementById("atwotwo").style.backgroundColor="Red"
        }
        if(Red==4){
            document.getElementById("atwofour").style.backgroundColor="Red"
            document.getElementById("atwothree").style.backgroundColor="Red"
            document.getElementById("atwotwo").style.backgroundColor="Red"
            document.getElementById("atwoone").style.backgroundColor="Red"
            console.log("Credits Appear Now")
            End (Parameter=1)
        }
            }
            if(done/4==3){
                
                if(yellow==1){
                   document.getElementById("athreeone").style.backgroundColor="white"
                }
                if(yellow==2){
                    document.getElementById("athreeone").style.backgroundColor="white"
                    document.getElementById("athreetwo").style.backgroundColor="white"
                }
                if(yellow==3){
                    document.getElementById("athreeone").style.backgroundColor="white"
                    document.getElementById("athreetwo").style.backgroundColor="white"
                    document.getElementById("athreethree").style.backgroundColor="white"
                }
                if(yellow==4){
                    document.getElementById("athreeone").style.backgroundColor="white"
                    document.getElementById("athreetwo").style.backgroundColor="white"
                    document.getElementById("athreefour").style.backgroundColor="white"
                    document.getElementById("athreethree").style.backgroundColor="white"
                }
                if(Red==1){
                    document.getElementById("athreefour").style.backgroundColor="Red"
                }
                if(Red==2){
                    document.getElementById("athreefour").style.backgroundColor="Red"
                    document.getElementById("athreethree").style.backgroundColor="Red"
                }
                if(Red==3){
                    document.getElementById("athreefour").style.backgroundColor="Red"
                    document.getElementById("athreethree").style.backgroundColor="Red"
                    document.getElementById("athreetwo").style.backgroundColor="Red"
                }
                if(Red==4){
                    document.getElementById("athreefour").style.backgroundColor="Red"
                    document.getElementById("athreethree").style.backgroundColor="Red"
                    document.getElementById("athreetwo").style.backgroundColor="Red"
                    document.getElementById("athreeone").style.backgroundColor="Red"
                    console.log("Credits Appear Now")
                    End (Parameter=1)
                }
                
                    }
                    if(done/4==4){
                       
                        if(yellow==1){
                            document.getElementById("afourone").style.backgroundColor="white"
                        }
                        if(yellow==2){
                            document.getElementById("afourone").style.backgroundColor="white"
                            document.getElementById("afourtwo").style.backgroundColor="white"
                        }
                        if(yellow==3){
                            document.getElementById("afourone").style.backgroundColor="white"
                            document.getElementById("afourtwo").style.backgroundColor="white"
                            document.getElementById("afourthree").style.backgroundColor="white"
                        }
                        if(yellow==4){
                            document.getElementById("afourone").style.backgroundColor="white"
                            document.getElementById("afourtwo").style.backgroundColor="white"
                            document.getElementById("afourfour").style.backgroundColor="white"
                            document.getElementById("afourthree").style.backgroundColor="white"
                        }
                        if(Red==1){
                            document.getElementById("afourfour").style.backgroundColor="Red"
                        }
                        if(Red==2){
                            document.getElementById("afourfour").style.backgroundColor="Red"
                            document.getElementById("afourthree").style.backgroundColor="Red"
                        }
                        if(Red==3){
                            document.getElementById("afourfour").style.backgroundColor="Red"
                            document.getElementById("afourthree").style.backgroundColor="Red"
                            document.getElementById("afourtwo").style.backgroundColor="Red"
                        }
                        if(Red==4){
                            document.getElementById("afourfour").style.backgroundColor="Red"
                            document.getElementById("afourthree").style.backgroundColor="Red"
                            document.getElementById("afourtwo").style.backgroundColor="Red"
                            document.getElementById("afourone").style.backgroundColor="Red"
                            console.log("Credits Appear Now")
                            End (Parameter=1)
                        }
                            }
                            
                                    
                                    if(done/4==5){
                                       
                                        if(yellow==1){
                                            document.getElementById("afiveone").style.backgroundColor="white"
                                        }
                                        if(yellow==2){
                                            document.getElementById("afiveone").style.backgroundColor="white"
                                            document.getElementById("afivetwo").style.backgroundColor="white"
                                        }
                                        if(yellow==3){
                                            document.getElementById("afiveone").style.backgroundColor="white"
                                            document.getElementById("afivetwo").style.backgroundColor="white"
                                            document.getElementById("afivethree").style.backgroundColor="white"
                                        }
                                        if(yellow==4){
                                            document.getElementById("afiveone").style.backgroundColor="white"
                                            document.getElementById("afivetwo").style.backgroundColor="white"
                                            document.getElementById("afivefour").style.backgroundColor="white"
                                            document.getElementById("afivethree").style.backgroundColor="white"
                                        }
                                        if(Red==1){
                                            document.getElementById("afivefour").style.backgroundColor="Red"
                                        }
                                        if(Red==2){
                                            document.getElementById("afivefour").style.backgroundColor="Red"
                                            document.getElementById("afivethree").style.backgroundColor="Red"
                                        }
                                        if(Red==3){
                                            document.getElementById("afivefour").style.backgroundColor="Red"
                                            document.getElementById("afivethree").style.backgroundColor="Red"
                                            document.getElementById("afivetwo").style.backgroundColor="Red"
                                        }
                                        if(Red==4){
                                            document.getElementById("afivefour").style.backgroundColor="Red"
                                            document.getElementById("afivethree").style.backgroundColor="Red"
                                            document.getElementById("afivetwo").style.backgroundColor="Red"
                                            document.getElementById("afiveone").style.backgroundColor="Red"
                                            console.log("Credits Appear Now")
                                            End (Parameter=1)
                                        }
                                            }
                                            if(done/4==6){
                                               
                                                if(yellow==1){
                                                    document.getElementById("asixone").style.backgroundColor="white"
                                                }
                                                if(yellow==2){
                                                    document.getElementById("asixone").style.backgroundColor="white"
                                                    document.getElementById("asixtwo").style.backgroundColor="white"
                                                }
                                                if(yellow==3){
                                                    document.getElementById("asixone").style.backgroundColor="white"
                                                    document.getElementById("asixtwo").style.backgroundColor="white"
                                                    document.getElementById("asixthree").style.backgroundColor="white"
                                                }
                                                if(yellow==4){
                                                    document.getElementById("asixone").style.backgroundColor="white"
                                                    document.getElementById("asixtwo").style.backgroundColor="white"
                                                    document.getElementById("asixfour").style.backgroundColor="white"
                                                    document.getElementById("asixthree").style.backgroundColor="white"
                                                }
                                                if(Red==1){
                                                    document.getElementById("asixfour").style.backgroundColor="Red"
                                                }
                                                if(Red==2){
                                                    document.getElementById("asixfour").style.backgroundColor="Red"
                                                    document.getElementById("asixthree").style.backgroundColor="Red"
                                                }
                                                if(Red==3){
                                                    document.getElementById("asixfour").style.backgroundColor="Red"
                                                    document.getElementById("asixthree").style.backgroundColor="Red"
                                                    document.getElementById("asixtwo").style.backgroundColor="Red"
                                                }
                                                if(Red==4){
                                                    document.getElementById("asixfour").style.backgroundColor="Red"
                                                    document.getElementById("asixthree").style.backgroundColor="Red"
                                                    document.getElementById("asixtwo").style.backgroundColor="Red"
                                                    document.getElementById("asixone").style.backgroundColor="Red"
                                                    console.log("Credits Appear Now")
                                                    End (Parameter=1)
                                                    
                                                }
                                                    }
                                                    if(done/4==7){
                                                    
                                                        if(yellow==1){
                                                            document.getElementById("asevenone").style.backgroundColor="white"
                                                        }
                                                        if(yellow==2){
                                                            document.getElementById("asevenone").style.backgroundColor="white"
                                                            document.getElementById("aseventwo").style.backgroundColor="white"
                                                        }
                                                        if(yellow==3){
                                                            document.getElementById("asevenone").style.backgroundColor="white"
                                                            document.getElementById("aseventwo").style.backgroundColor="white"
                                                            document.getElementById("aseventhree").style.backgroundColor="white"
                                                        }
                                                        if(yellow==4){
                                                            document.getElementById("asevenone").style.backgroundColor="white"
                                                            document.getElementById("aseventwo").style.backgroundColor="white"
                                                            document.getElementById("asevenfour").style.backgroundColor="white"
                                                            document.getElementById("aseventhree").style.backgroundColor="white"
                                                        }
                                                        if(Red==1){
                                                            document.getElementById("asevenfour").style.backgroundColor="Red"
                                                        }
                                                        if(Red==2){
                                                            document.getElementById("asevenfour").style.backgroundColor="Red"
                                                            document.getElementById("aseventhree").style.backgroundColor="Red"
                                                        }
                                                        if(Red==3){
                                                            document.getElementById("asevenfour").style.backgroundColor="Red"
                                                            document.getElementById("aseventhree").style.backgroundColor="Red"
                                                            document.getElementById("aseventwo").style.backgroundColor="Red"
                                                        }
                                                        if(Red==4){
                                                            document.getElementById("asevenfour").style.backgroundColor="Red"
                                                            document.getElementById("aseventhree").style.backgroundColor="Red"
                                                            document.getElementById("aseventwo").style.backgroundColor="Red"
                                                            document.getElementById("asevenone").style.backgroundColor="Red"
                                                            console.log("Credits Appear Now")
                                                            End (Parameter=1)
                                                        }
                                                            }
                                                            if(done/4==8){
                                                            
                                                                if(yellow==1){
                                                                    document.getElementById("aeightone").style.backgroundColor="white"
                                                                }
                                                                if(yellow==2){
                                                                    document.getElementById("aeightone").style.backgroundColor="white"
                                                                    document.getElementById("aeighttwo").style.backgroundColor="white"
                                                                }
                                                                if(yellow==3){
                                                                    document.getElementById("aeightone").style.backgroundColor="white"
                                                                    document.getElementById("aeighttwo").style.backgroundColor="white"
                                                                    document.getElementById("aeightthree").style.backgroundColor="white"
                                                                }
                                                                if(yellow==4){
                                                                    document.getElementById("aeightone").style.backgroundColor="white"
                                                                    document.getElementById("aeighttwo").style.backgroundColor="white"
                                                                    document.getElementById("aeightfour").style.backgroundColor="white"
                                                                    document.getElementById("aeightthree").style.backgroundColor="white"
                                                                }
                                                                if(Red==1){
                                                                    document.getElementById("aeightfour").style.backgroundColor="Red"
                                                                }
                                                                if(Red==2){
                                                                    document.getElementById("aeightfour").style.backgroundColor="Red"
                                                                    document.getElementById("aeightthree").style.backgroundColor="Red"
                                                                }
                                                                if(Red==3){
                                                                    document.getElementById("aeightfour").style.backgroundColor="Red"
                                                                    document.getElementById("aeightthree").style.backgroundColor="Red"
                                                                    document.getElementById("aeighttwo").style.backgroundColor="Red"
                                                                }
                                                                if(Red==4){
                                                                    document.getElementById("aeightfour").style.backgroundColor="Red"
                                                                    document.getElementById("aeightthree").style.backgroundColor="Red"
                                                                    document.getElementById("aeighttwo").style.backgroundColor="Red"
                                                                    document.getElementById("aeightone").style.backgroundColor="Red"
                                                                    console.log("Credits Appear Now")
                                                                    End (Parameter=1)
                                                                }
                                                                    }
                                                                    if(done/4==9){
                                                                    
                                                                        if(yellow==1){
                                                                            document.getElementById("anineone").style.backgroundColor="white"
                                                                        }
                                                                        if(yellow==2){
                                                                            document.getElementById("anineone").style.backgroundColor="white"
                                                                            document.getElementById("aninetwo").style.backgroundColor="white"
                                                                        }
                                                                        if(yellow==3){
                                                                            document.getElementById("anineone").style.backgroundColor="white"
                                                                            document.getElementById("aninetwo").style.backgroundColor="white"
                                                                            document.getElementById("aninethree").style.backgroundColor="white"
                                                                        }
                                                                        if(yellow==4){
                                                                            document.getElementById("anineone").style.backgroundColor="white"
                                                                            document.getElementById("aninetwo").style.backgroundColor="white"
                                                                            document.getElementById("aninefour").style.backgroundColor="white"
                                                                            document.getElementById("aninethree").style.backgroundColor="white"
                                                                        }
                                                                        if(Red==1){
                                                                            document.getElementById("aninefour").style.backgroundColor="Red"
                                                                        }
                                                                        if(Red==2){
                                                                            document.getElementById("aninefour").style.backgroundColor="Red"
                                                                            document.getElementById("aninethree").style.backgroundColor="Red"
                                                                        }
                                                                        if(Red==3){
                                                                            document.getElementById("aninefour").style.backgroundColor="Red"
                                                                            document.getElementById("aninethree").style.backgroundColor="Red"
                                                                            document.getElementById("aninetwo").style.backgroundColor="Red"
                                                                        }
                                                                        if(Red==4){
                                                                            document.getElementById("aninefour").style.backgroundColor="Red"
                                                                            document.getElementById("aninethree").style.backgroundColor="Red"
                                                                            document.getElementById("aninetwo").style.backgroundColor="Red"
                                                                            document.getElementById("anineone").style.backgroundColor="Red"
                                                                            console.log("Credits Appear Now")
                                                                            End (Parameter=1)
                                                                        }
                                                                            }
                                                                            if(done/4==10){
                                                                                
                                                                                if(yellow==1){
                                                                                    document.getElementById("atenone").style.backgroundColor="white"
                                                                                }
                                                                                if(yellow==2){
                                                                                    document.getElementById("atenone").style.backgroundColor="white"
                                                                                    document.getElementById("atentwo").style.backgroundColor="white"
                                                                                }
                                                                                if(yellow==3){
                                                                                    document.getElementById("atenone").style.backgroundColor="white"
                                                                                    document.getElementById("atentwo").style.backgroundColor="white"
                                                                                    document.getElementById("atenthree").style.backgroundColor="white"
                                                                                }
                                                                                if(yellow==4){
                                                                                    document.getElementById("atenone").style.backgroundColor="white"
                                                                                    document.getElementById("atentwo").style.backgroundColor="white"
                                                                                    document.getElementById("atenfour").style.backgroundColor="white"
                                                                                    document.getElementById("atenthree").style.backgroundColor="white"
                                                                                }
                                                                                if(Red==1){
                                                                                    document.getElementById("atenfour").style.backgroundColor="Red"
                                                                                }
                                                                                if(Red==2){
                                                                                    document.getElementById("atenfour").style.backgroundColor="Red"
                                                                                    document.getElementById("atenthree").style.backgroundColor="Red"
                                                                                }
                                                                                if(Red==3){
                                                                                    document.getElementById("atenfour").style.backgroundColor="Red"
                                                                                    document.getElementById("atenthree").style.backgroundColor="Red"
                                                                                    document.getElementById("atentwo").style.backgroundColor="Red"
                                                                                }
                                                                                if(Red==4){
                                                                                   
                                                                                    document.getElementById("atenfour").style.backgroundColor="Red"
                                                                                    document.getElementById("atenthree").style.backgroundColor="Red"
                                                                                    document.getElementById("atentwo").style.backgroundColor="Red"
                                                                                    document.getElementById("atenone").style.backgroundColor="Red"
                                                                                    console.log("Credits Appear Now")
                                                                                    End (Parameter=1)
                                                                                }
Red=0
yellow=0
End(Parameter=0)
}     
}



function End (Parameter){
    if (player==1){
if(Parameter==1){
    done=0
    window.location.href = "win.html"
    
} else {
    if(done==40){
        window.location.href = "lose.html"
        console.log("L")
    }
}
    }
if (player==2){
    if(Parameter==1){
        done=0
TwoWin()
    }else {
        if(done==40){
            done=0
OneWin()
        }
    }
}

}



function SUI(){
    excuse = document.getElementById("plone").value
    excuseme = document.getElementById("pltwo").value
    document.getElementById("begining").style.display="none"
    document.getElementById("mid").style.display="block"
    document.getElementById("title").innerText="Choose your code."
    console.log("HOLAMIGOS")
}

function DONED (colored) {
    doneed++
    if(doneed==1){
document.getElementById("codeone").style.backgroundColor=colored
    }
if(doneed==2){
        document.getElementById("codetwo").style.backgroundColor=colored
            }
if(doneed==3){
                document.getElementById("codethree").style.backgroundColor=colored
                    }
if(doneed==4){
                      document.getElementById("codefour").style.backgroundColor=colored
                            }
}

function XED (){
    if(doneed!==0){
        doneed--
        DONED(colored='white')
        doneed--
    }
}
function Played (){
codeone=document.getElementById("codeone").style.backgroundColor
codetwo=document.getElementById("codetwo").style.backgroundColor
codethree=document.getElementById("codethree").style.backgroundColor
codefour=document.getElementById("codefour").style.backgroundColor
if(codeone=="red"){
    codeone=1
}else if(codeone=="yellow"){
    codeone=2
}else if(codeone=="green"){
    codeone=3
}else if(codeone=="orange"){
    codeone=4
}else if(codeone=="black"){
codeone=5
}else if(codeone=="pink"){
    codeone=6
    }else{
        codeone=""
    }
    if(codetwo=="red"){
        codetwo=1
    }else if(codetwo=="yellow"){
        codetwo=2
    }else if(codetwo=="green"){
        codetwo=3
    }else if(codetwo=="orange"){
        codetwo=4
    }else if(codetwo=="black"){
    codetwo=5
    }else if(codetwo=="pink"){
        codetwo=6
        }else{
            codetwo=""
        }
        if(codethree=="red"){
            codethree=1
        }else if(codethree=="yellow"){
            codethree=2
            console.log("Sub")
            console.log(subthree+"bruh")
        }else if(codethree=="green"){
            codethree=3
        }else if(codethree=="orange"){
            codethree=4
            console.log("Ahem")
        }else if(codethree=="black"){
        codethree=5
        }else if(codethree=="pink"){
            codethree=6
            } else{
                codethree=""
            }
             if(codefour=="red"){
                codefour=1
            }else if(codefour=="yellow"){
                codefour=2
                console.log(subthree+"brumh")
            }else if(codefour=="green"){
                codefour=3
            }else if(codefour=="orange"){
                codefour=4
            } else if(codefour=="black"){
            codefour=5
            } else if(codefour=="pink"){
                codefour=6
                }else{
                    codefour=""
                }
if(codeone==codetwo || codeone==codethree || codeone==codefour || codetwo==codefour || codetwo==codethree || codethree==codefour){
    window.alert("You can't have two of the same color")

}else if(codeone=="" || codetwo=="" || codethree=="" || codefour==""){
window.alert("You can't leave any blank")
console.log("WAKa")
}else {
    document.getElementById("mid").style.display="none"
    document.getElementById("title").style.display="none"
    document.getElementById("id").style.display="none"
    document.getElementById("end").style.display="block"

}
}

function TwoWin() {
    document.getElementById("winnner").style.display="block"
    document.getElementById("end").style.display="none"
    document.getElementById("Beat").innerHTML=excuseme + " wrecked " + excuse
    console.log("HOYAH")
}
function OneWin() {
    document.getElementById("winnner").style.display="block"
    document.getElementById("end").style.display="none"
    document.getElementById("Beat").innerHTML=excuse + " wrecked " + excuseme
}