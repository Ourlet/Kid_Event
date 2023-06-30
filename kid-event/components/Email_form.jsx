import styles from '../styles/Home.module.css'
import { useGlobalContext } from '../context'

const Email_form = () => {

    const { name, email, setName, setEmail } = useGlobalContext()

    const handleNameChange = (event) => {
        setName(event.target.value);
        console.log(event.target.value);
        };
        
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        console.log(event.target.value);
        };

    async function handleOnSubmit(e) {
      handleNameChange(e);
      handleEmailChange(e);
      e.preventDefault();
      
        const formData = {};
      
        Array.from(e.currentTarget.elements).forEach(field => {
          if ( !field.name ) return;
          formData[field.name] = field.value;
        });
      
        await fetch('/api/mail', {
          method: 'POST',
          body: JSON.stringify(formData)
        });
        console.log(formData)
      }

    async function sendList() {

    }

    return <div className={styles.grid}>
    <style jsx>{`
      form {
        font-size: 1.2em;
      }
  
      label {
        display: block;
        margin-bottom: .2em;
      }
  
      input,
      textarea {
        width: 100%;
        padding: .8em;
      }
  
      button {
        color: white;
        font-size: 1em;
        background-color: blueviolet;
        padding: .8em 1em;
        border: none;
        border-radius: .2em;
      }
    `}</style>
    <form method="post" onSubmit={handleOnSubmit}>
    <p>
      <label htmlFor="name"  >Name</label>
      <input id="name" type="text" name="name" value={name} onChange={handleNameChange} />
    </p>
    <p>
      <label htmlFor="email" >Email</label>
      <input id="email" type="text" name="email" value={email} onChange={handleEmailChange}  />
    </p>
    <p>
      <button>Submit</button>
    </p>
  </form>
  </div>
  
  }
  
  export default Email_form;