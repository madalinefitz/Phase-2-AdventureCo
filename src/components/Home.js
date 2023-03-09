import styles from "./mystyle.module.css";
import {useState} from 'react';
import {Message} from 'semantic-ui-react'

function Home(){

    const [showEurope, setShowEurope] = useState(false)

    const handleClick = () => {
        setShowEurope(showEurope => !showEurope)
    }


    //Multilingual Greeting
    const [allHellos, setAllHellos] = useState('Hello')
    const [i, setI] = useState(0)

    const hello =[ 'Hello', 'Buenos Dias', 'Bonjour', 'Guten Morgen' ]

    const changeGreeting = setTimeout(() => { 
        setAllHellos(hello[i])
        setI((i + 1) % hello.length)
        }, 3000); 

    const handleGreetingChange = (e)=>{
        changeGreeting(e.target.value)
    }

   return(
            <div>
                <h1 className={styles.hello} onChange={handleGreetingChange}>{allHellos}</h1>
                <h1 className={styles.homeHeader}>Welcome to the Big World</h1>
                { showEurope ? 
                    <div className={styles.europeMessage}>
                        <h2>You've selected a Summer Getaway to Europe!</h2>
                        <p>Visit our Destinations page to see information about countries you can visit!</p>
                    </div> :
                    null  
                }
                <img src="https://logodix.com/logo/27288.gif" alt="world map" className={styles.homeImg} useMap="#workmap"/>
                <map name="workmap">
                    <area shape="circle" coords="415, 85, 37" alt="Europe" onClick={handleClick} className={styles.Europe}/>
                </map>
            </div>
    )
}

export default Home;


// https://logodix.com/logo/27288.gif
// https://static.vecteezy.com/system/resources/previews/006/476/043/non_2x/world-map-on-white-background-world-map-template-with-continents-north-and-south-america-europe-and-asia-africa-and-australia-vector.jpg



