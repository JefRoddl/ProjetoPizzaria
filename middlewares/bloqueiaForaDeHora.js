let hora = (new Date()).getHours();

// Criar middleware bloqueiaForaDeHora
// Verificar se hora é maior que 0 e menor que 19
// Nesse caso, mandar mensagem "Volte mais tarde"
// Caso cont´rario, deixar req ir adiante...