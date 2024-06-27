export class Local {
    constructor(id, type_local, price_night, photo_url_link, district, street, country, city, description) {
        this.id = id;
        this.type_local = type_local;
        this.price_night = price_night;
        this.photo_url_link = photo_url_link;
        this.district = district;
        this.street = street;
        this.country = country;
        this.city = city;
        this.description = description;
    }

    static fromDisplayableLocal(displayableCard) {
        return new Local(
            displayableCard.id,
            displayableCard.type_local,
            displayableCard.price_night,
            displayableCard.photo_url_link,
            displayableCard.district,
            displayableCard.street,
            displayableCard.country,
            displayableCard.city,
            displayableCard.description
        );
    }

    static toDisplayableLocal(local) {
        return {
            id: local.id,
            type_local: local.type_local,
            price_night: local.price_night,
            photo_url_link: local.photo_url_link,
            district: local.district,
            street: local.street,
            country: local.country,
            city: local.city,
            description: local.description
        };
    }
}

