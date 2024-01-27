'use strict'

let Snum=Math.trunc(Math.random()*20)+1;
let score =20;
let highscore=0;


document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('input').value);
    console.log(guess,typeof guess);

    if(!guess){
        document.querySelector('.p1').textContent='🚫 NO NUMBER';
        document.querySelector('.p2').textContent= `💯Score: ${score}`;

    }else if(guess==Snum){
        document.querySelector('.p1').textContent='CORRECT NUMBER 🎉';
        document.querySelector('.p2').textContent=`💯Score: ${score}`;
        document.querySelector('body').style.backgroundImage="url('/images/spanish-team-holding-world-cup-trophy.jpeg')"
        document.querySelector('.box').textContent=Snum;

        if(score>highscore){
            highscore=score;
            document.querySelector('.p3').textContent=`🥇Highscore: ${highscore}`;
        }


    }else if(guess>Snum){
        if(score>1){
        document.querySelector('.p1').textContent="Too High 📈";
        score--
        document.querySelector('.p2').textContent=`💯Score: ${score}`;
        }else{
            document.querySelector('.p1').textContent="💥 YOU LOST!";
            document.querySelector('.p2').textContent=`💯Score: ${score}`
        }
    

    }else if(guess<Snum){
        if(score>1){
            document.querySelector('.p1').textContent="Too Low 📉";
            score--
            document.querySelector('.p2').textContent=`💯Score: ${score}`;
            }else{
                document.querySelector('.p1').textContent="💥 YOU LOST!";
                document.querySelector('.p2').textContent=`💯Score: ${score}`
            }
       
    }

});

document.querySelector('button').addEventListener('click',function(){
    score=20;
    Snum=Math.trunc(Math.random()*20)+1;

    document.querySelector('.p1').textContent='Start Guessing...';
    document.querySelector('.p2').textContent=`💯Score: ${score}`;

    document.querySelector('body').style.backgroundImage="url('/images/pngtree-neon-tunnel-in-4k-uhd-3d-illustration-picture-image_4236733.jpeg')";
    document.querySelector('.box').textContent="?";

    document.querySelector('input').value=" ";

})

