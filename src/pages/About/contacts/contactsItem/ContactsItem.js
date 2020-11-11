import React from 'react'

function ContactsItem({title, srcToMap, arddressTitle,ardressText,worktimeTitle,worktimeText,phoneTitle,phoneText, srcImg, altImg}) {
    return (
       <>
            <li className="contacts-item">
                  <div className="contacts-item__body">
                    <div className="contacts-flex">
                        <div className="contacts-img">
                            <img className="contacts-img__img" src={srcImg} alt={altImg}/>
                        </div>
                        <div className="contacts-info">
                            <div className="contcts-title">
                                <h2 className="contacts-title__title _subtitle">{title}</h2>
                            </div>
                            <div className="contacts-info__block">
                                <h2 className="contacts-info__block_title _subtitle">{arddressTitle}</h2>
                                <p className="contacts-info__block_text">{ardressText}</p>
                            </div>
                            <div className="contacts-info__block">
                                <h2 className="contacts-info__block_title _subtitle">{worktimeTitle}</h2>
                                <p className="contacts-info__block_text">{worktimeText}</p>
                            </div>
                            <div className="contacts-info__block">
                                <h2 className="contacts-info__block_title _subtitle">{phoneTitle}</h2>
                                <p className="contacts-info__block_text">{phoneText}</p>
                            </div>
                        </div>
                    </div>
                    <div className="contacts-map">
                        <div className="contacts-map__map">
                            <iframe src={srcToMap} width="100%" height="150px" frameBorder="0" title="library"></iframe>
                        </div>
                    </div>
                  </div>
            </li>
       </>
    )
 }
 
 export default ContactsItem