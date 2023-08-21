#include <stdio.h>

main(){
    int array[5] = {3,2,4,5,8};
    int tamanho = sizeof(array);
    int testes = sizeof(array[1]);

    int indexUm = array[0];
    printf("%d\n", testes);
    printf("%d\n",tamanho);

}