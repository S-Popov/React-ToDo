import React from 'react';

const date = new Date();
const styles = {
  fontSize: 10, 
  marginLeft: 20,
}

if (date.getHours() < 12) {
    styles.color = " lightseagreen " // morning
} else {
    styles.color = " blue " // afternoon
}
const Header = () => 
    <div>
        <header className="navbar">This is my TO-DO list</header>
        <p style={styles}>Last load at: {`${date.getHours()}:${date.getMinutes()}` }</p>
    </div>

export default Header;