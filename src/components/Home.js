import styles from "./mystyle.module.css";
import {useState} from 'react';

function Home(){

    const [showEurope, setShowEurope] = useState(false)

    const handleClick = () => {
        setShowEurope(showEurope => !showEurope)
    }


    //Multilingual Greeting
    const [allHellos, setAllHellos] = useState('')
    const [i, setI] = useState(0)

    const hello =[ 'Hello', 'Buenos Dias', 'Bonjour', 'Guten Morgen' ]

    const changeGreeting = setTimeout(() => { 
        setAllHellos(hello[i])
        setI((i + 1) % hello.length)
        }, 1000); 

    const handleGreetingChange = (e)=>{
        changeGreeting(e.target.value)
    }

   return(
            <div>
                <h1 className={styles.hello} onChange={handleGreetingChange}>{allHellos}</h1>
                <h1 className={styles.homeHeader}>Welcome to the Big World</h1>
                { showEurope ? 
                    <div className={styles.europeMessage} >
                        <h2>You've selected a Summer Getaway to Europe!</h2>
                        <p>Check out our destinations page for some inspo</p>
                        <h3>📍</h3>
                    </div> :
                    null  
                }
                <img src="https://logodix.com/logo/27288.gif" alt="world map" className={styles.homeImg} useMap="#workmap"/>
                <map name="workmap">
                    <area shape="circle" coords="600, 125, 37" alt="Europe" onClick={handleClick} className={styles.Europe}/>
                </map>
            </div>
    )
}

export default Home;


// https://logodix.com/logo/27288.gif
// https://static.vecteezy.com/system/resources/previews/006/476/043/non_2x/world-map-on-white-background-world-map-template-with-continents-north-and-south-america-europe-and-asia-africa-and-australia-vector.jpg



