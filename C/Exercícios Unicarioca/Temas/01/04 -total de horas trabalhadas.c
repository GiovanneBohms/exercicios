#include <stdio.h>

int main(){

    char nome[50];
    int horas, filhos;
    float salarioPorHora, salarioFamilia, salarioTotal;

    printf("Digite o nome do funcionario \n");
    scanf("%s",nome);

    printf("Digite as horas trabalhadas \n");
    scanf("%d",&horas);

    printf("digite o valor por hora trabalhada \n");
    scanf("%f",&salarioPorHora);

    printf("Quantos filhos menores de 14 anos? \n");
    scanf("%d",&filhos);

    printf("Qual o salario familia? \n");
    scanf("%f",&salarioFamilia);

    salarioTotal = (salarioFamilia*filhos)+(salarioPorHora*horas);

    printf(" O salario total de %s eh R$:%.2f", nome, salarioTotal);


    return 0;
}