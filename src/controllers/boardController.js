const Board = require("../models/Board");
const List = require("../models/List");
const Card = require("../models/Card"); // Adjust path as needed
// move card

// create card
const units = [
  {
    id: "f08dee16-fdc1-4ee2-97fe-de9b5294392d",
    title: "Unit 1: abstergo quia",
    activities: [
      {
        title:
          "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
        _id: {
          $oid: "68c58dea8572145288f7c97e",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 1,
        basicInfo: {
          title:
            "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
          description:
            "Trucido calco deprimo vociferor quasi acidus. Supellex acerbitas iste omnis suffragium nesciunt virgo. Rerum auctor depopulo officiis custodia terminatio praesentium tamen.",
          subject: "pe",
          gradeLevel: "prek",
          type: "interactive",
          duration: "20 mins",
          difficulty: "intermediate",
          standardsType: "common-core",
          learningObjectives:
            "Admiratio civitas suppellex assumenda cruentus dolorum cohaero.\nTurba cuius usus crebro amor defleo adsidue cogo.\nAiunt apostolus socius agnitio antiquus supra currus dedico decerno.\nAduro ciminatio amoveo vetus magni copiose.\nSuus cenaculum vigilo viridis crastinus quasi absens sed.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: false,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "fbe79280-d744-4523-97bb-f6bc4da0d9c7",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Venio sollicito considero somnus audio illum tyrannus aliquam denuo.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Chirographum sol capio vilicus charisma accusamus stips vilitas solutio circumvenio. Virgo charisma spiculum victus collum. Sopor ambitus concedo aegrus curiositas.\n\nConitor tubineus compono accusantium sumo. Praesentium trado arguo theologus deporto vetus demergo delicate approbo. Cibus chirographum benevolentia ager pecto conor vacuus venia libero.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Arbitro statua adaugeo audacia vado vilitas casso vulgaris clibanus dapifer. Demum thorax conscendo. Architecto abbas charisma contra attero error artificiose ceno amoveo error.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Crepusculum eligendi debeo vigor caecus tot amitto expedita. Custodia crebro angelus voluptas stabilis tepidus repellat conturbo enim reiciendis. Ascisco tamdiu accommodo.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f7ba4d00-f339-4be6-96e6-90de7fb06330",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PNx9f4CCxDg",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "4fb799f4-5f65-4306-8521-c74d4e6a03ab",
              type: "multiple_choice",
              content: "<p>Valetudo crux teneo thorax dolorem.</p>",
              question: "Aggredior totus torqueo ulterius ea abscido.",
              options: [
                {
                  text: "cursus suggero cui thermae attonbitus",
                  isCorrect: false,
                },
                {
                  text: "totus cinis error",
                  isCorrect: true,
                },
                {
                  text: "suggero tergiversatio",
                  isCorrect: false,
                },
                {
                  text: "teres praesentium baiulus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Tonsor super aestas thymum ceno considero bos avarus velociter. Copiose acerbitas fuga omnis tenuis urbs absque soleo crur caste.",
              chosen: false,
              selected: false,
            },
            {
              id: "b18a7b91-3b6b-4ac2-8d27-8aecfe26dd08",
              type: "multiple_choice",
              content:
                "<p>Contra dolorum adsum theca vespillo vicissitudo appello canis.</p>",
              question:
                "Vicinus quidem circumvenio soleo amet acquiro atqui sufficio hic magni.",
              options: [
                {
                  text: "aufero tenus creptio",
                  isCorrect: false,
                },
                {
                  text: "desipio blandior",
                  isCorrect: false,
                },
                {
                  text: "turpis vita verbera optio spiritus",
                  isCorrect: false,
                },
                {
                  text: "placeat caecus derideo",
                  isCorrect: true,
                },
              ],
              explanation:
                "Depopulo calamitas vulgaris calco. Timor approbo una tres suppellex angustus vae desparatus commodi cursus.",
              chosen: false,
              selected: false,
            },
            {
              id: "21a529be-df87-4e75-a06d-9487893b22a7",
              type: "matching_pair",
              content:
                "<p>Vomica tergeo voluptatem cumque cohaero cras summa tabgo.</p>",
              pairs: [
                {
                  left: "debeo",
                  right: "aufero",
                },
                {
                  left: "quo",
                  right: "sponte",
                },
                {
                  left: "acer",
                  right: "artificiose",
                },
                {
                  left: "tibi",
                  right: "vulgus",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "46c70f1a-008d-4ec2-b4f6-492c3d6dafe1",
              type: "matching_pair",
              content: "<p>Anser arx demergo.</p>",
              pairs: [
                {
                  left: "volup",
                  right: "suasoria",
                },
                {
                  left: "somniculosus",
                  right: "peccatus",
                },
                {
                  left: "tertius",
                  right: "volo",
                },
                {
                  left: "audax",
                  right: "architecto",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4ca7c64b-a0a6-4eb8-a45d-34c9def9ad02",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "studio",
                },
                {
                  answer: "creator",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Deorsum anser chirographum. Vereor ara civis decor suggero eius talus quam caelum.",
            materials: "Pen, Notebook",
            assessment: "Velit ut textus decet.",
            extensions: "Uter supra ipsa.",
            resources: "https://prudent-individual.org",
          },
        },
        teacherSection: {
          instructions: "Comis cultura caritas. Quos verus hic delego.",
          guides:
            "Voluptatibus assumenda vergo defero iure umbra debilito ultio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes:
            "Curia thesaurus verbum ambitus causa repellendus quis sumptus consuasor.",
        },
        studentSection: {
          instructions:
            "Stipes adficio uxor desolo at peior dignissimos animi spero.",
          content:
            "Annus admiratio cotidie laudantium vester possimus pariatur. Crepusculum vivo totidem campana catena sursum. Vomica ager clam verus contra cerno.\nVesco depono comitatus bos tertius thesis. Bellum ubi dignissimos carpo blanditiis caveo distinctio tergum. Nemo aperiam supplanto excepturi ciminatio asperiores corpus tantum audio vitiosus.",
          worksheets: "https://crazy-dredger.name/",
          resources: "https://big-secrecy.com",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "finished",
        createdAt: {
          $date: "2025-01-13T22:18:08.093Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.784Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f7",
        },
      },
      {
        title: "Version 2: amo doloribus culpa",
        _id: {
          $oid: "68c58dea8572145288f7c97f",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 2,
        basicInfo: {
          title: "Version 2: amo doloribus culpa",
          description:
            "Spargo spiritus et fugit a tamquam contra cultellus allatus demens. Comptus apostolus collum alo vado caute sponte cruciamentum. Crudelis cenaculum tergiversatio dolorum curiositas.",
          subject: "art",
          gradeLevel: "6-8",
          type: "assessment",
          duration: "30 mins",
          difficulty: "advanced",
          standardsType: "state",
          learningObjectives:
            "Totus dolor contego mollitia audio suscipit suffoco error aureus versus.\nCalco venustas traho porro conspergo.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: true,
            showHints: true,
          },
        },
        content: {
          blocks: [
            {
              id: "646b21ef-ef0d-4d08-a443-eaa511f1647e",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Thalassinus artificiose viscus caelestis tamquam.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Fugit conatus sum urbs audacia vigilo. Terga bos chirographum recusandae. Turba facere pel est cibus similique arx defero.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "63f485c2-53ad-48f2-9cbe-475c6f8ee460",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=ZAqIoDhornk",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "6fb9717e-d1d1-4e6e-ae7f-c3a40f2fdcd1",
              type: "multiple_choice",
              content: "<p>Comprehendo vicinus nemo cena.</p>",
              question:
                "Tenuis thorax sordeo commodo una contra necessitatibus cunabula.",
              options: [
                {
                  text: "studio capitulus verus abscido",
                  isCorrect: false,
                },
                {
                  text: "aggredior alveus tui",
                  isCorrect: false,
                },
                {
                  text: "degenero ventosus placeat arbustum",
                  isCorrect: false,
                },
                {
                  text: "argentum peior vinculum esse",
                  isCorrect: true,
                },
              ],
              explanation:
                "Arcus subnecto caute damnatio. Voluntarius nobis vorago sub.",
              chosen: false,
              selected: false,
            },
            {
              id: "6aadbb22-1d3a-4afd-a67f-017d44b0b80c",
              type: "multiple_choice",
              content:
                "<p>Ex victoria delectus barba cultellus dolor deinde stella vinculum et.</p>",
              question:
                "Ascit avaritia adopto defungo mollitia nam thema vulnero.",
              options: [
                {
                  text: "verecundia voluptates validus",
                  isCorrect: false,
                },
                {
                  text: "deorsum absconditus vulgivagus",
                  isCorrect: false,
                },
                {
                  text: "uter defetiscor conqueror",
                  isCorrect: false,
                },
                {
                  text: "claustrum amicitia provident",
                  isCorrect: true,
                },
              ],
              explanation:
                "Vulnus suspendo incidunt pauci deficio civitas debilito succedo pel. Aegre quaerat cumque.",
              chosen: false,
              selected: false,
            },
            {
              id: "eca82717-b3d4-4d7b-bd49-797cc5255d89",
              type: "matching_pair",
              content:
                "<p>Adfero earum coadunatio aegre asperiores patior calculus peccatus.</p>",
              pairs: [
                {
                  left: "molestias",
                  right: "traho",
                },
                {
                  left: "celo",
                  right: "culpa",
                },
                {
                  left: "decipio",
                  right: "torrens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4e5a23fe-2776-4433-bea4-d99df846fc9f",
              type: "matching_pair",
              content: "<p>Ab copia aggredior.</p>",
              pairs: [
                {
                  left: "stipes",
                  right: "bis",
                },
                {
                  left: "denego",
                  right: "pel",
                },
                {
                  left: "praesentium",
                  right: "paens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "59f0c9f9-ef49-4dbf-a82d-2ef1e71aca8b",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "dolore",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "6c1ae60b-a89f-4520-ab62-ed404b8b2edb",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "spiculum",
                },
                {
                  answer: "aspernatur",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Ultio sophismata vesper. Vigor incidunt coniecto nobis cinis compono venia.",
            materials: "Pen, Notebook",
            assessment: "Apud vilis corrumpo.",
            extensions:
              "Arca repellendus arguo suppono argumentum cohaero suus delibero amaritudo abutor.",
            resources: "https://hard-to-find-swanling.name",
          },
        },
        teacherSection: {
          instructions:
            "Tyrannus addo correptius spiculum coma delego accommodo vulgaris. Asperiores spargo et brevis subnecto adeo fugit tutis labore.",
          guides: "Repellat derideo defendo depono cubo audio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Amaritudo paulatim carcer tollo.",
        },
        studentSection: {
          instructions:
            "Modi clibanus praesentium ocer tristis adulescens utor vinculum benevolentia adiuvo.",
          content:
            "Voro totidem facere angelus adinventitias asporto thalassinus combibo. Caute altus defleo thesaurus. Spero odio correptius.\nIpsa crustulum suffragium villa traho sunt minima crur tabernus textor. Sol vero eius certus. Alioqui valens tui culpo correptius suadeo.",
          worksheets: "https://flimsy-alligator.biz/",
          resources: "https://all-mozzarella.info",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "draft",
        createdAt: {
          $date: "2024-11-25T22:34:24.468Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.788Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f9",
        },
      },
      {
        title: "Version 1: temptatio utroque corrupti",
        _id: {
          $oid: "68c58dea8572145288f7c981",
        },
        id: {
          $oid: "68c58dea8572145288f7c980",
        },
        version: 1,
        basicInfo: {
          title: "Version 1: temptatio utroque corrupti",
          description:
            "Apparatus adiuvo alioqui charisma voro conor. Dolore vicinus talio vesica arcus virga. Baiulus architecto aggredior.",
          subject: "math",
          gradeLevel: "prek",
          type: "interactive",
          duration: "30 mins",
          difficulty: "intermediate",
          standardsType: "ngss",
          learningObjectives:
            "Saepe ater admitto vix ustilo aer arbitro tutamen creator.\nVigor defessus adhuc defessus stipes depulso tres canonicus cohors dignissimos.\nTabella victoria xiphias animus.\nAmo totam pax quasi timidus.\nCaritas aestas casus.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "b99d4781-f56b-412f-86a3-1e3207d2aac2",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Compello benevolentia coepi laboriosam patior debilito eaque curtus varius capillus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Voco carus aegrus. Denuncio cattus annus sollers comitatus ad creber conventus decumbo asporto. Odio voluptatibus aedificium cimentarius suffragium tamen stipes.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f9869b72-0e1a-4d39-81dd-dadc1179fc76",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Crur consectetur supra ter vitiosus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Tamquam demum absconditus nesciunt caelum auxilium aggero ipsa ad delego. Necessitatibus excepturi corrumpo bestia ulciscor abscido cruciamentum agnitio approbo. Stabilis caste talio trans.\n\nDistinctio desino adversus. Quaerat vado unus statua audeo cras. Supplanto virgo cruciamentum.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Ventus clementia desparatus. Eligendi cum crebro fugiat amoveo vallum tempore laborum defendo thymum. Id vorago decimus curso venia vulgivagus sophismata.\n\nTabula totam velociter decimus umbra similique turpis adhaero. Sub tutamen ipsam templum umquam cubicularis quas succedo. Vapulus capillus vix crudelis cunctatio esse appello.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "0c0fc439-b654-472f-9e2b-03c30ebae0cf",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PZ7lDrwYdZc",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "b2ebd49e-7923-4484-b9c5-835b9861fc60",
              type: "multiple_choice",
              content:
                "<p>Aranea villa fuga aufero cilicium attonbitus aestus.</p>",
              question:
                "Benigne vesper thesaurus careo bardus quibusdam correptius.",
              options: [
                {
                  text: "perferendis totam non aut assumenda",
                  isCorrect: false,
                },
                {
                  text: "crebro absens",
                  isCorrect: false,
                },
                {
                  text: "baiulus appello ultio patria",
                  isCorrect: false,
                },
                {
                  text: "talis voluntarius",
                  isCorrect: true,
                },
              ],
              explanation:
                "Colligo auxilium capitulus delicate patior assentator aperiam. Vis accusantium in ad cura.",
              chosen: false,
              selected: false,
            },
            {
              id: "d454a680-6911-4a46-85b8-e2593f69806d",
              type: "multiple_choice",
              content:
                "<p>Tricesimus corpus aegrus maiores laborum comes thema pecto admiratio ante.</p>",
              question: "Tamquam culpo nisi optio.",
              options: [
                {
                  text: "vesco delinquo patrocinor terreo calcar",
                  isCorrect: false,
                },
                {
                  text: "toties aperte advenio",
                  isCorrect: false,
                },
                {
                  text: "veritatis circumvenio vulpes una",
                  isCorrect: true,
                },
                {
                  text: "absorbeo caste theologus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Varietas conitor reprehenderit clam. Facere tollo comedo deorsum usitas tibi cervus spiculum deputo ubi.",
              chosen: false,
              selected: false,
            },
            {
              id: "015b572d-9820-49dc-a1c6-8018dcf61111",
              type: "matching_pair",
              content:
                "<p>Vestrum solus dolore spiculum corrumpo vulpes depereo.</p>",
              pairs: [
                {
                  left: "sufficio",
                  right: "cogo",
                },
                {
                  left: "terreo",
                  right: "validus",
                },
                {
                  left: "desparatus",
                  right: "laudantium",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "5fede3bf-dbb9-4d1f-b223-5570a747d2fa",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "doloremque",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "56c4a59f-6f06-4ab4-994d-2f018a905d43",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___] [___]</p>",
              text: "Fill in: [___] [___] [___]",
              blanks: [
                {
                  answer: "ipsam",
                },
                {
                  answer: "audio",
                },
                {
                  answer: "placeat",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Atqui catena vorax cibo sollers taedium vesica. Arbor quos statim aestivus venio sumo adflicto.",
            materials: "None",
            assessment:
              "Comitatus studio voveo vere thorax cimentarius deludo tenetur nam coniecto.",
            extensions:
              "Depono vulticulus vilitas averto delectus decimus arcesso depromo.",
            resources: "https://warm-tail.net",
          },
        },
        teacherSection: {
          instructions:
            "Sordeo velit decretum aestas versus demulceo. Decumbo tollo clementia demitto tantum abduco distinctio mollitia dolorem velociter.",
          guides: "Cado cauda deficio admoneo talis.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Aegrotatio labore contego coniuratio thesaurus speciosus.",
        },
        studentSection: {
          instructions: "Adiuvo vestrum cornu sopor.",
          content:
            "Audax amitto addo uredo nostrum verus corroboro utique quo verecundia. Debeo voro sordeo somniculosus acervus votum quod corpus commodi adnuo. Adnuo celebrer tenax uterque.\nVictus adfectus aedificium vado utrimque. Pecto tubineus cohaero qui deorsum labore deduco. Volva conculco subito.",
          worksheets: "https://boring-conversation.org",
          resources: "https://optimistic-anticodon.com/",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c978",
        },
        status: "finished",
        createdAt: {
          $date: "2025-07-02T06:41:11.174Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.791Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9fc",
        },
      },
    ],
  },
  {
    id: "17f41fc6-bed5-43e8-a30c-3b257ac604d4",
    title: "Unit 2: desino tamisium",
    activities: [
      {
        title:
          "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
        _id: {
          $oid: "68c58dea8572145288f7c97e",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 1,
        basicInfo: {
          title:
            "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
          description:
            "Trucido calco deprimo vociferor quasi acidus. Supellex acerbitas iste omnis suffragium nesciunt virgo. Rerum auctor depopulo officiis custodia terminatio praesentium tamen.",
          subject: "pe",
          gradeLevel: "prek",
          type: "interactive",
          duration: "20 mins",
          difficulty: "intermediate",
          standardsType: "common-core",
          learningObjectives:
            "Admiratio civitas suppellex assumenda cruentus dolorum cohaero.\nTurba cuius usus crebro amor defleo adsidue cogo.\nAiunt apostolus socius agnitio antiquus supra currus dedico decerno.\nAduro ciminatio amoveo vetus magni copiose.\nSuus cenaculum vigilo viridis crastinus quasi absens sed.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: false,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "fbe79280-d744-4523-97bb-f6bc4da0d9c7",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Venio sollicito considero somnus audio illum tyrannus aliquam denuo.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Chirographum sol capio vilicus charisma accusamus stips vilitas solutio circumvenio. Virgo charisma spiculum victus collum. Sopor ambitus concedo aegrus curiositas.\n\nConitor tubineus compono accusantium sumo. Praesentium trado arguo theologus deporto vetus demergo delicate approbo. Cibus chirographum benevolentia ager pecto conor vacuus venia libero.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Arbitro statua adaugeo audacia vado vilitas casso vulgaris clibanus dapifer. Demum thorax conscendo. Architecto abbas charisma contra attero error artificiose ceno amoveo error.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Crepusculum eligendi debeo vigor caecus tot amitto expedita. Custodia crebro angelus voluptas stabilis tepidus repellat conturbo enim reiciendis. Ascisco tamdiu accommodo.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f7ba4d00-f339-4be6-96e6-90de7fb06330",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PNx9f4CCxDg",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "4fb799f4-5f65-4306-8521-c74d4e6a03ab",
              type: "multiple_choice",
              content: "<p>Valetudo crux teneo thorax dolorem.</p>",
              question: "Aggredior totus torqueo ulterius ea abscido.",
              options: [
                {
                  text: "cursus suggero cui thermae attonbitus",
                  isCorrect: false,
                },
                {
                  text: "totus cinis error",
                  isCorrect: true,
                },
                {
                  text: "suggero tergiversatio",
                  isCorrect: false,
                },
                {
                  text: "teres praesentium baiulus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Tonsor super aestas thymum ceno considero bos avarus velociter. Copiose acerbitas fuga omnis tenuis urbs absque soleo crur caste.",
              chosen: false,
              selected: false,
            },
            {
              id: "b18a7b91-3b6b-4ac2-8d27-8aecfe26dd08",
              type: "multiple_choice",
              content:
                "<p>Contra dolorum adsum theca vespillo vicissitudo appello canis.</p>",
              question:
                "Vicinus quidem circumvenio soleo amet acquiro atqui sufficio hic magni.",
              options: [
                {
                  text: "aufero tenus creptio",
                  isCorrect: false,
                },
                {
                  text: "desipio blandior",
                  isCorrect: false,
                },
                {
                  text: "turpis vita verbera optio spiritus",
                  isCorrect: false,
                },
                {
                  text: "placeat caecus derideo",
                  isCorrect: true,
                },
              ],
              explanation:
                "Depopulo calamitas vulgaris calco. Timor approbo una tres suppellex angustus vae desparatus commodi cursus.",
              chosen: false,
              selected: false,
            },
            {
              id: "21a529be-df87-4e75-a06d-9487893b22a7",
              type: "matching_pair",
              content:
                "<p>Vomica tergeo voluptatem cumque cohaero cras summa tabgo.</p>",
              pairs: [
                {
                  left: "debeo",
                  right: "aufero",
                },
                {
                  left: "quo",
                  right: "sponte",
                },
                {
                  left: "acer",
                  right: "artificiose",
                },
                {
                  left: "tibi",
                  right: "vulgus",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "46c70f1a-008d-4ec2-b4f6-492c3d6dafe1",
              type: "matching_pair",
              content: "<p>Anser arx demergo.</p>",
              pairs: [
                {
                  left: "volup",
                  right: "suasoria",
                },
                {
                  left: "somniculosus",
                  right: "peccatus",
                },
                {
                  left: "tertius",
                  right: "volo",
                },
                {
                  left: "audax",
                  right: "architecto",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4ca7c64b-a0a6-4eb8-a45d-34c9def9ad02",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "studio",
                },
                {
                  answer: "creator",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Deorsum anser chirographum. Vereor ara civis decor suggero eius talus quam caelum.",
            materials: "Pen, Notebook",
            assessment: "Velit ut textus decet.",
            extensions: "Uter supra ipsa.",
            resources: "https://prudent-individual.org",
          },
        },
        teacherSection: {
          instructions: "Comis cultura caritas. Quos verus hic delego.",
          guides:
            "Voluptatibus assumenda vergo defero iure umbra debilito ultio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes:
            "Curia thesaurus verbum ambitus causa repellendus quis sumptus consuasor.",
        },
        studentSection: {
          instructions:
            "Stipes adficio uxor desolo at peior dignissimos animi spero.",
          content:
            "Annus admiratio cotidie laudantium vester possimus pariatur. Crepusculum vivo totidem campana catena sursum. Vomica ager clam verus contra cerno.\nVesco depono comitatus bos tertius thesis. Bellum ubi dignissimos carpo blanditiis caveo distinctio tergum. Nemo aperiam supplanto excepturi ciminatio asperiores corpus tantum audio vitiosus.",
          worksheets: "https://crazy-dredger.name/",
          resources: "https://big-secrecy.com",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "finished",
        createdAt: {
          $date: "2025-01-13T22:18:08.093Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.784Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f7",
        },
      },
      {
        title: "Version 2: amo doloribus culpa",
        _id: {
          $oid: "68c58dea8572145288f7c97f",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 2,
        basicInfo: {
          title: "Version 2: amo doloribus culpa",
          description:
            "Spargo spiritus et fugit a tamquam contra cultellus allatus demens. Comptus apostolus collum alo vado caute sponte cruciamentum. Crudelis cenaculum tergiversatio dolorum curiositas.",
          subject: "art",
          gradeLevel: "6-8",
          type: "assessment",
          duration: "30 mins",
          difficulty: "advanced",
          standardsType: "state",
          learningObjectives:
            "Totus dolor contego mollitia audio suscipit suffoco error aureus versus.\nCalco venustas traho porro conspergo.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: true,
            showHints: true,
          },
        },
        content: {
          blocks: [
            {
              id: "646b21ef-ef0d-4d08-a443-eaa511f1647e",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Thalassinus artificiose viscus caelestis tamquam.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Fugit conatus sum urbs audacia vigilo. Terga bos chirographum recusandae. Turba facere pel est cibus similique arx defero.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "63f485c2-53ad-48f2-9cbe-475c6f8ee460",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=ZAqIoDhornk",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "6fb9717e-d1d1-4e6e-ae7f-c3a40f2fdcd1",
              type: "multiple_choice",
              content: "<p>Comprehendo vicinus nemo cena.</p>",
              question:
                "Tenuis thorax sordeo commodo una contra necessitatibus cunabula.",
              options: [
                {
                  text: "studio capitulus verus abscido",
                  isCorrect: false,
                },
                {
                  text: "aggredior alveus tui",
                  isCorrect: false,
                },
                {
                  text: "degenero ventosus placeat arbustum",
                  isCorrect: false,
                },
                {
                  text: "argentum peior vinculum esse",
                  isCorrect: true,
                },
              ],
              explanation:
                "Arcus subnecto caute damnatio. Voluntarius nobis vorago sub.",
              chosen: false,
              selected: false,
            },
            {
              id: "6aadbb22-1d3a-4afd-a67f-017d44b0b80c",
              type: "multiple_choice",
              content:
                "<p>Ex victoria delectus barba cultellus dolor deinde stella vinculum et.</p>",
              question:
                "Ascit avaritia adopto defungo mollitia nam thema vulnero.",
              options: [
                {
                  text: "verecundia voluptates validus",
                  isCorrect: false,
                },
                {
                  text: "deorsum absconditus vulgivagus",
                  isCorrect: false,
                },
                {
                  text: "uter defetiscor conqueror",
                  isCorrect: false,
                },
                {
                  text: "claustrum amicitia provident",
                  isCorrect: true,
                },
              ],
              explanation:
                "Vulnus suspendo incidunt pauci deficio civitas debilito succedo pel. Aegre quaerat cumque.",
              chosen: false,
              selected: false,
            },
            {
              id: "eca82717-b3d4-4d7b-bd49-797cc5255d89",
              type: "matching_pair",
              content:
                "<p>Adfero earum coadunatio aegre asperiores patior calculus peccatus.</p>",
              pairs: [
                {
                  left: "molestias",
                  right: "traho",
                },
                {
                  left: "celo",
                  right: "culpa",
                },
                {
                  left: "decipio",
                  right: "torrens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4e5a23fe-2776-4433-bea4-d99df846fc9f",
              type: "matching_pair",
              content: "<p>Ab copia aggredior.</p>",
              pairs: [
                {
                  left: "stipes",
                  right: "bis",
                },
                {
                  left: "denego",
                  right: "pel",
                },
                {
                  left: "praesentium",
                  right: "paens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "59f0c9f9-ef49-4dbf-a82d-2ef1e71aca8b",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "dolore",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "6c1ae60b-a89f-4520-ab62-ed404b8b2edb",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "spiculum",
                },
                {
                  answer: "aspernatur",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Ultio sophismata vesper. Vigor incidunt coniecto nobis cinis compono venia.",
            materials: "Pen, Notebook",
            assessment: "Apud vilis corrumpo.",
            extensions:
              "Arca repellendus arguo suppono argumentum cohaero suus delibero amaritudo abutor.",
            resources: "https://hard-to-find-swanling.name",
          },
        },
        teacherSection: {
          instructions:
            "Tyrannus addo correptius spiculum coma delego accommodo vulgaris. Asperiores spargo et brevis subnecto adeo fugit tutis labore.",
          guides: "Repellat derideo defendo depono cubo audio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Amaritudo paulatim carcer tollo.",
        },
        studentSection: {
          instructions:
            "Modi clibanus praesentium ocer tristis adulescens utor vinculum benevolentia adiuvo.",
          content:
            "Voro totidem facere angelus adinventitias asporto thalassinus combibo. Caute altus defleo thesaurus. Spero odio correptius.\nIpsa crustulum suffragium villa traho sunt minima crur tabernus textor. Sol vero eius certus. Alioqui valens tui culpo correptius suadeo.",
          worksheets: "https://flimsy-alligator.biz/",
          resources: "https://all-mozzarella.info",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "draft",
        createdAt: {
          $date: "2024-11-25T22:34:24.468Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.788Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f9",
        },
      },
      {
        title: "Version 1: temptatio utroque corrupti",
        _id: {
          $oid: "68c58dea8572145288f7c981",
        },
        id: {
          $oid: "68c58dea8572145288f7c980",
        },
        version: 1,
        basicInfo: {
          title: "Version 1: temptatio utroque corrupti",
          description:
            "Apparatus adiuvo alioqui charisma voro conor. Dolore vicinus talio vesica arcus virga. Baiulus architecto aggredior.",
          subject: "math",
          gradeLevel: "prek",
          type: "interactive",
          duration: "30 mins",
          difficulty: "intermediate",
          standardsType: "ngss",
          learningObjectives:
            "Saepe ater admitto vix ustilo aer arbitro tutamen creator.\nVigor defessus adhuc defessus stipes depulso tres canonicus cohors dignissimos.\nTabella victoria xiphias animus.\nAmo totam pax quasi timidus.\nCaritas aestas casus.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "b99d4781-f56b-412f-86a3-1e3207d2aac2",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Compello benevolentia coepi laboriosam patior debilito eaque curtus varius capillus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Voco carus aegrus. Denuncio cattus annus sollers comitatus ad creber conventus decumbo asporto. Odio voluptatibus aedificium cimentarius suffragium tamen stipes.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f9869b72-0e1a-4d39-81dd-dadc1179fc76",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Crur consectetur supra ter vitiosus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Tamquam demum absconditus nesciunt caelum auxilium aggero ipsa ad delego. Necessitatibus excepturi corrumpo bestia ulciscor abscido cruciamentum agnitio approbo. Stabilis caste talio trans.\n\nDistinctio desino adversus. Quaerat vado unus statua audeo cras. Supplanto virgo cruciamentum.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Ventus clementia desparatus. Eligendi cum crebro fugiat amoveo vallum tempore laborum defendo thymum. Id vorago decimus curso venia vulgivagus sophismata.\n\nTabula totam velociter decimus umbra similique turpis adhaero. Sub tutamen ipsam templum umquam cubicularis quas succedo. Vapulus capillus vix crudelis cunctatio esse appello.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "0c0fc439-b654-472f-9e2b-03c30ebae0cf",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PZ7lDrwYdZc",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "b2ebd49e-7923-4484-b9c5-835b9861fc60",
              type: "multiple_choice",
              content:
                "<p>Aranea villa fuga aufero cilicium attonbitus aestus.</p>",
              question:
                "Benigne vesper thesaurus careo bardus quibusdam correptius.",
              options: [
                {
                  text: "perferendis totam non aut assumenda",
                  isCorrect: false,
                },
                {
                  text: "crebro absens",
                  isCorrect: false,
                },
                {
                  text: "baiulus appello ultio patria",
                  isCorrect: false,
                },
                {
                  text: "talis voluntarius",
                  isCorrect: true,
                },
              ],
              explanation:
                "Colligo auxilium capitulus delicate patior assentator aperiam. Vis accusantium in ad cura.",
              chosen: false,
              selected: false,
            },
            {
              id: "d454a680-6911-4a46-85b8-e2593f69806d",
              type: "multiple_choice",
              content:
                "<p>Tricesimus corpus aegrus maiores laborum comes thema pecto admiratio ante.</p>",
              question: "Tamquam culpo nisi optio.",
              options: [
                {
                  text: "vesco delinquo patrocinor terreo calcar",
                  isCorrect: false,
                },
                {
                  text: "toties aperte advenio",
                  isCorrect: false,
                },
                {
                  text: "veritatis circumvenio vulpes una",
                  isCorrect: true,
                },
                {
                  text: "absorbeo caste theologus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Varietas conitor reprehenderit clam. Facere tollo comedo deorsum usitas tibi cervus spiculum deputo ubi.",
              chosen: false,
              selected: false,
            },
            {
              id: "015b572d-9820-49dc-a1c6-8018dcf61111",
              type: "matching_pair",
              content:
                "<p>Vestrum solus dolore spiculum corrumpo vulpes depereo.</p>",
              pairs: [
                {
                  left: "sufficio",
                  right: "cogo",
                },
                {
                  left: "terreo",
                  right: "validus",
                },
                {
                  left: "desparatus",
                  right: "laudantium",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "5fede3bf-dbb9-4d1f-b223-5570a747d2fa",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "doloremque",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "56c4a59f-6f06-4ab4-994d-2f018a905d43",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___] [___]</p>",
              text: "Fill in: [___] [___] [___]",
              blanks: [
                {
                  answer: "ipsam",
                },
                {
                  answer: "audio",
                },
                {
                  answer: "placeat",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Atqui catena vorax cibo sollers taedium vesica. Arbor quos statim aestivus venio sumo adflicto.",
            materials: "None",
            assessment:
              "Comitatus studio voveo vere thorax cimentarius deludo tenetur nam coniecto.",
            extensions:
              "Depono vulticulus vilitas averto delectus decimus arcesso depromo.",
            resources: "https://warm-tail.net",
          },
        },
        teacherSection: {
          instructions:
            "Sordeo velit decretum aestas versus demulceo. Decumbo tollo clementia demitto tantum abduco distinctio mollitia dolorem velociter.",
          guides: "Cado cauda deficio admoneo talis.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Aegrotatio labore contego coniuratio thesaurus speciosus.",
        },
        studentSection: {
          instructions: "Adiuvo vestrum cornu sopor.",
          content:
            "Audax amitto addo uredo nostrum verus corroboro utique quo verecundia. Debeo voro sordeo somniculosus acervus votum quod corpus commodi adnuo. Adnuo celebrer tenax uterque.\nVictus adfectus aedificium vado utrimque. Pecto tubineus cohaero qui deorsum labore deduco. Volva conculco subito.",
          worksheets: "https://boring-conversation.org",
          resources: "https://optimistic-anticodon.com/",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c978",
        },
        status: "finished",
        createdAt: {
          $date: "2025-07-02T06:41:11.174Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.791Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9fc",
        },
      },
    ],
  },
  {
    id: "57179fa3-a1c1-4c63-9ec4-636a4f905e65",
    title: "Unit 3: pax voro",
    activities: [
      {
        title:
          "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
        _id: {
          $oid: "68c58dea8572145288f7c97e",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 1,
        basicInfo: {
          title:
            "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
          description:
            "Trucido calco deprimo vociferor quasi acidus. Supellex acerbitas iste omnis suffragium nesciunt virgo. Rerum auctor depopulo officiis custodia terminatio praesentium tamen.",
          subject: "pe",
          gradeLevel: "prek",
          type: "interactive",
          duration: "20 mins",
          difficulty: "intermediate",
          standardsType: "common-core",
          learningObjectives:
            "Admiratio civitas suppellex assumenda cruentus dolorum cohaero.\nTurba cuius usus crebro amor defleo adsidue cogo.\nAiunt apostolus socius agnitio antiquus supra currus dedico decerno.\nAduro ciminatio amoveo vetus magni copiose.\nSuus cenaculum vigilo viridis crastinus quasi absens sed.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: false,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "fbe79280-d744-4523-97bb-f6bc4da0d9c7",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Venio sollicito considero somnus audio illum tyrannus aliquam denuo.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Chirographum sol capio vilicus charisma accusamus stips vilitas solutio circumvenio. Virgo charisma spiculum victus collum. Sopor ambitus concedo aegrus curiositas.\n\nConitor tubineus compono accusantium sumo. Praesentium trado arguo theologus deporto vetus demergo delicate approbo. Cibus chirographum benevolentia ager pecto conor vacuus venia libero.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Arbitro statua adaugeo audacia vado vilitas casso vulgaris clibanus dapifer. Demum thorax conscendo. Architecto abbas charisma contra attero error artificiose ceno amoveo error.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Crepusculum eligendi debeo vigor caecus tot amitto expedita. Custodia crebro angelus voluptas stabilis tepidus repellat conturbo enim reiciendis. Ascisco tamdiu accommodo.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f7ba4d00-f339-4be6-96e6-90de7fb06330",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PNx9f4CCxDg",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "4fb799f4-5f65-4306-8521-c74d4e6a03ab",
              type: "multiple_choice",
              content: "<p>Valetudo crux teneo thorax dolorem.</p>",
              question: "Aggredior totus torqueo ulterius ea abscido.",
              options: [
                {
                  text: "cursus suggero cui thermae attonbitus",
                  isCorrect: false,
                },
                {
                  text: "totus cinis error",
                  isCorrect: true,
                },
                {
                  text: "suggero tergiversatio",
                  isCorrect: false,
                },
                {
                  text: "teres praesentium baiulus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Tonsor super aestas thymum ceno considero bos avarus velociter. Copiose acerbitas fuga omnis tenuis urbs absque soleo crur caste.",
              chosen: false,
              selected: false,
            },
            {
              id: "b18a7b91-3b6b-4ac2-8d27-8aecfe26dd08",
              type: "multiple_choice",
              content:
                "<p>Contra dolorum adsum theca vespillo vicissitudo appello canis.</p>",
              question:
                "Vicinus quidem circumvenio soleo amet acquiro atqui sufficio hic magni.",
              options: [
                {
                  text: "aufero tenus creptio",
                  isCorrect: false,
                },
                {
                  text: "desipio blandior",
                  isCorrect: false,
                },
                {
                  text: "turpis vita verbera optio spiritus",
                  isCorrect: false,
                },
                {
                  text: "placeat caecus derideo",
                  isCorrect: true,
                },
              ],
              explanation:
                "Depopulo calamitas vulgaris calco. Timor approbo una tres suppellex angustus vae desparatus commodi cursus.",
              chosen: false,
              selected: false,
            },
            {
              id: "21a529be-df87-4e75-a06d-9487893b22a7",
              type: "matching_pair",
              content:
                "<p>Vomica tergeo voluptatem cumque cohaero cras summa tabgo.</p>",
              pairs: [
                {
                  left: "debeo",
                  right: "aufero",
                },
                {
                  left: "quo",
                  right: "sponte",
                },
                {
                  left: "acer",
                  right: "artificiose",
                },
                {
                  left: "tibi",
                  right: "vulgus",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "46c70f1a-008d-4ec2-b4f6-492c3d6dafe1",
              type: "matching_pair",
              content: "<p>Anser arx demergo.</p>",
              pairs: [
                {
                  left: "volup",
                  right: "suasoria",
                },
                {
                  left: "somniculosus",
                  right: "peccatus",
                },
                {
                  left: "tertius",
                  right: "volo",
                },
                {
                  left: "audax",
                  right: "architecto",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4ca7c64b-a0a6-4eb8-a45d-34c9def9ad02",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "studio",
                },
                {
                  answer: "creator",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Deorsum anser chirographum. Vereor ara civis decor suggero eius talus quam caelum.",
            materials: "Pen, Notebook",
            assessment: "Velit ut textus decet.",
            extensions: "Uter supra ipsa.",
            resources: "https://prudent-individual.org",
          },
        },
        teacherSection: {
          instructions: "Comis cultura caritas. Quos verus hic delego.",
          guides:
            "Voluptatibus assumenda vergo defero iure umbra debilito ultio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes:
            "Curia thesaurus verbum ambitus causa repellendus quis sumptus consuasor.",
        },
        studentSection: {
          instructions:
            "Stipes adficio uxor desolo at peior dignissimos animi spero.",
          content:
            "Annus admiratio cotidie laudantium vester possimus pariatur. Crepusculum vivo totidem campana catena sursum. Vomica ager clam verus contra cerno.\nVesco depono comitatus bos tertius thesis. Bellum ubi dignissimos carpo blanditiis caveo distinctio tergum. Nemo aperiam supplanto excepturi ciminatio asperiores corpus tantum audio vitiosus.",
          worksheets: "https://crazy-dredger.name/",
          resources: "https://big-secrecy.com",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "finished",
        createdAt: {
          $date: "2025-01-13T22:18:08.093Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.784Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f7",
        },
      },
      {
        title: "Version 2: amo doloribus culpa",
        _id: {
          $oid: "68c58dea8572145288f7c97f",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 2,
        basicInfo: {
          title: "Version 2: amo doloribus culpa",
          description:
            "Spargo spiritus et fugit a tamquam contra cultellus allatus demens. Comptus apostolus collum alo vado caute sponte cruciamentum. Crudelis cenaculum tergiversatio dolorum curiositas.",
          subject: "art",
          gradeLevel: "6-8",
          type: "assessment",
          duration: "30 mins",
          difficulty: "advanced",
          standardsType: "state",
          learningObjectives:
            "Totus dolor contego mollitia audio suscipit suffoco error aureus versus.\nCalco venustas traho porro conspergo.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: true,
            showHints: true,
          },
        },
        content: {
          blocks: [
            {
              id: "646b21ef-ef0d-4d08-a443-eaa511f1647e",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Thalassinus artificiose viscus caelestis tamquam.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Fugit conatus sum urbs audacia vigilo. Terga bos chirographum recusandae. Turba facere pel est cibus similique arx defero.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "63f485c2-53ad-48f2-9cbe-475c6f8ee460",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=ZAqIoDhornk",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "6fb9717e-d1d1-4e6e-ae7f-c3a40f2fdcd1",
              type: "multiple_choice",
              content: "<p>Comprehendo vicinus nemo cena.</p>",
              question:
                "Tenuis thorax sordeo commodo una contra necessitatibus cunabula.",
              options: [
                {
                  text: "studio capitulus verus abscido",
                  isCorrect: false,
                },
                {
                  text: "aggredior alveus tui",
                  isCorrect: false,
                },
                {
                  text: "degenero ventosus placeat arbustum",
                  isCorrect: false,
                },
                {
                  text: "argentum peior vinculum esse",
                  isCorrect: true,
                },
              ],
              explanation:
                "Arcus subnecto caute damnatio. Voluntarius nobis vorago sub.",
              chosen: false,
              selected: false,
            },
            {
              id: "6aadbb22-1d3a-4afd-a67f-017d44b0b80c",
              type: "multiple_choice",
              content:
                "<p>Ex victoria delectus barba cultellus dolor deinde stella vinculum et.</p>",
              question:
                "Ascit avaritia adopto defungo mollitia nam thema vulnero.",
              options: [
                {
                  text: "verecundia voluptates validus",
                  isCorrect: false,
                },
                {
                  text: "deorsum absconditus vulgivagus",
                  isCorrect: false,
                },
                {
                  text: "uter defetiscor conqueror",
                  isCorrect: false,
                },
                {
                  text: "claustrum amicitia provident",
                  isCorrect: true,
                },
              ],
              explanation:
                "Vulnus suspendo incidunt pauci deficio civitas debilito succedo pel. Aegre quaerat cumque.",
              chosen: false,
              selected: false,
            },
            {
              id: "eca82717-b3d4-4d7b-bd49-797cc5255d89",
              type: "matching_pair",
              content:
                "<p>Adfero earum coadunatio aegre asperiores patior calculus peccatus.</p>",
              pairs: [
                {
                  left: "molestias",
                  right: "traho",
                },
                {
                  left: "celo",
                  right: "culpa",
                },
                {
                  left: "decipio",
                  right: "torrens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4e5a23fe-2776-4433-bea4-d99df846fc9f",
              type: "matching_pair",
              content: "<p>Ab copia aggredior.</p>",
              pairs: [
                {
                  left: "stipes",
                  right: "bis",
                },
                {
                  left: "denego",
                  right: "pel",
                },
                {
                  left: "praesentium",
                  right: "paens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "59f0c9f9-ef49-4dbf-a82d-2ef1e71aca8b",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "dolore",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "6c1ae60b-a89f-4520-ab62-ed404b8b2edb",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "spiculum",
                },
                {
                  answer: "aspernatur",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Ultio sophismata vesper. Vigor incidunt coniecto nobis cinis compono venia.",
            materials: "Pen, Notebook",
            assessment: "Apud vilis corrumpo.",
            extensions:
              "Arca repellendus arguo suppono argumentum cohaero suus delibero amaritudo abutor.",
            resources: "https://hard-to-find-swanling.name",
          },
        },
        teacherSection: {
          instructions:
            "Tyrannus addo correptius spiculum coma delego accommodo vulgaris. Asperiores spargo et brevis subnecto adeo fugit tutis labore.",
          guides: "Repellat derideo defendo depono cubo audio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Amaritudo paulatim carcer tollo.",
        },
        studentSection: {
          instructions:
            "Modi clibanus praesentium ocer tristis adulescens utor vinculum benevolentia adiuvo.",
          content:
            "Voro totidem facere angelus adinventitias asporto thalassinus combibo. Caute altus defleo thesaurus. Spero odio correptius.\nIpsa crustulum suffragium villa traho sunt minima crur tabernus textor. Sol vero eius certus. Alioqui valens tui culpo correptius suadeo.",
          worksheets: "https://flimsy-alligator.biz/",
          resources: "https://all-mozzarella.info",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "draft",
        createdAt: {
          $date: "2024-11-25T22:34:24.468Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.788Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f9",
        },
      },
      {
        title: "Version 1: temptatio utroque corrupti",
        _id: {
          $oid: "68c58dea8572145288f7c981",
        },
        id: {
          $oid: "68c58dea8572145288f7c980",
        },
        version: 1,
        basicInfo: {
          title: "Version 1: temptatio utroque corrupti",
          description:
            "Apparatus adiuvo alioqui charisma voro conor. Dolore vicinus talio vesica arcus virga. Baiulus architecto aggredior.",
          subject: "math",
          gradeLevel: "prek",
          type: "interactive",
          duration: "30 mins",
          difficulty: "intermediate",
          standardsType: "ngss",
          learningObjectives:
            "Saepe ater admitto vix ustilo aer arbitro tutamen creator.\nVigor defessus adhuc defessus stipes depulso tres canonicus cohors dignissimos.\nTabella victoria xiphias animus.\nAmo totam pax quasi timidus.\nCaritas aestas casus.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "b99d4781-f56b-412f-86a3-1e3207d2aac2",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Compello benevolentia coepi laboriosam patior debilito eaque curtus varius capillus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Voco carus aegrus. Denuncio cattus annus sollers comitatus ad creber conventus decumbo asporto. Odio voluptatibus aedificium cimentarius suffragium tamen stipes.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f9869b72-0e1a-4d39-81dd-dadc1179fc76",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Crur consectetur supra ter vitiosus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Tamquam demum absconditus nesciunt caelum auxilium aggero ipsa ad delego. Necessitatibus excepturi corrumpo bestia ulciscor abscido cruciamentum agnitio approbo. Stabilis caste talio trans.\n\nDistinctio desino adversus. Quaerat vado unus statua audeo cras. Supplanto virgo cruciamentum.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Ventus clementia desparatus. Eligendi cum crebro fugiat amoveo vallum tempore laborum defendo thymum. Id vorago decimus curso venia vulgivagus sophismata.\n\nTabula totam velociter decimus umbra similique turpis adhaero. Sub tutamen ipsam templum umquam cubicularis quas succedo. Vapulus capillus vix crudelis cunctatio esse appello.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "0c0fc439-b654-472f-9e2b-03c30ebae0cf",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PZ7lDrwYdZc",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "b2ebd49e-7923-4484-b9c5-835b9861fc60",
              type: "multiple_choice",
              content:
                "<p>Aranea villa fuga aufero cilicium attonbitus aestus.</p>",
              question:
                "Benigne vesper thesaurus careo bardus quibusdam correptius.",
              options: [
                {
                  text: "perferendis totam non aut assumenda",
                  isCorrect: false,
                },
                {
                  text: "crebro absens",
                  isCorrect: false,
                },
                {
                  text: "baiulus appello ultio patria",
                  isCorrect: false,
                },
                {
                  text: "talis voluntarius",
                  isCorrect: true,
                },
              ],
              explanation:
                "Colligo auxilium capitulus delicate patior assentator aperiam. Vis accusantium in ad cura.",
              chosen: false,
              selected: false,
            },
            {
              id: "d454a680-6911-4a46-85b8-e2593f69806d",
              type: "multiple_choice",
              content:
                "<p>Tricesimus corpus aegrus maiores laborum comes thema pecto admiratio ante.</p>",
              question: "Tamquam culpo nisi optio.",
              options: [
                {
                  text: "vesco delinquo patrocinor terreo calcar",
                  isCorrect: false,
                },
                {
                  text: "toties aperte advenio",
                  isCorrect: false,
                },
                {
                  text: "veritatis circumvenio vulpes una",
                  isCorrect: true,
                },
                {
                  text: "absorbeo caste theologus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Varietas conitor reprehenderit clam. Facere tollo comedo deorsum usitas tibi cervus spiculum deputo ubi.",
              chosen: false,
              selected: false,
            },
            {
              id: "015b572d-9820-49dc-a1c6-8018dcf61111",
              type: "matching_pair",
              content:
                "<p>Vestrum solus dolore spiculum corrumpo vulpes depereo.</p>",
              pairs: [
                {
                  left: "sufficio",
                  right: "cogo",
                },
                {
                  left: "terreo",
                  right: "validus",
                },
                {
                  left: "desparatus",
                  right: "laudantium",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "5fede3bf-dbb9-4d1f-b223-5570a747d2fa",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "doloremque",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "56c4a59f-6f06-4ab4-994d-2f018a905d43",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___] [___]</p>",
              text: "Fill in: [___] [___] [___]",
              blanks: [
                {
                  answer: "ipsam",
                },
                {
                  answer: "audio",
                },
                {
                  answer: "placeat",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Atqui catena vorax cibo sollers taedium vesica. Arbor quos statim aestivus venio sumo adflicto.",
            materials: "None",
            assessment:
              "Comitatus studio voveo vere thorax cimentarius deludo tenetur nam coniecto.",
            extensions:
              "Depono vulticulus vilitas averto delectus decimus arcesso depromo.",
            resources: "https://warm-tail.net",
          },
        },
        teacherSection: {
          instructions:
            "Sordeo velit decretum aestas versus demulceo. Decumbo tollo clementia demitto tantum abduco distinctio mollitia dolorem velociter.",
          guides: "Cado cauda deficio admoneo talis.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Aegrotatio labore contego coniuratio thesaurus speciosus.",
        },
        studentSection: {
          instructions: "Adiuvo vestrum cornu sopor.",
          content:
            "Audax amitto addo uredo nostrum verus corroboro utique quo verecundia. Debeo voro sordeo somniculosus acervus votum quod corpus commodi adnuo. Adnuo celebrer tenax uterque.\nVictus adfectus aedificium vado utrimque. Pecto tubineus cohaero qui deorsum labore deduco. Volva conculco subito.",
          worksheets: "https://boring-conversation.org",
          resources: "https://optimistic-anticodon.com/",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c978",
        },
        status: "finished",
        createdAt: {
          $date: "2025-07-02T06:41:11.174Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.791Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9fc",
        },
      },
    ],
  },
  {
    id: "ef01689d-6ad0-4b34-bdbb-73a20ebe809b",
    title: "Unit 1: tunc pecco",
    activities: [
      {
        title:
          "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
        _id: {
          $oid: "68c58dea8572145288f7c97e",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 1,
        basicInfo: {
          title:
            "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
          description:
            "Trucido calco deprimo vociferor quasi acidus. Supellex acerbitas iste omnis suffragium nesciunt virgo. Rerum auctor depopulo officiis custodia terminatio praesentium tamen.",
          subject: "pe",
          gradeLevel: "prek",
          type: "interactive",
          duration: "20 mins",
          difficulty: "intermediate",
          standardsType: "common-core",
          learningObjectives:
            "Admiratio civitas suppellex assumenda cruentus dolorum cohaero.\nTurba cuius usus crebro amor defleo adsidue cogo.\nAiunt apostolus socius agnitio antiquus supra currus dedico decerno.\nAduro ciminatio amoveo vetus magni copiose.\nSuus cenaculum vigilo viridis crastinus quasi absens sed.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: false,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "fbe79280-d744-4523-97bb-f6bc4da0d9c7",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Venio sollicito considero somnus audio illum tyrannus aliquam denuo.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Chirographum sol capio vilicus charisma accusamus stips vilitas solutio circumvenio. Virgo charisma spiculum victus collum. Sopor ambitus concedo aegrus curiositas.\n\nConitor tubineus compono accusantium sumo. Praesentium trado arguo theologus deporto vetus demergo delicate approbo. Cibus chirographum benevolentia ager pecto conor vacuus venia libero.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Arbitro statua adaugeo audacia vado vilitas casso vulgaris clibanus dapifer. Demum thorax conscendo. Architecto abbas charisma contra attero error artificiose ceno amoveo error.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Crepusculum eligendi debeo vigor caecus tot amitto expedita. Custodia crebro angelus voluptas stabilis tepidus repellat conturbo enim reiciendis. Ascisco tamdiu accommodo.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f7ba4d00-f339-4be6-96e6-90de7fb06330",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PNx9f4CCxDg",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "4fb799f4-5f65-4306-8521-c74d4e6a03ab",
              type: "multiple_choice",
              content: "<p>Valetudo crux teneo thorax dolorem.</p>",
              question: "Aggredior totus torqueo ulterius ea abscido.",
              options: [
                {
                  text: "cursus suggero cui thermae attonbitus",
                  isCorrect: false,
                },
                {
                  text: "totus cinis error",
                  isCorrect: true,
                },
                {
                  text: "suggero tergiversatio",
                  isCorrect: false,
                },
                {
                  text: "teres praesentium baiulus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Tonsor super aestas thymum ceno considero bos avarus velociter. Copiose acerbitas fuga omnis tenuis urbs absque soleo crur caste.",
              chosen: false,
              selected: false,
            },
            {
              id: "b18a7b91-3b6b-4ac2-8d27-8aecfe26dd08",
              type: "multiple_choice",
              content:
                "<p>Contra dolorum adsum theca vespillo vicissitudo appello canis.</p>",
              question:
                "Vicinus quidem circumvenio soleo amet acquiro atqui sufficio hic magni.",
              options: [
                {
                  text: "aufero tenus creptio",
                  isCorrect: false,
                },
                {
                  text: "desipio blandior",
                  isCorrect: false,
                },
                {
                  text: "turpis vita verbera optio spiritus",
                  isCorrect: false,
                },
                {
                  text: "placeat caecus derideo",
                  isCorrect: true,
                },
              ],
              explanation:
                "Depopulo calamitas vulgaris calco. Timor approbo una tres suppellex angustus vae desparatus commodi cursus.",
              chosen: false,
              selected: false,
            },
            {
              id: "21a529be-df87-4e75-a06d-9487893b22a7",
              type: "matching_pair",
              content:
                "<p>Vomica tergeo voluptatem cumque cohaero cras summa tabgo.</p>",
              pairs: [
                {
                  left: "debeo",
                  right: "aufero",
                },
                {
                  left: "quo",
                  right: "sponte",
                },
                {
                  left: "acer",
                  right: "artificiose",
                },
                {
                  left: "tibi",
                  right: "vulgus",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "46c70f1a-008d-4ec2-b4f6-492c3d6dafe1",
              type: "matching_pair",
              content: "<p>Anser arx demergo.</p>",
              pairs: [
                {
                  left: "volup",
                  right: "suasoria",
                },
                {
                  left: "somniculosus",
                  right: "peccatus",
                },
                {
                  left: "tertius",
                  right: "volo",
                },
                {
                  left: "audax",
                  right: "architecto",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4ca7c64b-a0a6-4eb8-a45d-34c9def9ad02",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "studio",
                },
                {
                  answer: "creator",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Deorsum anser chirographum. Vereor ara civis decor suggero eius talus quam caelum.",
            materials: "Pen, Notebook",
            assessment: "Velit ut textus decet.",
            extensions: "Uter supra ipsa.",
            resources: "https://prudent-individual.org",
          },
        },
        teacherSection: {
          instructions: "Comis cultura caritas. Quos verus hic delego.",
          guides:
            "Voluptatibus assumenda vergo defero iure umbra debilito ultio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes:
            "Curia thesaurus verbum ambitus causa repellendus quis sumptus consuasor.",
        },
        studentSection: {
          instructions:
            "Stipes adficio uxor desolo at peior dignissimos animi spero.",
          content:
            "Annus admiratio cotidie laudantium vester possimus pariatur. Crepusculum vivo totidem campana catena sursum. Vomica ager clam verus contra cerno.\nVesco depono comitatus bos tertius thesis. Bellum ubi dignissimos carpo blanditiis caveo distinctio tergum. Nemo aperiam supplanto excepturi ciminatio asperiores corpus tantum audio vitiosus.",
          worksheets: "https://crazy-dredger.name/",
          resources: "https://big-secrecy.com",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "finished",
        createdAt: {
          $date: "2025-01-13T22:18:08.093Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.784Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f7",
        },
      },
      {
        title: "Version 2: amo doloribus culpa",
        _id: {
          $oid: "68c58dea8572145288f7c97f",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 2,
        basicInfo: {
          title: "Version 2: amo doloribus culpa",
          description:
            "Spargo spiritus et fugit a tamquam contra cultellus allatus demens. Comptus apostolus collum alo vado caute sponte cruciamentum. Crudelis cenaculum tergiversatio dolorum curiositas.",
          subject: "art",
          gradeLevel: "6-8",
          type: "assessment",
          duration: "30 mins",
          difficulty: "advanced",
          standardsType: "state",
          learningObjectives:
            "Totus dolor contego mollitia audio suscipit suffoco error aureus versus.\nCalco venustas traho porro conspergo.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: true,
            showHints: true,
          },
        },
        content: {
          blocks: [
            {
              id: "646b21ef-ef0d-4d08-a443-eaa511f1647e",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Thalassinus artificiose viscus caelestis tamquam.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Fugit conatus sum urbs audacia vigilo. Terga bos chirographum recusandae. Turba facere pel est cibus similique arx defero.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "63f485c2-53ad-48f2-9cbe-475c6f8ee460",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=ZAqIoDhornk",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "6fb9717e-d1d1-4e6e-ae7f-c3a40f2fdcd1",
              type: "multiple_choice",
              content: "<p>Comprehendo vicinus nemo cena.</p>",
              question:
                "Tenuis thorax sordeo commodo una contra necessitatibus cunabula.",
              options: [
                {
                  text: "studio capitulus verus abscido",
                  isCorrect: false,
                },
                {
                  text: "aggredior alveus tui",
                  isCorrect: false,
                },
                {
                  text: "degenero ventosus placeat arbustum",
                  isCorrect: false,
                },
                {
                  text: "argentum peior vinculum esse",
                  isCorrect: true,
                },
              ],
              explanation:
                "Arcus subnecto caute damnatio. Voluntarius nobis vorago sub.",
              chosen: false,
              selected: false,
            },
            {
              id: "6aadbb22-1d3a-4afd-a67f-017d44b0b80c",
              type: "multiple_choice",
              content:
                "<p>Ex victoria delectus barba cultellus dolor deinde stella vinculum et.</p>",
              question:
                "Ascit avaritia adopto defungo mollitia nam thema vulnero.",
              options: [
                {
                  text: "verecundia voluptates validus",
                  isCorrect: false,
                },
                {
                  text: "deorsum absconditus vulgivagus",
                  isCorrect: false,
                },
                {
                  text: "uter defetiscor conqueror",
                  isCorrect: false,
                },
                {
                  text: "claustrum amicitia provident",
                  isCorrect: true,
                },
              ],
              explanation:
                "Vulnus suspendo incidunt pauci deficio civitas debilito succedo pel. Aegre quaerat cumque.",
              chosen: false,
              selected: false,
            },
            {
              id: "eca82717-b3d4-4d7b-bd49-797cc5255d89",
              type: "matching_pair",
              content:
                "<p>Adfero earum coadunatio aegre asperiores patior calculus peccatus.</p>",
              pairs: [
                {
                  left: "molestias",
                  right: "traho",
                },
                {
                  left: "celo",
                  right: "culpa",
                },
                {
                  left: "decipio",
                  right: "torrens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4e5a23fe-2776-4433-bea4-d99df846fc9f",
              type: "matching_pair",
              content: "<p>Ab copia aggredior.</p>",
              pairs: [
                {
                  left: "stipes",
                  right: "bis",
                },
                {
                  left: "denego",
                  right: "pel",
                },
                {
                  left: "praesentium",
                  right: "paens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "59f0c9f9-ef49-4dbf-a82d-2ef1e71aca8b",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "dolore",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "6c1ae60b-a89f-4520-ab62-ed404b8b2edb",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "spiculum",
                },
                {
                  answer: "aspernatur",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Ultio sophismata vesper. Vigor incidunt coniecto nobis cinis compono venia.",
            materials: "Pen, Notebook",
            assessment: "Apud vilis corrumpo.",
            extensions:
              "Arca repellendus arguo suppono argumentum cohaero suus delibero amaritudo abutor.",
            resources: "https://hard-to-find-swanling.name",
          },
        },
        teacherSection: {
          instructions:
            "Tyrannus addo correptius spiculum coma delego accommodo vulgaris. Asperiores spargo et brevis subnecto adeo fugit tutis labore.",
          guides: "Repellat derideo defendo depono cubo audio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Amaritudo paulatim carcer tollo.",
        },
        studentSection: {
          instructions:
            "Modi clibanus praesentium ocer tristis adulescens utor vinculum benevolentia adiuvo.",
          content:
            "Voro totidem facere angelus adinventitias asporto thalassinus combibo. Caute altus defleo thesaurus. Spero odio correptius.\nIpsa crustulum suffragium villa traho sunt minima crur tabernus textor. Sol vero eius certus. Alioqui valens tui culpo correptius suadeo.",
          worksheets: "https://flimsy-alligator.biz/",
          resources: "https://all-mozzarella.info",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "draft",
        createdAt: {
          $date: "2024-11-25T22:34:24.468Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.788Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f9",
        },
      },
      {
        title: "Version 1: temptatio utroque corrupti",
        _id: {
          $oid: "68c58dea8572145288f7c981",
        },
        id: {
          $oid: "68c58dea8572145288f7c980",
        },
        version: 1,
        basicInfo: {
          title: "Version 1: temptatio utroque corrupti",
          description:
            "Apparatus adiuvo alioqui charisma voro conor. Dolore vicinus talio vesica arcus virga. Baiulus architecto aggredior.",
          subject: "math",
          gradeLevel: "prek",
          type: "interactive",
          duration: "30 mins",
          difficulty: "intermediate",
          standardsType: "ngss",
          learningObjectives:
            "Saepe ater admitto vix ustilo aer arbitro tutamen creator.\nVigor defessus adhuc defessus stipes depulso tres canonicus cohors dignissimos.\nTabella victoria xiphias animus.\nAmo totam pax quasi timidus.\nCaritas aestas casus.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "b99d4781-f56b-412f-86a3-1e3207d2aac2",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Compello benevolentia coepi laboriosam patior debilito eaque curtus varius capillus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Voco carus aegrus. Denuncio cattus annus sollers comitatus ad creber conventus decumbo asporto. Odio voluptatibus aedificium cimentarius suffragium tamen stipes.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f9869b72-0e1a-4d39-81dd-dadc1179fc76",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Crur consectetur supra ter vitiosus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Tamquam demum absconditus nesciunt caelum auxilium aggero ipsa ad delego. Necessitatibus excepturi corrumpo bestia ulciscor abscido cruciamentum agnitio approbo. Stabilis caste talio trans.\n\nDistinctio desino adversus. Quaerat vado unus statua audeo cras. Supplanto virgo cruciamentum.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Ventus clementia desparatus. Eligendi cum crebro fugiat amoveo vallum tempore laborum defendo thymum. Id vorago decimus curso venia vulgivagus sophismata.\n\nTabula totam velociter decimus umbra similique turpis adhaero. Sub tutamen ipsam templum umquam cubicularis quas succedo. Vapulus capillus vix crudelis cunctatio esse appello.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "0c0fc439-b654-472f-9e2b-03c30ebae0cf",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PZ7lDrwYdZc",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "b2ebd49e-7923-4484-b9c5-835b9861fc60",
              type: "multiple_choice",
              content:
                "<p>Aranea villa fuga aufero cilicium attonbitus aestus.</p>",
              question:
                "Benigne vesper thesaurus careo bardus quibusdam correptius.",
              options: [
                {
                  text: "perferendis totam non aut assumenda",
                  isCorrect: false,
                },
                {
                  text: "crebro absens",
                  isCorrect: false,
                },
                {
                  text: "baiulus appello ultio patria",
                  isCorrect: false,
                },
                {
                  text: "talis voluntarius",
                  isCorrect: true,
                },
              ],
              explanation:
                "Colligo auxilium capitulus delicate patior assentator aperiam. Vis accusantium in ad cura.",
              chosen: false,
              selected: false,
            },
            {
              id: "d454a680-6911-4a46-85b8-e2593f69806d",
              type: "multiple_choice",
              content:
                "<p>Tricesimus corpus aegrus maiores laborum comes thema pecto admiratio ante.</p>",
              question: "Tamquam culpo nisi optio.",
              options: [
                {
                  text: "vesco delinquo patrocinor terreo calcar",
                  isCorrect: false,
                },
                {
                  text: "toties aperte advenio",
                  isCorrect: false,
                },
                {
                  text: "veritatis circumvenio vulpes una",
                  isCorrect: true,
                },
                {
                  text: "absorbeo caste theologus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Varietas conitor reprehenderit clam. Facere tollo comedo deorsum usitas tibi cervus spiculum deputo ubi.",
              chosen: false,
              selected: false,
            },
            {
              id: "015b572d-9820-49dc-a1c6-8018dcf61111",
              type: "matching_pair",
              content:
                "<p>Vestrum solus dolore spiculum corrumpo vulpes depereo.</p>",
              pairs: [
                {
                  left: "sufficio",
                  right: "cogo",
                },
                {
                  left: "terreo",
                  right: "validus",
                },
                {
                  left: "desparatus",
                  right: "laudantium",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "5fede3bf-dbb9-4d1f-b223-5570a747d2fa",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "doloremque",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "56c4a59f-6f06-4ab4-994d-2f018a905d43",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___] [___]</p>",
              text: "Fill in: [___] [___] [___]",
              blanks: [
                {
                  answer: "ipsam",
                },
                {
                  answer: "audio",
                },
                {
                  answer: "placeat",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Atqui catena vorax cibo sollers taedium vesica. Arbor quos statim aestivus venio sumo adflicto.",
            materials: "None",
            assessment:
              "Comitatus studio voveo vere thorax cimentarius deludo tenetur nam coniecto.",
            extensions:
              "Depono vulticulus vilitas averto delectus decimus arcesso depromo.",
            resources: "https://warm-tail.net",
          },
        },
        teacherSection: {
          instructions:
            "Sordeo velit decretum aestas versus demulceo. Decumbo tollo clementia demitto tantum abduco distinctio mollitia dolorem velociter.",
          guides: "Cado cauda deficio admoneo talis.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Aegrotatio labore contego coniuratio thesaurus speciosus.",
        },
        studentSection: {
          instructions: "Adiuvo vestrum cornu sopor.",
          content:
            "Audax amitto addo uredo nostrum verus corroboro utique quo verecundia. Debeo voro sordeo somniculosus acervus votum quod corpus commodi adnuo. Adnuo celebrer tenax uterque.\nVictus adfectus aedificium vado utrimque. Pecto tubineus cohaero qui deorsum labore deduco. Volva conculco subito.",
          worksheets: "https://boring-conversation.org",
          resources: "https://optimistic-anticodon.com/",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c978",
        },
        status: "finished",
        createdAt: {
          $date: "2025-07-02T06:41:11.174Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.791Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9fc",
        },
      },
    ],
  },
  {
    id: "d362a605-a557-425a-b230-b2ee454c5ce8",
    title: "Unit 2: abeo facere",
    activities: [
      {
        title:
          "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
        _id: {
          $oid: "68c58dea8572145288f7c97e",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 1,
        basicInfo: {
          title:
            "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
          description:
            "Trucido calco deprimo vociferor quasi acidus. Supellex acerbitas iste omnis suffragium nesciunt virgo. Rerum auctor depopulo officiis custodia terminatio praesentium tamen.",
          subject: "pe",
          gradeLevel: "prek",
          type: "interactive",
          duration: "20 mins",
          difficulty: "intermediate",
          standardsType: "common-core",
          learningObjectives:
            "Admiratio civitas suppellex assumenda cruentus dolorum cohaero.\nTurba cuius usus crebro amor defleo adsidue cogo.\nAiunt apostolus socius agnitio antiquus supra currus dedico decerno.\nAduro ciminatio amoveo vetus magni copiose.\nSuus cenaculum vigilo viridis crastinus quasi absens sed.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: false,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "fbe79280-d744-4523-97bb-f6bc4da0d9c7",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Venio sollicito considero somnus audio illum tyrannus aliquam denuo.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Chirographum sol capio vilicus charisma accusamus stips vilitas solutio circumvenio. Virgo charisma spiculum victus collum. Sopor ambitus concedo aegrus curiositas.\n\nConitor tubineus compono accusantium sumo. Praesentium trado arguo theologus deporto vetus demergo delicate approbo. Cibus chirographum benevolentia ager pecto conor vacuus venia libero.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Arbitro statua adaugeo audacia vado vilitas casso vulgaris clibanus dapifer. Demum thorax conscendo. Architecto abbas charisma contra attero error artificiose ceno amoveo error.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Crepusculum eligendi debeo vigor caecus tot amitto expedita. Custodia crebro angelus voluptas stabilis tepidus repellat conturbo enim reiciendis. Ascisco tamdiu accommodo.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f7ba4d00-f339-4be6-96e6-90de7fb06330",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PNx9f4CCxDg",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "4fb799f4-5f65-4306-8521-c74d4e6a03ab",
              type: "multiple_choice",
              content: "<p>Valetudo crux teneo thorax dolorem.</p>",
              question: "Aggredior totus torqueo ulterius ea abscido.",
              options: [
                {
                  text: "cursus suggero cui thermae attonbitus",
                  isCorrect: false,
                },
                {
                  text: "totus cinis error",
                  isCorrect: true,
                },
                {
                  text: "suggero tergiversatio",
                  isCorrect: false,
                },
                {
                  text: "teres praesentium baiulus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Tonsor super aestas thymum ceno considero bos avarus velociter. Copiose acerbitas fuga omnis tenuis urbs absque soleo crur caste.",
              chosen: false,
              selected: false,
            },
            {
              id: "b18a7b91-3b6b-4ac2-8d27-8aecfe26dd08",
              type: "multiple_choice",
              content:
                "<p>Contra dolorum adsum theca vespillo vicissitudo appello canis.</p>",
              question:
                "Vicinus quidem circumvenio soleo amet acquiro atqui sufficio hic magni.",
              options: [
                {
                  text: "aufero tenus creptio",
                  isCorrect: false,
                },
                {
                  text: "desipio blandior",
                  isCorrect: false,
                },
                {
                  text: "turpis vita verbera optio spiritus",
                  isCorrect: false,
                },
                {
                  text: "placeat caecus derideo",
                  isCorrect: true,
                },
              ],
              explanation:
                "Depopulo calamitas vulgaris calco. Timor approbo una tres suppellex angustus vae desparatus commodi cursus.",
              chosen: false,
              selected: false,
            },
            {
              id: "21a529be-df87-4e75-a06d-9487893b22a7",
              type: "matching_pair",
              content:
                "<p>Vomica tergeo voluptatem cumque cohaero cras summa tabgo.</p>",
              pairs: [
                {
                  left: "debeo",
                  right: "aufero",
                },
                {
                  left: "quo",
                  right: "sponte",
                },
                {
                  left: "acer",
                  right: "artificiose",
                },
                {
                  left: "tibi",
                  right: "vulgus",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "46c70f1a-008d-4ec2-b4f6-492c3d6dafe1",
              type: "matching_pair",
              content: "<p>Anser arx demergo.</p>",
              pairs: [
                {
                  left: "volup",
                  right: "suasoria",
                },
                {
                  left: "somniculosus",
                  right: "peccatus",
                },
                {
                  left: "tertius",
                  right: "volo",
                },
                {
                  left: "audax",
                  right: "architecto",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4ca7c64b-a0a6-4eb8-a45d-34c9def9ad02",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "studio",
                },
                {
                  answer: "creator",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Deorsum anser chirographum. Vereor ara civis decor suggero eius talus quam caelum.",
            materials: "Pen, Notebook",
            assessment: "Velit ut textus decet.",
            extensions: "Uter supra ipsa.",
            resources: "https://prudent-individual.org",
          },
        },
        teacherSection: {
          instructions: "Comis cultura caritas. Quos verus hic delego.",
          guides:
            "Voluptatibus assumenda vergo defero iure umbra debilito ultio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes:
            "Curia thesaurus verbum ambitus causa repellendus quis sumptus consuasor.",
        },
        studentSection: {
          instructions:
            "Stipes adficio uxor desolo at peior dignissimos animi spero.",
          content:
            "Annus admiratio cotidie laudantium vester possimus pariatur. Crepusculum vivo totidem campana catena sursum. Vomica ager clam verus contra cerno.\nVesco depono comitatus bos tertius thesis. Bellum ubi dignissimos carpo blanditiis caveo distinctio tergum. Nemo aperiam supplanto excepturi ciminatio asperiores corpus tantum audio vitiosus.",
          worksheets: "https://crazy-dredger.name/",
          resources: "https://big-secrecy.com",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "finished",
        createdAt: {
          $date: "2025-01-13T22:18:08.093Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.784Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f7",
        },
      },
      {
        title: "Version 2: amo doloribus culpa",
        _id: {
          $oid: "68c58dea8572145288f7c97f",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 2,
        basicInfo: {
          title: "Version 2: amo doloribus culpa",
          description:
            "Spargo spiritus et fugit a tamquam contra cultellus allatus demens. Comptus apostolus collum alo vado caute sponte cruciamentum. Crudelis cenaculum tergiversatio dolorum curiositas.",
          subject: "art",
          gradeLevel: "6-8",
          type: "assessment",
          duration: "30 mins",
          difficulty: "advanced",
          standardsType: "state",
          learningObjectives:
            "Totus dolor contego mollitia audio suscipit suffoco error aureus versus.\nCalco venustas traho porro conspergo.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: true,
            showHints: true,
          },
        },
        content: {
          blocks: [
            {
              id: "646b21ef-ef0d-4d08-a443-eaa511f1647e",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Thalassinus artificiose viscus caelestis tamquam.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Fugit conatus sum urbs audacia vigilo. Terga bos chirographum recusandae. Turba facere pel est cibus similique arx defero.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "63f485c2-53ad-48f2-9cbe-475c6f8ee460",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=ZAqIoDhornk",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "6fb9717e-d1d1-4e6e-ae7f-c3a40f2fdcd1",
              type: "multiple_choice",
              content: "<p>Comprehendo vicinus nemo cena.</p>",
              question:
                "Tenuis thorax sordeo commodo una contra necessitatibus cunabula.",
              options: [
                {
                  text: "studio capitulus verus abscido",
                  isCorrect: false,
                },
                {
                  text: "aggredior alveus tui",
                  isCorrect: false,
                },
                {
                  text: "degenero ventosus placeat arbustum",
                  isCorrect: false,
                },
                {
                  text: "argentum peior vinculum esse",
                  isCorrect: true,
                },
              ],
              explanation:
                "Arcus subnecto caute damnatio. Voluntarius nobis vorago sub.",
              chosen: false,
              selected: false,
            },
            {
              id: "6aadbb22-1d3a-4afd-a67f-017d44b0b80c",
              type: "multiple_choice",
              content:
                "<p>Ex victoria delectus barba cultellus dolor deinde stella vinculum et.</p>",
              question:
                "Ascit avaritia adopto defungo mollitia nam thema vulnero.",
              options: [
                {
                  text: "verecundia voluptates validus",
                  isCorrect: false,
                },
                {
                  text: "deorsum absconditus vulgivagus",
                  isCorrect: false,
                },
                {
                  text: "uter defetiscor conqueror",
                  isCorrect: false,
                },
                {
                  text: "claustrum amicitia provident",
                  isCorrect: true,
                },
              ],
              explanation:
                "Vulnus suspendo incidunt pauci deficio civitas debilito succedo pel. Aegre quaerat cumque.",
              chosen: false,
              selected: false,
            },
            {
              id: "eca82717-b3d4-4d7b-bd49-797cc5255d89",
              type: "matching_pair",
              content:
                "<p>Adfero earum coadunatio aegre asperiores patior calculus peccatus.</p>",
              pairs: [
                {
                  left: "molestias",
                  right: "traho",
                },
                {
                  left: "celo",
                  right: "culpa",
                },
                {
                  left: "decipio",
                  right: "torrens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4e5a23fe-2776-4433-bea4-d99df846fc9f",
              type: "matching_pair",
              content: "<p>Ab copia aggredior.</p>",
              pairs: [
                {
                  left: "stipes",
                  right: "bis",
                },
                {
                  left: "denego",
                  right: "pel",
                },
                {
                  left: "praesentium",
                  right: "paens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "59f0c9f9-ef49-4dbf-a82d-2ef1e71aca8b",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "dolore",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "6c1ae60b-a89f-4520-ab62-ed404b8b2edb",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "spiculum",
                },
                {
                  answer: "aspernatur",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Ultio sophismata vesper. Vigor incidunt coniecto nobis cinis compono venia.",
            materials: "Pen, Notebook",
            assessment: "Apud vilis corrumpo.",
            extensions:
              "Arca repellendus arguo suppono argumentum cohaero suus delibero amaritudo abutor.",
            resources: "https://hard-to-find-swanling.name",
          },
        },
        teacherSection: {
          instructions:
            "Tyrannus addo correptius spiculum coma delego accommodo vulgaris. Asperiores spargo et brevis subnecto adeo fugit tutis labore.",
          guides: "Repellat derideo defendo depono cubo audio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Amaritudo paulatim carcer tollo.",
        },
        studentSection: {
          instructions:
            "Modi clibanus praesentium ocer tristis adulescens utor vinculum benevolentia adiuvo.",
          content:
            "Voro totidem facere angelus adinventitias asporto thalassinus combibo. Caute altus defleo thesaurus. Spero odio correptius.\nIpsa crustulum suffragium villa traho sunt minima crur tabernus textor. Sol vero eius certus. Alioqui valens tui culpo correptius suadeo.",
          worksheets: "https://flimsy-alligator.biz/",
          resources: "https://all-mozzarella.info",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "draft",
        createdAt: {
          $date: "2024-11-25T22:34:24.468Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.788Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f9",
        },
      },
      {
        title: "Version 1: temptatio utroque corrupti",
        _id: {
          $oid: "68c58dea8572145288f7c981",
        },
        id: {
          $oid: "68c58dea8572145288f7c980",
        },
        version: 1,
        basicInfo: {
          title: "Version 1: temptatio utroque corrupti",
          description:
            "Apparatus adiuvo alioqui charisma voro conor. Dolore vicinus talio vesica arcus virga. Baiulus architecto aggredior.",
          subject: "math",
          gradeLevel: "prek",
          type: "interactive",
          duration: "30 mins",
          difficulty: "intermediate",
          standardsType: "ngss",
          learningObjectives:
            "Saepe ater admitto vix ustilo aer arbitro tutamen creator.\nVigor defessus adhuc defessus stipes depulso tres canonicus cohors dignissimos.\nTabella victoria xiphias animus.\nAmo totam pax quasi timidus.\nCaritas aestas casus.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "b99d4781-f56b-412f-86a3-1e3207d2aac2",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Compello benevolentia coepi laboriosam patior debilito eaque curtus varius capillus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Voco carus aegrus. Denuncio cattus annus sollers comitatus ad creber conventus decumbo asporto. Odio voluptatibus aedificium cimentarius suffragium tamen stipes.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f9869b72-0e1a-4d39-81dd-dadc1179fc76",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Crur consectetur supra ter vitiosus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Tamquam demum absconditus nesciunt caelum auxilium aggero ipsa ad delego. Necessitatibus excepturi corrumpo bestia ulciscor abscido cruciamentum agnitio approbo. Stabilis caste talio trans.\n\nDistinctio desino adversus. Quaerat vado unus statua audeo cras. Supplanto virgo cruciamentum.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Ventus clementia desparatus. Eligendi cum crebro fugiat amoveo vallum tempore laborum defendo thymum. Id vorago decimus curso venia vulgivagus sophismata.\n\nTabula totam velociter decimus umbra similique turpis adhaero. Sub tutamen ipsam templum umquam cubicularis quas succedo. Vapulus capillus vix crudelis cunctatio esse appello.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "0c0fc439-b654-472f-9e2b-03c30ebae0cf",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PZ7lDrwYdZc",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "b2ebd49e-7923-4484-b9c5-835b9861fc60",
              type: "multiple_choice",
              content:
                "<p>Aranea villa fuga aufero cilicium attonbitus aestus.</p>",
              question:
                "Benigne vesper thesaurus careo bardus quibusdam correptius.",
              options: [
                {
                  text: "perferendis totam non aut assumenda",
                  isCorrect: false,
                },
                {
                  text: "crebro absens",
                  isCorrect: false,
                },
                {
                  text: "baiulus appello ultio patria",
                  isCorrect: false,
                },
                {
                  text: "talis voluntarius",
                  isCorrect: true,
                },
              ],
              explanation:
                "Colligo auxilium capitulus delicate patior assentator aperiam. Vis accusantium in ad cura.",
              chosen: false,
              selected: false,
            },
            {
              id: "d454a680-6911-4a46-85b8-e2593f69806d",
              type: "multiple_choice",
              content:
                "<p>Tricesimus corpus aegrus maiores laborum comes thema pecto admiratio ante.</p>",
              question: "Tamquam culpo nisi optio.",
              options: [
                {
                  text: "vesco delinquo patrocinor terreo calcar",
                  isCorrect: false,
                },
                {
                  text: "toties aperte advenio",
                  isCorrect: false,
                },
                {
                  text: "veritatis circumvenio vulpes una",
                  isCorrect: true,
                },
                {
                  text: "absorbeo caste theologus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Varietas conitor reprehenderit clam. Facere tollo comedo deorsum usitas tibi cervus spiculum deputo ubi.",
              chosen: false,
              selected: false,
            },
            {
              id: "015b572d-9820-49dc-a1c6-8018dcf61111",
              type: "matching_pair",
              content:
                "<p>Vestrum solus dolore spiculum corrumpo vulpes depereo.</p>",
              pairs: [
                {
                  left: "sufficio",
                  right: "cogo",
                },
                {
                  left: "terreo",
                  right: "validus",
                },
                {
                  left: "desparatus",
                  right: "laudantium",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "5fede3bf-dbb9-4d1f-b223-5570a747d2fa",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "doloremque",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "56c4a59f-6f06-4ab4-994d-2f018a905d43",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___] [___]</p>",
              text: "Fill in: [___] [___] [___]",
              blanks: [
                {
                  answer: "ipsam",
                },
                {
                  answer: "audio",
                },
                {
                  answer: "placeat",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Atqui catena vorax cibo sollers taedium vesica. Arbor quos statim aestivus venio sumo adflicto.",
            materials: "None",
            assessment:
              "Comitatus studio voveo vere thorax cimentarius deludo tenetur nam coniecto.",
            extensions:
              "Depono vulticulus vilitas averto delectus decimus arcesso depromo.",
            resources: "https://warm-tail.net",
          },
        },
        teacherSection: {
          instructions:
            "Sordeo velit decretum aestas versus demulceo. Decumbo tollo clementia demitto tantum abduco distinctio mollitia dolorem velociter.",
          guides: "Cado cauda deficio admoneo talis.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Aegrotatio labore contego coniuratio thesaurus speciosus.",
        },
        studentSection: {
          instructions: "Adiuvo vestrum cornu sopor.",
          content:
            "Audax amitto addo uredo nostrum verus corroboro utique quo verecundia. Debeo voro sordeo somniculosus acervus votum quod corpus commodi adnuo. Adnuo celebrer tenax uterque.\nVictus adfectus aedificium vado utrimque. Pecto tubineus cohaero qui deorsum labore deduco. Volva conculco subito.",
          worksheets: "https://boring-conversation.org",
          resources: "https://optimistic-anticodon.com/",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c978",
        },
        status: "finished",
        createdAt: {
          $date: "2025-07-02T06:41:11.174Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.791Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9fc",
        },
      },
    ],
  },
  {
    id: "7ba90410-842c-4a71-bc16-37f590031f83",
    title: "Unit 3: terminatio calamitas",
    activities: [{ $oid: "68c58dea8572145288f7c9b8" }],
  },
  {
    id: "9e0acc6b-7ad2-4b41-9a67-743942d228b9",
    title: "Unit 4: bardus basium",
    activities: [
      {
        title:
          "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
        _id: {
          $oid: "68c58dea8572145288f7c97e",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 1,
        basicInfo: {
          title:
            "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
          description:
            "Trucido calco deprimo vociferor quasi acidus. Supellex acerbitas iste omnis suffragium nesciunt virgo. Rerum auctor depopulo officiis custodia terminatio praesentium tamen.",
          subject: "pe",
          gradeLevel: "prek",
          type: "interactive",
          duration: "20 mins",
          difficulty: "intermediate",
          standardsType: "common-core",
          learningObjectives:
            "Admiratio civitas suppellex assumenda cruentus dolorum cohaero.\nTurba cuius usus crebro amor defleo adsidue cogo.\nAiunt apostolus socius agnitio antiquus supra currus dedico decerno.\nAduro ciminatio amoveo vetus magni copiose.\nSuus cenaculum vigilo viridis crastinus quasi absens sed.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: false,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "fbe79280-d744-4523-97bb-f6bc4da0d9c7",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Venio sollicito considero somnus audio illum tyrannus aliquam denuo.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Chirographum sol capio vilicus charisma accusamus stips vilitas solutio circumvenio. Virgo charisma spiculum victus collum. Sopor ambitus concedo aegrus curiositas.\n\nConitor tubineus compono accusantium sumo. Praesentium trado arguo theologus deporto vetus demergo delicate approbo. Cibus chirographum benevolentia ager pecto conor vacuus venia libero.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Arbitro statua adaugeo audacia vado vilitas casso vulgaris clibanus dapifer. Demum thorax conscendo. Architecto abbas charisma contra attero error artificiose ceno amoveo error.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Crepusculum eligendi debeo vigor caecus tot amitto expedita. Custodia crebro angelus voluptas stabilis tepidus repellat conturbo enim reiciendis. Ascisco tamdiu accommodo.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f7ba4d00-f339-4be6-96e6-90de7fb06330",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PNx9f4CCxDg",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "4fb799f4-5f65-4306-8521-c74d4e6a03ab",
              type: "multiple_choice",
              content: "<p>Valetudo crux teneo thorax dolorem.</p>",
              question: "Aggredior totus torqueo ulterius ea abscido.",
              options: [
                {
                  text: "cursus suggero cui thermae attonbitus",
                  isCorrect: false,
                },
                {
                  text: "totus cinis error",
                  isCorrect: true,
                },
                {
                  text: "suggero tergiversatio",
                  isCorrect: false,
                },
                {
                  text: "teres praesentium baiulus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Tonsor super aestas thymum ceno considero bos avarus velociter. Copiose acerbitas fuga omnis tenuis urbs absque soleo crur caste.",
              chosen: false,
              selected: false,
            },
            {
              id: "b18a7b91-3b6b-4ac2-8d27-8aecfe26dd08",
              type: "multiple_choice",
              content:
                "<p>Contra dolorum adsum theca vespillo vicissitudo appello canis.</p>",
              question:
                "Vicinus quidem circumvenio soleo amet acquiro atqui sufficio hic magni.",
              options: [
                {
                  text: "aufero tenus creptio",
                  isCorrect: false,
                },
                {
                  text: "desipio blandior",
                  isCorrect: false,
                },
                {
                  text: "turpis vita verbera optio spiritus",
                  isCorrect: false,
                },
                {
                  text: "placeat caecus derideo",
                  isCorrect: true,
                },
              ],
              explanation:
                "Depopulo calamitas vulgaris calco. Timor approbo una tres suppellex angustus vae desparatus commodi cursus.",
              chosen: false,
              selected: false,
            },
            {
              id: "21a529be-df87-4e75-a06d-9487893b22a7",
              type: "matching_pair",
              content:
                "<p>Vomica tergeo voluptatem cumque cohaero cras summa tabgo.</p>",
              pairs: [
                {
                  left: "debeo",
                  right: "aufero",
                },
                {
                  left: "quo",
                  right: "sponte",
                },
                {
                  left: "acer",
                  right: "artificiose",
                },
                {
                  left: "tibi",
                  right: "vulgus",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "46c70f1a-008d-4ec2-b4f6-492c3d6dafe1",
              type: "matching_pair",
              content: "<p>Anser arx demergo.</p>",
              pairs: [
                {
                  left: "volup",
                  right: "suasoria",
                },
                {
                  left: "somniculosus",
                  right: "peccatus",
                },
                {
                  left: "tertius",
                  right: "volo",
                },
                {
                  left: "audax",
                  right: "architecto",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4ca7c64b-a0a6-4eb8-a45d-34c9def9ad02",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "studio",
                },
                {
                  answer: "creator",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Deorsum anser chirographum. Vereor ara civis decor suggero eius talus quam caelum.",
            materials: "Pen, Notebook",
            assessment: "Velit ut textus decet.",
            extensions: "Uter supra ipsa.",
            resources: "https://prudent-individual.org",
          },
        },
        teacherSection: {
          instructions: "Comis cultura caritas. Quos verus hic delego.",
          guides:
            "Voluptatibus assumenda vergo defero iure umbra debilito ultio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes:
            "Curia thesaurus verbum ambitus causa repellendus quis sumptus consuasor.",
        },
        studentSection: {
          instructions:
            "Stipes adficio uxor desolo at peior dignissimos animi spero.",
          content:
            "Annus admiratio cotidie laudantium vester possimus pariatur. Crepusculum vivo totidem campana catena sursum. Vomica ager clam verus contra cerno.\nVesco depono comitatus bos tertius thesis. Bellum ubi dignissimos carpo blanditiis caveo distinctio tergum. Nemo aperiam supplanto excepturi ciminatio asperiores corpus tantum audio vitiosus.",
          worksheets: "https://crazy-dredger.name/",
          resources: "https://big-secrecy.com",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "finished",
        createdAt: {
          $date: "2025-01-13T22:18:08.093Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.784Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f7",
        },
      },
      {
        title: "Version 2: amo doloribus culpa",
        _id: {
          $oid: "68c58dea8572145288f7c97f",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 2,
        basicInfo: {
          title: "Version 2: amo doloribus culpa",
          description:
            "Spargo spiritus et fugit a tamquam contra cultellus allatus demens. Comptus apostolus collum alo vado caute sponte cruciamentum. Crudelis cenaculum tergiversatio dolorum curiositas.",
          subject: "art",
          gradeLevel: "6-8",
          type: "assessment",
          duration: "30 mins",
          difficulty: "advanced",
          standardsType: "state",
          learningObjectives:
            "Totus dolor contego mollitia audio suscipit suffoco error aureus versus.\nCalco venustas traho porro conspergo.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: true,
            showHints: true,
          },
        },
        content: {
          blocks: [
            {
              id: "646b21ef-ef0d-4d08-a443-eaa511f1647e",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Thalassinus artificiose viscus caelestis tamquam.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Fugit conatus sum urbs audacia vigilo. Terga bos chirographum recusandae. Turba facere pel est cibus similique arx defero.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "63f485c2-53ad-48f2-9cbe-475c6f8ee460",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=ZAqIoDhornk",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "6fb9717e-d1d1-4e6e-ae7f-c3a40f2fdcd1",
              type: "multiple_choice",
              content: "<p>Comprehendo vicinus nemo cena.</p>",
              question:
                "Tenuis thorax sordeo commodo una contra necessitatibus cunabula.",
              options: [
                {
                  text: "studio capitulus verus abscido",
                  isCorrect: false,
                },
                {
                  text: "aggredior alveus tui",
                  isCorrect: false,
                },
                {
                  text: "degenero ventosus placeat arbustum",
                  isCorrect: false,
                },
                {
                  text: "argentum peior vinculum esse",
                  isCorrect: true,
                },
              ],
              explanation:
                "Arcus subnecto caute damnatio. Voluntarius nobis vorago sub.",
              chosen: false,
              selected: false,
            },
            {
              id: "6aadbb22-1d3a-4afd-a67f-017d44b0b80c",
              type: "multiple_choice",
              content:
                "<p>Ex victoria delectus barba cultellus dolor deinde stella vinculum et.</p>",
              question:
                "Ascit avaritia adopto defungo mollitia nam thema vulnero.",
              options: [
                {
                  text: "verecundia voluptates validus",
                  isCorrect: false,
                },
                {
                  text: "deorsum absconditus vulgivagus",
                  isCorrect: false,
                },
                {
                  text: "uter defetiscor conqueror",
                  isCorrect: false,
                },
                {
                  text: "claustrum amicitia provident",
                  isCorrect: true,
                },
              ],
              explanation:
                "Vulnus suspendo incidunt pauci deficio civitas debilito succedo pel. Aegre quaerat cumque.",
              chosen: false,
              selected: false,
            },
            {
              id: "eca82717-b3d4-4d7b-bd49-797cc5255d89",
              type: "matching_pair",
              content:
                "<p>Adfero earum coadunatio aegre asperiores patior calculus peccatus.</p>",
              pairs: [
                {
                  left: "molestias",
                  right: "traho",
                },
                {
                  left: "celo",
                  right: "culpa",
                },
                {
                  left: "decipio",
                  right: "torrens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4e5a23fe-2776-4433-bea4-d99df846fc9f",
              type: "matching_pair",
              content: "<p>Ab copia aggredior.</p>",
              pairs: [
                {
                  left: "stipes",
                  right: "bis",
                },
                {
                  left: "denego",
                  right: "pel",
                },
                {
                  left: "praesentium",
                  right: "paens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "59f0c9f9-ef49-4dbf-a82d-2ef1e71aca8b",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "dolore",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "6c1ae60b-a89f-4520-ab62-ed404b8b2edb",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "spiculum",
                },
                {
                  answer: "aspernatur",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Ultio sophismata vesper. Vigor incidunt coniecto nobis cinis compono venia.",
            materials: "Pen, Notebook",
            assessment: "Apud vilis corrumpo.",
            extensions:
              "Arca repellendus arguo suppono argumentum cohaero suus delibero amaritudo abutor.",
            resources: "https://hard-to-find-swanling.name",
          },
        },
        teacherSection: {
          instructions:
            "Tyrannus addo correptius spiculum coma delego accommodo vulgaris. Asperiores spargo et brevis subnecto adeo fugit tutis labore.",
          guides: "Repellat derideo defendo depono cubo audio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Amaritudo paulatim carcer tollo.",
        },
        studentSection: {
          instructions:
            "Modi clibanus praesentium ocer tristis adulescens utor vinculum benevolentia adiuvo.",
          content:
            "Voro totidem facere angelus adinventitias asporto thalassinus combibo. Caute altus defleo thesaurus. Spero odio correptius.\nIpsa crustulum suffragium villa traho sunt minima crur tabernus textor. Sol vero eius certus. Alioqui valens tui culpo correptius suadeo.",
          worksheets: "https://flimsy-alligator.biz/",
          resources: "https://all-mozzarella.info",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "draft",
        createdAt: {
          $date: "2024-11-25T22:34:24.468Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.788Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f9",
        },
      },
      {
        title: "Version 1: temptatio utroque corrupti",
        _id: {
          $oid: "68c58dea8572145288f7c981",
        },
        id: {
          $oid: "68c58dea8572145288f7c980",
        },
        version: 1,
        basicInfo: {
          title: "Version 1: temptatio utroque corrupti",
          description:
            "Apparatus adiuvo alioqui charisma voro conor. Dolore vicinus talio vesica arcus virga. Baiulus architecto aggredior.",
          subject: "math",
          gradeLevel: "prek",
          type: "interactive",
          duration: "30 mins",
          difficulty: "intermediate",
          standardsType: "ngss",
          learningObjectives:
            "Saepe ater admitto vix ustilo aer arbitro tutamen creator.\nVigor defessus adhuc defessus stipes depulso tres canonicus cohors dignissimos.\nTabella victoria xiphias animus.\nAmo totam pax quasi timidus.\nCaritas aestas casus.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "b99d4781-f56b-412f-86a3-1e3207d2aac2",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Compello benevolentia coepi laboriosam patior debilito eaque curtus varius capillus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Voco carus aegrus. Denuncio cattus annus sollers comitatus ad creber conventus decumbo asporto. Odio voluptatibus aedificium cimentarius suffragium tamen stipes.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f9869b72-0e1a-4d39-81dd-dadc1179fc76",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Crur consectetur supra ter vitiosus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Tamquam demum absconditus nesciunt caelum auxilium aggero ipsa ad delego. Necessitatibus excepturi corrumpo bestia ulciscor abscido cruciamentum agnitio approbo. Stabilis caste talio trans.\n\nDistinctio desino adversus. Quaerat vado unus statua audeo cras. Supplanto virgo cruciamentum.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Ventus clementia desparatus. Eligendi cum crebro fugiat amoveo vallum tempore laborum defendo thymum. Id vorago decimus curso venia vulgivagus sophismata.\n\nTabula totam velociter decimus umbra similique turpis adhaero. Sub tutamen ipsam templum umquam cubicularis quas succedo. Vapulus capillus vix crudelis cunctatio esse appello.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "0c0fc439-b654-472f-9e2b-03c30ebae0cf",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PZ7lDrwYdZc",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "b2ebd49e-7923-4484-b9c5-835b9861fc60",
              type: "multiple_choice",
              content:
                "<p>Aranea villa fuga aufero cilicium attonbitus aestus.</p>",
              question:
                "Benigne vesper thesaurus careo bardus quibusdam correptius.",
              options: [
                {
                  text: "perferendis totam non aut assumenda",
                  isCorrect: false,
                },
                {
                  text: "crebro absens",
                  isCorrect: false,
                },
                {
                  text: "baiulus appello ultio patria",
                  isCorrect: false,
                },
                {
                  text: "talis voluntarius",
                  isCorrect: true,
                },
              ],
              explanation:
                "Colligo auxilium capitulus delicate patior assentator aperiam. Vis accusantium in ad cura.",
              chosen: false,
              selected: false,
            },
            {
              id: "d454a680-6911-4a46-85b8-e2593f69806d",
              type: "multiple_choice",
              content:
                "<p>Tricesimus corpus aegrus maiores laborum comes thema pecto admiratio ante.</p>",
              question: "Tamquam culpo nisi optio.",
              options: [
                {
                  text: "vesco delinquo patrocinor terreo calcar",
                  isCorrect: false,
                },
                {
                  text: "toties aperte advenio",
                  isCorrect: false,
                },
                {
                  text: "veritatis circumvenio vulpes una",
                  isCorrect: true,
                },
                {
                  text: "absorbeo caste theologus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Varietas conitor reprehenderit clam. Facere tollo comedo deorsum usitas tibi cervus spiculum deputo ubi.",
              chosen: false,
              selected: false,
            },
            {
              id: "015b572d-9820-49dc-a1c6-8018dcf61111",
              type: "matching_pair",
              content:
                "<p>Vestrum solus dolore spiculum corrumpo vulpes depereo.</p>",
              pairs: [
                {
                  left: "sufficio",
                  right: "cogo",
                },
                {
                  left: "terreo",
                  right: "validus",
                },
                {
                  left: "desparatus",
                  right: "laudantium",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "5fede3bf-dbb9-4d1f-b223-5570a747d2fa",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "doloremque",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "56c4a59f-6f06-4ab4-994d-2f018a905d43",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___] [___]</p>",
              text: "Fill in: [___] [___] [___]",
              blanks: [
                {
                  answer: "ipsam",
                },
                {
                  answer: "audio",
                },
                {
                  answer: "placeat",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Atqui catena vorax cibo sollers taedium vesica. Arbor quos statim aestivus venio sumo adflicto.",
            materials: "None",
            assessment:
              "Comitatus studio voveo vere thorax cimentarius deludo tenetur nam coniecto.",
            extensions:
              "Depono vulticulus vilitas averto delectus decimus arcesso depromo.",
            resources: "https://warm-tail.net",
          },
        },
        teacherSection: {
          instructions:
            "Sordeo velit decretum aestas versus demulceo. Decumbo tollo clementia demitto tantum abduco distinctio mollitia dolorem velociter.",
          guides: "Cado cauda deficio admoneo talis.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Aegrotatio labore contego coniuratio thesaurus speciosus.",
        },
        studentSection: {
          instructions: "Adiuvo vestrum cornu sopor.",
          content:
            "Audax amitto addo uredo nostrum verus corroboro utique quo verecundia. Debeo voro sordeo somniculosus acervus votum quod corpus commodi adnuo. Adnuo celebrer tenax uterque.\nVictus adfectus aedificium vado utrimque. Pecto tubineus cohaero qui deorsum labore deduco. Volva conculco subito.",
          worksheets: "https://boring-conversation.org",
          resources: "https://optimistic-anticodon.com/",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c978",
        },
        status: "finished",
        createdAt: {
          $date: "2025-07-02T06:41:11.174Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.791Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9fc",
        },
      },
    ],
  },
  {
    id: "ad3ff7bc-f05f-437f-a7b0-3298e49de714",
    title: "Unit 1: vociferor convoco",
    activities: [
      {
        title:
          "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
        _id: {
          $oid: "68c58dea8572145288f7c97e",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 1,
        basicInfo: {
          title:
            "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
          description:
            "Trucido calco deprimo vociferor quasi acidus. Supellex acerbitas iste omnis suffragium nesciunt virgo. Rerum auctor depopulo officiis custodia terminatio praesentium tamen.",
          subject: "pe",
          gradeLevel: "prek",
          type: "interactive",
          duration: "20 mins",
          difficulty: "intermediate",
          standardsType: "common-core",
          learningObjectives:
            "Admiratio civitas suppellex assumenda cruentus dolorum cohaero.\nTurba cuius usus crebro amor defleo adsidue cogo.\nAiunt apostolus socius agnitio antiquus supra currus dedico decerno.\nAduro ciminatio amoveo vetus magni copiose.\nSuus cenaculum vigilo viridis crastinus quasi absens sed.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: false,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "fbe79280-d744-4523-97bb-f6bc4da0d9c7",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Venio sollicito considero somnus audio illum tyrannus aliquam denuo.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Chirographum sol capio vilicus charisma accusamus stips vilitas solutio circumvenio. Virgo charisma spiculum victus collum. Sopor ambitus concedo aegrus curiositas.\n\nConitor tubineus compono accusantium sumo. Praesentium trado arguo theologus deporto vetus demergo delicate approbo. Cibus chirographum benevolentia ager pecto conor vacuus venia libero.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Arbitro statua adaugeo audacia vado vilitas casso vulgaris clibanus dapifer. Demum thorax conscendo. Architecto abbas charisma contra attero error artificiose ceno amoveo error.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Crepusculum eligendi debeo vigor caecus tot amitto expedita. Custodia crebro angelus voluptas stabilis tepidus repellat conturbo enim reiciendis. Ascisco tamdiu accommodo.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f7ba4d00-f339-4be6-96e6-90de7fb06330",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PNx9f4CCxDg",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "4fb799f4-5f65-4306-8521-c74d4e6a03ab",
              type: "multiple_choice",
              content: "<p>Valetudo crux teneo thorax dolorem.</p>",
              question: "Aggredior totus torqueo ulterius ea abscido.",
              options: [
                {
                  text: "cursus suggero cui thermae attonbitus",
                  isCorrect: false,
                },
                {
                  text: "totus cinis error",
                  isCorrect: true,
                },
                {
                  text: "suggero tergiversatio",
                  isCorrect: false,
                },
                {
                  text: "teres praesentium baiulus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Tonsor super aestas thymum ceno considero bos avarus velociter. Copiose acerbitas fuga omnis tenuis urbs absque soleo crur caste.",
              chosen: false,
              selected: false,
            },
            {
              id: "b18a7b91-3b6b-4ac2-8d27-8aecfe26dd08",
              type: "multiple_choice",
              content:
                "<p>Contra dolorum adsum theca vespillo vicissitudo appello canis.</p>",
              question:
                "Vicinus quidem circumvenio soleo amet acquiro atqui sufficio hic magni.",
              options: [
                {
                  text: "aufero tenus creptio",
                  isCorrect: false,
                },
                {
                  text: "desipio blandior",
                  isCorrect: false,
                },
                {
                  text: "turpis vita verbera optio spiritus",
                  isCorrect: false,
                },
                {
                  text: "placeat caecus derideo",
                  isCorrect: true,
                },
              ],
              explanation:
                "Depopulo calamitas vulgaris calco. Timor approbo una tres suppellex angustus vae desparatus commodi cursus.",
              chosen: false,
              selected: false,
            },
            {
              id: "21a529be-df87-4e75-a06d-9487893b22a7",
              type: "matching_pair",
              content:
                "<p>Vomica tergeo voluptatem cumque cohaero cras summa tabgo.</p>",
              pairs: [
                {
                  left: "debeo",
                  right: "aufero",
                },
                {
                  left: "quo",
                  right: "sponte",
                },
                {
                  left: "acer",
                  right: "artificiose",
                },
                {
                  left: "tibi",
                  right: "vulgus",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "46c70f1a-008d-4ec2-b4f6-492c3d6dafe1",
              type: "matching_pair",
              content: "<p>Anser arx demergo.</p>",
              pairs: [
                {
                  left: "volup",
                  right: "suasoria",
                },
                {
                  left: "somniculosus",
                  right: "peccatus",
                },
                {
                  left: "tertius",
                  right: "volo",
                },
                {
                  left: "audax",
                  right: "architecto",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4ca7c64b-a0a6-4eb8-a45d-34c9def9ad02",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "studio",
                },
                {
                  answer: "creator",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Deorsum anser chirographum. Vereor ara civis decor suggero eius talus quam caelum.",
            materials: "Pen, Notebook",
            assessment: "Velit ut textus decet.",
            extensions: "Uter supra ipsa.",
            resources: "https://prudent-individual.org",
          },
        },
        teacherSection: {
          instructions: "Comis cultura caritas. Quos verus hic delego.",
          guides:
            "Voluptatibus assumenda vergo defero iure umbra debilito ultio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes:
            "Curia thesaurus verbum ambitus causa repellendus quis sumptus consuasor.",
        },
        studentSection: {
          instructions:
            "Stipes adficio uxor desolo at peior dignissimos animi spero.",
          content:
            "Annus admiratio cotidie laudantium vester possimus pariatur. Crepusculum vivo totidem campana catena sursum. Vomica ager clam verus contra cerno.\nVesco depono comitatus bos tertius thesis. Bellum ubi dignissimos carpo blanditiis caveo distinctio tergum. Nemo aperiam supplanto excepturi ciminatio asperiores corpus tantum audio vitiosus.",
          worksheets: "https://crazy-dredger.name/",
          resources: "https://big-secrecy.com",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "finished",
        createdAt: {
          $date: "2025-01-13T22:18:08.093Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.784Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f7",
        },
      },
      {
        title: "Version 2: amo doloribus culpa",
        _id: {
          $oid: "68c58dea8572145288f7c97f",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 2,
        basicInfo: {
          title: "Version 2: amo doloribus culpa",
          description:
            "Spargo spiritus et fugit a tamquam contra cultellus allatus demens. Comptus apostolus collum alo vado caute sponte cruciamentum. Crudelis cenaculum tergiversatio dolorum curiositas.",
          subject: "art",
          gradeLevel: "6-8",
          type: "assessment",
          duration: "30 mins",
          difficulty: "advanced",
          standardsType: "state",
          learningObjectives:
            "Totus dolor contego mollitia audio suscipit suffoco error aureus versus.\nCalco venustas traho porro conspergo.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: true,
            showHints: true,
          },
        },
        content: {
          blocks: [
            {
              id: "646b21ef-ef0d-4d08-a443-eaa511f1647e",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Thalassinus artificiose viscus caelestis tamquam.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Fugit conatus sum urbs audacia vigilo. Terga bos chirographum recusandae. Turba facere pel est cibus similique arx defero.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "63f485c2-53ad-48f2-9cbe-475c6f8ee460",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=ZAqIoDhornk",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "6fb9717e-d1d1-4e6e-ae7f-c3a40f2fdcd1",
              type: "multiple_choice",
              content: "<p>Comprehendo vicinus nemo cena.</p>",
              question:
                "Tenuis thorax sordeo commodo una contra necessitatibus cunabula.",
              options: [
                {
                  text: "studio capitulus verus abscido",
                  isCorrect: false,
                },
                {
                  text: "aggredior alveus tui",
                  isCorrect: false,
                },
                {
                  text: "degenero ventosus placeat arbustum",
                  isCorrect: false,
                },
                {
                  text: "argentum peior vinculum esse",
                  isCorrect: true,
                },
              ],
              explanation:
                "Arcus subnecto caute damnatio. Voluntarius nobis vorago sub.",
              chosen: false,
              selected: false,
            },
            {
              id: "6aadbb22-1d3a-4afd-a67f-017d44b0b80c",
              type: "multiple_choice",
              content:
                "<p>Ex victoria delectus barba cultellus dolor deinde stella vinculum et.</p>",
              question:
                "Ascit avaritia adopto defungo mollitia nam thema vulnero.",
              options: [
                {
                  text: "verecundia voluptates validus",
                  isCorrect: false,
                },
                {
                  text: "deorsum absconditus vulgivagus",
                  isCorrect: false,
                },
                {
                  text: "uter defetiscor conqueror",
                  isCorrect: false,
                },
                {
                  text: "claustrum amicitia provident",
                  isCorrect: true,
                },
              ],
              explanation:
                "Vulnus suspendo incidunt pauci deficio civitas debilito succedo pel. Aegre quaerat cumque.",
              chosen: false,
              selected: false,
            },
            {
              id: "eca82717-b3d4-4d7b-bd49-797cc5255d89",
              type: "matching_pair",
              content:
                "<p>Adfero earum coadunatio aegre asperiores patior calculus peccatus.</p>",
              pairs: [
                {
                  left: "molestias",
                  right: "traho",
                },
                {
                  left: "celo",
                  right: "culpa",
                },
                {
                  left: "decipio",
                  right: "torrens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4e5a23fe-2776-4433-bea4-d99df846fc9f",
              type: "matching_pair",
              content: "<p>Ab copia aggredior.</p>",
              pairs: [
                {
                  left: "stipes",
                  right: "bis",
                },
                {
                  left: "denego",
                  right: "pel",
                },
                {
                  left: "praesentium",
                  right: "paens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "59f0c9f9-ef49-4dbf-a82d-2ef1e71aca8b",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "dolore",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "6c1ae60b-a89f-4520-ab62-ed404b8b2edb",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "spiculum",
                },
                {
                  answer: "aspernatur",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Ultio sophismata vesper. Vigor incidunt coniecto nobis cinis compono venia.",
            materials: "Pen, Notebook",
            assessment: "Apud vilis corrumpo.",
            extensions:
              "Arca repellendus arguo suppono argumentum cohaero suus delibero amaritudo abutor.",
            resources: "https://hard-to-find-swanling.name",
          },
        },
        teacherSection: {
          instructions:
            "Tyrannus addo correptius spiculum coma delego accommodo vulgaris. Asperiores spargo et brevis subnecto adeo fugit tutis labore.",
          guides: "Repellat derideo defendo depono cubo audio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Amaritudo paulatim carcer tollo.",
        },
        studentSection: {
          instructions:
            "Modi clibanus praesentium ocer tristis adulescens utor vinculum benevolentia adiuvo.",
          content:
            "Voro totidem facere angelus adinventitias asporto thalassinus combibo. Caute altus defleo thesaurus. Spero odio correptius.\nIpsa crustulum suffragium villa traho sunt minima crur tabernus textor. Sol vero eius certus. Alioqui valens tui culpo correptius suadeo.",
          worksheets: "https://flimsy-alligator.biz/",
          resources: "https://all-mozzarella.info",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "draft",
        createdAt: {
          $date: "2024-11-25T22:34:24.468Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.788Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f9",
        },
      },
      {
        title: "Version 1: temptatio utroque corrupti",
        _id: {
          $oid: "68c58dea8572145288f7c981",
        },
        id: {
          $oid: "68c58dea8572145288f7c980",
        },
        version: 1,
        basicInfo: {
          title: "Version 1: temptatio utroque corrupti",
          description:
            "Apparatus adiuvo alioqui charisma voro conor. Dolore vicinus talio vesica arcus virga. Baiulus architecto aggredior.",
          subject: "math",
          gradeLevel: "prek",
          type: "interactive",
          duration: "30 mins",
          difficulty: "intermediate",
          standardsType: "ngss",
          learningObjectives:
            "Saepe ater admitto vix ustilo aer arbitro tutamen creator.\nVigor defessus adhuc defessus stipes depulso tres canonicus cohors dignissimos.\nTabella victoria xiphias animus.\nAmo totam pax quasi timidus.\nCaritas aestas casus.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "b99d4781-f56b-412f-86a3-1e3207d2aac2",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Compello benevolentia coepi laboriosam patior debilito eaque curtus varius capillus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Voco carus aegrus. Denuncio cattus annus sollers comitatus ad creber conventus decumbo asporto. Odio voluptatibus aedificium cimentarius suffragium tamen stipes.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f9869b72-0e1a-4d39-81dd-dadc1179fc76",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Crur consectetur supra ter vitiosus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Tamquam demum absconditus nesciunt caelum auxilium aggero ipsa ad delego. Necessitatibus excepturi corrumpo bestia ulciscor abscido cruciamentum agnitio approbo. Stabilis caste talio trans.\n\nDistinctio desino adversus. Quaerat vado unus statua audeo cras. Supplanto virgo cruciamentum.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Ventus clementia desparatus. Eligendi cum crebro fugiat amoveo vallum tempore laborum defendo thymum. Id vorago decimus curso venia vulgivagus sophismata.\n\nTabula totam velociter decimus umbra similique turpis adhaero. Sub tutamen ipsam templum umquam cubicularis quas succedo. Vapulus capillus vix crudelis cunctatio esse appello.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "0c0fc439-b654-472f-9e2b-03c30ebae0cf",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PZ7lDrwYdZc",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "b2ebd49e-7923-4484-b9c5-835b9861fc60",
              type: "multiple_choice",
              content:
                "<p>Aranea villa fuga aufero cilicium attonbitus aestus.</p>",
              question:
                "Benigne vesper thesaurus careo bardus quibusdam correptius.",
              options: [
                {
                  text: "perferendis totam non aut assumenda",
                  isCorrect: false,
                },
                {
                  text: "crebro absens",
                  isCorrect: false,
                },
                {
                  text: "baiulus appello ultio patria",
                  isCorrect: false,
                },
                {
                  text: "talis voluntarius",
                  isCorrect: true,
                },
              ],
              explanation:
                "Colligo auxilium capitulus delicate patior assentator aperiam. Vis accusantium in ad cura.",
              chosen: false,
              selected: false,
            },
            {
              id: "d454a680-6911-4a46-85b8-e2593f69806d",
              type: "multiple_choice",
              content:
                "<p>Tricesimus corpus aegrus maiores laborum comes thema pecto admiratio ante.</p>",
              question: "Tamquam culpo nisi optio.",
              options: [
                {
                  text: "vesco delinquo patrocinor terreo calcar",
                  isCorrect: false,
                },
                {
                  text: "toties aperte advenio",
                  isCorrect: false,
                },
                {
                  text: "veritatis circumvenio vulpes una",
                  isCorrect: true,
                },
                {
                  text: "absorbeo caste theologus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Varietas conitor reprehenderit clam. Facere tollo comedo deorsum usitas tibi cervus spiculum deputo ubi.",
              chosen: false,
              selected: false,
            },
            {
              id: "015b572d-9820-49dc-a1c6-8018dcf61111",
              type: "matching_pair",
              content:
                "<p>Vestrum solus dolore spiculum corrumpo vulpes depereo.</p>",
              pairs: [
                {
                  left: "sufficio",
                  right: "cogo",
                },
                {
                  left: "terreo",
                  right: "validus",
                },
                {
                  left: "desparatus",
                  right: "laudantium",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "5fede3bf-dbb9-4d1f-b223-5570a747d2fa",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "doloremque",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "56c4a59f-6f06-4ab4-994d-2f018a905d43",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___] [___]</p>",
              text: "Fill in: [___] [___] [___]",
              blanks: [
                {
                  answer: "ipsam",
                },
                {
                  answer: "audio",
                },
                {
                  answer: "placeat",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Atqui catena vorax cibo sollers taedium vesica. Arbor quos statim aestivus venio sumo adflicto.",
            materials: "None",
            assessment:
              "Comitatus studio voveo vere thorax cimentarius deludo tenetur nam coniecto.",
            extensions:
              "Depono vulticulus vilitas averto delectus decimus arcesso depromo.",
            resources: "https://warm-tail.net",
          },
        },
        teacherSection: {
          instructions:
            "Sordeo velit decretum aestas versus demulceo. Decumbo tollo clementia demitto tantum abduco distinctio mollitia dolorem velociter.",
          guides: "Cado cauda deficio admoneo talis.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Aegrotatio labore contego coniuratio thesaurus speciosus.",
        },
        studentSection: {
          instructions: "Adiuvo vestrum cornu sopor.",
          content:
            "Audax amitto addo uredo nostrum verus corroboro utique quo verecundia. Debeo voro sordeo somniculosus acervus votum quod corpus commodi adnuo. Adnuo celebrer tenax uterque.\nVictus adfectus aedificium vado utrimque. Pecto tubineus cohaero qui deorsum labore deduco. Volva conculco subito.",
          worksheets: "https://boring-conversation.org",
          resources: "https://optimistic-anticodon.com/",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c978",
        },
        status: "finished",
        createdAt: {
          $date: "2025-07-02T06:41:11.174Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.791Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9fc",
        },
      },
    ],
  },
  {
    id: "ed0b3beb-6b81-4ec8-a12f-4929893afbf2",
    title: "Unit 2: curia despecto",
    activities: [
      {
        title:
          "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
        _id: {
          $oid: "68c58dea8572145288f7c97e",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 1,
        basicInfo: {
          title:
            "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
          description:
            "Trucido calco deprimo vociferor quasi acidus. Supellex acerbitas iste omnis suffragium nesciunt virgo. Rerum auctor depopulo officiis custodia terminatio praesentium tamen.",
          subject: "pe",
          gradeLevel: "prek",
          type: "interactive",
          duration: "20 mins",
          difficulty: "intermediate",
          standardsType: "common-core",
          learningObjectives:
            "Admiratio civitas suppellex assumenda cruentus dolorum cohaero.\nTurba cuius usus crebro amor defleo adsidue cogo.\nAiunt apostolus socius agnitio antiquus supra currus dedico decerno.\nAduro ciminatio amoveo vetus magni copiose.\nSuus cenaculum vigilo viridis crastinus quasi absens sed.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: false,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "fbe79280-d744-4523-97bb-f6bc4da0d9c7",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Venio sollicito considero somnus audio illum tyrannus aliquam denuo.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Chirographum sol capio vilicus charisma accusamus stips vilitas solutio circumvenio. Virgo charisma spiculum victus collum. Sopor ambitus concedo aegrus curiositas.\n\nConitor tubineus compono accusantium sumo. Praesentium trado arguo theologus deporto vetus demergo delicate approbo. Cibus chirographum benevolentia ager pecto conor vacuus venia libero.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Arbitro statua adaugeo audacia vado vilitas casso vulgaris clibanus dapifer. Demum thorax conscendo. Architecto abbas charisma contra attero error artificiose ceno amoveo error.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Crepusculum eligendi debeo vigor caecus tot amitto expedita. Custodia crebro angelus voluptas stabilis tepidus repellat conturbo enim reiciendis. Ascisco tamdiu accommodo.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f7ba4d00-f339-4be6-96e6-90de7fb06330",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PNx9f4CCxDg",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "4fb799f4-5f65-4306-8521-c74d4e6a03ab",
              type: "multiple_choice",
              content: "<p>Valetudo crux teneo thorax dolorem.</p>",
              question: "Aggredior totus torqueo ulterius ea abscido.",
              options: [
                {
                  text: "cursus suggero cui thermae attonbitus",
                  isCorrect: false,
                },
                {
                  text: "totus cinis error",
                  isCorrect: true,
                },
                {
                  text: "suggero tergiversatio",
                  isCorrect: false,
                },
                {
                  text: "teres praesentium baiulus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Tonsor super aestas thymum ceno considero bos avarus velociter. Copiose acerbitas fuga omnis tenuis urbs absque soleo crur caste.",
              chosen: false,
              selected: false,
            },
            {
              id: "b18a7b91-3b6b-4ac2-8d27-8aecfe26dd08",
              type: "multiple_choice",
              content:
                "<p>Contra dolorum adsum theca vespillo vicissitudo appello canis.</p>",
              question:
                "Vicinus quidem circumvenio soleo amet acquiro atqui sufficio hic magni.",
              options: [
                {
                  text: "aufero tenus creptio",
                  isCorrect: false,
                },
                {
                  text: "desipio blandior",
                  isCorrect: false,
                },
                {
                  text: "turpis vita verbera optio spiritus",
                  isCorrect: false,
                },
                {
                  text: "placeat caecus derideo",
                  isCorrect: true,
                },
              ],
              explanation:
                "Depopulo calamitas vulgaris calco. Timor approbo una tres suppellex angustus vae desparatus commodi cursus.",
              chosen: false,
              selected: false,
            },
            {
              id: "21a529be-df87-4e75-a06d-9487893b22a7",
              type: "matching_pair",
              content:
                "<p>Vomica tergeo voluptatem cumque cohaero cras summa tabgo.</p>",
              pairs: [
                {
                  left: "debeo",
                  right: "aufero",
                },
                {
                  left: "quo",
                  right: "sponte",
                },
                {
                  left: "acer",
                  right: "artificiose",
                },
                {
                  left: "tibi",
                  right: "vulgus",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "46c70f1a-008d-4ec2-b4f6-492c3d6dafe1",
              type: "matching_pair",
              content: "<p>Anser arx demergo.</p>",
              pairs: [
                {
                  left: "volup",
                  right: "suasoria",
                },
                {
                  left: "somniculosus",
                  right: "peccatus",
                },
                {
                  left: "tertius",
                  right: "volo",
                },
                {
                  left: "audax",
                  right: "architecto",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4ca7c64b-a0a6-4eb8-a45d-34c9def9ad02",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "studio",
                },
                {
                  answer: "creator",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Deorsum anser chirographum. Vereor ara civis decor suggero eius talus quam caelum.",
            materials: "Pen, Notebook",
            assessment: "Velit ut textus decet.",
            extensions: "Uter supra ipsa.",
            resources: "https://prudent-individual.org",
          },
        },
        teacherSection: {
          instructions: "Comis cultura caritas. Quos verus hic delego.",
          guides:
            "Voluptatibus assumenda vergo defero iure umbra debilito ultio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes:
            "Curia thesaurus verbum ambitus causa repellendus quis sumptus consuasor.",
        },
        studentSection: {
          instructions:
            "Stipes adficio uxor desolo at peior dignissimos animi spero.",
          content:
            "Annus admiratio cotidie laudantium vester possimus pariatur. Crepusculum vivo totidem campana catena sursum. Vomica ager clam verus contra cerno.\nVesco depono comitatus bos tertius thesis. Bellum ubi dignissimos carpo blanditiis caveo distinctio tergum. Nemo aperiam supplanto excepturi ciminatio asperiores corpus tantum audio vitiosus.",
          worksheets: "https://crazy-dredger.name/",
          resources: "https://big-secrecy.com",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "finished",
        createdAt: {
          $date: "2025-01-13T22:18:08.093Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.784Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f7",
        },
      },
      {
        title: "Version 2: amo doloribus culpa",
        _id: {
          $oid: "68c58dea8572145288f7c97f",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 2,
        basicInfo: {
          title: "Version 2: amo doloribus culpa",
          description:
            "Spargo spiritus et fugit a tamquam contra cultellus allatus demens. Comptus apostolus collum alo vado caute sponte cruciamentum. Crudelis cenaculum tergiversatio dolorum curiositas.",
          subject: "art",
          gradeLevel: "6-8",
          type: "assessment",
          duration: "30 mins",
          difficulty: "advanced",
          standardsType: "state",
          learningObjectives:
            "Totus dolor contego mollitia audio suscipit suffoco error aureus versus.\nCalco venustas traho porro conspergo.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: true,
            showHints: true,
          },
        },
        content: {
          blocks: [
            {
              id: "646b21ef-ef0d-4d08-a443-eaa511f1647e",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Thalassinus artificiose viscus caelestis tamquam.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Fugit conatus sum urbs audacia vigilo. Terga bos chirographum recusandae. Turba facere pel est cibus similique arx defero.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "63f485c2-53ad-48f2-9cbe-475c6f8ee460",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=ZAqIoDhornk",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "6fb9717e-d1d1-4e6e-ae7f-c3a40f2fdcd1",
              type: "multiple_choice",
              content: "<p>Comprehendo vicinus nemo cena.</p>",
              question:
                "Tenuis thorax sordeo commodo una contra necessitatibus cunabula.",
              options: [
                {
                  text: "studio capitulus verus abscido",
                  isCorrect: false,
                },
                {
                  text: "aggredior alveus tui",
                  isCorrect: false,
                },
                {
                  text: "degenero ventosus placeat arbustum",
                  isCorrect: false,
                },
                {
                  text: "argentum peior vinculum esse",
                  isCorrect: true,
                },
              ],
              explanation:
                "Arcus subnecto caute damnatio. Voluntarius nobis vorago sub.",
              chosen: false,
              selected: false,
            },
            {
              id: "6aadbb22-1d3a-4afd-a67f-017d44b0b80c",
              type: "multiple_choice",
              content:
                "<p>Ex victoria delectus barba cultellus dolor deinde stella vinculum et.</p>",
              question:
                "Ascit avaritia adopto defungo mollitia nam thema vulnero.",
              options: [
                {
                  text: "verecundia voluptates validus",
                  isCorrect: false,
                },
                {
                  text: "deorsum absconditus vulgivagus",
                  isCorrect: false,
                },
                {
                  text: "uter defetiscor conqueror",
                  isCorrect: false,
                },
                {
                  text: "claustrum amicitia provident",
                  isCorrect: true,
                },
              ],
              explanation:
                "Vulnus suspendo incidunt pauci deficio civitas debilito succedo pel. Aegre quaerat cumque.",
              chosen: false,
              selected: false,
            },
            {
              id: "eca82717-b3d4-4d7b-bd49-797cc5255d89",
              type: "matching_pair",
              content:
                "<p>Adfero earum coadunatio aegre asperiores patior calculus peccatus.</p>",
              pairs: [
                {
                  left: "molestias",
                  right: "traho",
                },
                {
                  left: "celo",
                  right: "culpa",
                },
                {
                  left: "decipio",
                  right: "torrens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4e5a23fe-2776-4433-bea4-d99df846fc9f",
              type: "matching_pair",
              content: "<p>Ab copia aggredior.</p>",
              pairs: [
                {
                  left: "stipes",
                  right: "bis",
                },
                {
                  left: "denego",
                  right: "pel",
                },
                {
                  left: "praesentium",
                  right: "paens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "59f0c9f9-ef49-4dbf-a82d-2ef1e71aca8b",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "dolore",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "6c1ae60b-a89f-4520-ab62-ed404b8b2edb",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "spiculum",
                },
                {
                  answer: "aspernatur",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Ultio sophismata vesper. Vigor incidunt coniecto nobis cinis compono venia.",
            materials: "Pen, Notebook",
            assessment: "Apud vilis corrumpo.",
            extensions:
              "Arca repellendus arguo suppono argumentum cohaero suus delibero amaritudo abutor.",
            resources: "https://hard-to-find-swanling.name",
          },
        },
        teacherSection: {
          instructions:
            "Tyrannus addo correptius spiculum coma delego accommodo vulgaris. Asperiores spargo et brevis subnecto adeo fugit tutis labore.",
          guides: "Repellat derideo defendo depono cubo audio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Amaritudo paulatim carcer tollo.",
        },
        studentSection: {
          instructions:
            "Modi clibanus praesentium ocer tristis adulescens utor vinculum benevolentia adiuvo.",
          content:
            "Voro totidem facere angelus adinventitias asporto thalassinus combibo. Caute altus defleo thesaurus. Spero odio correptius.\nIpsa crustulum suffragium villa traho sunt minima crur tabernus textor. Sol vero eius certus. Alioqui valens tui culpo correptius suadeo.",
          worksheets: "https://flimsy-alligator.biz/",
          resources: "https://all-mozzarella.info",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "draft",
        createdAt: {
          $date: "2024-11-25T22:34:24.468Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.788Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f9",
        },
      },
      {
        title: "Version 1: temptatio utroque corrupti",
        _id: {
          $oid: "68c58dea8572145288f7c981",
        },
        id: {
          $oid: "68c58dea8572145288f7c980",
        },
        version: 1,
        basicInfo: {
          title: "Version 1: temptatio utroque corrupti",
          description:
            "Apparatus adiuvo alioqui charisma voro conor. Dolore vicinus talio vesica arcus virga. Baiulus architecto aggredior.",
          subject: "math",
          gradeLevel: "prek",
          type: "interactive",
          duration: "30 mins",
          difficulty: "intermediate",
          standardsType: "ngss",
          learningObjectives:
            "Saepe ater admitto vix ustilo aer arbitro tutamen creator.\nVigor defessus adhuc defessus stipes depulso tres canonicus cohors dignissimos.\nTabella victoria xiphias animus.\nAmo totam pax quasi timidus.\nCaritas aestas casus.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "b99d4781-f56b-412f-86a3-1e3207d2aac2",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Compello benevolentia coepi laboriosam patior debilito eaque curtus varius capillus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Voco carus aegrus. Denuncio cattus annus sollers comitatus ad creber conventus decumbo asporto. Odio voluptatibus aedificium cimentarius suffragium tamen stipes.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f9869b72-0e1a-4d39-81dd-dadc1179fc76",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Crur consectetur supra ter vitiosus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Tamquam demum absconditus nesciunt caelum auxilium aggero ipsa ad delego. Necessitatibus excepturi corrumpo bestia ulciscor abscido cruciamentum agnitio approbo. Stabilis caste talio trans.\n\nDistinctio desino adversus. Quaerat vado unus statua audeo cras. Supplanto virgo cruciamentum.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Ventus clementia desparatus. Eligendi cum crebro fugiat amoveo vallum tempore laborum defendo thymum. Id vorago decimus curso venia vulgivagus sophismata.\n\nTabula totam velociter decimus umbra similique turpis adhaero. Sub tutamen ipsam templum umquam cubicularis quas succedo. Vapulus capillus vix crudelis cunctatio esse appello.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "0c0fc439-b654-472f-9e2b-03c30ebae0cf",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PZ7lDrwYdZc",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "b2ebd49e-7923-4484-b9c5-835b9861fc60",
              type: "multiple_choice",
              content:
                "<p>Aranea villa fuga aufero cilicium attonbitus aestus.</p>",
              question:
                "Benigne vesper thesaurus careo bardus quibusdam correptius.",
              options: [
                {
                  text: "perferendis totam non aut assumenda",
                  isCorrect: false,
                },
                {
                  text: "crebro absens",
                  isCorrect: false,
                },
                {
                  text: "baiulus appello ultio patria",
                  isCorrect: false,
                },
                {
                  text: "talis voluntarius",
                  isCorrect: true,
                },
              ],
              explanation:
                "Colligo auxilium capitulus delicate patior assentator aperiam. Vis accusantium in ad cura.",
              chosen: false,
              selected: false,
            },
            {
              id: "d454a680-6911-4a46-85b8-e2593f69806d",
              type: "multiple_choice",
              content:
                "<p>Tricesimus corpus aegrus maiores laborum comes thema pecto admiratio ante.</p>",
              question: "Tamquam culpo nisi optio.",
              options: [
                {
                  text: "vesco delinquo patrocinor terreo calcar",
                  isCorrect: false,
                },
                {
                  text: "toties aperte advenio",
                  isCorrect: false,
                },
                {
                  text: "veritatis circumvenio vulpes una",
                  isCorrect: true,
                },
                {
                  text: "absorbeo caste theologus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Varietas conitor reprehenderit clam. Facere tollo comedo deorsum usitas tibi cervus spiculum deputo ubi.",
              chosen: false,
              selected: false,
            },
            {
              id: "015b572d-9820-49dc-a1c6-8018dcf61111",
              type: "matching_pair",
              content:
                "<p>Vestrum solus dolore spiculum corrumpo vulpes depereo.</p>",
              pairs: [
                {
                  left: "sufficio",
                  right: "cogo",
                },
                {
                  left: "terreo",
                  right: "validus",
                },
                {
                  left: "desparatus",
                  right: "laudantium",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "5fede3bf-dbb9-4d1f-b223-5570a747d2fa",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "doloremque",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "56c4a59f-6f06-4ab4-994d-2f018a905d43",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___] [___]</p>",
              text: "Fill in: [___] [___] [___]",
              blanks: [
                {
                  answer: "ipsam",
                },
                {
                  answer: "audio",
                },
                {
                  answer: "placeat",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Atqui catena vorax cibo sollers taedium vesica. Arbor quos statim aestivus venio sumo adflicto.",
            materials: "None",
            assessment:
              "Comitatus studio voveo vere thorax cimentarius deludo tenetur nam coniecto.",
            extensions:
              "Depono vulticulus vilitas averto delectus decimus arcesso depromo.",
            resources: "https://warm-tail.net",
          },
        },
        teacherSection: {
          instructions:
            "Sordeo velit decretum aestas versus demulceo. Decumbo tollo clementia demitto tantum abduco distinctio mollitia dolorem velociter.",
          guides: "Cado cauda deficio admoneo talis.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Aegrotatio labore contego coniuratio thesaurus speciosus.",
        },
        studentSection: {
          instructions: "Adiuvo vestrum cornu sopor.",
          content:
            "Audax amitto addo uredo nostrum verus corroboro utique quo verecundia. Debeo voro sordeo somniculosus acervus votum quod corpus commodi adnuo. Adnuo celebrer tenax uterque.\nVictus adfectus aedificium vado utrimque. Pecto tubineus cohaero qui deorsum labore deduco. Volva conculco subito.",
          worksheets: "https://boring-conversation.org",
          resources: "https://optimistic-anticodon.com/",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c978",
        },
        status: "finished",
        createdAt: {
          $date: "2025-07-02T06:41:11.174Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.791Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9fc",
        },
      },
    ],
  },
  {
    id: "8b23c3de-ea83-4bbd-8395-e42b1cd7a74a",
    title: "Unit 3: umerus aperte",
    activities: [
      {
        title:
          "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
        _id: {
          $oid: "68c58dea8572145288f7c97e",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 1,
        basicInfo: {
          title:
            "Version 1: cognomen reprehenderit caste alii quis universe comburo perspiciatis",
          description:
            "Trucido calco deprimo vociferor quasi acidus. Supellex acerbitas iste omnis suffragium nesciunt virgo. Rerum auctor depopulo officiis custodia terminatio praesentium tamen.",
          subject: "pe",
          gradeLevel: "prek",
          type: "interactive",
          duration: "20 mins",
          difficulty: "intermediate",
          standardsType: "common-core",
          learningObjectives:
            "Admiratio civitas suppellex assumenda cruentus dolorum cohaero.\nTurba cuius usus crebro amor defleo adsidue cogo.\nAiunt apostolus socius agnitio antiquus supra currus dedico decerno.\nAduro ciminatio amoveo vetus magni copiose.\nSuus cenaculum vigilo viridis crastinus quasi absens sed.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: false,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "fbe79280-d744-4523-97bb-f6bc4da0d9c7",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Venio sollicito considero somnus audio illum tyrannus aliquam denuo.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Chirographum sol capio vilicus charisma accusamus stips vilitas solutio circumvenio. Virgo charisma spiculum victus collum. Sopor ambitus concedo aegrus curiositas.\n\nConitor tubineus compono accusantium sumo. Praesentium trado arguo theologus deporto vetus demergo delicate approbo. Cibus chirographum benevolentia ager pecto conor vacuus venia libero.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Arbitro statua adaugeo audacia vado vilitas casso vulgaris clibanus dapifer. Demum thorax conscendo. Architecto abbas charisma contra attero error artificiose ceno amoveo error.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Crepusculum eligendi debeo vigor caecus tot amitto expedita. Custodia crebro angelus voluptas stabilis tepidus repellat conturbo enim reiciendis. Ascisco tamdiu accommodo.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f7ba4d00-f339-4be6-96e6-90de7fb06330",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PNx9f4CCxDg",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "4fb799f4-5f65-4306-8521-c74d4e6a03ab",
              type: "multiple_choice",
              content: "<p>Valetudo crux teneo thorax dolorem.</p>",
              question: "Aggredior totus torqueo ulterius ea abscido.",
              options: [
                {
                  text: "cursus suggero cui thermae attonbitus",
                  isCorrect: false,
                },
                {
                  text: "totus cinis error",
                  isCorrect: true,
                },
                {
                  text: "suggero tergiversatio",
                  isCorrect: false,
                },
                {
                  text: "teres praesentium baiulus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Tonsor super aestas thymum ceno considero bos avarus velociter. Copiose acerbitas fuga omnis tenuis urbs absque soleo crur caste.",
              chosen: false,
              selected: false,
            },
            {
              id: "b18a7b91-3b6b-4ac2-8d27-8aecfe26dd08",
              type: "multiple_choice",
              content:
                "<p>Contra dolorum adsum theca vespillo vicissitudo appello canis.</p>",
              question:
                "Vicinus quidem circumvenio soleo amet acquiro atqui sufficio hic magni.",
              options: [
                {
                  text: "aufero tenus creptio",
                  isCorrect: false,
                },
                {
                  text: "desipio blandior",
                  isCorrect: false,
                },
                {
                  text: "turpis vita verbera optio spiritus",
                  isCorrect: false,
                },
                {
                  text: "placeat caecus derideo",
                  isCorrect: true,
                },
              ],
              explanation:
                "Depopulo calamitas vulgaris calco. Timor approbo una tres suppellex angustus vae desparatus commodi cursus.",
              chosen: false,
              selected: false,
            },
            {
              id: "21a529be-df87-4e75-a06d-9487893b22a7",
              type: "matching_pair",
              content:
                "<p>Vomica tergeo voluptatem cumque cohaero cras summa tabgo.</p>",
              pairs: [
                {
                  left: "debeo",
                  right: "aufero",
                },
                {
                  left: "quo",
                  right: "sponte",
                },
                {
                  left: "acer",
                  right: "artificiose",
                },
                {
                  left: "tibi",
                  right: "vulgus",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "46c70f1a-008d-4ec2-b4f6-492c3d6dafe1",
              type: "matching_pair",
              content: "<p>Anser arx demergo.</p>",
              pairs: [
                {
                  left: "volup",
                  right: "suasoria",
                },
                {
                  left: "somniculosus",
                  right: "peccatus",
                },
                {
                  left: "tertius",
                  right: "volo",
                },
                {
                  left: "audax",
                  right: "architecto",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4ca7c64b-a0a6-4eb8-a45d-34c9def9ad02",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "studio",
                },
                {
                  answer: "creator",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Deorsum anser chirographum. Vereor ara civis decor suggero eius talus quam caelum.",
            materials: "Pen, Notebook",
            assessment: "Velit ut textus decet.",
            extensions: "Uter supra ipsa.",
            resources: "https://prudent-individual.org",
          },
        },
        teacherSection: {
          instructions: "Comis cultura caritas. Quos verus hic delego.",
          guides:
            "Voluptatibus assumenda vergo defero iure umbra debilito ultio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes:
            "Curia thesaurus verbum ambitus causa repellendus quis sumptus consuasor.",
        },
        studentSection: {
          instructions:
            "Stipes adficio uxor desolo at peior dignissimos animi spero.",
          content:
            "Annus admiratio cotidie laudantium vester possimus pariatur. Crepusculum vivo totidem campana catena sursum. Vomica ager clam verus contra cerno.\nVesco depono comitatus bos tertius thesis. Bellum ubi dignissimos carpo blanditiis caveo distinctio tergum. Nemo aperiam supplanto excepturi ciminatio asperiores corpus tantum audio vitiosus.",
          worksheets: "https://crazy-dredger.name/",
          resources: "https://big-secrecy.com",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "finished",
        createdAt: {
          $date: "2025-01-13T22:18:08.093Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.784Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f7",
        },
      },
      {
        title: "Version 2: amo doloribus culpa",
        _id: {
          $oid: "68c58dea8572145288f7c97f",
        },
        id: {
          $oid: "68c58dea8572145288f7c97d",
        },
        version: 2,
        basicInfo: {
          title: "Version 2: amo doloribus culpa",
          description:
            "Spargo spiritus et fugit a tamquam contra cultellus allatus demens. Comptus apostolus collum alo vado caute sponte cruciamentum. Crudelis cenaculum tergiversatio dolorum curiositas.",
          subject: "art",
          gradeLevel: "6-8",
          type: "assessment",
          duration: "30 mins",
          difficulty: "advanced",
          standardsType: "state",
          learningObjectives:
            "Totus dolor contego mollitia audio suscipit suffoco error aureus versus.\nCalco venustas traho porro conspergo.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: true,
            showHints: true,
          },
        },
        content: {
          blocks: [
            {
              id: "646b21ef-ef0d-4d08-a443-eaa511f1647e",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Thalassinus artificiose viscus caelestis tamquam.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Fugit conatus sum urbs audacia vigilo. Terga bos chirographum recusandae. Turba facere pel est cibus similique arx defero.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "63f485c2-53ad-48f2-9cbe-475c6f8ee460",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=ZAqIoDhornk",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "6fb9717e-d1d1-4e6e-ae7f-c3a40f2fdcd1",
              type: "multiple_choice",
              content: "<p>Comprehendo vicinus nemo cena.</p>",
              question:
                "Tenuis thorax sordeo commodo una contra necessitatibus cunabula.",
              options: [
                {
                  text: "studio capitulus verus abscido",
                  isCorrect: false,
                },
                {
                  text: "aggredior alveus tui",
                  isCorrect: false,
                },
                {
                  text: "degenero ventosus placeat arbustum",
                  isCorrect: false,
                },
                {
                  text: "argentum peior vinculum esse",
                  isCorrect: true,
                },
              ],
              explanation:
                "Arcus subnecto caute damnatio. Voluntarius nobis vorago sub.",
              chosen: false,
              selected: false,
            },
            {
              id: "6aadbb22-1d3a-4afd-a67f-017d44b0b80c",
              type: "multiple_choice",
              content:
                "<p>Ex victoria delectus barba cultellus dolor deinde stella vinculum et.</p>",
              question:
                "Ascit avaritia adopto defungo mollitia nam thema vulnero.",
              options: [
                {
                  text: "verecundia voluptates validus",
                  isCorrect: false,
                },
                {
                  text: "deorsum absconditus vulgivagus",
                  isCorrect: false,
                },
                {
                  text: "uter defetiscor conqueror",
                  isCorrect: false,
                },
                {
                  text: "claustrum amicitia provident",
                  isCorrect: true,
                },
              ],
              explanation:
                "Vulnus suspendo incidunt pauci deficio civitas debilito succedo pel. Aegre quaerat cumque.",
              chosen: false,
              selected: false,
            },
            {
              id: "eca82717-b3d4-4d7b-bd49-797cc5255d89",
              type: "matching_pair",
              content:
                "<p>Adfero earum coadunatio aegre asperiores patior calculus peccatus.</p>",
              pairs: [
                {
                  left: "molestias",
                  right: "traho",
                },
                {
                  left: "celo",
                  right: "culpa",
                },
                {
                  left: "decipio",
                  right: "torrens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "4e5a23fe-2776-4433-bea4-d99df846fc9f",
              type: "matching_pair",
              content: "<p>Ab copia aggredior.</p>",
              pairs: [
                {
                  left: "stipes",
                  right: "bis",
                },
                {
                  left: "denego",
                  right: "pel",
                },
                {
                  left: "praesentium",
                  right: "paens",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "59f0c9f9-ef49-4dbf-a82d-2ef1e71aca8b",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "dolore",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "6c1ae60b-a89f-4520-ab62-ed404b8b2edb",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___]</p>",
              text: "Fill in: [___] [___]",
              blanks: [
                {
                  answer: "spiculum",
                },
                {
                  answer: "aspernatur",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Ultio sophismata vesper. Vigor incidunt coniecto nobis cinis compono venia.",
            materials: "Pen, Notebook",
            assessment: "Apud vilis corrumpo.",
            extensions:
              "Arca repellendus arguo suppono argumentum cohaero suus delibero amaritudo abutor.",
            resources: "https://hard-to-find-swanling.name",
          },
        },
        teacherSection: {
          instructions:
            "Tyrannus addo correptius spiculum coma delego accommodo vulgaris. Asperiores spargo et brevis subnecto adeo fugit tutis labore.",
          guides: "Repellat derideo defendo depono cubo audio.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Amaritudo paulatim carcer tollo.",
        },
        studentSection: {
          instructions:
            "Modi clibanus praesentium ocer tristis adulescens utor vinculum benevolentia adiuvo.",
          content:
            "Voro totidem facere angelus adinventitias asporto thalassinus combibo. Caute altus defleo thesaurus. Spero odio correptius.\nIpsa crustulum suffragium villa traho sunt minima crur tabernus textor. Sol vero eius certus. Alioqui valens tui culpo correptius suadeo.",
          worksheets: "https://flimsy-alligator.biz/",
          resources: "https://all-mozzarella.info",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c979",
        },
        status: "draft",
        createdAt: {
          $date: "2024-11-25T22:34:24.468Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.788Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9f9",
        },
      },
      {
        title: "Version 1: temptatio utroque corrupti",
        _id: {
          $oid: "68c58dea8572145288f7c981",
        },
        id: {
          $oid: "68c58dea8572145288f7c980",
        },
        version: 1,
        basicInfo: {
          title: "Version 1: temptatio utroque corrupti",
          description:
            "Apparatus adiuvo alioqui charisma voro conor. Dolore vicinus talio vesica arcus virga. Baiulus architecto aggredior.",
          subject: "math",
          gradeLevel: "prek",
          type: "interactive",
          duration: "30 mins",
          difficulty: "intermediate",
          standardsType: "ngss",
          learningObjectives:
            "Saepe ater admitto vix ustilo aer arbitro tutamen creator.\nVigor defessus adhuc defessus stipes depulso tres canonicus cohors dignissimos.\nTabella victoria xiphias animus.\nAmo totam pax quasi timidus.\nCaritas aestas casus.",
          standardAlignments: [],
          activitySettings: {
            randomizeQuestions: true,
            immediateFeedback: false,
            showHints: false,
          },
        },
        content: {
          blocks: [
            {
              id: "b99d4781-f56b-412f-86a3-1e3207d2aac2",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Compello benevolentia coepi laboriosam patior debilito eaque curtus varius capillus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Voco carus aegrus. Denuncio cattus annus sollers comitatus ad creber conventus decumbo asporto. Odio voluptatibus aedificium cimentarius suffragium tamen stipes.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "f9869b72-0e1a-4d39-81dd-dadc1179fc76",
              type: "text",
              content: {
                type: "doc",
                content: [
                  {
                    type: "heading",
                    attrs: {
                      level: 2,
                    },
                    content: [
                      {
                        type: "text",
                        text: "Crur consectetur supra ter vitiosus.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Tamquam demum absconditus nesciunt caelum auxilium aggero ipsa ad delego. Necessitatibus excepturi corrumpo bestia ulciscor abscido cruciamentum agnitio approbo. Stabilis caste talio trans.\n\nDistinctio desino adversus. Quaerat vado unus statua audeo cras. Supplanto virgo cruciamentum.",
                      },
                    ],
                  },
                  {
                    type: "paragraph",
                    content: [
                      {
                        type: "text",
                        text: "Ventus clementia desparatus. Eligendi cum crebro fugiat amoveo vallum tempore laborum defendo thymum. Id vorago decimus curso venia vulgivagus sophismata.\n\nTabula totam velociter decimus umbra similique turpis adhaero. Sub tutamen ipsam templum umquam cubicularis quas succedo. Vapulus capillus vix crudelis cunctatio esse appello.",
                      },
                    ],
                  },
                ],
              },
              chosen: false,
              selected: false,
            },
            {
              id: "0c0fc439-b654-472f-9e2b-03c30ebae0cf",
              type: "text",
              chosen: false,
              selected: false,
              content: {
                type: "doc",
                content: [
                  {
                    type: "youtube",
                    attrs: {
                      src: "https://www.youtube.com/watch?v=PZ7lDrwYdZc",
                      width: 640,
                      height: 360,
                      start: 0,
                      end: null,
                      suggestedQuality: "hd720",
                    },
                  },
                ],
              },
            },
            {
              id: "b2ebd49e-7923-4484-b9c5-835b9861fc60",
              type: "multiple_choice",
              content:
                "<p>Aranea villa fuga aufero cilicium attonbitus aestus.</p>",
              question:
                "Benigne vesper thesaurus careo bardus quibusdam correptius.",
              options: [
                {
                  text: "perferendis totam non aut assumenda",
                  isCorrect: false,
                },
                {
                  text: "crebro absens",
                  isCorrect: false,
                },
                {
                  text: "baiulus appello ultio patria",
                  isCorrect: false,
                },
                {
                  text: "talis voluntarius",
                  isCorrect: true,
                },
              ],
              explanation:
                "Colligo auxilium capitulus delicate patior assentator aperiam. Vis accusantium in ad cura.",
              chosen: false,
              selected: false,
            },
            {
              id: "d454a680-6911-4a46-85b8-e2593f69806d",
              type: "multiple_choice",
              content:
                "<p>Tricesimus corpus aegrus maiores laborum comes thema pecto admiratio ante.</p>",
              question: "Tamquam culpo nisi optio.",
              options: [
                {
                  text: "vesco delinquo patrocinor terreo calcar",
                  isCorrect: false,
                },
                {
                  text: "toties aperte advenio",
                  isCorrect: false,
                },
                {
                  text: "veritatis circumvenio vulpes una",
                  isCorrect: true,
                },
                {
                  text: "absorbeo caste theologus",
                  isCorrect: false,
                },
              ],
              explanation:
                "Varietas conitor reprehenderit clam. Facere tollo comedo deorsum usitas tibi cervus spiculum deputo ubi.",
              chosen: false,
              selected: false,
            },
            {
              id: "015b572d-9820-49dc-a1c6-8018dcf61111",
              type: "matching_pair",
              content:
                "<p>Vestrum solus dolore spiculum corrumpo vulpes depereo.</p>",
              pairs: [
                {
                  left: "sufficio",
                  right: "cogo",
                },
                {
                  left: "terreo",
                  right: "validus",
                },
                {
                  left: "desparatus",
                  right: "laudantium",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "5fede3bf-dbb9-4d1f-b223-5570a747d2fa",
              type: "fill_in_blank",
              content: "<p>Fill in: [___]</p>",
              text: "Fill in: [___]",
              blanks: [
                {
                  answer: "doloremque",
                },
              ],
              chosen: false,
              selected: false,
            },
            {
              id: "56c4a59f-6f06-4ab4-994d-2f018a905d43",
              type: "fill_in_blank",
              content: "<p>Fill in: [___] [___] [___]</p>",
              text: "Fill in: [___] [___] [___]",
              blanks: [
                {
                  answer: "ipsam",
                },
                {
                  answer: "audio",
                },
                {
                  answer: "placeat",
                },
              ],
              chosen: false,
              selected: false,
            },
          ],
          additionalContent: {
            instructions:
              "Atqui catena vorax cibo sollers taedium vesica. Arbor quos statim aestivus venio sumo adflicto.",
            materials: "None",
            assessment:
              "Comitatus studio voveo vere thorax cimentarius deludo tenetur nam coniecto.",
            extensions:
              "Depono vulticulus vilitas averto delectus decimus arcesso depromo.",
            resources: "https://warm-tail.net",
          },
        },
        teacherSection: {
          instructions:
            "Sordeo velit decretum aestas versus demulceo. Decumbo tollo clementia demitto tantum abduco distinctio mollitia dolorem velociter.",
          guides: "Cado cauda deficio admoneo talis.",
          answerKeys: "Answers are inside the interactive blocks.",
          notes: "Aegrotatio labore contego coniuratio thesaurus speciosus.",
        },
        studentSection: {
          instructions: "Adiuvo vestrum cornu sopor.",
          content:
            "Audax amitto addo uredo nostrum verus corroboro utique quo verecundia. Debeo voro sordeo somniculosus acervus votum quod corpus commodi adnuo. Adnuo celebrer tenax uterque.\nVictus adfectus aedificium vado utrimque. Pecto tubineus cohaero qui deorsum labore deduco. Volva conculco subito.",
          worksheets: "https://boring-conversation.org",
          resources: "https://optimistic-anticodon.com/",
        },
        createdBy: {
          $oid: "68c58dea8572145288f7c974",
        },
        organization: {
          $oid: "68c58dea8572145288f7c978",
        },
        status: "finished",
        createdAt: {
          $date: "2025-07-02T06:41:11.174Z",
        },
        updatedAt: {
          $date: "2025-09-13T15:29:46.791Z",
        },
        __v: 0,
        promptId: {
          $oid: "68c58dea8572145288f7c9fc",
        },
      },
    ],
  },
];

const createCard = async (req, res) => {
  try {
    const card = await Card.create(req.body);
    res.status(201).json(card);
  } catch (error) {
    res.status(500).json(error);
  }
};

//  update card
const updateCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await Card.findByIdAndUpdate(cardId, req.body, { new: true });
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json(error);
  }
};
// delete card
const deleteCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const card = await Card.findByIdAndDelete(cardId);
    res.status(200).json(card);
  } catch (error) {
    res.status(500).json(error);
  }
};

// create list
const createList = async (req, res) => {
  try {
    const list = await List.create(req.body);
    res.status(201).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
};

// update list
const updateList = async (req, res) => {
  try {
    const { listId } = req.params;
    const list = await List.findByIdAndUpdate(listId, req.body, { new: true });
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
};
// delete list
const deleteList = async (req, res) => {
  try {
    const { listId } = req.params;
    const list = await List.findByIdAndDelete(listId);
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json(error);
  }
};

const moveCard = async (req, res) => {
  try {
    const { cardId } = req.params;
    const { indexInList, newListId } = req.body;

    if (!cardId || (!indexInList && indexInList !== 0) || !newListId) {
      return res.status(400).json({
        success: false,
        message: "Card ID, index in list, and new list ID are required",
      });
    }

    // Find the card to move
    const card = await Card.findById(cardId);

    if (!card) {
      return res.status(404).json({
        success: false,
        message: "Card not found",
      });
    }
    const listCards = await Card.find({ listId: newListId }).sort({
      position: 1,
    });

    let cardPosition = 1;
    if (listCards.length !== 0) {
      if (indexInList === 0) {
        cardPosition = listCards[0].position / 2;
      } else if (indexInList === listCards.length) {
        cardPosition = listCards[listCards.length - 1].position + 1;
      } else {
        cardPosition =
          (listCards[indexInList - 1].position +
            listCards[indexInList].position) /
          2;
      }
    }
    console.log("indexInList", indexInList);
    console.log("listCards", listCards);
    console.log("cardPosition", cardPosition);
    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      { listId: newListId, position: cardPosition },
      {
        new: true,
        runValidators: true,
      }
    ).populate("listId boardId assignedTo createdBy");

    res.status(200).json(updatedCard);
  } catch (error) {
    console.error("Error moving card:", error);
    res.status(500).json({
      success: false,
      message: "Failed to move card",
      error: error.message,
    });
  }
};
// create all boards
const createBoards = async (req, res) => {
  try {
    const boards = await Board.create(req.body);
    console.log("boards", boards);
    // create  defaul lists (to Do, In Progress, In Review, Done) with board
    const defaultLists = [
      {
        title: "To Do",
        boardId: boards._id,
        position: 1,
        createdBy: boards.createdBy,
      },
      {
        title: "In Progress",
        boardId: boards._id,
        position: 2,
        createdBy: boards.createdBy,
      },
      {
        title: "In Review",
        boardId: boards._id,
        position: 3,
        createdBy: boards.createdBy,
      },
      {
        title: "Done",
        boardId: boards._id,
        position: 4,
        createdBy: boards.createdBy,
      },
    ];
    // create many lists
    await List.insertMany(defaultLists);
    res.status(200).json(boards);
  } catch (error) {
    console.error("Error creating all boards:", error);
    res.status(500).json(error);
  }
};
// get all boards
const getAllBoards = async (req, res) => {
  const { page = 1, limit = 10, search } = req.query;
  const { userId } = req.user;

  // only member of the board can see the board
  const skip = (page - 1) * limit;
  const query = {};
  if (search) {
    query.name = { $regex: search, $options: "i" };
  }

  if (userId) {
    query.members = { $elemMatch: { userId: userId } };
  }

  try {
    const boards = await Board.find(query)
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 })
      .populate("members")
      .populate("createdBy");
    // get all list of the board

    res.status(200).json(boards);
  } catch (error) {
    console.error("Error fetching all boards:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch all boards",
      error: error.message,
    });
  }
};

// get board by id
const getBoardById = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.query;

    const board = await Board.findById(id);
    if (!board) {
      return res.status(404).json({
        success: false,
        message: "Board not found",
      });
    }

    // get all lists of the board
    const lists = await List.find({ boardId: id }).sort({ position: 1 });

    // fill each list with its cards
    const listsWithCards = await Promise.all(
      lists.map(async (list) => {
        const cards = await Card.find({
          listId: list._id,
          $or: [
            { assignedTo: userId }, // cards assigned to this user
            { assignedTo: { $exists: false } }, // cards without assignedTo
            { assignedTo: null }, // cards explicitly null
          ],
        }).sort({ position: 1 });
        return {
          ...list.toObject(),
          cards,
        };
      })
    );

    res.status(200).json({ ...board._doc, lists: listsWithCards });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error",
      error: err.message,
    });
  }
};

// update board
const updateBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const board = await Board.findByIdAndUpdate(id, req.body, { new: true })
      .populate("members")
      .populate("createdBy");
    if (!board) {
      return res.status(404).json({
        success: false,
        message: "Board not found",
      });
    }
    res.status(200).json(board);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
// delete board
const deleteBoard = async (req, res) => {
  try {
    const { id } = req.params;
    const board = await Board.findByIdAndDelete(id);
    res.status(200).json(board);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete board",
      error: error.message,
    });
  }
};
// genrate board for unit
const genrateBoardForUnit = async (req, res) => {
  try {
    const { unitId } = req.params;

    const unit = units.find((unit) => unit.id === unitId);
    if (!unit) {
      return res.status(404).json("Unit not found");
    }
    var board;
    board = await Board.findOne({ unitId: unitId });
    if (!board) {
      board = await Board.create({
        title: unit.title,
        unitId: unitId,
        createdBy: req.user.userId,
        members: {
          userId: req.user.userId,
          role: "owner",
        },
      });
    }

    const defaultLists = [
      {
        title: "To Do",
        boardId: board._id,
        position: 1,
        createdBy: board.createdBy,
      },
      {
        title: "In Progress",
        boardId: board._id,
        position: 2,
        createdBy: board.createdBy,
      },
      {
        title: "In Review",
        boardId: board._id,
        position: 3,
        createdBy: board.createdBy,
      },
      {
        title: "Done",
        boardId: board._id,
        position: 4,
        createdBy: board.createdBy,
      },
    ];

    const lists = await List.insertMany(defaultLists);
    // create many cards for each activity
    await Card.insertMany(
      unit.activities.map((activity, index) => ({
        title: activity.basicInfo.title,
        boardId: board._id,
        listId: lists[0]._id,
        createdBy: board.createdBy,
        activityId: activity.$oid,
        position: Number(index + 1),
      }))
    );
    res.status(200).json(board);
  } catch (error) {
    console.log("error", error);
    res.status(500).json(error.message);
  }
};

module.exports = {
  moveCard,
  createBoards,
  getAllBoards,
  getBoardById,
  createCard,
  updateCard,
  deleteCard,
  createList,
  updateList,
  deleteList,
  updateBoard,
  deleteBoard,
  genrateBoardForUnit,
};
