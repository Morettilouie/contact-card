// javascript
import "./form";
import  "./submit";
import { initdb, getDb, postDb } from "./database";
// images
import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
// css
import "../css/index.css";
//bootstrap
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

window.addEventListener('load', function() {
    initdb();
    getDb();
    postDb("Lernantino", "learnantino@test.com", 8186601234, "Bear");
    getDb(
        
    )
    document.getElementById('logo').src = Logo;
    document.getElementById('bearThumbnail').src = Bear;
    document.getElementById('dogThumbnail').src = Dog;
});