#include <stdio.h>
#include <string.h>

int main() {
    char caracteres[] = "0123456789abcdefghijklmnopqrstuvwxyz";
    char combinacao[5];
    combinacao[4] ='\0';
    char senha[] = "deus";
    int num_caracteres = 36; // Número de caracteres possíveis (dígitos + letras minúsculas)
    

    for (int i = 0; i < num_caracteres; i++) {
        for (int j = 0; j < num_caracteres; j++) {
            for (int k = 0; k < num_caracteres; k++) {
                for (int l = 0; l < num_caracteres; l++) {
                    // printf("%c%c%c%c\n", caracteres[i], caracteres[j], caracteres[k], caracteres[l]);
                    combinacao[0]=caracteres[i];
                    combinacao[1]=caracteres[j];
                    combinacao[2]=caracteres[k];
                    combinacao[3]=caracteres[l];

                    printf("%s \n",combinacao);

                    if(strcmp(senha,combinacao) == 0){
                        printf("Senha encontrada");
                    }
                }
            }
        }
    }



    return 0;
}
