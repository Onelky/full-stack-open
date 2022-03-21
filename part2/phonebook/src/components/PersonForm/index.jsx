import React, {useState} from 'react';
import PropTypes from 'prop-types';

const PersonForm = props => {
    const {onSubmit} = props;
    const [newName, setNewName] = useState('');
    const [newPhone, setNewPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(newName, newPhone);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={({target}) => setNewName( target.value)} />
                </div>
                <div>number: <input value={newPhone} onChange={({target}) => setNewPhone( target.value)} /></div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    );
};

PersonForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default PersonForm;
