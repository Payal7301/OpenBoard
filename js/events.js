let pencilMode=false;

    // mouse down works for coordinates and line tool and square tool as well 
    // but for square tool it only provides coordinates and for line 
    body.addEventListener("mousedown",(e)=>{
        
        stx=e.clientX;
        sty=e.clientY-canvastop;
        if(option=="pencil"||option=="erase"){
        tool.beginPath();
        tool.moveTo(stx,sty)
        pencilMode=true;
        }
    })
// mouse move works only when we have pencil tool
    body.addEventListener("mousemove",(e)=>{
        if(pencilMode==false)return;

        if(option=="pencil"||option=="erase"){
        enx=e.clientX;
        eny=e.clientY-canvastop;
        tool.beginPath();
        tool.moveTo(stx,sty);
        tool.lineTo(enx,eny);
        tool.stroke();
        stx=enx;
        sty=eny;
        }
    })

    body.addEventListener("mouseup",(e)=>{
    enx=e.clientX;
    eny=e.clientY-canvastop;
    fx=enx-stx;//final x
    fy=eny-sty;//final y
     if(option==="square"){
    tool.strokeRect(stx,sty,fx,fy);
    }else if(option=="line"){
        tool.beginPath();
        tool.moveTo(stx,sty);
        tool.lineTo(enx,eny);
        tool.stroke();
    }else if(option=="eraseAll"){
        tool.clearRect(0, 0, board.width, board.height);
    }else if(option=="pencil"||option=="erase"){
         pencilMode=false;
    }
    })