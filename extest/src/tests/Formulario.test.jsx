import {render, screen} from '@testing-library/react'
import Formulario from '../components/Formulario'
import userEvent from '@testing-library/user-event'

describe('Formulario', () => {
    
    let header
    let avatar
    let nameTextField
    let ageField
    let button

    beforeEach(() => {

        render(<Formulario />)
        header = screen.getByRole("heading", { level: 2 , name: "Rellena el formulario" })
        avatar = screen.getByAltText("icono")
        nameTextField = screen.getByRole("textbox", {name: "Nombre"})
        ageField = screen.getByRole("spinbutton", {name: "Edad"})
        button = screen.getByRole("button", {name: "Enviar"})

    })
    it("se renderiza la cabecera", () =>{
        expect(header).toBeInTheDocument()
    })
    it("se renderiza el avatar", () => {
        expect(avatar).toBeInTheDocument()
    })
    it("se renderiza el campo nombre", () => {
        expect(nameTextField).toBeInTheDocument()
    })
    it("se renderiza el campo edad", () => {
        expect(ageField).toBeInTheDocument()
    })
    it("se renderiza el botón enviar", () => {
        expect(button).toBeInTheDocument()
    })
    it("se renderiza cabecera de nivel 6 al rellenar formulario", async ()=>{
        const user = userEvent.setup()
        
        await user.type(nameTextField,"Tahiche")
        expect(nameTextField).toHaveValue("Tahiche")
     
       
        await user.type(ageField, "20")
        expect(ageField).toHaveValue(20)

        
        await user.click(button)

        
        expect(screen.getByRole("heading", { level: 6 })).toHaveTextContent("Eres mayor de edad")
    })
})