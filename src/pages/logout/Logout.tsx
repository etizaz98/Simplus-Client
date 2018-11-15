import * as React from "react"
import Cookies from 'universal-cookie';
const cookie = new Cookies();
const css = `
.si-nav-bar {
	position: fixed;
	z-index : 999;
	width: 100%;
	
	overflow-x : hidden;
	
	
	&::before, &::after{
		box-sizing: border-box;
	}
}

.footer {
	height: 150px;
    position: absolute;
    top: 100%;
    width: 100%;
    background-color: #3FCC8C;
    display: flex;
    justify-content: space-around;
    padding: 2rem;
}

body{
	overflow-x : hidden;
}
`

export class Logout extends React.Component<any, any>{

	constructor(){

		super()
const serverUrl='http://localhost:3000'
cookie.remove('token');
cookie.remove('name');
window.location.assign(serverUrl);
}
	render(){	

		return (<div>logout</div>);
	}

}

export default Logout;