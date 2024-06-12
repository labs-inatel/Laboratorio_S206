from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
import time


class TestLogin:
    def setup_class(self):
        global driver
        driver = webdriver.Edge()
        driver.maximize_window()

    def test_login(self):
        driver.get('https://github.com/')

        btn_link_signin = driver.find_element(
            By.CLASS_NAME, 'HeaderMenu-link--sign-in')

        btn_link_signin.click()

        time.sleep(2)

        field_login = driver.find_element(By.ID, 'login_field')
        field_login.send_keys('email@aninha.com')
        field_password = driver.find_element(By.ID, 'password')
        field_password.send_keys('admin123')
        field_password.send_keys(Keys.RETURN)

        time.sleep(2)

        label_result = driver.find_element(By.CLASS_NAME, 'js-flash-alert')

        print(label_result.text)

    def teardown_class(self):
        driver.close()
