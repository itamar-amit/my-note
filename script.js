
let checklang = sessionStorage.getItem("lang")
let bgcImg = sessionStorage.getItem("image")
let notes = []
let save = document.querySelector("#save")
let reseFt = document.querySelector("#reseFt")

window.onload = function()
{
    firstImg()
    HeLang()
    EnLang()
    firstLanguage()
    loadData()
    copyNotes(notes)
}

function firstLanguage()
{
    let x = checklang  
    if(x==null || x == "true" )
    {
        x = true
        sessionStorage.setItem("lang",true)
        Hebrow.checked = "checked"
        HeLang();
    }
    else
    {
        x = false
        sessionStorage.setItem("lang",false)
        Engilsh.checked = "checked"
        EnLang();
    }
}


Hebrow.addEventListener("click", function()
{
    sessionStorage.setItem("lang", true)
    HeLang();
    location.reload();
})

Engilsh.addEventListener("click", function(){
    sessionStorage.setItem("lang", false)
    EnLang();
    location.reload();
})

function HeLang()
{
    all_site.style="direction: rtl;"
    title.innerHTML = "המשימות שלי"
    dataDis.innerHTML = "נא הכנס את פרטי המשימה"
    data.placeholder = "הערה . . ."
    dateDis.innerHTML = "נא הכנס תאריך:"
    timeDis.innerHTML = "נא הכנס שעה:"
    save.innerHTML = "שמירה"
    reseFt.innerHTML = "איפוס"
    dataNote = "תזכורת: "
    dateNote = "תאריך: "
    timeNote = "שעה: "
    btnNote="מחיקה"
    bgcB.innerHTML="מצב לילה"
}

function EnLang()
{
    all_site.style="direction: ltr;"
    title.innerHTML = "My Tasks"
    dataDis.innerHTML = "Please insert your dada"
    data.placeholder = "Task details . . ."
    dateDis.innerHTML = "Please insert data"
    timeDis.innerHTML = "Please insert time"
    save.innerHTML = "save"
    reseFt.innerHTML = "clear"
    dataNote = "Data: "
    dateNote = "Date: "
    timeNote = "Time: "
    btnNote = "Delete "
    bgcB.innerHTML = "Dark Mode"
    
}

function loadData()
{
    let temp
    for(let i = 0; i < localStorage.length; i++)
    {
        temp = localStorage.getItem(i,temp)
        notes [i] = JSON.parse(temp)
    }
}

function copyNotes(notes)
{
    let i = 0
    while (i < notes.length)
    {
        let btn = document.createElement("button")
        btn.setAttribute("id",i)
        btn.setAttribute("class","myDelet")
        btn.textContent = btnNote
        btn.addEventListener("click",function(e)
        {
            deleteNote(e)
        })

        let divNote = document.createElement("div")
        divNote.setAttribute("class","divNote")
        let x = document.createElement("h3")
        let y = document.createElement("h3")
        let z = document.createElement("h3")

        let data = document.createTextNode(dataNote + notes[i].data)
        let date = document.createTextNode(dateNote + notes[i].date)
        let time = document.createTextNode(timeNote + notes[i].time)
        x.appendChild(data)
        y.appendChild(date)
        z.appendChild(time)
        divNote.appendChild(x)
        divNote.appendChild(y)
        divNote.appendChild(z)
        divNote.appendChild(btn)
        all_notes.appendChild(divNote)
        i++
    }
}

function deleteNote(e)
{
    localStorage.removeItem(e.target.id)
    let ele = e.target.id
    if(notes.length==1)
    {
       notes = notes.splice(ele,ele)
    }
    else
    {
       notes = notes.splice(ele,ele+1)
    }
    localStorage.clear()
    for(let i = 0; i < notes.length; i++)
        {
            localStorage.setItem(i,JSON.stringify(notes[i]));
        }
    location.reload()
}

save.addEventListener("click",function(e)
{
    addData(e)
})

function addData(e)
{
    e.preventDefault()
    if (!data.value == "" && !date.value == "" && !time.value == "")
    {
        notes.push({"data":data.value, "date":date.value, "time":time.value})

        for(let i = 0; i < notes.length; i++)
        {
            localStorage.setItem(i,JSON.stringify(notes[i]));
        }

        location.reload()
    }
    else
    {
        alert("Miising Info")
    }
}

reseFt.addEventListener("click", function(e)
{
    rmData(e)
})

function rmData(e)
{
    form.reset()
    e.preventDefault()
}



function firstImg()
{
    let x = bgcImg  
    if(x==null || x == "true" )
    {
        bgcImg = true
        sessionStorage.setItem("image",true)
        dark()
    }
    else
    {
        bgcImg = false
        sessionStorage.setItem("image",false)
        dark()
    }
}

function dark()
{
    if(bgcImg == true)
    {
        sessionStorage.setItem("image",true)
        body.style.backgroundImage = "url(imeges/11.jpg)"
        bgcImg = false;
        title.style.color="black"
        xx.style.color="black"
        xx2.style.color="black"
        dateDis.style.color="black"
        timeDis.style.color="black"

        if(checklang=="true" || checklang==null){
            bgcB.innerHTML = "מצב לילה"
        }
        else{
            bgcB.innerHTML = "Dark Mode"
        }
    }
    else
    {
        sessionStorage.setItem("image",false)
        body.style.backgroundImage = "url(imeges/12.jpg) "
        bgcImg = true
        title.style.color="white"
        xx.style.color="white"
        xx2.style.color="white"
        dateDis.style.color="white"
        timeDis.style.color="white"

        if(checklang=="true" || checklang==null){
            bgcB.innerHTML = "מצב יום"
        }
        else{
            bgcB.innerHTML ="White Mode"
        }

     
    }
}