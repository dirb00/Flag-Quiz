const data = [
  { country: "Afghanistan", code: "AF" },
  { country: "Albania", code: "AL" },
  { country: "Algeria", code: "DZ" },
  { country: "Andorra", code: "AD" },
  { country: "Angola", code: "AO" },
  { country: "Antigua and Barbuda", code: "AG" },
  { country: "Argentina", code: "AR" },
  { country: "Armenia", code: "AM" },
  { country: "Australia", code: "AU" },
  { country: "Austria", code: "AT" },
  { country: "Azerbaijan", code: "AZ" },
  { country: "Bahamas", code: "BS" },
  { country: "Bahrain", code: "BH" },
  { country: "Bangladesh", code: "BD" },
  { country: "Barbados", code: "BB" },
  { country: "Belarus", code: "BY" },
  { country: "Belgium", code: "BE" },
  { country: "Belize", code: "BZ" },
  { country: "Benin", code: "BJ" },
  { country: "Bhutan", code: "BT" },
  { country: "Bolivia", code: "BO" },
  { country: "Bosnia and Herzegovina", code: "BA" },
  { country: "Botswana", code: "BW" },
  { country: "Brazil", code: "BR" },
  { country: "Brunei Darussalam", code: "BN" },
  { country: "Bulgaria", code: "BG" },
  { country: "Burkina Faso", code: "BF" },
  { country: "Burundi", code: "BI" },
  { country: "Cabo Verde", code: "CV" },
  { country: "Cambodia", code: "KH" },
  { country: "Cameroon", code: "CM" },
  { country: "Canada", code: "CA" },
  { country: "Central African Republic", code: "CF" },
  { country: "Chad", code: "TD" },
  { country: "Chile", code: "CL" },
  { country: "China", code: "CN" },
  { country: "Colombia", code: "CO" },
  { country: "Comoros", code: "KM" },
  { country: "Democratic Republic of Congo", code: "CD" },
  { country: "Congo", code: "CG" },
  { country: "Costa Rica", code: "CR" },
  { country: "Croatia", code: "HR" },
  { country: "Cuba", code: "CU" },
  { country: "Cyprus", code: "CY" },
  { country: "Czechia", code: "CZ" },
  { country: "Ivory Coast", code: "CI" },
  { country: "Denmark", code: "DK" },
  { country: "Djibouti", code: "DJ" },
  { country: "Dominica", code: "DM" },
  { country: "Dominican Republic", code: "DO" },
  { country: "Ecuador", code: "EC" },
  { country: "Egypt", code: "EG" },
  { country: "El Salvador", code: "SV" },
  { country: "Equatorial Guinea", code: "GQ" },
  { country: "Eritrea", code: "ER" },
  { country: "Estonia", code: "EE" },
  { country: "Eswatini", code: "SZ" },
  { country: "Ethiopia", code: "ET" },
  { country: "Fiji", code: "FJ" },
  { country: "Finland", code: "FI" },
  { country: "France", code: "FR" },
  { country: "Gabon", code: "GA" },
  { country: "Gambia", code: "GM" },
  { country: "Georgia", code: "GE" },
  { country: "Germany", code: "DE" },
  { country: "Ghana", code: "GH" },
  { country: "Greece", code: "GR" },
  { country: "Greenland", code: "GL" },
  { country: "Grenada", code: "GD" },
  { country: "Guatemala", code: "GT" },
  { country: "Guinea", code: "GN" },
  { country: "Guinea-Bissau", code: "GW" },
  { country: "Guyana", code: "GY" },
  { country: "Haiti", code: "HT" },
  { country: "Australia", code: "HM" },
  { country: "Vatican City", code: "VA" },
  { country: "Honduras", code: "HN" },
  { country: "Hungary", code: "HU" },
  { country: "Iceland", code: "IS" },
  { country: "India", code: "IN" },
  { country: "Indonesia", code: "ID" },
  { country: "Iran", code: "IR" },
  { country: "Iraq", code: "IQ" },
  { country: "Ireland", code: "IE" },
  { country: "Isle of Man", code: "IM" },
  { country: "Italy", code: "IT" },
  { country: "Jamaica", code: "JM" },
  { country: "Japan", code: "JP" },
  { country: "Jersey", code: "JE" },
  { country: "Jordan", code: "JO" },
  { country: "Kazakhstan", code: "KZ" },
  { country: "Kenya", code: "KE" },
  { country: "Kiribati", code: "KI" },
  { country: "North Korea", code: "KP" },
  { country: "South Korea", code: "KR" },
  { country: "Kuwait", code: "KW" },
  { country: "Kyrgyzstan", code: "KG" },
  { country: "Laos", code: "LA" },
  { country: "Latvia", code: "LV" },
  { country: "Lebanon", code: "LB" },
  { country: "Lesotho", code: "LS" },
  { country: "Liberia", code: "LR" },
  { country: "Libya", code: "LY" },
  { country: "Liechtenstein", code: "LI" },
  { country: "Lithuania", code: "LT" },
  { country: "Luxembourg", code: "LU" },
  { country: "Macao", code: "MO" },
  { country: "Madagascar", code: "MG" },
  { country: "Malawi", code: "MW" },
  { country: "Malaysia", code: "MY" },
  { country: "Maldives", code: "MV" },
  { country: "Mali", code: "ML" },
  { country: "Malta", code: "MT" },
  { country: "Marshall Islands", code: "MH" },
  { country: "Mauritania", code: "MR" },
  { country: "Mauritius", code: "MU" },
  { country: "Mexico", code: "MX" },
  { country: "Micronesia", code: "FM" },
  { country: "Moldova", code: "MD" },
  { country: "Monaco", code: "MC" },
  { country: "Mongolia", code: "MN" },
  { country: "Montenegro", code: "ME" },
  { country: "Morocco", code: "MA" },
  { country: "Mozambique", code: "MZ" },
  { country: "Myanmar", code: "MM" },
  { country: "Namibia", code: "NA" },
  { country: "Nauru", code: "NR" },
  { country: "Nepal", code: "NP" },
  { country: "Netherlands", code: "NL" },
  { country: "New Zealand", code: "NZ" },
  { country: "Nicaragua", code: "NI" },
  { country: "Niger", code: "NE" },
  { country: "Nigeria", code: "NG" },
  { country: "Norway", code: "NO" },
  { country: "Oman", code: "OM" },
  { country: "Pakistan", code: "PK" },
  { country: "Palau", code: "PW" },
  { country: "Palestine", code: "PS" },
  { country: "Panama", code: "PA" },
  { country: "Papua New Guinea", code: "PG" },
  { country: "Paraguay", code: "PY" },
  { country: "Peru", code: "PE" },
  { country: "Philippines", code: "PH" },
  { country: "Poland", code: "PL" },
  { country: "Portugal", code: "PT" },
  { country: "Puerto Rico", code: "PR" },
  { country: "Qatar", code: "QA" },
  { country: "North Macedonia", code: "MK" },
  { country: "Romania", code: "RO" },
  { country: "Russia", code: "RU" },
  { country: "Rwanda", code: "RW" },
  { country: "Réunion", code: "RE" },
  { country: "Saint Kitts and Nevis", code: "KN" },
  { country: "Saint Lucia", code: "LC" },
  { country: "Saint Vincent and the Grenadines", code: "VC" },
  { country: "Samoa", code: "WS" },
  { country: "San Marino", code: "SM" },
  { country: "Sao Tome and Principe", code: "ST" },
  { country: "Saudi Arabia", code: "SA" },
  { country: "Senegal", code: "SN" },
  { country: "Serbia", code: "RS" },
  { country: "Seychelles", code: "SC" },
  { country: "Sierra Leone", code: "SL" },
  { country: "Singapore", code: "SG" },
  { country: "Slovakia", code: "SK" },
  { country: "Slovenia", code: "SI" },
  { country: "Solomon Islands", code: "SB" },
  { country: "Somalia", code: "SO" },
  { country: "South Africa", code: "ZA" },
  { country: "South Sudan", code: "SS" },
  { country: "Spain", code: "ES" },
  { country: "Sri Lanka", code: "LK" },
  { country: "Sudan", code: "SD" },
  { country: "Suriname", code: "SR" },
  { country: "Sweden", code: "SE" },
  { country: "Switzerland", code: "CH" },
  { country: "Syria", code: "SY" },
  { country: "Taiwan", code: "TW" },
  { country: "Tajikistan", code: "TJ" },
  { country: "Tanzania, United Republic of", code: "TZ" },
  { country: "Thailand", code: "TH" },
  { country: "Timor-Leste", code: "TL" },
  { country: "Togo", code: "TG" },
  { country: "Tonga", code: "TO" },
  { country: "Trinidad and Tobago", code: "TT" },
  { country: "Tunisia", code: "TN" },
  { country: "Turkey", code: "TR" },
  { country: "Turkmenistan", code: "TM" },
  { country: "Turks and Caicos Islands", code: "TC" },
  { country: "Tuvalu", code: "TV" },
  { country: "Uganda", code: "UG" },
  { country: "Ukraine", code: "UA" },
  { country: "United Arab Emirates", code: "AE" },
  { country: "United Kingdom", code: "GB" },
  { country: "United States of America", code: "US" },
  { country: "Uruguay", code: "UY" },
  { country: "Uzbekistan", code: "UZ" },
  { country: "Vanuatu", code: "VU" },
  { country: "Venezuela", code: "VE" },
  { country: "Vietnam", code: "VN" },
  { country: "Yemen", code: "YE" },
  { country: "Zambia", code: "ZM" },
  { country: "Zimbabwe", code: "ZW" }
];

var points = 0;
var incorrect = 0;
var count = document.querySelector(".points");
var wrong = document.querySelector(".wrong");
var num = Math.floor(Math.random() * 203);

var flag = document.querySelector("img");
flag.src = "https://countryflagsapi.netlify.app/flag/" + data[num].code +".svg"

var enter = 0

function getFlag(){
  enter = 0
  if (!input.disabled){
    checkAnswer();
  }
    input.value = ""
    input.disabled = false
    var answer = document.querySelector(".answer")
    answer.innerHTML = ""
    num = Math.floor(Math.random() * 203);
    flag = document.getElementById("flag");
    flag.src = "https://countryflagsapi.netlify.app/flag/" + data[num].code +".svg"
}

var input = document.querySelector("input")

input.addEventListener("keypress", function(event) {
  if (event.key === "Enter" & enter===0) {
    var name = data[num].country
    var answer = document.querySelector(".answer")
    answer.innerHTML = name
    checkAnswer();
    input.disabled = true
    console.log(enter)
  }


});

function checkAnswer(){
    if (input.value.toLowerCase() === data[num].country.toLowerCase()){
        points +=1
        count.innerHTML ="Points: " + points
    }
    else{
      incorrect +=1
      wrong.innerHTML = "Incorrect: " + incorrect
    }
}
