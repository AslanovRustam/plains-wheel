import s from "./wheel.module.css";
import wheel from "../../images/wheel.png";
import bonuses from "../../images/bonuses.png";
import btnSpin from "../../images/btn_spin.png";

export default function Wheel() {
  return (
    <div className={s.container}>
      <img className={s.wheel} src={wheel} alt="wheel" />
      <img className={s.bonuses} src={bonuses} alt="bonuses" />
      <img className={s.btnSpin} src={btnSpin} alt="btnSpin" />
      <div className={s.btn}>RODAR</div>
    </div>
  );
}
