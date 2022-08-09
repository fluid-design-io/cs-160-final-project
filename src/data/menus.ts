export interface Menu {
    menuName: string;
    menuDescription: string;
    price: string;
    image?: string;
    id: number;
}

export const menus: Menu[] = [
    {
        menuName: "Matcha Latte",
        menuDescription: "Matcha imported from Japan mixed with milk",
        price: "$ 6.5",
        image: "https://www.acozykitchen.com/wp-content/uploads/2017/04/IcedMatchaLatte-7.jpg",
        id: 0
    },
    {
        menuName: "Brown Sugar Boba",
        menuDescription: "Classic milk tea with brown sugar boba adds sweetness",
        price: "$ 6.0",
        image: "https://takestwoeggs.com/wp-content/uploads/2021/04/Brown-Sugar-Milk-Tea-Boba-Recipe-Takestwoeggs-Easy-Asian-Inspired-Recipes-3.jpg",
        id: 1
    },
    {
        menuName: "Dalgona Matcha",
        menuDescription: "Korean style fluffy cloud matcha latte",
        price: "$ 6.5",
        image: "https://takestwoeggs.com/wp-content/uploads/2021/04/matcha-dalgona-takes-two-eggs-asian-fusion-feature-image-2.jpg",
        id: 2
    },
    {
        menuName: "Taro Milk Tea",
        menuDescription: "Contains real sweet and creamy taro root",
        price: "$ 5.5",
        image: "https://takestwoeggs.com/wp-content/uploads/2022/03/Taro-Milk-Tea-Final-Photography-1.jpg",
        id: 3
    },
    {
        menuName: "Strawberry Milk",
        menuDescription: "Strawberry puree made daily with fresh & organic strawberries",
        price: "$ 7.0",
        image: "https://takestwoeggs.com/wp-content/uploads/2021/03/Homemade-Strawberry-Milk-Korean-Cafe-Takes-Two-Eggs-food-photography-v02-02.jpg",
        id: 4
    },
    {
        menuName: "Strawberry Matcha Boba Latte",
        menuDescription: "Strawberry puree + matcha + boba = heaven",
        price: "$ 7.5",
        image: "https://takestwoeggs.com/wp-content/uploads/2021/04/Strawberry-matcha-boba-latte-cafe-inspired-takes-two-eggs-asian-inspired-recipes-2.jpg",
        id: 5
    },
    {
        menuName: "Mango Matcha Latte Boba",
        menuDescription: "Mango puree on top of matcha latte with boba",
        price: "$ 7.5",
        image: "https://takestwoeggs.com/wp-content/uploads/2021/03/Matcha-mango-boba-bubble-tea-takes-two-eggs-4.jpg",
        id: 6
    },
    {
        menuName: "Mango Green Tea",
        menuDescription: "Mango green tea is sweet and fresh",
        price: "$ 5.0",
        image: "https://takestwoeggs.com/wp-content/uploads/2021/10/Mango-Green-Tea-Takestwoeggs.jpg",
        id: 7
    },
    {
        menuName: "Grapefruit Green Tea",
        menuDescription: "Revitalize your body with this fresh tea",
        price: "$ 6.5",
        image: "https://takestwoeggs.com/wp-content/uploads/2021/07/Grapefruit-Green-Tea-Refresher-Takestwoeggs-1.jpg",
        id: 8
    },
    {
        menuName: "Watermelon Soda",
        menuDescription: "Matcha imported from Japan",
        price: "$ 5.5",
        image: "https://senseandedibility.com/wp-content/uploads/2020/05/Watermelon-Italian-Soda-Lead.jpg",
        id: 9
    },
];

export const getMenus = () => menus;

export const getMenu = (id: number) => menus.find(m => m.id === id);