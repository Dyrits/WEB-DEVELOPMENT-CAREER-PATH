'use strict';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png'
};

const CopyCat = ({ copying, onClick, value, onChange, name, onAuxClick }) => {
  return (
    <div style={styles.divStyles}>
      <h1>Copy Cat {name}</h1>
      <input
        type='text'
        value={value}
        onChange={onChange}
      />
      <img
        style={styles.imgStyles}
        alt='cat'
        src={copying ? images.copycat : images.quietcat}
        onClick={onClick}
        onAuxClick={onAuxClick}
      />
      <p>{ copying && value }</p>
    </div>
  );
}
