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
            <div className="main_content">
                <h1>Dobrodošli!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel lectus tempor, maximus nunc in, ultrices felis. Aliquam nec fermentum mi, fringilla vehicula neque. Sed et mollis odio. Curabitur pretium, sem in pretium tincidunt, eros massa rhoncus eros, aliquam pellentesque ex enim vitae augue. Aliquam erat volutpat. Suspendisse rutrum convallis commodo. Aenean quis mauris hendrerit, ultrices risus ac, efficitur dolor. Morbi consectetur, lacus ut volutpat egestas, libero nibh convallis orci, id porta ligula eros eu nibh. Suspendisse potenti. Vestibulum vitae hendrerit ex, vitae auctor nunc. Quisque vel ex eu diam vestibulum vestibulum a eget sapien. Etiam ac interdum nibh. Nulla tempor rutrum tellus, non elementum mi gravida sit amet. Ut rutrum vulputate accumsan. Morbi egestas neque enim, et facilisis nulla pretium vitae. Cras posuere ut lectus eleifend pharetra.

Aliquam ullamcorper mi at arcu efficitur, sit amet aliquet ligula efficitur. Nulla facilisi. Nunc pellentesque pretium mi vitae vulputate. Vestibulum vitae orci ante. Vivamus vel massa sit amet augue blandit cursus id sit amet mi. Pellentesque ut nisi vitae nibh vulputate vehicula. Cras at interdum orci. Nulla augue libero, ultrices in lobortis et, consequat eu eros. In commodo at quam eget sollicitudin. Morbi fermentum rutrum tortor non pretium. Phasellus volutpat sapien in quam tincidunt fermentum.

Nullam quis scelerisque est. Morbi in imperdiet ipsum. Fusce sit amet nibh ullamcorper lorem lobortis varius. Suspendisse ac consequat elit, sit amet vehicula diam. Curabitur aliquet id dui sed commodo. Maecenas sed placerat eros, non dapibus lectus. Nunc in quam vitae ipsum accumsan volutpat vel sit amet urna. Integer nec lacus ut quam tincidunt facilisis. Sed euismod aliquam accumsan. Phasellus lobortis mattis ornare. Maecenas vel dignissim dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aliquam erat volutpat. Fusce vel lacus ipsum. Mauris fringilla ante id nulla pulvinar, sed molestie orci finibus.</p>
            </div>
        </div>
    );
}

export default HomeComponent;
