let stickybtn=document.querySelector(".fa-sticky-note");

        stickybtn.addEventListener("click",(e)=>{
            let sticky=document.createElement("div");
            sticky.setAttribute("class","sticky");
            sticky.innerHTML=`<div class="menu">
            <div class="minimize"></div>
            <div class="close"></div>
            </div>
            
            <textarea ></textarea>
            `;
            body.appendChild(sticky);
            let minimize=document.querySelector(".minimize");
            let text=document.querySelector("textarea");
            let close=document.querySelector(".close");

            minimize.addEventListener("click",()=>{
                text.style.display="none";
            })
            close.addEventListener("click",()=>{
                sticky.remove();
            })
        })