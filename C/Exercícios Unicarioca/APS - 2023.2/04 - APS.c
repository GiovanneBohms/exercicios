#include <stdio.h>

 main(){
 int num;
  printf("Digite o numero do dia da semana: ");
  scanf("%d",&num);

  switch (num){
    case 1: printf("Domingo \n");
    case 2: printf("Segunda \n");
    case 3: printf("Terca \n");
    case 4: printf("Quarta \n");
    case 5: printf("Quinta \n");
    case 6: printf("Sexta \n");
    case 7: printf("Sabado\n");
    default: printf("numero do dia da semana invalido");
  }
}

// I V, II F, III F