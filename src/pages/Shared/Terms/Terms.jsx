import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h1>This is terms and conditions</h1>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;