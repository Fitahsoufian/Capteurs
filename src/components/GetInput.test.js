import {render , screen, claenup} from '@testing-library/react'
import GetInput from "./GetInput"
import TodoTextInput from './GetInput'




// describe(GetInput , () =>{
// It("should render the input value in the next item ", () => {
//     const {getByTestId} = render(<GetInput text={this.handleSubmit}/>)
//     const textValue = getByTestId("text").textContent
// } )
// })
test ('should render compenent', ()=>{
    render(<TodoTextInput/>)
    const CapteurElement = screen.getByTestId('capteur 1');
    expect(CapteurElement).toBeInDocument();
    expect(CapteurElement).toHaveTextContent({ text: e.target.value  })
  })