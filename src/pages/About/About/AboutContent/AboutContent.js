import React from 'react'
import img1 from '../../../../assets/images/aboutPageImages/about-content-1.jpeg'
import img2 from '../../../../assets/images/libPhoto/libBackgrounds/pahraLibBackground.jpg'
import img3 from '../../../../assets/images/libPhoto/libBackgrounds/bilovoLibBackground.jpg'
import img4 from '../../../../assets/images/backgroundImages/aboutZvz.jpeg'
import AboutContentClubs from "./AboutContentClubs/AboutContentClubs";
import AboutLibraries from "./AboutContentLibraries/AboutLibraries";




function AboutContent() {
    return (
        <div className="about-content">
            <div className="about-content__body _container">
                <div className="about-main _block">
                    <div className="about-main__title">
                        <span className="about-main__title_text _subtitle">Общая информация: </span>
                    </div>
                    <div className="about-main-content">
                        <div className="about-main-content__info">
                            <p className="about-main-content__info_text">Дома культуры и библиотеки для всех поколений были неотъемлемой частью жизни. Развитие творческого потенциала – также важно, как и обучение в школе общественным наукам. Наша задача привлечь как можно больше детей, подростков, молодежь и людей старшего поколения к искусству, мировой, народной и современной культуре в целом, посредством применений современных течений и инновационных технологий. Мы видим Дом культуры «Звёздный», с его структурными подразделениями, привлекательным и популярным местом проведения досуга для жителей не только новой, но и старой Москвы.</p>
                        </div>
                        <div className="about-main-content__image">
                            <img className="about-main-content__image_img" src={img1} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="about-unification _block">
                    <div className="about-unification__title">
                        <span className="about-unification__title_text _subtitle">Информация об объединении: </span>
                    </div>
                    <div className="about-unification-content">
                        <div className="about-unification-content__info">
                            <p className="about-unification-content__info_text">В январе 2021 года, на территории п. Краснопахорское в городе Москве, путем слияния нескольких юридических лиц, был организован культурный комплекс Муниципальное бюджетное учреждение культуры «Дом культуры «Звёздный», в состав которого входят обособленные структурные подразделения: Дом культуры «Юбилейный» и Краснопахорская библиотечная система.</p>
                        </div>
                        <div className="about-unification-image-section">
                            <div className="about-unification-image-section__block-1">
                                <img className="about-unification-image-section__block-1_img" src={img3} alt=""/>
                            </div>
                            <div className="about-unification-image-section__block-2">
                                <div className="about-unification-image-section__image">
                                    <img className="about-unification-image-section__image_img" src={img2} alt=""/>
                                </div>
                                <div className="about-unification-image-section__image">
                                    <img className="about-unification-image-section__image_img" src={img4} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="about-unification-content__info-2">
                            <p className="about-unification-content__info-2_text">Дом культуры «Звездный», с его обособленными структурными подразделениями, является центром досуга населения в поселении Краснопахорское. Здесь работают творческие, любящие свое дело специалисты, которые смогли создать теплую и добрую атмосферу, комфортные и уютные условия для занятий, общения и отдыха более чем в 30 клубных формирований, на бюджетной и внебюджетной основе, для жителей разного возраста по направлениям: раннее и интеллектуальное развитие, театральное искусство, танцевально-спортивное направление, декоративно-прикладное творчество и изобразительное искусство, направления оригинального жанра, вокальное искусство и музыкальное развитие, а также проект Мэра Москвы «Группа «Гимнастика»долголетие», для лиц старшего поколения.</p>
                        </div>
                    </div>
                </div>
                {<AboutContentClubs />}
                {<AboutLibraries />}
            </div>
        </div>
    );
}

export default AboutContent;