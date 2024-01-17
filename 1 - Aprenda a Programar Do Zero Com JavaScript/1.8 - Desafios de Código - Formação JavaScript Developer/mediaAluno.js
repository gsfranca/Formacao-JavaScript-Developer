//Desafios JavaScript na DIO têm funções "gets" e "print" acessíveis globalmente:
//- "gets" : lê UMA linha com dado(s) de entrada (inputs) do usuário;
//- "print": imprime um texto de saída (output), pulando linha.

let media = gets();

if (media < 5) {
  print('REP');
}
else if (media >= 5 && media < 7) {
  print('REC');
}
else
{
  print('APR');
}
// TODO: Criar demais condições para a resolução deste desafio.