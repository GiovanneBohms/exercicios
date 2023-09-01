#include <stdio.h>

int main(){
  int numero;
  printf("Digite um numero\n");
  scanf("%d",&numero);

  if(numero>0){
    printf("Positivo");
  }else if(numero<0){
        printf("Negativo");
        }else{
            printf("Nulo");
        }
    return 0;
}