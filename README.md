# 1. introdução
Olá! Esse projeto mostra uma lista de pedidos/produtos. Ele possui backend em NodeJs e frontend ReactJS, porém foi utilizado typescript. 
Criei um protótipo no figma para me direcionar quanto a aparência do frontend, porém há algumas diferenças por questões de praticidade no código, você
pode acessá-lo por [aqui](https://www.figma.com/file/qQR54vtv0k4coJlzuSyK6F/pedidos---prot%C3%B3tipo?type=design&node-id=18%3A10&mode=design&t=sqP3KjUeMGP34tDG-1)

## 2. Executando o Back-end
Para executar o backend, certifique-se de ter a versão do node para typescript instalada. Após isso execute 

- ts-node index.ts

E o servidor irá rodar o backend na porta 3000.

### 3. Executando o Front-end
Para executar o front end utilize um simples 
- npm start

  Porém, certifique-se que o servidor rode na porta 3001, pois esta é autorizada pelo CORS para realizar as requisições HTTP necessárias.
  Também certifique-se de ter boa conexão a internet, pois ao final da realização do projeto tive conexão instável e as requisições davam erro, diferente
  de quando feitas em uma boa conexão. 
