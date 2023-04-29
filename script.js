const contries = document.querySelector('#contries');
const states = document.querySelector('#states');
const cities = document.querySelector('#cities');


//data provided
const initialData = [
    {
        "id": 1,
        "name": "Afghanistan",
        "iso3": "AFG",
        "iso2": "AF",
        "phone_code": "93",
        "capital": "Kabul",
        "currency": "AFN",
        "currency_symbol": "؋",
        "tld": ".af",
        "native": "افغانستان",
        "region": "Asia",
        "subregion": "Southern Asia",
        "timezones": [
            {
                "zoneName": "Asia/Kabul",
                "gmtOffset": 16200,
                "gmtOffsetName": "UTC+04:30",
                "abbreviation": "AFT",
                "tzName": "Afghanistan Time"
            }
        ],
        "translations": {
            "kr": "아프가니스탄",
            "br": "Afeganistão",
            "pt": "Afeganistão",
            "nl": "Afghanistan",
            "hr": "Afganistan",
            "fa": "افغانستان",
            "de": "Afghanistan",
            "es": "Afganistán",
            "fr": "Afghanistan",
            "ja": "アフガニスタン",
            "it": "Afghanistan",
            "cn": "阿富汗"
        },
        "latitude": "33.00000000",
        "longitude": "65.00000000",
        "emoji": "🇦🇫",
        "emojiU": "U+1F1E6 U+1F1EB",
        "states": [
            {
                "id": 3901,
                "name": "Badakhshan",
                "state_code": "BDS",
                "latitude": "36.73477250",
                "longitude": "70.81199530",
                "cities": [
                    {
                        "id": 52,
                        "name": "Ashkāsham",
                        "latitude": "36.68333000",
                        "longitude": "71.53333000"
                    },
                    {
                        "id": 68,
                        "name": "Fayzabad",
                        "latitude": "37.11664000",
                        "longitude": "70.58002000"
                    },
                    {
                        "id": 78,
                        "name": "Jurm",
                        "latitude": "36.86477000",
                        "longitude": "70.83421000"
                    },
                    {
                        "id": 84,
                        "name": "Khandūd",
                        "latitude": "36.95127000",
                        "longitude": "72.31800000"
                    },
                    {
                        "id": 115,
                        "name": "Rāghistān",
                        "latitude": "37.66079000",
                        "longitude": "70.67346000"
                    },
                    {
                        "id": 131,
                        "name": "Wākhān",
                        "latitude": "37.05710000",
                        "longitude": "73.34928000"
                    }
                ]
            },
            {
                "id": 3871,
                "name": "Badghis",
                "state_code": "BDG",
                "latitude": "35.16713390",
                "longitude": "63.76953840",
                "cities": [
                    {
                        "id": 72,
                        "name": "Ghormach",
                        "latitude": "35.73062000",
                        "longitude": "63.78264000"
                    },
                    {
                        "id": 108,
                        "name": "Qala i Naw",
                        "latitude": "34.98735000",
                        "longitude": "63.12891000"
                    }
                ]
            },
            {
                "id": 3875,
                "name": "Baghlan",
                "state_code": "BGL",
                "latitude": "36.17890260",
                "longitude": "68.74530640",
                "cities": [
                    {
                        "id": 54,
                        "name": "Baghlān",
                        "latitude": "36.13068000",
                        "longitude": "68.70829000"
                    },
                    {
                        "id": 140,
                        "name": "Ḩukūmatī Dahanah-ye Ghōrī",
                        "latitude": "35.90617000",
                        "longitude": "68.48869000"
                    },
                    {
                        "id": 101,
                        "name": "Nahrīn",
                        "latitude": "36.06490000",
                        "longitude": "69.13343000"
                    },
                    {
                        "id": 105,
                        "name": "Pul-e Khumrī",
                        "latitude": "35.94458000",
                        "longitude": "68.71512000"
                    }
                ]
            },
            {
                "id": 3884,
                "name": "Balkh",
                "state_code": "BAL",
                "latitude": "36.75506030",
                "longitude": "66.89753720",
                "cities": [
                    {
                        "id": 55,
                        "name": "Balkh",
                        "latitude": "36.75635000",
                        "longitude": "66.89720000"
                    },
                    {
                        "id": 65,
                        "name": "Dowlatābād",
                        "latitude": "36.98821000",
                        "longitude": "66.82069000"
                    },
                    {
                        "id": 85,
                        "name": "Khulm",
                        "latitude": "36.69736000",
                        "longitude": "67.69826000"
                    },
                    {
                        "id": 91,
                        "name": "Lab-Sar",
                        "latitude": "36.02634000",
                        "longitude": "66.83799000"
                    },
                    {
                        "id": 97,
                        "name": "Mazār-e Sharīf",
                        "latitude": "36.70904000",
                        "longitude": "67.11087000"
                    },
                    {
                        "id": 112,
                        "name": "Qarchī Gak",
                        "latitude": "37.03999000",
                        "longitude": "66.78891000"
                    }
                ]
            },
            {
                "id": 3872,
                "name": "Bamyan",
                "state_code": "BAM",
                "latitude": "34.81000670",
                "longitude": "67.82121040",
                "cities": [
                    {
                        "id": 57,
                        "name": "Bāmyān",
                        "latitude": "34.82156000",
                        "longitude": "67.82734000"
                    },
                    {
                        "id": 104,
                        "name": "Panjāb",
                        "latitude": "34.38795000",
                        "longitude": "67.02327000"
                    }
                ]
            },
            {
                "id": 3892,
                "name": "Daykundi",
                "state_code": "DAY",
                "latitude": "33.66949500",
                "longitude": "66.04635340",
                "cities": [
                    {
                        "id": 102,
                        "name": "Nīlī",
                        "latitude": "33.76329000",
                        "longitude": "66.07617000"
                    }
                ]
            },
            {
                "id": 3899,
                "name": "Farah",
                "state_code": "FRA",
                "latitude": "32.49532800",
                "longitude": "62.26266270",
                "cities": [
                    {
                        "id": 66,
                        "name": "Farah",
                        "latitude": "32.37451000",
                        "longitude": "62.11638000"
                    }
                ]
            },
            {
                "id": 3889,
                "name": "Faryab",
                "state_code": "FYB",
                "latitude": "36.07956130",
                "longitude": "64.90595500",
                "cities": [
                    {
                        "id": 50,
                        "name": "Andkhoy",
                        "latitude": "36.95293000",
                        "longitude": "65.12376000"
                    },
                    {
                        "id": 96,
                        "name": "Maymana",
                        "latitude": "35.92139000",
                        "longitude": "64.78361000"
                    }
                ]
            },
            {
                "id": 3870,
                "name": "Ghazni",
                "state_code": "GHA",
                "latitude": "33.54505870",
                "longitude": "68.41739720",
                "cities": [
                    {
                        "id": 71,
                        "name": "Ghazni",
                        "latitude": "33.55391000",
                        "longitude": "68.42096000"
                    }
                ]
            },
            {
                "id": 3888,
                "name": "Ghōr",
                "state_code": "GHO",
                "latitude": "34.09957760",
                "longitude": "64.90595500",
                "cities": [
                    {
                        "id": 67,
                        "name": "Fayrōz Kōh",
                        "latitude": "34.51952000",
                        "longitude": "65.25093000"
                    },
                    {
                        "id": 121,
                        "name": "Shahrak",
                        "latitude": "34.10737000",
                        "longitude": "64.30520000"
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Aland Islands",
        "iso3": "ALA",
        "iso2": "AX",
        "phone_code": "+358-18",
        "capital": "Mariehamn",
        "currency": "EUR",
        "currency_symbol": "€",
        "tld": ".ax",
        "native": "Åland",
        "region": "Europe",
        "subregion": "Northern Europe",
        "timezones": [
            {
                "zoneName": "Europe/Mariehamn",
                "gmtOffset": 7200,
                "gmtOffsetName": "UTC+02:00",
                "abbreviation": "EET",
                "tzName": "Eastern European Time"
            }
        ],
        "translations": {
            "kr": "올란드 제도",
            "br": "Ilhas de Aland",
            "pt": "Ilhas de Aland",
            "nl": "Ålandeilanden",
            "hr": "Ålandski otoci",
            "fa": "جزایر الند",
            "de": "Åland",
            "es": "Alandia",
            "fr": "Åland",
            "ja": "オーランド諸島",
            "it": "Isole Aland",
            "cn": "奥兰群岛"
        },
        "latitude": "60.11666700",
        "longitude": "19.90000000",
        "emoji": "🇦🇽",
        "emojiU": "U+1F1E6 U+1F1FD",
        "states": []
    },
    {
        "id": 3,
        "name": "Albania",
        "iso3": "ALB",
        "iso2": "AL",
        "phone_code": "355",
        "capital": "Tirana",
        "currency": "ALL",
        "currency_symbol": "Lek",
        "tld": ".al",
        "native": "Shqipëria",
        "region": "Europe",
        "subregion": "Southern Europe",
        "timezones": [
            {
                "zoneName": "Europe/Tirane",
                "gmtOffset": 3600,
                "gmtOffsetName": "UTC+01:00",
                "abbreviation": "CET",
                "tzName": "Central European Time"
            }
        ],
        "translations": {
            "kr": "알바니아",
            "br": "Albânia",
            "pt": "Albânia",
            "nl": "Albanië",
            "hr": "Albanija",
            "fa": "آلبانی",
            "de": "Albanien",
            "es": "Albania",
            "fr": "Albanie",
            "ja": "アルバニア",
            "it": "Albania",
            "cn": "阿尔巴尼亚"
        },
        "latitude": "41.00000000",
        "longitude": "20.00000000",
        "emoji": "🇦🇱",
        "emojiU": "U+1F1E6 U+1F1F1",
        "states": [
            {
                "id": 603,
                "name": "Berat County",
                "state_code": "01",
                "latitude": "40.69530120",
                "longitude": "20.04496620",
                "cities": []
            },
            {
                "id": 629,
                "name": "Berat District",
                "state_code": "BR",
                "latitude": "40.70863770",
                "longitude": "19.94373140",
                "cities": [
                    {
                        "id": 153,
                        "name": "Banaj",
                        "latitude": "40.82492000",
                        "longitude": "19.84074000"
                    },
                    {
                        "id": 154,
                        "name": "Bashkia Berat",
                        "latitude": "40.69997000",
                        "longitude": "19.94983000"
                    },
                    {
                        "id": 170,
                        "name": "Bashkia Kuçovë",
                        "latitude": "40.82489000",
                        "longitude": "19.95350000"
                    },
                    {
                        "id": 180,
                        "name": "Bashkia Poliçan",
                        "latitude": "40.58608000",
                        "longitude": "20.04535000"
                    },
                    {
                        "id": 186,
                        "name": "Bashkia Skrapar",
                        "latitude": "40.56036000",
                        "longitude": "20.25477000"
                    },
                    {
                        "id": 191,
                        "name": "Berat",
                        "latitude": "40.70583000",
                        "longitude": "19.95222000"
                    },
                    {
                        "id": 280,
                        "name": "Çorovodë",
                        "latitude": "40.50417000",
                        "longitude": "20.22722000"
                    },
                    {
                        "id": 219,
                        "name": "Kuçovë",
                        "latitude": "40.80028000",
                        "longitude": "19.91667000"
                    },
                    {
                        "id": 238,
                        "name": "Poliçan",
                        "latitude": "40.61222000",
                        "longitude": "20.09806000"
                    },
                    {
                        "id": 242,
                        "name": "Rrethi i Beratit",
                        "latitude": "40.66667000",
                        "longitude": "20.00000000"
                    },
                    {
                        "id": 253,
                        "name": "Rrethi i Kuçovës",
                        "latitude": "40.83333000",
                        "longitude": "19.91667000"
                    },
                    {
                        "id": 258,
                        "name": "Rrethi i Skraparit",
                        "latitude": "40.55000000",
                        "longitude": "20.26667000"
                    },
                    {
                        "id": 273,
                        "name": "Ura Vajgurore",
                        "latitude": "40.76889000",
                        "longitude": "19.87778000"
                    }
                ]
            },
            {
                "id": 607,
                "name": "Bulqizë District",
                "state_code": "BU",
                "latitude": "41.49425870",
                "longitude": "20.21471570",
                "cities": []
            },
            {
                "id": 618,
                "name": "Delvinë District",
                "state_code": "DL",
                "latitude": "39.94813640",
                "longitude": "20.09558910",
                "cities": []
            },
            {
                "id": 608,
                "name": "Devoll District",
                "state_code": "DV",
                "latitude": "40.64473470",
                "longitude": "20.95066360",
                "cities": []
            },
            {
                "id": 610,
                "name": "Dibër County",
                "state_code": "09",
                "latitude": "41.58881630",
                "longitude": "20.23556470",
                "cities": [
                    {
                        "id": 155,
                        "name": "Bashkia Bulqizë",
                        "latitude": "41.47152000",
                        "longitude": "20.33192000"
                    },
                    {
                        "id": 165,
                        "name": "Bashkia Klos",
                        "latitude": "41.50826000",
                        "longitude": "20.07107000"
                    },
                    {
                        "id": 176,
                        "name": "Bashkia Mat",
                        "latitude": "41.63317000",
                        "longitude": "20.01228000"
                    },
                    {
                        "id": 193,
                        "name": "Bulqizë",
                        "latitude": "41.49167000",
                        "longitude": "20.22194000"
                    },
                    {
                        "id": 194,
                        "name": "Burrel",
                        "latitude": "41.61028000",
                        "longitude": "20.00889000"
                    },
                    {
                        "id": 209,
                        "name": "Klos",
                        "latitude": "41.50694000",
                        "longitude": "20.08667000"
                    },
                    {
                        "id": 236,
                        "name": "Peshkopi",
                        "latitude": "41.68500000",
                        "longitude": "20.42889000"
                    },
                    {
                        "id": 243,
                        "name": "Rrethi i Bulqizës",
                        "latitude": "41.50000000",
                        "longitude": "20.33333000"
                    },
                    {
                        "id": 246,
                        "name": "Rrethi i Dibrës",
                        "latitude": "41.75000000",
                        "longitude": "20.33333000"
                    },
                    {
                        "id": 256,
                        "name": "Rrethi i Matit",
                        "latitude": "41.58333000",
                        "longitude": "20.08333000"
                    },
                    {
                        "id": 272,
                        "name": "Ulëz",
                        "latitude": "41.68278000",
                        "longitude": "19.89333000"
                    }
                ]
            },
            {
                "id": 605,
                "name": "Dibër District",
                "state_code": "DI",
                "latitude": "41.58881630",
                "longitude": "20.23556470",
                "cities": []
            },
            {
                "id": 632,
                "name": "Durrës County",
                "state_code": "02",
                "latitude": "41.50809720",
                "longitude": "19.61631850",
                "cities": []
            },
            {
                "id": 639,
                "name": "Durrës District",
                "state_code": "DR",
                "latitude": "41.37065170",
                "longitude": "19.52110630",
                "cities": [
                    {
                        "id": 159,
                        "name": "Bashkia Durrës",
                        "latitude": "41.42743000",
                        "longitude": "19.48690000"
                    },
                    {
                        "id": 168,
                        "name": "Bashkia Krujë",
                        "latitude": "41.50091000",
                        "longitude": "19.72571000"
                    },
                    {
                        "id": 185,
                        "name": "Bashkia Shijak",
                        "latitude": "41.33558000",
                        "longitude": "19.58977000"
                    },
                    {
                        "id": 197,
                        "name": "Durrës",
                        "latitude": "41.32355000",
                        "longitude": "19.45469000"
                    },
                    {
                        "id": 198,
                        "name": "Durrës District",
                        "latitude": "41.31660000",
                        "longitude": "19.45000000"
                    },
                    {
                        "id": 203,
                        "name": "Fushë-Krujë",
                        "latitude": "41.47833000",
                        "longitude": "19.71778000"
                    },
                    {
                        "id": 214,
                        "name": "Krujë",
                        "latitude": "41.50917000",
                        "longitude": "19.79278000"
                    },
                    {
                        "id": 250,
                        "name": "Rrethi i Krujës",
                        "latitude": "41.55000000",
                        "longitude": "19.75000000"
                    },
                    {
                        "id": 265,
                        "name": "Shijak",
                        "latitude": "41.34556000",
                        "longitude": "19.56722000"
                    },
                    {
                        "id": 269,
                        "name": "Sukth",
                        "latitude": "41.38056000",
                        "longitude": "19.53778000"
                    }
                ]
            },
            {
                "id": 598,
                "name": "Elbasan County",
                "state_code": "03",
                "latitude": "41.12666720",
                "longitude": "20.23556470",
                "cities": []
            }
        ]
    },
    {
        "id": 4,
        "name": "Algeria",
        "iso3": "DZA",
        "iso2": "DZ",
        "phone_code": "213",
        "capital": "Algiers",
        "currency": "DZD",
        "currency_symbol": "دج",
        "tld": ".dz",
        "native": "الجزائر",
        "region": "Africa",
        "subregion": "Northern Africa",
        "timezones": [
            {
                "zoneName": "Africa/Algiers",
                "gmtOffset": 3600,
                "gmtOffsetName": "UTC+01:00",
                "abbreviation": "CET",
                "tzName": "Central European Time"
            }
        ],
        "translations": {
            "kr": "알제리",
            "br": "Argélia",
            "pt": "Argélia",
            "nl": "Algerije",
            "hr": "Alžir",
            "fa": "الجزایر",
            "de": "Algerien",
            "es": "Argelia",
            "fr": "Algérie",
            "ja": "アルジェリア",
            "it": "Algeria",
            "cn": "阿尔及利亚"
        },
        "latitude": "28.00000000",
        "longitude": "3.00000000",
        "emoji": "🇩🇿",
        "emojiU": "U+1F1E9 U+1F1FF",
        "states": [
            {
                "id": 1118,
                "name": "Adrar",
                "state_code": "01",
                "latitude": "26.41813100",
                "longitude": "-0.60147170",
                "cities": [
                    {
                        "id": 31227,
                        "name": "Adrar",
                        "latitude": "27.87429000",
                        "longitude": "-0.29388000"
                    },
                    {
                        "id": 31234,
                        "name": "Aoulef",
                        "latitude": "26.96667000",
                        "longitude": "1.08333000"
                    },
                    {
                        "id": 31406,
                        "name": "Reggane",
                        "latitude": "26.71576000",
                        "longitude": "0.17140000"
                    },
                    {
                        "id": 31450,
                        "name": "Timimoun",
                        "latitude": "29.26388000",
                        "longitude": "0.23098000"
                    }
                ]
            },
            {
                "id": 1119,
                "name": "Aïn Defla",
                "state_code": "44",
                "latitude": "36.25094290",
                "longitude": "1.93938150",
                "cities": [
                    {
                        "id": 31243,
                        "name": "Aïn Defla",
                        "latitude": "36.26405000",
                        "longitude": "1.96790000"
                    },
                    {
                        "id": 31325,
                        "name": "El Abadia",
                        "latitude": "36.26951000",
                        "longitude": "1.68609000"
                    },
                    {
                        "id": 31331,
                        "name": "El Attaf",
                        "latitude": "36.22393000",
                        "longitude": "1.67187000"
                    },
                    {
                        "id": 31361,
                        "name": "Khemis Miliana",
                        "latitude": "36.26104000",
                        "longitude": "2.22015000"
                    },
                    {
                        "id": 31448,
                        "name": "Theniet el Had",
                        "latitude": "35.87111000",
                        "longitude": "2.02806000"
                    }
                ]
            },
            {
                "id": 1122,
                "name": "Aïn Témouchent",
                "state_code": "46",
                "latitude": "35.29926980",
                "longitude": "-1.13927920",
                "cities": [
                    {
                        "id": 31250,
                        "name": "Aïn Temouchent",
                        "latitude": "35.29749000",
                        "longitude": "-1.14037000"
                    },
                    {
                        "id": 31265,
                        "name": "Beni Saf",
                        "latitude": "35.30099000",
                        "longitude": "-1.38226000"
                    },
                    {
                        "id": 31329,
                        "name": "El Amria",
                        "latitude": "35.52439000",
                        "longitude": "-1.01577000"
                    },
                    {
                        "id": 31340,
                        "name": "El Malah",
                        "latitude": "35.39137000",
                        "longitude": "-1.09238000"
                    },
                    {
                        "id": 31351,
                        "name": "Hammam Bou Hadjar",
                        "latitude": "35.37889000",
                        "longitude": "-0.96778000"
                    }
                ]
            },
            {
                "id": 1144,
                "name": "Algiers",
                "state_code": "16",
                "latitude": "36.69972940",
                "longitude": "3.05761990",
                "cities": [
                    {
                        "id": 31249,
                        "name": "Aïn Taya",
                        "latitude": "36.79333000",
                        "longitude": "3.28694000"
                    },
                    {
                        "id": 31230,
                        "name": "Algiers",
                        "latitude": "36.73225000",
                        "longitude": "3.08746000"
                    },
                    {
                        "id": 31254,
                        "name": "Bab Ezzouar",
                        "latitude": "36.72615000",
                        "longitude": "3.18291000"
                    },
                    {
                        "id": 31274,
                        "name": "Birkhadem",
                        "latitude": "36.71499000",
                        "longitude": "3.05002000"
                    },
                    {
                        "id": 31281,
                        "name": "Bordj el Kiffan",
                        "latitude": "36.74871000",
                        "longitude": "3.19249000"
                    },
                    {
                        "id": 31312,
                        "name": "Dar el Beïda",
                        "latitude": "36.71333000",
                        "longitude": "3.21250000"
                    },
                    {
                        "id": 31413,
                        "name": "Rouiba",
                        "latitude": "36.73829000",
                        "longitude": "3.28079000"
                    }
                ]
            },
            {
                "id": 1103,
                "name": "Annaba",
                "state_code": "23",
                "latitude": "36.80205080",
                "longitude": "7.52472430",
                "cities": [
                    {
                        "id": 31233,
                        "name": "Annaba",
                        "latitude": "36.90000000",
                        "longitude": "7.76667000"
                    },
                    {
                        "id": 31267,
                        "name": "Berrahal",
                        "latitude": "36.83528000",
                        "longitude": "7.45333000"
                    },
                    {
                        "id": 31323,
                        "name": "Drean",
                        "latitude": "36.68482000",
                        "longitude": "7.75111000"
                    },
                    {
                        "id": 31334,
                        "name": "El Hadjar",
                        "latitude": "36.80377000",
                        "longitude": "7.73684000"
                    }
                ]
            },
            {
                "id": 1142,
                "name": "Batna",
                "state_code": "05",
                "latitude": "35.59659540",
                "longitude": "5.89871390",
                "cities": [
                    {
                        "id": 31251,
                        "name": "Aïn Touta",
                        "latitude": "35.37675000",
                        "longitude": "5.90001000"
                    },
                    {
                        "id": 31237,
                        "name": "Arris",
                        "latitude": "35.25881000",
                        "longitude": "6.34706000"
                    },
                    {
                        "id": 31257,
                        "name": "Barika",
                        "latitude": "35.38901000",
                        "longitude": "5.36584000"
                    },
                    {
                        "id": 31258,
                        "name": "Batna",
                        "latitude": "35.55597000",
                        "longitude": "6.17414000"
                    },
                    {
                        "id": 31292,
                        "name": "Boumagueur",
                        "latitude": "35.50520000",
                        "longitude": "5.55250000"
                    },
                    {
                        "id": 31382,
                        "name": "Merouana",
                        "latitude": "35.63106000",
                        "longitude": "5.91186000"
                    },
                    {
                        "id": 31415,
                        "name": "Râs el Aïoun",
                        "latitude": "35.67384000",
                        "longitude": "5.64530000"
                    },
                    {
                        "id": 31444,
                        "name": "Tazoult-Lambese",
                        "latitude": "35.48171000",
                        "longitude": "6.26074000"
                    }
                ]
            },
            {
                "id": 1108,
                "name": "Béchar",
                "state_code": "08",
                "latitude": "31.62380980",
                "longitude": "-2.21624430",
                "cities": [
                    {
                        "id": 31298,
                        "name": "Béchar",
                        "latitude": "31.61667000",
                        "longitude": "-2.21667000"
                    }
                ]
            },
            {
                "id": 1128,
                "name": "Béjaïa",
                "state_code": "06",
                "latitude": "36.75152580",
                "longitude": "5.05568370",
                "cities": [
                    {
                        "id": 31229,
                        "name": "Akbou",
                        "latitude": "36.45750000",
                        "longitude": "4.53494000"
                    },
                    {
                        "id": 31231,
                        "name": "Amizour",
                        "latitude": "36.64022000",
                        "longitude": "4.90131000"
                    },
                    {
                        "id": 31256,
                        "name": "Barbacha",
                        "latitude": "36.56667000",
                        "longitude": "4.96667000"
                    },
                    {
                        "id": 31259,
                        "name": "Bejaïa",
                        "latitude": "36.75587000",
                        "longitude": "5.08433000"
                    },
                    {
                        "id": 31467,
                        "name": "el hed",
                        "latitude": "36.65000000",
                        "longitude": "4.77361000"
                    },
                    {
                        "id": 31339,
                        "name": "El Kseur",
                        "latitude": "36.67942000",
                        "longitude": "4.85550000"
                    },
                    {
                        "id": 31344,
                        "name": "Feraoun",
                        "latitude": "36.56041000",
                        "longitude": "4.85454000"
                    },
                    {
                        "id": 31421,
                        "name": "Seddouk",
                        "latitude": "36.54722000",
                        "longitude": "4.68611000"
                    }
                ]
            },
            {
                "id": 4909,
                "name": "Béni Abbès",
                "state_code": "53",
                "latitude": "30.08310420",
                "longitude": "-2.83450520",
                "cities": []
            },
            {
                "id": 1114,
                "name": "Biskra",
                "state_code": "07",
                "latitude": "34.84494370",
                "longitude": "5.72485670",
                "cities": [
                    {
                        "id": 31275,
                        "name": "Biskra",
                        "latitude": "34.85038000",
                        "longitude": "5.72805000"
                    },
                    {
                        "id": 31405,
                        "name": "Oumache",
                        "latitude": "34.69292000",
                        "longitude": "5.68092000"
                    },
                    {
                        "id": 31427,
                        "name": "Sidi Khaled",
                        "latitude": "34.38700000",
                        "longitude": "4.98785000"
                    },
                    {
                        "id": 31430,
                        "name": "Sidi Okba",
                        "latitude": "34.74512000",
                        "longitude": "5.89833000"
                    },
                    {
                        "id": 31461,
                        "name": "Tolga",
                        "latitude": "34.72224000",
                        "longitude": "5.37845000"
                    },
                    {
                        "id": 31466,
                        "name": "Zeribet el Oued",
                        "latitude": "34.68284000",
                        "longitude": "6.51109000"
                    }
                ]
            }
        ]
    },
    {
        "id": 5,
        "name": "American Samoa",
        "iso3": "ASM",
        "iso2": "AS",
        "phone_code": "+1-684",
        "capital": "Pago Pago",
        "currency": "USD",
        "currency_symbol": "$",
        "tld": ".as",
        "native": "American Samoa",
        "region": "Oceania",
        "subregion": "Polynesia",
        "timezones": [
            {
                "zoneName": "Pacific/Pago_Pago",
                "gmtOffset": -39600,
                "gmtOffsetName": "UTC-11:00",
                "abbreviation": "SST",
                "tzName": "Samoa Standard Time"
            }
        ],
        "translations": {
            "kr": "아메리칸사모아",
            "br": "Samoa Americana",
            "pt": "Samoa Americana",
            "nl": "Amerikaans Samoa",
            "hr": "Američka Samoa",
            "fa": "ساموآی آمریکا",
            "de": "Amerikanisch-Samoa",
            "es": "Samoa Americana",
            "fr": "Samoa américaines",
            "ja": "アメリカ領サモア",
            "it": "Samoa Americane",
            "cn": "美属萨摩亚"
        },
        "latitude": "-14.33333333",
        "longitude": "-170.00000000",
        "emoji": "🇦🇸",
        "emojiU": "U+1F1E6 U+1F1F8",
        "states": []
    },
    {
        "id": 6,
        "name": "Andorra",
        "iso3": "AND",
        "iso2": "AD",
        "phone_code": "376",
        "capital": "Andorra la Vella",
        "currency": "EUR",
        "currency_symbol": "€",
        "tld": ".ad",
        "native": "Andorra",
        "region": "Europe",
        "subregion": "Southern Europe",
        "timezones": [
            {
                "zoneName": "Europe/Andorra",
                "gmtOffset": 3600,
                "gmtOffsetName": "UTC+01:00",
                "abbreviation": "CET",
                "tzName": "Central European Time"
            }
        ],
        "translations": {
            "kr": "안도라",
            "br": "Andorra",
            "pt": "Andorra",
            "nl": "Andorra",
            "hr": "Andora",
            "fa": "آندورا",
            "de": "Andorra",
            "es": "Andorra",
            "fr": "Andorre",
            "ja": "アンドラ",
            "it": "Andorra",
            "cn": "安道尔"
        },
        "latitude": "42.50000000",
        "longitude": "1.50000000",
        "emoji": "🇦🇩",
        "emojiU": "U+1F1E6 U+1F1E9",
        "states": [
            {
                "id": 488,
                "name": "Andorra la Vella",
                "state_code": "07",
                "latitude": "42.50631740",
                "longitude": "1.52183550",
                "cities": [
                    {
                        "id": 1,
                        "name": "Andorra la Vella",
                        "latitude": "42.50779000",
                        "longitude": "1.52109000"
                    }
                ]
            },
            {
                "id": 489,
                "name": "Canillo",
                "state_code": "02",
                "latitude": "42.59782490",
                "longitude": "1.65663770",
                "cities": [
                    {
                        "id": 3,
                        "name": "Canillo",
                        "latitude": "42.56760000",
                        "longitude": "1.59756000"
                    },
                    {
                        "id": 4,
                        "name": "El Tarter",
                        "latitude": "42.57952000",
                        "longitude": "1.65362000"
                    }
                ]
            },
            {
                "id": 487,
                "name": "Encamp",
                "state_code": "03",
                "latitude": "42.53597640",
                "longitude": "1.58367730",
                "cities": [
                    {
                        "id": 5,
                        "name": "Encamp",
                        "latitude": "42.53474000",
                        "longitude": "1.58014000"
                    },
                    {
                        "id": 7,
                        "name": "Pas de la Casa",
                        "latitude": "42.54277000",
                        "longitude": "1.73361000"
                    }
                ]
            },
            {
                "id": 492,
                "name": "Escaldes-Engordany",
                "state_code": "08",
                "latitude": "42.49093790",
                "longitude": "1.58869660",
                "cities": [
                    {
                        "id": 10,
                        "name": "les Escaldes",
                        "latitude": "42.50729000",
                        "longitude": "1.53414000"
                    }
                ]
            },
            {
                "id": 493,
                "name": "La Massana",
                "state_code": "04",
                "latitude": "42.54562500",
                "longitude": "1.51473920",
                "cities": [
                    {
                        "id": 2,
                        "name": "Arinsal",
                        "latitude": "42.57205000",
                        "longitude": "1.48453000"
                    },
                    {
                        "id": 9,
                        "name": "la Massana",
                        "latitude": "42.54499000",
                        "longitude": "1.51483000"
                    }
                ]
            },
            {
                "id": 491,
                "name": "Ordino",
                "state_code": "05",
                "latitude": "42.59944330",
                "longitude": "1.54023270",
                "cities": [
                    {
                        "id": 6,
                        "name": "Ordino",
                        "latitude": "42.55623000",
                        "longitude": "1.53319000"
                    }
                ]
            },
            {
                "id": 490,
                "name": "Sant Julià de Lòria",
                "state_code": "06",
                "latitude": "42.45296310",
                "longitude": "1.49182350",
                "cities": [
                    {
                        "id": 8,
                        "name": "Sant Julià de Lòria",
                        "latitude": "42.46372000",
                        "longitude": "1.49129000"
                    }
                ]
            }
        ]
    },
    {
        "id": 7,
        "name": "Angola",
        "iso3": "AGO",
        "iso2": "AO",
        "phone_code": "244",
        "capital": "Luanda",
        "currency": "AOA",
        "currency_symbol": "Kz",
        "tld": ".ao",
        "native": "Angola",
        "region": "Africa",
        "subregion": "Middle Africa",
        "timezones": [
            {
                "zoneName": "Africa/Luanda",
                "gmtOffset": 3600,
                "gmtOffsetName": "UTC+01:00",
                "abbreviation": "WAT",
                "tzName": "West Africa Time"
            }
        ],
        "translations": {
            "kr": "앙골라",
            "br": "Angola",
            "pt": "Angola",
            "nl": "Angola",
            "hr": "Angola",
            "fa": "آنگولا",
            "de": "Angola",
            "es": "Angola",
            "fr": "Angola",
            "ja": "アンゴラ",
            "it": "Angola",
            "cn": "安哥拉"
        },
        "latitude": "-12.50000000",
        "longitude": "18.50000000",
        "emoji": "🇦🇴",
        "emojiU": "U+1F1E6 U+1F1F4",
        "states": [
            {
                "id": 221,
                "name": "Bengo Province",
                "state_code": "BGO",
                "latitude": "-9.10422570",
                "longitude": "13.72891670",
                "cities": [
                    {
                        "id": 598,
                        "name": "Caxito",
                        "latitude": "-8.57848000",
                        "longitude": "13.66425000"
                    }
                ]
            },
            {
                "id": 218,
                "name": "Benguela Province",
                "state_code": "BGU",
                "latitude": "-12.80037440",
                "longitude": "13.91439900",
                "cities": [
                    {
                        "id": 590,
                        "name": "Benguela",
                        "latitude": "-12.57626000",
                        "longitude": "13.40547000"
                    },
                    {
                        "id": 597,
                        "name": "Catumbela",
                        "latitude": "-12.43002000",
                        "longitude": "13.54677000"
                    },
                    {
                        "id": 613,
                        "name": "Lobito",
                        "latitude": "-12.36440000",
                        "longitude": "13.53601000"
                    }
                ]
            },
            {
                "id": 212,
                "name": "Bié Province",
                "state_code": "BIE",
                "latitude": "-12.57279070",
                "longitude": "17.66888700",
                "cities": [
                    {
                        "id": 595,
                        "name": "Camacupa",
                        "latitude": "-12.01667000",
                        "longitude": "17.48333000"
                    },
                    {
                        "id": 596,
                        "name": "Catabola",
                        "latitude": "-12.15000000",
                        "longitude": "17.28333000"
                    },
                    {
                        "id": 605,
                        "name": "Chissamba",
                        "latitude": "-12.16667000",
                        "longitude": "17.33333000"
                    },
                    {
                        "id": 606,
                        "name": "Cuito",
                        "latitude": "-12.38333000",
                        "longitude": "16.93333000"
                    }
                ]
            },
            {
                "id": 228,
                "name": "Cabinda Province",
                "state_code": "CAB",
                "latitude": "-5.02487490",
                "longitude": "12.34638750",
                "cities": [
                    {
                        "id": 591,
                        "name": "Cabinda",
                        "latitude": "-5.55000000",
                        "longitude": "12.20000000"
                    }
                ]
            },
            {
                "id": 226,
                "name": "Cuando Cubango Province",
                "state_code": "CCU",
                "latitude": "-16.41808240",
                "longitude": "18.80761950",
                "cities": [
                    {
                        "id": 625,
                        "name": "Menongue",
                        "latitude": "-14.65850000",
                        "longitude": "17.69099000"
                    }
                ]
            },
            {
                "id": 217,
                "name": "Cuanza Norte Province",
                "state_code": "CNO",
                "latitude": "-9.23985130",
                "longitude": "14.65878210",
                "cities": [
                    {
                        "id": 594,
                        "name": "Camabatela",
                        "latitude": "-8.18812000",
                        "longitude": "15.37495000"
                    },
                    {
                        "id": 627,
                        "name": "N’dalatando",
                        "latitude": "-9.29782000",
                        "longitude": "14.91162000"
                    }
                ]
            },
            {
                "id": 216,
                "name": "Cuanza Sul",
                "state_code": "CUS",
                "latitude": "-10.59519100",
                "longitude": "15.40680790",
                "cities": [
                    {
                        "id": 629,
                        "name": "Quibala",
                        "latitude": "-10.73366000",
                        "longitude": "14.97995000"
                    },
                    {
                        "id": 634,
                        "name": "Sumbe",
                        "latitude": "-11.20605000",
                        "longitude": "13.84371000"
                    },
                    {
                        "id": 635,
                        "name": "Uacu Cungo",
                        "latitude": "-11.35669000",
                        "longitude": "15.11719000"
                    }
                ]
            },
            {
                "id": 215,
                "name": "Cunene Province",
                "state_code": "CNN",
                "latitude": "-16.28022210",
                "longitude": "16.15809370",
                "cities": [
                    {
                        "id": 628,
                        "name": "Ondjiva",
                        "latitude": "-17.06667000",
                        "longitude": "15.73333000"
                    }
                ]
            },
            {
                "id": 213,
                "name": "Huambo Province",
                "state_code": "HUA",
                "latitude": "-12.52682210",
                "longitude": "15.59433880",
                "cities": [
                    {
                        "id": 600,
                        "name": "Caála",
                        "latitude": "-12.85250000",
                        "longitude": "15.56056000"
                    },
                    {
                        "id": 601,
                        "name": "Chela",
                        "latitude": "-12.30261000",
                        "longitude": "15.43358000"
                    },
                    {
                        "id": 609,
                        "name": "Huambo",
                        "latitude": "-12.77611000",
                        "longitude": "15.73917000"
                    },
                    {
                        "id": 614,
                        "name": "Longonjo",
                        "latitude": "-12.90667000",
                        "longitude": "15.25333000"
                    }
                ]
            },
            {
                "id": 225,
                "name": "Huíla Province",
                "state_code": "HUI",
                "latitude": "-14.92805530",
                "longitude": "14.65878210",
                "cities": [
                    {
                        "id": 592,
                        "name": "Caconda",
                        "latitude": "-13.73333000",
                        "longitude": "15.06667000"
                    },
                    {
                        "id": 593,
                        "name": "Caluquembe",
                        "latitude": "-13.92093000",
                        "longitude": "14.53476000"
                    },
                    {
                        "id": 602,
                        "name": "Chibia",
                        "latitude": "-15.23657000",
                        "longitude": "13.88468000"
                    },
                    {
                        "id": 603,
                        "name": "Chicomba",
                        "latitude": "-14.30788000",
                        "longitude": "14.98672000"
                    },
                    {
                        "id": 604,
                        "name": "Chipindo",
                        "latitude": "-13.86830000",
                        "longitude": "15.73277000"
                    },
                    {
                        "id": 607,
                        "name": "Cuvango",
                        "latitude": "-14.27693000",
                        "longitude": "16.31475000"
                    },
                    {
                        "id": 608,
                        "name": "Gambos",
                        "latitude": "-15.80926000",
                        "longitude": "14.07661000"
                    },
                    {
                        "id": 610,
                        "name": "Humpata",
                        "latitude": "-15.07250000",
                        "longitude": "13.36771000"
                    },
                    {
                        "id": 612,
                        "name": "Jamba",
                        "latitude": "-14.76294000",
                        "longitude": "15.83493000"
                    },
                    {
                        "id": 617,
                        "name": "Lubango",
                        "latitude": "-14.91717000",
                        "longitude": "13.49250000"
                    },
                    {
                        "id": 623,
                        "name": "Matala",
                        "latitude": "-15.23967000",
                        "longitude": "15.17246000"
                    },
                    {
                        "id": 630,
                        "name": "Quilengues",
                        "latitude": "-13.99213000",
                        "longitude": "13.76705000"
                    },
                    {
                        "id": 631,
                        "name": "Quipungo",
                        "latitude": "-15.12203000",
                        "longitude": "14.55953000"
                    }
                ]
            }
        ]
    },
    {
        "id": 8,
        "name": "Anguilla",
        "iso3": "AIA",
        "iso2": "AI",
        "phone_code": "+1-264",
        "capital": "The Valley",
        "currency": "XCD",
        "currency_symbol": "$",
        "tld": ".ai",
        "native": "Anguilla",
        "region": "Americas",
        "subregion": "Caribbean",
        "timezones": [
            {
                "zoneName": "America/Anguilla",
                "gmtOffset": -14400,
                "gmtOffsetName": "UTC-04:00",
                "abbreviation": "AST",
                "tzName": "Atlantic Standard Time"
            }
        ],
        "translations": {
            "kr": "앵귈라",
            "br": "Anguila",
            "pt": "Anguila",
            "nl": "Anguilla",
            "hr": "Angvila",
            "fa": "آنگویلا",
            "de": "Anguilla",
            "es": "Anguilla",
            "fr": "Anguilla",
            "ja": "アンギラ",
            "it": "Anguilla",
            "cn": "安圭拉"
        },
        "latitude": "18.25000000",
        "longitude": "-63.16666666",
        "emoji": "🇦🇮",
        "emojiU": "U+1F1E6 U+1F1EE",
        "states": []
    },
    {
        "id": 9,
        "name": "Antarctica",
        "iso3": "ATA",
        "iso2": "AQ",
        "phone_code": "",
        "capital": "",
        "currency": "",
        "currency_symbol": "$",
        "tld": ".aq",
        "native": "Antarctica",
        "region": "Polar",
        "subregion": "",
        "timezones": [
            {
                "zoneName": "Antarctica/Casey",
                "gmtOffset": 39600,
                "gmtOffsetName": "UTC+11:00",
                "abbreviation": "AWST",
                "tzName": "Australian Western Standard Time"
            },
            {
                "zoneName": "Antarctica/Davis",
                "gmtOffset": 25200,
                "gmtOffsetName": "UTC+07:00",
                "abbreviation": "DAVT",
                "tzName": "Davis Time"
            },
            {
                "zoneName": "Antarctica/DumontDUrville",
                "gmtOffset": 36000,
                "gmtOffsetName": "UTC+10:00",
                "abbreviation": "DDUT",
                "tzName": "Dumont d'Urville Time"
            },
            {
                "zoneName": "Antarctica/Mawson",
                "gmtOffset": 18000,
                "gmtOffsetName": "UTC+05:00",
                "abbreviation": "MAWT",
                "tzName": "Mawson Station Time"
            },
            {
                "zoneName": "Antarctica/McMurdo",
                "gmtOffset": 46800,
                "gmtOffsetName": "UTC+13:00",
                "abbreviation": "NZDT",
                "tzName": "New Zealand Daylight Time"
            },
            {
                "zoneName": "Antarctica/Palmer",
                "gmtOffset": -10800,
                "gmtOffsetName": "UTC-03:00",
                "abbreviation": "CLST",
                "tzName": "Chile Summer Time"
            },
            {
                "zoneName": "Antarctica/Rothera",
                "gmtOffset": -10800,
                "gmtOffsetName": "UTC-03:00",
                "abbreviation": "ROTT",
                "tzName": "Rothera Research Station Time"
            },
            {
                "zoneName": "Antarctica/Syowa",
                "gmtOffset": 10800,
                "gmtOffsetName": "UTC+03:00",
                "abbreviation": "SYOT",
                "tzName": "Showa Station Time"
            },
            {
                "zoneName": "Antarctica/Troll",
                "gmtOffset": 0,
                "gmtOffsetName": "UTC±00",
                "abbreviation": "GMT",
                "tzName": "Greenwich Mean Time"
            },
            {
                "zoneName": "Antarctica/Vostok",
                "gmtOffset": 21600,
                "gmtOffsetName": "UTC+06:00",
                "abbreviation": "VOST",
                "tzName": "Vostok Station Time"
            }
        ],
        "translations": {
            "kr": "남극",
            "br": "Antártida",
            "pt": "Antárctida",
            "nl": "Antarctica",
            "hr": "Antarktika",
            "fa": "جنوبگان",
            "de": "Antarktika",
            "es": "Antártida",
            "fr": "Antarctique",
            "ja": "南極大陸",
            "it": "Antartide",
            "cn": "南极洲"
        },
        "latitude": "-74.65000000",
        "longitude": "4.48000000",
        "emoji": "🇦🇶",
        "emojiU": "U+1F1E6 U+1F1F6",
        "states": []
    },
    {
        "id": 10,
        "name": "Antigua And Barbuda",
        "iso3": "ATG",
        "iso2": "AG",
        "phone_code": "+1-268",
        "capital": "St. John's",
        "currency": "XCD",
        "currency_symbol": "$",
        "tld": ".ag",
        "native": "Antigua and Barbuda",
        "region": "Americas",
        "subregion": "Caribbean",
        "timezones": [
            {
                "zoneName": "America/Antigua",
                "gmtOffset": -14400,
                "gmtOffsetName": "UTC-04:00",
                "abbreviation": "AST",
                "tzName": "Atlantic Standard Time"
            }
        ],
        "translations": {
            "kr": "앤티가 바부다",
            "br": "Antígua e Barbuda",
            "pt": "Antígua e Barbuda",
            "nl": "Antigua en Barbuda",
            "hr": "Antigva i Barbuda",
            "fa": "آنتیگوا و باربودا",
            "de": "Antigua und Barbuda",
            "es": "Antigua y Barbuda",
            "fr": "Antigua-et-Barbuda",
            "ja": "アンティグア・バーブーダ",
            "it": "Antigua e Barbuda",
            "cn": "安提瓜和巴布达"
        },
        "latitude": "17.05000000",
        "longitude": "-61.80000000",
        "emoji": "🇦🇬",
        "emojiU": "U+1F1E6 U+1F1EC",
        "states": [
            {
                "id": 3708,
                "name": "Barbuda",
                "state_code": "10",
                "latitude": "17.62662420",
                "longitude": "-61.77130280",
                "cities": [
                    {
                        "id": 144,
                        "name": "Codrington",
                        "latitude": "17.63333000",
                        "longitude": "-61.83333000"
                    }
                ]
            },
            {
                "id": 3703,
                "name": "Redonda",
                "state_code": "11",
                "latitude": "16.93841600",
                "longitude": "-62.34551480",
                "cities": []
            },
            {
                "id": 3709,
                "name": "Saint George Parish",
                "state_code": "03",
                "latitude": null,
                "longitude": null,
                "cities": [
                    {
                        "id": 148,
                        "name": "Piggotts",
                        "latitude": "17.11667000",
                        "longitude": "-61.80000000"
                    }
                ]
            },
            {
                "id": 3706,
                "name": "Saint John Parish",
                "state_code": "04",
                "latitude": null,
                "longitude": null,
                "cities": [
                    {
                        "id": 149,
                        "name": "Potters Village",
                        "latitude": "17.11337000",
                        "longitude": "-61.81962000"
                    },
                    {
                        "id": 150,
                        "name": "Saint John’s",
                        "latitude": "17.12096000",
                        "longitude": "-61.84329000"
                    }
                ]
            },
            {
                "id": 3707,
                "name": "Saint Mary Parish",
                "state_code": "05",
                "latitude": null,
                "longitude": null,
                "cities": [
                    {
                        "id": 143,
                        "name": "Bolands",
                        "latitude": "17.06565000",
                        "longitude": "-61.87466000"
                    }
                ]
            },
            {
                "id": 3705,
                "name": "Saint Paul Parish",
                "state_code": "06",
                "latitude": null,
                "longitude": null,
                "cities": [
                    {
                        "id": 145,
                        "name": "Falmouth",
                        "latitude": "17.02741000",
                        "longitude": "-61.78136000"
                    },
                    {
                        "id": 146,
                        "name": "Liberta",
                        "latitude": "17.04141000",
                        "longitude": "-61.79052000"
                    }
                ]
            },
            {
                "id": 3704,
                "name": "Saint Peter Parish",
                "state_code": "07",
                "latitude": null,
                "longitude": null,
                "cities": [
                    {
                        "id": 142,
                        "name": "All Saints",
                        "latitude": "17.06671000",
                        "longitude": "-61.79303000"
                    },
                    {
                        "id": 147,
                        "name": "Parham",
                        "latitude": "17.09682000",
                        "longitude": "-61.77046000"
                    }
                ]
            },
            {
                "id": 3710,
                "name": "Saint Philip Parish",
                "state_code": "08",
                "latitude": "40.43682580",
                "longitude": "-80.06855320",
                "cities": []
            }
        ]
    },
    {
        "id": 101,
        "name": "India",
        "iso3": "IND",
        "iso2": "IN",
        "phone_code": "91",
        "capital": "New Delhi",
        "currency": "INR",
        "currency_symbol": "₹",
        "tld": ".in",
        "native": "भारत",
        "region": "Asia",
        "subregion": "Southern Asia",
        "timezones": [
            {
                "zoneName": "Asia/Kolkata",
                "gmtOffset": 19800,
                "gmtOffsetName": "UTC+05:30",
                "abbreviation": "IST",
                "tzName": "Indian Standard Time"
            }
        ],
        "translations": {
            "kr": "인도",
            "br": "Índia",
            "pt": "Índia",
            "nl": "India",
            "hr": "Indija",
            "fa": "هند",
            "de": "Indien",
            "es": "India",
            "fr": "Inde",
            "ja": "インド",
            "it": "India",
            "cn": "印度"
        },
        "latitude": "20.00000000",
        "longitude": "77.00000000",
        "emoji": "🇮🇳",
        "emojiU": "U+1F1EE U+1F1F3",
        "states": [
            {
                "id": 4023,
                "name": "Andaman and Nicobar Islands",
                "state_code": "AN",
                "latitude": "11.74008670",
                "longitude": "92.65864010",
                "cities": [
                    {
                        "id": 57837,
                        "name": "Bamboo Flat",
                        "latitude": "11.70000000",
                        "longitude": "92.71667000"
                    },
                    {
                        "id": 133213,
                        "name": "Nicobar",
                        "latitude": "7.03002000",
                        "longitude": "93.79028000"
                    },
                    {
                        "id": 133482,
                        "name": "Port Blair",
                        "latitude": "11.66613000",
                        "longitude": "92.74635000"
                    },
                    {
                        "id": 134006,
                        "name": "South Andaman",
                        "latitude": "10.75776000",
                        "longitude": "92.52136000"
                    }
                ]
            },
            {
                "id": 4017,
                "name": "Andhra Pradesh",
                "state_code": "AP",
                "latitude": "15.91289980",
                "longitude": "79.73998750",
                "cities": [
                    {
                        "id": 57593,
                        "name": "Addanki",
                        "latitude": "15.81061000",
                        "longitude": "79.97338000"
                    },
                    {
                        "id": 134452,
                        "name": "Adoni",
                        "latitude": "15.62788000",
                        "longitude": "77.27495000"
                    },
                    {
                        "id": 57620,
                        "name": "Akasahebpet",
                        "latitude": "17.50455000",
                        "longitude": "82.56597000"
                    },
                    {
                        "id": 57623,
                        "name": "Akividu",
                        "latitude": "16.58225000",
                        "longitude": "81.38112000"
                    },
                    {
                        "id": 57624,
                        "name": "Akkarampalle",
                        "latitude": "13.65000000",
                        "longitude": "79.42000000"
                    },
                    {
                        "id": 57658,
                        "name": "Amalapuram",
                        "latitude": "16.57868000",
                        "longitude": "82.00609000"
                    },
                    {
                        "id": 57690,
                        "name": "Amudalavalasa",
                        "latitude": "18.41025000",
                        "longitude": "83.90295000"
                    },
                    {
                        "id": 57693,
                        "name": "Anakapalle",
                        "latitude": "17.69134000",
                        "longitude": "83.00395000"
                    },
                    {
                        "id": 57698,
                        "name": "Anantapur",
                        "latitude": "14.55000000",
                        "longitude": "77.41667000"
                    },
                    {
                        "id": 57758,
                        "name": "Atmakur",
                        "latitude": "15.88109000",
                        "longitude": "78.58704000"
                    },
                    {
                        "id": 57761,
                        "name": "Attili",
                        "latitude": "16.70000000",
                        "longitude": "81.60000000"
                    },
                    {
                        "id": 57771,
                        "name": "Avanigadda",
                        "latitude": "16.02148000",
                        "longitude": "80.91808000"
                    },
                    {
                        "id": 57794,
                        "name": "Badvel",
                        "latitude": "14.74510000",
                        "longitude": "79.06288000"
                    },
                    {
                        "id": 57849,
                        "name": "Banganapalle",
                        "latitude": "15.31771000",
                        "longitude": "78.22669000"
                    },
                    {
                        "id": 58137,
                        "name": "Bapatla",
                        "latitude": "15.90422000",
                        "longitude": "80.46743000"
                    },
                    {
                        "id": 57939,
                        "name": "Betamcherla",
                        "latitude": "15.45144000",
                        "longitude": "78.14797000"
                    },
                    {
                        "id": 57971,
                        "name": "Bhattiprolu",
                        "latitude": "16.10260000",
                        "longitude": "80.78074000"
                    },
                    {
                        "id": 58021,
                        "name": "Bhimavaram",
                        "latitude": "16.54078000",
                        "longitude": "81.52322000"
                    },
                    {
                        "id": 58022,
                        "name": "Bhimunipatnam",
                        "latitude": "17.89017000",
                        "longitude": "83.45203000"
                    },
                    {
                        "id": 58070,
                        "name": "Bobbili",
                        "latitude": "18.57366000",
                        "longitude": "83.35925000"
                    },
                    {
                        "id": 58179,
                        "name": "Challapalle",
                        "latitude": "16.11756000",
                        "longitude": "80.93139000"
                    },
                    {
                        "id": 131514,
                        "name": "Chemmumiahpet",
                        "latitude": "15.89794000",
                        "longitude": "79.32129000"
                    },
                    {
                        "id": 131556,
                        "name": "Chilakalurupet",
                        "latitude": "16.08987000",
                        "longitude": "80.16705000"
                    },
                    {
                        "id": 131563,
                        "name": "Chinnachowk",
                        "latitude": "14.47516000",
                        "longitude": "78.83540000"
                    },
                    {
                        "id": 131611,
                        "name": "Chipurupalle",
                        "latitude": "18.31142000",
                        "longitude": "83.56846000"
                    },
                    {
                        "id": 131612,
                        "name": "Chirala",
                        "latitude": "15.82385000",
                        "longitude": "80.35219000"
                    },
                    {
                        "id": 131575,
                        "name": "Chittoor",
                        "latitude": "13.41667000",
                        "longitude": "79.00000000"
                    },
                    {
                        "id": 131577,
                        "name": "Chodavaram",
                        "latitude": "17.82884000",
                        "longitude": "82.93526000"
                    },
                    {
                        "id": 131627,
                        "name": "Cuddapah",
                        "latitude": "14.41667000",
                        "longitude": "78.75000000"
                    },
                    {
                        "id": 131628,
                        "name": "Cumbum",
                        "latitude": "15.58171000",
                        "longitude": "79.11059000"
                    },
                    {
                        "id": 131658,
                        "name": "Darsi",
                        "latitude": "15.76978000",
                        "longitude": "79.67939000"
                    },
                    {
                        "id": 131727,
                        "name": "Dharmavaram",
                        "latitude": "14.41435000",
                        "longitude": "77.72035000"
                    },
                    {
                        "id": 131740,
                        "name": "Dhone",
                        "latitude": "15.39520000",
                        "longitude": "77.87150000"
                    },
                    {
                        "id": 131769,
                        "name": "Diguvametta",
                        "latitude": "15.39507000",
                        "longitude": "78.82930000"
                    },
                    {
                        "id": 131823,
                        "name": "East Godavari",
                        "latitude": "17.83333000",
                        "longitude": "81.83333000"
                    },
                    {
                        "id": 131830,
                        "name": "Elamanchili",
                        "latitude": "17.54907000",
                        "longitude": "82.85749000"
                    },
                    {
                        "id": 131832,
                        "name": "Ellore",
                        "latitude": "16.71311000",
                        "longitude": "81.10437000"
                    },
                    {
                        "id": 131836,
                        "name": "Emmiganur",
                        "latitude": "15.77203000",
                        "longitude": "77.48345000"
                    },
                    {
                        "id": 131842,
                        "name": "Erraguntla",
                        "latitude": "14.63853000",
                        "longitude": "78.53974000"
                    },
                    {
                        "id": 131846,
                        "name": "Etikoppaka",
                        "latitude": "17.50000000",
                        "longitude": "82.73333000"
                    },
                    {
                        "id": 131895,
                        "name": "Gajuwaka",
                        "latitude": "17.70000000",
                        "longitude": "83.21667000"
                    },
                    {
                        "id": 131906,
                        "name": "Ganguvada",
                        "latitude": "18.66667000",
                        "longitude": "84.11667000"
                    },
                    {
                        "id": 131915,
                        "name": "Gannavaram",
                        "latitude": "16.54092000",
                        "longitude": "80.80213000"
                    },
                    {
                        "id": 131955,
                        "name": "Giddalur",
                        "latitude": "15.37439000",
                        "longitude": "78.92609000"
                    },
                    {
                        "id": 131972,
                        "name": "Gokavaram",
                        "latitude": "17.25823000",
                        "longitude": "81.84985000"
                    },
                    {
                        "id": 131993,
                        "name": "Gorantla",
                        "latitude": "13.98411000",
                        "longitude": "77.77224000"
                    },
                    {
                        "id": 132001,
                        "name": "Govindapuram,Chilakaluripet,Guntur",
                        "latitude": "16.15477000",
                        "longitude": "80.10279000"
                    },
                    {
                        "id": 132010,
                        "name": "Gudivada",
                        "latitude": "16.43547000",
                        "longitude": "80.99555000"
                    },
                    {
                        "id": 132012,
                        "name": "Gudlavalleru",
                        "latitude": "16.35000000",
                        "longitude": "81.05000000"
                    },
                    {
                        "id": 132051,
                        "name": "Gudur",
                        "latitude": "14.15093000",
                        "longitude": "79.85210000"
                    },
                    {
                        "id": 132027,
                        "name": "Guntakal Junction",
                        "latitude": "15.17112000",
                        "longitude": "77.36244000"
                    },
                    {
                        "id": 132028,
                        "name": "Guntur",
                        "latitude": "16.29974000",
                        "longitude": "80.45729000"
                    },
                    {
                        "id": 132099,
                        "name": "Hindupur",
                        "latitude": "13.82807000",
                        "longitude": "77.49143000"
                    },
                    {
                        "id": 132151,
                        "name": "Ichchapuram",
                        "latitude": "19.11393000",
                        "longitude": "84.68721000"
                    },
                    {
                        "id": 132189,
                        "name": "Jaggayyapeta",
                        "latitude": "16.89380000",
                        "longitude": "80.09807000"
                    },
                    {
                        "id": 132228,
                        "name": "Jammalamadugu",
                        "latitude": "14.84677000",
                        "longitude": "78.38314000"
                    },
                    {
                        "id": 132328,
                        "name": "Kadiri",
                        "latitude": "14.11168000",
                        "longitude": "78.15982000"
                    },
                    {
                        "id": 132332,
                        "name": "Kaikalur",
                        "latitude": "16.55154000",
                        "longitude": "81.21400000"
                    },
                    {
                        "id": 132678,
                        "name": "Kakinada",
                        "latitude": "16.96036000",
                        "longitude": "82.23809000"
                    },
                    {
                        "id": 132358,
                        "name": "Kalyandurg",
                        "latitude": "14.54519000",
                        "longitude": "77.10552000"
                    },
                    {
                        "id": 132691,
                        "name": "Kamalapuram",
                        "latitude": "14.59830000",
                        "longitude": "78.66948000"
                    },
                    {
                        "id": 132372,
                        "name": "Kandukur",
                        "latitude": "15.21542000",
                        "longitude": "79.90390000"
                    },
                    {
                        "id": 132374,
                        "name": "Kanigiri",
                        "latitude": "15.40555000",
                        "longitude": "79.50694000"
                    },
                    {
                        "id": 132376,
                        "name": "Kankipadu",
                        "latitude": "16.43530000",
                        "longitude": "80.76715000"
                    },
                    {
                        "id": 132388,
                        "name": "Kanuru",
                        "latitude": "16.28584000",
                        "longitude": "81.25464000"
                    },
                    {
                        "id": 132729,
                        "name": "Kavali",
                        "latitude": "14.91630000",
                        "longitude": "79.99449000"
                    },
                    {
                        "id": 132552,
                        "name": "Kolanukonda",
                        "latitude": "16.45392000",
                        "longitude": "80.61046000"
                    },
                    {
                        "id": 132567,
                        "name": "Kondapalle",
                        "latitude": "16.61989000",
                        "longitude": "80.54244000"
                    },
                    {
                        "id": 132584,
                        "name": "Korukollu",
                        "latitude": "16.50000000",
                        "longitude": "81.25000000"
                    },
                    {
                        "id": 132590,
                        "name": "Kosigi",
                        "latitude": "15.85510000",
                        "longitude": "77.24463000"
                    },
                    {
                        "id": 132616,
                        "name": "Kovvur",
                        "latitude": "17.01620000",
                        "longitude": "81.72934000"
                    },
                    {
                        "id": 132621,
                        "name": "Krishna",
                        "latitude": "16.66667000",
                        "longitude": "81.00000000"
                    },
                    {
                        "id": 132653,
                        "name": "Kuppam",
                        "latitude": "12.74931000",
                        "longitude": "78.34189000"
                    },
                    {
                        "id": 132660,
                        "name": "Kurnool",
                        "latitude": "15.58333000",
                        "longitude": "78.33333000"
                    },
                    {
                        "id": 133055,
                        "name": "Macherla",
                        "latitude": "16.47635000",
                        "longitude": "79.43533000"
                    },
                    {
                        "id": 132806,
                        "name": "Machilipatnam",
                        "latitude": "16.18747000",
                        "longitude": "81.13888000"
                    },
                    {
                        "id": 132808,
                        "name": "Madanapalle",
                        "latitude": "13.55030000",
                        "longitude": "78.50288000"
                    },
                    {
                        "id": 133059,
                        "name": "Madugula",
                        "latitude": "17.91589000",
                        "longitude": "82.81578000"
                    },
                    {
                        "id": 132890,
                        "name": "Mandapeta",
                        "latitude": "16.86254000",
                        "longitude": "81.92921000"
                    },
                    {
                        "id": 132891,
                        "name": "Mandasa",
                        "latitude": "18.86830000",
                        "longitude": "84.46296000"
                    },
                    {
                        "id": 132902,
                        "name": "Mangalagiri",
                        "latitude": "16.43083000",
                        "longitude": "80.56815000"
                    },
                    {
                        "id": 133088,
                        "name": "Markapur",
                        "latitude": "15.73534000",
                        "longitude": "79.26848000"
                    },
                    {
                        "id": 133114,
                        "name": "Nagari",
                        "latitude": "13.32139000",
                        "longitude": "79.58557000"
                    },
                    {
                        "id": 133258,
                        "name": "Nagireddipalli",
                        "latitude": "14.27005000",
                        "longitude": "79.10131000"
                    },
                    {
                        "id": 133143,
                        "name": "Nandigama",
                        "latitude": "16.77170000",
                        "longitude": "80.28596000"
                    },
                    {
                        "id": 133144,
                        "name": "Nandikotkur",
                        "latitude": "15.85668000",
                        "longitude": "78.26569000"
                    },
                    {
                        "id": 133146,
                        "name": "Nandyal",
                        "latitude": "15.47799000",
                        "longitude": "78.48360000"
                    },
                    {
                        "id": 133156,
                        "name": "Narasannapeta",
                        "latitude": "18.41428000",
                        "longitude": "84.04463000"
                    },
                    {
                        "id": 133157,
                        "name": "Narasapur",
                        "latitude": "16.43425000",
                        "longitude": "81.69845000"
                    },
                    {
                        "id": 133158,
                        "name": "Narasaraopet",
                        "latitude": "16.23488000",
                        "longitude": "80.04927000"
                    },
                    {
                        "id": 133160,
                        "name": "Narasingapuram",
                        "latitude": "13.60759000",
                        "longitude": "79.31652000"
                    },
                    {
                        "id": 133275,
                        "name": "Narayanavanam",
                        "latitude": "13.42565000",
                        "longitude": "79.58881000"
                    },
                    {
                        "id": 133173,
                        "name": "Narsipatnam",
                        "latitude": "17.66709000",
                        "longitude": "82.61245000"
                    },
                    {
                        "id": 133283,
                        "name": "Nayudupet",
                        "latitude": "13.90742000",
                        "longitude": "79.89465000"
                    },
                    {
                        "id": 133206,
                        "name": "Nellore",
                        "latitude": "14.08333000",
                        "longitude": "79.58333000"
                    },
                    {
                        "id": 133214,
                        "name": "Nidadavole",
                        "latitude": "16.90572000",
                        "longitude": "81.67222000"
                    },
                    {
                        "id": 133294,
                        "name": "Nuzvid",
                        "latitude": "16.78854000",
                        "longitude": "80.84593000"
                    },
                    {
                        "id": 133300,
                        "name": "Ongole",
                        "latitude": "15.50357000",
                        "longitude": "80.04454000"
                    },
                    {
                        "id": 133521,
                        "name": "Pakala",
                        "latitude": "13.44903000",
                        "longitude": "79.11493000"
                    },
                    {
                        "id": 133523,
                        "name": "Palakollu",
                        "latitude": "16.51670000",
                        "longitude": "81.73000000"
                    },
                    {
                        "id": 133340,
                        "name": "Palasa",
                        "latitude": "18.77257000",
                        "longitude": "84.41012000"
                    },
                    {
                        "id": 133534,
                        "name": "Palkonda",
                        "latitude": "18.60374000",
                        "longitude": "83.75568000"
                    },
                    {
                        "id": 133331,
                        "name": "Pallevada",
                        "latitude": "16.57790000",
                        "longitude": "81.29463000"
                    },
                    {
                        "id": 133336,
                        "name": "Palmaner",
                        "latitude": "13.20000000",
                        "longitude": "78.74725000"
                    },
                    {
                        "id": 133361,
                        "name": "Parlakimidi",
                        "latitude": "18.78113000",
                        "longitude": "84.08836000"
                    },
                    {
                        "id": 133549,
                        "name": "Parvatipuram",
                        "latitude": "18.78392000",
                        "longitude": "83.42569000"
                    },
                    {
                        "id": 133395,
                        "name": "Pavuluru",
                        "latitude": "15.85292000",
                        "longitude": "80.16468000"
                    },
                    {
                        "id": 133400,
                        "name": "Pedana",
                        "latitude": "16.25582000",
                        "longitude": "81.14378000"
                    },
                    {
                        "id": 134447,
                        "name": "pedda nakkalapalem",
                        "latitude": "15.86680000",
                        "longitude": "80.16202000"
                    },
                    {
                        "id": 133402,
                        "name": "Peddapuram",
                        "latitude": "17.07701000",
                        "longitude": "82.13836000"
                    },
                    {
                        "id": 133409,
                        "name": "Penugonda",
                        "latitude": "16.65363000",
                        "longitude": "81.74550000"
                    },
                    {
                        "id": 133410,
                        "name": "Penukonda",
                        "latitude": "14.08286000",
                        "longitude": "77.59473000"
                    },
                    {
                        "id": 133440,
                        "name": "Phirangipuram",
                        "latitude": "16.29078000",
                        "longitude": "80.26233000"
                    },
                    {
                        "id": 133455,
                        "name": "Pippara",
                        "latitude": "16.71667000",
                        "longitude": "81.55000000"
                    },
                    {
                        "id": 133465,
                        "name": "Pithapuram",
                        "latitude": "17.11680000",
                        "longitude": "82.25284000"
                    },
                    {
                        "id": 133468,
                        "name": "Polavaram",
                        "latitude": "17.24754000",
                        "longitude": "81.64372000"
                    },
                    {
                        "id": 133476,
                        "name": "Ponnur",
                        "latitude": "16.07114000",
                        "longitude": "80.54944000"
                    },
                    {
                        "id": 133478,
                        "name": "Ponnuru",
                        "latitude": "16.06547000",
                        "longitude": "80.55203000"
                    },
                    {
                        "id": 133485,
                        "name": "Prakasam",
                        "latitude": "15.50000000",
                        "longitude": "79.50000000"
                    },
                    {
                        "id": 133489,
                        "name": "Proddatur",
                        "latitude": "14.75020000",
                        "longitude": "78.54813000"
                    },
                    {
                        "id": 133497,
                        "name": "Pulivendla",
                        "latitude": "14.42139000",
                        "longitude": "78.22502000"
                    },
                    {
                        "id": 133506,
                        "name": "Punganuru",
                        "latitude": "13.36672000",
                        "longitude": "78.57186000"
                    },
                    {
                        "id": 133517,
                        "name": "Puttaparthi",
                        "latitude": "14.16520000",
                        "longitude": "77.81170000"
                    },
                    {
                        "id": 133519,
                        "name": "Puttur",
                        "latitude": "13.44189000",
                        "longitude": "79.55314000"
                    },
                    {
                        "id": 133671,
                        "name": "Rajahmundry",
                        "latitude": "17.00517000",
                        "longitude": "81.77784000"
                    },
                    {
                        "id": 133691,
                        "name": "Ramachandrapuram",
                        "latitude": "16.83636000",
                        "longitude": "82.02871000"
                    },
                    {
                        "id": 133600,
                        "name": "Ramanayyapeta",
                        "latitude": "16.94516000",
                        "longitude": "82.23850000"
                    },
                    {
                        "id": 133712,
                        "name": "Ramapuram",
                        "latitude": "15.28749000",
                        "longitude": "77.86722000"
                    },
                    {
                        "id": 133605,
                        "name": "Rampachodavaram",
                        "latitude": "17.44088000",
                        "longitude": "81.77558000"
                    },
                    {
                        "id": 133729,
                        "name": "Rayachoti",
                        "latitude": "14.05723000",
                        "longitude": "78.75056000"
                    },
                    {
                        "id": 133730,
                        "name": "Rayadrug",
                        "latitude": "14.69971000",
                        "longitude": "76.85241000"
                    },
                    {
                        "id": 133734,
                        "name": "Razam",
                        "latitude": "18.44909000",
                        "longitude": "83.65957000"
                    },
                    {
                        "id": 133732,
                        "name": "Razampeta",
                        "latitude": "14.19544000",
                        "longitude": "79.15896000"
                    },
                    {
                        "id": 133733,
                        "name": "Razole",
                        "latitude": "16.47608000",
                        "longitude": "81.83912000"
                    },
                    {
                        "id": 133627,
                        "name": "Renigunta",
                        "latitude": "13.65143000",
                        "longitude": "79.51256000"
                    },
                    {
                        "id": 133630,
                        "name": "Repalle",
                        "latitude": "16.01840000",
                        "longitude": "80.82958000"
                    },
                    {
                        "id": 134065,
                        "name": "Salur",
                        "latitude": "18.51716000",
                        "longitude": "83.20548000"
                    },
                    {
                        "id": 134066,
                        "name": "Samalkot",
                        "latitude": "17.05675000",
                        "longitude": "82.17639000"
                    },
                    {
                        "id": 133822,
                        "name": "Sattenapalle",
                        "latitude": "16.39381000",
                        "longitude": "80.15221000"
                    },
                    {
                        "id": 133946,
                        "name": "Singarayakonda",
                        "latitude": "15.23046000",
                        "longitude": "80.02794000"
                    },
                    {
                        "id": 133990,
                        "name": "Sompeta",
                        "latitude": "18.94419000",
                        "longitude": "84.58449000"
                    },
                    {
                        "id": 134019,
                        "name": "Srikakulam",
                        "latitude": "18.29890000",
                        "longitude": "83.89751000"
                    },
                    {
                        "id": 134032,
                        "name": "Srisailain",
                        "latitude": "16.07217000",
                        "longitude": "78.86816000"
                    },
                    {
                        "id": 134093,
                        "name": "Suluru",
                        "latitude": "13.70000000",
                        "longitude": "80.01667000"
                    },
                    {
                        "id": 134226,
                        "name": "Tadepalle",
                        "latitude": "16.48333000",
                        "longitude": "80.60000000"
                    },
                    {
                        "id": 134227,
                        "name": "Tadepallegudem",
                        "latitude": "16.81467000",
                        "longitude": "81.52717000"
                    },
                    {
                        "id": 134228,
                        "name": "Tadpatri",
                        "latitude": "14.90832000",
                        "longitude": "78.01031000"
                    },
                    {
                        "id": 134113,
                        "name": "Tanuku",
                        "latitude": "16.75438000",
                        "longitude": "81.68143000"
                    },
                    {
                        "id": 134126,
                        "name": "Tekkali",
                        "latitude": "18.60570000",
                        "longitude": "84.23546000"
                    },
                    {
                        "id": 134183,
                        "name": "Tirumala",
                        "latitude": "13.68333000",
                        "longitude": "79.35000000"
                    },
                    {
                        "id": 134187,
                        "name": "Tirupati",
                        "latitude": "13.63551000",
                        "longitude": "79.41989000"
                    },
                    {
                        "id": 134222,
                        "name": "Tuni",
                        "latitude": "17.35905000",
                        "longitude": "82.54607000"
                    },
                    {
                        "id": 134292,
                        "name": "Uravakonda",
                        "latitude": "14.94348000",
                        "longitude": "77.25494000"
                    },
                    {
                        "id": 134448,
                        "name": "vadlamuru",
                        "latitude": "17.09545000",
                        "longitude": "82.16565000"
                    },
                    {
                        "id": 134308,
                        "name": "Vadlapudi",
                        "latitude": "14.31119000",
                        "longitude": "79.80430000"
                    },
                    {
                        "id": 134347,
                        "name": "Venkatagiri",
                        "latitude": "13.96005000",
                        "longitude": "79.58032000"
                    },
                    {
                        "id": 134348,
                        "name": "Vepagunta",
                        "latitude": "17.77844000",
                        "longitude": "83.21577000"
                    },
                    {
                        "id": 134350,
                        "name": "Vetapalem",
                        "latitude": "15.78502000",
                        "longitude": "80.30663000"
                    },
                    {
                        "id": 134356,
                        "name": "Vijayawada",
                        "latitude": "16.50745000",
                        "longitude": "80.64660000"
                    },
                    {
                        "id": 134364,
                        "name": "Vinukonda",
                        "latitude": "16.05310000",
                        "longitude": "79.73964000"
                    },
                    {
                        "id": 134369,
                        "name": "Visakhapatnam",
                        "latitude": "17.68009000",
                        "longitude": "83.20161000"
                    },
                    {
                        "id": 134373,
                        "name": "Vizianagaram",
                        "latitude": "18.11692000",
                        "longitude": "83.41148000"
                    },
                    {
                        "id": 134374,
                        "name": "Vizianagaram District",
                        "latitude": "18.41102000",
                        "longitude": "83.37677000"
                    },
                    {
                        "id": 134377,
                        "name": "Vuyyuru",
                        "latitude": "16.36307000",
                        "longitude": "80.84406000"
                    },
                    {
                        "id": 134407,
                        "name": "West Godavari",
                        "latitude": "17.00000000",
                        "longitude": "81.16667000"
                    },
                    {
                        "id": 134424,
                        "name": "Yanam",
                        "latitude": "16.73308000",
                        "longitude": "82.21364000"
                    },
                    {
                        "id": 134426,
                        "name": "Yanamalakuduru",
                        "latitude": "16.48531000",
                        "longitude": "80.66746000"
                    },
                    {
                        "id": 134437,
                        "name": "Yarada",
                        "latitude": "17.65872000",
                        "longitude": "83.27419000"
                    }
                ]
            },
            {
                "id": 4024,
                "name": "Arunachal Pradesh",
                "state_code": "AR",
                "latitude": "28.21799940",
                "longitude": "94.72775280",
                "cities": [
                    {
                        "id": 57645,
                        "name": "Along",
                        "latitude": "28.16951000",
                        "longitude": "94.80060000"
                    },
                    {
                        "id": 57708,
                        "name": "Anjaw",
                        "latitude": "28.06549000",
                        "longitude": "96.82878000"
                    },
                    {
                        "id": 58151,
                        "name": "Basar",
                        "latitude": "27.99008000",
                        "longitude": "94.69451000"
                    },
                    {
                        "id": 58080,
                        "name": "Bomdila",
                        "latitude": "27.26475000",
                        "longitude": "92.42472000"
                    },
                    {
                        "id": 58196,
                        "name": "Changlang",
                        "latitude": "27.36265000",
                        "longitude": "96.34518000"
                    },
                    {
                        "id": 131763,
                        "name": "Dibang Valley",
                        "latitude": "28.70000000",
                        "longitude": "95.70000000"
                    },
                    {
                        "id": 131826,
                        "name": "East Kameng",
                        "latitude": "27.30000000",
                        "longitude": "93.05000000"
                    },
                    {
                        "id": 131828,
                        "name": "East Siang",
                        "latitude": "28.12379000",
                        "longitude": "95.16339000"
                    },
                    {
                        "id": 132090,
                        "name": "Hayuliang",
                        "latitude": "28.07301000",
                        "longitude": "96.54305000"
                    },
                    {
                        "id": 132178,
                        "name": "Itanagar",
                        "latitude": "27.08694000",
                        "longitude": "93.60987000"
                    },
                    {
                        "id": 132499,
                        "name": "Khonsa",
                        "latitude": "27.01667000",
                        "longitude": "95.56667000"
                    },
                    {
                        "id": 132663,
                        "name": "Kurung Kumey",
                        "latitude": "27.99983000",
                        "longitude": "93.39240000"
                    },
                    {
                        "id": 132769,
                        "name": "Lohit District",
                        "latitude": "27.84012000",
                        "longitude": "96.19521000"
                    },
                    {
                        "id": 132779,
                        "name": "Lower Dibang Valley",
                        "latitude": "28.37258000",
                        "longitude": "95.88040000"
                    },
                    {
                        "id": 132780,
                        "name": "Lower Subansiri",
                        "latitude": "27.62554000",
                        "longitude": "93.93908000"
                    },
                    {
                        "id": 132934,
                        "name": "Margherita",
                        "latitude": "27.28482000",
                        "longitude": "95.66796000"
                    },
                    {
                        "id": 133121,
                        "name": "Naharlagun",
                        "latitude": "27.10467000",
                        "longitude": "93.69518000"
                    },
                    {
                        "id": 133551,
                        "name": "Pasighat",
                        "latitude": "28.06631000",
                        "longitude": "95.32678000"
                    },
                    {
                        "id": 134120,
                        "name": "Tawang",
                        "latitude": "27.57417000",
                        "longitude": "91.92437000"
                    },
                    {
                        "id": 134135,
                        "name": "Tezu",
                        "latitude": "27.91256000",
                        "longitude": "96.12882000"
                    },
                    {
                        "id": 134199,
                        "name": "Tirap",
                        "latitude": "27.01917000",
                        "longitude": "95.51788000"
                    },
                    {
                        "id": 134288,
                        "name": "Upper Siang",
                        "latitude": "28.83355000",
                        "longitude": "94.91806000"
                    },
                    {
                        "id": 134289,
                        "name": "Upper Subansiri",
                        "latitude": "28.30000000",
                        "longitude": "94.00000000"
                    },
                    {
                        "id": 134409,
                        "name": "West Kameng",
                        "latitude": "27.40000000",
                        "longitude": "92.35000000"
                    },
                    {
                        "id": 134411,
                        "name": "West Siang",
                        "latitude": "28.40000000",
                        "longitude": "94.55000000"
                    },
                    {
                        "id": 134444,
                        "name": "Ziro",
                        "latitude": "27.59497000",
                        "longitude": "93.83854000"
                    }
                ]
            },
            {
                "id": 4027,
                "name": "Assam",
                "state_code": "AS",
                "latitude": "26.20060430",
                "longitude": "92.93757390",
                "cities": [
                    {
                        "id": 57585,
                        "name": "Abhayapuri",
                        "latitude": "26.32255000",
                        "longitude": "90.68526000"
                    },
                    {
                        "id": 57679,
                        "name": "Amguri",
                        "latitude": "26.81482000",
                        "longitude": "94.52614000"
                    },
                    {
                        "id": 57787,
                        "name": "Badarpur",
                        "latitude": "24.86852000",
                        "longitude": "92.59606000"
                    },
                    {
                        "id": 57820,
                        "name": "Baksa",
                        "latitude": "26.69804000",
                        "longitude": "91.15142000"
                    },
                    {
                        "id": 57883,
                        "name": "Barpathar",
                        "latitude": "26.28709000",
                        "longitude": "93.88844000"
                    },
                    {
                        "id": 57884,
                        "name": "Barpeta",
                        "latitude": "26.47104000",
                        "longitude": "91.03080000"
                    },
                    {
                        "id": 57885,
                        "name": "Barpeta Road",
                        "latitude": "26.50284000",
                        "longitude": "90.96937000"
                    },
                    {
                        "id": 58150,
                        "name": "Basugaon",
                        "latitude": "26.46742000",
                        "longitude": "90.41951000"
                    },
                    {
                        "id": 58028,
                        "name": "Bihpuriagaon",
                        "latitude": "27.01718000",
                        "longitude": "93.91673000"
                    },
                    {
                        "id": 58034,
                        "name": "Bijni",
                        "latitude": "26.49588000",
                        "longitude": "90.70298000"
                    },
                    {
                        "id": 58053,
                        "name": "Bilasipara",
                        "latitude": "26.23285000",
                        "longitude": "90.23410000"
                    },
                    {
                        "id": 58075,
                        "name": "Bokajan",
                        "latitude": "26.02131000",
                        "longitude": "93.77945000"
                    },
                    {
                        "id": 58077,
                        "name": "Bokakhat",
                        "latitude": "26.64018000",
                        "longitude": "93.60052000"
                    },
                    {
                        "id": 58081,
                        "name": "Bongaigaon",
                        "latitude": "26.46030000",
                        "longitude": "90.64640000"
                    },
                    {
                        "id": 131634,
                        "name": "Cachar",
                        "latitude": "24.78213000",
                        "longitude": "92.85771000"
                    },
                    {
                        "id": 131588,
                        "name": "Chabua",
                        "latitude": "27.48253000",
                        "longitude": "95.17451000"
                    },
                    {
                        "id": 131604,
                        "name": "Chapar",
                        "latitude": "26.27266000",
                        "longitude": "90.44556000"
                    },
                    {
                        "id": 131568,
                        "name": "Chirang",
                        "latitude": "26.52527000",
                        "longitude": "90.49066000"
                    },
                    {
                        "id": 131657,
                        "name": "Darrang",
                        "latitude": "26.51195000",
                        "longitude": "92.16843000"
                    },
                    {
                        "id": 131695,
                        "name": "Dergaon",
                        "latitude": "26.70000000",
                        "longitude": "93.96667000"
                    },
                    {
                        "id": 131732,
                        "name": "Dhekiajuli",
                        "latitude": "26.70367000",
                        "longitude": "92.47808000"
                    },
                    {
                        "id": 131733,
                        "name": "Dhemaji",
                        "latitude": "27.60910000",
                        "longitude": "94.79420000"
                    },
                    {
                        "id": 131737,
                        "name": "Dhing",
                        "latitude": "26.46793000",
                        "longitude": "92.47336000"
                    },
                    {
                        "id": 131744,
                        "name": "Dhubri",
                        "latitude": "26.06749000",
                        "longitude": "90.02238000"
                    },
                    {
                        "id": 131762,
                        "name": "Dibrugarh",
                        "latitude": "27.50000000",
                        "longitude": "95.00000000"
                    },
                    {
                        "id": 131766,
                        "name": "Digboi",
                        "latitude": "27.39321000",
                        "longitude": "95.61839000"
                    },
                    {
                        "id": 131770,
                        "name": "Dima Hasao District",
                        "latitude": "25.50000000",
                        "longitude": "93.00000000"
                    },
                    {
                        "id": 131776,
                        "name": "Diphu",
                        "latitude": "25.84341000",
                        "longitude": "93.43116000"
                    },
                    {
                        "id": 131778,
                        "name": "Dispur",
                        "latitude": "26.13564000",
                        "longitude": "91.80069000"
                    },
                    {
                        "id": 131795,
                        "name": "Duliagaon",
                        "latitude": "27.37227000",
                        "longitude": "95.30754000"
                    },
                    {
                        "id": 131796,
                        "name": "Dum Duma",
                        "latitude": "27.56884000",
                        "longitude": "95.55664000"
                    },
                    {
                        "id": 131928,
                        "name": "Gauripur",
                        "latitude": "26.08334000",
                        "longitude": "89.96118000"
                    },
                    {
                        "id": 132004,
                        "name": "Goalpara",
                        "latitude": "26.12791000",
                        "longitude": "90.60974000"
                    },
                    {
                        "id": 131967,
                        "name": "Gohpur",
                        "latitude": "26.88184000",
                        "longitude": "93.61560000"
                    },
                    {
                        "id": 131976,
                        "name": "Golaghat",
                        "latitude": "26.40920000",
                        "longitude": "93.91193000"
                    },
                    {
                        "id": 131977,
                        "name": "Golakganj",
                        "latitude": "26.10216000",
                        "longitude": "89.82275000"
                    },
                    {
                        "id": 131997,
                        "name": "Goshaingaon",
                        "latitude": "26.43946000",
                        "longitude": "89.96307000"
                    },
                    {
                        "id": 132039,
                        "name": "Guwahati",
                        "latitude": "26.18440000",
                        "longitude": "91.74580000"
                    },
                    {
                        "id": 132134,
                        "name": "Haflong",
                        "latitude": "25.16478000",
                        "longitude": "93.01744000"
                    },
                    {
                        "id": 132055,
                        "name": "Hailakandi",
                        "latitude": "24.50170000",
                        "longitude": "92.60069000"
                    },
                    {
                        "id": 132137,
                        "name": "Hajo",
                        "latitude": "26.24520000",
                        "longitude": "91.52525000"
                    },
                    {
                        "id": 132110,
                        "name": "Hojai",
                        "latitude": "26.00281000",
                        "longitude": "92.85605000"
                    },
                    {
                        "id": 132126,
                        "name": "Howli",
                        "latitude": "26.42237000",
                        "longitude": "90.98004000"
                    },
                    {
                        "id": 132291,
                        "name": "Jogighopa",
                        "latitude": "26.22646000",
                        "longitude": "90.57247000"
                    },
                    {
                        "id": 132294,
                        "name": "Jorhat",
                        "latitude": "26.80000000",
                        "longitude": "94.26000000"
                    },
                    {
                        "id": 132693,
                        "name": "Kamrup",
                        "latitude": "26.22322000",
                        "longitude": "91.65344000"
                    },
                    {
                        "id": 132366,
                        "name": "Kamrup Metropolitan",
                        "latitude": "26.05375000",
                        "longitude": "92.00763000"
                    },
                    {
                        "id": 132718,
                        "name": "Karbi Anglong",
                        "latitude": "26.00000000",
                        "longitude": "93.50000000"
                    },
                    {
                        "id": 132402,
                        "name": "Karimganj",
                        "latitude": "24.60000000",
                        "longitude": "92.40000000"
                    },
                    {
                        "id": 132518,
                        "name": "Kharupatia",
                        "latitude": "26.51839000",
                        "longitude": "92.14722000"
                    },
                    {
                        "id": 132551,
                        "name": "Kokrajhar",
                        "latitude": "26.60000000",
                        "longitude": "90.20000000"
                    },
                    {
                        "id": 132742,
                        "name": "Lakhimpur",
                        "latitude": "27.35000000",
                        "longitude": "94.25000000"
                    },
                    {
                        "id": 132743,
                        "name": "Lakhipur",
                        "latitude": "24.79281000",
                        "longitude": "93.00910000"
                    },
                    {
                        "id": 132793,
                        "name": "Lala",
                        "latitude": "24.55418000",
                        "longitude": "92.61592000"
                    },
                    {
                        "id": 132786,
                        "name": "Lumding Railway Colony",
                        "latitude": "25.74903000",
                        "longitude": "93.16998000"
                    },
                    {
                        "id": 132842,
                        "name": "Mahur",
                        "latitude": "25.18305000",
                        "longitude": "93.11342000"
                    },
                    {
                        "id": 132853,
                        "name": "Maibong",
                        "latitude": "25.30125000",
                        "longitude": "93.13811000"
                    },
                    {
                        "id": 133064,
                        "name": "Makum",
                        "latitude": "27.48652000",
                        "longitude": "95.43646000"
                    },
                    {
                        "id": 132904,
                        "name": "Mangaldai",
                        "latitude": "26.44212000",
                        "longitude": "92.03047000"
                    },
                    {
                        "id": 132937,
                        "name": "Mariani",
                        "latitude": "26.65725000",
                        "longitude": "94.31529000"
                    },
                    {
                        "id": 133002,
                        "name": "Moranha",
                        "latitude": "27.18735000",
                        "longitude": "94.91557000"
                    },
                    {
                        "id": 132995,
                        "name": "Morigaon",
                        "latitude": "26.25213000",
                        "longitude": "92.34238000"
                    },
                    {
                        "id": 133110,
                        "name": "Nagaon",
                        "latitude": "26.35037000",
                        "longitude": "92.69225000"
                    },
                    {
                        "id": 133122,
                        "name": "Nahorkatiya",
                        "latitude": "27.28912000",
                        "longitude": "95.34180000"
                    },
                    {
                        "id": 133130,
                        "name": "Nalbari",
                        "latitude": "26.50000000",
                        "longitude": "91.40000000"
                    },
                    {
                        "id": 133266,
                        "name": "Namrup",
                        "latitude": "27.19395000",
                        "longitude": "95.31929000"
                    },
                    {
                        "id": 133284,
                        "name": "Nazira",
                        "latitude": "26.91649000",
                        "longitude": "94.73611000"
                    },
                    {
                        "id": 133239,
                        "name": "North Guwahati",
                        "latitude": "26.19749000",
                        "longitude": "91.72020000"
                    },
                    {
                        "id": 133240,
                        "name": "North Lakhimpur",
                        "latitude": "27.23517000",
                        "longitude": "94.10357000"
                    },
                    {
                        "id": 133248,
                        "name": "Numaligarh",
                        "latitude": "26.62249000",
                        "longitude": "93.72225000"
                    },
                    {
                        "id": 133341,
                        "name": "Palasbari",
                        "latitude": "26.12388000",
                        "longitude": "91.53974000"
                    },
                    {
                        "id": 133584,
                        "name": "Raha",
                        "latitude": "26.23333000",
                        "longitude": "92.51667000"
                    },
                    {
                        "id": 133610,
                        "name": "Rangapara",
                        "latitude": "26.83772000",
                        "longitude": "92.66876000"
                    },
                    {
                        "id": 133608,
                        "name": "Rangia",
                        "latitude": "26.44931000",
                        "longitude": "91.61356000"
                    },
                    {
                        "id": 133798,
                        "name": "Sapatgram",
                        "latitude": "26.33732000",
                        "longitude": "90.12360000"
                    },
                    {
                        "id": 133809,
                        "name": "Sarupathar",
                        "latitude": "26.20600000",
                        "longitude": "96.81000000"
                    },
                    {
                        "id": 133916,
                        "name": "Sibsagar",
                        "latitude": "26.98427000",
                        "longitude": "94.63784000"
                    },
                    {
                        "id": 133934,
                        "name": "Silapathar",
                        "latitude": "27.59441000",
                        "longitude": "94.72402000"
                    },
                    {
                        "id": 133935,
                        "name": "Silchar",
                        "latitude": "24.82733000",
                        "longitude": "92.79787000"
                    },
                    {
                        "id": 133979,
                        "name": "Soalkuchi",
                        "latitude": "26.16806000",
                        "longitude": "91.57111000"
                    },
                    {
                        "id": 133998,
                        "name": "Sonari",
                        "latitude": "27.02462000",
                        "longitude": "95.01629000"
                    },
                    {
                        "id": 133996,
                        "name": "Sonitpur",
                        "latitude": "26.76748000",
                        "longitude": "92.96425000"
                    },
                    {
                        "id": 134003,
                        "name": "Sorbhog",
                        "latitude": "26.48612000",
                        "longitude": "90.88590000"
                    },
                    {
                        "id": 134134,
                        "name": "Tezpur",
                        "latitude": "26.63333000",
                        "longitude": "92.80000000"
                    },
                    {
                        "id": 134175,
                        "name": "Tinsukia",
                        "latitude": "27.60000000",
                        "longitude": "95.60000000"
                    },
                    {
                        "id": 134203,
                        "name": "Titabar",
                        "latitude": "26.60140000",
                        "longitude": "94.20386000"
                    },
                    {
                        "id": 134252,
                        "name": "Udalguri",
                        "latitude": "26.75367000",
                        "longitude": "92.10215000"
                    }
                ]
            },
            {
                "id": 4037,
                "name": "Bihar",
                "state_code": "BR",
                "latitude": "25.09607420",
                "longitude": "85.31311940",
                "cities": [
                    {
                        "id": 57661,
                        "name": "Amarpur",
                        "latitude": "25.03967000",
                        "longitude": "86.90247000"
                    },
                    {
                        "id": 57730,
                        "name": "Araria",
                        "latitude": "26.20000000",
                        "longitude": "87.40000000"
                    },
                    {
                        "id": 57739,
                        "name": "Arrah",
                        "latitude": "25.55629000",
                        "longitude": "84.66335000"
                    },
                    {
                        "id": 57747,
                        "name": "Arwal",
                        "latitude": "25.16158000",
                        "longitude": "84.69040000"
                    },
                    {
                        "id": 57749,
                        "name": "Asarganj",
                        "latitude": "25.15046000",
                        "longitude": "86.68639000"
                    },
                    {
                        "id": 57766,
                        "name": "Aurangabad",
                        "latitude": "24.75204000",
                        "longitude": "84.37420000"
                    },
                    {
                        "id": 57796,
                        "name": "Bagaha",
                        "latitude": "27.09918000",
                        "longitude": "84.09003000"
                    },
                    {
                        "id": 57809,
                        "name": "Bahadurganj",
                        "latitude": "26.26172000",
                        "longitude": "87.82443000"
                    },
                    {
                        "id": 57815,
                        "name": "Bairagnia",
                        "latitude": "26.74063000",
                        "longitude": "85.27323000"
                    },
                    {
                        "id": 57816,
                        "name": "Baisi",
                        "latitude": "25.86302000",
                        "longitude": "87.74487000"
                    },
                    {
                        "id": 57818,
                        "name": "Bakhtiyarpur",
                        "latitude": "25.46179000",
                        "longitude": "85.53179000"
                    },
                    {
                        "id": 57850,
                        "name": "Bangaon",
                        "latitude": "25.86728000",
                        "longitude": "86.51152000"
                    },
                    {
                        "id": 57854,
                        "name": "Banka",
                        "latitude": "24.89214000",
                        "longitude": "86.98425000"
                    },
                    {
                        "id": 57855,
                        "name": "Banmankhi",
                        "latitude": "25.88857000",
                        "longitude": "87.19421000"
                    },
                    {
                        "id": 57860,
                        "name": "Bar Bigha",
                        "latitude": "25.21855000",
                        "longitude": "85.73320000"
                    },
                    {
                        "id": 57864,
                        "name": "Barauli",
                        "latitude": "26.38109000",
                        "longitude": "84.58648000"
                    },
                    {
                        "id": 58141,
                        "name": "Barh",
                        "latitude": "25.48339000",
                        "longitude": "85.70928000"
                    },
                    {
                        "id": 57873,
                        "name": "Barhiya",
                        "latitude": "25.28814000",
                        "longitude": "86.02055000"
                    },
                    {
                        "id": 57875,
                        "name": "Bariarpur",
                        "latitude": "25.28791000",
                        "longitude": "86.57643000"
                    },
                    {
                        "id": 58145,
                        "name": "Baruni",
                        "latitude": "25.47509000",
                        "longitude": "85.96813000"
                    },
                    {
                        "id": 57915,
                        "name": "Begusarai",
                        "latitude": "25.41853000",
                        "longitude": "86.13389000"
                    },
                    {
                        "id": 57927,
                        "name": "Belsand",
                        "latitude": "26.44365000",
                        "longitude": "85.40076000"
                    },
                    {
                        "id": 57941,
                        "name": "Bettiah",
                        "latitude": "26.80229000",
                        "longitude": "84.50311000"
                    },
                    {
                        "id": 57947,
                        "name": "Bhabhua",
                        "latitude": "25.04049000",
                        "longitude": "83.60749000"
                    },
                    {
                        "id": 58009,
                        "name": "Bhagalpur",
                        "latitude": "25.29023000",
                        "longitude": "87.06665000"
                    },
                    {
                        "id": 57957,
                        "name": "Bhagirathpur",
                        "latitude": "26.26950000",
                        "longitude": "86.06346000"
                    },
                    {
                        "id": 57974,
                        "name": "Bhawanipur",
                        "latitude": "26.45352000",
                        "longitude": "87.02744000"
                    },
                    {
                        "id": 57991,
                        "name": "Bhojpur",
                        "latitude": "25.30886000",
                        "longitude": "84.44504000"
                    },
                    {
                        "id": 58029,
                        "name": "Bihar Sharif",
                        "latitude": "25.20084000",
                        "longitude": "85.52389000"
                    },
                    {
                        "id": 58030,
                        "name": "Bihariganj",
                        "latitude": "25.73415000",
                        "longitude": "86.98837000"
                    },
                    {
                        "id": 58039,
                        "name": "Bikramganj",
                        "latitude": "25.21073000",
                        "longitude": "84.25508000"
                    },
                    {
                        "id": 58160,
                        "name": "Birpur",
                        "latitude": "26.50823000",
                        "longitude": "87.01194000"
                    },
                    {
                        "id": 58089,
                        "name": "Buddh Gaya",
                        "latitude": "24.69808000",
                        "longitude": "84.98690000"
                    },
                    {
                        "id": 58100,
                        "name": "Buxar",
                        "latitude": "25.50000000",
                        "longitude": "84.10000000"
                    },
                    {
                        "id": 131590,
                        "name": "Chakia",
                        "latitude": "26.41598000",
                        "longitude": "85.04665000"
                    },
                    {
                        "id": 131605,
                        "name": "Chapra",
                        "latitude": "25.78031000",
                        "longitude": "84.74709000"
                    },
                    {
                        "id": 131541,
                        "name": "Chhatapur",
                        "latitude": "26.21965000",
                        "longitude": "87.00479000"
                    },
                    {
                        "id": 131620,
                        "name": "Colgong",
                        "latitude": "25.26328000",
                        "longitude": "87.23264000"
                    },
                    {
                        "id": 131647,
                        "name": "Dalsingh Sarai",
                        "latitude": "25.66795000",
                        "longitude": "85.83636000"
                    },
                    {
                        "id": 131654,
                        "name": "Darbhanga",
                        "latitude": "26.00000000",
                        "longitude": "86.00000000"
                    },
                    {
                        "id": 131664,
                        "name": "Daudnagar",
                        "latitude": "25.03473000",
                        "longitude": "84.40095000"
                    },
                    {
                        "id": 131677,
                        "name": "Dehri",
                        "latitude": "24.90247000",
                        "longitude": "84.18217000"
                    },
                    {
                        "id": 131748,
                        "name": "Dhaka",
                        "latitude": "26.67479000",
                        "longitude": "85.16698000"
                    },
                    {
                        "id": 131767,
                        "name": "Dighwara",
                        "latitude": "25.74434000",
                        "longitude": "85.01003000"
                    },
                    {
                        "id": 131773,
                        "name": "Dinapore",
                        "latitude": "25.63705000",
                        "longitude": "85.04794000"
                    },
                    {
                        "id": 131798,
                        "name": "Dumra",
                        "latitude": "26.56708000",
                        "longitude": "85.52040000"
                    },
                    {
                        "id": 131799,
                        "name": "Dumraon",
                        "latitude": "25.55265000",
                        "longitude": "84.15149000"
                    },
                    {
                        "id": 131873,
                        "name": "Fatwa",
                        "latitude": "25.50958000",
                        "longitude": "85.30504000"
                    },
                    {
                        "id": 131878,
                        "name": "Forbesganj",
                        "latitude": "26.30253000",
                        "longitude": "87.26556000"
                    },
                    {
                        "id": 131932,
                        "name": "Gaya",
                        "latitude": "24.79686000",
                        "longitude": "85.00385000"
                    },
                    {
                        "id": 131943,
                        "name": "Ghoga",
                        "latitude": "25.21738000",
                        "longitude": "87.15710000"
                    },
                    {
                        "id": 131987,
                        "name": "Gopalganj",
                        "latitude": "26.50000000",
                        "longitude": "84.33333000"
                    },
                    {
                        "id": 132138,
                        "name": "Hajipur",
                        "latitude": "25.68544000",
                        "longitude": "85.20981000"
                    },
                    {
                        "id": 132095,
                        "name": "Hilsa",
                        "latitude": "25.31642000",
                        "longitude": "85.28234000"
                    },
                    {
                        "id": 132107,
                        "name": "Hisua",
                        "latitude": "24.83360000",
                        "longitude": "85.41729000"
                    },
                    {
                        "id": 132174,
                        "name": "Islampur",
                        "latitude": "25.14075000",
                        "longitude": "85.20587000"
                    },
                    {
                        "id": 132188,
                        "name": "Jagdispur",
                        "latitude": "25.46811000",
                        "longitude": "84.41939000"
                    },
                    {
                        "id": 132198,
                        "name": "Jahanabad",
                        "latitude": "25.21368000",
                        "longitude": "84.98710000"
                    },
                    {
                        "id": 132234,
                        "name": "Jamalpur",
                        "latitude": "25.31258000",
                        "longitude": "86.48888000"
                    },
                    {
                        "id": 132233,
                        "name": "Jamui",
                        "latitude": "24.92082000",
                        "longitude": "86.17538000"
                    },
                    {
                        "id": 132258,
                        "name": "Jaynagar",
                        "latitude": "26.59048000",
                        "longitude": "86.13791000"
                    },
                    {
                        "id": 132259,
                        "name": "Jehanabad",
                        "latitude": "25.20701000",
                        "longitude": "84.99573000"
                    },
                    {
                        "id": 132274,
                        "name": "Jha-Jha",
                        "latitude": "24.77107000",
                        "longitude": "86.37888000"
                    },
                    {
                        "id": 132267,
                        "name": "Jhanjharpur",
                        "latitude": "26.26467000",
                        "longitude": "86.27993000"
                    },
                    {
                        "id": 132288,
                        "name": "Jogbani",
                        "latitude": "26.39905000",
                        "longitude": "87.26525000"
                    },
                    {
                        "id": 132337,
                        "name": "Kaimur District",
                        "latitude": "25.05077000",
                        "longitude": "83.58261000"
                    },
                    {
                        "id": 132417,
                        "name": "Kasba",
                        "latitude": "25.85643000",
                        "longitude": "87.53836000"
                    },
                    {
                        "id": 132423,
                        "name": "Katihar",
                        "latitude": "25.50000000",
                        "longitude": "87.60000000"
                    },
                    {
                        "id": 132451,
                        "name": "Khagaria",
                        "latitude": "25.50220000",
                        "longitude": "86.46708000"
                    },
                    {
                        "id": 132452,
                        "name": "Khagaul",
                        "latitude": "25.57898000",
                        "longitude": "85.04564000"
                    },
                    {
                        "id": 132470,
                        "name": "Kharagpur",
                        "latitude": "25.12446000",
                        "longitude": "86.55578000"
                    },
                    {
                        "id": 132510,
                        "name": "Khusropur",
                        "latitude": "25.48174000",
                        "longitude": "85.38492000"
                    },
                    {
                        "id": 132529,
                        "name": "Kishanganj",
                        "latitude": "26.30000000",
                        "longitude": "88.00000000"
                    },
                    {
                        "id": 132620,
                        "name": "Koath",
                        "latitude": "25.32643000",
                        "longitude": "84.25983000"
                    },
                    {
                        "id": 132548,
                        "name": "Koelwar",
                        "latitude": "25.58055000",
                        "longitude": "84.79751000"
                    },
                    {
                        "id": 132744,
                        "name": "Lakhisarai",
                        "latitude": "25.20000000",
                        "longitude": "86.20000000"
                    },
                    {
                        "id": 132795,
                        "name": "Lalganj",
                        "latitude": "25.86894000",
                        "longitude": "85.17394000"
                    },
                    {
                        "id": 132781,
                        "name": "Luckeesarai",
                        "latitude": "25.17650000",
                        "longitude": "86.09470000"
                    },
                    {
                        "id": 132812,
                        "name": "Madhepura",
                        "latitude": "25.80000000",
                        "longitude": "87.00000000"
                    },
                    {
                        "id": 132813,
                        "name": "Madhipura",
                        "latitude": "25.92127000",
                        "longitude": "86.79271000"
                    },
                    {
                        "id": 132815,
                        "name": "Madhubani",
                        "latitude": "26.35367000",
                        "longitude": "86.07169000"
                    },
                    {
                        "id": 132849,
                        "name": "Maharajgani",
                        "latitude": "26.11017000",
                        "longitude": "84.50365000"
                    },
                    {
                        "id": 132859,
                        "name": "Mairwa",
                        "latitude": "26.23218000",
                        "longitude": "84.16349000"
                    },
                    {
                        "id": 132901,
                        "name": "Maner",
                        "latitude": "25.64602000",
                        "longitude": "84.87291000"
                    },
                    {
                        "id": 132911,
                        "name": "Manihari",
                        "latitude": "25.33891000",
                        "longitude": "87.61998000"
                    },
                    {
                        "id": 132935,
                        "name": "Marhaura",
                        "latitude": "25.97349000",
                        "longitude": "84.86796000"
                    },
                    {
                        "id": 132938,
                        "name": "Masaurhi Buzurg",
                        "latitude": "25.35417000",
                        "longitude": "85.03195000"
                    },
                    {
                        "id": 132984,
                        "name": "Mohiuddinnagar",
                        "latitude": "25.57374000",
                        "longitude": "85.66944000"
                    },
                    {
                        "id": 132988,
                        "name": "Mokameh",
                        "latitude": "25.39662000",
                        "longitude": "85.92190000"
                    },
                    {
                        "id": 132991,
                        "name": "Monghyr",
                        "latitude": "25.37459000",
                        "longitude": "86.47455000"
                    },
                    {
                        "id": 133005,
                        "name": "Mothihari",
                        "latitude": "26.64862000",
                        "longitude": "84.91656000"
                    },
                    {
                        "id": 133032,
                        "name": "Munger",
                        "latitude": "25.36099000",
                        "longitude": "86.46515000"
                    },
                    {
                        "id": 133037,
                        "name": "Murliganj",
                        "latitude": "25.89690000",
                        "longitude": "86.99577000"
                    },
                    {
                        "id": 133052,
                        "name": "Muzaffarpur",
                        "latitude": "26.16667000",
                        "longitude": "85.41667000"
                    },
                    {
                        "id": 133105,
                        "name": "Nabinagar",
                        "latitude": "24.60681000",
                        "longitude": "84.12624000"
                    },
                    {
                        "id": 133262,
                        "name": "Nalanda",
                        "latitude": "25.25000000",
                        "longitude": "85.58333000"
                    },
                    {
                        "id": 133279,
                        "name": "Nasriganj",
                        "latitude": "25.05140000",
                        "longitude": "84.32839000"
                    },
                    {
                        "id": 133182,
                        "name": "Naugachhia",
                        "latitude": "25.38807000",
                        "longitude": "87.09906000"
                    },
                    {
                        "id": 133192,
                        "name": "Nawada",
                        "latitude": "24.75000000",
                        "longitude": "85.50000000"
                    },
                    {
                        "id": 133222,
                        "name": "Nirmali",
                        "latitude": "26.31397000",
                        "longitude": "86.58537000"
                    },
                    {
                        "id": 133373,
                        "name": "Pashchim Champaran",
                        "latitude": "27.00000000",
                        "longitude": "84.50000000"
                    },
                    {
                        "id": 133386,
                        "name": "Patna",
                        "latitude": "25.41667000",
                        "longitude": "85.16667000"
                    },
                    {
                        "id": 133459,
                        "name": "Piro",
                        "latitude": "25.33218000",
                        "longitude": "84.40454000"
                    },
                    {
                        "id": 133509,
                        "name": "Pupri",
                        "latitude": "26.47079000",
                        "longitude": "85.70311000"
                    },
                    {
                        "id": 133570,
                        "name": "Purba Champaran",
                        "latitude": "26.58333000",
                        "longitude": "84.83333000"
                    },
                    {
                        "id": 133512,
                        "name": "Purnia",
                        "latitude": "25.81614000",
                        "longitude": "87.40708000"
                    },
                    {
                        "id": 133581,
                        "name": "Rafiganj",
                        "latitude": "24.81757000",
                        "longitude": "84.63445000"
                    },
                    {
                        "id": 133582,
                        "name": "Raghunathpur",
                        "latitude": "25.64492000",
                        "longitude": "87.91762000"
                    },
                    {
                        "id": 133678,
                        "name": "Rajgir",
                        "latitude": "25.02828000",
                        "longitude": "85.42079000"
                    },
                    {
                        "id": 133701,
                        "name": "Ramnagar",
                        "latitude": "27.16371000",
                        "longitude": "84.32342000"
                    },
                    {
                        "id": 133621,
                        "name": "Raxaul",
                        "latitude": "26.97982000",
                        "longitude": "84.85065000"
                    },
                    {
                        "id": 133632,
                        "name": "Revelganj",
                        "latitude": "25.78976000",
                        "longitude": "84.63596000"
                    },
                    {
                        "id": 133648,
                        "name": "Rohtas",
                        "latitude": "24.97941000",
                        "longitude": "84.02774000"
                    },
                    {
                        "id": 133656,
                        "name": "Rusera",
                        "latitude": "25.75355000",
                        "longitude": "86.02597000"
                    },
                    {
                        "id": 133748,
                        "name": "Sagauli",
                        "latitude": "26.76390000",
                        "longitude": "84.74341000"
                    },
                    {
                        "id": 133749,
                        "name": "Saharsa",
                        "latitude": "25.87498000",
                        "longitude": "86.59611000"
                    },
                    {
                        "id": 133767,
                        "name": "Samastipur",
                        "latitude": "25.75000000",
                        "longitude": "85.91667000"
                    },
                    {
                        "id": 134076,
                        "name": "Saran",
                        "latitude": "25.91667000",
                        "longitude": "84.75000000"
                    },
                    {
                        "id": 133852,
                        "name": "Shahbazpur",
                        "latitude": "26.30511000",
                        "longitude": "87.28865000"
                    },
                    {
                        "id": 133902,
                        "name": "Shahpur",
                        "latitude": "25.60293000",
                        "longitude": "84.40412000"
                    },
                    {
                        "id": 133858,
                        "name": "Sheikhpura",
                        "latitude": "25.13073000",
                        "longitude": "85.78176000"
                    },
                    {
                        "id": 133860,
                        "name": "Sheohar",
                        "latitude": "26.50000000",
                        "longitude": "85.30000000"
                    },
                    {
                        "id": 133863,
                        "name": "Sherghati",
                        "latitude": "24.55950000",
                        "longitude": "84.79162000"
                    },
                    {
                        "id": 133933,
                        "name": "Silao",
                        "latitude": "25.08358000",
                        "longitude": "85.42804000"
                    },
                    {
                        "id": 134089,
                        "name": "Sitamarhi",
                        "latitude": "26.66667000",
                        "longitude": "85.50000000"
                    },
                    {
                        "id": 133977,
                        "name": "Siwan",
                        "latitude": "26.22096000",
                        "longitude": "84.35609000"
                    },
                    {
                        "id": 134049,
                        "name": "Supaul",
                        "latitude": "26.25000000",
                        "longitude": "86.80000000"
                    },
                    {
                        "id": 134121,
                        "name": "Teghra",
                        "latitude": "25.49043000",
                        "longitude": "85.94001000"
                    },
                    {
                        "id": 134127,
                        "name": "Tekari",
                        "latitude": "24.94253000",
                        "longitude": "84.84265000"
                    },
                    {
                        "id": 134163,
                        "name": "Thakurganj",
                        "latitude": "26.42742000",
                        "longitude": "88.13112000"
                    },
                    {
                        "id": 134314,
                        "name": "Vaishali",
                        "latitude": "25.75000000",
                        "longitude": "85.41667000"
                    },
                    {
                        "id": 134417,
                        "name": "Waris Aliganj",
                        "latitude": "25.01720000",
                        "longitude": "85.64047000"
                    }
                ]
            },
            {
                "id": 4031,
                "name": "Chandigarh",
                "state_code": "CH",
                "latitude": "30.73331480",
                "longitude": "76.77941790",
                "cities": [
                    {
                        "id": 58190,
                        "name": "Chandigarh",
                        "latitude": "30.73629000",
                        "longitude": "76.78840000"
                    }
                ]
            },
            {
                "id": 4040,
                "name": "Chhattisgarh",
                "state_code": "CT",
                "latitude": "21.27865670",
                "longitude": "81.86614420",
                "cities": [
                    {
                        "id": 57619,
                        "name": "Akaltara",
                        "latitude": "22.02463000",
                        "longitude": "82.42641000"
                    },
                    {
                        "id": 57672,
                        "name": "Ambagarh Chauki",
                        "latitude": "20.77644000",
                        "longitude": "80.74608000"
                    },
                    {
                        "id": 57670,
                        "name": "Ambikapur",
                        "latitude": "23.11892000",
                        "longitude": "83.19537000"
                    },
                    {
                        "id": 57728,
                        "name": "Arang",
                        "latitude": "21.19639000",
                        "longitude": "81.96912000"
                    },
                    {
                        "id": 57812,
                        "name": "Baikunthpur",
                        "latitude": "23.26206000",
                        "longitude": "82.56051000"
                    },
                    {
                        "id": 57830,
                        "name": "Balod",
                        "latitude": "20.73081000",
                        "longitude": "81.20578000"
                    },
                    {
                        "id": 57831,
                        "name": "Baloda",
                        "latitude": "22.13890000",
                        "longitude": "82.48171000"
                    },
                    {
                        "id": 57832,
                        "name": "Baloda Bazar",
                        "latitude": "21.65678000",
                        "longitude": "82.16062000"
                    },
                    {
                        "id": 57898,
                        "name": "Basna",
                        "latitude": "21.27885000",
                        "longitude": "82.82670000"
                    },
                    {
                        "id": 57900,
                        "name": "Bastar",
                        "latitude": "19.26794000",
                        "longitude": "81.73828000"
                    },
                    {
                        "id": 57931,
                        "name": "Bemetara",
                        "latitude": "21.71556000",
                        "longitude": "81.53423000"
                    },
                    {
                        "id": 58013,
                        "name": "Bhanpuri",
                        "latitude": "21.09190000",
                        "longitude": "80.93218000"
                    },
                    {
                        "id": 58015,
                        "name": "Bhatapara",
                        "latitude": "21.73500000",
                        "longitude": "81.94711000"
                    },
                    {
                        "id": 57969,
                        "name": "Bhatgaon",
                        "latitude": "21.15000000",
                        "longitude": "81.70000000"
                    },
                    {
                        "id": 57981,
                        "name": "Bhilai",
                        "latitude": "21.20919000",
                        "longitude": "81.42850000"
                    },
                    {
                        "id": 58032,
                        "name": "Bijapur",
                        "latitude": "18.84322000",
                        "longitude": "80.77610000"
                    },
                    {
                        "id": 58055,
                        "name": "Bilaspur",
                        "latitude": "22.38333000",
                        "longitude": "82.13333000"
                    },
                    {
                        "id": 131593,
                        "name": "Champa",
                        "latitude": "22.03532000",
                        "longitude": "82.64234000"
                    },
                    {
                        "id": 131538,
                        "name": "Chhuikhadan",
                        "latitude": "21.52316000",
                        "longitude": "80.99788000"
                    },
                    {
                        "id": 131690,
                        "name": "Deori",
                        "latitude": "21.45000000",
                        "longitude": "82.61667000"
                    },
                    {
                        "id": 131712,
                        "name": "Dhamtari",
                        "latitude": "20.70718000",
                        "longitude": "81.54874000"
                    },
                    {
                        "id": 131787,
                        "name": "Dongargaon",
                        "latitude": "20.97172000",
                        "longitude": "80.85077000"
                    },
                    {
                        "id": 131788,
                        "name": "Dongargarh",
                        "latitude": "21.18893000",
                        "longitude": "80.75459000"
                    },
                    {
                        "id": 131801,
                        "name": "Durg",
                        "latitude": "21.15000000",
                        "longitude": "81.40000000"
                    },
                    {
                        "id": 131897,
                        "name": "Gandai",
                        "latitude": "21.66667000",
                        "longitude": "81.10013000"
                    },
                    {
                        "id": 131926,
                        "name": "Gariaband",
                        "latitude": "20.63323000",
                        "longitude": "82.06221000"
                    },
                    {
                        "id": 131927,
                        "name": "Gaurela",
                        "latitude": "22.75449000",
                        "longitude": "81.90107000"
                    },
                    {
                        "id": 131938,
                        "name": "Gharghoda",
                        "latitude": "22.17427000",
                        "longitude": "83.35170000"
                    },
                    {
                        "id": 132048,
                        "name": "Gidam",
                        "latitude": "18.97431000",
                        "longitude": "81.39894000"
                    },
                    {
                        "id": 132186,
                        "name": "Jagdalpur",
                        "latitude": "19.08136000",
                        "longitude": "82.02131000"
                    },
                    {
                        "id": 132312,
                        "name": "Janjgir",
                        "latitude": "22.00922000",
                        "longitude": "82.57780000"
                    },
                    {
                        "id": 132240,
                        "name": "Janjgir-Champa",
                        "latitude": "21.90000000",
                        "longitude": "82.70000000"
                    },
                    {
                        "id": 132244,
                        "name": "Jashpur",
                        "latitude": "22.78495000",
                        "longitude": "83.84573000"
                    },
                    {
                        "id": 132245,
                        "name": "Jashpurnagar",
                        "latitude": "22.88783000",
                        "longitude": "84.13864000"
                    },
                    {
                        "id": 132318,
                        "name": "Junagarh",
                        "latitude": "19.85993000",
                        "longitude": "82.93385000"
                    },
                    {
                        "id": 132319,
                        "name": "Kabeerdham",
                        "latitude": "22.10000000",
                        "longitude": "81.20000000"
                    },
                    {
                        "id": 132704,
                        "name": "Kanker",
                        "latitude": "20.27193000",
                        "longitude": "81.49177000"
                    },
                    {
                        "id": 132421,
                        "name": "Katghora",
                        "latitude": "22.50247000",
                        "longitude": "82.54279000"
                    },
                    {
                        "id": 132433,
                        "name": "Kawardha",
                        "latitude": "22.00853000",
                        "longitude": "81.23148000"
                    },
                    {
                        "id": 132456,
                        "name": "Khairagarh",
                        "latitude": "21.41859000",
                        "longitude": "80.97942000"
                    },
                    {
                        "id": 132463,
                        "name": "Khamharia",
                        "latitude": "20.97600000",
                        "longitude": "82.25116000"
                    },
                    {
                        "id": 132480,
                        "name": "Kharod",
                        "latitude": "21.74420000",
                        "longitude": "82.57880000"
                    },
                    {
                        "id": 132481,
                        "name": "Kharsia",
                        "latitude": "21.98953000",
                        "longitude": "83.10476000"
                    },
                    {
                        "id": 132525,
                        "name": "Kirandul",
                        "latitude": "18.63649000",
                        "longitude": "81.25827000"
                    },
                    {
                        "id": 132565,
                        "name": "Kondagaon",
                        "latitude": "19.59083000",
                        "longitude": "81.66400000"
                    },
                    {
                        "id": 132581,
                        "name": "Korba",
                        "latitude": "22.50000000",
                        "longitude": "82.60000000"
                    },
                    {
                        "id": 132583,
                        "name": "Koriya",
                        "latitude": "23.48326000",
                        "longitude": "82.15037000"
                    },
                    {
                        "id": 132612,
                        "name": "Kota",
                        "latitude": "22.29507000",
                        "longitude": "82.02366000"
                    },
                    {
                        "id": 132596,
                        "name": "Kotaparh",
                        "latitude": "19.14256000",
                        "longitude": "82.32536000"
                    },
                    {
                        "id": 132641,
                        "name": "Kumhari",
                        "latitude": "21.26667000",
                        "longitude": "81.51667000"
                    },
                    {
                        "id": 132661,
                        "name": "Kurud",
                        "latitude": "20.83073000",
                        "longitude": "81.72212000"
                    },
                    {
                        "id": 132777,
                        "name": "Lormi",
                        "latitude": "22.27434000",
                        "longitude": "81.70181000"
                    },
                    {
                        "id": 132827,
                        "name": "Mahasamund",
                        "latitude": "21.20000000",
                        "longitude": "82.50000000"
                    },
                    {
                        "id": 133031,
                        "name": "Mungeli",
                        "latitude": "22.06566000",
                        "longitude": "81.68543000"
                    },
                    {
                        "id": 133163,
                        "name": "Narayanpur",
                        "latitude": "19.60426000",
                        "longitude": "81.08119000"
                    },
                    {
                        "id": 133168,
                        "name": "Narharpur",
                        "latitude": "20.44892000",
                        "longitude": "81.62004000"
                    },
                    {
                        "id": 133346,
                        "name": "Pandaria",
                        "latitude": "22.22495000",
                        "longitude": "81.40994000"
                    },
                    {
                        "id": 133540,
                        "name": "Pandatarai",
                        "latitude": "22.18714000",
                        "longitude": "81.32815000"
                    },
                    {
                        "id": 133375,
                        "name": "Pasan",
                        "latitude": "22.84412000",
                        "longitude": "82.19823000"
                    },
                    {
                        "id": 133552,
                        "name": "Patan",
                        "latitude": "21.03333000",
                        "longitude": "81.53333000"
                    },
                    {
                        "id": 133379,
                        "name": "Pathalgaon",
                        "latitude": "22.55656000",
                        "longitude": "83.46355000"
                    },
                    {
                        "id": 133405,
                        "name": "Pendra",
                        "latitude": "22.77548000",
                        "longitude": "81.95968000"
                    },
                    {
                        "id": 133463,
                        "name": "Pithora",
                        "latitude": "21.25021000",
                        "longitude": "82.51707000"
                    },
                    {
                        "id": 133587,
                        "name": "Raigarh",
                        "latitude": "22.08582000",
                        "longitude": "83.30603000"
                    },
                    {
                        "id": 133590,
                        "name": "Raipur",
                        "latitude": "21.25621000",
                        "longitude": "81.69022000"
                    },
                    {
                        "id": 133668,
                        "name": "Raj Nandgaon",
                        "latitude": "21.16667000",
                        "longitude": "81.00000000"
                    },
                    {
                        "id": 133669,
                        "name": "Raj-Nandgaon",
                        "latitude": "21.09687000",
                        "longitude": "81.02890000"
                    },
                    {
                        "id": 133711,
                        "name": "Ramanuj Ganj",
                        "latitude": "23.80637000",
                        "longitude": "83.69981000"
                    },
                    {
                        "id": 133616,
                        "name": "Ratanpur",
                        "latitude": "22.28660000",
                        "longitude": "82.16823000"
                    },
                    {
                        "id": 133761,
                        "name": "Sakti",
                        "latitude": "22.02662000",
                        "longitude": "82.96091000"
                    },
                    {
                        "id": 133801,
                        "name": "Saraipali",
                        "latitude": "21.31530000",
                        "longitude": "83.00629000"
                    },
                    {
                        "id": 134077,
                        "name": "Sarangarh",
                        "latitude": "21.58614000",
                        "longitude": "83.07850000"
                    },
                    {
                        "id": 133845,
                        "name": "Seorinarayan",
                        "latitude": "21.72055000",
                        "longitude": "82.59344000"
                    },
                    {
                        "id": 133940,
                        "name": "Simga",
                        "latitude": "21.62810000",
                        "longitude": "81.70376000"
                    },
                    {
                        "id": 134051,
                        "name": "Surguja",
                        "latitude": "22.89624000",
                        "longitude": "83.09631000"
                    },
                    {
                        "id": 134099,
                        "name": "Takhatpur",
                        "latitude": "22.12915000",
                        "longitude": "81.86959000"
                    },
                    {
                        "id": 134273,
                        "name": "Umarkot",
                        "latitude": "19.66529000",
                        "longitude": "82.20629000"
                    },
                    {
                        "id": 134299,
                        "name": "Uttar Bastar Kanker",
                        "latitude": "20.20000000",
                        "longitude": "81.10000000"
                    }
                ]
            },
            {
                "id": 4033,
                "name": "Dadra and Nagar Haveli and Daman and Diu",
                "state_code": "DH",
                "latitude": "20.39737360",
                "longitude": "72.83279910",
                "cities": [
                    {
                        "id": 134459,
                        "name": "Amli",
                        "latitude": "20.28333000",
                        "longitude": "73.01667000"
                    },
                    {
                        "id": 131639,
                        "name": "Dadra",
                        "latitude": "20.32504000",
                        "longitude": "72.96618000"
                    },
                    {
                        "id": 131640,
                        "name": "Dadra & Nagar Haveli",
                        "latitude": "20.20651000",
                        "longitude": "73.00811000"
                    },
                    {
                        "id": 131649,
                        "name": "Daman",
                        "latitude": "20.41431000",
                        "longitude": "72.83236000"
                    },
                    {
                        "id": 131650,
                        "name": "Daman District",
                        "latitude": "20.41667000",
                        "longitude": "72.88333000"
                    },
                    {
                        "id": 131779,
                        "name": "Diu",
                        "latitude": "20.72081000",
                        "longitude": "70.93989000"
                    },
                    {
                        "id": 133937,
                        "name": "Silvassa",
                        "latitude": "20.27386000",
                        "longitude": "72.99673000"
                    }
                ]
            },
            {
                "id": 4021,
                "name": "Delhi",
                "state_code": "DL",
                "latitude": "28.70405920",
                "longitude": "77.10249020",
                "cities": [
                    {
                        "id": 57655,
                        "name": "Alipur",
                        "latitude": "28.79862000",
                        "longitude": "77.13314000"
                    },
                    {
                        "id": 57909,
                        "name": "Bawana",
                        "latitude": "28.79820000",
                        "longitude": "77.03431000"
                    },
                    {
                        "id": 58171,
                        "name": "Central Delhi",
                        "latitude": "28.64857000",
                        "longitude": "77.21895000"
                    },
                    {
                        "id": 131679,
                        "name": "Delhi",
                        "latitude": "28.65195000",
                        "longitude": "77.23149000"
                    },
                    {
                        "id": 131687,
                        "name": "Deoli",
                        "latitude": "28.50254000",
                        "longitude": "77.23117000"
                    },
                    {
                        "id": 131821,
                        "name": "East Delhi",
                        "latitude": "28.66242000",
                        "longitude": "77.29122000"
                    },
                    {
                        "id": 132406,
                        "name": "Karol Bagh",
                        "latitude": "28.65136000",
                        "longitude": "77.19072000"
                    },
                    {
                        "id": 133126,
                        "name": "Najafgarh",
                        "latitude": "28.60922000",
                        "longitude": "76.97982000"
                    },
                    {
                        "id": 133269,
                        "name": "Nangloi Jat",
                        "latitude": "28.67957000",
                        "longitude": "77.06799000"
                    },
                    {
                        "id": 133165,
                        "name": "Narela",
                        "latitude": "28.85267000",
                        "longitude": "77.09288000"
                    },
                    {
                        "id": 133210,
                        "name": "New Delhi",
                        "latitude": "28.63576000",
                        "longitude": "77.22445000"
                    },
                    {
                        "id": 133234,
                        "name": "North Delhi",
                        "latitude": "28.66920000",
                        "longitude": "77.22273000"
                    },
                    {
                        "id": 133236,
                        "name": "North East Delhi",
                        "latitude": "28.68690000",
                        "longitude": "77.30195000"
                    },
                    {
                        "id": 133243,
                        "name": "North West Delhi",
                        "latitude": "28.70113000",
                        "longitude": "77.10154000"
                    },
                    {
                        "id": 133461,
                        "name": "Pitampura",
                        "latitude": "28.68964000",
                        "longitude": "77.13126000"
                    },
                    {
                        "id": 133645,
                        "name": "Rohini",
                        "latitude": "28.74322000",
                        "longitude": "77.06778000"
                    },
                    {
                        "id": 134007,
                        "name": "South Delhi",
                        "latitude": "28.53009000",
                        "longitude": "77.25174000"
                    },
                    {
                        "id": 134012,
                        "name": "South West Delhi",
                        "latitude": "28.58060000",
                        "longitude": "77.06720000"
                    },
                    {
                        "id": 134404,
                        "name": "West Delhi",
                        "latitude": "28.65655000",
                        "longitude": "77.10068000"
                    }
                ]
            },
            {
                "id": 4009,
                "name": "Goa",
                "state_code": "GA",
                "latitude": "15.29932650",
                "longitude": "74.12399600",
                "cities": [
                    {
                        "id": 57638,
                        "name": "Aldona",
                        "latitude": "15.59337000",
                        "longitude": "73.87482000"
                    },
                    {
                        "id": 57727,
                        "name": "Arambol",
                        "latitude": "15.68681000",
                        "longitude": "73.70449000"
                    },
                    {
                        "id": 57795,
                        "name": "Baga",
                        "latitude": "15.56517000",
                        "longitude": "73.75517000"
                    },
                    {
                        "id": 57836,
                        "name": "Bambolim",
                        "latitude": "15.46361000",
                        "longitude": "73.85310000"
                    },
                    {
                        "id": 57845,
                        "name": "Bandora",
                        "latitude": "15.40823000",
                        "longitude": "73.98129000"
                    },
                    {
                        "id": 57932,
                        "name": "Benaulim",
                        "latitude": "15.26435000",
                        "longitude": "73.92812000"
                    },
                    {
                        "id": 58165,
                        "name": "Calangute",
                        "latitude": "15.54390000",
                        "longitude": "73.75530000"
                    },
                    {
                        "id": 58167,
                        "name": "Candolim",
                        "latitude": "15.51807000",
                        "longitude": "73.76259000"
                    },
                    {
                        "id": 58169,
                        "name": "Carapur",
                        "latitude": "15.56588000",
                        "longitude": "73.98713000"
                    },
                    {
                        "id": 58170,
                        "name": "Cavelossim",
                        "latitude": "15.17255000",
                        "longitude": "73.94194000"
                    },
                    {
                        "id": 131542,
                        "name": "Chicalim",
                        "latitude": "15.39835000",
                        "longitude": "73.84216000"
                    },
                    {
                        "id": 131559,
                        "name": "Chinchinim",
                        "latitude": "15.21447000",
                        "longitude": "73.97555000"
                    },
                    {
                        "id": 131622,
                        "name": "Colovale",
                        "latitude": "15.63522000",
                        "longitude": "73.82426000"
                    },
                    {
                        "id": 131623,
                        "name": "Colva",
                        "latitude": "15.27976000",
                        "longitude": "73.92285000"
                    },
                    {
                        "id": 131625,
                        "name": "Cortalim",
                        "latitude": "15.40247000",
                        "longitude": "73.90881000"
                    },
                    {
                        "id": 131630,
                        "name": "Cuncolim",
                        "latitude": "15.17730000",
                        "longitude": "73.99392000"
                    },
                    {
                        "id": 131631,
                        "name": "Curchorem",
                        "latitude": "15.26349000",
                        "longitude": "74.10875000"
                    },
                    {
                        "id": 131632,
                        "name": "Curti",
                        "latitude": "15.41667000",
                        "longitude": "74.01667000"
                    },
                    {
                        "id": 131672,
                        "name": "Davorlim",
                        "latitude": "15.27221000",
                        "longitude": "73.99242000"
                    },
                    {
                        "id": 131764,
                        "name": "Dicholi",
                        "latitude": "15.59319000",
                        "longitude": "73.94571000"
                    },
                    {
                        "id": 131960,
                        "name": "Goa Velha",
                        "latitude": "15.44384000",
                        "longitude": "73.88572000"
                    },
                    {
                        "id": 132015,
                        "name": "Guirim",
                        "latitude": "15.57552000",
                        "longitude": "73.80722000"
                    },
                    {
                        "id": 132297,
                        "name": "Jua",
                        "latitude": "15.53070000",
                        "longitude": "73.95047000"
                    },
                    {
                        "id": 132705,
                        "name": "Kankon",
                        "latitude": "15.02698000",
                        "longitude": "74.04617000"
                    },
                    {
                        "id": 132811,
                        "name": "Madgaon",
                        "latitude": "15.27501000",
                        "longitude": "73.95786000"
                    },
                    {
                        "id": 133086,
                        "name": "Mapuca",
                        "latitude": "15.59154000",
                        "longitude": "73.80898000"
                    },
                    {
                        "id": 132997,
                        "name": "Morjim",
                        "latitude": "15.63097000",
                        "longitude": "73.73903000"
                    },
                    {
                        "id": 132998,
                        "name": "Mormugao",
                        "latitude": "15.38914000",
                        "longitude": "73.81491000"
                    },
                    {
                        "id": 133185,
                        "name": "Navelim",
                        "latitude": "15.53333000",
                        "longitude": "73.98333000"
                    },
                    {
                        "id": 133238,
                        "name": "North Goa",
                        "latitude": "15.53397000",
                        "longitude": "73.96408000"
                    },
                    {
                        "id": 133330,
                        "name": "Palle",
                        "latitude": "15.46667000",
                        "longitude": "74.08333000"
                    },
                    {
                        "id": 133342,
                        "name": "Panaji",
                        "latitude": "15.49574000",
                        "longitude": "73.82624000"
                    },
                    {
                        "id": 133422,
                        "name": "Pernem",
                        "latitude": "15.72300000",
                        "longitude": "73.79511000"
                    },
                    {
                        "id": 133471,
                        "name": "Ponda",
                        "latitude": "15.40341000",
                        "longitude": "74.01519000"
                    },
                    {
                        "id": 133572,
                        "name": "Quepem",
                        "latitude": "15.21280000",
                        "longitude": "74.07720000"
                    },
                    {
                        "id": 133573,
                        "name": "Queula",
                        "latitude": "15.39011000",
                        "longitude": "73.98557000"
                    },
                    {
                        "id": 133585,
                        "name": "Raia",
                        "latitude": "15.30499000",
                        "longitude": "73.97096000"
                    },
                    {
                        "id": 133764,
                        "name": "Saligao",
                        "latitude": "15.55359000",
                        "longitude": "73.79036000"
                    },
                    {
                        "id": 133777,
                        "name": "Sancoale",
                        "latitude": "15.37794000",
                        "longitude": "73.90352000"
                    },
                    {
                        "id": 133786,
                        "name": "Sanguem",
                        "latitude": "15.22901000",
                        "longitude": "74.15149000"
                    },
                    {
                        "id": 133791,
                        "name": "Sanquelim",
                        "latitude": "15.56422000",
                        "longitude": "74.00799000"
                    },
                    {
                        "id": 133795,
                        "name": "Sanvordem",
                        "latitude": "15.26269000",
                        "longitude": "74.11965000"
                    },
                    {
                        "id": 133850,
                        "name": "Serula",
                        "latitude": "15.54774000",
                        "longitude": "73.84329000"
                    },
                    {
                        "id": 133987,
                        "name": "Solim",
                        "latitude": "15.61521000",
                        "longitude": "73.76740000"
                    },
                    {
                        "id": 134010,
                        "name": "South Goa",
                        "latitude": "15.20425000",
                        "longitude": "74.16733000"
                    },
                    {
                        "id": 134101,
                        "name": "Taleigao",
                        "latitude": "15.46915000",
                        "longitude": "73.83285000"
                    },
                    {
                        "id": 134311,
                        "name": "Vagator",
                        "latitude": "15.59766000",
                        "longitude": "73.74496000"
                    },
                    {
                        "id": 134321,
                        "name": "Valpoy",
                        "latitude": "15.53239000",
                        "longitude": "74.13671000"
                    },
                    {
                        "id": 134329,
                        "name": "Varca",
                        "latitude": "15.23237000",
                        "longitude": "73.94311000"
                    },
                    {
                        "id": 134333,
                        "name": "Vasco da Gama",
                        "latitude": "15.39585000",
                        "longitude": "73.81568000"
                    }
                ]
            }
        ]
    }
]

//fetching country names from the list
const contriesName = initialData.map((ele) => ele.name)


//creating options in country select tag via names
contriesName.forEach((ele) => {
    const createOption = document.createElement("option");
    createOption.innerText = ele;
    contries.appendChild(createOption);
})


let contryDetails;//selected country details


//function to find data
function find(data, selectedData) {
    const searchedData = data.find((ele) => ele.name === selectedData)
    return searchedData;
}


//function to create new options
function create(target, data) {
    target.disabled = false;
    const createOption = document.createElement("option");
    createOption.innerText = "Select an Option";
    target.appendChild(createOption);
    data.forEach((ele) => {
        const createOption = document.createElement("option");
        createOption.innerText = ele;
        target.appendChild(createOption);
    })
}


//funtion if no data is found
function error(target) {
    target.disabled = true;
    const error = document.createElement("option");
    error.innerText = "No Record Found!!!";
    target.appendChild(error);
}


//event listner on contries select tag
contries.addEventListener('click', () => {
    if (contries.value !== "Select an Option") {
        states.innerHTML = "";
        cities.innerHTML = "";
        states.disabled = false;
        const selectedCountry = contries.value;
        contryDetails = find(initialData, selectedCountry);
        const { states: countryStates } = contryDetails;
        const statesName = countryStates.map((ele) => ele.name);
        if (statesName.length === 0) {
            error(states);
            error(cities);
        }
        else {
            create(states, statesName);
        }
    }
})


//event listner on state select tag
states.addEventListener('click', () => {
    if (states.value !== "Select an Option") {
        cities.innerHTML = "";
        const selectedState = states.value;
        const { cities: stateCities } = find(contryDetails.states, selectedState);
        const citiesName = stateCities.map((ele) => ele.name);
        if (citiesName.length === 0) {
            error(cities);
        }
        else {
            create(cities, citiesName);
        }
    }
})





