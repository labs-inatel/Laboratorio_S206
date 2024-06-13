from selenium import webdriver     # controlar o navegador
from selenium.webdriver.common.by import By   # Pra localizar elementos na página
# envia teclas do teclado para elementos
from selenium.webdriver.common.keys import Keys
import time  # Para realizar pausas


class TestLogin:
    # Inicializa o WebDriver do Edge
    def setup_class(self):
        global driver
        driver = webdriver.Edge()
        driver.maximize_window()

    def test_login(self):
        # Navega para a página inicial do GitHub
        driver.get('https://github.com/')

        # Encontra o botão/link de "Sign in" usando o nome da classe
        btn_link_signin = driver.find_element(
            By.CLASS_NAME, 'HeaderMenu-link--sign-in')

        # Clica no botão
        btn_link_signin.click()

        # Aguarda 2 segundos para garantir que a página de login seja carregada
        time.sleep(2)

        # Encontra o campo de login pelo ID
        field_login = driver.find_element(By.ID, 'login_field')
        # Digita o email no campo de login
        field_login.send_keys('email@aninha.com')

        # Encontra o campo de senha pelo ID
        field_password = driver.find_element(By.ID, 'password')
        # Digita a senha no campo de senha
        field_password.send_keys('admin123')

        # Envia a tecla ENTER para submeter o formulário de login
        field_password.send_keys(Keys.RETURN)

        # Aguarda 2 segundos para garantir que a resposta do login seja carregada
        time.sleep(2)

        # Encontra a mensagem de resultado do login pelo nome da classe
        label_result = driver.find_element(By.CLASS_NAME, 'js-flash-alert')

        # Imprime o texto da mensagem de resultado do login
        print(label_result.text)

# Fecha o navegador e encerra a sessão do WebDriver
    def teardown_class(self):
        driver.close()
