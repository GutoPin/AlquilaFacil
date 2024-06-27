export class SignUpRequest {
    constructor(username, password, first_name, father_name, mother_name, birth_date, phone_number, document_number) {
        this.username = username;
        this.password = password;
        this.first_name = first_name;
        this.father_name = father_name;
        this.mother_name = mother_name;
        this.birth_date = birth_date;
        this.phone_number = phone_number;
        this.document_number = document_number;

    }
}