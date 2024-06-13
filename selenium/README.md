# S206 - Qualidade de Software

- Repositório para registro de projetos e exercícios desenvolvidos nas aulas.
- Instituto Nacional de Telecomunicações - Inatel.
- Curso: Engenharia de Software.
- Elaborado por: Iza Lopes.

# Selenium 

O Selenium é uma ferramenta de automação de navegador amplamente utilizada para testar aplicativos da web. Ele permite que os desenvolvedores escrevam scripts em várias linguagens de programação, incluindo Python, para simular interações de usuários com o navegador.

## Teste de Login Automatizado com Selenium

Este é um simples script em Python usando o Selenium para automatizar o processo de login no GitHub.

## Funcionamento do Script

1. Teste de Login de usuário inválido:

- O script abre uma instância do navegador.
- Navega até a página inicial do GitHub.
- Localiza e clica no botão "Sign in" no cabeçalho da página.
- Preenche os campos de login e senha.
- Envia as credenciais pressionando a tecla Enter.
- Aguarda 2 segundos para permitir o carregamento da página.
- Localiza e imprime na tela qualquer mensagem de alerta.

## Requisitos

- Python 3.x
- Biblioteca Selenium
- Biblioteca Pytest
- Driver do navegador (no caso deste exemplo, o Microsoft Edge)

## Instalação

1. Certifique-se de ter o Python instalado em sua máquina. Você pode baixá-lo em [python.org](https://www.python.org/downloads/).

2. Crie e ative um ambiente virtual (opcional, mas recomendado):

```bash
   python3 -m venv myenv
   source myenv/bin/activate
```

3. Instale as bibliotecas Selenium e Pytest executando os seguintes comandos no terminal:

```bash
   pip install selenium pytest
```

4. Baixe o driver do navegador apropriado. Para este exemplo, estamos usando o Microsoft Edge. Você pode encontrar o driver em [Microsoft Edge WebDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/).

5. Certifique-se de colocar o executável do driver em um local acessível no sistema (por exemplo, adicione-o ao PATH).

## Como executar

1. Clone este repositório em sua máquina:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

2. Navegue até o diretório clonado:

```bash
cd selenium
```

3. Execute o script Python:
```bash
pytest test_login.py
```

4. Para gerar o relatório de testes, execute o comando abaixo:

```bash
pytest test_login.py --html=report.html
```
