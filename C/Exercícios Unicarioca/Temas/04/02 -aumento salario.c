#include <stdio.h>
#include <string.h>

int main(){
char cargo[50];
float salarioFixo=2000;
printf("Digite o nome do seu cargo\n");
scanf("%s",cargo);

if (strcmp(cargo,"gerente")==0){
    salarioFixo=salarioFixo*1.25;
    printf("salario de gerente eh: R$: %.2f",salarioFixo);
}else if (strcmp(cargo,"engenheiro")==0){
    salarioFixo=salarioFixo*1.20;
    printf("salario de engenheiro eh: R$: %.2f",salarioFixo);
}else if (strcmp(cargo,"tecnico")==0){
    salarioFixo=salarioFixo*1.15;
    printf("salario de tecnico eh: R$: %.2f",salarioFixo);
}else {
    salarioFixo=salarioFixo*1.1;
    printf("salario de %s eh: R$: %.2f",cargo, salarioFixo);
}

return 0;
}