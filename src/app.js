import svg from "./svg.js";

const countries = [
    "af",
    "al",
    "am",
    "ao",
    "ar",
    "at",
    "au",
    "az",
    "ba",
    "bd",
    "be",
    "bf",
    "bg",
    "bi",
    "bj",
    "bn",
    "bo",
    "br",
    "bt",
    "bw",
    "by",
    "bz",
    "ca",
    "cd",
    "cf",
    "cg",
    "ch",
    "ci",
    "cl",
    "cm",
    "cn",
    "co",
    "cr",
    "cu",
    "cy",
    "cz",
    "de",
    "dk",
    "dm",
    "do",
    "dz",
    "ec",
    "ee",
    "eg",
    "er",
    "es",
    "et",
    "fi",
    "fj",
    "fr",
    "ga",
    "gb",
    "ge",
    "gf",
    "gh",
    "gl",
    "gm",
    "gn",
    "gp",
    "gq",
    "gr",
    "gt",
    "gy",
    "gw",
    "hn",
    "hr",
    "ht",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "iq",
    "ir",
    "is",
    "it",
    "jm",
    "jo",
    "jp",
    "ke",
    "kg",
    "kh",
    "kp",
    "kr",
    "kw",
    "kz",
    "la",
    "lb",
    "lk",
    "lr",
    "ls",
    "lt",
    "lv",
    "ly",
    "ma",
    "md",
    "me",
    "mg",
    "mk",
    "ml",
    "mm",
    "mn",
    "mr",
    "mw",
    "mx",
    "my",
    "mz",
    "na",
    "ne",
    "ng",
    "ni",
    "nl",
    "no",
    "np",
    "nz",
    "om",
    "pa",
    "pe",
    "pg",
    "ph",
    "pk",
    "pl",
    "pr",
    "pt",
    "py",
    "qa",
    "ro",
    "rs",
    "ru",
    "rw",
    "sa",
    "sd",
    "se",
    "si",
    "sk",
    "sl",
    "sn",
    "so",
    "sr",
    "ss",
    "sv",
    "sy",
    "sz",
    "td",
    "tg",
    "th",
    "tj",
    "tm",
    "tn",
    "tr",
    "tw",
    "tz",
    "ua",
    "ug",
    "us",
    "uy",
    "uz",
    "ve",
    "vn",
    "ye",
    "za",
    "zm",
    "zw",
];

const geoguessrCountries = [
    "al",
    "ar",
    "at",
    "au",
    "bd",
    "be",
    "bg",
    "bo",
    "br",
    "bt",
    "bw",
    "ca",
    "ch",
    "cl",
    "co",
    "cz",
    "de",
    "dk",
    "do",
    "ec",
    "ee",
    "es",
    "fi",
    "fr",
    "gb",
    "gh",
    "gl",
    "gr",
    "gt",
    "hr",
    "hu",
    "id",
    "ie",
    "il",
    "in",
    "is",
    "it",
    "jo",
    "jp",
    "ke",
    "kg",
    "kh",
    "kr",
    "la",
    "lk",
    "ls",
    "lt",
    "lv",
    "me",
    "mk",
    "mn",
    "mx",
    "my",
    "ng",
    "nl",
    "no",
    "nz",
    "pe",
    "ph",
    "pl",
    "pr",
    "pt",
    "ro",
    "rs",
    "ru",
    "se",
    "si",
    "sk",
    "sn",
    "sz",
    "th",
    "tn",
    "tr",
    "tw",
    "ua",
    "ug",
    "us",
    "uy",
    "vn",
    "za",
];

const countryNamesMap = {
    af: "AFGHANISTAN",
    ax: "??LAND ISLANDS",
    al: "ALBANIA",
    dz: "ALGERIA",
    as: "AMERICAN SAMOA",
    ad: "ANDORRA",
    ao: "ANGOLA",
    ai: "ANGUILLA",
    aq: "ANTARCTICA",
    ag: "ANTIGUA AND BARBUDA",
    ar: "ARGENTINA",
    am: "ARMENIA",
    aw: "ARUBA",
    au: "AUSTRALIA",
    at: "AUSTRIA",
    az: "AZERBAIJAN",
    bs: "BAHAMAS",
    bh: "BAHRAIN",
    bd: "BANGLADESH",
    bb: "BARBADOS",
    by: "BELARUS",
    be: "BELGIUM",
    bz: "BELIZE",
    bj: "BENIN",
    bm: "BERMUDA",
    bt: "BHUTAN",
    bo: "BOLIVIA",
    bq: "BONAIRE",
    ba: "BOSNIA AND HERZEGOVINA",
    bw: "BOTSWANA",
    bv: "BOUVET ISLAND",
    br: "BRAZIL",
    io: "BRITISH INDIAN OCEAN TERRITORY",
    bn: "BRUNEI DARUSSALAM",
    bg: "BULGARIA",
    bf: "BURKINA FASO",
    bi: "BURUNDI",
    kh: "CAMBODIA",
    cm: "CAMEROON",
    ca: "CANADA",
    cv: "CAPE VERDE",
    ky: "CAYMAN ISLANDS",
    cf: "CENTRAL AFRICAN REPUBLIC",
    td: "CHAD",
    cl: "CHILE",
    cn: "CHINA",
    cx: "CHRISTMAS ISLAND",
    cc: "COCOS (KEELING) ISLANDS",
    co: "COLOMBIA",
    km: "COMOROS",
    cg: "CONGO",
    cd: "DEMOCRATIC REPUBLIC OF THE CONGO",
    ck: "COOK ISLANDS",
    cr: "COSTA RICA",
    ci: "IVORY COAST",
    hr: "CROATIA",
    cu: "CUBA",
    cw: "CURA??AO",
    cy: "CYPRUS",
    cz: "CZECH REPUBLIC",
    dk: "DENMARK",
    dj: "DJIBOUTI",
    dm: "DOMINICA",
    do: "DOMINICAN REPUBLIC",
    ec: "ECUADOR",
    eg: "EGYPT",
    sv: "EL SALVADOR",
    gq: "EQUATORIAL GUINEA",
    er: "ERITREA",
    ee: "ESTONIA",
    et: "ETHIOPIA",
    fk: "FALKLAND ISLANDS (MALVINAS)",
    fo: "FAROE ISLANDS",
    fj: "FIJI",
    fi: "FINLAND",
    fr: "FRANCE",
    gf: "FRENCH GUIANA",
    pf: "FRENCH POLYNESIA",
    tf: "FRENCH SOUTHERN TERRITORIES",
    ga: "GABON",
    gm: "GAMBIA",
    ge: "GEORGIA",
    de: "GERMANY",
    gh: "GHANA",
    gi: "GIBRALTAR",
    gr: "GREECE",
    gl: "GREENLAND",
    gd: "GRENADA",
    gp: "GUADELOUPE",
    gu: "GUAM",
    gt: "GUATEMALA",
    gg: "GUERNSEY",
    gn: "GUINEA",
    gw: "GUINEA-BISSAU",
    gy: "GUYANA",
    ht: "HAITI",
    hm: "HEARD ISLAND AND MCDONALD ISLANDS",
    va: "HOLY SEE (VATICAN CITY STATE)",
    hn: "HONDURAS",
    hk: "HONG KONG",
    hu: "HUNGARY",
    is: "ICELAND",
    in: "INDIA",
    id: "INDONESIA",
    ir: "IRAN",
    iq: "IRAQ",
    ie: "IRELAND",
    im: "ISLE OF MAN",
    il: "ISRAEL",
    it: "ITALY",
    jm: "JAMAICA",
    jp: "JAPAN",
    je: "JERSEY",
    jo: "JORDAN",
    kz: "KAZAKHSTAN",
    ke: "KENYA",
    ki: "KIRIBATI",
    kp: "DEMOCRATIC PEOPLE'S REPUBLIC OF KOREA",
    kr: "REPUBLIC OF KOREA",
    kw: "KUWAIT",
    kg: "KYRGYZSTAN",
    la: "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
    lv: "LATVIA",
    lb: "LEBANON",
    ls: "LESOTHO",
    lr: "LIBERIA",
    ly: "LIBYA",
    li: "LIECHTENSTEIN",
    lt: "LITHUANIA",
    lu: "LUXEMBOURG",
    mo: "MACAO",
    mk: "THE FORMER YUGOSLAV REPUBLIC OF MACEDONIA",
    mg: "MADAGASCAR",
    mw: "MALAWI",
    my: "MALAYSIA",
    mv: "MALDIVES",
    ml: "MALI",
    mt: "MALTA",
    mh: "MARSHALL ISLANDS",
    mq: "MARTINIQUE",
    mr: "MAURITANIA",
    mu: "MAURITIUS",
    yt: "MAYOTTE",
    mx: "MEXICO",
    fm: "MICRONESIA",
    md: "MOLDOVA",
    mc: "MONACO",
    mn: "MONGOLIA",
    me: "MONTENEGRO",
    ms: "MONTSERRAT",
    ma: "MOROCCO",
    mz: "MOZAMBIQUE",
    mm: "MYANMAR",
    na: "NAMIBIA",
    nr: "NAURU",
    np: "NEPAL",
    nl: "NETHERLANDS",
    nc: "NEW CALEDONIA",
    nz: "NEW ZEALAND",
    ni: "NICARAGUA",
    ne: "NIGER",
    ng: "NIGERIA",
    nu: "NIUE",
    nf: "NORFOLK ISLAND",
    mp: "NORTHERN MARIANA ISLANDS",
    no: "NORWAY",
    om: "OMAN",
    pk: "PAKISTAN",
    pw: "PALAU",
    ps: "PALESTINE",
    pa: "PANAMA",
    pg: "PAPUA NEW GUINEA",
    py: "PARAGUAY",
    pe: "PERU",
    ph: "PHILIPPINES",
    pn: "PITCAIRN",
    pl: "POLAND",
    pt: "PORTUGAL",
    pr: "PUERTO RICO",
    qa: "QATAR",
    re: "R??UNION",
    ro: "ROMANIA",
    ru: "RUSSIAN FEDERATION",
    rw: "RWANDA",
    bl: "SAINT BARTH??LEMY",
    sh: "SAINT HELENA",
    kn: "SAINT KITTS AND NEVIS",
    lc: "SAINT LUCIA",
    mf: "SAINT MARTIN (FRENCH PART)",
    pm: "SAINT PIERRE AND MIQUELON",
    vc: "SAINT VINCENT AND THE GRENADINES",
    ws: "SAMOA",
    sm: "SAN MARINO",
    st: "SAO TOME AND PRINCIPE",
    sa: "SAUDI ARABIA",
    sn: "SENEGAL",
    rs: "SERBIA",
    sc: "SEYCHELLES",
    sl: "SIERRA LEONE",
    sg: "SINGAPORE",
    sx: "SINT MAARTEN (DUTCH PART)",
    sk: "SLOVAKIA",
    si: "SLOVENIA",
    sb: "SOLOMON ISLANDS",
    so: "SOMALIA",
    za: "SOUTH AFRICA",
    gs: "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
    ss: "SOUTH SUDAN",
    es: "SPAIN",
    lk: "SRI LANKA",
    sd: "SUDAN",
    sr: "SURINAME",
    sj: "SVALBARD AND JAN MAYEN",
    sz: "SWAZILAND",
    se: "SWEDEN",
    ch: "SWITZERLAND",
    sy: "SYRIAN ARAB REPUBLIC",
    tw: "TAIWAN, PROVINCE OF CHINA",
    tj: "TAJIKISTAN",
    tz: "TANZANIA, UNITED REPUBLIC OF",
    th: "THAILAND",
    tl: "TIMOR-LESTE",
    tg: "TOGO",
    tk: "TOKELAU",
    to: "TONGA",
    tt: "TRINIDAD AND TOBAGO",
    tn: "TUNISIA",
    tr: "TURKEY",
    tm: "TURKMENISTAN",
    tc: "TURKS AND CAICOS ISLANDS",
    tv: "TUVALU",
    ug: "UGANDA",
    ua: "UKRAINE",
    ae: "UNITED ARAB EMIRATES",
    gb: "UNITED KINGDOM",
    us: "UNITED STATES",
    um: "UNITED STATES MINOR OUTLYING ISLANDS",
    uy: "URUGUAY",
    uz: "UZBEKISTAN",
    vu: "VANUATU",
    ve: "VENEZUELA, BOLIVARIAN REPUBLIC OF",
    vn: "VIET NAM",
    vg: "VIRGIN ISLANDS, BRITISH",
    vi: "VIRGIN ISLANDS, U.S.",
    wf: "WALLIS AND FUTUNA",
    eh: "WESTERN SAHARA",
    ye: "YEMEN",
    zm: "ZAMBIA",
    zw: "ZIMBABWE",
};

const countryData = {
    es: {},
    fr: {},
};

svg(countryNamesMap);

/*

Fields per country:
- How common is the country (colour)
- Flag
- Capital (+ largest cities)
- Driving side
- Alphabet
  - Dicritics
- Bollards
- Chevrons
- License Plates
- Road signs
- Country/Area code?
- 1 Interesting Fact
- A common building (or topology like in malta/peru)
- Photos from north/south/east/west of country

Todos:
- Country data dictionary
- Layers
- Quiz / flash cards
- Zoom+Pan
- Responsive
- Theme/CSS
- Hover colours + onclick
- Information

Diacritics:
- french: ?? ,??, ??, ??, ?? and ??
- german: ??, ??, ?? and ??
- greek: ??, ??, ?? and ??
- norway: ??, ?? and ??.
- finland: ?? and double letters
- sweden: ??, ?? and ??.
- estonia: ??,??,??,??,??,??
- latvia: ??, ??, ??, ??, ??, ??, ??, ??, ??
- poland: ??, ??, ??, ??, ?? and ??
- lithuania: ?? ,??, ??, ?? and ??.
- slovakia: ??, ??, ??, ??, ??, ??,??, ??, ??, ??, ??, d?? and ??
- czech: ??, ??, ??, ??, ??, ??, ??, ?? and ??
- hungary: ??, ??, ??, ??, ??, ??, ?? and ??
- slovenia: ??, ?? and ??. (plus some J's)
- croatia: ??, ?? and ??
- romania: ??, ??, ?? and ??
- turkey: ??, ??, ?? and ??
- albania: ?? and ??
*/
