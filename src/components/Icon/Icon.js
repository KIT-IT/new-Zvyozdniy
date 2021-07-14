import React from 'react';
import IconsSVG from '../../assets/icons/iconsSprite.svg';

function Icons({name, color, size, className}) {

  return(
    <svg className={`icon icon-${name} ${className}`} fill={color}  width={size} height={size}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  )
}

// stroke={color} - убрал этот атрибут потомучто к некоторым иконкам добавлял обводку ненужную

export default Icons;