import "../style/profile.css";

export default function FriendInfo(props) {
  return (
    <div className={`profileInfo-div pb-3 ${props.order} mb-3`}>
      <figure className="profileFriend-figure"></figure>
      <div className="txtinfo-div">
        <label className="name-label">{props.name}</label>
        <span className="phone-span">(85) 98730-5363</span>
      </div>
    </div>
  );
}
