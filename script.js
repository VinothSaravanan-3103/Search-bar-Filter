document.getElementById("si").addEventListener('sea',seafun)

function seafun()
{
    var a= document.querySelectorAll('li');
    var i;
    for (i=0;i<a.length;i++)
    {
        
        var v=document.getElementById("si").value.toLowerCase();
        if(a[i].innerHTML.toLowerCase().indexOf(v)!=-1)
        {
          
            a[i].style.display='block';
        }
        else
        {
            a[i].style.display='none';
        }
    }
}