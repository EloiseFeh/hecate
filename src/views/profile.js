import "../style/profile.css";
import ProfileInfo from "../components/profileInfo";
import FriendInfo from "../components/friendInfo";
import Button from "../components/button";
import DefaultMessage from "../components/defaultMessage";

export default function Profile() {
  return (
    <div className="body-container">
      <div className="header">
        <h2>Perfil</h2>
      </div>
      <div className="container px-3">
        <ProfileInfo />

        <div className="ContatoSeguranca mb-5">
          <h4 className="mb-3">Contatos de Segurança</h4>
          <FriendInfo order="first" name="Ana Luiza" />
          <FriendInfo name="Carla" />

          <Button text="+ Adicionar Contatos" />
        </div>

        <div className="Mensagem">
          <h4 className="mb-3">Mensagem</h4>
          <DefaultMessage />
          <Button text="Editar Mensagem" />
        </div>
      </div>
    </div>
  );
}
