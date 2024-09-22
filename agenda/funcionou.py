from tkinter import *
import os

# Define o caminho do arquivo de dados
diretorio = os.path.dirname(__file__)
nome_do_arquivo = os.path.join(diretorio, "dados.txt")

app = Tk()

class Aplication:
    def __init__(self):
        self.app = app
        self.tela()
        app.mainloop()
    
    def impDados(self):
        # Abre o arquivo no modo append (acrescenta no final do arquivo)
        arquivo = open(nome_do_arquivo, "a")

        # Obtém os dados dos campos de entrada
        nome_usuario = self.nome.get()
        telefone_usuario = self.endereco.get()
        email_usuario = self.cpf.get()
        obs_usuario = self.idade.get("1.0", END).strip()  # Obtém o texto do widget Text
        
        # Escreve os dados no arquivo
        arquivo.write(f"Nome....: {nome_usuario}\n")
        arquivo.write(f"Endereço: {telefone_usuario}\n")
        arquivo.write(f"CPF.....: {email_usuario}\n")
        arquivo.write(f"Idade...: {obs_usuario}\n")
        arquivo.write("\n")  # Adiciona uma linha em branco entre entradas
        arquivo.close()
       
        # Atualiza o campo de exibição de dados
        self.dados_usuario.config(
            text=(
                f"Nome: {nome_usuario}\n"
                f"Endereço: {telefone_usuario}\n"
                f"CPF: {email_usuario}\n"
                f"Idade: {obs_usuario}"
            )
        )
    
    def deletarDados(self):
        # Limpa os campos de entrada
        self.nome.delete(0, END)
        self.endereco.delete(0, END)
        self.cpf.delete(0, END)
        self.idade.delete("1.0", END)
        
        # Limpa o campo de exibição dos dados do usuário
        self.dados_usuario.config(text="")
    
    def tela(self):
        self.app.title("Agenda")
        self.app.geometry("500x500")
        self.app.configure(background="#ccc")
        
        # Campo Nome
        Label(app, text="Nome: ", background="#fff", foreground="#009", anchor=W).place(x=10, y=10, width=100, height=20)
        self.nome = Entry(app)
        self.nome.place(x=10, y=30, width=200, height=20)
        
        # Campo Endereço
        Label(app, text="Endereço: ", background="#fff", foreground="#009", anchor=W).place(x=10, y=60, width=100, height=20)
        self.endereco = Entry(app)
        self.endereco.place(x=10, y=80, width=200, height=20)
        
        # Campo CPF
        Label(app, text="CPF: ", background="#fff", foreground="#009", anchor=W).place(x=10, y=110, width=100, height=20)
        self.cpf = Entry(app)
        self.cpf.place(x=10, y=130, width=200, height=20)
        
        # Campo Idade
        Label(app, text="Idade: ", background="#fff", foreground="#009", anchor=W).place(x=10, y=160, width=100, height=20)
        self.idade = Text(app)
        self.idade.place(x=10, y=180, width=300, height=30)
        
        # Campo de exibição dos dados do usuário
        self.dados_usuario = Label(app, text="", background="#eee", foreground="#000", anchor=NW, justify=LEFT)
        self.dados_usuario.place(x=10, y=230, width=400, height=200)
        
        # Botão para mostrar os dados
        Button(app, text="Mostrar dados", command=self.impDados).place(x=10, y=220, width=100, height=20)
        
        # Botão para deletar os dados
        Button(app, text="Deletar dados", command=self.deletarDados).place(x=120, y=220, width=100, height=20)

Aplication()
