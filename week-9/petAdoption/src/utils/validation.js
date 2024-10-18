export const validation = (name, value, errors) => {
    switch (name) {
        case "petName":
            errors.petName =
                value.length < 3 ? "Pet Name must be at least 3 characters" : "";
            break;
        case "breed":
            errors.breed =
                value.length < 3 ? "Breed must be at least 3 characters" : "";
            break;
        case "adopterName":
            errors.adopterName =
                value.length < 3 ? "Your Name must be at least 3 characters" : "";
            break;
        case "email":
            errors.email = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? "" : "Invalid email address";
            break;
        case "phone":
            errors.phone = /^\d{10}$/.test(value)
                ? ""
                : "Please enter a valid 10-digit phone number!";
            break;
        default:
            break;
    }
    return errors;
};