# Ignite Teams

Este App tem como objetivo a criação de turmas, podendo dividi-las em times adicionando os usuários.

## Tecnologias e Estrutura

- `styled components` para a estilização dos componentes, foi criado um arquivo `theme` a fim de centralizar cores, fontes e tamanhos.
- `expo google fonts` utilização do expo para instalar e gerenciar o carregamento das fontes.
- `componentes` foram criados diversos componentes, com o objetivo de padronizar a aplicação e também ganhar tempo no desenvolvimento.
- `propriedades` criação de propriedades para os componentes bem como extender o uso das já existentes.
- `hooks` utilização do `useState`, `useEffect`, `useTheme`.
- `navegação` adotado o `stack navigator` como estratégia de navegação entre as telas do app.
- `babel plugin module resolver` para fazer o mapeamento das pastas mais utilizadas no projeto.
- `async storage` informações salvas utilizando o armazenamento interno do dispositivo.
- `tratamento de exceções` criação de uma classe `AppError` para filtrar os erros da aplicação gerados pela aplicação ou por inserção de dados indevida.
- `useRef` criação de referências para componentes específicos, possibilitando acessar propriedades e alterá-las sem a necessidade de renderizar novamente a interface.