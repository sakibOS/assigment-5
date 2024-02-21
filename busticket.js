//ticket buy start-->
function start(){
    const headerSection=addClass('head');
    const mainSection=removeClass('main');
}
let seatAvailable=40;
let bookSeat=0;
let total=0;

//seat choose-->
 const seats=document.getElementsByClassName('seat');
 for(const seat of seats){
    seat.addEventListener("click",function buySeat(seat){

         //final buy success-->
        document.getElementById('input-number').addEventListener('keyup',function finalSuccess(event){
            const text=event.target.value;
            const success=document.getElementById('next');
            if(text.length===11){    
            success.removeAttribute('disabled');
           } 
           else{
            success.setAttribute('disabled',true);
           }
           });
        
        //sit buy limit and enable to offer button-->
         const bookingSeat=document.getElementById('book-seat').innerText;
         const valueSeat=parseInt(bookingSeat);
        
        //enable to offer button-->
        if(valueSeat===3){
            const offerButton=document.getElementById('offer-button');
            offerButton.removeAttribute('disabled');
         };

         //not more than buy 5 ticket-->
        if(valueSeat>4){
            alert('buy ticket enough');
            return;
        };
         
        //booking seat-->
        bookSeat+=1;
        setInnerText('book-seat',bookSeat);
        
        //available seat-->
        seatAvailable-=1;
        setInnerText('seats-left',seatAvailable);
        
        //total price-->
        total+=550;
        setInnerText('total',total);

        //grand total price-->
        setInnerText('grand-total',total);

        //button bg color-->
        seat.target.style.backgroundColor='green';

        //disabled seat button-->
        seat.target.setAttribute('disabled',true);

         //show sell seat no-->
        const seatNo=seat.target.innerText;
        const seatTotal=document.getElementById('ticket-no');
        const div=document.createElement('div');
        div.classList.add('flex','justify-between');
        const p1=document.createElement('p');
        p1.innerText=seatNo;
        const p2=document.createElement('p');
        p2.innerText='Economoy';
        const p3=document.createElement('p');
        p3.innerText='550';
        div.appendChild(p1);
        div.appendChild(p2);
        div.appendChild(p3);
        seatTotal.appendChild(div);
     })  
 }


//apply offer-->
 document.getElementById('offer-button').addEventListener('click',function(){
const text=document.getElementById('input').value;
     const totalPrice=document.getElementById('total');
     const totalPriceValue=parseInt(totalPrice.innerText);
          const grandTotal=document.getElementById('grand-total');
          if(text==='NEW15'){         
              grandTotal.innerText=totalPriceValue-totalPriceValue*15/100;
            }
        
        else if(text==='Couple 20'){
              grandTotal.innerText=totalPriceValue-totalPriceValue*20/100;
            }
            else {
                alert("Please Enter Valid coupon code");
            }
        
        })


 // or apply offer-->
 /*document.getElementById('input').addEventListener('keyup',function(event){
    const text=event.target.value;  
    const button=document.getElementById('offer-button');
    const totalPrice=document.getElementById('total');
          const totalPriceValue=parseInt(totalPrice.innerText);
          const grandTotal=document.getElementById('grand-total'); 
    if(text==='NEW15'){   
        button.addEventListener('click',function(){       
          grandTotal.innerText=totalPriceValue-totalPriceValue*15/100;
        })
    }
    else if(text==='Couple 20'){
        button.addEventListener('click',function(){
          grandTotal.innerText=totalPriceValue-totalPriceValue*20/100;
        })
    }
})*/


//go to final page-->
function toFinal(){
    addClass('main');
    removeClass('final');   
}


//again continue-->
function againContinue(){
    addClass('final');
    removeClass('main');
    setInnerText('book-seat',0);
    //bookSeat=0;
    const seatTotal=document.getElementById('ticket-no');
    seatTotal.innerText='';
    setInnerText('total',0);
    total=bookSeat=0;
    setInnerText('grand-total',0);
    const offerButton=document.getElementById('offer-button');
    offerButton.setAttribute('disabled',true);
    const success=document.getElementById('next');
    success.setAttribute('disabled',true);
     const input=document.getElementById('input');
}


//set inner text-->
function setInnerText(ID,value){
    document.getElementById(ID).innerText=value;
}


//show section-->
function removeClass(elementID){
    const element= document.getElementById(elementID);
    element.classList.remove('hidden');
}


//hidden section-->
function addClass(elementID){
    const element=document.getElementById(elementID);
    element.classList.add('hidden');
}