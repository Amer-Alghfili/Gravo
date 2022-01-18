import "./DialogItem.css";
import customerImg from "../../img/customer-img.svg";
import hostImg from "../../img/icons8-customer-support-50.svg";
export default function DialogItem({ type, children }) {
  return (
    <div className={`dialog ${type}`}>
      <p>{children}</p>
      <div className="dialog__img--container">
        <img src={type === "visitor" ? customerImg : hostImg} alt={type} />
      </div>
    </div>
  );
}
