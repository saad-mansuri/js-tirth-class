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

console.log(product_list)