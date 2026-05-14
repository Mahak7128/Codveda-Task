
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Home() {
    const { username } = useContext(AppContext);

    return (
        <div classname = "page">
            <h1> Home page </h1>
            <br/>
            
            <h3> Hello {username},</h3>
            <br/>

        <p> Welcome to My Single Page Application!
            <br/>

        This application is built using React and React Router to provide a fast, smooth, and seamless user experience without full page reloads.
        We hope you enjoy exploring the application.The home demonstrates the detail about the working of SPA.
         <br/>
         
         <br/> 
        Explore the Home, About, and Contact pages with easy navigation and dynamic content updates. 
        The application also uses state management to maintain data across pages efficiently.No need of page reloading again and again. You can easily switch using the navlinks.
       

        <br/>
        <br/>

        This project demonstrates modern web development using React, React Router, and Context API for efficient navigation and state management. The application delivers a responsive and interactive experience with smooth page transitions and optimized performance.
        Experience fast and smooth navigation with our React-based Single Page Application. Browse through pages instantly without reloading and enjoy a seamless user experience.
        <br/>
        <br/>
        Thank you for visiting !</p>
        </div>
    );
}
export default Home;