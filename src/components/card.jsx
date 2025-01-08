


export function Card(){

    const cards = [
        {
            title: "Hanuman",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-0-1z5531939/portrait/1920x770235581e081ff4523883b197a1773871e.jpg",
            description: "A mythological action film depicting Lord Hanuman's heroic journey, exploring his powers, devotion, and fight against evil forces for the greater good.",
            rating:"★★★★★",
            type:"Romantic",
        },
        {
            title: "HighWay Love",
            imgSrc: "https://m.media-amazon.com/images/M/MV5BMWUzMGM2NGMtOTk3YS00M2MyLTliYzYtZWMwZTE0OGEwNjZiXkEyXkFqcGc@._V1_QL75_UX582_.jpg",
            description: "Highway Love is a romantic web series about two strangers on a road trip, discovering love, laughter, and self-discovery through unexpected adventures.",
            rating:"★★★★☆",
            type:"Romantic",
        },
        {
            title: "DJ",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-0-2714/portrait/1920x7700b2a7fcc9ade4575875ef98e0992dd52ce1c05d80b884a18be2c0fa345d1dc01.jpg",
            description: "DJ: Duvvada Jagannadham stars Allu Arjun as a righteous Brahmin priest turned vigilante, fighting crime with wit, action, and style in a gripping, entertaining tale.",
            rating:"★★★☆☆",
            type:"Action",
        },
        {
            title: "Sam Bahadur",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-0-1z5500337/portrait/1920x770fc632b58092149119627deb30742de8c.jpg",
            description: " A biopic on Field Marshal Sam Manekshaw, showcasing his valor, leadership, and legacy as India's celebrated war hero.",
            rating:"★★★★★",
            type:"Drama",
        },
        {
            title: "Kerala Story",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-0-1z5512788/portrait/1920x77090f6c6bf5525451eb76ea517b1b759a847443b98e0194da6ac8635bd299e90459a447cd41c554a2a96462c0325aced16.jpg",
            description: "A hard-hitting drama exploring the lives of women radicalized into extremism, uncovering a shocking and emotional narrative.",
            rating:"★★★★☆",
            type:"Drama",
        },
        {
            title: "Simmba",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-0-35166/portrait/1920x770bdf8040ace6e4bb49f465efef9f3476cac6207cdfa58468b90683ddc22b55331.jpg",
            description: "A rogue cop’s journey from corruption to justice, driven by love, duty, and action-packed vengeance.",
            rating:"★★★★☆",
            type:"Action",
        },
        {
            title: "Gutur Gu",
            imgSrc: "https://m.media-amazon.com/images/M/MV5BODk2MzUzYjEtNGU4Mi00N2EyLWFlNzUtZjk1YjQ2MWMzOGE4XkEyXkFqcGc@._V1_QL75_UX262.5_.jpg",
            description: "A light-hearted web series capturing the hilarious misadventures of a quirky family in their day-to-day life.",
            rating:"★★★★☆",
            type:"Drama",
        },
        {
            title: "Gadar 2",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-0-1z5437988/portrait/1920x7709f579ba4343d4bbeb0dc433bbf27cf6a2f8f98daf23e4fc8965ae3deb02b677c.jpg",
            description: " The epic continuation of Tara Singh's saga, reuniting with his son amidst war and emotional turmoil.",
            rating:"★★★★☆",
            type:"Action, Romantic",
        },
        {
            title: "Karthikeya 2",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-101-10z5262191/portrait/1920x770136139a5a429477d91f21ac3bac68086.jpg",
            description: "A thrilling adventure film following Dr. Karthikeya's quest to uncover ancient mysteries, battling dark forces tied to a sacred artifact with intense action and suspense.",
            rating:"★★★★☆",
            type:"Drama",
        },
        {
            title: "Ishq Express",
            imgSrc: "https://m.media-amazon.com/images/M/MV5BMDA2NGM4ZGEtYWQxNS00YTZiLWJlY2YtNGMxNjEwZDJmYjQzXkEyXkFqcGc@._V1_QL75_UX187.5_.jpg",
            description: "A charming web series following two strangers who find love during a train journey, filled with heartfelt moments",
            rating:"★★★★☆",
            type:"Drama",
        },
        {
            title: "Taj",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_336,h_504,c_scale,f_webp,q_auto:eco/resources/0-6-4z5311140/portrait/1920x7706fa5468b209f4c4eaa80ef0e00e1eeb0.jpg",
            description: "A historical drama delving into the Mughal empire's power struggles, love, and betrayal within the royal family.",
            rating:"★★★★☆",
            type:"Drama",
        },
        {
            title: "Abhay 3",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-1298/portrait/1920x7701a10e531878245afabd0b717dc59f7d704e69a3112ed4e4d812fe243953d6163.jpg",
            description: "A gritty thriller where a determined cop faces new psychological and criminal challenges, pushing his limits.",
            rating:"★★★☆☆",
            type:"Drama",
        },
        {
            title: "The Kashmir Files",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-4z5399186/portrait/1920x7708d6504e472c942088cf1e60f69c2c3da518a206116234752ae99f12fc397d9c4.jpg",
            description: "A heart-wrenching film depicting the exodus of Kashmiri Pandits, unveiling hidden truths of history.",
            rating:"★★★★☆",
            type:"Drama",
        },
        {
            title: "Never Kiss Your BestFriend",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-2356/portrait/1920x770ffdfc616c75840cf95545cd67e3476d6e2fb2ce4623c4ebaa29b36ba97edf983.jpg",
            description: "A light-hearted series exploring the complexities of love and friendship between two inseparable best friends.",
            rating:"★★★★☆",
            type:"Drama",
        },
        {
            title: "Qubool Hai",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-3190/portrait/1920qubool1b75d545d0f2432fa474742b22eddf37.jpg",
            description: " A romantic drama unraveling love, misunderstandings, and family bonds amidst cultural differences.",
            rating:"★★★☆☆",
            type:"Drama",
        },
        {
            title: "Mom",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-2006/portrait/1920x770406b971eac1346d7ac5097cbdf13607d5fbb3b26c0074282b0e9476c88075d97.jpg",
            description: "A gripping tale of a mother seeking justice for her daughter with unflinching determination.",
            rating:"★★★★☆",
            type:"Drama",
        },
        {
            title: "Jamai 2.0",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-2007/portrait/062007incover1527602585.jpg",
            description: " A romantic thriller with love, revenge, and secrets as Siddharth uncovers hidden truths.",
            rating:"★★★☆☆",
            type:"Drama",
        },
        {
            title: "State Of Sieze",
            imgSrc: "https://akamaividz2.zee5.com/image/upload/w_347,h_521,c_scale,f_webp,q_auto:eco/resources/0-6-2597/portrait/1920x7701541400686.jpg",
            description: "A nail-biting series based on true events of terror attacks and the bravery of Indian commandos.",
            rating:"★★★☆☆",
            type:"Drama",
        },
        // ...other cards
    ];
    return(
        <div className="flex justify-center gap-4 flex-wrap pt-4 sm:bg-gray-600 md:bg-orange-300 lg:bg-yellow-200 xl:bg-white small:bg-black">
            {cards.map((card,index)=>(
                <div key={index} className="parent p-4 group  bg-cyan-300 w-72 rounded-2xl transition-transform shadow-custom hover:scale-105 hover:bg-gradient-to-tl from-[goldenrod] via-[lightpink] to-[white]">
                    <img loading="lazy" className="h-72 w-64 rounded-2xl shadow-custom" src={card.imgSrc} alt="lifestyleeee" />
                    <div className="flex flex-col gap-2">
                        <span className="text-2xl text-yellow-500 font-bold ">{card.rating}</span>
                        <span className=" text-white py-1 px-2 rounded text-sm bg-blue-500 w-fit font-semibold group-hover:bg-red-700">{card.type}</span>
                    </div>

                   
                    <div className="details mt-2">
                        <h2 className="font-bold mt-2 mb-3 border-y-2 inline">{card.title}</h2>
                        <p className="font-medium text-wrap text-slate-600 group-hover:text-white">{card.description}</p>
                    </div>

                </div>
            ))}
        </div>
    )
}