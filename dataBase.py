import mysql.connector

banco = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="",
    database="bot_pxg"
)


def add_fotos(img, codigo, nome):
    cursor = banco.cursor()
    comando_sql = "INSERT INTO fotos (foto,codigo_option,nome_foto) values (%s,%s,%s)"
    dados = (img, codigo, nome)
    cursor.execute(comando_sql, dados)
    banco.commit()


def add_options(table, nome, codigo):
    cursor = banco.cursor()
    comando_sql = "INSERT INTO " + table + " (name,codigo) values (%s,%s)"
    dados = (nome, codigo)
    cursor.execute(comando_sql, dados)
    banco.commit()


def read_options(colums, table, order):
    cursor = banco.cursor()
    comando_sql = "Select " + colums + " from " + table + " ORDER BY " + order
    cursor.execute(comando_sql)
    values = cursor.fetchall()
    return values;


def read_fotos(colums, nome, codigo):
    cursor = banco.cursor()
    comando_sql = "Select " + colums + " from fotos where nome_foto = '" + nome + "' and codigo_option = '" + codigo + "'"
    cursor.execute(comando_sql)
    values = cursor.fetchall()
    return values;


def delete_options(table, cod):
    cursor = banco.cursor()
    comando_sql = "DELETE FROM " + table + " where codigo =" + cod
    dados = cod
    cursor.execute(comando_sql, dados)
    banco.commit()
