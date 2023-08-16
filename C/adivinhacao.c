#include <stdio.h>


main() {
   
    
    printf("\n ********************************");
    printf("\n Bem vindo ao jogo de Adivinhacao");
    printf("\n ********************************");
    int numerosecreto = 42;
    int chute;
    int tentativas = 1;
    while (1){
        
        printf("\ntentativa %d",tentativas);
        printf("\n Digite um numero   ");
        scanf("%d", &chute);

        int acertou = chute==numerosecreto;
        int maior = chute>numerosecreto;

        if(chute < 0){
            printf("o valor digitado eh negativo, digite um valor positivo");
            continue;
        }

        else if(acertou){
            printf("Parabens! Voce acertou!");
            break;
        }
        else if(maior){
            printf("o numero secreto eh menor \n");
        }
        else{
            printf("o numero secreto eh maior");
        }
        tentativas++;
    }
    printf("\nfim de jogo");
    
    printf("voce acertou na tentativa %d",tentativas);
}