#include <stdio.h>

int main(){
  float saldoMedio,calculo;
    printf("Digite o saldo medio do cliente\n");
    scanf("%f",&saldoMedio);

    if(saldoMedio<200){
        printf("não possui direto ao credito especial\n");
    }else if(saldoMedio<=400){
            calculo=saldoMedio*0.2;
            printf("Voce possui %.2f de credito especial",calculo);
            }else if(saldoMedio<=600){
                    calculo=saldoMedio*0.3;
                    printf("Voce possui %.2f de credito especial",calculo);
                    }else{
                    calculo=saldoMedio*0.4;
                    printf("Voce possui %.2f de credito especial",calculo);
                    }
    return 0;
}