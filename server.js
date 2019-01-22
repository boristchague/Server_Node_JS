/* 
import 
- Import tous les modules *
*/
    require('dotenv').config();
    const express = require ('express');
    const path = require('path');
    const ejs  = require ('ejs'); // permet d'expliquer a js ce que c'est que html
    const bodyParser = require('body-parser') //Permet d'xtraire les données depuis le côté client 

// 

/*
configuration 
- Défintion du server 
*/
    const server = express();
    const port = process.env.PORT; // Permet de proteger les accès token facebook ou autre. 


    class ServerClass{
        init(){
            //=> Client folder
            server.set('views', __dirname + '/www');
            server.use( express.static(path.join(__dirname, 'www')) );

            //=> View engine
            server.engine('html', ejs.renderFile );
            server.set( 'view engine', 'html');

            //=> Set Body-parser
            server.use( bodyParser.json( { limit: '10mb' } ) );
            server.use( bodyParser.urlencoded( { extended: true} ) );

            //=> Start server
            this.launch();
        }

        launch(){
            server.listen( port, () => {
                console.log(`Server listenin on port ${port}`);
            });
        }
    }
//

/* 
Lancer leseur 
*/
    new ServerClass().init();
//