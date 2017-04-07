



window.onload = function Load()
{
   
    //loop through each infoButton on page

    for (var j=0; j<4; j++)
        {
            var infoButton = document.getElementsByClassName("infoButton")[j];
            infoButton.addEventListener("click", getMoreInfo);
    		infoButton.innerHTML="Learn More";//example if I want to change button text through js
            
        }
    
}



function getMoreInfo(event)
{
	alert("Call 216-555-5555 for more information on this tour.")
}


