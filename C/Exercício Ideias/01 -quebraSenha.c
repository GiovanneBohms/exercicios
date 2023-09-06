#include <stdio.h>
#include <string.h>

int main() {
    char caracteres[] = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    char combinacao[5],senha[5];
    combinacao[4] = '\0';
    int num_caracteres = strlen(caracteres),senha_encontrada = 0;
    int contador = 0;

    printf("Digite uma senha com numeros e letras de 4 digitos:\n");
    scanf("%s",senha);
    
    for (int i = 0; i < num_caracteres && senha_encontrada == 0; i++) {
        for (int j = 0; j < num_caracteres && senha_encontrada == 0; j++) {
            for (int k = 0; k < num_caracteres && senha_encontrada == 0; k++) {
                for (int l = 0; l < num_caracteres && senha_encontrada == 0; l++) {
                    combinacao[0] = caracteres[i];
                    combinacao[1] = caracteres[j];
                    combinacao[2] = caracteres[k];
                    combinacao[3] = caracteres[l];
                    printf("%s \n", combinacao);
                    contador++;
                    if (strcmp(senha, combinacao) == 0) {
                        printf("Senha encontrada na tentativa %d\nA senha eh %s",contador,combinacao);
                        senha_encontrada = 1;
                        break;
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
