from selenium import webdriver   # controlar o navegador
from selenium.webdriver.common.by import By  # Pra localizar elementos na página
from selenium.webdriver.support.ui import WebDriverWait    # Pra usar waits
# cond esperadas para os waits
from selenium.webdriver.support import expected_conditions as EC


class TestSearch:
    # Inicializa o Webdrive do Edge
    @classmethod
    def setup_class(cls):
        cls.driver = webdriver.Edge()
        cls.driver.maximize_window()
        cls.wait = WebDriverWait(cls.driver, 10)  # Wait_limit = 10 seg

    def test_search(self):
        # Navega para a página inicial da Wikipedia
        self.driver.get('https://www.wikipedia.org')

        # Aguarde até que o campo de pesquisa fique visível
        search_input = self.wait.until(
            EC.visibility_of_element_located((By.ID, 'searchInput'))
        )

        # Pesquisa por selenium na barra de pesquisa
        search_input.send_keys('selenium')

        # Aguarde até que o botão de pesquisa fique clicável
        search_button = self.wait.until(
            EC.element_to_be_clickable(
                (By.CLASS_NAME, 'pure-button.pure-button-primary-progressive'))
        )
        search_button.click()

        # Aguarde até que o cabeçalho dos resultados fiquem visíveis
        self.wait.until(
            EC.visibility_of_element_located((By.ID, 'firstHeading'))
        )

# Fecha o navegador e encerra a sessão do WebDriver
    @classmethod
    def teardown_class(cls):
        cls.driver.quit()
