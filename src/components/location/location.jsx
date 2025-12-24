import style from './loaction.module.css'
const Location = () => {
  return (
    <div className={style.container} >
      <iframe
        title="Hattiban Resort Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56558.2220586938!2d85.19974894863277!3d27.627958000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb17decd1848c3%3A0x9e25ddb68c2281d6!2sHattiban%20Resort!5e0!3m2!1sen!2snp!4v1766586737793!5m2!1sen!2snp"
       className={style.frame}
      
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Location
