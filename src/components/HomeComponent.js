import React from 'react';
import '../App.css';
import EU from '../assets/EU.png';
import EU_fondovi from '../assets/EU_fondovi.png';
import OPKK from '../assets/OPKK.png';


const HomeComponent = () => {
    return (
        <div>
            <div className="EU-note">
                <a href="https://european-union.europa.eu/index_hr" target="_blank" rel="noopener noreferrer">
                    <div class="image"><img src={EU} alt="Zastava Europske unije"/></div>
                </a>
                <a href="https://strukturnifondovi.hr/" target="_blank" rel="noopener noreferrer">
                    <div class="image"><img src={EU_fondovi} alt="Logotip Europskih strukturnih i investicijskih fondova" /></div>
                </a>
                <a href="https://opzo-opkk.hr/" target="_blank" rel="noopener noreferrer">
                    <div class="image"><img src={OPKK} alt="Logotip Operativnog programa Konkurentnost i kohezija" /></div>
                </a>
                <div class="text">Izrada internetske stranice sufinancirana je sredstvima tehničke pomoći Operativnog programa „Konkurentnost i kohezija“ iz Europskog fonda za regionalni razvoj.</div>
                {/* <p>Izrada internetske stranice sufinancirana je sredstvima tehničke pomoći Operativnog programa „Konkurentnost i kohezija“ iz Europskog fonda za regionalni razvoj.</p> */}
            </div>
            <div className="text-component">
                <h1>O nama</h1>
                <p>Dugo su godina Proleter i Slavonija, kako se naš klub zvao sve do proljeća 1967. godine, igrali na saveznoj drugoligaškoj sceni, a 1953. premijerno je izboren plasman u Prvu ligu bivše Jugoslavije. Najpoznatija imena i ljubimci publike u tadašnjem sastavu bili su Andrija Vekić i Franjo Rupnik. Proleter u jesen '58. seli sa šljakastog igrališta „Kraj Drave“ na stadion Gradski vrt, a 1962., u statusu drugoligaša, mijenja ime u Slavonija. Pet godina kasnije to se sportsko društvo raspada te klub uzima novo ime NK Osijek koje je ostalo do danas. Dotadašnje službene boje, crvenu i plavu, mijenjaju bijela i plava, koje su također ostale prepoznatljivo obilježje našeg nogometnog kolektiva. Prvi naslov prvaka nekadašnje Druge lige Sjever dolazi 1970. godine. Međutim, u pokušaju proboja do elitnog razreda zaustavio nas je Borac iz Banjaluke, 12 mjeseci kasnije Bijelo-plavi ponovno pokušavaju doći do Prve lige, ali se ispriječio skopski Vardar. Iduće kvalifikacije Osijek je dočekao 1973. kada su osječki nogometaši, preko Prištine, ponovno došli do završnog kruga. Onda se dogodilo i ono legendarno gostovanje u Zagrebu i rušenje rekorda stadiona u Maksimiru (prodano 64.128 ulaznica!), a iz Osijeka je došlo, prema nekim procjenama, čak dvadeset tisuća navijača! Ipak, jedanaesterci su, nakon remija 2:2 u 90 minuta igre, presudili u korist momčadi Zagreba. Ostalo je zapisano da je taj dvoboj najposjećeniji sportski događaj ikada održan na području Republike Hrvatske i teško je vjerovati da će u doglednoj budućnosti biti nadmašena brojka gledatelja na tribinama! </p>
            </div>
        </div>
    );
}

export default HomeComponent;
