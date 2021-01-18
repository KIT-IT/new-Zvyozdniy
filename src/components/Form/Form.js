import React, {useState} from 'react';

function Form({title, handleFormClose, isPopup}) {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })

    const sendEmail = e => {
        e.preventDefault()
        console.log('Send')
    }

    const onInputChange = e => {
        const { name, value} = e.target

        setForm({
            ...form,
            [name]: value
        })
    }
    return (
       isPopup
        ?  <div className="form-wrapper" onClick={handleFormClose}>
               <div className="form-body">
                   <div className="form-icon">
                       <div className="cl-btn-3" id="form-close" onClick={handleFormClose}>
                           <span className="top"></span>
                           <span className="bot"></span>
                       </div>
                   </div>
                   <div className="form-content-wrapper">
                       <div className="form-title _heading">
                           <div className="form-title__text">{title}</div>
                       </div>
                       <form className="form-main" onSubmit={sendEmail}>
                           <label htmlFor="name">Представтесь,пожалуйста: </label>
                           <input
                               className="form-input input"
                               type="text"
                               name="name"
                               value={form.name}
                               placeholder="Ваше имя"
                               onChange={onInputChange}
                           />

                           <label htmlFor="email">Введите ваш Email: </label>
                           <input
                               className="form-input input"
                               type="email"
                               name="email"
                               value={form.email}
                               placeholder="Ваш email"
                               onChange={onInputChange}
                           />

                           <label htmlFor="textarea">Введите ваш вопрос: </label>
                           <textarea
                               className="textarea"
                               name="textarea"
                               cols="30"
                               rows="3"
                               value={form.message}
                               placeholder="Ваше сообщение"
                               onChange={onInputChange}
                           />
                           <button className="form-button button" type="submit">Отправить</button>
                       </form>
                   </div>
               </div>
           </div>
           : <div className="contacts-form">
               <div className="form-title _heading element-with-changing-styles">
                   <div className="form-title__text">{title}</div>
               </div>
               <form className="form-main" onSubmit={sendEmail}>
                   <label htmlFor="name element-with-changing-styles">Представтесь,пожалуйста: </label>
                   <input
                       className="form-input input element-with-changing-styles"
                       type="text"
                       name="name"
                       value={form.name}
                       placeholder="Ваше имя"
                       onChange={onInputChange}
                   />

                   <label htmlFor="email element-with-changing-styles">Введите ваш Email: </label>
                   <input
                       className="form-input input element-with-changing-styles"
                       type="email"
                       name="email"
                       value={form.email}
                       placeholder="Ваш email"
                       onChange={onInputChange}
                   />

                   <label htmlFor="textarea element-with-changing-styles">Введите ваш вопрос: </label>
                   <textarea
                       className="textarea element-with-changing-styles"
                       name="textarea"
                       cols="30"
                       rows="3"
                       value={form.message}
                       placeholder="Ваше сообщение"
                       onChange={onInputChange}
                   />
                   <button className="form-button button element-with-changing-styles" type="submit">Отправить</button>
               </form>
           </div>
    );
}

export default Form;