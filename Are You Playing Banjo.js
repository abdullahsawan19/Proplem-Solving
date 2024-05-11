function areYouPlayingBanjo(name) {
    if(name.startsWith("R")){
        return name + " plays banjo" 
    }else if(name.startsWith("r")){
        return name + " plays banjo" 
    }else{
        return name + " does not play banjo"
    }
}


function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
    } else {
    return name + ' does not play banjo';
    }
}

function areYouPlayingBanjo(name) {
    return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
}

function areYouPlayingBanjo(name) {
    if (name[0] == 'R' || name[0] == 'r')
    return name + " plays banjo";
    else
    return name + " does not play banjo";
}
console.log(areYouPlayingBanjo("Rana"))