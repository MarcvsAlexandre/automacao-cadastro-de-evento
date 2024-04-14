# Funcionalidades Testadas
- Acesso à Página: O teste garante que a página de cadastro de eventos é acessível.
- Preenchimento do Formulário: Automatiza o preenchimento do formulário de cadastro com dados de teste, incluindo o nome do evento, data, CEP, informações de unidade e prédio, número de participantes e upload de arquivo.

- Integração com APIs de CEP: Testa a funcionalidade de busca de endereço a partir de um CEP fornecido.

- Validação de Submissão: Confirma se a submissão do formulário resulta em um alerta de sucesso, indicando que o cadastro foi realizado corretamente.
# Tecnologias Utilizadas
- Cypress: Utilizado para escrever e executar os testes de interface.
- JavaScript: Linguagem de programação usada para desenvolver os testes.
# Como Executar os Testes
- Para rodar os testes, você precisa ter o Cypress instalado e configurado. Siga os passos abaixo para executar os testes localmente:

1. Clone o repositório e navegue até o diretório do projeto.
2. Instale as dependências usando npm install.
3. Execute os testes com o comando npx cypress open para abrir a interface do Cypress ou npx cypress run para executar os testes em modo headless.
# Considerações Finais
Este projeto de teste é vital para assegurar que o processo de cadastro de eventos funcione conforme esperado e que os usuários finais tenham uma experiência suave e sem erros ao usar a aplicação web.
