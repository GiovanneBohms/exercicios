#include <stdio.h>>

main(){
int aluno,nota1,nota2;

for(aluno=1;aluno<=10;aluno++){
    scanf("%f %f", &nota1, &nota2);
    printf("media: %f",(nota1+nota2)/2);
}
}