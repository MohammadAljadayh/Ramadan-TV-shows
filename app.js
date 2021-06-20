alert ("Welecom to Ramadan-TV-shows")
var name =prompt("Whats Your Name");
alert ("Welecom"+" "+ name)


function addStars(stars)
{
for(var i=0;i<stars;i++)
{
document.write("<img class='stars' src='https://emojigraph.org/media/google/star_2b50.png' >")
}
}



function tvShows () {
var bestTV= prompt("What you think  the best tv shows in ramadan 1- Nasel alagrab 2-alnemer  3-musa"); 
alert (" your are  choise" + " " + bestTV ); 

console.log("the user choice the"+ " " + bestTV );

while (bestTV!="Nasel alagrab" && bestTV!="alnemer" && bestTV!="musa" )
{
bestTV=prompt(" Your choice wrong " + "Please select Just one of three choices 1- Nasel alagrab 2-alnemer 3-musa")
}

if (bestTV=="Nasel alagrab")
{
  var nofPic=prompt("How Many Time you Want to See Youre Tv Shows Picture ") 
    var nOfStars=prompt('Enter Number of  Rating from 1 to 5')
  for (var x=0;x<nofPic;x++)
  { 

  document.write("<div>"+ "<h2> Nasl El Aghrab </h2>" + 
  "<img src='https://stepagency-sy.net/nfiles/2021/04/2042021-20-1.jpg' >" + "<p> Amir Karara comes back with yet another show this year, and will continue to impress his audience, except this year he is in a powerful duo with Ahmed El Sakka. If you are a fan of both then you are in luck. In addition to that, they have a great female lead character joining, Mai Omar after her latest big success “Loloa” in 2020, she is coming back to TV.</p> "+"</div>" );
    addStars(nOfStars);

}

}
else if(bestTV=="alnemer")
{
{

  var nofPic=prompt("How Many Time you Want to See Youre Tv Shows Picture ") 
    var nOfStars=prompt('Enter Number of  Rating from 1 to 5')
  for (var x=0;x<nofPic;x++)
  { 
    document.write("<div>" + "<h2> El Nemr</h2>" +
  "<img src='https://mediaaws.almasryalyoum.com/news/large/2021/03/07/1481269_0.jfif '> " + "<p> Mohamed Emam has brought us the story of an upper young Egyptian man that escapes to Cairo and gets into an accident that causes his memory loss. Follow his adventures and the way he meets Hannah el Zahed.  </p> " +" </div>" )
    addStars(nOfStars);

  }

}
}
else if (bestTV=="musa")
{
  var nofPic=prompt("How Many Time you Want to See Youre Tv Shows Picture ") 
  var nOfStars=prompt('Enter Number of  Rating from 1 to 5')
  for (var x=0;x<nofPic;x++)
  { 
    document.write("<div>" + "<h2>Mousa </h2>" +
  "<img src='https://mosalsalateonline.com/wp-content/uploads/2021/03/%D9%85%D9%84%D8%AD%D9%85%D8%A9-%D9%85%D9%88%D8%B3%D9%89.jpg' >" + "<p> Mohamed Ramadan is back again with a new character, new idea, and ready to impress everyone again with his great talent. Let’s see if he will steal the spotlight again this Ramadan just like he did last year with his great hit “El Brens” </p> "+"</div>" );
  addStars(nOfStars);
  
  }

}
}

tvShows ()





