export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Category {
  id: number;
  name: string;
  description: string;
  items: MenuItem[];
}

export const menuData: Category[] = [
  {
    id: 1,
    name: "Klasik Makarnalar",
    description: "Geleneksel İtalyan makarna çeşitleri",
    items: [
      {
        id: 1,
        name: "Spaghetti Carbonara",
        description: "Yumurta sarısı, kavrulmuş pancetta, parmesan peyniri ve taze karabiber",
        price: 160.00,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?q=80&w=2071"
      },
      {
        id: 2,
        name: "Fettuccine Alfredo",
        description: "Krema, tereyağı ve parmesan peyniri ile",
        price: 150.00,
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?q=80&w=2070"
      },
      {
        id: 3,
        name: "Penne Arrabbiata",
        description: "Acılı domates sosu ve sarımsak ile",
        price: 140.00,
        image: "https://images.unsplash.com/photo-1595295333158-4742f28fbd85?q=80&w=2080"
      }
    ]
  },
  {
    id: 2,
    name: "Özel Makarnalar",
    description: "Şefin özel makarna tarifleri",
    items: [
      {
        id: 4,
        name: "Tagliatelle Bolognese",
        description: "Ev yapımı bolonez sos, kıyma ve parmesan peyniri",
        price: 180.00,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2080"
      },
      {
        id: 5,
        name: "Rigatoni Alla Vodka",
        description: "Kremalı domates sosu, vodka ve taze fesleğen",
        price: 170.00,
        image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?q=80&w=2080"
      },
      {
        id: 6,
        name: "Linguine Frutti di Mare",
        description: "Karışık deniz ürünleri, sarımsak ve beyaz şarap sosu",
        price: 200.00,
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8?q=80&w=2070"
      }
    ]
  },
  {
    id: 3,
    name: "Fırın Makarnalar",
    description: "Özenle fırınlanmış makarna çeşitleri",
    items: [
      {
        id: 7,
        name: "Lasagna",
        description: "Kıymalı, beşamel soslu ve peynirli klasik İtalyan lazanyası",
        price: 190.00,
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=2070"
      },
      {
        id: 8,
        name: "Fırın Penne",
        description: "Mozzarella, domates sosu ve taze fesleğen ile",
        price: 170.00,
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=2032"
      },
      {
        id: 9,
        name: "Cannelloni",
        description: "Ricotta peyniri ve ıspanak ile doldurulmuş fırın makarna",
        price: 180.00,
        image: "https://images.unsplash.com/photo-1633436374961-09b92742047b?q=80&w=2071"
      }
    ]
  }
]; 