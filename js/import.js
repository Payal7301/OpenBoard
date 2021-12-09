// ********************************************BOARD*****************************************************
    // selected board
    let board=document.querySelector("canvas");
    let tool=board.getContext("2d");
    // by default canvas height and width is small
    board.height=window.innerHeight;
    board.width=window.innerWidth;
    // board.height="100vw";
    // board.width="100vh";


    // top difference from wholedocument
    const canvastop = board.getBoundingClientRect().top;
    tool.lineJoin = "bevel"
    // object tells about properties of board
    // console.log(board.getBoundingClientRect());

    let stx,sty,enx,eny;//start and end index of rectangle
    // tool.fillStyle="grey";
    // tool.fillRect(0,0,300,300);
    // tool.strokeStyle="red"
    // tool.strokeRect(10,10,300,300);


    // selection section
    let square=document.querySelector(".fa-square");
    let line=document.querySelector(".fa-grip-lines");
    let eraseAllclk=document.querySelector(".fa-circle-notch")
    let erase=document.querySelector(".fa-eraser")
    let body=document.querySelector("body");
    let red=document.querySelector(".red");
    let blue=document.querySelector(".blue");
    let green=document.querySelector(".green");
    let pencil=document.querySelector(".fa-pencil-alt");
    let boxArr = document.querySelectorAll(".box");
    let box=document.querySelectorAll(".box");

