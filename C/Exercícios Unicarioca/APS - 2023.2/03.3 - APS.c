#include <stdio.h>

main(){
  char nome[10]="teste",pessoa[10]="teste";

  if(strcmp(nome, pessoa) == 0){
    printf("Nao precisa de biblioteca <string.h> \n");
  }else{
    printf("nao eh igual");
  }

  scanf("%s",nome);

  printf("%s",nome);
}

// I F II F III V