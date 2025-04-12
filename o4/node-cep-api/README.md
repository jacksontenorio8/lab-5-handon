# Node CEP API

Este projeto é uma API simples construída com Node.js e Express que permite buscar endereços a partir de um CEP utilizando a API do ViaCEP.

## Estrutura do Projeto

```
node-cep-api
├── src
│   ├── app.js                # Ponto de entrada da aplicação
│   ├── routes
│   │   └── cepRoutes.js      # Rotas relacionadas ao CEP
│   ├── controllers
│   │   └── cepController.js   # Controlador para lógica de busca de endereço
│   └── services
│       └── cepService.js      # Serviço para interagir com a API do ViaCEP
├── package.json               # Configuração do npm
├── .env                       # Variáveis de ambiente
├── .gitignore                 # Arquivos a serem ignorados pelo Git
└── README.md                  # Documentação do projeto
```

## Instalação

1. Clone o repositório:
   ```
   git clone <URL_DO_REPOSITORIO>
   ```
2. Navegue até o diretório do projeto:
   ```
   cd node-cep-api
   ```
3. Instale as dependências:
   ```
   npm install
   ```

## Uso

1. Inicie o servidor:
   ```
   npm start
   ```
2. Acesse a API em `http://localhost:3000/cep/{CEP}`, substituindo `{CEP}` pelo CEP desejado.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Faça um fork do repositório e envie um pull request com suas alterações.

## Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo LICENSE para mais detalhes.