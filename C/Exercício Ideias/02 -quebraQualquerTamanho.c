#include <stdio.h>
#include <string.h>

void forcaBruta(char *caracteres, char *senha, char *combinacao, int tamanho_atual, int tamanho_maximo, int *senha_encontrada, int *contador) {
    if (tamanho_atual == tamanho_maximo) {
        combinacao[tamanho_atual] = '\0';
        (*contador)++;
        if (strcmp(senha, combinacao) == 0) {
            printf("Senha encontrada na tentativa %d\nA senha é %s\n", *contador, combinacao);
            (*senha_encontrada) = 1;
        }
        return;
    }

    for (int i = 0; i < strlen(caracteres); i++) {
        combinacao[tamanho_atual] = caracteres[i];
        // printf("%s\n",combinacao);
        forcaBruta(caracteres, senha, combinacao, tamanho_atual + 1, tamanho_maximo, senha_encontrada, contador);
        if (*senha_encontrada) {
            break; // Se a senha foi encontrada, interrompa as recursões restantes
        }
    }
}

int main() {
    char caracteres[] = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ*()@#$%%!.,;/?][]{}";
    char senha[50]; // Aumente o tamanho máximo da senha conforme necessário
    char combinacao[50];
    int senha_encontrada = 0;
    int contador = 0;

    printf("Digite uma senha com números e letras:\n");
    scanf("%s", senha);

    for (int tamanho = 1; tamanho <= strlen(senha); tamanho++) {
        forcaBruta(caracteres, senha, combinacao, 0, tamanho, &senha_encontrada, &contador);
        if (senha_encontrada) {
            break;
        }
    }

    if (!senha_encontrada) {
        printf("Senha não encontrada.\n");
    }

    return 0;
}
