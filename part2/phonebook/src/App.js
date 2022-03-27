import {useEffect, useState} from 'react'
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import service from './services/persons'
import Notification from "./components/Notification";

const App = () => {
    const [persons, setPersons] = useState([]);
    const [filter, setFilter] = useState('');
    const [notificationMessage, setNotificationMessage] = useState(null);
    const [notificationType, setNotificationType] = useState('');

    useEffect(() => {
        service.getAll()
            .then((response) => setPersons(response))
            .catch((error) => console.log(error));
    }, []);


    const showNotification = (message) => {
        setNotificationMessage(message);
        setTimeout(() => {
            setNotificationMessage(null)
        }, 5000)
    };
    const onSubmit = (newPerson) =>{
        const existingPerson = persons.find((person) => person.name === newPerson.name);

        if (!existingPerson){
            service.add(newPerson)
                .then((response) => {
                    setPersons(persons.concat(response))
                    showNotification(`Added ${response.name}`)
                })
                .catch((error) => console.error(error))
        }
        else{
            service.update(existingPerson.id, newPerson)
                .then((response) =>{
                    setPersons(persons.map(person => person.id !== response.id ? person : response));
                    showNotification(`Updated ${response.name}`)
                })
                .catch((error) =>{
                    console.error(error);
                })

        }
    }

    const handleDelete = ({name, id}) =>{
        if(window.confirm(`Delete ${name}?`)){
            service.delete(id)
                .then(() => setPersons(persons.filter((person) => person.id !== id)))
                .catch(() => {
                    setNotificationType('error');
                    showNotification(`Information of ${name} has already been removed from server`)
                })
        }
    }
    return (
        <div>
            <h2>Phonebook</h2>
            {notificationMessage && <Notification type={notificationType} message={notificationMessage}/>}
            <Filter filter={filter} setFilter={setFilter}/>
            <h2>Add a new</h2>
            <PersonForm onSubmit={onSubmit}/>
            <h2>Numbers</h2>
            <Persons persons={persons} handleDelete={handleDelete} filter={filter}/>
        </div>
    )
}

export default App