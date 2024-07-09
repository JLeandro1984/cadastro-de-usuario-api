import { useEffect } from "react";
import { useState } from "react";
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

function Home() {
  let users = [];

  async function getUsers() {
    const usersFromApi = await api.get("/usuarios");

    users = usersFromApi.data;
    console.log(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Informe o nome" name="nome" type="text" />
        <input placeholder="Informe a idade" name="idade" type="number" />
        <input placeholder="Informe o e-mail" name="email" type="text" />
        <button type="button">Cadastrar</button>
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>
              Nome: <span>{user.name}</span>
            </p>
            <p>
              Idade: <span>{user.age}</span>
            </p>
            <p>
              Email: <span>{user.email}</span>
            </p>
          </div>
          <button>
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
