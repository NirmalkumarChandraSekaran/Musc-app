const api="https://musicapi.x007.workers.dev/search?q=="
const key="&searchEngine=mtmusic&lang=tn"
async function fetchsong()
{
    var title=document.getElementById('songtitle').value
    console.log(title)
    console.log(api+title+key)
    const  response = await fetch(api+title+key);

    const data = await response.json()
    console.log(data)
    console.log(data.response[0].title)

    var card=""

    for(var i=0;i<data.response.length;i++)
    {
        console.log(data.response[i].id)
        card+='<div class="card1">'
        +'<div class="card" style="width:22rem;">'
        +'<img src="'+data.response[i].img +'"class="card-img-top" alt="image-not-available" style="width:22rem;" style="height:18rem"'
        +'<div class="card-body">'
        +'<h5 class="card-title">'+data.response[i].title+'</h5>'
        +'</div>'
        +'<audio controls>'
        +'<source src="https://musicapi.x007.workers.dev/fetch?id='+data.response[i].id+'" type="audio/mpeg">'
        +'</audio>'
        +'</div>'
    }
    document.getElementById("content").innerHTML=card;
 }