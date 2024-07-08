 const shoes = [
    {
        "marca": "Nike",
        "modelo": "Jordan high",
        "precio": 72500,
        "extra": ["https://previews.dropbox.com/p/thumb/ACWEDh8BTci6B-n4ySrdyNS8izNddOtHw78wxhSqX9Os3W_9Ay3wk8Fqo0nk-CReb0wMX9oFCJxQnGOjSANEHeK-ogSkRzrhJ5_GWleLXylGUrZ2w4YCj8HtiZ627Z-Le3RznZi1D217hvkH5HgQ_Yoyl0NPQpSKptbb18mQe4rAio3PeobfFKRWkK3QXIphZG98ZtwzFQsuzgHMCkljuxnEbsfk4u9S8xuar83wvIsarakba1fyJh8TuJBJcyOWOCV9d6jlzyX-Qu2k4qM2rHKFyvAUcreCYO51kIkTGe7qhoGsZsBtIUKMjXC5L51OK6UGThDCmEyUWweqFQZqdtSQ9r1b-hXmXujLOKfGYlmvNSXTsjuuzH2IAzn5gmiGOzY/p.png","https://previews.dropbox.com/p/thumb/ACVwMhSaLN4Qcc1ciHk9FPqIGcKlRa8G7VW5UzQRwlFJz_NhwnrH2t6G7-ZFEL57z4kA3aOn-9a0Ack4WvsdhA5m6h27k9URVDITMff7esX-wXCuZAAAbOIRFpE1KJ6_ANteAl-f2jqtj8IGP3al20goUhg-NXP9x4okxYxY0qPlMGiCeA8y2qyci1n5Tmxpkbuf4ZiHb9aS7N3J2uGMOM6H8kiqKo8OW-WM38_sFHdC1z_05IDu_0WRFA4KIVSswBvz1QNBvpwvcsyues0BMP6hZqeesgxF8FoOQIsFGDmBkov0QrLN4ABPHiATGrhAHSoKhjvE6_Q80lMSSdtVFbfmarYlI5tODLgMEc8X1fw9p99YonW_Kq2RH3GkluPfDpQ/p.png"]
    },
    {
        "marca": "Nike",
        "modelo": "Zoom",
        "precio": 67500,
        "extra": ["https://previews.dropbox.com/p/thumb/ACUFQGjAKTd2fS920GE8Lplvd82vOLxSjeCz6WR6AnalAlMRU_NklHfAfbi2ZN1lixUyz4y1hIDISIqT45wHCkX7KqdVbtcETyzLBewUx_J2uljUj-sHlBB54x4tNxnFp-aZR6Ze1BZDWWGRl8Kb07gQJ6PSOIsZfKXTLNHoLLmf5BfQdBwWnpQtWkglaiF6PjzRXyJsvFjj7IgMskyJhsZrhHIH5uIuxe-GW1NbDz--Ab0bmx47K2tbsDTomSUqqfmGDKgsJxofUMgUqWqHYo4iuEol9D182Iq6S3OHUMCc7pptDCcWL6yZFW46YaFRcgILa6tDzCKLdDO8sfluNCacam2l7oNEwUh3wuyg8LnstBCZNk-8ktpiBSR_pq1HRKU/p.png"]
    },
    {
        "marca": "Nike",
        "modelo": "Air max one",
        "precio": 87500,
        "extra": ["https://previews.dropbox.com/p/thumb/ACXzZAl14tf2dHC7lM8ChYWSrlBn7wKrD3BASfn9VKf8gyfKwoiaJlRHiAg5zybo1dSPBvzHX5qhUvPxMxAchms3SecHOc4U6AXT7NVUa26NN_9E_OrwIvpzvmpcHgVVvd-hTHzVIP_PeWsjt4TMr4glUmq0UlyXcGI8tBPqCFYStQZKrmXLDcxSB9SqFaPyc3ghqEwnZjqNdnbLgTsVmg6lVzI2OEllqQd3hZgPdwrA-XJlvspX-_tZMnjiWgqNjzUoGdP2X-qP_zJAtboYsCzEXO2ppRRetvO-RSg2r_ot8OyLMpLLxHxDyRSSvavYp2ft3_B9W9w_NRDkeYGM5aQDpbt4rgR8Bb8j_IDVjTM9UbK1PkL9jNjYlqlGjQnPNvk/p.png"]
    },
    {
        "marca": "Nike",
        "modelo": "Air max just do it",
        "precio": 87500,
        "extra": ["https://previews.dropbox.com/p/thumb/ACVSpbc1sx40A1RjIHqw7tD72atzaJdKoV8s5SQozqQrhKA42G5ClcPiI90YBCzPJmXPM7HaPvbP4retnKiw9r1KfkPKbZMjuDNz5MgPMN-Z8EL05cJMuS9cjW0AfeqQELRhDmZ7Zh-caRFrLcxt77NPWnHPgz8wvovOttnmwDTBlAwTxOl1Qdk9e_zSq0n9QUbuAgBh65CZRVfAw-oJqhJgmXIhp-8IXHLhVV24VgS5UXQ5ZgTfHW8qfSHR8E-n8eNzDI44kfuWT2MQ2f-88elqaBRKwP8y4NbCbVFAgf9fXafFB1ZnZ1cKrTQ8M2kHgLIqDh0KEKHDXExhidwWgZYwxuzbbFXlT-id28KIqQgSSbA7ljso_G4oSFs338NcBjI/p.png"]
    },
    {
        "marca": "Adidas",
        "modelo": "Forum",
        "precio": 75000,
        "extra": ["https://previews.dropbox.com/p/thumb/ACWaM7TxW3mT9yEQoJfm2oaiHZCOMFZK469m_MMh8sHnhB_BZk_9vH9en-g2vHNwqF_VE73D9Sx2fbti6YSkUnpfKpt1oMbPw4ZHRgD6ty_HPDMCg7pzEPfz1ycPCDZdZ8GGKujoXZBLbIcHXuEIYc826aznTSUmThBdw9sG_Jhb_u9G4P8ebkYIdK31h9HOvCtJBzxb2NY3wkNs1zLY2xWLUhOws9WIrbu-jxq1tmFyocIxYcpTbKOxC2f6e3wQ6UkYXRra7deh_qdRHhaowybBEar0I-pECHktwLME5Ij5AZ8oDff5q5yPfHxDTIa7pynB-KLVAZAXtBMeKTweowNrFCnk7a92DtdyYDzk9UCu7IV-Pk3lXIn9Ets7zGjt_Oc/p.png","https://previews.dropbox.com/p/thumb/ACVQGQAOKftS2pLDVxL4TauNorhBUl5G2KoAoX-kjsgfEwRq5Hqj6OUXzBq1BhlmmHVzUd2x3p1dmKXFBfId0rEfU-06_o5Kz2VRjhzvdnOHhHbjiukmy7nsPmGz8l4p8WAtWGmyZyOXCaJonAxhkZshHVRItoNwmaKzsQA-VxB7tFjHxlIscw3SzyhK3PSHnRoXEjsw-OGQSQlANrzhDJtBbqOqwT4t_uRi844PTYYp_6X9NIFFB4Ri7Ybz3KVzX2jUf7cEXytcHWDNaT8qkWfFaxzD4_Zps5uAdUqhwX_jaoAK1T2-jmRQRgJoM1bT52KDhO438_dZg3HQ6leulvnShG5L0djSJIGfwzUbmBZ1X4eqspqn21dVpVFEmt9qmVc/p.png","https://previews.dropbox.com/p/thumb/ACVSzzBrvrhDZxMqDKreIXkRanOV1COmM7WlP8ZIav9c1dt_oFxFhaAUUWoupCPspwn7JtqbBhF1ZdshIigee01TS8hL_sS8-UCE0k5bVJc8JwPm88gxVVJ213NmrCn-RuutDYBa3i1QwU3gKrbt7ONSNfFZnQj4cqdgWVvIKvwPEeOkHz0WcmOCRwpDgTo7rNOp5orS9y9dLlAl78b_0FFxjdYj7pCGO4j8N9XtdxFl8r4QaVEFMtzO7R-p-gA3gV38AT84B9yb2cVjFBXtBBStm5HmAlfoFmLcwyBLzaNNaQXHE7q4pgfSeoNHhOEr--IIEGiWibPB6V_Fod01gccCm5-k-MF1uIjlGPA6OhjBEx6qWieOoOoxFokrRExsYpc/p.png","https://previews.dropbox.com/p/thumb/ACXVTwEwr8eriUuwA3Dz_ft9MNAkdVcJFs-4U8zEEQ2PgXTv3Ybn25ccKz87fGHgywZ_4JWXMJifn348BzSqr1-Xeoc7sts2ipKrY4uw8Uudtxg22qAfZv5JEIAtTQBLuJ3k7oSgSjJFGeBUBIJjqtEKhD8q3Wyuyw9HNgr8Ktw6ntsfECXqReMA37eH1id5xUVUE0ou8WJuxmTwQM6SfYU7oEx44OudBHsj6VHyB09GHVKyphqpQN_YgOQUsXhiv8QmE50moN99-8vHm7gSFEcoTPnnb-OKDZfjPMqOn2_ZSy2eHUPMkgGTu2XNhmUgTo0oq551eRlzYhV0fQZozjnK-V23UfNWaFQp-daeIni-wgw8nMyn4pD1d8OXbVGqVUY/p.png","https://previews.dropbox.com/p/thumb/ACX4T3HIS6UTEzNFKy2W2j4Pms9jjbi8pELyzHHpWlGXPUakPEXLx_LV3DsASUY6g0Kc49dSiKVKBA0DqVd_pEwYf1tz6coRfSUleWB0bEmt8VOXEPpejQg5aZ26Vd_N3uQXp9F5rU0-i11cwIk8zaY-ld5ObmJsDFd3fNYxZ2Et-nW3PykDXa91gOvpU6_iKcFDS589ujC8bqY-YQKZ8MDnecBE7bkmysvVmHBpVcwF8R3k_zQKKdE8Zn_LmLTnuFt8Uzsr7sFP2mU9FmODiuFCXZGnfZFmRQs6FaU-4ZIVWUF_T-v1C1KWGM6aAQ8kKrf6Ye4J7j9c25sq9E-D0CZPppJ0773kdswMimpNG4dVFUgxJSGI05rRQTWr4xTF2BE/p.png","https://previews.dropbox.com/p/thumb/ACXc-VRsVy6utJT2xBAFnu6yFIadQRIQvvOv5M3b8V0Oe0kgrMFhOPOqivAliGAGXh_UiHEn7BxBdpKqXpJOinVCJuj15KaDceDytiOFMAPyfMFarSU4nRfnzcXByFSSRMJzHJ68KKXq_tGGxWVLD0SS0lg4qG8NbIJkQuXrURVWmkGp8cDKy5tAYGttJbm62lOXmRXAjOcel10YtBsjCxqlssNspoWTDedplJb4DppbW_IOPo87e0FhFK21Hm-SHMojvjIvm8KkbBHE0APLk_IBTfo-iiHgJ4M4O_XRQo2Ur-hf_VLiF6avjsMT1hZlE4-twXKUNoysJyw8fAzgf1yK5YEIj0KW87pw-SjRWmHva95B76OJfM53riyYh32cANo/p.png","https://previews.dropbox.com/p/thumb/ACUOnre6idhBVGA_-hf_duhTa_Xt0trJSAeOTGdbRk0UFNCT3wT9vd7Y4qHjlDffuamZEwWus7DeBsUaKfhc7F_L7sVl641pz6gY2wA9MZSrpqhJLFGFM23QucH3kHINAVoWUPMLYCwqFdq1g6pUQ4pg_0EdHBB__rp48S9O136_R4bK8uTInUyriZNR0dYQ0eeZO5Cy0jqQ3P3l6JpYHzQ31EUEQHPuO8s1tvzXrm4VO-7bjyWBYcTSGG7z4fXF0LDHWEimWxhWnx8aemODL0Nv0LCUArQ9WpEhXUHjdOHcuLJKCwAR6j62J1VxgNGfUC3fNJqwgcPv0MSlo2sJ63BHGPm29wJ9LZOT4R8JonHxQVgQ6kYedJhld1C-ntIT8mg/p.png"]
    },
    {
        "marca": "Adidas",
        "modelo": "low",
        "precio": 87500,
        "extra": ["https://previews.dropbox.com/p/thumb/ACU-h4Tx0oH8kZNwMI6Sq0uyggZ8ICUJnRNc9RnvegdZrbxD1QJRZ0SdBT1hUT0riKpEafxl_V0IjBCMrnAY0IMZGjdSA_G7vwzMCtlkbhSfGtcCT5jnyuyZInN_orK-I1JXX6NuFxdTHnVLcTf_Bxci6KePdTKAXQ8AuMXXm0OawaXAAF2dLhaDGF8aQarWiXqDmDiQAiA8xpYReBihTUPKC4PCW5KS6I5AbIIkYnoLQ0HvZU9F7GJnRVurRsb3_G_qEP6R9oqHQkVC9W0_cBc3-eMB8BIfbNoNwCas7gSHMAjGqkFutfD5xFQr2BhhinWMTE21Bm7mzvMebknQhNJZEv0J8W8fA9nutSJQ42phKGGGkpB5rGQ_bctwzCKrfIo/p.png","https://previews.dropbox.com/p/thumb/ACWxczdeZ3wcZgiHJS6cOMsVpapDV4YgMp2FR6etukCUxR4AXd3PRCkHXyW9-nhChwcdV5YDM9JdaGOv7o68R2XCi92izz34COR0XdbmpcBLBvYVHXZ9FQqqiG4LEzIvslM11YsbOO-nfZejskJfJ_Wthyse9v_eIpQL5lr7IPjrSeieDeJHR1uoDN13dv6s0xL-daWXCFDCZdmmGpbHpTksl57HkqqE42iBe55vc0LJOo6SrqQXDd3oanKBfaLo64RvkMeoVDcXfzJmwe9k2vJWMPTJUIYb41kF1yoRWbPOvp9Y6_hA7jFsjjFAz-Q-xVHQGfUW9xebSSRHelBCZiGIVNkJvWNNSt88UfUhSlXAqRLhhjUiOrBpJmBMoiiXN0o/p.png","https://previews.dropbox.com/p/thumb/ACWruCztJFhz4miMN5M9GlDbLJUL3fLWewd9XfVipkgRjk8Aa9SogCMAb_PvPeobY8vsay3K_xgPCbdAOxk6R1g19mCetxh50f1jGGTOC8h3NJZZRMqLFULWCvjI0syp56jeIFfd_Q4Fpd2YrESYI4m88pTFdBMtPVZj8vOrau3TUjqFP5NSg9MFvExIqsZTvjVvNa4mxJV3z71ceptNyGgQwKVkIPnu4ke2Y6-0jXB2NMU4RAv0DfkXwHMwdrMNol6FDXNar4chIRWxoWAS0-qO7N6aX80gKR-QPBerYmpwFTE_jUZnGeLrfAJpVgPAappOhRMkhu79i50CH04EuJTbgtu7W7Ea-U8MTVYd1QLz6tQ0kE0FMsbUTUyJn_P4qv8/p.png","https://previews.dropbox.com/p/thumb/ACVIkKvbeGjQGFlA1LTn3B1bHTutMzAOxXUEAA_8oM6pihKl7oSv1lnBwS8mxMoMCmMt-xL_bCkg_nihg7ASPSQQQcd6hwn2v5AkmKR2eBxHNN5C55CqWgDkpVzoyYkHEnfPh26WEWW8iT2AszwglxeEfWCMuWbSpySYymCocAX4-4waJmiaGY4UfGe-9rgHHFt3tfjm31v8mLH_AKG7Hn13w1r-ccoC5G-7b3Iji6fqqqzpRePijjkz5K4n6w12etffy5jAfzB7L1vbSf_OdrjSNNXv1FcOBsoZafkRmXO0y1ednafuQS_u2UVs1rJemPzGwTQA-vPo8HTf0XZI5QErTcuPXBf9oDo7l1fTc5wySB2s2Fxn8PeqrUbiCjmn4E4/p.png"]
    },
    {
        "marca": "Adidas",
        "modelo": "Bad Bunny",
        "precio": 107500,
        "extra": ["https://previews.dropbox.com/p/thumb/ACW4eeBjI4EPMOzshRwpvuSsSQV0DgcRSCJnmarlgS_7NJz309bxFW_wPcI5bjgRp2Fzew--QmKoGEzo38O076CB1OBXd2d3XVDtRL_2eFAvxx0NWJeaLjmjpX34Se1E-BySOgDCXm5Vt2MLeUZA7x0mmLo3OJQXmw2xYcQDjxmBGyZhMQGye6y_tSq3Hf1eoNyeT0a2HaVlMLpYtNgCvIVXaFWORuAZ_Y4tkFJ9li4Owp67mXdpRQPYkyvzJj_UWLClqXRmeiqlYaHbieSLD4Dsd23KqmSoP6G9x5gNDTflo74e6V2LlyRsN3lxf7z-d8HM8zp7GuyOuvKrglT0haIA/p.png","https://previews.dropbox.com/p/thumb/ACVVZ9GhSaAStlHMXZjsPsrrFxHIcMNxX5FbliOWO0_dU2HsvgGlDu62gnV0veyoJVqLHCF6UQZ8tD6NqZVRahYBY60ngLEhTYJwnL1F2IZuC1FJ41rkLMnVwCHkQOGTGOGJLXAvxkk4mCiAkA2iiErBZl1ZqPPQr6rN4q48UVsrI0a5fVNjyB-PdITXZukvrq-3yKFnkCHYqn8CIoXe4eG-Zm6b99zei4utw_AR0n0TElZIUMT5CsBkFXphhdDY5v3XAtlZ2qk-2YkXdfdYBgtt1rIBpdsUkFeWxFoQaX0IdBzVT-33WIORww2p_9QQxjdsP8HLfaxboFliJNCt5OPCvHLoAmyw89g6IXlBsK7PwWroHyYmLIFpMUA0rJ4fRAs/p.png"]
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
        "extra": ["https://previews.dropbox.com/p/thumb/ACVKQAEFnYQths9MH052SSKtLuZdZGw0iCFlHjypb2UxJtEOrDGqzmWHJWrD1-MANUT3KEM_HOuIoHuq7SXGukl_qJu9TqZE3ZXk8Gjpey5qhU0kjtRgNu9izRlSXrkfOg_Ps0Yi8PHfhLp_X8EOrGGo4T81_dO7iPUH0-d_yek19np8mnI4skyJVyEgL-aBNih6gVngQeeCYP0kXvgdxWkxbVK3D-hhJO336KF-6tblvKrXBqiiD1vNs0P9uPwQtzvCUZSY9F9P7eL4aOrxcb6P3_qmbRBvn4oF0HGukMYR8aNvbv3HjaKaNZwcyHdR32qxhDxSR5l2s48RSONqztsAIeSpPrJsIsSHpZxAwMQO8BIuEGFG2Ip9JylvW1Gtu3E/p.png"]
    },
    {
        "marca": "Vans",
        "modelo": "ultrarange",
        "precio": 87500,
        "extra": ["https://previews.dropbox.com/p/thumb/ACUebx60MjPEwdDM4ZOeWVsyVObcfDm4I1_GMAOgqQL1B4fKn55i0fEIzndk6DCOrXMfR0zuKGN8iMtUcsvEQmToqT8dVz3jGw-iq0SOaJGfCunoGaN4K1qx77eArtL7Wro7Bt3DPOs8FZ5TweZS-svHEWtcg_1UoTSiNu_zo2KgXXsQV4ZBdkWIvC2VYQqsyq-bWTxypf5L4d1QVJP73zniaryOXyi99n1JbXTjtj8jPTriGE6gU04uGz9FleWBf2FdAnnoIUGmtBHy6kW1AEiYb_2J3Dg_s28HsgRSx3LlOrFKRdybjPdqw0gmFiX6356MX68w9VRe319YOxehILRCzZkoB6-A11H3UB4wyfa7qAy5liv-u7XJM6gfxxBTJ_g/p.png"]
    },
    {
        "marca": "Vans",
        "modelo": "VR3",
        "precio": 87500,
        "extra": ["https://previews.dropbox.com/p/thumb/ACWQWOAa_yAWL7alfFP3Q-XSoZ6FkwnpXpkBxk4ZMQd2edy7VAXQzZZsyvt8yiROzgezwLFBuh1ImOCMZviimi_c4bb-_MwbyAYqHt7ZhkCybe0y1CwD9o6g9UlF2MUOjcUQ_CJR3axBLMiFJZfe4ZHoMqsiXFgWBT4OgiQIJslm7Pi7pKpef49vYGk-2gpK9ueCDCegGI_f12JYdpe9e-IUtjRlyL1faXZLXv1Vur_1RndCtxuombnUNZpeaxtYEWcv6ZNzpHzzsaA3qgZN9nZwDiM7dhhhWEHUopxYqUA827kn_8gHyP_CVU0mqiibNIZpcG5C2TFh1SuteOqfgbT4S_w0D3LGGDTw2jjO5nmdGK71d3M8M3Q56yOypzSOBIk/p.png"]
    },
    {
        "marca": "Vans",
        "modelo": "KNU",
        "precio": 92500,
        "extra": ["https://previews.dropbox.com/p/thumb/ACUWWHqqHgA8Yp7dbO4oemdA-cirS6_Ae8NVBCJFrwa23Wzr_PLNY5DDKeH4-KWnm4srGNMIZhGknfvSjjTqf_IgEr46C586Hy49WeoUXVo9lkwcRVYegz2jXPoJefmsIsF2Aji6uyg4EJ2UdvKdhqnHbt9x5_6yR0hEc1WOZlCsG6rrgEvelP04elnN-BWPod5vTB3GzvL0lYQ_XhNvTeWLYb5l9h4an1FY7XS5VGdUS7XJQHstEBp5t_4gaMBH8l2DD-uyWgfT7z2-RP9WX6L1VxlMY0uQBSBTh76yf2xOM_OCfFp5irqGq4r74UuogMpc_d4WTiTgPX2-HuHT3NRVIn0c1g5lvQmpGgY5t6QnWcGY3l5l9GtFcVJz3olOtzU/p.png"]
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
        "extra": ["https://previews.dropbox.com/p/thumb/ACWrAeNc8s80en4ysrzGtU8FuQd24a7FTh0XcQlwvYX0XTbNi04no0RCHZUehTXmeM0b1imHZO0fhQ9pltMVjEGswbYPluIyaT8MoNGVrfQQa6c--bf9jYho-7QCejmsRZBhf6qdt8G865HB3xKpMPL8pFf28qReXnzdNqos7oPGkEOZLKqlXo0RuIsA-vkvG3ONxWsq1iGHg1DfxqFSVwDMD7xND2RTmHh0Lyo5Ci9Vyry0OC2qmNITwu2B24O91eYS-FwsCmxeUiNt8Bhc4_HoIHKzYj9zxgyD0KaewYYxzaYOu3eex8yhan5RZ-WyuVOf5D1Fp0a5IEOJ7p8Ykyn02IIZGmIew0JPKq1lJ96EQ8DaQ1Z2lguFoDlgUeLp8GU/p.png"]
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
        "extra": ["https://previews.dropbox.com/p/thumb/ACXrqkhmvlYq4ZUF6lcOSwhogRXhAo9pJpA7zgJorvSrIhweTQyTu3xqxScECzrRdDt6cY2AOdJl2ChabVapK-ZCtGcy-KzPqGJAITGU3EoDo_rHQ-ELHUjVvvUaGU_QsPlt5pSuakyu7xMa6Jx2WaBvn9taHdjq2GeBHvkosWnFQMSw49UZv0Ppcsn0dHUyR6jhGohTjUIwGiOfWF9DW6IUrAlnFR7Z2_8m4mTFw_fMYXqAH0GpbRVex5yonKzhLgpIV-7tEfKvPtRTRYV_zSWT52oX9L3Ux5AlXvUEPDhkydDQE8MelunCpkVJy1QGX-H7gYFXPu1rtauGljHu-NaTkKV9bmzVEXM6ncJ55SKl3Lozq-lUXS7du21pn0e0fzE/p.png","https://previews.dropbox.com/p/thumb/ACX327mUXR7sM_KTbdFgQlY1P4VRpOlleFzE9-iRwxkurFLiAF1e90uGYXwdd97hTUPE1DPo9PAFXYICnpvEaOE5fvdHZ4LdUJnR8lVbHJ3a2_eIH1CiGewyUkDW5OqOP-b0UQ5nVFlOBgNvvA-3jvYTg6gUkaTHZg6b6oh-V5poYSyy2yEbxHTxZSVXYb7yYcddiWV7TOHqD03IEKOrENdd0WA0K3mzNsxljReKPiQ7JaTBwSXxyej4ouiylKJDIx4A7oCSIfrsHJpClngX1C6X2GcwhpEdeVZswewXDu8JgEH5Bn-tB1MJzTQwwQSDAVL5-8NTTJ6FHschfwF8l67njQR8JtYOETQDtae71Yg7Vm4ICrPuq3Fg9zMZXj67dqM/p.png","https://previews.dropbox.com/p/thumb/ACVXfgmRu1hT7Bqt5yoUZyV1HuSAYgTFD_ouQGXbxo-gEHpn2Ok8unsU7PnfmAb4Y1k16GZAXyA5BUkL8EXElUx-H-k_pJrq8nZIavEozmqrb6ZN68zKKOw1y9DFDYnq45Cpurj8y5t4AAG1R9s7ZAg7UZEOjP07HWQxLigblR3fffrcU1U2l_doMI0FqU8-65XP9wn85VizL_MMICSEsa4NyOv5LYP-l4_m7OWFh0YSu_4TfB6zJV6dcxAn2APsUKsD_OPYh0NGOZSNnduTf_KP8hq6cfQq67c0Hx8PNRZdMnArEmKFXbIEYE-gB3b4O2bJMjnSFCDx3E3fJ1EAQNIv_OhYuSajNc9JpqREgHdQpzRqm2vHJfqP_TeoqVFyOZo/p.png"]
    },
    {
        "marca": "Nike",
        "modelo": "Jordan low premium",
        "precio": 92500,
        "extra": ["https://previews.dropbox.com/p/thumb/ACUBavS0rZLirrj7PDX-8xSVWIZ3EaqViAjql3zJAKN-0CzRRxNgouiL7Kf4s3IIqNcXnW7pH2YEC8vw4WakIoS8M4cBOSmhb-R3knGwP2Y88oqL700jjPnv26wXnMiUIBBaP1qOXF4SyBBxz0E4MTkXpU24UZrfXjrxL_AfmOeRxByk2e-b1YBmOauv7ASAgMvgXQoHZ6Y6sZEWsReCsmpITfpn8A_29kbZRVnr4bVmjk9ax6RRx_AMrW6e01wngdzk9dqg2wJtO00UQtpcO-ItW4kcQX47hTj_D8dmJJC_L4K0A6phs08i6cBoR5zue2QHdm1sCXS7dbf-aR7ZvFC08WmmblEchBXCmVT93MgZWKweflAmhH1EQlMWQX9MGG8/p.png",""]
    },
    {
        "marca": "Nike",
        "modelo": "pegasus",
        "precio": 92500,
        "extra": ["https://previews.dropbox.com/p/thumb/ACWCwz0h6wxEUlNgljpyoAgu1iH1I3VSqYjBC2HI8Fvv5C7Ycd8IlfXl1jaDrXnSfs2UzKwOurXmJR9fjiAQs6IXGhF3HG-zkqV8zlPz-C7BOdNFLwA_G-bV6LRHq0ZwiRNoqJRw6vk8QjWbqDOhVj7Ffzv75lRv4vMH4x78_rILsG2O7zh-0jBzMrUQeOwNZ0r_P84DmHDMt3GV6cVz196XaxGNJmQOMRN0S1XiTBJv_FXrcWWm9_RJO5dkm0e2JUAkit8JfS8lypT2V43wIOFLJSTpt2cUyzKWyDyMdAcJQ5JHS2C8MDyJqYgHleWhKWyynXxqB7Vc5-dzFz6J1ohvR2OyTl5ceJUxlwTNre31mmWej5PcGJjKZnvsQkWs4P4/p.png"]
    },
    {
        "marca": "Nike",
        "modelo": "SB primera linea",
        "precio": 92500,
        "extra": ["https://previews.dropbox.com/p/thumb/ACX5LHivCiYOBFdO7H-Z1tcNQoI5d1LJW6W2UOYyzSyRnMMT2b7Y1LzenfhO2mi44kks4JzeCmXPfp_KipksiO2iOeBtrCWTNjeL5p_AWQ1rd1SJlCTsFVzPWJiAUe0B3l-BWW1hBJs5rFrxGrGxlN_PxuAscmdDIDnKvsBTEkgRdLPt_PHkQ-FI-ASsO_icgbKTAoRIbwPHxDStIthWWDuMqo4eUOdzNopaggpC_0gE1XWjOEWmRwRij6VuwCck18JBS724-P42MOywST-ZPFuiJxKZ0rvE7cbnyAoeYKb4nFiW5GjrXAikhXVzGlrjBhFoDjfMgNARjQbqacEWUfvUia3tpYVFPSDS5d4rWwPRXjdAO_wEMoQx2xDdi0apUT8/p.png","https://previews.dropbox.com/p/thumb/ACWdJXE1aNqMx02Azo85JyoOkQJAYtqbUCwfusfTTH7VEU4CEek9AWN8eDkWskP6lszxcPVDVlyBhLHzAS6pWvlxkqFfwYLZCV0I92hvMLu1p9DbUfk1BGKVv1lbvQkZyC7mhC31YJWD6G9pkfCiHFhWrcyHQIImofvU_W8T7iURjHHp6tqgo1wedvdyuPZexDpCFHLO1Jj3lcOh_fPWyDWeXriXlJR7T0sAK4CL1MiRGgZKyqGLqGnkQgnpbBTog5j3nUw8GpdsybXDbhAuEqu0Yk75Wx_tH_M71i9OL7rhmUBXNq5jlNljCnLDOZvInyJJWs97SBGIXQIuwAaNeLidHUz_8QJQSnzZRuZ4z4NKJRRYIZ75HCee-zgvmHA7Fmk/p.png"]
    },
    {
        "marca": "Nike",
        "modelo": "SB premium",
        "precio": 92500,
        "extra": ["https://previews.dropbox.com/p/thumb/ACU6WsoPnADZVSTFpT1Af9QR4LYR1h85akGQPbVFGfirVj9JrHP3oSE-4szzUt9LNfkyFvJgXHdzlb0rEyowKvjxF9wYQmmk_tIUvQIwgt5otAJIpsaZdGgDceBnujHpDFzf7USdCpxjbdGp_y2ecidNPPAs1ekhUEd7cMYfezGE3d_9Yv0iOAJz5pkPbRQxwo6LAz587DdR2-Bi2f6z_5YY_vqFCfwWvgzFqj1sYOOgYR6zn1tJ1MU_Z6gzFHH83wFz7p9VAxSxgNGSEtupbBKbcIlPsAoX4TowP3L-cpupf5t1tZHM3Y9Sqphpr1u9RJJI11aQL4fAmdnfS9EkGkSeXryjVAhVqwymWav8pZPmtl16ZV9sQf8n7PQUJlDjx70/p.png","https://previews.dropbox.com/p/thumb/ACXB2gUPcXGyEZqzztQaz3cd_kQBoDZGikIIiFhDUv3h6B5UE6bMj05QjDgfgsd4Cd6-Xj1vnGjiMo-89zEpya4FaW1XQDO-eKj-zzjBfP1uVgUqHT6-8SARtbY5VUS5zQTGDsnGEDfmYRmz5IgV5hLe1KHO0vOSgZWFfXBO6XnaLUAzgkQAs-bjYU_zvwJ4m0J8XVShvjHMRAqE_bW7s0NhfUe362uNSQXcjwqVRgBUOytrfaUNuSEgygB8dbjktQtlqe7HNyH1gEHaNKfKS_IBejdNuXQbfGibi9WvwDFTiGUa4z7L9xB4uZJ0l-LLAwtlI5kADnmwItgoLC7JpL1p4ICsfwMGLKFA_P3vcV85OLi3vtdcAWstiwrIThzzIMM/p.png"]
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
        "extra": ["https://previews.dropbox.com/p/thumb/ACV4KkyZJmNmSeRylvyBJH7ZdfUwb0sqOXZY3xGfHP-MbI7TwxSnwQNVpSoc_E2bpoW6mOW-l9GkonjVNei2VzD06N9Nrwak4JvFi_EqwPOdScHSxTiQWcMWwwX8PEgHEzHWTu7unjGVfQ5DUlybPb0h9JL8aEuzzGcnfBvcThfTZJlXh23B2rINdAqJhqMNMEkz7ddLzYSYU_IdzKuhloe4PsVHDpEym9HEQZif6vC_s1Mkm1kxXnCBcP55lBtUCSg44nvNhMHWwbHkTcdqC-npjusA6FCnUE9ZXoLowgAVfwg7BWMnbgZlOO6dZCEO7c5Hd2j-MqYhc7csauxoxUp-10Xv6qhiGj_q53jkNWLcRL4ODqxDdgiJIix6Q4BHVys/p.png","https://previews.dropbox.com/p/thumb/ACUHgbIYaXMJlU-gHjLdoXouF1ZEhRkCLbUznv9DLTr5XjMkKMf5KpuPfo5yzf4dA-oLj1lG8PEVmB6iPTrNXrWx9xmGTBjnInDZF5ppylTNEV9lrmy_jTmdYLj1SYRNUmUPszheO9FbPrU1EKzCL1WOZ_2Z6l4cIf_YS4ryDEhP2DOKsf30bkz02UvkTfCBiP1aCmYN3wStQUEsLqGXeFAKmhVLrEEWmn-_buld3AIFNgRDzVKefEggDnGD7FowxvWgZR_c9W3H1nhrzOMeoGFAfzSaPXIYVpd4kEXHg6rYKjMSSKCcc8owRjq9Mnk0PD_038Ufgj8S2oWCRwWG7r2YItcze2gJ6FMajqkR8NsMamvUcdPZL2YsWwV3gjQqaZk/p.png"]
    },
    {
        "marca": "AF1",
        "modelo": "Louis Vuitton",
        "precio": 92500,
        "extra": ["https://previews.dropbox.com/p/thumb/ACU6-4QLCkHluE1pcGNAyI7AGKaJHUK_PSXvgbst5QSovLMKM4OLATloJ-Pj_xuazAW8LqrcTHphOI8rW4rmmn4PcyCkX9s_hAYA_Up3T2kPoGnOGGXPUZkaSfoJldfaQm0Oc-bX8tHqsk3WdpDJ9wvjpXpy464doxvkil5H5H36C3R4_VP5YdYChhSMTaV45syQZUueYtFBdrsXJxEjg57DXLjvrDdD9jZhbDKLiIZS3lV5Nlu8BrG8vf2DYUr0kpZlUZ8u64r3FzTgvkzW_3pJ1727-vrPWt5hMX5imyU9a-efpI3MT3AZ5KhykYTQQhzCE0B5iRtzN7KPAXPxtdXNKevvX7eXkNH5oBjW1qhNTZLIG8Rxsd1YDQm61FAKDbs/p.png","https://previews.dropbox.com/p/thumb/ACVwj2qmAWxFcGnOUqQDfyPuGROluamLN_kzoM-okF0AIFA6gYCxzf89lTwpIHvB1XR-iG_aug6OiJbOMxJESkzNle6VMQTjKm7Q5_dImOrt2kVONRAQ6vWYU30NN2fQVJ542ZYGMgYLjVQrtUBtc7tzCrYzK2Id8QqC_t_J4NiOyxTvG28PgrLXpFCVNRt0Z68TvzzyB_Qzk8sW-sWXxBtSta_pGc-_d_Kr-WvCmZrQA3U6SF5S7BQ2WGtBYc8q2i2VHx9CgCjTotnVbmkfEmpgREPXwg5vtytygo5MX9QRCOdUlkft3boZv8qPIXdmZJClZ-I1pdJ2N_g4KcGz_hSht7CkRFkLSS-9zj71YR5t69Uh7dBy2c_3r48vcDb5TFQ/p.png"]
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