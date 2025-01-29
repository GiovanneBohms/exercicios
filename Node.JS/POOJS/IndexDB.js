class IndexDB {
  constructor(nomeBanco, nomeTabela) {
    this.dbName = nomeBanco;
    this.storeName = nomeTabela;
    this.db = null;
    this.dbVersion = 1;
  }

  async _init() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(this.dbName);
      request.onsuccess = (event) => {
        const db = event.target.result;
        if (db.objectStoreNames.contains(this.storeName)) {
          this.db = db;
          resolve();
        } else {
          db.close();
          const newVersion = db.version + 1;
          const upgradeRequest = indexedDB.open(this.dbName, newVersion);
          upgradeRequest.onupgradeneeded = (event) => {
            const upgradedDB = event.target.result;
            upgradedDB.createObjectStore(this.storeName, {
              keyPath: 'id',
              autoIncrement: true,
            });
          };
          upgradeRequest.onsuccess = (event) => {
            this.db = event.target.result;
            resolve();
          };
          upgradeRequest.onerror = (event) => {
            reject('Erro ao criar a tabela: ' + event.target.error);
          };
        }
      };
      request.onerror = (event) => {
        reject('Erro ao abrir o banco de dados: ' + event.target.error);
      };
    });
  }

  _close() {
    if (this.db) {
      this.db.close();
      this.db = null;
      console.log('Banco de dados fechado.');
    }
  }

  async setItem(value) {
    await this._init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(this.storeName, 'readwrite');
      const store = transaction.objectStore(this.storeName);
      const request = store.add({ value });

      request.onsuccess = (event) => {
        console.log(`Item salvo com ID ${event.target.result}`, value);
        resolve(event.target.result);
        this._close();
      };

      request.onerror = (event) => {
        reject('Erro ao salvar item: ' + event.target.error);
        this._close();
      };
    });
  }

  async getAllItems() {
    await this._init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(this.storeName, 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.getAll();

      request.onsuccess = () => {
        resolve(request.result);
        this._close();
      };

      request.onerror = (event) => {
        reject('Erro ao obter itens: ' + event.target.error);
        this._close();
      };
    });
  }

  async getLastItem() {
    await this._init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(this.storeName, 'readonly');
      const store = transaction.objectStore(this.storeName);
      const cursorRequest = store.openCursor(null, 'prev');
      cursorRequest.onsuccess = (event) => {
        const cursor = event.target.result;
        if (cursor) {
          resolve(cursor.value);
          this._close();
        } else {
          reject('Nenhum item encontrado na tabela.');
          this._close();
        }
      };

      cursorRequest.onerror = (event) => {
        reject('Erro ao obter último item: ' + event.target.error);
        this._close();
      };
    });
  }

  async getItemById(id) {
    await this._init();

    return new Promise((resolve, reject) => {
      const transaction = this.db.transaction(this.storeName, 'readonly');
      const store = transaction.objectStore(this.storeName);
      const request = store.get(id);

      request.onsuccess = (event) => {
        if (request.result) {
          resolve(request.result);
        } else {
          reject('Nenhum item encontrado com o ID fornecido.');
        }
        this._close();
      };

      request.onerror = (event) => {
        reject('Erro ao obter item pelo ID: ' + event.target.error);
        this._close();
      };
    });
  }
}
