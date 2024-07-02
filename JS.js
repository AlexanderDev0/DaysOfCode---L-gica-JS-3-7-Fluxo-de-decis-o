function startGame() {
    let area = prompt("Você quer seguir para area front End ou back end? Digite `Front End` ou Back End");

    if (area === "Front End"){
        let framework = prompt("Você quer aprender React ou Vue? Digite 'React' ou 'Vue' ");
        if(framework === "React"){
            console.log("Você escolheu React!");
        } else if (framework === "Vue"){
            console.log("Você escolheu Vue!");
        }else{
            console.log("Escolha invalida fim de jogo");
            return;
        }
    }else if (area === "Back End"){
        let language = prompt("Você quer aprender Java ou C#? Digite 'Java' ou 'C#'");
        if (language === "Java"){
            console.log("Você escolheu Java");
        }else if(language === "C#"){
            console.log("Você escolheu C#");
        }else{
            console.log("Opção invalida fim de jogo");
            return;
        }
    }

    let path = prompt("Você quer seguir se especializando na área escolhida ou seguir se sesenvolvendo para se tornar um fullstack? Digite 'Especializar' ou 'Fullstack'");
    if (path === "Especializar"){
        console.log("Você escolheu se especializar na area escolhida");
    }else if(path === "Fullstack"){
        console.log("Você escolheu se desenvolver para se tornar Fullstack!!");
    } else {
        console.log("Oção invalida. Fim de Jogo");
        return;
    }
    let moreTech;
    let technologies = [];
    do{
        let technology = prompt("Quais são as tecnologias nas quais você gostaria de se especializar ou de conhecer?");
        technologies.push(technology);
        moreTech = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' para continuar ou qualquer outra coisa para sair. ");   
    } while (moreTech.toLowerCase()=== 'ok');

    console.log("Tecnologias que você gostaria de aprender:");
    technologies.forEach(tech =>{
        console.log(`- ${tech}`);
        console.log(`Comentando algo sobre ${tech}...`)
    });
    console.log("Obrigado por jogar!")
} 

startGame();