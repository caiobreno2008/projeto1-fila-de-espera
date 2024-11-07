let fila = []
let opcao

do {
    let menu = "Menu:\n"
    menu += "1. Novo paciente\n"
    menu += "2. Consultar paciente\n"
    menu += "3. Sair\n"
    menu += "Pacientes na fila:\n"

    for (let i = 0; i < fila.length; i++) {
        menu += `${i + 1}º ${fila[i]}\n`
    }

    opcao = prompt(menu)

    if (opcao === "1") {
        let nomePaciente = prompt("Digite o nome do paciente:")
        if (nomePaciente) {
            fila = fila.concat(nomePaciente)
            alert(`${nomePaciente} foi adicionado à fila.`)
        }
    } else if (opcao === "2") {
        if (fila.length > 0) {
            let pacienteConsultado = fila[0]
            fila.splice(0, 1)
            alert(`Paciente consultado: ${pacienteConsultado}`)
        } else {
            alert("Não há pacientes na fila.")
        }
    }
} while (opcao !== "3")

alert("Saindo do sistema.")
