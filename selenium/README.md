# S206 - Qualidade de Software

- Repositório para registro dos testes desenvolvidos para apresentação e conhecimento do Selenium.
- Instituto Nacional de Telecomunicações - Inatel.
- Curso: Engenharia de Software.
- Elaborado por: Iza Lopes.

# Selenium WebDriver

O Selenium é uma ferramenta de automação de navegador amplamente utilizada para testar aplicativos da web. Permite que os desenvolvedores escrevam scripts em várias linguagens de programação, incluindo Python, para simular interações de usuários com o navegador.

![Selenium](https://img.shields.io/badge/-selenium-%43B02A?style=for-the-badge&logo=selenium&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Edge](https://img.shields.io/badge/Edge-0078D7?style=for-the-badge&logo=Microsoft-edge&logoColor=white)

# Teste de Login Automatizado com Selenium

Este é um simples script em Python usando o Selenium para automatizar o processo de login no GitHub.

<div align="center">
  <img align="center" alt="picture" width="700em" src="https://github.com/Izalp/Laboratorio_S206/assets/102091381/87ec27a7-a35b-4556-a813-a153f2ebe3f1">
</div>

## Sumário:

1. [Funcionamento do Script](#funcionamento-do-script)
2. [Pré-requisitos](#pré-requisitos)
3. [Instalação](#instalação)
4. [Como executar](#como-executar)

## Funcionamento do Script

1. Teste de Login de usuário inválido:

- O script abre uma instância do navegador.
- Navega até a página inicial do GitHub.
- Localiza e clica no botão "Sign in" no cabeçalho da página.
- Preenche os campos de login e senha.
- Envia as credenciais pressionando a tecla Enter.
- Aguarda 2 segundos para permitir o carregamento da página.
- Localiza e verifica a mensagem de alerta na tela.

## Pré-requisitos

- Python 3.x
- Biblioteca Selenium
- Biblioteca Pytest
- Driver do navegador (no caso deste exemplo, o Microsoft Edge)

## Instalação

1. Certifique-se de ter o Python instalado em sua máquina. Você pode baixá-lo em [python.org](https://www.python.org/downloads/).

2. Dentro da pasta `Selenium`, crie e ative um ambiente virtual (opcional, mas recomendado):

```
   python3 -m venv .
   source Scripts/activate
```

3. Instale a biblioteca `Selenium` executando o seguinte comando no terminal:

```
   pip install selenium
```

4. Instale a biblioteca `Pytest` executando o seguinte comando no terminal:

```
   pip install pytest
```

5. Instale a biblioteca `Pytest-html` executando o seguinte comando no terminal:

```
   pip install pytest-html
```

6. Baixe o driver do navegador apropriado. Para este exemplo, estamos usando o Microsoft Edge. Você pode encontrar o driver em [Microsoft Edge WebDriver](https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/).

7. Certifique-se de colocar o executável do driver em um local acessível no sistema (por exemplo, adicione-o ao PATH).

## Como executar

1. Clone este repositório em sua máquina:

```
git clone https://github.com/Izalp/Laboratorio_S206.git
```

2. Navegue até o diretório clonado:

```
cd selenium
```

3. Execute o script Python:
```
pytest test_login.py
```

4. Para gerar o relatório de testes, execute o comando abaixo:

```bash
pytest test_login.py --html=report.html
```
