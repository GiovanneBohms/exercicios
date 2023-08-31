#include <stdio.h>

int main(){

    float dolares, cotacaoDolarReal, ICMS,lucroPercentual,reais;

    printf("Digite o valor da compra em dolar \n");
    scanf("%f",&dolares);
    printf("Digite a cotacao do dia \n");
    scanf("%f",&cotacaoDolarReal);
    printf("Digite o ICMS, EXP: Digite 10 se for 10%%\n");
    scanf("%f",&ICMS);
    printf("Digite o lucro da empresa, EXP: Digite 10 se for 10%%\n");
    scanf("%f",&lucroPercentual);

    reais= (dolares*cotacaoDolarReal)*(ICMS/100)+(dolares*cotacaoDolarReal)*(lucroPercentual/100)+(dolares*cotacaoDolarReal);

    printf("\nValor pago em Reais foi R$:%.2f\n",reais);

    return 0;
}