// import Navbar from 'NavBar';
import { BrowserRouter } from 'react-router-dom';
import App from '../App'
import {render, screen, cleanup} from "@testing-library/react"

test('When user is in index route(/) then render NavBar component', () => {
    window.history.pushState({}, "", "/");
    render(
        <BrowserRouter>
            <App />
         </BrowserRouter> 
    );
    expect(screen.getByTestId('navbar')).toBeInTheDocument();
});
test('test',()=>{
    expect(true).toBe(true);
})