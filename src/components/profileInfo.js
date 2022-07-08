import "../style/profile.css";

export default function ProfileInfo() {
  return (
    <div className="profileInfo-div mb-5 ml-4">
      <figure className="profile-figure"></figure>
      <div className="txtinfo-div">
        <h3 className="name-title">Cristina</h3>
        <span className="phone-span">(85) 99999-9999</span>
      </div>
    </div>
  );
}
