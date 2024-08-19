 const shoes = [
    {
        "marca": "Nike",
        "modelo": "Jordan high",
        "precio": 72500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300398/Nike_jordan_High-2_mtqnxx.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300399/Nike_jordan_High-3_j4f9k8.png",]
    },
    {
        "marca": "Nike",
        "modelo": "Zoom",
        "precio": 67500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300383/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240422_193442_0000_vueajt.png"]
    },
    {
        "marca": "Nike",
        "modelo": "Air max one",
        "precio": 87500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300384/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240422_194855_0000_ldzvud.png"]
    },
    {
        "marca": "Nike",
        "modelo": "Air max just do it",
        "precio": 87500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300384/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240422_203837_0000_mv6cn0.png"]
    },
    {
        "marca": "Adidas",
        "modelo": "Forum",
        "precio": 75000,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300386/Adidas_Forum-1_asebrt.png"]
    },
    {
        "marca": "Adidas",
        "modelo": "low",
        "precio": 87500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300387/Adidas_Low-1_uwq0x6.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300387/Adidas_Low-2_fq6tfe.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300387/Adidas_Low-4_ffqyz6.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300387/Adidas_Low-3_br8ird.png"]
    },
    {
        "marca": "Adidas",
        "modelo": "Bad Bunny",
        "precio": 107500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300385/Adidas_Badbunny-1_ivpqkk.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300385/Adidas_Badbunny-2_ot2lhl.png"]
    },
    {
        "marca": "Adidas",
        "modelo": "Nizza",
        "precio": 70000,
        "extra": []
    },
    {
        "marca": "Adidas",
        "modelo": "CAMPUS 00",
        "precio": 102500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300383/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240422_232932_0000_gu9ojn.png"]
    },
    {
        "marca": "Vans",
        "modelo": "ultrarange",
        "precio": 87500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300383/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240422_233822_0000_uaizjn.png"]
    },
    {
        "marca": "Vans",
        "modelo": "VR3",
        "precio": 87500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300384/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240422_234602_0000_nldjzj.png"]
    },
    {
        "marca": "Vans",
        "modelo": "KNU",
        "precio": 92500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300384/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240422_235349_0000_h7o3e6.png"]
    },
    {
        "marca": "Vans",
        "modelo": "CUSH",
        "precio": 92500,
        "extra": []
    },
    {
        "marca": "Vans",
        "modelo": "KNU bota",
        "precio": 97500,
        "extra": []
    },
    {
        "marca": "Fila",
        "modelo": "disruptor",
        "precio": 85000,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300385/White_Modern_Sneakers_Product_Promotion_Instagram_Post_20240423_005318_0000_to2bat.png"]
    },
    {
        "marca": "New balance",
        "modelo": "247",
        "precio": 80000,
        "extra": []
    },
    {
        "marca": "Nike",
        "modelo": "Jordan retro 4",
        "precio": 107500,
        "extra": []
    },
    {
        "marca": "Nike",
        "modelo": "Jordan low travis",
        "precio": 97500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300399/Nike_Jordan_Low_Travis-1_u4bnul.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300399/Nike_Jordan_Low_Travis-2_mizn2n.png"]
    },
    {
        "marca": "Nike",
        "modelo": "Jordan low premium",
        "precio": 92500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300399/Nike_Jordan_Low_Travis-3_jj34fj.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300399/Nike_jordan_low_premium_-1_igqu5t.png"]
    },
    {
        "marca": "Nike",
        "modelo": "pegasus",
        "precio": 92500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300399/Nike_Pegasus-1_td7uoi.png"]
    },
    {
        "marca": "Nike",
        "modelo": "SB primera linea",
        "precio": 92500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300383/Nike_sb_primera_linea-1_dozpys.png"]
    },
    {
        "marca": "Nike",
        "modelo": "SB premium",
        "precio": 92500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300383/Nike_sb_premium-1_h4dvig.png"]
    },
    {
        "marca": "Nike",
        "modelo": "air force stussy",
        "precio": 92500,
        "extra": []
    },
    {
        "marca": "AF1",
        "modelo": "TIFFANY",
        "precio": 92500,
        "extra": []
    },
    {
        "marca": "AF1",
        "modelo": "PREMIUM",
        "precio": 92500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300398/Nike_Af1-2_jhiq0s.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300398/Nike_Af1-1_iysoqt.png"]
    },
    {
        "marca": "AF1",
        "modelo": "Louis Vuitton",
        "precio": 92500,
        "extra": ["https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300398/Nike_Af1-4_g4l5ox.png","https://res.cloudinary.com/dqbwdi0vr/image/upload/v1723300398/Nike_Af1-3_dn5mrq.png"]
    },
    {
        "marca": "AF1",
        "modelo": "TOP",
        "precio": 97500,
        "extra": []
    },
    {
        "marca": "47 STREET",
        "modelo": "",
        "precio": 82500,
        "extra": []
    }
]
export default shoes;