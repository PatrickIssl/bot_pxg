
from datetime import time
import PIL
import pyautogui
import base64

from matplotlib import image

import dataBase

# -----------------------------decodificar base 64 em imagem------------------
agua = dataBase.read_fotos("foto", "agua", "1")
img_agua = base64.b64decode(agua[0][0])

rod =dataBase.read_fotos("foto", "vara", "1")
img_rod = base64.b64decode(rod[0][0])
print(img_rod)

# -------------------------------encontrar posições--------------------
water_position = pyautogui.locateOnScreen(img_agua)
rod_position = pyautogui.locateOnScreen(img_rod)


# --------------------- puxar vara---------------------------------
def push_rod():
    pyautogui.click(rod_position)
    time.sleep(1)
    pyautogui.click(water_position)


def fish_detected():
    if pyautogui.locateOnScreen() is not None:
        return True


def iniciate():
    print("iniciando pesca em 3 segundos")
    time.sleep(3)
    push_rod()
    time.sleep(0.7)
    while True:
        if fish_detected():
            pyautogui.click(rod_position)
            time.sleep(1)
            push_rod()
