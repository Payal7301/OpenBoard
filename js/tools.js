    // default option is square
    let option="pencil";

    // color changer
    red.addEventListener("click",()=>{
     tool.strokeStyle="red";
    })
    blue.addEventListener("click",()=>{
     tool.strokeStyle="blue";
    })
    green.addEventListener("click",()=>{
     tool.strokeStyle="green";
    })
    
     // no change in eraseall bcoz it is same as size donot changes
     eraseAllclk.addEventListener("click",()=>{
        option="eraseAll"

    })


// events

// all functionalities before size change
    // square.addEventListener("click",()=>{
    //     option="square";
    //     tool.strokeStyle="black";

    // })
    // line.addEventListener("click",()=>{
    //     option="line";
    //     tool.strokeStyle="black";

    // })
    
    // pencil.addEventListener("click",()=>{
    //     option="pencil";
    //     tool.strokeStyle="black";

    // })
    // erase.addEventListener("click",()=>{
    //     option="erase"
    //     tool.strokeStyle="white";
    // })

   
// after size change 
square.addEventListener("click", (e) => {
    tool.strokeStyle="black";
    tool.lineWidth=1;
    if (option == "square") {
        boxArr[0].style.display = "flex";
    }else {
    option = "square";
    tool.strokeStyle="black";
    console.log(option)
    for (let i = 0; i < boxArr.length; i++) {
        boxArr[i].style.display = "none";
    }
    }
    })

line.addEventListener("click", (e) => {
    tool.strokeStyle="black";
    tool.lineWidth=1;
    if (option == "line") {
        boxArr[1].style.display = "flex";
    }else {
    option = "line";
    tool.strokeStyle="black";
    console.log(option)
    for (let i = 0; i < boxArr.length; i++) {
        boxArr[i].style.display = "none";
    }
    }
    })

pencil.addEventListener("click", (e) => {
    tool.strokeStyle="black";
    tool.lineWidth=1;

    if (option == "pencil") {
        boxArr[2].style.display = "flex";
    }else {
    option = "pencil";
    tool.strokeStyle="black";
    console.log(option)
    for (let i = 0; i < boxArr.length; i++) {
        boxArr[i].style.display = "none";
    }
    }
    })

erase.addEventListener("click", (e) => {
    tool.strokeStyle="white";
    tool.lineWidth=1;

    if (option == "erase") {
        boxArr[3].style.display = "flex";
    }else {
    option = "erase";
    tool.strokeStyle="black";
    console.log(option)
    for (let i = 0; i < boxArr.length; i++) {
        boxArr[i].style.display = "none";
    }
    }
    })