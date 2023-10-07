import java.util.Scanner;
public class Desafio01Alura {
    public static void main(String[] args) {
        Scanner leitura = new Scanner(System.in);

        double saldo = 2500;
        String nome = "Giovanne Bohms";
        String dadosIniciais = String.format(
                "***********************\r\n" +
                "Dados iniciais do cliente:\r\n" +
                "\r\n" + 
                "Nome: %s\r\n" +
                "Tipo conta: Corrente\r\n" +
                "Saldo inicial: R$ %.2f\r\n" +
                "***********************\r\n\n",nome,saldo)
                ;
        String operacoes =
                "Operações:\n" +
                "1- Consultar saldos\n" +
                "2- Receber valor\n" +
                "3- Transferir valor\n" +
                "4- Sair\n" +
                "Digite a opção desejada:";

        System.out.println(dadosIniciais+operacoes);
        int opcao = 0;
       
        while(opcao != 4){

        System.out.println(operacoes);
        opcao = leitura.nextInt();

            switch(opcao){
                case 1:
                    System.out.println("Seu saldo é "+saldo);
                break;
                case 2:
                    System.out.println("digite o valor que irá receber:");
                    double receber = leitura.nextDouble();
                    saldo +=receber;
                    System.out.println("Saldo atual " + saldo);
                break;
                case 3:
                    System.out.println("Digite valor que deseja transferir");
                    double transferir = leitura.nextDouble();
                        if ( transferir < saldo ) {
                        saldo -= transferir;
                        System.out.println("Saldo atual:"+ saldo);
                        }else {
                            System.out.println("Tentativa de transferência é maior do que saldo na conta");
                        }
                break;
                case 4:
                    System.out.println("Saindo do sistema...");
                break;
                default:
                    System.out.println("opção inválida");
                break;
            }
        }
    }
}
