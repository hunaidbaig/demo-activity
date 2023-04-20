import { fireEvent, render, screen } from "@testing-library/react"
import App from "./App"
import NewPost from "./components/NewPost";

describe('checking API data', ()=>{
    test('App is running',()=>{
        render(<App />);
        const myb = screen.getByText('Blog Post')
        expect(myb).toBeInTheDocument
    });

    test('checking label existing',()=>{
        const  {getByPlaceholderText}  = render(<NewPost />);
        const label = getByPlaceholderText(/Enter title/i);
        expect(label).toBeInTheDocument
    })

    test('checking button existence',() =>{
        render(<NewPost />);
        const btn = document.querySelector('button')
        expect(btn).toBeInTheDocument
    })


})