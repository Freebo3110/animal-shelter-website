import React from 'react';

function Contact (){
return( 
    <div>
        <div className='cont'>
            <h1 className='back'>Our contacts</h1>
        </div>
        
        <div style={styles.contactContainer}>
            <div className='contactItem'>
                <strong>Email: </strong>
                <a href="mailto:kutkova88@gmail.com" className='linkt'>shelter@gmail.com</a>
            </div>

            <div className='contactItem'>
                <strong>Telegram: </strong>
                <a href="https://t.me/Freebo31" target="_blank" rel="noopener noreferrer" className='linkt'>@Shelter</a>
            </div>

            <div className='contactItem'>
                <strong>Instagram: </strong>
                <a href="https://instagram.com/freebo31" target="_blank" rel="noopener noreferrer" className='linkt'>@Shelter</a>
            </div>
        </div>
    </div>
    )
}

const styles = {
    contactContainer: {
    width: '50%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#89f082',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }
};

export default Contact;