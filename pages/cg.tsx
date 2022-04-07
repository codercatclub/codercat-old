import { css, cx } from "@emotion/css";
import React, { FC, useState } from "react";

const sectionBlock = css`
    background-color: pink;

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
    const sections = ["Section 1", "Section 2", "Section 3"];

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
                <Section header="Section 1">
                    <SectionBlock>
                        <h2>Header Example</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur doloribus nobis fugit, laudantium voluptas consectetur? Quam eum molestias aspernatur, quasi explicabo unde, laudantium ipsum quo saepe commodi est corrupti.</p>
                        <h2>
                            Another Header
                        </h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur doloribus nobis fugit, laudantium voluptas consectetur? Quam eum molestias aspernatur, quasi explicabo unde, laudantium ipsum quo saepe commodi est corrupti.</p>
                    </SectionBlock>
                    <SectionBlock>
                        <img src="lora/blender_LUFf4us1mw.jpg" />
                    </SectionBlock>
                    <SectionBlock>
                        <video controls src="lora/2021-10-15_21-21-27.mp4"></video>
                    </SectionBlock>
                    <SectionBlock>
                        <h2>Header Example</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur doloribus nobis fugit, laudantium voluptas consectetur? Quam eum molestias aspernatur, quasi explicabo unde, laudantium ipsum quo saepe commodi est corrupti.</p>
                    </SectionBlock>
                </Section>

                <Section header="Section 2">
                    <SectionBlock>
                        <h2>Header Example</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur doloribus nobis fugit, laudantium voluptas consectetur? Quam eum molestias aspernatur, quasi explicabo unde, laudantium ipsum quo saepe commodi est corrupti.</p>
                        <h2>
                            Another Header
                        </h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur doloribus nobis fugit, laudantium voluptas consectetur? Quam eum molestias aspernatur, quasi explicabo unde, laudantium ipsum quo saepe commodi est corrupti.</p>
                    </SectionBlock>
                    <SectionBlock>
                        <img src="lora/bw2.jpg" />
                    </SectionBlock>
                    <SectionBlock>
                        <video controls src="lora/BackZoom.mp4"></video>
                    </SectionBlock>
                    <SectionBlock>
                        <h2>Header Example</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur doloribus nobis fugit, laudantium voluptas consectetur? Quam eum molestias aspernatur, quasi explicabo unde, laudantium ipsum quo saepe commodi est corrupti.</p>
                    </SectionBlock>
                </Section>

                <Section header="Section 3">
                    <SectionBlock>
                        <h2>Header Example</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur doloribus nobis fugit, laudantium voluptas consectetur? Quam eum molestias aspernatur, quasi explicabo unde, laudantium ipsum quo saepe commodi est corrupti.</p>
                        <h2>
                            Another Header
                        </h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur doloribus nobis fugit, laudantium voluptas consectetur? Quam eum molestias aspernatur, quasi explicabo unde, laudantium ipsum quo saepe commodi est corrupti.</p>
                    </SectionBlock>
                    <SectionBlock>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam tenetur doloribus nobis fugit, laudantium voluptas consectetur? Quam eum molestias aspernatur, quasi explicabo unde, laudantium ipsum quo saepe commodi est corrupti.</p>
                    </SectionBlock>
                    <SectionBlock>
                        <img src="lora/dance_01.jpg" />
                    </SectionBlock>
                    <SectionBlock>
                        <img src="lora/dance_02.jpg" />
                    </SectionBlock>
                </Section>
            </div>
        </div>
    )
}

export default Cg;