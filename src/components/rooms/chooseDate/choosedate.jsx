import style from './choosedate.module.css';    

const Choosedate = () => {
  return (
    <div className={style.container}>
      <div>
        <label htmlFor="">select Date</label>
        <input type="date" />
      </div>
    </div>
  )
}

export default Choosedate;
