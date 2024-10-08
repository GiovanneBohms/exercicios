#include <stdio.h>

int main()
{
    
    int inteiros[5] = {1,2,3,4,5}, pares[5], impares[5], contadorPar = 0, contadorImpar =0;
    
     // Identifica pares e impares
    for(int i =0; i <5; i++){

         if (inteiros[i] % 2 ==0){
            // printf("%d", inteiros[i]);
            pares[contadorPar] = inteiros[i];
            contadorPar ++;
        }else{
            // printf("%d", inteiros[i]);
            impares[contadorImpar] = inteiros[i];
            contadorImpar ++;
        }
    }
    
    // Escreve os Pares
    printf ("Números pares \n");
    for ( int i =0; i<contadorPar; i++){
        printf(" %d", pares[i]);
    }
    // Escreve os Impares
    printf ("\nNúmeros impares \n");
    for ( int i =0; i<contadorImpar; i++){
        printf(" %d", impares[i]);
    }
    
    
    
    
    return 0;
}
