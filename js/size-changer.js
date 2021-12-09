// code for size change using event bubbling
// code fordisplaying sizes is in tools bcoz it depends on each entity
// box 0 for square
    box[0].addEventListener("click",(e)=>{
            let values=["c1","c2","c3","c4"];
            let arr=e.target.classList;
            let class_=arr[1];
            if(values.includes(class_)){
                if(class_=="c1"){
                    tool.lineWidth=1;
                }else if(class_=="c2"){
                    tool.lineWidth=3;
                }else if(class_=="c3"){
                    tool.lineWidth=5;
                }else if(class_=="c4"){
                    tool.lineWidth=8;
                }
            }
        })

// box 1 for line
    box[1].addEventListener("click",(e)=>{
            let values=["c1","c2","c3","c4"];
            let arr=e.target.classList;
            let class_=arr[1];
            if(values.includes(class_)){
                 if(class_=="c1"){
                    tool.lineWidth=1;
                }else if(class_=="c2"){
                    tool.lineWidth=3;
                }else if(class_=="c3"){
                    tool.lineWidth=5;
                }else if(class_=="c4"){
                    tool.lineWidth=8;
                }
            }
        })

// box 2 for pencil
         box[2].addEventListener("click",(e)=>{
            let values=["c1","c2","c3","c4"];
            let arr=e.target.classList;
            let class_=arr[1];
            if(values.includes(class_)){
                 if(class_=="c1"){
                    tool.lineWidth=1;
                }else if(class_=="c2"){
                    tool.lineWidth=3;
                }else if(class_=="c3"){
                    tool.lineWidth=5;
                }else if(class_=="c4"){
                    tool.lineWidth=8;
                }
            }
        })
// box 3 for eraser
        box[3].addEventListener("click",(e)=>{
            let values=["c1","c2","c3","c4"];
            let arr=e.target.classList;
            let class_=arr[1];
            if(values.includes(class_)){
                if(class_=="c1"){
                    tool.lineWidth=5;
                }else if(class_=="c2"){
                    tool.lineWidth=10;
                }else if(class_=="c3"){
                    tool.lineWidth=15;
                }else if(class_=="c4"){
                    tool.lineWidth=20;
                }
            }
        })


