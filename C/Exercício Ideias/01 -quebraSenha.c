#include <stdio.h>
#include <string.h>
#include <stdbool.h>

int main() {
    char caracteres[] = "0123456789abcdefghijklmnopqrstuvwxyz";
    char combinacao[5];
    combinacao[4] = '\0';
    char senha[] = "00aa";
    int num_caracteres = 36; // Número de caracteres possíveis (dígitos + letras minúsculas)
    bool senha_encontrada = false;

    for (int i = 0; i < num_caracteres && !senha_encontrada; i++) {
        for (int j = 0; j < num_caracteres && !senha_encontrada; j++) {
            for (int k = 0; k < num_caracteres && !senha_encontrada; k++) {
                for (int l = 0; l < num_caracteres && !senha_encontrada; l++) {
                    combinacao[0] = caracteres[i];
                    combinacao[1] = caracteres[j];
                    combinacao[2] = caracteres[k];
                    combinacao[3] = caracteres[l];

                    printf("%s \n", combinacao);

                    if (strcmp(senha, combinacao) == 0) {
                        printf("Senha encontrada\n");
                        senha_encontrada = true; // Define a senha_encontrada como verdadeira para sair dos loops
                    }
                }
            }
        }
    }

    if (!senha_encontrada) {
        printf("Senha não encontrada.\n");
    }

    return 0;
}
