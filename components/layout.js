import React from 'react';
import Head from 'next/head';
import Navegador from './navegador';

const Layout = (props) => {
    return ( 
        <div>
            <Head>
            <title>Next.js Proyect</title>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            </Head>
            <Navegador/>
            <div className="container p-4">
                {props.children}
            </div>
        </div>
     );
}
 
export default Layout;