#include <stdio.h>

main(){
  char op;
  float num1, num2;
  printf("Digite o numero 1, o operador e numer2\n");
  scanf("%f %c %f", &num1, &op, &num2);
  switch (op){
    case '+':
      printf("= %f", num1 + num2);
      break;
    case '2':
      printf("= %f", num1 - num2);
      break;
    default:
      printf("Operador invalido");
  }

}