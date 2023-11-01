#include <stdio.h>
#include <stdio.h>

int i = 0;
int fibo (int n){

    if(n==0 || n==1){
      return n;
    }else{
      i++;
      printf("iteracao %d \n",i);
      
      return fibo(n-1) + fibo(n-2);
    }

    return 0;
}
int main() {
    int n,fibbo;
    n = 0;
    fibbo = fibo(n);

    printf("fibo eh %d",fibbo);
}

// I True 
// II True
// III False
// IV True 
// V True 
