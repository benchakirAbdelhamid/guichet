import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
    event:[
      {
        id:'1',
        name:'Concerts-&-Festivals',
        title:'Bocademy Football school',
        Description:'Cours de football assuré par un moniteur professionnel - 5 séances d’aquagym offertes /an - 1 match/mois gratuit pour les parents des adhérents',
        imageURL:'https://gcdn.imgix.net/events/bombacomique-a-marrakech-2.jpg',
        date:'Lundi 31 Juillet 2023',
        category:'Concerts & Festivals',
        location :'rabat',
        ticket_Category:[
          {id_ticket_Category:1,category_name:'firstClass', pric_category:1000},
          {id_ticket_Category:2,category_name:'vip', pric_category:500},
          {id_ticket_Category:3,category_name:'normal', pric_category:200}
        ]
      },
      {
        id:'2',
        name:'Théâtre-&-Humour',
        title:'Lmo9awala Bla Filtre',
        Description:'Mo9awala bla filter est un événement organisé et animé par Yassine Alaoui qui réunit les meilleurs entrepreneurs marocains pour partager leurs histoires, dévoiler leur chiffre d"affaires réel et inspirer des milliers de jeunes startappers et entrepreneurs.',
        imageURL:'https://gcdn.imgix.net/events/lmo9wala-bla-filtre-2.jpeg',
        date:'Samedi 17 Juin 2023',
        category:'Théâtre & Humour',
        location :'Megarama Casablanca',
        ticket_Category:[
          {id_ticket_Category:1,category_name:'firstClass', pric_category:1000},
          {id_ticket_Category:2,category_name:'vip', pric_category:500},
          {id_ticket_Category:3,category_name:'normal', pric_category:200}
        ]
      },
      {
        id:'3',
        name:'Formations',
        title:'RCA vs WAC',
        Description:'Pour le compte de la 21ème journée de la Botola Pro Inwi 2022-2023, le Raja Club Athletic reçoit le Wydad Athletic Club le Mercredi 05 Avril 2023 à 22h00 au Complexe Sportif Mohammed V - Casablanca',
        imageURL:'https://gcdn.imgix.net/events/rca-vs-wac.jpg',
        date:'Mercredi 05 Avril 2023',
        category:'Formations',
        location :'Stade Mohamed V',
        ticket_Category:[
          {id_ticket_Category:1,category_name:'firstClass', pric_category:1200},
          {id_ticket_Category:2,category_name:'vip', pric_category:70},
          {id_ticket_Category:3,category_name:'normal', pric_category:300}
        ]
      },
      {
        id:'4',
        name:'Salons-&-congrès',
        title:'Le World Maintenance Summit',
        Description:'Le World Maintenance Summit est un événement incontournable qui rassemble certains des esprits les plus brillants de l industrie. Des leaders renommés seront présents pour partager leurs connaissances et leur expérience dans le domaine de la digitalisation industrielle.',
        imageURL:'https://gcdn.imgix.net/events/le-world-maintenance-summit-1.jpeg',
        date:'11-12 Mai 2023',
        category:'Salons & congrès',
        location :'UM6P , Marrakech',
        ticket_Category:[
          {id_ticket_Category:1,category_name:'firstClass', pric_category:1000},
          {id_ticket_Category:2,category_name:'vip', pric_category:500},
          {id_ticket_Category:3,category_name:'normal', pric_category:200}
        ]
      },
      {
        id:'5',
        name:'Famille-&-Loisirs',
        title:'P&D AIRWAYS',
        Description:'Venez voler avec P&D AIRWAYS, le vendredi 12 mai 2023 notre avion décollera à 20h00 ✈️  Paint & Drink vous invite à venir en tant que représentant de votre pays préféré, par ex. Hula girls Hawaii 💃 , et peignez ses monuments 🧑‍🎨, ses natures ou ses artistes célèbres 🌳. Notre pilote avec ses stewards et hôtesses seront à l accueil 🧑‍✈️',
        imageURL:'https://gcdn.imgix.net/events/le-double-je-a-agadir-2.jpeg',
        date:'Vendredi 12 Mai 2023',
        category:'Famille & Loisirs',
        location :'Brasserie Nicole',
        ticket_Category:[
          {id_ticket_Category:1,category_name:'firstClass', pric_category:500},
          {id_ticket_Category:2,category_name:'vip', pric_category:300},
          {id_ticket_Category:3,category_name:'normal', pric_category:100}
        ]
      },
      {
        id:'6',
        name:'Sport"',
        title:'Carte "#Hna_m3a_CODM"',
        Description:'و نزولا عند رغبة  منخرطي النادي و  الجمهور المكناسي العريض الغيور على فريقه فقد قرر المكتب المسير طرح بطائق دعم من فئة 100، 500 و 1000 درهم،  هدفها المساهمة في مالية الفريق  بما مجموعه 1 مليون درهم لتحقيق حلم الصعود للقسم الاحترافي الثاني و ذلك خلال الفترة الممتدة بين 31 مارس و 20 ابريل 2023.        ',
        imageURL:'https://gcdn.imgix.net/events/olivier-guedj-a-rabat-2.jpeg',
        date:'Dimanche 30 Avril 2023',
        category:'Sport',
        location :'Meknès',
        ticket_Category:[
          {id_ticket_Category:1,category_name:'firstClass', pric_category:1100},
          {id_ticket_Category:2,category_name:'vip', pric_category:300},
          {id_ticket_Category:3,category_name:'normal', pric_category:100}
        ]
      },
      {
        id:'7',
        name:'Cinéma',
        title:'PATHAAN au IMAX Morocco Mall (VO)',
        Description:'الاخوان كومیدیا اجتماعیة تحكي قصة 3ٔ اصدقاء (زریقة الشارو، عبد الصادق) ، یعتبرون نفسھم ٕاخوان فیما بینھم، ینحدرون من حي صفیحي بالدارالبیضاء. لكل واحد منھم قصتھ وھمومھ ومشاكلھ لكن یشتركون في مسألة واحدة ھي الفشل في حیاتھم التي یطبعھا الفقر المادي والعاطفي والعائلي والبطالة والتھمیش والفراغ... وبعد التزامھم بغیة فرض احترام الناس تیمنا بقدوتھم )لفقیه سالم(، یقعون ضحیة تغریر حیت تم استقطابھم وغسل ٔافكارھم مستغلین سذاجتھم وطیشھم بعد "البوز" الذي خلقھ ٔاحد الفیدیوھات الذي صوره اإلخوان وتم تسریبه على األنترنت لیكون سببا في ٕاصدار مذكرة بحث ٔامنیة في حقھم عبر التراب الوطني         ',
        imageURL:'https://gcdn.imgix.net/events/pauscine-film-al-ikhwan.png',
        date:'Samedi 21 Mai 2022',
        category:'Cinéma',
        location :'Meknès',
        ticket_Category:[
          {id_ticket_Category:1,category_name:'firstClass', pric_category:2000},
          {id_ticket_Category:2,category_name:'vip', pric_category:100},
          {id_ticket_Category:3,category_name:'normal', pric_category:500}
        ]
      },
      {
        id:'8',
        name:'Concerts & Festivals',
        title:'NOSTALGIA en tournée à Casablanca',
        Description:'WORK EVENT et L’Associ ation Musiland reviennent cette fois-ci avec Nostalgia, un concept inédit et sans précédent au Maroc.',
        imageURL:'https://gcdn.imgix.net/events/nostalgia-en-tournee-a-casablanca.jpg',
        date:'Vendredi 26 Mai 2023',
        category:'Concerts & Festivals',
        location :'Megarama Casablanca',
        ticket_Category:[
          {id_ticket_Category:1,category_name:'firstClass', pric_category:1000},
          {id_ticket_Category:2,category_name:'vip', pric_category:500},
          {id_ticket_Category:3,category_name:'normal', pric_category:200}
        ]
      },
      {
        id:'9',
        name:'Théâtre-&-Humour',
        title:'FDF',
        Description:'Double N Event vous présente la première édition du FREQUENCY DANCE FESTIVAL à Rabat.',
        imageURL:'https://gcdn.imgix.net/events/fdf.jpeg',
        date:'05 & 06 Mai 2023',
        category:'Théâtre & Humour',
        location :'Megarama Casablanca',
        ticket_Category:[
          {id_ticket_Category:1,category_name:'firstClass', pric_category:1500},
          {id_ticket_Category:2,category_name:'vip', pric_category:900},
          {id_ticket_Category:3,category_name:'normal', pric_category:700}
        ]
      },
      {
        id:'10',
        name:'Formations',
        title:'Parcours Immersif : Re-Découvrez Marrakech',
        Description:'Découvrez Le Parcours, une promenade en cinq étapes, chacune réellement initiatique, immersive et surprenante pour qui veut découvrir véritablement le Marrakech d’hier autant que celui d’aujourd’hui',
        imageURL:'https://gcdn.imgix.net/events/parcours-immersif-re-decouvrez-marrakech.png',
        date:'Lundi - Vendredi : 9H00 - 21H00 ',
        category:'Formations',
        location :'Stade Mohamed V',
        ticket_Category:[
          {id_ticket_Category:1,category_name:'firstClass', pric_category:1000},
          {id_ticket_Category:2,category_name:'vip', pric_category:500},
          {id_ticket_Category:3,category_name:'normal', pric_category:200}
        ]
      },
      {
        id:'11',
        name:'Salons-&-congrès',
        title:'Opera Royal du Maroc',
        Description:'Le World Maintenance Summit est un événement incontournable qui rassemble certains des esprits les plus brillants de l industrie. Des leaders renommés seront présents pour partager leurs connaissances et leur expérience dans le domaine de la digitalisation industrielle.',
        imageURL:'https://gcdn.imgix.net/events/opera-royal-du-maroc.png',
        date:'Dimanche 30 Avril 2023',
        category:'Salons & congrès',
        location :'Meydene Marrakech',
        ticket_Category:[
          {id_ticket_Category:1,category_name:'firstClass', pric_category:1300},
          {id_ticket_Category:2,category_name:'vip', pric_category:800},
          {id_ticket_Category:3,category_name:'normal', pric_category:400}
        ]
      },
      {
        id:'12',
        name:'Famille-&-Loisirs',
        title:'Solal Exprience',
        Description:'Venez voler avec P&D AIRWAYS, le vendredi 12 mai 2023 notre avion décollera à 20h00 ✈️  Paint & Drink vous invite à venir en tant que représentant de votre pays préféré, par ex. Hula girls Hawaii 💃 , et peignez ses monuments 🧑‍🎨, ses natures ou ses artistes célèbres 🌳. Notre pilote avec ses stewards et hôtesses seront à l accueil 🧑‍✈️',
        imageURL:'https://gcdn.imgix.net/events/solal-exprience.jpeg',
        date:'28 Avril 2023 01:00 - 30 Avril 2023',
        category:'Famille & Loisirs',
        location :'MAMA LOVA Essaouira',
        ticket_Category:[
          {id_ticket_Category:1,category_name:'firstClass', pric_category:1300},
          {id_ticket_Category:2,category_name:'vip', pric_category:900},
          {id_ticket_Category:3,category_name:'normal', pric_category:300}
        ]
      },
      {
        id:'13',
        name:'Sport',
        title:'Les Foulées de Casa Anfa"',
        Description:'En soumettant le formulaire d’inscription, vous acceptez le règlement de la course et bénéficiez d un accès gratuit au salon AFRICA SPORTS EXPO pour récupérer vos dossards et maillots sur place ou au Run Village',
        imageURL:'https://gcdn.imgix.net/events/les-foulees-de-casa-anfa.jpeg',
        date:'Les 3 Et 4 Juin 2023',
        category:'Sport',
        location :'ANFA PARK',
        ticket_Category:[
          {id_ticket_Category:1,category_name:'firstClass', pric_category:1800},
          {id_ticket_Category:2,category_name:'vip', pric_category:1300},
          {id_ticket_Category:3,category_name:'normal', pric_category:1000}
        ]
      },
      {
        id:'14',
        name:'Cinéma',
        title:'Formation cuisine et pâtisserie',
        Description:'S’investir et s’engager pour mettre en place des structures de formation en fonction de l évolution des métiers de l hôtellerie-restauration.et accompagner les talents afin qu’ils mènent à bien leur projet de reconversion ou de création d’entreprise.  ',
        imageURL:'https://gcdn.imgix.net/events/e28hyjiEiZNhJoDwFoi3gNYGceWMp3n9XcDKxXJN.jpeg',
        date:'Dimanche 28 Février 2021',
        category:'Cinéma',
        location :'Meknès',
        ticket_Category:[
          {id_ticket_Category:1,category_name:'firstClass', pric_category:1000},
          {id_ticket_Category:2,category_name:'vip', pric_category:500},
          {id_ticket_Category:3,category_name:'normal', pric_category:200}
        ]
      },
    ],
    category:[
      {
        id:1,
        title:'Concerts & Festivals',
        name:'Concerts-&-Festivals',
        image:'https://gcdn.imgix.net/categories/cv13zidKOcN7vDn8GlhlULGzT8MtvnZax8P1KCR1.jpeg',
        description:'Concerts & Festivals ...'
      },
      {
        id:2,
        title:'Théâtre & Humour',
        name:'Théâtre-&-Humour',
        image:'https://gcdn.imgix.net/categories/ANA6bib5RiklcYvZMQe9KWeNQSV068Cn8aWvjNOC.jpeg',
        description:'Théâtre & Humour ...'
      },
      {
        id:3,
        title:'Formations',
        name:'Formations',
        image:'https://gcdn.imgix.net/categories/HqB5Rz3r30WnoNeNjbBJ8aNwuQnuiAW0mH3N7XCE.jpeg',
        description:'Formations ...'
      },
      {
        id:4,
        title:'Salons & congrès',
        name:'Salons-&-congrès',
        image:'https://gcdn.imgix.net/events/6eme-edition-cosmetista-expo-2023.jpeg',
        description:'Formations ...'
      },
      {
        id:5,
        title:'Famille & Loisirs',
        name:'Famille-&-Loisirs',
        image:'https://gcdn.imgix.net/categories/n9uyl7xlYp50HC1cjWKx3eLzow3UPhw20eMuGfHX.jpeg',
        description:'Famille & Loisirs ...'
      },
      {
        id:6,
        title:'Cinéma',
        name:'Cinéma',
        image:'',
        description:'Cinéma ...'
      },
      {
        id:7,
        title:'Sport',
        name:'Sport',
        image:'https://gcdn.imgix.net/categories/sport.jpeg',
        description:'Sport ...'
      },
    ],
    authentification : {
      connection : {
        isConnected : false,
        authLoading : false
      },
      signIn:{
        loading : false,
        data : null,
        error:null,
        successMessage:null
      },
      signUp:{
        loading : false,
        data : null,
        error:null,
        successMessage:null
      },
    },

};

  const cartSlice = createSlice({
    name: "event",
    initialState,
  
    reducers: {
      addToCart:(state, action)=>{
        // console.log('===> ',action.payload)
        let numObjects = action.payload.quantityValueTicket;

        for (let index = 0; index < numObjects; index++) {
          // generate rendom non-repeating characters
          let generateCharactersIdTichet = '';
          let numberCharacter = 15
            let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            for (let i = 0; i < numberCharacter; i++) {
              let randomIndex = Math.floor(Math.random() * characters.length);
              let randomCharacter = characters.charAt(randomIndex); 
              // Remove the selected character from the character set
              characters = characters.slice(0, randomIndex) + characters.slice(randomIndex + 1);
              generateCharactersIdTichet += randomCharacter;
            }
            // puch info event to cart
              state.cart.push(
                  {
                    'id_ticket_category':generateCharactersIdTichet,
                    'eventPackage':action.payload.eventPackage,
                    'eventId':action.payload.eventId,
                    'date':action.payload.date,
                  }
                )   
        }


      },
      deleteCommand :(state, action)=>{
        state.cart = state.cart.filter((post) =>
         Number(post.eventId.concat(post.eventPackage)) !== Number(action.payload.id) 
        );
      },  

    },
  });
  
  export const {
    addToCart,
    deleteCommand
    
  } = cartSlice.actions;
  export default cartSlice;
  
