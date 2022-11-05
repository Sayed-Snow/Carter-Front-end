function ratingColour(value){
    var text;
    if(value===0){
        text = "grey";
    } 
    if(value <50 && value>=1){
        text = "red";
    }
     if(value >= 50 && value<70){
        text = "yellow";
    }
    if(value >= 70){
        text = 'lawngreen';
    }
    return text;
    }

    export default ratingColour;