export const validateFields = (inputObject) => {

    const errors = {};

    if(!inputObject.email) {
        errors.email = "El campo email es requerido"
    }

    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(inputObject.email)) {
        errors.email = "No es un email válido"
    }

    if(!inputObject.password) {
        errors.password = "El campo contraseña es requerido"
    }

    return errors;
}