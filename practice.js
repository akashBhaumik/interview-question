function passOrFail(n){
    switch(true){
        case(n >=80 && n <= 100) : 
        // console.log("you are 1st division");
        return "you are 1st division"
        case(n>=50 && n <= 79) : 
        // console.log("you are 2nd division");
        return "you are 2nd division"
        case(n >= 30 && n <= 49) :
        // console.log("you are third division");
        return "you are third division"
        case(n<=29) :
        // console.log("you are fail");
        return "you are fail"
        case(n!=Number) :
        // console.log("please enter valid number")
        return "please enter valid number"

    }
}
 console.log(passOrFail(65))