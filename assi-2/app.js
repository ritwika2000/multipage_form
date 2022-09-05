let currtab=0;
showtab(currtab);

function showtab(n)
{
  var x=document.getElementsByClassName('tab');
  var z=document.getElementsByClassName('tab').length;
 // var butt=document.getElementsByClassName('buttonclass');
 // butt.style.display='block';
  x[n].style.display='block';
  if(n==0)
  {
    document.getElementById('prevbutton').style.display='None';
  }
  else
  {
    document.getElementById('prevbutton').style.display='block';
  }

  if(n == (z - 1))
  {
    document.getElementById('nextbutton').innerHTML='Submit';
  }
  else
  {
    document.getElementById('nextbutton').innerHTML='next';
  }
  
}

function nextPrev(n)
{
  
   var x=document.getElementsByClassName('tab');
   if(n==1 && !validateform()) return false;

   x[currtab].style.display='none';
   currtab=currtab+n;

   if(currtab==x.length)
   {
    var button=document.getElementById('prevbutton');
    button.style.visibility='hidden';
    var but=document.getElementById('nextbutton');
    but.style.visibility='hidden';
    alert("Congratulations, You successfully submitted the form !!");
    document.getElementById("regForm").submit();
    return false;
   }
   showtab(currtab);
}

function validateform()
{
  let x,y,valid=true;
  x=document.getElementsByClassName('tab');
  y=x[currtab].getElementsByTagName('input');
  for(let i=0;i<y.length;i++ )
  {
    if(y[i].value=='')
    {
        valid=false;
    }
  }

  if(!valid)
  {
    alert("please fill all fields!!");
  }
  

  return valid;
}

function addressfunction()
{
    if(document.getElementById('exampleCheck1').checked )
    {
        document.getElementById('present_address').value=document.getElementById('per_address').value;
    }
    else
    {
        document.getElementById('present_address').value="";
    }
}

