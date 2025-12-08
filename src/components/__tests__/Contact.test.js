import { render ,screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom"

describe("contact us page Test cases",()=>{

    // beforeAll(()=>{
    //     console.log("Before all ")
    // })

    // beforeEach(()=>{
    //     console.log("before Each")
    // })
    // afterAll(()=>{
    //     console.log("After all ")
    // })

    // afterEach(()=>{
    //     console.log("After Each")
    // })

    test("should load contact us component",()=>{
        render(<Contact/>)
        const heading=screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    
    });
    test("should load button in contact us component",()=>{
        render(<Contact/>)
        const button=screen.getByRole("button");
        expect(button).toBeInTheDocument();
    
    })
    test("should load input name in contact us component",()=>{
        render(<Contact/>)
        const input=screen.getByPlaceholderText("name");
        expect(input).toBeInTheDocument();
    
    })
    test("should load 2 input boxes on the contact us component",()=>{
        render(<Contact/>)
        const inputboxes=screen.getAllByRole("textbox");
        expect(inputboxes.length).toBe(2);
    
    })
})
