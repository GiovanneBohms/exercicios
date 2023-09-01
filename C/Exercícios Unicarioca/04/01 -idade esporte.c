#include <stdio.h>

int main(){
int idade;
printf("Digite a idade do nadador\n");
scanf("%d",&idade);
if(idade<5){
    printf("Nao esta apto para nenhuma categoria");
}else if(idade>=5 && idade<=7){
    printf("Categoria Infantil A");
}else if(idade<=10){
    printf("Categoria Infantil B");
}else if(idade <=13){
    printf("Categoria Juvenil A");
}else if(idade <=17){
    printf("Categoria Juvenil B");
}else{
    printf("Categoria Adulto");
}
return 0;
}