import ismayoredad from "../utils/ismayoredad";

describe('ismayoredad', () =>{

    it('debe devolver un valor booleano', () =>{
        const result = ismayoredad(12)
        expect(typeof result).toBe('boolean');
    })

    it('debe devolver true si la edad es 18', () =>{
        const result = ismayoredad(18)
        expect(result).toBe(true);
    })

    it('debe devolver true si la edad es mayor a 18', () =>{
        const result = ismayoredad(18)
        expect(result).toBe(true);
    })
    
    it('debe devolver false si la edad es menor a 18', () =>{
        const result = ismayoredad(17)
        expect(result).toBe(false);
    })
    
    it('debe devolver null si la edad es negativa', () =>{
        const result = ismayoredad(-1)
        expect(result).toBeNull();
    })
})