#include <stdio.h>
#include <stdlib.h>
#include <iostream>

using namespace std;

main(){
	int iteracoes = 4;
	char nome[iteracoes][20];
	int idade[iteracoes],maior, menor;
	float media[iteracoes];
	
	for(int i = 0; i<iteracoes; i++){
		cout<<"Aluno: "<<i<<endl;
		cout<<"Nome: "; cin>>nome[i];
		cout<<"idade: "; cin>>idade[i];
		cout<<"Media: "; cin>> media[i];
	}
	
	// media maior ou igual a 7
	cout<<"\n Alunos com media 7 ou maior"<<endl;
	for(int i = 0; i<iteracoes; i++){
		if(media[i]>=7){
			
			cout<<"Nome: "<<nome[i]<<endl;
			cout<<"Idade0 "<<idade[i]<<endl;
			cout<<"Media: "<<media[i]<<endl;
		}
	}
	
		// media menor que 7
	cout<<"Alunos com media menor que 7"<<endl;
	for(int i = 0; i<iteracoes; i++){
		if(media[i]<7){
			
			cout<<"Nome: "<<nome[i]<<endl;
			cout<<"Idade0 "<<idade[i]<<endl;
			cout<<"Media: "<<media[i]<<endl;
		}
	}
		for ( int i = 0; i<iteracoes;i++){
		
	if(i == 0){
	menor=	maior = media[i];
	}
		
		if(maior<media[i]){
			maior = idade[i];
		}
		
		if(menor>media[i]){
			menor = idade[i];
		}
		
	}
	cout<<"Aluno com maior nota"<<endl;
	for(int i = 0 ; i<iteracoes; i++){
		if(media[i]== maior){
			cout<<"Nome: "<<nome[i]<<endl;
			cout<<"Idade0 "<<idade[i]<<endl;
			cout<<"Media: "<<media[i]<<endl;
		}
	}
	
	
}
