import { useTranslation } from "react-i18next";
import { Loading } from "../components/Loading";
import { LayoutGroup, motion } from 'framer-motion'
import { Hero } from "../components/Hero";
import { gql, useQuery } from "@apollo/client";
import { useContext } from "react";
import LocaleContext from "../contexts/LocaleContext";
import { Card } from "../components/Card";

const divAnim = {
    visible: { opacity: 1, display: "flex" },
    hidden: { opacity: 0, display: "none" },
}


const GET_PROJECTS_QUERY = gql`
query MyQuery($locale: [Locale!]!) {
  projects(stage: PUBLISHED, locales: $locale) {
    id
    title
    siteUrl
    githubUrl
    description
    image {
      url
    }
    langs {
      ... on LangTag {
        id
        name
        langUrl {
          url
        }
      }
    }
  }
}

`

interface GetProjectsQueryResponse {
    projects: {
        id: string
        title: string
        siteUrl: string
        githubUrl: string
        description: string
        image: {
            url: string
        }
        langs: {
            id: string;
            name: string;
            langUrl: {
                url: string
            }
        }[]
    }[]
}


export function Home() {

    const { t } = useTranslation();

    const locContext = useContext(LocaleContext)

    // const { data } = useQuery<GetProjectsQueryResponse>(GET_PROJECTS_QUERY,{
    //     variables: { locale: [locContext.locale] }
    // })

    const data = {
        "projects": [
            {
                "id": "cl6wgpwivhcmb0disx0ix0ive",
                "title": "Flor de Chita E-commerce",
                "siteUrl": "https://flordechitateste.herokuapp.com/",
                "githubUrl": "https://google.com",
                "description": "Site E-commerce feito para uma loja de roupas.",
                "image": {
                    "url": "https://media.graphassets.com/1Nfp8cTQRfK0nsIySAHp"
                },
                "langs": [
                    {
                        "id": "cl6wgfkaaj7ss0biz8dhpm1w0",
                        "name": "Django",
                        "langUrl": {
                            "url": "https://media.graphassets.com/DR7njt1tSkeTHrZZT4er"
                        }
                    },
                    {
                        "id": "cl6wgk1bfhc0u0ck38l2oukzb",
                        "name": "HTML+CSS+JS",
                        "langUrl": {
                            "url": "https://media.graphassets.com/ffCwkcnJQS296LA8sjE7"
                        }
                    },
                    {
                        "id": "cl78bu48ed7650dim30cgs89i",
                        "name": "Postgresql",
                        "langUrl": {
                            "url": "https://media.graphassets.com/M0aGXKqZQQSIMREYtnDp"
                        }
                    }
                ]
            },
            {
                "id": "cl6wgpwivhcmb0disx0ix0ive",
                "title": "Flor de Chita E-commerce",
                "siteUrl": "https://flordechitateste.herokuapp.com/",
                "githubUrl": null,
                "description": "Site E-commerce feito para uma loja de roupas.",
                "image": {
                    "url": "https://media.graphassets.com/1Nfp8cTQRfK0nsIySAHp"
                },
                "langs": [
                    {
                        "id": "cl6wgfkaaj7ss0biz8dhpm1w0",
                        "name": "Django",
                        "langUrl": {
                            "url": "https://media.graphassets.com/DR7njt1tSkeTHrZZT4er"
                        }
                    },
                    {
                        "id": "cl6wgk1bfhc0u0ck38l2oukzb",
                        "name": "HTML+CSS+JS",
                        "langUrl": {
                            "url": "https://media.graphassets.com/ffCwkcnJQS296LA8sjE7"
                        }
                    },
                    {
                        "id": "cl78bu48ed7650dim30cgs89i",
                        "name": "Postgresql",
                        "langUrl": {
                            "url": "https://media.graphassets.com/M0aGXKqZQQSIMREYtnDp"
                        }
                    }
                ]
            },
            {
                "id": "cl6wgpwivhcmb0disx0ix0ive",
                "title": "Flor de Chita E-commerce",
                "siteUrl": "https://flordechitateste.herokuapp.com/",
                "githubUrl": null,
                "description": "Site E-commerce feito para uma loja de roupas.",
                "image": {
                    "url": "https://media.graphassets.com/1Nfp8cTQRfK0nsIySAHp"
                },
                "langs": [
                    {
                        "id": "cl6wgfkaaj7ss0biz8dhpm1w0",
                        "name": "Django",
                        "langUrl": {
                            "url": "https://media.graphassets.com/DR7njt1tSkeTHrZZT4er"
                        }
                    },
                    {
                        "id": "cl6wgk1bfhc0u0ck38l2oukzb",
                        "name": "HTML+CSS+JS",
                        "langUrl": {
                            "url": "https://media.graphassets.com/ffCwkcnJQS296LA8sjE7"
                        }
                    },
                    {
                        "id": "cl78bu48ed7650dim30cgs89i",
                        "name": "Postgresql",
                        "langUrl": {
                            "url": "https://media.graphassets.com/M0aGXKqZQQSIMREYtnDp"
                        }
                    }
                ]
            }
        ]
    }


    return (
        <>
            <motion.div className="logo-container" initial="visible" whileInView="hidden" viewport={{ once: true }} variants={divAnim} transition={{ opacity: { delay: 3 }, display: { delay: 5 }, duration: 9 }}>
                <Loading />
            </motion.div>

            {/* <Header /> */}
            <main className="container">

                <Hero />

                <div className="section section-large">

                    <div className="flex flex-between gap-md">
                        <div className="stiky-texts">
                            <h2>{t('desc.text.top')}</h2>
                            <p>{t('desc.text.bottom')}</p>
                        </div>

                        <div className="flex flex-column" style={{gap: "60px"}}>
                            <div className="card-lang">
                                <h3>Python</h3>
                                {/* <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/6258278907137d656180e11a_diego.png" loading="lazy" alt="" /> */}
                                <div className="content">
                                    {/* <h1 className="headline-32">Diego Fernandes</h1> */}
                                    {/* <p className="p-nlw-16 educator">Co-fundador e CTO na Rocketseat</p> */}
                                    {/* <p className="p-text-14-nlw">Programador há 11 anos com foco nas melhores tecnologias de desenvolvimento web &amp; mobile. Apaixonado por educação e por mudar a vida das pessoas através da programação. Mais de 500.000 pessoas já passaram por um dos seus treinamentos.</p> */}
                                </div>
                            </div>

                            <div className="card-lang">
                                <h3>Django</h3>
                                {/* <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/6258278907137d656180e11a_diego.png" loading="lazy" alt="" /> */}
                                <div className="content">
                                    {/* <h1 className="headline-32">Diego Fernandes</h1> */}
                                    {/* <p className="p-nlw-16 educator">Co-fundador e CTO na Rocketseat</p> */}
                                    {/* <p className="p-text-14-nlw">Programador há 11 anos com foco nas melhores tecnologias de desenvolvimento web &amp; mobile. Apaixonado por educação e por mudar a vida das pessoas através da programação. Mais de 500.000 pessoas já passaram por um dos seus treinamentos.</p> */}
                                </div>
                            </div>

                            <div className="card-lang">
                                <h3>Typescript</h3>
                                {/* <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/6258278907137d656180e11a_diego.png" loading="lazy" alt="" /> */}
                                <div className="content">
                                    {/* <h1 className="headline-32">Diego Fernandes</h1> */}
                                    {/* <p className="p-nlw-16 educator">Co-fundador e CTO na Rocketseat</p> */}
                                    {/* <p className="p-text-14-nlw">Programador há 11 anos com foco nas melhores tecnologias de desenvolvimento web &amp; mobile. Apaixonado por educação e por mudar a vida das pessoas através da programação. Mais de 500.000 pessoas já passaram por um dos seus treinamentos.</p> */}
                                </div>
                            </div>

                            <div className="card-lang">
                                <h3>React</h3>
                                {/* <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/6258278907137d656180e11a_diego.png" loading="lazy" alt="" /> */}
                                <div className="content">
                                    {/* <h1 className="headline-32">Diego Fernandes</h1> */}
                                    {/* <p className="p-nlw-16 educator">Co-fundador e CTO na Rocketseat</p> */}
                                    {/* <p className="p-text-14-nlw">Programador há 11 anos com foco nas melhores tecnologias de desenvolvimento web &amp; mobile. Apaixonado por educação e por mudar a vida das pessoas através da programação. Mais de 500.000 pessoas já passaram por um dos seus treinamentos.</p> */}
                                </div>
                            </div>

                            <div className="card-lang">
                                <h3>Python</h3>
                                {/* <img src="https://global-uploads.webflow.com/61d83a2ebb0ae01ab96e841a/6258278907137d656180e11a_diego.png" loading="lazy" alt="" /> */}
                                <div className="content">
                                    {/* <h1 className="headline-32">Diego Fernandes</h1> */}
                                    {/* <p className="p-nlw-16 educator">Co-fundador e CTO na Rocketseat</p> */}
                                    {/* <p className="p-text-14-nlw">Programador há 11 anos com foco nas melhores tecnologias de desenvolvimento web &amp; mobile. Apaixonado por educação e por mudar a vida das pessoas através da programação. Mais de 500.000 pessoas já passaram por um dos seus treinamentos.</p> */}
                                </div>
                            </div>


                        </div>
                    </div>
                </div>


                {/* <div className="section" style={{ height: "100vh" }}>
                    <h2>{t('desc.skills')}</h2>
                </div> */}

                <div className="section">
                    <h2>{t('desc.proj')}</h2>
                    {/* <div>
                        <motion.hr style={{ border: "none", borderBottom: "1px solid #fff" }} initial={{ rotateY: 90 }} whileInView={{ rotateY: 0 }} transition={{ duration: 1 }} />
                    </div> */}

                    <motion.ul
                        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: "30px", marginTop: "50px" }}>


                        {
                            data &&

                            data?.projects.map((project, count) => {
                                return (
                                    <LayoutGroup key={count} id={`card-${count}`}>
                                        <Card id={project.id} options={project.langs} siteUrl={project.siteUrl} ghUrl={project.githubUrl} layout="position" layoutId={`card-${count}`} title={project.title} description={project.description} key={project.id} initial={{ opacity: 0, y: 150 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: count * .2 }} viewport={{ once: true }} />
                                    </LayoutGroup>
                                )
                            })
                        }

                    </motion.ul>

                    {/* <div>
                        <a href="">Ver Mais</a>
                    </div> */}

                </div>


            </main>
        </>
    )
}