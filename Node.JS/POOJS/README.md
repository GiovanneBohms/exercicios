# IndexDB Class

##  Descrição
A classe `IndexDB` é um wrapper para facilitar o uso do IndexedDB, um banco de dados local do navegador. Ela permite criar, armazenar, recuperar e gerenciar itens dentro de um banco IndexedDB, garantindo uma interface simples e intuitiva para operações assíncronas.

##  Funcionalidades
- Criar e gerenciar um banco de dados IndexedDB.
- Criar uma tabela (Object Store) automaticamente caso não exista.
- Adicionar um item ao banco.
- Recuperar todos os itens armazenados.
- Recuperar o último item adicionado.
- Buscar um item pelo seu ID.

##  Como Usar

###  Instanciando a Classe
```javascript
const db = new IndexDB("MeuBanco", "MinhaTabela");
```

###  Adicionar um Item
```javascript
const novoItem = { nome: "Produto A", preco: 99.90 };
const id = await db.setItem(novoItem);
console.log("Item adicionado com ID:", id);
```

###  Recuperar Todos os Itens
```javascript
const items = await db.getAllItems();
console.log("Itens armazenados:", items);
```

###  Recuperar o Último Item
```javascript
const lastItem = await db.getLastItem();
console.log("Último item adicionado:", lastItem);
```

###  Recuperar um Item pelo ID
```javascript
const itemId = 1; // Exemplo de ID
const item = await db.getItemById(itemId);
console.log("Item encontrado:", item);
```

##  Dependências
Nenhuma. A classe utiliza apenas recursos nativos do JavaScript.

##  Considerações
- Todos os métodos utilizam `async/await` para facilitar o manuseio assíncrono dos dados.
- O banco e a tabela são criados automaticamente caso não existam.
- O método `_close()` garante que o banco de dados seja fechado após cada operação para evitar problemas de bloqueio.

## 📜 Licença
Este projeto é de livre uso e pode ser modificado conforme necessário.