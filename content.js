//-------------------------------------
// Plugin WhatsFastAudio
// Desenvolvido por: Daniel Polo
// E-mail: polodaniel2016@gmail.com
// Data: 03/11/2020
//-------------------------------------

const intervalo = setInterval(function(){

    const tag = 'header';
    const header = document.querySelector(tag);

    if(header)
    {
        clearInterval(intervalo);

        BotaoVelocidadeUM(header);
        BotaoVelocidadeDOIS(header);
        BotaoVelocidadeTRES(header);

    }

},1000)

function BotaoVelocidadeUM(header)
{
    const botao = document.createElement("button");
    botao.innerHTML = "1.5x"
    botao.classList.add("botaoVelocidade")
    botao.classList.add("espacamentoBotao")
    
    botao.addEventListener("click", ()=> 
    {
        botao.classList.add("botaoClicado")
        
        const audios = document.querySelectorAll("audio");
        
        audios.forEach((audio) => 
        {
            audio.playbackRate = 1.5;
        })

        setTimeout(() =>
        {
            botao.classList.remove("botaoClicado")
        }, 5000)

    })
    
    header.appendChild(botao)
}

function BotaoVelocidadeDOIS(header)
{
    const botao = document.createElement("button");
    botao.innerHTML = "2x"
    botao.classList.add("botaoVelocidade")
    botao.classList.add("espacamentoBotao")
    
    botao.addEventListener("click", ()=> 
    {
        botao.classList.add("botaoClicado")
        
        const audios = document.querySelectorAll("audio");
        
        audios.forEach((audio) => 
        {
            audio.playbackRate = 2;
        })

        setTimeout(() =>
        {
            botao.classList.remove("botaoClicado")
        }, 5000)

    })
    
    header.appendChild(botao)
}

function BotaoVelocidadeTRES(header)
{
    const botao = document.createElement("button");
    botao.innerHTML = "3x"
    botao.classList.add("botaoVelocidade")
    
    botao.addEventListener("click", ()=> 
    {
        botao.classList.add("botaoClicado")
        
        const audios = document.querySelectorAll("audio");
        
        audios.forEach((audio) => 
        {
            audio.playbackRate = 3;
        })

        setTimeout(() =>
        {
            botao.classList.remove("botaoClicado")
        }, 5000)

    })
    
    header.appendChild(botao)
}