"use strict"
// document.write("hello world")
// console.log("hello world")

var product_list = [
    // {
    //     prod_id:1,
    //     prod_name: "hoddie",
    //     prod_desc:"hello, this is my first hoddie",
    //     prod_image:"shirt.jpg",
    //     prod_price:500,
    //     prod_category: [
    //         {
    //             male:{
    //                 shirt:"checkx, denim, plan-printed",
    //                 t_shirt:"kolor-tshirt, plan-tshirt",
    //                 jeans:"denim, formal, ancher-lift",
    //                 shoes:"casual,sports,loffer"
    //             }
    //         },
    //         {
    //             female:{
    //                 shirt:"checkx, denim, plan-printed",
    //                 t_shirt:"kolor-tshirt, plan-tshirt",
    //                 jeans:"denim, formal, ancher-lift",
    //                 shoes:"casual,sports,loffer"
    //             }
    //         }
    //     ]
    // },
    {
        prod_id:2,
        prod_name:"hoddie",
        prod_category:"cloths",
        prod_desc:"hello, this is my first hoddie",
        prod_image:"shirt.jpg",
        prod_price:500,
        orders:[{
            order_id:11,
            order_date:"11/12/2021",
            status:"processing",  
            order_quantity:2,
            order_types:"Cash-on-delivery",    
        },
        {
            order_id:22,
            order_date:"11/12/2021",
            status:"processing",  
            order_quantity:1,
            order_types:"Phone-pe",
        }
    ],
        prod_color:"red,blue,white,yellow"
    },

    {
        prod_id:3,
        prod_name:"strowberry",
        prod_category:"fruits",
        prod_desc:"hello, this is from fruits category",
        prod_image:"strowberry.jpg",
        prod_price:50,
        orders:[{
            order_id:111,
            order_date:"11/12/2021",
            status:"processing",
            order_quantity:1,
            order_types:"Cash-on-delivery",    
        },
        {
            order_id:222,
            order_date:"11/12/2021",
            status:"processing",  
            order_quantity:2,
            order_types:"Phone-pe",
        }
    ],
        prod_color:"red,blue,white,yellow"
    }
]


var product = [
    {
        product_categories:{
            // cat_id:[{}]
            electronics:"trimmer, mobile-phone, laptop, ipads",
            stationery:"pencil, eraser,sharpner, scale",
            cloths:"jeans, shirt, t-shirt, hoddie",
            fruits:"strawberry, apple, mangos, watermalon"
        }
    },
    {
        product_details:[{
            prod_id:1,
            prod_name:"trimmer",
            product_categories:"electronics",
            prod_price:1000,
            prod_desc:"hello, this is from electronics category",
            prod_image:"trimmer.jpg",
            order_id:1
        },{
            prod_id:2,
            prod_name:"jeans",
            product_categories:"cloths",
            prod_price:1200,
            prod_desc:"hello, this is from cloths category",
            prod_image:"jeans.jpg",
            prod_order_id:2
        },{
            prod_id:3,
            prod_name:"pencil",
            product_categories:"stationery",
            prod_desc:"hello, this is from stationery category",
            prod_image:"pencil.jpg",
            prod_price:1200,
            order_id:3
        }]
    },
    {
        product_order:[{
            order_id:1,
            order_date:"11/12/2021",
            order_quantity:3,
            order_types:"cash-on-delivery",
            status:"processing"
        },{
            order_id:2,
            order_date:"11/12/2021",
            order_quantity:1,
            order_types:"cash-on-delivery",
            status:"processing"
        },
        {
            order_id:3,
            order_date:"11/12/2021",
            order_quantity:3,
            order_types:"cash-on-delivery",
            status:"processing"
        }]
    }
]

// var buyProd = product[0]["product_categories"]["electronics"]
var buyProd = product

console.log(buyProd)

// console.log(product)

// console.log(product_list)