import "../style/profile.css";
import ProfileInfo from "../components/profileInfo";
import FriendInfo from "../components/friendInfo";
import Button from "../components/button";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import React, { useState, useEffect } from "react";

export default function Profile() {
  const [mensagem, setMensagem] = useState(localStorage.getItem("MENSAGEM"));

  const UpdateMsn = (e) => {
    e.preventDefault();
    localStorage.setItem("MENSAGEM", mensagem);
    setMensagem(mensagem);
    alert("Mensagem alterada com sucesso!");
  };

  useEffect(() => {
    console.log("mensagem ", mensagem);
  }, [mensagem]);

  return (
    <div className="body-container">
      <div className="header">
        <h2>Perfil</h2>
      </div>
      <div className="container px-3">
        <ProfileInfo />

        <div className="ContatoSeguranca mb-5">
          <h4 className="mb-3">Contatos de Segurança</h4>
          <FriendInfo name="Ana Luiza" />
          {/* <FriendInfo name="Carla" /> */}

          <Button text="+ Adicionar Contatos" />
        </div>

        <div className="Mensagem">
          <h4 className="mb-3">Mensagem</h4>
          <p>
            Escreva sua mensagem padrão de ajuda, as mudanças serão aplicadas
            automaticamentes ao submeter uma nova
          </p>
          <form class="formMensagem" onSubmit={UpdateMsn}>
            <TextareaAutosize
              aria-label="minimum height"
              minRows={3}
              placeholder="Escreva sua mensagem"
              style={{ width: 300 }}
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              className="mb-4"
            />
            <Button text="Editar Mensagem" />
          </form>
        </div>
      </div>
    </div>
  );
}
