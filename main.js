

document.getElementById("one").addEventListener("mouseover", function() {
     document.getElementById("one").style.backgroundColor = "orange";
    
      
}
                                                       
);

document.getElementById("two").addEventListener("mouseover", function() {
     document.getElementById("two").style.backgroundColor = "orange";
        
}
                                                       
);

document.getElementById("three").addEventListener("mouseover", function() {
     document.getElementById("three").style.backgroundColor = "orange";
      
}
                                                       
);


document.getElementById("one").addEventListener("click", function() {
    alert("Oooh - so close, but no cigar");
    
     document.getElementById("hide").style.display = "inline";
}
                                                       
);

document.getElementById("two").addEventListener("click", function() {
    alert("DING DING DING - We have a winner");
    
    document.getElementById("hide").style.display = "inline";
}
                                                       
);
          
document.getElementById("three").addEventListener("click", function() {
    alert("Oops, butter luck next time");
    
      document.getElementById("hide").style.display = "inline";
}
                                                       
);






