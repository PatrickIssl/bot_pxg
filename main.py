import PIL
import base64
import Pesca
import dataBase

table = "options"
colums = "*"
nome = "Catar matos pequenos"
codigo = "3"
order = "codigo"

# --------------------------codificar e salvar no banco-----------------------------------
#with open("imagens/agua.png", "rb") as image_file:
#    encoded_string = base64.b64encode(image_file.read())
#dataBase.add_fotos(encoded_string, 1, "agua")

# --------------------------comandos banco------------------------------------------------
# dataBase.add_options(table, nome, codigo)
# dataBase.delete_options(table, codigo)

# -------------------------Imprimir menu--------------------------------------------------
quantidade = dataBase.read_options("name", table, order)
x = 0
while x < len(quantidade):
    print(x + 1, " - ", str(quantidade[x]).strip("[](),)':"))
    x = x + 1
selected_option = input("Selecione uma opção:")
selected_option = int(selected_option) - 1
# -------------------------Se opção escolhida for Pescar--------------------------------------------------
if selected_option == 1:
    Pesca.iniciate()
