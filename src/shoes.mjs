const shoes = [
    {
        "marca": "Nike",
        "modelo": "Jordan high",
        "precio": 72500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300398/Nike_jordan_High-2_mtqnxx.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300399/Nike_jordan_High-3_j4f9k8.png"],
        "colores": ["Rojo", "Negro"],
        "talles": [40, 42, 44]
    },
    {
        "marca": "Nike",
        "modelo": "Zoom",
        "precio": 67500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300383/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240422_193442_0000_vueajt.png"],
        "colores": ["Blanco", "Gris"],
        "talles": [38, 40, 41]
    },
    {
        "marca": "Nike",
        "modelo": "Air max one",
        "precio": 87500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300384/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240422_194855_0000_ldzvud.png"],
        "colores": ["Negro", "Azul"],
        "talles": [42, 43, 45]
    },
    {
        "marca": "Nike",
        "modelo": "Air max just do it",
        "precio": 87500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300384/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240422_203837_0000_mv6cn0.png"],
        "colores": ["Naranja", "Blanco"],
        "talles": [40, 41, 43]
    },
    {
        "marca": "Adidas",
        "modelo": "Forum",
        "precio": 75000,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300386/Adidas_Forum-1_asebrt.png"],
        "colores": ["Blanco", "Azul"],
        "talles": [38, 39, 40]
    },
    {
        "marca": "Adidas",
        "modelo": "low",
        "precio": 87500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300387/Adidas_Low-1_uwq0x6.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300387/Adidas_Low-2_fq6tfe.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300387/Adidas_Low-4_ffqyz6.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300387/Adidas_Low-3_br8ird.png"],
        "colores": ["Negro", "Gris"],
        "talles": [41, 42, 44]
    },
    {
        "marca": "Adidas",
        "modelo": "Bad Bunny",
        "precio": 107500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300385/Adidas_Badbunny-1_ivpqkk.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300385/Adidas_Badbunny-2_ot2lhl.png"],
        "colores": ["Verde", "Marrón"],
        "talles": [40, 43, 44]
    },
    {
        "marca": "Adidas",
        "modelo": "Nizza",
        "precio": 70000,
        "extra": [],
        "colores": ["Blanco", "Negro"],
        "talles": [39, 40, 41]
    },
    {
        "marca": "Adidas",
        "modelo": "CAMPUS 00",
        "precio": 102500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300383/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240422_232932_0000_gu9ojn.png"],
        "colores": ["Rojo", "Blanco"],
        "talles": [40, 42, 44]
    },
    {
        "marca": "Vans",
        "modelo": "ultrarange",
        "precio": 87500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300383/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240422_233822_0000_uaizjn.png"],
        "colores": ["Negro", "Azul"],
        "talles": [41, 42, 43]
    },
    {
        "marca": "Vans",
        "modelo": "VR3",
        "precio": 87500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300384/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240422_234602_0000_nldjzj.png"],
        "colores": ["Gris", "Negro"],
        "talles": [40, 41, 43]
    },
    {
        "marca": "Vans",
        "modelo": "KNU",
        "precio": 92500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300384/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240422_235349_0000_h7o3e6.png"],
        "colores": ["Rojo", "Negro"],
        "talles": [42, 43, 44]
    },
    {
        "marca": "Vans",
        "modelo": "CUSH",
        "precio": 92500,
        "extra": [],
        "colores": ["Blanco", "Negro"],
        "talles": [40, 41, 42]
    },
    {
        "marca": "Vans",
        "modelo": "KNU bota",
        "precio": 97500,
        "extra": [],
        "colores": ["Marrón", "Negro"],
        "talles": [42, 43, 45]
    },
    {
        "marca": "Fila",
        "modelo": "disruptor",
        "precio": 85000,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300385/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240423_005318_0000_to2bat.png"],
        "colores": ["Blanco", "Azul"],
        "talles": [40, 42, 44]
    },
    {
        "marca": "New balance",
        "modelo": "247",
        "precio": 80000,
        "extra": [],
        "colores": ["Negro", "Blanco"],
        "talles": [41, 42, 43]
    },
    {
        "marca": "Nike",
        "modelo": "Jordan retro 4",
        "precio": 107500,
        "extra": [],
        "colores": ["Blanco", "Azul"],
        "talles": [40, 41, 42]
    },
    {
        "marca": "Nike",
        "modelo": "Jordan low travis",
        "precio": 97500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300399/Nike_Jordan_Low_Travis-1_u4bnul.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300399/Nike_Jordan_Low_Travis-2_mizn2n.png"],
        "colores": ["Marrón", "Negro"],
        "talles": [42, 43, 44]
    },
    {
        "marca": "Nike",
        "modelo": "Jordan low premium",
        "precio": 92500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300399/Nike_Jordan_Low_Travis-3_jj34fj.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300399/Nike_jordan_low_premium_-1_igqu5t.png"],
        "colores": ["Negro", "Gris"],
        "talles": [40, 41, 43]
    },
    {
        "marca": "Nike",
        "modelo": "pegasus",
        "precio": 92500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300398/Nike_Pegasus_1_vgsvk4.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300398/Nike_Pegasus_2_lkhm9c.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300399/Nike_Pegasus_3_c7c7ra.png"],
        "colores": ["Blanco", "Rojo"],
        "talles": [40, 42, 44]
    },
    {
        "marca": "Adidas",
        "modelo": "retro 6",
        "precio": 102500,
        "extra": [],
        "colores": ["Blanco", "Azul"],
        "talles": [41, 42, 44]
    },
    {
        "marca": "Adidas",
        "modelo": "x pharrel",
        "precio": 102500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300384/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240423_062952_0000_ff6wpx.png"],
        "colores": ["Verde", "Negro"],
        "talles": [39, 40, 41]
    }
];

export default shoes;