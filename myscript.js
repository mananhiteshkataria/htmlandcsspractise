function handleClick()
{
    alert('handleClick is called');
}
function changeColor()
{
    let c1=document.getElementById('p1');
    let c2=document.getElementById('p2');
    // c1 and c2 are objects with many inbuilt properties
    // some properties are style,innerHtml,text or so on

    c1.style.color='red' ;  //p1 will get red color
    c1.style.backgroundColor='green'; //p1 background will be green

    c2.style.color='blue'; //p2 color blue
    c2.style.backgroundColor='yellow'// p2 background color yellow
}

/*

Javascript Drawbacks

1. javascript is not type safe
2. javascript is not compiled to find the early errors
3. Javascript results are not reliable as the data is not type safe

*/
