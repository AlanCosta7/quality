import { defineStore } from 'pinia';

import { $auth, $analytics, $firestore, $functions, $storage } from '../boot/firebase'
import { doc, getDoc, getDocs, deleteDoc, addDoc, setDoc, updateDoc, collection, query, where, onSnapshot, arrayUnion } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
import { getStorage, ref, list, getDownloadURL } from "firebase/storage";

import { Platform, Notify } from 'quasar'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        listaGaleria: [],
        listaTestemunho: [],
        listaServices: [
            {
                img1: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/galeria%2FFurniture%20reupholstery%2F66_1600x1600.webp?alt=media&token=f7fab1bc-2078-4b84-9cb7-321d61d3e819',
                img2: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/galeria%2FFurniture%20reupholstery%2F23_400x400.webp?alt=media&token=03d3940a-acdb-47fa-8598-9d6c2165e253',
                title: 'Furniture reupholstery',
                text: 'Upholstery as a service refers to professionals who provide furniture restoration, repair, and customization. They work on items like sofas, chairs, and other furnishings, replacing or repairing padding, springs, and fabric to improve comfort, appearance, and overall longevity of the furniture.',
                icon: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/icons%2Fseater-sofa_600x600.webp?alt=media&token=945d7f6c-b203-4155-8aa4-4600109fb152',
                link: 'furniture_reupholstery',
                direcao: false
            },
            {
                img1: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/galeria%2FMarine%20and%20RVs%2F09_1600x1600.webp?alt=media&token=32588c86-06ea-497c-90e7-31bcbc95a9a2',
                img2: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/galeria%2FMarine%20and%20RVs%2F07_400x400.webp?alt=media&token=8f678092-7c12-44ed-84ac-897dc3667a49',
                title: 'Marine and RVs',
                text: 'Marine upholstery as a service specializes in the restoration and customization of boat interiors. Professionals in this field work on boat seats, cushions, and other marine furnishings, using materials designed to withstand the unique challenges of marine environments, such as water resistance and UV protection. The goal is to enhance comfort, durability, and aesthetics for boat owners.',
                icon: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/icons%2Flancha_600x600.webp?alt=media&token=e814ac66-0cd9-43d4-a1e2-d07f78fada2b',
                link: 'marine_and_rvs',
                direcao: true
            },
            {
                img1: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/galeria%2FPatio%20furniture%20Cushion%20sets%2F16_1600x1600.webp?alt=media&token=d081d3f6-e26e-4501-8d78-641ac94a903e',
                img2: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/galeria%2FPatio%20furniture%20Cushion%20sets%2F02_400x400.webp?alt=media&token=99ab492e-c901-4f6a-aedf-0e4862e53bb8',
                title: 'Patio furniture/Cushion sets',
                text: 'Patio cushion upholstery services involve refurbishing and customizing cushions used in outdoor furniture. Professionals in this field focus on using materials resistant to weather conditions, such as water-resistant fabrics and durable padding, to ensure longevity and comfort for patio cushions. This service aims to enhance the aesthetics and functionality of outdoor seating areas.',
                icon: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/icons%2Fsofa_600x600.webp?alt=media&token=e2fdd6b6-66dc-4094-ad5b-50649122beb6',
                link: 'patio_furniture-cushion_sets',
                direcao: false
            },
            {
                img1: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/galeria%2FSlipcovers%2F04_1600x1600.webp?alt=media&token=5691ec37-7de6-4280-affb-a72e33c4b630',
                img2: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/galeria%2FSlipcovers%2F11_400x400.webp?alt=media&token=542eef44-fc2d-4f95-b296-c984ff34e4a3',
                title: 'Slipcovers',
                text: "Slipcovers as a service involve creating custom-fitted fabric covers for furniture pieces. Professionals in this field design slipcovers to fit over sofas, chairs, or other furnishings, providing a quick and removable way to change or protect the look of furniture. It's a convenient option for those seeking a temporary or versatile solution for their home decor.",
                icon: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/icons%2Fsofa%20(3)_600x600.webp?alt=media&token=c01c2588-5a78-4c6c-bb6e-422596ce68b9',
                link: 'slipcovers',
                direcao: true
            },
            {
                img1: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/galeria%2FCustom%20pieces%2F8_1600x1600.webp?alt=media&token=83c231b8-8b3d-4209-b467-f86d1c0c1df7',
                img2: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/galeria%2FCustom%20pieces%2F6_400x400.webp?alt=media&token=87b1da3a-6393-4c55-b947-0d1d0cdc8a97',
                title: 'Custom pieces',
                text: "Custom upholstery projects as a service cater to individualized furniture needs. Professionals in this field collaborate with clients to create unique and personalized furniture pieces. This may involve choosing specific fabrics, designs, and tailoring solutions to meet the client's preferences. The service aims to deliver one-of-a-kind, made-to-order furniture that aligns with the client's vision and style",
                icon: 'https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/icons%2Fsofa%20(1)_600x600.webp?alt=media&token=2ecb8e93-767e-4085-a722-67718393fa45',
                link: 'custom_pieces',
                direcao: false
            }
        ],
        lista_furniture_upholstery: [],
        lista_furniture_reupholstery: [],
        lista_custom_furniture_design: []
    }),
    getters: {
        mobile() {
            return Platform?.is?.mobile ? true : false
        },
    },
    actions: {
        handleCallback(payload) {
            if(payload.type && payload.message) {
                Notify.create({
                    type: payload.type,
                    message: payload.message,
                    timeout: 2000,
                })
            }
            },
        async promiseAll() {
            let lista = ['galeria']
            for (let i = 0; i < lista.length; i++) {
              const element = lista[i];
              await this.getCollection(element)
            }

            return true
          },
        async getCollection(item) {
            if(item) {
                const q = query(collection($firestore, item));

                onSnapshot(q, (querySnapshot) => {
                    const lista = [];
                    querySnapshot.forEach((doc) => {
                        lista.push(doc.data());
                    });
                    switch (item) {
                    case 'listaTestemunho':
                        this.listaTestemunho = lista
                        break;
                    default:
                        break;
                    }
                });

            }

        },
        async sendHttpCall(payload) {

            const send = httpsCallable($functions, payload.functions);
            const result = await send(payload.data).then((result) => {
                const data = result?.data;
                return data
            }).catch((error) => {
                console.log('sendHttpCall', error)
                return {error: error}
            })

            return result
        },
        async getImg(item) {
            this.listaGaleria = []
            const listRef = ref($storage, `galeria/${item}`);
            // Find all the prefixes and items.
            return list(listRef)
            .then((res) => {
                for (let i = 0; i < res.items.length; i++) {
                    const itemRef = res.items[i];
                    const starsRef = ref($storage, itemRef.fullPath);

                    getDownloadURL(starsRef)
                    .then((url) => {

                        let a = url.split('.webp')
                        let b = a[0].split('_')
                        let c = b[1]

                        switch (c) {
                            case '200x200':
                                this.listaGaleria.push({
                                    img_200: url
                                })

                                break;
                            case '400x400':
                                this.listaGaleria.push({
                                    img_400: url
                                })

                                break;
                            case '600x600':
                                this.listaGaleria.push({
                                    img_600: url
                                })

                                break;
                            case '800x800':
                                this.listaGaleria.push({
                                    img_800: url
                                })

                                break;
                            case '1600x1600':
                                this.listaGaleria.push({
                                    img_1600: url
                                })

                                break;

                            default:
                                break;
                        }

                        // https://firebasestorage.googleapis.com/v0/b/quality-upholstery.appspot.com/o/galeria%2FCustom%20pieces%2F8_800x800.webp?alt=media&token=8b649996-3d42-4cd5-bfe8-f2e000747342
                        // Insert url into an <img> tag to "download"
                    })
                    .catch((error) => {
                        // A full list of error codes is available at
                        // https://firebase.google.com/docs/storage/web/handle-errors
                        switch (error.code) {
                        case 'storage/object-not-found':
                            // File doesn't exist
                            break;
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect the server response
                            break;
                        }
                    });
                }

                return res
            }).catch((error) => {
                console.log('error:', error)
            });
        }

    }
})
