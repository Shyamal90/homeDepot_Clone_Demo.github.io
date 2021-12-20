let count1=0;
    function showGif(){
        if(count1%2==0){
            let inp=document.createElement("input");
            inp.setAttribute("type","checkbox")
            document.querySelector("#gif").append(inp," In Stock at Store Today");
        }else{
            document.querySelector("#gif").textContent="";
        }
        count1++;
    }
let count2=0;
    function showAvail(){
        if(count2%2==0){
            let inp=document.createElement("input");
            inp.setAttribute("type","checkbox");
            document.querySelector("#avail").append(inp," Hide Unavailable Products");
        }else{
            document.querySelector("#avail").textContent="";
        }
        count2++;
    }
    let count3=0;
    function showBran(){
        if(count3%2==0){
            let inp1=document.createElement("input");
            inp1.setAttribute("type","checkbox");
            let inp2=document.createElement("input");
            inp2.setAttribute("type","checkbox");
            let inp3=document.createElement("input");
            inp3.setAttribute("type","checkbox");
            let inp4=document.createElement("input");
            inp4.setAttribute("type","checkbox");
            let inp5=document.createElement("input");
            inp5.setAttribute("type","checkbox");
            let br1=document.createElement("br");
            let br2=document.createElement("br");
            let br3=document.createElement("br");
            let br4=document.createElement("br");
            let br5=document.createElement("br");
            document.querySelector("#brand").append(inp1," Home Decorators Collection",br1,inp2," Noble House",br2,inp3," Home Roots",br4,inp4," Jennifer Taylor",br5,inp5," US Pride Furniture");
        }else{
            document.querySelector("#brand").textContent="";
        }
        count3++;
    }
    let count4=0;
    function showstyle(){
        if(count4%2==0){
            let inp1=document.createElement("input");
            inp1.setAttribute("type","checkbox");
            let inp2=document.createElement("input");
            inp2.setAttribute("type","checkbox");
            let inp3=document.createElement("input");
            inp3.setAttribute("type","checkbox");
            let inp4=document.createElement("input");
            inp4.setAttribute("type","checkbox");
            let inp5=document.createElement("input");
            inp5.setAttribute("type","checkbox");
            let br1=document.createElement("br");
            let br2=document.createElement("br");
            let br3=document.createElement("br");
            let br4=document.createElement("br");
            let br5=document.createElement("br");
            document.querySelector("#style").append(inp1," Modern",br1,inp2," Traditional",br2,inp3," Classic",br4,inp4," Contemporary",br5,inp5," Mid-Century");
        }else{
            document.querySelector("#style").textContent="";
        }
        count4++;
    }

    let count5=0;
    function showDep(){
      if(count5%2==0){
        let inp1=document.createElement("input");
            inp1.setAttribute("type","checkbox");
            let inp2=document.createElement("input");
            inp2.setAttribute("type","checkbox");
            
            let inp3=document.createElement("input");
            inp3.setAttribute("type","checkbox");
            let br1=document.createElement("br");
            let br2=document.createElement("br");
            document.querySelector("#department").append(inp1," Accent Chairs",br1,inp2," Bean Bag Chairs",br2,inp3," Media Seating");
      }else{
        document.querySelector("#department").textContent="";
      }
      count5++;
    }
let count6=0;
function showPrc(){
  if(count6%2==0){
    let inp1=document.createElement("input");
    inp1.setAttribute("type","checkbox");
    let inp2=document.createElement("input");
    inp2.setAttribute("type","checkbox");
    let inp3=document.createElement("input");
    inp3.setAttribute("type","checkbox");
    let inp4=document.createElement("input");
    inp4.setAttribute("type","checkbox");

    let br1=document.createElement("br");
    let br2=document.createElement("br");
    let br3=document.createElement("br");

    document.querySelector("#prc").append(inp1," $20 - $30",br1,inp2," $30 - $40",br2,inp3," $40 - $50",br3,inp4," $50 - $60")

  }else{
    document.querySelector("#prc").textContent="";
  }
  count6++;
}