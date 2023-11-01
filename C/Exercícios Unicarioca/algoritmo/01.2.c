#include <stdio.h>
int main() {
    int indice=13,soma =0,k=0;

    while(k<indice){
      k=k+1;
      soma = soma+k;
      printf("%d \n",k);
    }

    printf("%d",soma);
    return 0;
}
