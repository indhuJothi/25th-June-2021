function res(){
    var fromdiv=document.createElement('div');
    fromdiv.classList.add('fromdiv');
    var fromplaces=['chennai','Madurai','Trichy'];
    var fromselect=document.createElement('select');
    fromselect.classList.add('template');
    fromselect.setAttribute('id','fromselect');
   
    // fromdiv.appendChild(fromerr);
    for(var i=0;i<fromplaces.length;i++)
    {
        var option=document.createElement('option');
        option.value=fromplaces[i];
        option.text=fromplaces[i];
        fromselect.appendChild(option);
    }
    var fromerr=document.createElement('div');
    fromerr.classList.add('fromErr');
    fromerr.classList.add('error');
    fromdiv.appendChild(fromselect);
    fromdiv.appendChild(fromerr);
    var todiv=document.createElement('div');
    todiv.classList.add('todiv');
    var toplaces=['Bangalore','cuddalore','coimbatore'];
    var toselect=document.createElement('select');
    toselect.classList.add('template');
    toselect.setAttribute('id','toselect');
    for(var i=0;i<toplaces.length;i++)
    {
        var option=document.createElement('option');
        option.value=toplaces[i];
        option.text=toplaces[i];
        toselect.appendChild(option);
    }
    var toerr=document.createElement('div');
    toerr.classList.add('toErr');
    toerr.classList.add('error');
    todiv.appendChild(toselect);
    todiv.appendChild(toerr);
    var from=document.createElement('input');
    from.setAttribute('type','text');
    from.setAttribute('id','from');
    from.classList.add('yesadd');
    var to=document.createElement('input');
    to.setAttribute('type','select');
    to.setAttribute('id','to');
    to.classList.add('yesadd');
    var add=document.getElementById('add');
    var newlabel = document.createElement("Label");
    var Tolabel=document.createElement('label');
    var countlabel=document.createElement('label');
    Tolabel.setAttribute('for','To');
    Tolabel.innerHTML="To: "
    Tolabel.appendChild(todiv);
    newlabel.setAttribute("for",'From');
    newlabel.innerHTML = "From: ";
    newlabel.appendChild(fromdiv);
    var countdiv=document.createElement('div');
    countdiv.classList.add('template');
    var count=document.createElement('input');
    count.classList.add('count');
    count.setAttribute('type','number');
    count.setAttribute('min',1);
    count.setAttribute('max',10);
    countlabel.setAttribute('for','count');
    countlabel.innerHTML='count';
    var counterr=document.createElement('div');
    counterr.classList.add('error');
    countdiv.appendChild(count);
    countdiv.appendChild(counterr);
    countlabel.appendChild(countdiv);
    
    add.appendChild(countlabel);
    add.appendChild(newlabel);
    add.appendChild(Tolabel);
  

}
function res1(){
    alert('Hi')
}
