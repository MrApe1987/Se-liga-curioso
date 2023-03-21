//botão de voltar ao topo
window.onscroll = function () { scroolFunction() }

const scroolFunction = () => {

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('btn').style.display = 'block'
    }
    else {
    document.getElementById ('btn').style.display = 'none'
    }
    document.getElementById ('btn').addEventListener ("click", function (){
     document.body.scrollTop = 0 
     document.documentElement.scrollTop = 0   
    })
}

function showMenu () {
    var menu = document.querySelector('.menu')
    if (menu.style.display == 'block') {
        menu.style.display = 'none'
        }
        else{
        menu.style.display = 'block'
        }
}

// tempo de publicação 

