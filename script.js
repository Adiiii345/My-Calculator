let string ="";
let buttons = document.querySelectorAll('.button');
let button0 = document.querySelectorAll('.button1');
Array.from(button0).forEach((button1)=>{
    button1.addEventListener('click', (e)=>{
        console.log(e.target)
        string=string + e.target.innerHTML;
        document.querySelector('input').value=string;  
    })
})
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML =='='){
            string= eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='AC'){
            string="";
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='Exit'){
            string="Bye!!!";
            document.querySelector('input').value=string;
        }
        else{
            console.log(e.target)
            string=string + e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})