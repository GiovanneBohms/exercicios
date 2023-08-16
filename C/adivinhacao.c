#include <stdio.h>

#define NUMERO_DE_TENTATIVAS 5

main() {
    int numerosecreto = 42,chute;
    
    printf("\n ********************************");
    printf("\n Bem vindo ao jogo de Adivinhacao");
    printf("\n ********************************");

    for (int i = 1; i<=NUMERO_DE_TENTATIVAS;i++){

        printf("\ntentativa %d de %d",i,NUMERO_DE_TENTATIVAS);
        printf("\n Digite um numero   ");
        scanf("%d", &chute);
        int acertou = chute==numerosecreto;

        if(acertou){
            printf("Parabens! Voce acertou!");
            break;
        }else{
            if(chute > numerosecreto){
                printf("o numero secreto eh menor \n");
            }else{
                printf("o numero secreto eh maior");
            } 
        }
    }
    printf("\nfim de jogo");
}