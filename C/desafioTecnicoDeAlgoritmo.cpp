#include <stdio.h>

int main()
{
    
    int inteiros[9] = {1,12,65,73,8,92,33,3,10}, pares[9], impares[9], contadorPar = 0, contadorImpar =0;
    
     // Identifica pares e impares
    for(int i =0; i <9; i++){

         if (inteiros[i] % 2 ==0){
   
            pares[contadorPar] = inteiros[i];
            contadorPar ++;
        }else{
        
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
