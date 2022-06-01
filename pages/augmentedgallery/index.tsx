import { css, cx } from "@emotion/css";
import React, { FC, useState } from "react";

const sectionBlock = css`
    background-color: white;

    > img {
        object-fit: cover;
        width: 100%;
    }

    > video {
        object-fit: cover;
        height: 100%;
        overflow: hidden;
        max-width: 100%;
    }
`

const SectionBlock: FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => (
    <div className={sectionBlock}>
        {children}
    </div>
)

const section = css`
    margin: 30px 0 0 0;
    > h1 {
        margin: 0 0 10px 0;
    }
`

const sectionBody = css`
    height: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
    margin: 0 0 30px 0;
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const Section: FC<{ children: JSX.Element | JSX.Element[], header: string }> = ({ children, header }) => (
    <div className={section} id={header}>
        <h1>{header}</h1>
        <div className={sectionBody}>
            {children}
        </div>
    </div>
)

const layout = css`
    @media (max-width: 768px) {
        margin: 10px;
    }
`

const menu = css`
    position: fixed;
    height: 100%;
    margin: 20px 0 0 0;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    font-size: 18px;

    > li {
        margin: 3px 0 3px 0;
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 50px;
        flex-direction: row;
        padding: 10px 0 10px 10px;
        margin: 0;
        top: 0;
        background-color: white;
        * {
            margin: 0 15px 0 0;
        }
    }
`

const menuBtn = css`
    text-decoration: underline;
    :hover {
        cursor: pointer;
    }
`
const menuBtnActive = css`
    color: red;
`

const sectionList = css`
    padding-left: 175px;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
        padding: 40px 0 0 0;
    }
`;

const Cg = () => {
    const [section, setSection] = useState('');
    const sections = ["GYROID", "MARINA", "KAMAJI", "ESCAPE", "PHYSICAL", "ST. PETER", "REGENERATE", "PRINTS"];

    const menuItems = sections.map(name => (
        <li>
            <div
                key={name}
                className={cx({
                    [menuBtn]: true,
                    [menuBtnActive]: section === name
                })} onClick={(event) => {
                    const list = document.querySelector('#section-list')?.children;

                    if (list) {
                        Array.from(list).forEach(el => {
                            if (el.id === name) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        })
                    }

                    setSection(name);

                }}>{name}</div>
        </li>
    ))

    return (
        <div className={layout}>

            <ul className={menu}>
                {menuItems}
            </ul>

            <div className={sectionList} id="section-list">
                <Section header="GYROID">
                    <SectionBlock>
                        <h2>SHELL</h2>
                        <p>Gyroid formation carved into the skull. A few different designs available and on exhibit before implantation</p>
                        <img src="augmented/gyroid1.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/gyroid2.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>IMPLANTED</h2>
                        <p>First when I exited cyberspace, I saw it in my shadows. Long and strangely elf like, metallic and cold. And then when I brought myself to look in the mirror...</p>
                        <img src="augmented/gyroidshadow.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/gyroidskull.JPG" />
                    </SectionBlock>
                </Section>
                <Section header="MARINA">
                    <SectionBlock>
                        <h2>BATHROOM TRICKS</h2>
                        <p>We went to the bathroom at Fabrika together, always in twos. Admiring the red lighting filling and bouncing through the space.
                            Maybe we spent too long inside because soon I noticed Marina's nails were..growing...</p>
                        <img src="augmented/CLAWS.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/shoes.JPG" />
                        <h2>THE WALLS</h2>
                        <p>The walls started pulsating into us, overlapping, alternating, she stood up to dance between them.</p>
                    </SectionBlock>
                    <SectionBlock>
                        <h2>STRAY</h2>
                        <p>Two stray doggies followed us from the highway to home, clearly enamored by Marina's new gown. They played with eachother viciously to get our attention, so that
                            maybe we would take them home, adopt them into our care. I am surprised that this dress never seems to get too dirty</p>
                        <img src="augmented/gown.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/digidress.JPG" />
                    </SectionBlock>
                </Section>
                <Section header="KAMAJI">
                    <SectionBlock>
                        <h2>REACH</h2>
                        <p>Prototyped for easy access to [whatever you can dream of within 6 feet], extending limbs to reach, gather, organize, fight, dance, in parallel.</p>
                        <img src="augmented/kamaji1.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>GATHER</h2>
                        <h2>ORGANIZE</h2>
                        <img src="augmented/kamaji4.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/kamaji2.JPG" />

                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/kamaji3.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>INSTALL</h2>
                        <p>Complicated human installation process, since part of the torso must be replaced. Interface of limbs to human brain must be added as a module, for simultaneous control of six limbs.
                            Sally here seems to be doing excellent. Roses, Pills, Shrine, in reach.
                        </p>
                        <img src="augmented/sally1.JPG" />
                    </SectionBlock>
                </Section>
                <Section header="ESCAPE">
                    <SectionBlock>
                        <h2>TESTING IN VOIDS</h2>
                        <img src="augmented/windowh.PNG" />
                        <img src="augmented/windowd.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>COME WITH ME</h2>
                        <p>The escape was staged in advance. Lora knew what she had to do, and designed her chords accordingly. Prototyped with the strength and flexibility to grab her subject. Lora first created them
                            in her metaverse, then tested them in the white voids, and then, Earth.  </p>
                        <img src="augmented/window.JPG" />
                        <p> Go with her.  </p>
                        <p> Go with her.  </p>
                        <p> Go with her.  </p>
                    </SectionBlock>
                    <SectionBlock>
                    </SectionBlock>
                </Section>
                <Section header="PHYSICAL">
                    <SectionBlock>
                        <img src="augmented/arms1.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>TO BE LORA</h2>
                        <p> Physically  </p>
                        <p> Digitally  </p>
                        <p> Physical being</p>
                        <p> Digital form</p>
                        <p> Physical or Digital  </p>
                        <p> Phygital  </p>
                        <p> No boundary  </p>
                        <img src="augmented/armsd.JPG" />
                        <img src="augmented/armsd2.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                    </SectionBlock>
                </Section>
                <Section header="ST. PETER">
                    <SectionBlock>
                        <h2>
                            ON CHARLIZE THERON'S HEAD
                        </h2>
                        <p>
                            It was the closest match we could find in the library. Don't mind the iPhone.
                        </p>
                        <img src="augmented/kinna2.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>
                            ON CUSTOMER
                        </h2>
                        <p>
                            The fit of the crown turned out pretty good, if you look closely you can see that he is smiling with his eyes.
                        </p>
                        <img src="augmented/kinna1.JPG" />
                    </SectionBlock>
                </Section>
                <Section header="REGENERATE">
                    <SectionBlock>
                        <h2>
                            4 OF US
                        </h2>
                        <p>
                            Sometimes it's healthy. Tear yourself apart to allow for a new biome to take it's place. Some use fasting and extreme temperatures
                            to trigger the regeneration processes, but here is another non documented non tested approach.
                        </p>
                        <img src="augmented/holes3.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/holes1.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>
                            AND OF COURSE PROTOTYPE FIRST
                        </h2>
                        <img src="augmented/holes2.JPG" />
                    </SectionBlock>
                </Section>
                <Section header="PRINTS">
                    <SectionBlock>
                        <h2>
                            PHASE 1
                        </h2>
                        <p> We begin in the black voids, with infinite material and possibilities. </p>
                        <img src="augmented/mask3.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>
                            PHASE 2
                        </h2>
                        <p> Once satisfied, layer by layer we bring it to the dimension in front of us. </p>
                        <img src="augmented/mask1.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>
                            PHASE 3
                        </h2>
                        <p> Phase of pure Shock. Can you believe? We were staring at this in the void for hours and now we can TOUCH it. We can touch what Lora touched. </p>
                        <img src="augmented/mask2.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>
                            PHASE 4
                        </h2>
                        <p> A debut at Bar Chatsubo. No longer humanoid, worthy of service.</p>
                        <img src="augmented/mask4.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>
                            PROTECTIVE CASING
                        </h2>
                        <p> Repeat phases 1:4. This time with an initial 3D Scan for the satisfaction of a perfect fit when you have a flat skull. </p>
                        <img src="augmented/helmet1.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/helmet2.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/helmet3.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>
                            ADORNMENT
                        </h2>
                        <p> Repeat phases 1:4 </p>
                        <img src="augmented/chest0.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/chest1.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/chest2.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>
                            CLAWS
                        </h2>
                        <p> Repeat phases 1:4. Printed in multiple sizes, statistically shown to fit at least the thumb or pinky. Designed with utilitarian functions in mind.</p>
                        <img src="augmented/nails1.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/nails3.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/nails2.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>
                            GEARS
                        </h2>
                        <p> She told me she thought about dollification, in the cyborg sense. What would this doll want from you, and for herself?</p>

                        <img src="augmented/gears3.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <video controls src="augmented/gears.MP4"></video>
                    </SectionBlock>
                    <SectionBlock>
                        <p> We developed a system to control, to place the gears where the functionality was needed. A special port that needed to be covered or extended.</p>
                        <img src="augmented/gears2.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <p> Once outside the realms of black void, processes get much slower and tedious. Without much control.</p>

                        <img src="augmented/gearsmaking.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/gears4.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/gears5.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <p> And we imagined a martian wedding, gears locked and moving together.</p>
                        <img src="augmented/gears1.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <h2>
                            CYBORG FAM
                        </h2>
                        <p> And when the family comes together.</p>
                        <img src="augmented/together1.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/together2.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/together3.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/together4.JPG" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="augmented/together5.JPG" />
                    </SectionBlock>
                </Section>

            </div>
        </div>
    )
}

export default Cg;