import { makeAutoObservable } from "mobx";

export default class DeviceStore {
    constructor() {
        this._types = [
            { id: 1, name: "Холодильники" },
            { id: 2, name: "Смартфоны" },
            { id: 3, name: "Ноутбуки" },
            { id: 4, name: "Телевизоры" },
        ];
        this._brands = [
            { id: 1, name: "Samsung" },
            { id: 2, name: "Apple" },
            { id: 3, name: "Xiaomi" },
            { id: 4, name: "Pixel" },
        ];
        this._devices = [
            {
                id: 1,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://ilounge.ua/files/products/apple-iphone-12-pro-max-128gb-pacific-blue-21.1000x.jpg",
            },
            {
                id: 2,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://ilounge.ua/files/products/apple-iphone-12-pro-max-128gb-pacific-blue-21.1000x.jpg",
            },
            {
                id: 3,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://ilounge.ua/files/products/apple-iphone-12-pro-max-128gb-pacific-blue-21.1000x.jpg",
            },
            {
                id: 4,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://ilounge.ua/files/products/apple-iphone-12-pro-max-128gb-pacific-blue-21.1000x.jpg",
            },
            {
                id: 5,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://ilounge.ua/files/products/apple-iphone-12-pro-max-128gb-pacific-blue-21.1000x.jpg",
            },
            {
                id: 6,
                name: "Iphone 12 pro",
                price: 25000,
                rating: 5,
                img: "https://ilounge.ua/files/products/apple-iphone-12-pro-max-128gb-pacific-blue-21.1000x.jpg",
            },
            (this._selectedType = {}),
            (this._selectedBrand = {}),
        ];
        makeAutoObservable(this);
    }
    setTypes(types) {
        this._types = types;
    }
    setBrands(brands) {
        this._brands = brands;
    }
    setDevices(devices) {
        this._devices = devices;
    }

    setSelectedType(type) {
        this._selectedType = type;
    }
    setSelectedBrand(brand) {
        this._selecteBrand = brand;
    }

    get types() {
        return this._types;
    }
    get brands() {
        return this._brands;
    }
    get devices() {
        return this._devices;
    }
    get selectedType() {
        return this._selectedType;
    }
    get selectedBrand() {
        return this._selectedBrand;
    }
}
