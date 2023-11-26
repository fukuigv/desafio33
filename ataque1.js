class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataque() {
        let atq = "";
        switch (this.tipo) {
            case "mago":
                atq = "magia";
                break;
            case "guerreiro":
                atq = "espada";
                break;
            case "monge":
                atq = "artes marciais";
                break;
            default:
                atq = "shuriken";
                break;
        }
        console.log(`O ${this.tipo} atacou usando ${atq}`);
    }
}

const heroi1 = new Heroi("Gandalf", 1000, "mago");
heroi1.ataque(); // Saída: O mago atacou usando magia
