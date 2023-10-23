#include <stdio.h>

int main(){
    float VDOLAR, CDOLAR, VREAL;
    printf("Entre com a quantidade de dolares: ");
    scanf("%d",&VDOLAR); //a entrada deve ser float e não decimal
    printf("Entre com a cotacao do dolar: ");
    scanf("%d", &CDOLAR); // a entrada deve ser float e não decimal
    VREAL = VDOLAR*CDOLAR;
    printf("\n Valor em Reais: %8.2f", VREAL);
    return 0;
}