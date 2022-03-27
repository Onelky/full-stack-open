import React, {useState} from 'react';
import PropTypes from 'prop-types';

const PersonForm = props => {
    const {onSubmit} = props;
    const [newName, setNewName] = useState('');
    const [newNumber, setNewNumber] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const newPerson = {name: newName, number: newNumber};
        onSubmit(newPerson);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    name: <input value={newName} onChange={({target}) => setNewName( target.value)} />
                </div>
                <div>number: <input value={newNumber} onChange={({target}) => setNewNumber( target.value)} /></div>
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
