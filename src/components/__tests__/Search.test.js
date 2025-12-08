import { fireEvent, render ,screen} from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mocResListData.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})
test("should search res list for burge text input",async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        )
    })
    const cardsBeforeSearch=screen.getAllByTestId("resCard")
    expect(cardsBeforeSearch.length).toBe(9)
    const searchbutton=screen.getByRole("button",{name:"Search"})
    const SearchInput=screen.getByTestId("SearchInput")
    fireEvent.change(SearchInput,{target:{value:"burger"}})
    fireEvent.click(searchbutton);
    const cardsAfterSearch=screen.getAllByTestId("resCard");
    expect(cardsAfterSearch.length).toBe(1);
})

test("should Filter Top Rated Restaurant",async()=>{
    await act(async()=>{
        render(
            <BrowserRouter>
            <Body/>
            </BrowserRouter>
        )
    })
    const cardsBeforeFilter=screen.getAllByTestId("resCard")
    expect(cardsBeforeFilter.length).toBe(9)

    const topRatedBtn=screen.getByRole("button",{name:"Top Rated Restaurants"})
    fireEvent.click(topRatedBtn)
    const cardsAfterFilter=screen.getAllByTestId("resCard")
    expect(cardsAfterFilter.length).toBe(3)
    
})