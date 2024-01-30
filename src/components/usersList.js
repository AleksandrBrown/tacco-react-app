import { userIcons } from '../components/userIcons'
export const usersList = [
    {
      login: "lionKing",
      password: "Roar123!",
      name: 'John',
      surname: 'Doe',
      userBrth: '15.05.1990',
      phone: "+1 (415) 123-4567",
      email: "john.doe@gmail.com",
      icon: userIcons[1].iconPath,
      userId: 'user-#1',
      userReview: {
            reviewText: "This taco spot is a hidden gem! The tacos are bursting with flavor, and the diverse menu offers something for every palate. With prompt service and a laid-back atmosphere, it's a go-to spot for a satisfying and affordable meal.",
            Rating: [1,2,3,4,5],
      },
      userOrders: [
            {
              orderId: 1,
              orderStatus: 'Finished',
              product: {
                productName: "Sizzling Chicken Taco",
                productPrice: "15$",
                productCategory: "chicken",
                id: 1,
                productIngredients: ["Grilled chicken", "Onions", "Bell peppers", "Spices", "Flour tortilla"]
              },
              quantity: 2,
              orderDate: '1.01.24',
              totalPrice: "30$"
            },
            {
                orderId: 2,
                orderStatus: 'Finished',
                product: {
                    productName: "Zesty Zucchini Taco",
                    productPrice: "12$",
                    productCategory: "vegetarian",
                    id: 2,
                    productIngredients: ["Zucchini", "Black beans", "Cheese", "Salsa", "Corn tortilla"]
                },
                orderDate: '1.01.24',
                quantity: 1,
                totalPrice: "12$"
            }
        ]
    },
    {   
      login: "pandaExpress",
      name: 'Jane',
      surname: 'Smith',
      password: "Bamboo456@",
      phone: "+1 (408) 555-7890",
      email: "jane.smith@yahoo.com",
      icon: userIcons[2].iconPath,
      userBrth: '8.09.1985',
      userIcon: userIcons[2],
      userId: 'user-#2',
      userReview: {
          reviewText: "Outstanding tacos! The quality of ingredients is top-notch, and the authenticity of flavors is unmatched. Whether you prefer classics or adventurous combinations, this restaurant delivers a consistently delicious experience. Definitely recommend!",
          Rating: [1,2,3,4,5],
      },
        userOrders: [
            {
              orderId: 1,
              orderStatus: 'Finished',
              product: {
                productName: "Crispy Carnitas Crunch",
                productPrice: "14$",
                productCategory: "beef",
                id: 3,
                productIngredients: ["Crispy beef carnitas", "Lettuce", "Tomatoes", "Sour cream", "Flour tortilla"]
              },
              quantity: 3,
              orderDate: '1.01.24',
              totalPrice: "42$"
            }
          ]
        
    },
    {
        login: "eagleEye",
        name: 'Bob',
        surname: 'Johnson',
        password: "SkyHigh789$",
        phone: "+1 (714) 987-6543",
        email: "bob.johnson@hotmail.com",
        icon: userIcons[3].iconPath,
        userBrth: '10.07.1990',
        userId: 'user-#3',
        userReview: {
            reviewText: "I can't get enough of this taco place! The fusion of flavors is incredible, and the attention to detail is apparent in every dish. The friendly staff and vibrant ambiance make it a great spot to enjoy mouthwatering tacos with friends or family.",
            Rating: [1,2,3,4,5],
        },
        userOrders: [
            {
              orderId: 1,
              orderStatus: 'Finished',
              product: {
                productName: "Mouthwatering Mushroom Medley",
                productPrice: "16$",
                productCategory: "vegetarian",
                id: 4,
                productIngredients: ["Assorted mushrooms", "Garlic", "Parmesan", "Herbs", "Corn tortilla"]
              },
              quantity: 2,
              orderDate: '1.01.24',
              totalPrice: "32$"
            }
          ]
    },
    {
        login: "dolphinDancer",
        name: 'Alice',
        surname: 'Williams',
        password: "OceanWave123",
        phone: "+1 (619) 876-5432",
        email: "alice.williams@gmail.com",
        icon: userIcons[4].iconPath,
        userBrth: '25.02.1987',
        userId: 'user-#4',
        userReview: {
            reviewText: "Hands down the best tacos in town! The variety of options ensures there's something for everyone, and the freshness of ingredients sets this place apart. Quick service, reasonable prices, and a cozy atmosphere make it my favorite taco destination.",
            Rating: [1,2,3,4,5],
        },
        userOrders: [
            {
              orderId: 1,
              orderStatus: 'Finished',
              product: {
                productName: "Tropical Mango Tango Chicken",
                productPrice: "18$",
                productCategory: "exotic",
                id: 5,
                productIngredients: ["Grilled chicken", "Mango salsa", "Cilantro", "Lime", "Flour tortilla"]
              },
              quantity: 1,
              orderDate: '1.01.24',
              totalPrice: "18$"
            },
            {
              orderId: 2,
              orderStatus: 'Finished',
              product: {
                productName: "Cajun Shrimp Fiesta",
                productPrice: "13$",
                productCategory: "spice",
                id: 6,
                productIngredients: ["Cajun shrimp", "Bell peppers", "Onions", "Sour cream", "Flour tortilla"]
              },
              quantity: 2,
              orderDate: '1.01.24',
              totalPrice: "26$"
            }
          ]
    },
]
